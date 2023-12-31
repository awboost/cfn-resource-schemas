import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Glue::SchemaVersionMetadata`.
 * This resource adds Key-Value metadata to a Schema version of Glue Schema Registry.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schemaversionmetadata.html}
 */
export type GlueSchemaVersionMetadataProperties = {
  /**
   * Metadata key
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * Represents the version ID associated with the schema version.
   * @pattern `[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}`
   */
  SchemaVersionId: string;
  /**
   * Metadata value
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::Glue::SchemaVersionMetadata`.
 * This resource adds Key-Value metadata to a Schema version of Glue Schema Registry.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schemaversionmetadata.html}
 */
export class GlueSchemaVersionMetadata extends $Resource<
  "AWS::Glue::SchemaVersionMetadata",
  GlueSchemaVersionMetadataProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::Glue::SchemaVersionMetadata";
  constructor(
    logicalId: string,
    properties: GlueSchemaVersionMetadataProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, GlueSchemaVersionMetadata.Type, properties, options);
  }
}
