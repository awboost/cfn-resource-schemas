import type { ResourceTypeSchema } from "@awboost/cfn-resource-schemas/types";
import JsonPointer from "json-pointer";

type DiffChange = {
  path: string;
  oldValue?: any;
  newValue?: any;
};

function jsonDiff(a: object, b: object): DiffChange[] {
  const changes: DiffChange[] = [];

  function compare(a: any, b: any, path: string[]): void {
    const keys = new Set([...Object.keys(a), ...Object.keys(b)]);

    for (const key of keys) {
      const x = a[key];
      const y = b[key];

      if (x === y) {
        continue;
      }
      if (typeof x === "object" && typeof y === "object") {
        compare(x, y, [...path, key]);
      } else {
        changes.push({
          path: JsonPointer.compile([...path, key]),
          oldValue: x,
          newValue: y,
        });
      }
    }
  }

  compare(a, b, []);
  return changes;
}

export function formatSchemaDiff(
  a: ResourceTypeSchema,
  b: ResourceTypeSchema,
): string[] {
  const diff = jsonDiff(a, b);
  const changes = new Set<string>();

  for (const d of diff) {
    const path = JsonPointer.parse(d.path);

    if (path[0] === "handlers") {
      changes.add(`updated handler permissions`);
    } else if (path[0] === "definitions") {
      if (path.length === 2) {
        if (d.oldValue) {
          if (!d.newValue) {
            changes.add(`removed definition \`${path[1]}\``);
          }
        } else if (d.newValue) {
          changes.add(`added definition \`${path[1]}\``);
        }
      } else {
        changes.add(`updated definition \`${path[1]}\``);
      }
    } else if (path[0] === "properties") {
      if (path.length === 2) {
        if (d.oldValue) {
          if (!d.newValue) {
            changes.add(`removed property \`${path[1]}\``);
          }
        } else if (d.newValue) {
          changes.add(`added property \`${path[1]}\``);
        }
      } else {
        changes.add(`updated property \`${path[1]}\``);
      }
    } else if (path[0] !== "$schema") {
      if (path.length === 1) {
        if (d.oldValue) {
          if (!d.newValue) {
            changes.add(`removed \`${path[0]}\``);
          }
        } else if (d.newValue) {
          changes.add(`added \`${path[0]}\``);
        }
      } else {
        changes.add(`updated \`${path[0]}\``);
      }
    }
  }

  return [...changes];
}
