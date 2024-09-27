// @ts-check

/**
 * A script to sync the package versions across the workspace.
 *
 * At time of writing, performing a version bump using `npm version` does not
 * affect the versions listed for the package in the package.json of dependant
 * packages in the workspace. This script goes through each package in the
 * workspace and ensures that the version for any other workspace packages it
 * cross-references is up to date.
 */

import Arborist from "@npmcli/arborist";
import PackageJson from "@npmcli/package-json";
import { glob } from "glob";
import { resolve } from "path";

const rootPkg = await PackageJson.load("./");

// normalize the workspaces entry
const workspaceGlobs = Array.isArray(rootPkg.content.workspaces)
  ? rootPkg.content.workspaces
  : rootPkg.content.workspaces?.packages ?? [];

// get a list of all candidate package directories
const workspaces = (
  await Promise.all(workspaceGlobs.map((x) => glob(resolve(rootPkg.path, x))))
).flat();

if (!workspaces.length) {
  console.error(`ERROR: no workspaces defined`);
  process.exit(1);
}

// load all the package.json files that we can find
const packages = (
  await Promise.all(
    workspaces.map(async (path) => {
      try {
        return await PackageJson.load(path);
      } catch (/** @type {any} */ error) {
        if (error?.code !== "ENOENT") {
          throw error;
        }
      }
    }),
  )
).filter((p) => p !== undefined);

const packageNames = packages
  .map((x) => x.content.name)
  .filter((x) => x !== undefined);

// go through each package.json and update the versions for cross-references
for (const sourcePackage of packages) {
  if (!sourcePackage) {
    continue;
  }

  // get all the keys of dependency sections
  const deps = Object.keys(sourcePackage.content).filter(
    /** @returns {key is 'dependencies'} */
    (key) => /(^d|D)ependencies$/.test(key),
  );

  /** @type {import('@npmcli/package-json').PackageJson} */
  const update = {};

  for (const key of deps) {
    for (const targetPackageName of packageNames) {
      const currentVersion = sourcePackage.content[key]?.[targetPackageName];
      if (!currentVersion) {
        // we haven't referenced this package
        continue;
      }

      const versionMatch = /^([~^]?)([0-9.])+$/.exec(currentVersion);
      if (!versionMatch) {
        console.warn(
          `warning: invalid version for ${key} ${targetPackageName}` +
            ` in ${sourcePackage.content.name}: ${currentVersion}`,
        );
        continue;
      }

      const specifier = versionMatch[1];

      const latestVersion = packages.find(
        (x) => x.content.name === targetPackageName,
      )?.content.version;

      if (!latestVersion || `${specifier}${latestVersion}` === currentVersion) {
        continue;
      }

      update[key] = {
        ...sourcePackage.content[key],
        ...update[key],
        [targetPackageName]: `${specifier}${latestVersion}`,
      };
    }
  }

  if (Object.keys(update).length) {
    // we made some changes, save them
    sourcePackage.update(update);
    await sourcePackage.save();
  }
}

// update package-lock.json: minimalist reify, updating only the workspaces that
// had version updates
const arborist = new Arborist({
  audit: false,
  fund: false,
  save: true,
});

await arborist.reify({
  update: { names: packageNames },
});
