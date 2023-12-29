export type BooleanType = {
  type: "boolean";
  description?: string;
  documentationUrl?: string;
};

export type NumberType = {
  type: "number";
  description?: string;
  documentationUrl?: string;
  allowedValues?: number[];
  isInteger?: boolean;
  minimum?: number;
  maximum?: number;
};

export type NullType = {
  type: "null";
  description?: string;
  documentationUrl?: string;
};

export type StringType = {
  type: "string";
  description?: string;
  documentationUrl?: string;
  allowedValues?: string[];
  minLength?: number;
  maxLength?: number;
  pattern?: string;
};

export type UndefinedType = {
  type: "undefined";
  description?: string;
  documentationUrl?: string;
};

export type PrimitiveType =
  | BooleanType
  | NumberType
  | NullType
  | StringType
  | UndefinedType;

export type AnyType = {
  type: "any";
  description?: string;
  documentationUrl?: string;
};

export type ArrayType = {
  type: "array";
  description?: string;
  documentationUrl?: string;
  itemType?: TypeDefinition;
  minLength?: number;
  maxLength?: number;
};

export type UnionType = {
  type: "union";
  description?: string;
  documentationUrl?: string;
  types: TypeDefinition[];
};

export type RecordType = {
  type: "record";
  description?: string;
  documentationUrl?: string;
  keyPattern?: string;
  valueType?: TypeDefinition;
};

export type PropertyDefinition = {
  name: string;
  createOnly?: boolean;
  description?: string;
  optional?: boolean;
  readOnly?: boolean;
  type: TypeDefinition;
  writeOnly?: boolean;
};

export type ObjectType = {
  type: "object";
  description?: string;
  documentationUrl?: string;
  properties: PropertyDefinition[];
};

export type RefType = {
  type: "ref";
  typeName: string;
  description?: string;
};

export type TypeDefinition =
  | AnyType
  | ArrayType
  | ObjectType
  | PrimitiveType
  | RecordType
  | RefType
  | UnionType;

export type ResourceNamespace = {
  awsTypeName: string;
  definitions: Record<string, TypeDefinition>;
  resource: ObjectType;
};
