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

const ResourceAttribsTypeSuffix = "Attributes";
const ResourceAttribsTypeSuffixAlt = "Attribs";
const ResourceBuilderLocalClass = "$Resource";
const ResourceClassTypeProp = "Type";
const ResourceClassSuffix = "";
const ResourceModelTypeSuffix = "Model";
const ResourceOptionsLocalType = "$ResourceOptions";
const ResourcePropsTypeSuffix = "Properties";
const LogicalResourceIdParam = "logicalId";
const PropertiesParam = "properties";
const OptionsParam = "options";

export type ImportGenerationOptions = {
  resourceBuilderModule?: string;
  resourceBuilderClassName?: string;
  resourceOptionsModule?: string;
  resourceOptionsTypeName?: string;
};

export type TypeGenerationOptions = {
  readOnlyProperties?: "exclude" | "inline";
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
  if (props.minimum) {
    lines.push(`@min \`${props.minimum}\``);
  }
  if (props.maximum) {
    lines.push(`@max \`${props.maximum}\``);
  }

  // string validation
  if (props.minLength) {
    lines.push(`@minLength \`${props.minLength}\``);
  }
  if (props.maxLength) {
    lines.push(`@maxLength \`${props.maxLength}\``);
  }
  if (props.pattern) {
    lines.push(`@pattern \`${props.pattern}\``);
  }

  // array validation
  if (props.minItems) {
    lines.push(`@minLength \`${props.minLength}\``);
  }
  if (props.maxItems) {
    lines.push(`@maxLength \`${props.maxLength}\``);
  }

  if (props.documentationUrl) {
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

function shouldInlineType(type: TypeNode): boolean {
  return !(
    type instanceof ObjectTypeNode ||
    (type instanceof PrimitiveTypeNodeBase && !type.enum && !type.const)
  );
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
): ts.TypeNode {
  if (node.additionalProperties) {
    return ts.factory.createTypeReferenceNode("Record", [
      ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
      createType(node.additionalProperties, opts),
    ]);
  }

  let props: PropertyNode[];
  if (opts?.readOnlyProperties === "inline") {
    props = node.properties.filter((x) => x.readOnly);
  } else if (opts?.readOnlyProperties === "exclude") {
    props = node.properties.filter((x) => !x.readOnly);
  } else {
    props = node.properties;
  }
  return ts.factory.createTypeLiteralNode(
    props.map((prop) =>
      attachComment(
        prop.documentation,
        ts.factory.createPropertySignature(
          undefined,
          quoteName(prop.name),
          prop.required
            ? undefined
            : ts.factory.createToken(ts.SyntaxKind.QuestionToken),
          createType(prop.type, opts),
        ),
      ),
    ),
  );
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
      opts?.readOnlyProperties === "inline" ||
      (!node.isCircularRef && shouldInlineType(node))
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
      createType(def, opts),
    ),
  );
}

export function generateDefinitionTypes(
  resource: SchemaFileNode,
  type: "model" | "resource",
): ts.Statement[] {
  return [...resource.definitions]
    .filter((def) => !shouldInlineType(def))
    .map((def) =>
      generateDefinitionType(def, {
        readOnlyProperties: type === "resource" ? "exclude" : undefined,
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
      createType(resource.model, { readOnlyProperties: "exclude" }),
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
      description: resource.description,
      awsTypeName: resource.typeName,
      awsTypeKind: "attributes",
    },
    ts.factory.createTypeAliasDeclaration(
      [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
      attributeTypeName,
      undefined,
      createType(resource.model, { readOnlyProperties: "inline" }),
    ),
  );
}

export function generateResourceImports(
  options: ImportGenerationOptions = {},
): ts.Statement[] {
  const {
    resourceBuilderClassName = "Resource",
    resourceBuilderModule = "@awboost/cfn-template-builder/template/Resource",
    resourceOptionsModule = "@awboost/cfn-template-builder/template",
    resourceOptionsTypeName = "ResourceOptions",
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
