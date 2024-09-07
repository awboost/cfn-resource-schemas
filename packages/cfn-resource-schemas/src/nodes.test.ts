import type { JSONSchema7 } from "json-schema";
import assert from "node:assert";
import { describe, it } from "node:test";
import {
  AnyTypeNode,
  ArrayTypeNode,
  BooleanTypeNode,
  IntegerTypeNode,
  InvalidTypeNode,
  NullTypeNode,
  NumberTypeNode,
  ObjectTypeNode,
  PropertyListNode,
  SchemaFileNode,
  StringTypeNode,
  TypeDefinitionNode,
  TypeNode,
  UnionTypeNode,
} from "./nodes.js";

describe("TypeNode", () => {
  describe("build()", () => {
    describe("for an invalid type", () => {
      it("returns an InvalidTypeNode", () => {
        const file = new SchemaFileNode({} as any, "file.json", {
          validationProblemLevel: "silent",
        });

        const node = TypeNode.makeTypeNode(
          { type: "fred" } as any,
          file,
          "/path/to/node",
        );

        assert.ok(node instanceof InvalidTypeNode);
        assert.ok(node.hasError);

        assert.strictEqual(file.problems.length, 1);
        assert.strictEqual(file.problems[0].node, node);
      });
    });

    describe("when no type is present", () => {
      it("returns an AnyTypeNode", () => {
        const file = new SchemaFileNode({} as any, "file.json", {
          validationProblemLevel: "silent",
        });

        const node = TypeNode.makeTypeNode({}, file, "/path/to/node");

        assert.ok(node instanceof AnyTypeNode);
        assert.ok(!node.hasError);
      });
    });

    describe('when type="array"', () => {
      it("returns a ArrayTypeNode", () => {
        const file = new SchemaFileNode({} as any, "file.json", {
          validationProblemLevel: "silent",
        });

        const node = TypeNode.makeTypeNode(
          {
            type: "array",
            description: "the description",
            minItems: 42,
            maxItems: 143,
            items: { type: "string" },
          } satisfies JSONSchema7,
          file,
          "/path/to/node",
        );

        assert.ok(node instanceof ArrayTypeNode);
        assert.strictEqual(node.description, "the description");
        assert.strictEqual(node.minItems, 42);
        assert.strictEqual(node.maxItems, 143);

        assert.ok(node.items instanceof StringTypeNode);
      });
    });

    describe('when type="boolean"', () => {
      it("returns a BooleanTypeNode", () => {
        const file = new SchemaFileNode({} as any, "file.json", {
          validationProblemLevel: "silent",
        });

        const node = TypeNode.makeTypeNode(
          {
            type: "boolean",
            description: "the description",
          } satisfies JSONSchema7,
          file,
          "/path/to/node",
        );

        assert.ok(node instanceof BooleanTypeNode);
        assert.strictEqual(node.description, "the description");
      });
    });

    describe('when type="integer"', () => {
      it("returns a IntegerTypeNode", () => {
        const file = new SchemaFileNode({} as any, "file.json", {
          validationProblemLevel: "silent",
        });

        const node = TypeNode.makeTypeNode(
          {
            type: "integer",
            description: "the description",
            exclusiveMaximum: 42,
            exclusiveMinimum: 32,
            maximum: 41,
            minimum: 33,
            multipleOf: 1,
          } satisfies JSONSchema7,
          file,
          "/path/to/node",
        );

        assert.ok(node instanceof IntegerTypeNode);
        assert.strictEqual(node.description, "the description");
        assert.strictEqual(node.exclusiveMaximum, 42);
        assert.strictEqual(node.exclusiveMinimum, 32);
        assert.strictEqual(node.maximum, 41);
        assert.strictEqual(node.minimum, 33);
        assert.strictEqual(node.multipleOf, 1);
      });

      it("handles enums correctly", () => {
        const file = new SchemaFileNode({} as any, "file.json", {
          validationProblemLevel: "silent",
        });

        const node = TypeNode.makeTypeNode(
          {
            type: "integer",
            enum: [42, 365],
          } satisfies JSONSchema7,
          file,
          "/path/to/node",
        );

        assert.ok(node instanceof IntegerTypeNode);
        assert.deepStrictEqual(node.enum, [42, 365]);
      });

      it("rejects string elements in enum", () => {
        const file = new SchemaFileNode({} as any, "file.json", {
          validationProblemLevel: "silent",
        });

        const node = TypeNode.makeTypeNode(
          {
            type: "integer",
            enum: ["one", 2],
          } satisfies JSONSchema7,
          file,
          "/path/to/node",
        );

        assert.ok(node instanceof IntegerTypeNode);
        assert.ok(node.hasError);

        assert.strictEqual(
          file.problems[0]?.message,
          `value of "enum" field is not valid for schema type "integer"`,
        );
      });

      it("rejects float elements in enum", () => {
        const file = new SchemaFileNode({} as any, "file.json", {
          validationProblemLevel: "silent",
        });

        const node = TypeNode.makeTypeNode(
          {
            type: "integer",
            enum: [3.14, 2],
          } satisfies JSONSchema7,
          file,
          "/path/to/node",
        );

        assert.ok(node instanceof IntegerTypeNode);
        assert.ok(node.hasError);

        assert.strictEqual(
          file.problems[0]?.message,
          `value of "enum" field is not valid for schema type "integer"`,
        );
      });

      it("handles const correctly", () => {
        const file = new SchemaFileNode({} as any, "file.json", {
          validationProblemLevel: "silent",
        });

        const node = TypeNode.makeTypeNode(
          {
            type: "integer",
            const: 42,
          } satisfies JSONSchema7,
          file,
          "/path/to/node",
        );

        assert.ok(node instanceof IntegerTypeNode);
        assert.deepStrictEqual(node.const, 42);
      });

      it("rejects string value in const", () => {
        const file = new SchemaFileNode({} as any, "file.json", {
          validationProblemLevel: "silent",
        });

        const node = TypeNode.makeTypeNode(
          {
            type: "integer",
            const: "forty-two",
          } satisfies JSONSchema7,
          file,
          "/path/to/node",
        );

        assert.ok(node instanceof IntegerTypeNode);
        assert.ok(node.hasError);

        assert.strictEqual(
          file.problems[0]?.message,
          `value of "const" field is not valid for schema type "integer"`,
        );
      });

      it("rejects float value in const", () => {
        const file = new SchemaFileNode({} as any, "file.json", {
          validationProblemLevel: "silent",
        });

        const node = TypeNode.makeTypeNode(
          {
            type: "integer",
            const: 3.14,
          } satisfies JSONSchema7,
          file,
          "/path/to/node",
        );

        assert.ok(node instanceof IntegerTypeNode);
        assert.ok(node.hasError);

        assert.strictEqual(
          file.problems[0]?.message,
          `value of "const" field is not valid for schema type "integer"`,
        );
      });
    });

    describe('when type="null"', () => {
      it("returns a NullTypeNode for a null type", () => {
        const file = new SchemaFileNode({} as any, "file.json", {
          validationProblemLevel: "silent",
        });

        const node = TypeNode.makeTypeNode(
          {
            type: "null",
            description: "the description",
          } satisfies JSONSchema7,
          file,
          "/path/to/node",
        );

        assert.ok(node instanceof NullTypeNode);
        assert.strictEqual(node.description, "the description");
      });
    });

    describe('when type="number"', () => {
      it("returns a NumberTypeNode", () => {
        const file = new SchemaFileNode({} as any, "file.json", {
          validationProblemLevel: "silent",
        });

        const node = TypeNode.makeTypeNode(
          {
            type: "number",
            description: "the description",
            exclusiveMaximum: 42,
            exclusiveMinimum: 32,
            maximum: 41,
            minimum: 33,
            multipleOf: 1,
          } satisfies JSONSchema7,
          file,
          "/path/to/node",
        );

        assert.ok(node instanceof NumberTypeNode);
        assert.strictEqual(node.description, "the description");
        assert.strictEqual(node.exclusiveMaximum, 42);
        assert.strictEqual(node.exclusiveMinimum, 32);
        assert.strictEqual(node.maximum, 41);
        assert.strictEqual(node.minimum, 33);
        assert.strictEqual(node.multipleOf, 1);
      });

      it("handles enums correctly", () => {
        const file = new SchemaFileNode({} as any, "file.json", {
          validationProblemLevel: "silent",
        });

        const node = TypeNode.makeTypeNode(
          {
            type: "number",
            enum: [3.14, 2.7],
          } satisfies JSONSchema7,
          file,
          "/path/to/node",
        );

        assert.ok(node instanceof NumberTypeNode);
        assert.deepStrictEqual(node.enum, [3.14, 2.7]);
      });

      it("rejects string elements in enum", () => {
        const file = new SchemaFileNode({} as any, "file.json", {
          validationProblemLevel: "silent",
        });

        const node = TypeNode.makeTypeNode(
          {
            type: "number",
            enum: ["one", 2],
          } satisfies JSONSchema7,
          file,
          "/path/to/node",
        );

        assert.ok(node instanceof NumberTypeNode);
        assert.ok(node.hasError);

        assert.strictEqual(
          file.problems[0]?.message,
          `value of "enum" field is not valid for schema type "number"`,
        );
      });

      it("handles const correctly", () => {
        const file = new SchemaFileNode({} as any, "file.json", {
          validationProblemLevel: "silent",
        });

        const node = TypeNode.makeTypeNode(
          {
            type: "number",
            const: 3.14,
          } satisfies JSONSchema7,
          file,
          "/path/to/node",
        );

        assert.ok(node instanceof NumberTypeNode);
        assert.deepStrictEqual(node.const, 3.14);
      });

      it("rejects string value in const", () => {
        const file = new SchemaFileNode({} as any, "file.json", {
          validationProblemLevel: "silent",
        });

        const node = TypeNode.makeTypeNode(
          {
            type: "number",
            const: "forty-two",
          } satisfies JSONSchema7,
          file,
          "/path/to/node",
        );

        assert.ok(node instanceof NumberTypeNode);
        assert.ok(node.hasError);

        assert.strictEqual(
          file.problems[0]?.message,
          `value of "const" field is not valid for schema type "number"`,
        );
      });
    });

    describe('when type is "object"', () => {
      it("returns an ObjectTypeNode", () => {
        const file = new SchemaFileNode(
          {
            description: "the description",
            primaryIdentifier: [],
            properties: {},
            typeName: "Acme::Service::Resource",
            definitions: {},
          },
          "file.json",
          { validationProblemLevel: "silent" },
        );

        const node = TypeNode.makeTypeNode(
          {
            type: "object",
            properties: {
              one: { type: "string", description: "description one" },
              two: { type: "number", description: "description two" },
            },
          } satisfies JSONSchema7,
          file,
          "/path/to/node",
        );

        assert.ok(node instanceof ObjectTypeNode);
        assert.strictEqual(node.properties.length, 2);

        assert.strictEqual(node.properties[0].name, "one");
        assert.ok(node.properties[0].type instanceof StringTypeNode);
        assert.strictEqual(node.properties[0].description, "description one");

        assert.strictEqual(node.properties[1].name, "two");
        assert.ok(node.properties[1].type instanceof NumberTypeNode);
        assert.strictEqual(node.properties[1].description, "description two");
      });

      it("takes description from referenced type", () => {
        const file = new SchemaFileNode(
          {
            description: "the description",
            primaryIdentifier: [],
            properties: {},
            typeName: "Acme::Service::Resource",
            definitions: {
              MyStringType: {
                type: "string",
                description: "description one",
              },
            },
          },
          "file.json",
          { validationProblemLevel: "silent" },
        );

        const node = TypeNode.makeTypeNode(
          {
            type: "object",
            properties: {
              one: {
                $ref: "#/definitions/MyStringType",
              },
              two: {
                $ref: "#/definitions/MyStringType",
                description: "description two",
              },
            },
          } satisfies JSONSchema7,
          file,
          "/path/to/node",
        );

        assert.ok(node instanceof ObjectTypeNode);
        assert.strictEqual(node.properties.length, 2);

        assert.strictEqual(node.properties[0].name, "one");
        assert.ok(node.properties[0].type instanceof TypeDefinitionNode);
        assert.strictEqual(node.properties[0].description, "description one");

        assert.strictEqual(node.properties[1].name, "two");
        assert.ok(node.properties[1].type instanceof TypeDefinitionNode);
        assert.strictEqual(node.properties[1].description, "description two");
      });

      it("sets required for relevant properties", () => {
        const file = new SchemaFileNode(
          {
            description: "the description",
            primaryIdentifier: [],
            properties: {
              one: { type: "string" },
              two: { type: "string" },
            },
            required: ["one"],
            typeName: "Acme::Service::Resource",
            definitions: {},
          },
          "file.json",
          { validationProblemLevel: "silent" },
        );

        const node = TypeNode.makeTypeNode(file.schema, file, "");

        assert.ok(node instanceof ObjectTypeNode);
        assert.strictEqual(node.properties.length, 2);

        assert.strictEqual(node.properties[0].name, "one");
        assert.ok(node.properties[0].type instanceof StringTypeNode);
        assert.ok(node.properties[0].required);

        assert.strictEqual(node.properties[1].name, "two");
        assert.ok(node.properties[1].type instanceof StringTypeNode);
        assert.ok(!node.properties[1].required);
      });

      it("sets readOnly for relevant properties", () => {
        const file = new SchemaFileNode(
          {
            description: "the description",
            primaryIdentifier: [],
            properties: {
              one: { type: "string" },
              two: {
                type: "object",
                properties: {
                  three: { type: "string" },
                  four: { type: "string" },
                },
              },
            },
            typeName: "Acme::Service::Resource",
            definitions: {},
            readOnlyProperties: ["/properties/one", "/properties/two/three"],
          },
          "file.json",
          { validationProblemLevel: "silent" },
        );

        const node = TypeNode.makeTypeNode(
          {
            type: "object",
            properties: file.schema.properties,
          } satisfies JSONSchema7,
          file,
          "",
        );

        assert.ok(node instanceof ObjectTypeNode);
        assert.strictEqual(node.properties.length, 2);

        assert.strictEqual(node.properties[0].name, "one");
        assert.ok(node.properties[0].type instanceof StringTypeNode);
        assert.ok(node.properties[0].readOnly);

        assert.strictEqual(node.properties[1].name, "two");
        assert.ok(node.properties[1].type instanceof ObjectTypeNode);
        assert.ok(!node.properties[1].readOnly);

        const childProps = node.properties[1].type.properties;
        assert.strictEqual(childProps.length, 2);
        assert.strictEqual(childProps[0].name, "three");
        assert.ok(childProps[0].readOnly);
        assert.strictEqual(childProps[1].name, "four");
        assert.ok(!childProps[1].readOnly);
      });

      it("sets readOnly if all the child properties are readonly", () => {
        const file = new SchemaFileNode(
          {
            description: "the description",
            primaryIdentifier: [],
            properties: {
              one: { type: "string" },
              two: { $ref: "#/definitions/MyType" },
            },
            typeName: "Acme::Service::Resource",
            definitions: {
              MyType: {
                type: "object",
                properties: {
                  three: { type: "string" },
                  four: { type: "string" },
                },
              },
            },
            readOnlyProperties: [
              "/properties/two/three",
              "/properties/two/four",
            ],
          },
          "file.json",
          { validationProblemLevel: "silent" },
        );

        const node = TypeNode.makeTypeNode(
          {
            type: "object",
            properties: file.schema.properties,
          } satisfies JSONSchema7,
          file,
          "",
        );

        assert.ok(node instanceof ObjectTypeNode);
        assert.strictEqual(node.properties.length, 2);

        assert.strictEqual(node.properties[0].name, "one");
        assert.ok(node.properties[0].type instanceof StringTypeNode);
        assert.ok(!node.properties[0].readOnly);

        assert.strictEqual(node.properties[1].name, "two");
        assert.ok(node.properties[1].type instanceof TypeDefinitionNode);
        assert.ok(node.properties[1].readOnly);
      });

      it("does not set readOnly if the property type has no children", () => {
        const file = new SchemaFileNode(
          {
            description: "the description",
            primaryIdentifier: [],
            properties: {
              one: { type: "string" },
              two: { $ref: "#/definitions/MyType" },
            },
            typeName: "Acme::Service::Resource",
            definitions: {
              MyType: {
                type: "object",
                properties: {},
              },
            },
            readOnlyProperties: [],
          },
          "file.json",
          { validationProblemLevel: "silent" },
        );

        const node = TypeNode.makeTypeNode(
          {
            type: "object",
            properties: file.schema.properties,
          } satisfies JSONSchema7,
          file,
          "",
        );

        assert.ok(node instanceof ObjectTypeNode);
        assert.strictEqual(node.properties.length, 2);

        assert.strictEqual(node.properties[0].name, "one");
        assert.ok(node.properties[0].type instanceof StringTypeNode);
        assert.ok(!node.properties[0].readOnly);

        assert.strictEqual(node.properties[1].name, "two");
        assert.ok(node.properties[1].type instanceof TypeDefinitionNode);
        assert.ok(!node.properties[1].readOnly);
      });
    });

    describe('when type="string"', () => {
      it("returns a StringTypeNode", () => {
        const file = new SchemaFileNode({} as any, "file.json", {
          validationProblemLevel: "silent",
        });

        const node = TypeNode.makeTypeNode(
          {
            type: "string",
            description: "the description",
            minLength: 42,
            maxLength: 143,
            pattern: "hello",
            format: "date",
          } satisfies JSONSchema7,
          file,
          "/path/to/node",
        );

        assert.ok(node instanceof StringTypeNode);
        assert.strictEqual(node.description, "the description");
        assert.strictEqual(node.minLength, 42);
        assert.strictEqual(node.maxLength, 143);
        assert.strictEqual(node.pattern, "hello");
        assert.strictEqual(node.format, "date");
      });

      it("handles enums correctly", () => {
        const file = new SchemaFileNode({} as any, "file.json", {
          validationProblemLevel: "silent",
        });

        const node = TypeNode.makeTypeNode(
          {
            type: "string",
            enum: ["one", "two"],
          } satisfies JSONSchema7,
          file,
          "/path/to/node",
        );

        assert.ok(node instanceof StringTypeNode);
        assert.deepStrictEqual(node.enum, ["one", "two"]);
      });

      it("rejects number elements in enum", () => {
        const file = new SchemaFileNode({} as any, "file.json", {
          validationProblemLevel: "silent",
        });

        const node = TypeNode.makeTypeNode(
          {
            type: "string",
            enum: ["one", 2],
          } satisfies JSONSchema7,
          file,
          "/path/to/node",
        );

        assert.ok(node instanceof StringTypeNode);
        assert.ok(node.hasError);

        assert.strictEqual(
          file.problems[0]?.message,
          `value of "enum" field is not valid for schema type "string"`,
        );
      });

      it("handles const correctly", () => {
        const file = new SchemaFileNode({} as any, "file.json", {
          validationProblemLevel: "silent",
        });

        const node = TypeNode.makeTypeNode(
          {
            type: "string",
            const: "hello",
          } satisfies JSONSchema7,
          file,
          "/path/to/node",
        );

        assert.ok(node instanceof StringTypeNode);
        assert.deepStrictEqual(node.const, "hello");
      });

      it("rejects number value in const", () => {
        const file = new SchemaFileNode({} as any, "file.json", {
          validationProblemLevel: "silent",
        });

        const node = TypeNode.makeTypeNode(
          {
            type: "string",
            const: 32,
          } satisfies JSONSchema7,
          file,
          "/path/to/node",
        );

        assert.ok(node instanceof StringTypeNode);
        assert.ok(node.hasError);

        assert.strictEqual(
          file.problems[0]?.message,
          `value of "const" field is not valid for schema type "string"`,
        );
      });
    });

    describe('for a type with "anyOf"', () => {
      it("returns a UnionTypeNode", () => {
        const file = new SchemaFileNode({} as any, "file.json", {
          validationProblemLevel: "silent",
        });

        const node = TypeNode.makeTypeNode(
          {
            anyOf: [{ type: "string" }, { type: "number" }],
            description: "the description",
          } satisfies JSONSchema7,
          file,
          "/path/to/node",
        );

        assert.ok(node instanceof UnionTypeNode);
        assert.strictEqual(node.description, "the description");

        assert.strictEqual(node.types?.length, 2);

        assert.ok(node.types[0] instanceof StringTypeNode);
        assert.ok(node.types[1] instanceof NumberTypeNode);
      });
    });

    describe('for a type with "oneOf"', () => {
      it("returns a UnionTypeNode", () => {
        const file = new SchemaFileNode({} as any, "file.json", {
          validationProblemLevel: "silent",
        });

        const node = TypeNode.makeTypeNode(
          {
            oneOf: [{ type: "string" }, { type: "number" }],
            description: "the description",
          } satisfies JSONSchema7,
          file,
          "/path/to/node",
        );

        assert.ok(node instanceof UnionTypeNode);
        assert.strictEqual(node.description, "the description");

        assert.strictEqual(node.types?.length, 2);

        assert.ok(node.types[0] instanceof StringTypeNode);
        assert.ok(node.types[1] instanceof NumberTypeNode);
      });
    });

    describe("for a reference schema", () => {
      it("returns a TypeDefinitionNode", () => {
        const file = new SchemaFileNode(
          {
            description: "the description",
            primaryIdentifier: [],
            properties: {},
            typeName: "Acme::Service::Resource",
            definitions: {
              MyStringType: { type: "string" },
            },
          },
          "file.json",
          { validationProblemLevel: "silent" },
        );

        const node = TypeNode.makeTypeNode(
          {
            $ref: "#/definitions/MyStringType",
          } satisfies JSONSchema7,
          file,
          "/path/to/node",
        );

        assert.ok(node instanceof TypeDefinitionNode);
        assert.ok(node.type instanceof StringTypeNode);
      });

      it("adds a definition to the file definitions for referenced types", () => {
        const file = new SchemaFileNode(
          {
            description: "the description",
            primaryIdentifier: [],
            properties: {},
            typeName: "Acme::Service::Resource",
            definitions: {
              MyStringType: { type: "string" },
              MyUnreferencedStringType: { type: "string" },
            },
          },
          "file.json",
          { validationProblemLevel: "silent" },
        );

        const node = TypeNode.makeTypeNode(
          {
            $ref: "#/definitions/MyStringType",
          } satisfies JSONSchema7,
          file,
          "/path/to/node",
        );

        const defs = [...file.definitions];

        assert.strictEqual(defs.length, 1);
        assert.strictEqual(defs[0], node);
      });

      it("returns an InvalidTypeNode for an invalid reference", () => {
        const file = new SchemaFileNode(
          {
            description: "the description",
            primaryIdentifier: [],
            properties: {},
            typeName: "Acme::Service::Resource",
            definitions: {
              MyStringType: { type: "string" },
            },
          },
          "file.json",
          { validationProblemLevel: "silent" },
        );

        const node = TypeNode.makeTypeNode(
          {
            $ref: "#/definitions/Unknown",
          } satisfies JSONSchema7,
          file,
          "/path/to/node",
        );

        assert.ok(node instanceof InvalidTypeNode);

        assert.strictEqual(file.problems.length, 1);
        assert.strictEqual(file.problems[0].level, "error");
        assert.strictEqual(
          file.problems[0].message,
          'invalid reference "#/definitions/Unknown"',
        );
      });

      it("returns an InvalidTypeNode with only a warning if ignoreBrokenRefs is set", () => {
        const file = new SchemaFileNode(
          {
            description: "the description",
            primaryIdentifier: [],
            properties: {},
            typeName: "Acme::Service::Resource",
            definitions: {
              MyStringType: { type: "string" },
            },
          },
          "file.json",
          {
            ignoreBrokenRefs: true,
            validationProblemLevel: "silent",
          },
        );

        const node = TypeNode.makeTypeNode(
          {
            $ref: "#/definitions/Unknown",
          } satisfies JSONSchema7,
          file,
          "/path/to/node",
        );

        assert.ok(node instanceof InvalidTypeNode);

        assert.strictEqual(file.problems.length, 1);
        assert.strictEqual(file.problems[0].level, "warn");
        assert.strictEqual(
          file.problems[0].message,
          'invalid reference "#/definitions/Unknown"',
        );
      });
    });
  });
});

describe("PropertyListNode", () => {
  it("preserves top-level properties", () => {
    const file = new SchemaFileNode(
      {
        typeName: "Acme::Service::Resource",
        description: "a resource",
        primaryIdentifier: [],
        properties: {
          one: {
            type: "string",
          },
          two: {
            type: "integer",
          },
        },
      },
      "file.json",
      { validationProblemLevel: "silent" },
    );

    const node = new PropertyListNode(
      ["/properties/one", "/properties/two"],
      file,
      "/readOnlyProperties",
    );

    assert.deepStrictEqual(node.schema, ["/properties/one", "/properties/two"]);
  });

  it("converts badly cased properties path", () => {
    const file = new SchemaFileNode(
      {
        typeName: "Acme::Service::Resource",
        description: "a resource",
        primaryIdentifier: [],
        properties: {
          one: {
            type: "string",
          },
          two: {
            type: "integer",
          },
        },
      },
      "file.json",
      { validationProblemLevel: "silent" },
    );

    const node = new PropertyListNode(
      ["/Properties/one", "/propERties/two"],
      file,
      "/readOnlyProperties",
    );

    assert.deepStrictEqual(node.schema, ["/properties/one", "/properties/two"]);
  });

  it("converts paths for properties in inline object types", () => {
    const file = new SchemaFileNode(
      {
        typeName: "Acme::Service::Resource",
        description: "a resource",
        primaryIdentifier: [],
        properties: {
          one: {
            type: "object",
            properties: {
              child1: {
                type: "string",
              },
              child2: {
                type: "object",
                properties: {
                  child2_1: {
                    type: "string",
                  },
                },
              },
            },
          },
        },
      },
      "file.json",
      { validationProblemLevel: "silent" },
    );

    const node = new PropertyListNode(
      ["/properties/one/child1", "/properties/one/child2/child2_1"],
      file,
      "/readOnlyProperties",
    );

    assert.deepStrictEqual(node.schema, [
      "/properties/one/properties/child1",
      "/properties/one/properties/child2/properties/child2_1",
    ]);
  });

  it("considers a property included if its parent is included", () => {
    const file = new SchemaFileNode(
      {
        typeName: "Acme::Service::Resource",
        description: "a resource",
        primaryIdentifier: [],
        properties: {
          one: {
            type: "object",
            properties: {
              child1: {
                type: "string",
              },
            },
          },
        },
      },
      "file.json",
      { validationProblemLevel: "silent" },
    );

    const node = new PropertyListNode(
      ["/properties/one"],
      file,
      "/readOnlyProperties",
    );

    assert.deepStrictEqual(node.schema, ["/properties/one"]);
    assert.ok(node.includes("/properties/one/properties/child1"));
  });

  it("converts dot-delimited paths for properties in inline object types", () => {
    const file = new SchemaFileNode(
      {
        typeName: "Acme::Service::Resource",
        description: "a resource",
        primaryIdentifier: [],
        properties: {
          one: {
            type: "object",
            properties: {
              child1: {
                type: "string",
              },
              child2: {
                type: "object",
                properties: {
                  child2_1: {
                    type: "string",
                  },
                },
              },
            },
          },
        },
      },
      "file.json",
      { validationProblemLevel: "silent" },
    );

    const node = new PropertyListNode(
      ["/properties/one.child1", "/properties/one.child2.child2_1"],
      file,
      "/readOnlyProperties",
    );

    assert.deepStrictEqual(node.schema, [
      "/properties/one/properties/child1",
      "/properties/one/properties/child2/properties/child2_1",
    ]);
  });

  it("converts paths for properties in referenced object types", () => {
    const file = new SchemaFileNode(
      {
        typeName: "Acme::Service::Resource",
        description: "a resource",
        primaryIdentifier: [],
        definitions: {
          ObjectType1: {
            type: "object",
            properties: {
              child1: {
                type: "string",
              },
              child2: {
                $ref: "#/definitions/ObjectType2",
              },
            },
          },
          ObjectType2: {
            type: "object",
            properties: {
              child2_1: {
                type: "string",
              },
            },
          },
        },
        properties: {
          one: {
            $ref: "#/definitions/ObjectType1",
          },
        },
      },
      "file.json",
      { validationProblemLevel: "silent" },
    );

    const node = new PropertyListNode(
      ["/properties/one/child1", "/properties/one/child2/child2_1"],
      file,
      "/readOnlyProperties",
    );

    assert.deepStrictEqual(node.schema, [
      "/definitions/ObjectType1/properties/child1",
      "/definitions/ObjectType2/properties/child2_1",
    ]);
  });

  it("does not convert path for the root of a definition", () => {
    const file = new SchemaFileNode(
      {
        typeName: "Acme::Service::Resource",
        description: "a resource",
        primaryIdentifier: [],
        definitions: {
          StringType: { type: "string" },
        },
        properties: {
          one: { $ref: "#/definitions/StringType" },
          two: {
            type: "object",
            properties: {
              three: { $ref: "#/definitions/StringType" },
            },
          },
        },
      },
      "file.json",
      { validationProblemLevel: "silent" },
    );

    const node = new PropertyListNode(
      ["/properties/one", "/properties/two/three"],
      file,
      "/readOnlyProperties",
    );

    assert.deepStrictEqual(node.schema, [
      "/properties/one",
      "/properties/two/properties/three",
    ]);
  });

  it("converts dot-delimited paths for properties in referenced object types", () => {
    const file = new SchemaFileNode(
      {
        typeName: "Acme::Service::Resource",
        description: "a resource",
        primaryIdentifier: [],
        definitions: {
          ObjectType1: {
            type: "object",
            properties: {
              child1: {
                type: "string",
              },
              child2: {
                $ref: "#/definitions/ObjectType2",
              },
            },
          },
          ObjectType2: {
            type: "object",
            properties: {
              child2_1: {
                type: "string",
              },
            },
          },
        },
        properties: {
          one: {
            $ref: "#/definitions/ObjectType1",
          },
        },
      },
      "file.json",
      { validationProblemLevel: "silent" },
    );

    const node = new PropertyListNode(
      ["/properties/one.child1", "/properties/one.child2.child2_1"],
      file,
      "/readOnlyProperties",
    );

    assert.deepStrictEqual(node.schema, [
      "/definitions/ObjectType1/properties/child1",
      "/definitions/ObjectType2/properties/child2_1",
    ]);
  });

  it("converts '*' to 'additionalProperties' for record type properties", () => {
    const file = new SchemaFileNode(
      {
        typeName: "Acme::Service::Resource",
        description: "a resource",
        primaryIdentifier: [],
        properties: {
          one: {
            type: "object",
            additionalProperties: {
              type: "object",
              properties: {
                id: { type: "string" },
              },
            },
          },
        },
      },
      "file.json",
      { validationProblemLevel: "silent" },
    );

    const node = new PropertyListNode(
      ["/properties/one/*/id"],
      file,
      "/readOnlyProperties",
    );

    assert.deepStrictEqual(node.schema, [
      "/properties/one/additionalProperties/properties/id",
    ]);
  });

  it("converts '*' to 'items' for array type properties", () => {
    const file = new SchemaFileNode(
      {
        typeName: "Acme::Service::Resource",
        description: "a resource",
        primaryIdentifier: [],
        properties: {
          one: {
            type: "array",
            items: {
              type: "object",
              properties: {
                id: { type: "string" },
              },
            },
          },
        },
      },
      "file.json",
      { validationProblemLevel: "silent" },
    );

    const node = new PropertyListNode(
      ["/properties/one/*/id"],
      file,
      "/readOnlyProperties",
    );

    assert.deepStrictEqual(node.schema, [
      "/properties/one/items/properties/id",
    ]);
  });
});
