import {
  AnyTypeNode,
  ArrayTypeNode,
  BooleanTypeNode,
  IntegerTypeNode,
  NullTypeNode,
  NumberTypeNode,
  ObjectTypeNode,
  SchemaFileNode,
  StringTypeNode,
  TypeNode,
} from "@awboost/cfn-resource-schemas/nodes";
import assert from "node:assert";
import { describe, it } from "node:test";
import ts from "typescript";
import { createType } from "./codegen.js";

describe("createType", () => {
  describe("when node is AnyTypeNode", () => {
    it("returns the any type", () => {
      const input = new AnyTypeNode({}, {} as SchemaFileNode, "");

      const output = createType(input);

      assert.strictEqual(output.kind, ts.SyntaxKind.AnyKeyword);
    });
  });

  describe("when node is ArrayTypeNode", () => {
    it("returns an array type", () => {
      const input = new ArrayTypeNode(
        { type: "array" },
        {} as SchemaFileNode,
        "",
      );

      const output = createType(input);

      assert.ok(ts.isArrayTypeNode(output));
    });

    it('has an element type of any when "items" is not given', () => {
      const input = new ArrayTypeNode(
        { type: "array" },
        {} as SchemaFileNode,
        "",
      );

      const output = createType(input);

      assert.ok(ts.isArrayTypeNode(output));
      assert.strictEqual(output.elementType.kind, ts.SyntaxKind.AnyKeyword);
    });

    it('has the correct element type when "items" is given', () => {
      const input = new ArrayTypeNode(
        { type: "array", items: { type: "boolean" } },
        {} as SchemaFileNode,
        "",
      );

      const output = createType(input);

      assert.ok(ts.isArrayTypeNode(output));
      assert.strictEqual(output.elementType.kind, ts.SyntaxKind.BooleanKeyword);
    });
  });

  describe("when node is BooleanTypeNode", () => {
    it("returns a boolean type", () => {
      const input = new BooleanTypeNode(
        { type: "boolean" },
        {} as SchemaFileNode,
        "",
      );

      const output = createType(input);

      assert.strictEqual(output.kind, ts.SyntaxKind.BooleanKeyword);
    });
  });

  describe("when node is IntegerTypeNode", () => {
    it("returns a number type", () => {
      const input = new IntegerTypeNode(
        { type: "integer" },
        {} as SchemaFileNode,
        "",
      );

      const output = createType(input);

      assert.strictEqual(output.kind, ts.SyntaxKind.NumberKeyword);
    });

    it('returns a literal type when "const" is given', () => {
      const input = new IntegerTypeNode(
        { type: "integer", const: 142 },
        {} as SchemaFileNode,
        "",
      );

      const output = createType(input);

      assert.ok(ts.isLiteralTypeNode(output));
      assert.ok(ts.isNumericLiteral(output.literal));
      assert.strictEqual(output.literal.text, "142");
    });

    it('returns a literal type union when "enum" is given', () => {
      const input = new IntegerTypeNode(
        { type: "integer", enum: [2, 4, 256] },
        {} as SchemaFileNode,
        "",
      );

      const output = createType(input);

      assert.ok(ts.isUnionTypeNode(output));
      assert.strictEqual(output.types.length, 3);

      assert.ok(ts.isLiteralTypeNode(output.types[0]));
      assert.ok(ts.isNumericLiteral(output.types[0].literal));
      assert.strictEqual(output.types[0].literal.text, "2");

      assert.ok(ts.isLiteralTypeNode(output.types[1]));
      assert.ok(ts.isNumericLiteral(output.types[1].literal));
      assert.strictEqual(output.types[1].literal.text, "4");

      assert.ok(ts.isLiteralTypeNode(output.types[2]));
      assert.ok(ts.isNumericLiteral(output.types[2].literal));
      assert.strictEqual(output.types[2].literal.text, "256");
    });
  });

  describe("when node is NullTypeNode", () => {
    it("returns a null literal type", () => {
      const input = new NullTypeNode(
        { type: "null" },
        {} as SchemaFileNode,
        "",
      );

      const output = createType(input);

      assert.ok(ts.isLiteralTypeNode(output));
      assert.strictEqual(output.literal.kind, ts.SyntaxKind.NullKeyword);
    });
  });

  describe("when node is NumberTypeNode", () => {
    it("returns a number type", () => {
      const input = new NumberTypeNode(
        { type: "number" },
        {} as SchemaFileNode,
        "",
      );

      const output = createType(input);

      assert.strictEqual(output.kind, ts.SyntaxKind.NumberKeyword);
    });

    it('returns a literal type when "const" is given', () => {
      const input = new NumberTypeNode(
        { type: "number", const: 3.1415 },
        {} as SchemaFileNode,
        "",
      );

      const output = createType(input);

      assert.ok(ts.isLiteralTypeNode(output));
      assert.ok(ts.isNumericLiteral(output.literal));
      assert.strictEqual(output.literal.text, "3.1415");
    });

    it('returns a literal type union when "enum" is given', () => {
      const input = new NumberTypeNode(
        { type: "number", enum: [2.718, 3.1415, 100] },
        {} as SchemaFileNode,
        "",
      );

      const output = createType(input);

      assert.ok(ts.isUnionTypeNode(output));
      assert.strictEqual(output.types.length, 3);

      assert.ok(ts.isLiteralTypeNode(output.types[0]));
      assert.ok(ts.isNumericLiteral(output.types[0].literal));
      assert.strictEqual(output.types[0].literal.text, "2.718");

      assert.ok(ts.isLiteralTypeNode(output.types[1]));
      assert.ok(ts.isNumericLiteral(output.types[1].literal));
      assert.strictEqual(output.types[1].literal.text, "3.1415");

      assert.ok(ts.isLiteralTypeNode(output.types[2]));
      assert.ok(ts.isNumericLiteral(output.types[2].literal));
      assert.strictEqual(output.types[2].literal.text, "100");
    });
  });

  describe("when node is ObjectTypeNode", () => {
    describe("when properties are specified", () => {
      it("returns an object type literal with each property", () => {
        const file = new SchemaFileNode(
          {
            description: "",
            primaryIdentifier: [],
            properties: {
              one: { type: "string" },
              two: { type: "number" },
            },
            readOnlyProperties: ["/properties/one"],
            typeName: "Acme::Service::Resource",
          },
          "file.json",
        );

        const input = new ObjectTypeNode(file.schema, file, "");

        const output = createType(input);

        assert.ok(ts.isTypeLiteralNode(output));
        assert.strictEqual(output.members.length, 2);

        assert.ok(ts.isPropertySignature(output.members[0]));
        assert.ok(ts.isIdentifier(output.members[0].name));
        assert.strictEqual(output.members[0].name.text, "one");
        assert.strictEqual(
          output.members[0].type?.kind,
          ts.SyntaxKind.StringKeyword,
        );

        assert.ok(ts.isPropertySignature(output.members[1]));
        assert.ok(ts.isIdentifier(output.members[1].name));
        assert.strictEqual(output.members[1].name.text, "two");
        assert.strictEqual(
          output.members[1].type?.kind,
          ts.SyntaxKind.NumberKeyword,
        );
      });

      it("quotes properties that are not valid identifiers", () => {
        const file = new SchemaFileNode(
          {
            description: "",
            primaryIdentifier: [],
            properties: {
              "one.prop": { type: "string" },
              "!": { type: "number" },
            },
            typeName: "Acme::Service::Resource",
          },
          "file.json",
        );

        const input = new ObjectTypeNode(file.schema, file, "");

        const output = createType(input);

        assert.ok(ts.isTypeLiteralNode(output));
        assert.strictEqual(output.members.length, 2);

        assert.ok(ts.isPropertySignature(output.members[0]));
        assert.ok(ts.isStringLiteral(output.members[0].name));
        assert.strictEqual(output.members[0].name.text, "one.prop");
        assert.strictEqual(
          output.members[0].type?.kind,
          ts.SyntaxKind.StringKeyword,
        );

        assert.ok(ts.isPropertySignature(output.members[1]));
        assert.ok(ts.isStringLiteral(output.members[1].name));
        assert.strictEqual(output.members[1].name.text, "!");
        assert.strictEqual(
          output.members[1].type?.kind,
          ts.SyntaxKind.NumberKeyword,
        );
      });

      it("makes optional properties optional", () => {
        const file = new SchemaFileNode(
          {
            description: "",
            primaryIdentifier: [],
            properties: {
              one: { type: "string" },
              two: { type: "number" },
            },
            required: ["one"],
            typeName: "Acme::Service::Resource",
          },
          "file.json",
        );

        const input = new ObjectTypeNode(file.schema, file, "");

        const output = createType(input);

        assert.ok(ts.isTypeLiteralNode(output));
        assert.strictEqual(output.members.length, 2);

        assert.ok(ts.isPropertySignature(output.members[0]));
        assert.ok(ts.isIdentifier(output.members[0].name));
        assert.strictEqual(output.members[0].name.text, "one");
        assert.strictEqual(output.members[0].questionToken, undefined);

        assert.ok(ts.isPropertySignature(output.members[1]));
        assert.ok(ts.isIdentifier(output.members[1].name));
        assert.strictEqual(output.members[1].name.text, "two");
        assert.ok(output.members[1].questionToken);
        assert.strictEqual(
          output.members[1].questionToken.kind,
          ts.SyntaxKind.QuestionToken,
        );
      });
    });

    describe('when "patternProperties" is specified', () => {
      it("returns a Record type", () => {
        const file = new SchemaFileNode(
          {
            description: "",
            primaryIdentifier: [],
            properties: {},
            typeName: "Acme::Service::Resource",
          },
          "file.json",
        );

        const input = new ObjectTypeNode(
          {
            type: "object",
            patternProperties: {
              ".*": { type: "number" },
            },
          },
          file,
          "",
        );

        const output = createType(input);

        assert.ok(ts.isTypeReferenceNode(output));
        assert.ok(ts.isIdentifier(output.typeName));
        assert.strictEqual(output.typeName.text, "Record");
        assert.strictEqual(output.typeArguments?.length, 2);

        assert.strictEqual(
          output.typeArguments[0].kind,
          ts.SyntaxKind.StringKeyword,
        );
        assert.strictEqual(
          output.typeArguments[1].kind,
          ts.SyntaxKind.NumberKeyword,
        );
      });
    });

    describe('when readOnlyProperties is set to "inline"', () => {
      it("outputs only the readOnly properties", () => {
        const file = new SchemaFileNode(
          {
            description: "",
            primaryIdentifier: [],
            properties: {
              one: { type: "string" },
              two: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    a: { type: "string" },
                    b: { type: "string" },
                  },
                },
              },
              three: { type: "string" },
            },
            readOnlyProperties: [
              "/properties/one",
              "/properties/two",
              "/properties/two/*/a",
            ],
            typeName: "Acme::Service::Resource",
          },
          "file.json",
        );

        const input = new ObjectTypeNode(file.schema, file, "");

        const output = createType(input, { readOnlyProperties: "inline" });

        assert.ok(ts.isTypeLiteralNode(output));
        assert.strictEqual(output.members.length, 2);

        assert.ok(ts.isPropertySignature(output.members[0]));
        assert.ok(ts.isIdentifier(output.members[0].name));
        assert.strictEqual(output.members[0].name.text, "one");
        assert.strictEqual(
          output.members[0].type?.kind,
          ts.SyntaxKind.StringKeyword,
        );

        assert.ok(ts.isPropertySignature(output.members[1]));
        assert.ok(ts.isIdentifier(output.members[1].name));
        assert.strictEqual(output.members[1].name.text, "two");

        const member1Type = output.members[1].type;
        assert.ok(member1Type);
        assert.ok(ts.isArrayTypeNode(member1Type));

        const member1ElementType = member1Type.elementType;
        assert.ok(ts.isTypeLiteralNode(member1ElementType));
        assert.strictEqual(member1ElementType.members.length, 1);
        assert.ok(ts.isPropertySignature(member1ElementType.members[0]));
        assert.ok(ts.isIdentifier(member1ElementType.members[0].name));
        assert.strictEqual(member1ElementType.members[0].name.text, "a");
      });

      it("inlines definitions", () => {
        const file = new SchemaFileNode(
          {
            description: "",
            primaryIdentifier: [],
            definitions: {
              Foo: {
                type: "object",
                properties: {
                  a: { type: "string" },
                  b: { type: "string" },
                },
              },
            },
            properties: {
              one: { type: "string" },
              two: {
                type: "array",
                items: { $ref: "#/definitions/Foo" },
              },
              three: { type: "string" },
            },
            readOnlyProperties: [
              "/properties/one",
              "/properties/two",
              "/properties/two/*/a",
            ],
            typeName: "Acme::Service::Resource",
          },
          "file.json",
        );

        const input = new ObjectTypeNode(file.schema, file, "");

        const output = createType(input, { readOnlyProperties: "inline" });

        assert.ok(ts.isTypeLiteralNode(output));
        assert.strictEqual(output.members.length, 2);

        assert.ok(ts.isPropertySignature(output.members[0]));
        assert.ok(ts.isIdentifier(output.members[0].name));
        assert.strictEqual(output.members[0].name.text, "one");
        assert.strictEqual(
          output.members[0].type?.kind,
          ts.SyntaxKind.StringKeyword,
        );

        assert.ok(ts.isPropertySignature(output.members[1]));
        assert.ok(ts.isIdentifier(output.members[1].name));
        assert.strictEqual(output.members[1].name.text, "two");

        const member1Type = output.members[1].type;
        assert.ok(member1Type);
        assert.ok(ts.isArrayTypeNode(member1Type));

        const member1ElementType = member1Type.elementType;
        assert.ok(ts.isTypeLiteralNode(member1ElementType));
        assert.strictEqual(member1ElementType.members.length, 1);
        assert.ok(ts.isPropertySignature(member1ElementType.members[0]));
        assert.ok(ts.isIdentifier(member1ElementType.members[0].name));
        assert.strictEqual(member1ElementType.members[0].name.text, "a");
      });
    });

    describe('when readOnlyProperties is set to "exclude"', () => {
      it("outputs only the non-readOnly properties", () => {
        const file = new SchemaFileNode(
          {
            description: "",
            primaryIdentifier: [],
            properties: {
              one: { type: "string" },
              two: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    a: { type: "string" },
                    b: { type: "string" },
                  },
                },
              },
              three: { type: "string" },
            },
            readOnlyProperties: ["/properties/one", "/properties/two/*/a"],
            typeName: "Acme::Service::Resource",
          },
          "file.json",
        );

        const input = new ObjectTypeNode(file.schema, file, "");

        const output = createType(input, { readOnlyProperties: "exclude" });

        assert.ok(ts.isTypeLiteralNode(output));
        assert.strictEqual(output.members.length, 2);

        assert.ok(ts.isPropertySignature(output.members[0]));
        assert.ok(ts.isIdentifier(output.members[0].name));
        assert.strictEqual(output.members[0].name.text, "two");

        const member0Type = output.members[0].type;
        assert.ok(member0Type);
        assert.ok(ts.isArrayTypeNode(member0Type));

        const member0ElementType = member0Type.elementType;
        assert.ok(ts.isTypeLiteralNode(member0ElementType));
        assert.strictEqual(member0ElementType.members.length, 1);
        assert.ok(ts.isPropertySignature(member0ElementType.members[0]));
        assert.ok(ts.isIdentifier(member0ElementType.members[0].name));
        assert.strictEqual(member0ElementType.members[0].name.text, "b");

        assert.ok(ts.isPropertySignature(output.members[1]));
        assert.ok(ts.isIdentifier(output.members[1].name));
        assert.strictEqual(output.members[1].name.text, "three");
        assert.strictEqual(
          output.members[1].type?.kind,
          ts.SyntaxKind.StringKeyword,
        );
      });
    });
  });

  describe("when node is StringTypeNode", () => {
    it("returns a string type", () => {
      const input = new StringTypeNode(
        { type: "string" },
        {} as SchemaFileNode,
        "",
      );

      const output = createType(input);

      assert.strictEqual(output.kind, ts.SyntaxKind.StringKeyword);
    });

    it('returns a literal type when "const" is given', () => {
      const input = new StringTypeNode(
        { type: "string", const: "hello world" },
        {} as SchemaFileNode,
        "",
      );

      const output = createType(input);

      assert.ok(ts.isLiteralTypeNode(output));
      assert.ok(ts.isStringLiteral(output.literal));
      assert.strictEqual(output.literal.text, "hello world");
    });

    it('returns a literal type union when "enum" is given', () => {
      const input = new StringTypeNode(
        { type: "string", enum: ["Fred", "George", "Ronald"] },
        {} as SchemaFileNode,
        "",
      );

      const output = createType(input);

      assert.ok(ts.isUnionTypeNode(output));
      assert.strictEqual(output.types.length, 3);

      assert.ok(ts.isLiteralTypeNode(output.types[0]));
      assert.ok(ts.isStringLiteral(output.types[0].literal));
      assert.strictEqual(output.types[0].literal.text, "Fred");

      assert.ok(ts.isLiteralTypeNode(output.types[1]));
      assert.ok(ts.isStringLiteral(output.types[1].literal));
      assert.strictEqual(output.types[1].literal.text, "George");

      assert.ok(ts.isLiteralTypeNode(output.types[2]));
      assert.ok(ts.isStringLiteral(output.types[2].literal));
      assert.strictEqual(output.types[2].literal.text, "Ronald");
    });
  });

  describe("when node is UnionTypeNode", () => {
    it("returns a union type", () => {
      const input = TypeNode.makeTypeNode(
        { anyOf: [{ type: "string" }, { type: "number" }] },
        {} as SchemaFileNode,
        "",
      );

      const output = createType(input);

      assert.ok(ts.isUnionTypeNode(output));
      assert.strictEqual(output.types.length, 2);

      assert.strictEqual(output.types[0].kind, ts.SyntaxKind.StringKeyword);
      assert.strictEqual(output.types[1].kind, ts.SyntaxKind.NumberKeyword);
    });
  });
});
