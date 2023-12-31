import type { ResourceTypeSchema } from "@awboost/cfn-resource-schemas/types";
import JsonPointer from "json-pointer";
import type { JSONSchema7, JSONSchema7Definition } from "json-schema";
import { join } from "path/posix";
import { formatWithOptions } from "util";

export type Problem = {
  level: "error" | "warn";
  message: string;
  node: NodeBase;
};

export type TypeDocumentation = {
  description?: string;
  maximum?: number;
  maxItems?: number;
  maxLength?: number;
  minimum?: number;
  minItems?: number;
  minLength?: number;
  pattern?: string;
};

export class SchemaFileNode {
  private readonly definitionMap = new Map<string, TypeDefinitionNode>();

  public readonly description?: string;
  public readonly documentationUrl?: string;
  public readonly problems: Problem[] = [];
  public readonly typeName: string;

  public readonly createOnlyProperties: PropertyListNode;
  public readonly readOnlyProperties: PropertyListNode;
  public readonly writeOnlyProperties: PropertyListNode;

  public readonly model: ObjectTypeNode;

  public get definitions(): Iterable<TypeDefinitionNode> {
    return this.definitionMap.values();
  }

  constructor(
    public readonly schema: ResourceTypeSchema,
    public readonly fileName: string,
  ) {
    this.description = schema.description;
    this.documentationUrl = schema.documentationUrl;
    this.typeName = schema.typeName;

    this.createOnlyProperties = new PropertyListNode(
      schema.createOnlyProperties ?? [],
      this,
      "/createOnlyProperties",
    );
    this.readOnlyProperties = new PropertyListNode(
      schema.readOnlyProperties ?? [],
      this,
      "/readOnlyProperties",
    );
    this.writeOnlyProperties = new PropertyListNode(
      schema.writeOnlyProperties ?? [],
      this,
      "/writeOnlyProperties",
    );

    this.model = new ObjectTypeNode({ ...schema, type: "object" }, this, "");
  }

  public error(node: NodeBase, message: string, ...args: any[]): void {
    this.problems.push({
      level: "error",
      message: formatWithOptions({ depth: 10 }, message, ...args),
      node,
    });
  }

  public getDefinition(ref: string, sourcePath: string): TypeNode {
    const existing = this.definitionMap.get(ref);
    if (existing) {
      if (!existing.isInitialized) {
        existing.isCircularRef = true;
      }
      return existing;
    }

    const prefix = "#/definitions/";
    if (!ref.startsWith(prefix)) {
      return new InvalidTypeNode(
        { $ref: ref },
        this,
        sourcePath,
        `invalid reference "${ref}"`,
      );
    }

    const typeName = ref.slice(prefix.length);
    const schema = this.schema.definitions?.[typeName];

    if (!schema) {
      return new InvalidTypeNode(
        { $ref: ref },
        this,
        sourcePath,
        `invalid reference "${ref}"`,
      );
    }

    const def = new TypeDefinitionNode(typeName, schema, this, ref.slice(1));
    this.definitionMap.set(ref, def);
    def.init();
    return def;
  }

  public warn(node: NodeBase, message: string, ...args: any[]): void {
    this.problems.push({
      level: "warn",
      message: formatWithOptions({ depth: 10 }, message, ...args),
      node,
    });
  }
}

export abstract class NodeBase<T = unknown> {
  public static joinRef(base: string, ...parts: string[]): string {
    return join(base, JsonPointer.compile(parts));
  }

  private _hasError = false;
  public get hasError(): boolean {
    return this._hasError;
  }

  constructor(
    public readonly schema: T,
    public readonly file: SchemaFileNode,
    public readonly path: string,
  ) {}

  public childRef(...parts: string[]): string {
    return NodeBase.joinRef(this.path, ...parts);
  }

  protected error(message: string, ...args: any[]): void {
    this._hasError = true;
    this.file.error(this, message, ...args);
  }

  protected warn(message: string, ...args: any[]): void {
    this.file.warn(this, message, ...args);
  }
}

export class PropertyListNode extends NodeBase<string[]> {
  constructor(paths: string[], file: SchemaFileNode, path: string) {
    super([], file, path);

    for (const path of paths) {
      const result = this.convertChildPath(this.file.schema, path);
      if (result) {
        this.schema.push(result);
      } else {
        this.warn(`invalid reference "${path}"`);
      }
    }
  }

  public includes(path: string): boolean {
    return !!this.schema.find((x) => x === path || path.startsWith(x + "/"));
  }

  private convertChildPath(
    schema: JSONSchema7,
    path: string,
    ref = "",
  ): string | undefined {
    // replace wrong casing
    path = path.replace(/^\/properties\//i, "/properties/");

    // some AWS schemas have dot-delimited props
    const [first, ...restParts] = path.slice(1).split(/\/|\./);
    const rest = restParts.join("/");

    let searchPath: string;
    if (first === "*") {
      if (schema.additionalProperties) {
        searchPath = "/additionalProperties";
      } else if (schema.items) {
        searchPath = "/items";
      } else {
        return;
      }
    } else {
      searchPath = `/${first}`;
    }

    let found = this.resolve(`#${searchPath}`, schema);
    if (!found) {
      searchPath = `/properties` + searchPath;
      found = this.resolve(`#${searchPath}`, schema);
      if (!found) {
        return;
      }
    }

    if (typeof found.$ref === "string") {
      const target = this.resolve(found.$ref);
      if (!target) {
        return;
      }
      if (!rest) {
        return ref + searchPath;
      }
      return this.convertChildPath(target, `/${rest}`, found.$ref.slice(1));
    }

    if (!rest) {
      return ref + searchPath;
    }
    return this.convertChildPath(found, `/${rest}`, ref + searchPath);
  }

  private resolve(ref: string, schema: any = this.file.schema): any {
    if (!ref.startsWith("#")) {
      return;
    }
    try {
      return JsonPointer.get(schema, ref.slice(1));
    } catch {
      return;
    }
  }
}

export abstract class SchemaNodeBase extends NodeBase<JSONSchema7 | undefined> {
  public description?: string;

  constructor(
    schema: JSONSchema7Definition,
    file: SchemaFileNode,
    path: string,
  ) {
    super(typeof schema === "boolean" ? undefined : schema, file, path);

    if (typeof schema === "boolean") {
      this.error(`unexpected boolean`);
      return;
    }

    this.description = schema.description;
  }
}

export class TypeNode extends SchemaNodeBase {
  public static makeTypeNode(
    schema: JSONSchema7Definition,
    file: SchemaFileNode,
    path: string,
  ): TypeNode {
    if (typeof schema === "boolean") {
      return new InvalidTypeNode(schema, file, path);
    }

    if (schema.$ref) {
      return file.getDefinition(schema.$ref, path);
    }
    if (Array.isArray(schema.type) || UnionTypeNode.isRealUnion(schema)) {
      return UnionTypeNode.makeUnionTypeNode(schema, file, path);
    }
    if (schema.type === "array") {
      return new ArrayTypeNode(schema, file, path);
    }
    if (schema.type === "boolean") {
      return new BooleanTypeNode(schema, file, path);
    }
    if (schema.type === "integer") {
      return new IntegerTypeNode(schema, file, path);
    }
    if (schema.type === "number") {
      return new NumberTypeNode(schema, file, path);
    }
    if (schema.type === "null") {
      return new NullTypeNode(schema, file, path);
    }
    if (schema.type === "string") {
      return new StringTypeNode(schema, file, path);
    }
    if (
      schema.type === "object" ||
      schema.properties ||
      schema.patternProperties
    ) {
      return new ObjectTypeNode(schema, file, path);
    }
    if (!schema.type) {
      return new AnyTypeNode(schema, file, path);
    }

    // compile time check that we've checked for all values of schema.type
    const exhaustiveCheck: never = schema.type;
    void exhaustiveCheck;
    return new InvalidTypeNode(schema, file, path);
  }

  public allChildrenReadOnly(): boolean {
    return false;
  }

  public anyChildrenReadOnly(): boolean {
    return false;
  }
}

export class AnyTypeNode extends TypeNode {}

export class InvalidTypeNode extends TypeNode {
  constructor(
    schema: JSONSchema7Definition,
    file: SchemaFileNode,
    path: string,
    error = `invalid schema node`,
  ) {
    super(schema, file, path);
    this.error(error);
  }
}

export class ArrayTypeNode extends TypeNode {
  public readonly items?: TypeNode;
  public readonly maxItems?: number;
  public readonly minItems?: number;

  constructor(
    schema: JSONSchema7Definition,
    file: SchemaFileNode,
    path: string,
  ) {
    super(schema, file, path);
    if (!this.schema) {
      return;
    }

    this.maxItems = this.schema.maxItems;
    this.minItems = this.schema.minItems;

    if (this.schema.items) {
      if (Array.isArray(this.schema.items)) {
        this.error(`tuple types are not supported`);
      } else {
        this.items = TypeNode.makeTypeNode(
          this.schema.items,
          file,
          this.childRef("items"),
        );
      }
    }
  }

  public override allChildrenReadOnly(): boolean {
    return !!this.items?.allChildrenReadOnly();
  }

  public override anyChildrenReadOnly(): boolean {
    return !!this.items?.anyChildrenReadOnly();
  }
}

export class PrimitiveTypeNodeBase<
  T extends number | string | boolean,
> extends TypeNode {
  public readonly const?: T;
  public readonly enum?: T[];

  protected constructor(
    schema: JSONSchema7Definition,
    file: SchemaFileNode,
    path: string,
    validate: (value: unknown) => value is T,
  ) {
    super(schema, file, path);
    if (!this.schema) {
      return;
    }

    if (this.schema.const && this.schema.enum) {
      this.error(`can't specify "const" and "enum" in same schema`);
      return;
    }

    if (this.schema.const) {
      if (validate(this.schema.const)) {
        this.const = this.schema.const;
      } else {
        this.error(
          `value of "const" field is not valid for schema type "${this.schema.type}"`,
        );
      }
    }
    if (this.schema.enum) {
      if (this.schema.enum.every(validate)) {
        this.enum = this.schema.enum;
      } else {
        this.error(
          `value of "enum" field is not valid for schema type "${this.schema.type}"`,
        );
      }
    }
  }
}

export class BooleanTypeNode extends TypeNode {}
export class NullTypeNode extends TypeNode {}

export class NumberTypeNodeBase extends PrimitiveTypeNodeBase<number> {
  public readonly exclusiveMaximum?: number;
  public readonly exclusiveMinimum?: number;
  public readonly maximum?: number;
  public readonly minimum?: number;
  public readonly multipleOf?: number;

  protected constructor(
    schema: JSONSchema7Definition,
    file: SchemaFileNode,
    path: string,
    validate: (x: unknown) => x is number,
  ) {
    super(schema, file, path, validate);
    if (!this.schema) {
      return;
    }

    this.exclusiveMaximum = this.schema.exclusiveMaximum;
    this.exclusiveMinimum = this.schema.exclusiveMinimum;
    this.maximum = this.schema.maximum;
    this.minimum = this.schema.minimum;
    this.multipleOf = this.schema.multipleOf;
  }
}

export class NumberTypeNode extends NumberTypeNodeBase {
  constructor(
    schema: JSONSchema7Definition,
    file: SchemaFileNode,
    path: string,
  ) {
    super(schema, file, path, (x): x is number => Number.isFinite(x));
  }
}

export class IntegerTypeNode extends NumberTypeNodeBase {
  constructor(
    schema: JSONSchema7Definition,
    file: SchemaFileNode,
    path: string,
  ) {
    super(schema, file, path, (x): x is number => Number.isSafeInteger(x));
  }
}

export class StringTypeNode extends PrimitiveTypeNodeBase<string> {
  public readonly format?: string;
  public readonly maxLength?: number;
  public readonly minLength?: number;
  public readonly pattern?: string;

  constructor(
    schema: JSONSchema7Definition,
    file: SchemaFileNode,
    path: string,
  ) {
    super(schema, file, path, (x): x is string => typeof x === "string");
    if (!this.schema) {
      return;
    }

    this.format = this.schema.format;
    this.maxLength = this.schema.maxLength;
    this.minLength = this.schema.minLength;
    this.pattern = this.schema.pattern;
  }
}

export class PropertyNode extends SchemaNodeBase {
  public readonly createOnly?: boolean;
  public readonly readOnly?: boolean;
  public readonly required?: boolean;
  public readonly name: string;
  public readonly type?: TypeNode;
  public readonly writeOnly?: boolean;

  public get documentation(): TypeDocumentation {
    let type: any = this.type;
    if (type instanceof TypeDefinitionNode) {
      type = type.type;
    }
    return {
      description: this.description,
      maximum: type.maximum,
      maxItems: type.maxItems,
      maxLength: type.maxLength,
      minimum: type.minimum,
      minItems: type.minItems,
      minLength: type.minLength,
      pattern: type.pattern,
    };
  }

  constructor(
    name: string,
    schema: JSONSchema7Definition,
    parent: ObjectTypeNode,
  ) {
    const path = parent.childRef("properties", name);
    super(schema, parent.file, path);

    this.name = name;

    this.createOnly = this.file.createOnlyProperties.includes(path);
    this.readOnly = this.file.readOnlyProperties.includes(path);
    this.required = parent.required.includes(name);
    this.writeOnly = this.file.writeOnlyProperties.includes(path);

    if (!this.schema) {
      return;
    }

    this.type = TypeNode.makeTypeNode(this.schema, parent.file, path);

    // set the prop to readonly if the property type is readonly.
    // this means that all of the properties of the type are readonly, or similar.
    if (this.type?.allChildrenReadOnly()) {
      this.readOnly = true;
    }

    if (!this.description) {
      this.description = this.type.description;
    }
  }
}

export class ObjectTypeNode extends TypeNode {
  public readonly additionalProperties?: TypeNode;
  public readonly properties: PropertyNode[] = [];
  public readonly required: string[] = [];

  constructor(
    schema: JSONSchema7Definition,
    file: SchemaFileNode,
    path: string,
  ) {
    super(schema, file, path);
    if (!this.schema) {
      return;
    }

    if (this.schema.required) {
      this.required.push(...this.schema.required);
    }
    if (this.schema.properties) {
      for (const [name, value] of Object.entries(this.schema.properties)) {
        this.properties.push(new PropertyNode(name, value, this));
      }
    }
    if (this.schema.patternProperties) {
      const schemas = Object.values(this.schema.patternProperties);
      if (schemas.length > 1) {
        // we only support multiple schemas here if it's just different
        // validations on string. We strip the validation props off to avoid
        // confusion
        if (
          schemas.every((x) => typeof x !== "boolean" && x.type === "string")
        ) {
          this.additionalProperties = new StringTypeNode(
            { type: "string" },
            file,
            NodeBase.joinRef(path, "patternProperties"),
          );
        } else {
          this.error(
            "multiple types in patternProperties %O",
            this.schema.patternProperties,
          );
        }
      } else if (schemas.length === 1) {
        this.additionalProperties = TypeNode.makeTypeNode(
          schemas[0],
          file,
          NodeBase.joinRef(
            path,
            "patternProperties",
            Object.keys(this.schema.patternProperties)[0],
          ),
        );
      }
    }
    if (this.schema.additionalProperties) {
      this.error(`"additionalProperties" is not supported`);
    }
  }

  public override allChildrenReadOnly(): boolean {
    return (
      this.properties.length > 0 && this.properties.every((x) => x.readOnly)
    );
  }

  public override anyChildrenReadOnly(): boolean {
    return this.properties.some(
      (x) => x.readOnly || x.type?.anyChildrenReadOnly(),
    );
  }
}

export class TypeDefinitionNode extends TypeNode {
  public _type: TypeNode | undefined;
  public readonly typeName: string;

  public isCircularRef = false;

  public get isInitialized(): boolean {
    return !!this._type;
  }

  public get type(): TypeNode {
    if (!this._type) {
      throw new Error(`type not set yet`);
    }
    return this._type;
  }

  constructor(
    name: string,
    schema: JSONSchema7Definition,
    file: SchemaFileNode,
    path: string,
  ) {
    super(schema, file, path);
    this.typeName = name;
  }

  public init(): void {
    if (!this.schema) {
      return;
    }
    this._type = TypeNode.makeTypeNode(this.schema, this.file, this.path);
    this.description = this.type.description;
  }

  public override allChildrenReadOnly(): boolean {
    if (this.isCircularRef) {
      return false;
    }
    return this.type.allChildrenReadOnly();
  }

  public override anyChildrenReadOnly(): boolean {
    if (this.isCircularRef) {
      return false;
    }
    return this.type.anyChildrenReadOnly();
  }
}

export class UnionTypeNode extends TypeNode {
  public static makeUnionTypeNode(
    schema: JSONSchema7Definition,
    file: SchemaFileNode,
    path: string,
  ): TypeNode {
    if (typeof schema === "boolean") {
      return new InvalidTypeNode(schema, file, path);
    }

    let schemas: JSONSchema7Definition[] | undefined;
    let childPath: string;

    if (Array.isArray(schema.type)) {
      schemas = schema.type.map((type) => ({ ...schema, type }));
      childPath = path;
    } else if (schema.anyOf) {
      schemas = schema.anyOf;
      childPath = NodeBase.joinRef(path, "anyOf");
    } else if (schema.oneOf) {
      schemas = schema.oneOf;
      childPath = NodeBase.joinRef(path, "oneOf");
    } else {
      childPath = "";
    }

    if (!schemas?.length) {
      return new InvalidTypeNode(schema, file, path, "not a valid union type");
    }
    if (schemas.length === 1) {
      return TypeNode.makeTypeNode(
        schemas[0],
        file,
        NodeBase.joinRef(childPath, "0"),
      );
    }

    return new UnionTypeNode(
      schema,
      file,
      path,
      schemas.map((x, i) =>
        TypeNode.makeTypeNode(x, file, NodeBase.joinRef(childPath, `${i}`)),
      ),
    );
  }

  /**
   * Returns true if the schema is a union of types rather than just
   * validation constraints.
   */
  public static isRealUnion(schema: JSONSchema7): boolean {
    if (Array.isArray(schema.type)) {
      return true;
    }

    if (schema.anyOf) {
      return (
        schema.anyOf.length > 0 && schema.anyOf.every((x) => this.isRealType(x))
      );
    }
    if (schema.oneOf) {
      return (
        schema.oneOf.length > 0 && schema.oneOf.every((x) => this.isRealType(x))
      );
    }
    return false;
  }

  private static isRealType(schema: JSONSchema7Definition): boolean {
    if (typeof schema === "boolean") {
      return false;
    }

    if (this.isRealUnion(schema)) {
      return true;
    }

    const realTypeKeys = ["type", "properties", "patternProperties", "$ref"];
    return Object.keys(schema).some((x) => realTypeKeys.includes(x));
  }

  public readonly types: TypeNode[];

  private constructor(
    baseSchema: JSONSchema7Definition,
    file: SchemaFileNode,
    path: string,
    types: TypeNode[],
  ) {
    super(baseSchema, file, path);
    this.types = types;
  }

  public override allChildrenReadOnly(): boolean {
    return (
      !!this.types?.length && this.types?.every((x) => x.allChildrenReadOnly())
    );
  }
}
