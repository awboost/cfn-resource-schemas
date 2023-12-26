// @ts-check
import { spawnSync } from "child_process";
import { readFile, writeFile } from "fs/promises";
import glob from "glob";
import { dirname, join, relative, resolve } from "path";
import Prettier from "prettier";

const allArgs = process.argv.slice(2);
const seperatorIndex = allArgs.indexOf("--");

const workspaces =
  seperatorIndex < 0 ? allArgs : allArgs.slice(0, seperatorIndex);

const tscArgs = seperatorIndex < 0 ? [] : allArgs.slice(seperatorIndex + 1);

const WORKSPACE_ROOT = resolve(".");
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

/** @type {Record<string, { path: string, deps: string[], tsConfig: any}>} */
const refs = {};

for (const pkg of packages) {
  let tsConfig;
  const deps = [];

  const packageTsConfigPath = join(pkg, TS_CONFIG);
  try {
    tsConfig = JSON.parse(await readFile(packageTsConfigPath, "utf-8"));
    if (!tsConfig.compilerOptions?.composite) {
      console.warn(`skipping "${pkg}" because composite is not turned on`);
      continue;
    }
  } catch (/** @type {any} */ err) {
    if (err?.code !== "ENOENT") {
      throw err;
    }
    continue;
  }

  const packageJsonPath = join(pkg, PACKAGE_JSON);
  let packageJson;

  try {
    packageJson = JSON.parse(await readFile(packageJsonPath, "utf8"));
  } catch (/** @type {any} */ err) {
    if (err?.code !== "ENOENT") {
      throw err;
    }
  }

  if (packageJson?.dependencies) {
    deps.push(...Object.keys(packageJson.dependencies));
  }
  if (packageJson?.devDependencies) {
    deps.push(...Object.keys(packageJson.devDependencies));
  }

  refs[packageJson?.name ?? packageTsConfigPath] = {
    path: pkg,
    deps,
    tsConfig,
  };
}

for (const pkg of Object.values(refs)) {
  await addRefsToTsConfig(
    join(pkg.path, TS_CONFIG),
    pkg.deps.filter((x) => x in refs).map((x) => refs[x].path),
    pkg.tsConfig,
  );
}

const rootTsConfigPath = join(WORKSPACE_ROOT, TS_CONFIG);

await addRefsToTsConfig(
  rootTsConfigPath,
  Object.values(refs).map((x) => x.path),
);

const result = spawnSync(
  join(WORKSPACE_ROOT, "node_modules/.bin/tsc"),
  ["-b", rootTsConfigPath, ...tscArgs],
  {
    stdio: "inherit",
    shell: process.platform === "win32",
  },
);

process.exit(result.status ?? 0);

/**
 * @param {string} configPath
 * @param {string[]} references
 * @param {any} [contents]
 */
async function addRefsToTsConfig(configPath, references, contents) {
  const dir = dirname(resolve(configPath));
  if (!contents) {
    try {
      contents = JSON.parse(await readFile(configPath, "utf-8"));
    } catch (/** @type {any} */ err) {
      if (err?.code !== "ENOENT") {
        throw err;
      }
    }
  }
  const output = JSON.stringify(
    {
      ...contents,
      references: references.map((x) => ({
        path: relative(dir, x).replace(/\\/g, "/"),
      })),
    },
    null,
    2,
  );
  await writeFile(
    configPath,
    await Prettier.format(output, {
      filepath: configPath,
      ...prettierConfig,
    }),
  );
}
