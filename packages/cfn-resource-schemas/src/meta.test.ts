import assert from "node:assert";
import { describe, it } from "node:test";
import { validateResourceTypeSchema } from "./meta.js";

describe("validateResourceTypeSchema", () => {
  it("fails on an empty schema", () => {
    const result = validateResourceTypeSchema({});
    assert.strictEqual(result.ok, false);
  });
});
