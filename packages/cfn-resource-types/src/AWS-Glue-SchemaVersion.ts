import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for `AWS::Glue::SchemaVersion`.
 * This resource represents an individual schema version of a schema defined in Glue Schema Registry.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schemaversion.html}
 */
export type GlueSchemaVersionProperties = {
  /**
   * Identifier for the schema where the schema version will be created.
   */
  Schema: Schema;
  /**
   * Complete definition of the schema in plain-text.
   * @minLength `1`
   * @maxLength `170000`
   */
  SchemaDefinition: string;
};
/**
 * Attribute type definition for `AWS::Glue::SchemaVersion`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schemaversion.html#aws-resource-glue-schemaversion-return-values}
 */
export type GlueSchemaVersionAttributes = {
  /**
   * Represents the version ID associated with the schema version.
   * @pattern `[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}`
   */
  VersionId: string;
};
/**
 * Type definition for `AWS::Glue::SchemaVersion.Schema`.
 * Identifier for the schema where the schema version will be created.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-schemaversion-schema.html}
 */
export type Schema = {
  /**
   * Name of the registry to identify where the Schema is located.
   * @minLength `1`
   * @maxLength `255`
   */
  RegistryName?: string;
  /**
   * Amazon Resource Name for the Schema. This attribute can be used to uniquely represent the Schema.
   * @pattern `arn:(aws|aws-us-gov|aws-cn):glue:.*`
   */
  SchemaArn?: string;
  /**
   * Name of the schema. This parameter requires RegistryName to be provided.
   * @minLength `1`
   * @maxLength `255`
   */
  SchemaName?: string;
};
/**
 * Resource type definition for `AWS::Glue::SchemaVersion`.
 * This resource represents an individual schema version of a schema defined in Glue Schema Registry.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schemaversion.html}
 */
export class GlueSchemaVersion extends $Resource<
  "AWS::Glue::SchemaVersion",
  GlueSchemaVersionProperties,
  GlueSchemaVersionAttributes
> {
  public static readonly Type = "AWS::Glue::SchemaVersion";
  public static readonly AttributeNames = ["VersionId" as const];
  constructor(
    logicalId: string,
    properties: GlueSchemaVersionProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      GlueSchemaVersion.Type,
      properties,
      GlueSchemaVersion.AttributeNames,
      options,
    );
  }
}
