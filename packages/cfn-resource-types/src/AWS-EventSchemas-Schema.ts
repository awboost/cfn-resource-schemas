import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::EventSchemas::Schema
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-schema.html}
 */
export type EventSchemasSchemaProperties = {
  /**
   * The source of the schema definition.
   */
  Content: string;
  /**
   * A description of the schema.
   */
  Description?: string;
  /**
   * The name of the schema registry.
   */
  RegistryName: string;
  /**
   * The name of the schema.
   */
  SchemaName?: string;
  /**
   * Tags associated with the resource.
   */
  Tags?: TagsEntry[];
  /**
   * The type of schema. Valid types include OpenApi3 and JSONSchemaDraft4.
   */
  Type: string;
};
/**
 * Attribute type definition for `AWS::EventSchemas::Schema`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-schema.html#aws-resource-eventschemas-schema-return-values}
 */
export type EventSchemasSchemaAttributes = {
  /**
   * The last modified time of the schema.
   */
  LastModified: string;
  /**
   * The ARN of the schema.
   */
  SchemaArn: string;
  /**
   * The version number of the schema.
   */
  SchemaVersion: string;
  /**
   * The date the schema version was created.
   */
  VersionCreatedDate: string;
};
/**
 * Type definition for `AWS::EventSchemas::Schema.TagsEntry`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eventschemas-schema-tagsentry.html}
 */
export type TagsEntry = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::EventSchemas::Schema
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-schema.html}
 */
export class EventSchemasSchema extends $Resource<
  "AWS::EventSchemas::Schema",
  EventSchemasSchemaProperties,
  EventSchemasSchemaAttributes
> {
  public static readonly Type = "AWS::EventSchemas::Schema";
  constructor(
    logicalId: string,
    properties: EventSchemasSchemaProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EventSchemasSchema.Type, properties, options);
  }
}
