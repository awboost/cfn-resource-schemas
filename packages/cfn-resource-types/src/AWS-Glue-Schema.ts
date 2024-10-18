import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Glue::Schema`.
 * This resource represents a schema of Glue Schema Registry.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schema.html}
 */
export type GlueSchemaProperties = {
  /**
   * Specify checkpoint version for update. This is only required to update the Compatibility.
   */
  CheckpointVersion?: SchemaVersion;
  /**
   * Compatibility setting for the schema.
   */
  Compatibility:
    | "NONE"
    | "DISABLED"
    | "BACKWARD"
    | "BACKWARD_ALL"
    | "FORWARD"
    | "FORWARD_ALL"
    | "FULL"
    | "FULL_ALL";
  /**
   * Data format name to use for the schema. Accepted values: 'AVRO', 'JSON', 'PROTOBUF'
   */
  DataFormat: "AVRO" | "JSON" | "PROTOBUF";
  /**
   * A description of the schema. If description is not provided, there will not be any default value for this.
   * @minLength `0`
   * @maxLength `1000`
   */
  Description?: string;
  /**
   * Name of the schema.
   * @minLength `1`
   * @maxLength `255`
   */
  Name: string;
  /**
   * Identifier for the registry which the schema is part of.
   */
  Registry?: Registry;
  /**
   * Definition for the initial schema version in plain-text.
   * @minLength `1`
   * @maxLength `170000`
   */
  SchemaDefinition?: string;
  /**
   * List of tags to tag the schema
   * @minLength `0`
   * @maxLength `10`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Glue::Schema`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schema.html#aws-resource-glue-schema-return-values}
 */
export type GlueSchemaAttributes = {
  /**
   * Amazon Resource Name for the Schema.
   * @pattern `arn:aws(-(cn|us-gov|iso(-[bef])?))?:glue:.*`
   */
  Arn: string;
  /**
   * Represents the version ID associated with the initial schema version.
   * @pattern `[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}`
   */
  InitialSchemaVersionId: string;
};
/**
 * Type definition for `AWS::Glue::Schema.Registry`.
 * Identifier for the registry which the schema is part of.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-schema-registry.html}
 */
export type Registry = {
  /**
   * Amazon Resource Name for the Registry.
   * @pattern `arn:aws(-(cn|us-gov|iso(-[bef])?))?:glue:.*`
   */
  Arn?: string;
  /**
   * Name of the registry in which the schema will be created.
   * @minLength `1`
   * @maxLength `255`
   */
  Name?: string;
};
/**
 * Type definition for `AWS::Glue::Schema.SchemaVersion`.
 * Specify checkpoint version for update. This is only required to update the Compatibility.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-schema-schemaversion.html}
 */
export type SchemaVersion = {
  /**
   * Indicates if the latest version needs to be updated.
   */
  IsLatest?: boolean;
  /**
   * Indicates the version number in the schema to update.
   * @min `1`
   * @max `100000`
   */
  VersionNumber?: number;
};
/**
 * Type definition for `AWS::Glue::Schema.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-schema-tag.html}
 */
export type Tag = {
  /**
   * A key to identify the tag.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * Corresponding tag value for the key.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::Glue::Schema`.
 * This resource represents a schema of Glue Schema Registry.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schema.html}
 */
export class GlueSchema extends $Resource<
  "AWS::Glue::Schema",
  GlueSchemaProperties,
  GlueSchemaAttributes
> {
  public static readonly Type = "AWS::Glue::Schema";
  constructor(
    logicalId: string,
    properties: GlueSchemaProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, GlueSchema.Type, properties, options);
  }
}
