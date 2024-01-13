// @ts-check
import { readFile, writeFile } from "fs/promises";
import { glob } from "glob";
import { dirname, join, resolve } from "path";
import Prettier, { format } from "prettier";
import { fileURLToPath } from "url";

/** @type {string[]} */
const workspaces = [];

const __filename = fileURLToPath(import.meta.url);
const WORKSPACE_ROOT = resolve(dirname(__filename), "..");
const PACKAGE_JSON = "package.json";
const TS_CONFIG = "tsconfig.json";

const prettierConfig = await Prettier.resolveConfig(
  join(WORKSPACE_ROOT, TS_CONFIG),
);

try {
  const rootPkg = JSON.parse(
    await readFile(join(WORKSPACE_ROOT, PACKAGE_JSON), "utf-8"),
  );

  if (rootPkg.workspaces && Array.isArray(rootPkg.workspaces)) {
    workspaces.push(...rootPkg.workspaces);
  }
} catch (/** @type {any} */ err) {
  if (err?.code !== "ENOENT") {
    throw err;
  }
}

if (!workspaces.length) {
  console.error(`ERROR: no workspaces defined`);
  process.exit(1);
}

const packages = workspaces.flatMap(
  /** @param {string} workspaceEntry */
  (workspaceEntry) => glob.sync(workspaceEntry),
);

if (!packages.length) {
  console.error(`ERROR: no packages found in workspaces [${workspaces}]`);
  process.exit(1);
}

/** @typedef {{ path: string, packageJson: any }} RefInfo */
/** @type {Record<string, RefInfo>} */
const refs = {};

for (const pkg of packages) {
  const packageJsonPath = join(pkg, PACKAGE_JSON);
  let packageJson;

  try {
    packageJson = JSON.parse(await readFile(packageJsonPath, "utf8"));
  } catch (/** @type {any} */ err) {
    if (err?.code === "ENOENT") {
      continue;
    }
    throw err;
  }

  if (!packageJson.name || !packageJson.version) {
    throw new Error(`expected every package to have a name and version`);
  }

  refs[packageJson.name] = {
    path: packageJsonPath,
    packageJson,
  };
}

/**
 * @param {Record<string, string>|undefined} deps
 * @returns {boolean}
 */
function updateDeps(deps) {
  if (!deps) {
    return false;
  }
  let changed = false;
  for (const key of Object.keys(deps)) {
    const crossRef = refs[key];
    if (!crossRef) {
      continue;
    }
    const version = /^([~^])?(.*)$/.exec(deps[key]);
    if (!version) {
      throw new Error(`unexpected version format "${deps[key]}"`);
    }
    if (version[2] === crossRef.packageJson.version) {
      continue;
    }
    deps[key] = (version[1] ?? "") + crossRef.packageJson.version;
    changed = true;
  }
  return changed;
}

/** @type {Set<RefInfo>} */
const updated = new Set();

for (const pkg of Object.values(refs)) {
  const didUpdate =
    updateDeps(pkg.packageJson.dependencies) ||
    updateDeps(pkg.packageJson.devDependencies) ||
    updateDeps(pkg.packageJson.peerDependencies);

  if (didUpdate) {
    updated.add(pkg);
  }
}

for (const pkg of updated) {
  await writeFile(
    pkg.path,
    await format(JSON.stringify(pkg.packageJson), {
      filepath: pkg.path,
      ...prettierConfig,
    }),
  );
}
