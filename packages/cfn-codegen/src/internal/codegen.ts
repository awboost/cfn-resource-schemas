import {
  AnyTypeNode,
  ArrayTypeNode,
  BooleanTypeNode,
  NullTypeNode,
  NumberTypeNodeBase,
  ObjectTypeNode,
  PrimitiveTypeNodeBase,
  PropertyNode,
  SchemaFileNode,
  StringTypeNode,
  TypeDefinitionNode,
  UnionTypeNode,
  type TypeDocumentation,
  type TypeNode,
} from "@awboost/cfn-resource-schemas/nodes";
import ts from "typescript";

const DefaultResourceBuilderClassName = "Resource";
const DefaultResourceBuilderModule =
  "@awboost/cfn-template-builder/template/resource";
const DefaultResourceOptionsTypeName = "ResourceOptions";
const DefaultResourceOptionsModule = "@awboost/cfn-template-builder/template";
const LogicalResourceIdParam = "logicalId";
const OptionsParam = "options";
const PropertiesParam = "properties";
const ResourceAttribsTypeSuffix = "Attributes";
const ResourceAttribsTypeSuffixAlt = "Attribs";
const ResourceBuilderLocalClass = "$Resource";
const ResourceClassSuffix = "";
const ResourceClassTypeProp = "Type";
const ResourceModelTypeSuffix = "Model";
const ResourceOptionsLocalType = "$ResourceOptions";
const ResourcePropsTypeSuffix = "Properties";

export type ImportGenerationOptions = {
  resourceBuilderModule?: string;
  resourceBuilderClassName?: string;
  resourceOptionsModule?: string;
  resourceOptionsTypeName?: string;
};

export type TypeGenerationOptions = {
  inline?: boolean;
  mode?: "attributes" | "properties";
};

type DocumentationProps = TypeDocumentation & {
  awsTypeKind?: "attributes" | "definition" | "resource";
  awsTypeName?: string;
  documentationUrl?: string;
};

function mangleName(ns: string, type: string): string {
  return ns.replace(/^AWS|::|\./g, "") + type;
}

function attachComment<T extends ts.Node>(
  input: DocumentationProps | (DocumentationProps | undefined)[],
  node: T,
): T {
  let props: DocumentationProps;
  if (Array.isArray(input)) {
    props = Object.fromEntries(
      input.flatMap((x) =>
        x ? Object.entries(x).filter(([, v]) => v !== undefined) : [],
      ),
    );
  } else {
    props = input;
  }
  const lines: string[] = [];

  if (props.awsTypeName && !props.description?.includes(props.awsTypeName)) {
    if (props.awsTypeKind === "attributes") {
      lines.push(`Attribute type definition for \`${props.awsTypeName}\`.`);
    } else if (props.awsTypeKind === "definition") {
      lines.push(`Type definition for \`${props.awsTypeName}\`.`);
    } else if (props.awsTypeKind === "resource") {
      lines.push(`Resource type definition for \`${props.awsTypeName}\`.`);
    }
  }

  if (props.description) {
    lines.push(props.description);
  }

  // number validation
  if (props.minimum !== undefined) {
    lines.push(`@min \`${props.minimum}\``);
  }
  if (props.maximum !== undefined) {
    lines.push(`@max \`${props.maximum}\``);
  }

  // string validation
  if (props.minLength !== undefined) {
    lines.push(`@minLength \`${props.minLength}\``);
  }
  if (props.maxLength !== undefined) {
    lines.push(`@maxLength \`${props.maxLength}\``);
  }
  if (props.pattern !== undefined) {
    lines.push(`@pattern \`${props.pattern}\``);
  }

  // array validation
  if (props.minItems !== undefined) {
    lines.push(`@minLength \`${props.minItems}\``);
  }
  if (props.maxItems !== undefined) {
    lines.push(`@maxLength \`${props.maxItems}\``);
  }

  if (props.documentationUrl !== undefined) {
    lines.push(`@see {@link ${props.documentationUrl}}`);
  }

  if (!lines.length) {
    return node;
  }
  // escape the */ sequence to avoid prematurely closing the comment
  const text =
    ["*", ...lines].join("\n * ").replace(/\*\//g, "/\u200d*") + "\n ";

  return ts.addSyntheticLeadingComment(
    node,
    ts.SyntaxKind.MultiLineCommentTrivia,
    text,
    true,
  );
}

function makeDocumentationUrl(
  typeName: string,
  extra?: "attributes",
): string | undefined {
  const match = typeName
    .toLowerCase()
    .match(/^(?:aws|alexa)::(.+)::([^.]+)(?:\.(.+))?$/);

  if (!match) {
    return;
  }

  const ns = match[3] ? "properties" : "resource";
  const suffix = match[3] ? "-" + match[3] : "";

  let url = `https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-${ns}-${match[1]}-${match[2]}${suffix}.html`;
  if (ns !== "properties" && extra === "attributes") {
    url += `#aws-resource-${match[1]}-${match[2]}-return-values`;
  }
  return url;
}

function shouldInlineType(type: TypeNode, inlineAllObjects?: boolean): boolean {
  if (type instanceof TypeDefinitionNode) {
    return shouldInlineType(type.type, inlineAllObjects);
  }
  if (type instanceof ArrayTypeNode) {
    // always inline arrays because the indirection isn't necessary
    return true;
  }
  if (type instanceof PrimitiveTypeNodeBase) {
    // only inline primitives if they aren't enums/consts
    return !type.enum && !type.const;
  }
  if (type instanceof ObjectTypeNode && inlineAllObjects) {
    return true;
  }
  return type instanceof BooleanTypeNode || type instanceof NullTypeNode;
}

function quoteName(name: string): ts.Identifier | ts.StringLiteral {
  if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(name)) {
    return ts.factory.createStringLiteral(name);
  }
  return ts.factory.createIdentifier(name);
}

export function createObjectType(
  node: ObjectTypeNode,
  opts?: TypeGenerationOptions,
  emptyTypeIsEmpty = false,
): ts.TypeNode {
  let props: PropertyNode[];
  if (opts?.mode === "attributes" && !opts?.inline) {
    props = node.properties.filter(
      (x) => x.readOnly || x.type?.anyChildrenReadOnly(),
    );
  } else if (opts?.mode === "properties") {
    props = node.properties.filter((x) => !x.readOnly);
  } else {
    props = node.properties;
  }

  let recordType: ts.TypeNode | undefined;

  if (node.additionalProperties || props.length === 0) {
    let valueType: ts.TypeNode;
    if (node.additionalProperties) {
      valueType = createType(node.additionalProperties, opts);
    } else if (emptyTypeIsEmpty) {
      valueType = ts.factory.createToken(ts.SyntaxKind.NeverKeyword);
    } else {
      valueType = ts.factory.createToken(ts.SyntaxKind.AnyKeyword);
    }
    recordType = ts.factory.createTypeReferenceNode("Record", [
      ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
      valueType,
    ]);
  }

  let objectType: ts.TypeNode | undefined;
  if (props.length) {
    objectType = ts.factory.createTypeLiteralNode(
      props.map((prop) =>
        attachComment(
          prop.documentation,
          ts.factory.createPropertySignature(
            undefined,
            quoteName(prop.name),
            prop.required || opts?.mode === "attributes"
              ? undefined
              : ts.factory.createToken(ts.SyntaxKind.QuestionToken),
            createType(prop.type, {
              ...opts,
              inline:
                opts?.inline || (prop.readOnly && opts?.mode === "attributes"),
            }),
          ),
        ),
      ),
    );
  }

  if (recordType && objectType) {
    return ts.factory.createIntersectionTypeNode([recordType, objectType]);
  } else if (recordType) {
    return recordType;
  } else if (objectType) {
    return objectType;
  }
  // we shouldn't get here due to the logic above
  throw new Error(`expected to have either record type or object type`);
}

export function createType(
  node: TypeNode | undefined,
  opts?: TypeGenerationOptions,
): ts.TypeNode {
  if (node === undefined || node instanceof AnyTypeNode) {
    return ts.factory.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword);
  } else if (node instanceof ArrayTypeNode) {
    const items = node.items
      ? createType(node.items, opts)
      : ts.factory.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword);
    return ts.factory.createArrayTypeNode(items);
  } else if (node instanceof BooleanTypeNode) {
    return ts.factory.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword);
  } else if (node instanceof NullTypeNode) {
    return ts.factory.createLiteralTypeNode(ts.factory.createNull());
  } else if (node instanceof NumberTypeNodeBase) {
    if (node.const) {
      return ts.factory.createLiteralTypeNode(
        ts.factory.createNumericLiteral(node.const),
      );
    } else if (node.enum) {
      return ts.factory.createUnionTypeNode(
        node.enum.map((element) =>
          ts.factory.createLiteralTypeNode(
            ts.factory.createNumericLiteral(element),
          ),
        ),
      );
    }
    return ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword);
  } else if (node instanceof ObjectTypeNode) {
    return createObjectType(node, opts);
  } else if (node instanceof StringTypeNode) {
    if (node.const) {
      return ts.factory.createLiteralTypeNode(
        ts.factory.createStringLiteral(node.const),
      );
    }
    if (node.enum) {
      return ts.factory.createUnionTypeNode(
        node.enum.map((element) =>
          ts.factory.createLiteralTypeNode(
            ts.factory.createStringLiteral(element),
          ),
        ),
      );
    }
    return ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword);
  } else if (node instanceof TypeDefinitionNode) {
    if (
      !node.isCircularRef &&
      shouldInlineType(node, opts?.mode === "attributes")
    ) {
      return createType(node.type, opts);
    }
    return ts.factory.createTypeReferenceNode(node.typeName);
  } else if (node instanceof UnionTypeNode) {
    return ts.factory.createUnionTypeNode(
      node.types.map((x) => createType(x, opts)),
    );
  }
  throw new Error(`unknown node type [${node.constructor.name}]`);
}

function generateDefinitionType(
  def: TypeDefinitionNode,
  opts?: TypeGenerationOptions,
): ts.Statement {
  const awsTypeName = def.file.schema.typeName + "." + def.typeName;

  return attachComment(
    {
      documentationUrl: makeDocumentationUrl(awsTypeName),
      ...def,
      awsTypeName,
      awsTypeKind: "definition",
    },
    ts.factory.createTypeAliasDeclaration(
      [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
      def.typeName,
      undefined,
      createType(def.type, opts),
    ),
  );
}

export function generateDefinitionTypes(
  resource: SchemaFileNode,
  type: "model" | "resource",
): ts.Statement[] {
  return [...resource.definitions]
    .filter((def) => !shouldInlineType(def) && !def.allChildrenReadOnly())
    .sort((a, b) => a.typeName.localeCompare(b.typeName))
    .map((def) =>
      generateDefinitionType(def, {
        mode: type === "resource" ? "properties" : undefined,
      }),
    );
}

export function generateModelType(
  resource: SchemaFileNode,
): ts.TypeAliasDeclaration {
  const modelTypeName = mangleName(resource.typeName, ResourceModelTypeSuffix);

  return attachComment(
    {
      documentationUrl:
        resource.documentationUrl ?? makeDocumentationUrl(resource.typeName),
      description: resource.description,
      awsTypeName: resource.typeName,
      awsTypeKind: "resource",
    },
    ts.factory.createTypeAliasDeclaration(
      [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
      modelTypeName,
      undefined,
      createType(resource.model),
    ),
  );
}

export function generateResourcePropsType(
  resource: SchemaFileNode,
): ts.TypeAliasDeclaration {
  const propertyTypeName = mangleName(
    resource.typeName,
    ResourcePropsTypeSuffix,
  );

  return attachComment(
    {
      documentationUrl:
        resource.documentationUrl ?? makeDocumentationUrl(resource.typeName),
      description: resource.description,
      awsTypeName: resource.typeName,
      awsTypeKind: "resource",
    },
    ts.factory.createTypeAliasDeclaration(
      [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
      propertyTypeName,
      undefined,
      createObjectType(resource.model, { mode: "properties" }, true),
    ),
  );
}

function getAttributesTypeName(resource: SchemaFileNode): string {
  let attributeTypeName = mangleName(
    resource.typeName,
    ResourceAttribsTypeSuffix,
  );
  if ([...resource.definitions].some((x) => x.typeName === attributeTypeName)) {
    attributeTypeName = mangleName(
      resource.typeName,
      ResourceAttribsTypeSuffixAlt,
    );
  }
  return attributeTypeName;
}

export function hasAttributes(resource: SchemaFileNode): boolean {
  return resource.model.properties.some((x) => x.readOnly);
}

export function generateResourceAttributesType(
  resource: SchemaFileNode,
): ts.TypeAliasDeclaration {
  const attributeTypeName = getAttributesTypeName(resource);

  return attachComment(
    {
      documentationUrl:
        resource.documentationUrl ??
        makeDocumentationUrl(resource.typeName, "attributes"),
      awsTypeName: resource.typeName,
      awsTypeKind: "attributes",
    },
    ts.factory.createTypeAliasDeclaration(
      [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
      attributeTypeName,
      undefined,
      createType(resource.model, { mode: "attributes" }),
    ),
  );
}

export function generateResourceImports(
  options: ImportGenerationOptions = {},
): ts.Statement[] {
  const {
    resourceBuilderClassName = DefaultResourceBuilderClassName,
    resourceBuilderModule = DefaultResourceBuilderModule,
    resourceOptionsModule = DefaultResourceOptionsModule,
    resourceOptionsTypeName = DefaultResourceOptionsTypeName,
  } = options;

  return [
    // import { Resource as $Resource } from "path";
    ts.factory.createImportDeclaration(
      undefined,
      ts.factory.createImportClause(
        false,
        undefined,
        ts.factory.createNamedImports([
          ts.factory.createImportSpecifier(
            false,
            ts.factory.createIdentifier(resourceBuilderClassName),
            ts.factory.createIdentifier(ResourceBuilderLocalClass),
          ),
        ]),
      ),
      ts.factory.createStringLiteral(resourceBuilderModule),
    ),
    // import { ResourceOptions as $ResourceOptions } from "path";
    ts.factory.createImportDeclaration(
      undefined,
      ts.factory.createImportClause(
        true,
        undefined,
        ts.factory.createNamedImports([
          ts.factory.createImportSpecifier(
            false,
            ts.factory.createIdentifier(resourceOptionsTypeName),
            ts.factory.createIdentifier(ResourceOptionsLocalType),
          ),
        ]),
      ),
      ts.factory.createStringLiteral(resourceOptionsModule),
    ),
  ];
}

export function generateResourceClass(resource: SchemaFileNode): ts.Statement {
  const resourceName = mangleName(resource.typeName, ResourceClassSuffix);

  const propertyTypeName = mangleName(
    resource.typeName,
    ResourcePropsTypeSuffix,
  );

  const attributeTypeName = hasAttributes(resource)
    ? getAttributesTypeName(resource)
    : undefined;

  return attachComment(
    {
      documentationUrl:
        resource.documentationUrl ?? makeDocumentationUrl(resource.typeName),
      description: resource.description,
      awsTypeName: resource.typeName,
      awsTypeKind: "resource",
    },
    ts.factory.createClassDeclaration(
      [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
      resourceName,
      undefined,
      [
        // extends ResourceBuilder<"AWS::Service::Resource", PropsType, AttribsType>
        ts.factory.createHeritageClause(ts.SyntaxKind.ExtendsKeyword, [
          ts.factory.createExpressionWithTypeArguments(
            ts.factory.createIdentifier(ResourceBuilderLocalClass),
            [
              ts.factory.createLiteralTypeNode(
                ts.factory.createStringLiteral(resource.typeName),
              ),
              ts.factory.createTypeReferenceNode(propertyTypeName),
              attributeTypeName
                ? ts.factory.createTypeReferenceNode(attributeTypeName)
                : ts.factory.createTypeReferenceNode("Record", [
                    ts.factory.createKeywordTypeNode(
                      ts.SyntaxKind.StringKeyword,
                    ),
                    ts.factory.createKeywordTypeNode(
                      ts.SyntaxKind.NeverKeyword,
                    ),
                  ]),
            ],
          ),
        ]),
      ],
      [
        // public static readonly Type = "AWS::Service::Resource"
        ts.factory.createPropertyDeclaration(
          [
            ts.factory.createToken(ts.SyntaxKind.PublicKeyword),
            ts.factory.createToken(ts.SyntaxKind.StaticKeyword),
            ts.factory.createToken(ts.SyntaxKind.ReadonlyKeyword),
          ],
          ResourceClassTypeProp,
          undefined,
          undefined,
          ts.factory.createStringLiteral(resource.typeName),
        ),
        // constructor(logicalId, properties, options?)
        ts.factory.createConstructorDeclaration(
          undefined,
          [
            ts.factory.createParameterDeclaration(
              undefined,
              undefined,
              LogicalResourceIdParam,
              undefined,
              ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
            ),
            ts.factory.createParameterDeclaration(
              undefined,
              undefined,
              PropertiesParam,
              undefined,
              ts.factory.createTypeReferenceNode(propertyTypeName),
            ),
            ts.factory.createParameterDeclaration(
              undefined,
              undefined,
              OptionsParam,
              ts.factory.createToken(ts.SyntaxKind.QuestionToken),
              ts.factory.createTypeReferenceNode(ResourceOptionsLocalType),
            ),
          ],
          ts.factory.createBlock([
            // super(logicalId, Resource.Type, props, options)
            ts.factory.createExpressionStatement(
              ts.factory.createCallExpression(
                ts.factory.createSuper(),
                undefined,
                [
                  ts.factory.createIdentifier(LogicalResourceIdParam),
                  ts.factory.createPropertyAccessExpression(
                    ts.factory.createIdentifier(resourceName),
                    ts.factory.createIdentifier(ResourceClassTypeProp),
                  ),
                  ts.factory.createIdentifier(PropertiesParam),
                  ts.factory.createIdentifier(OptionsParam),
                ],
              ),
            ),
          ]),
        ),
      ],
    ),
  );
}
