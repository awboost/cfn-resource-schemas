import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::EventSchemas::Schema
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-schema.html}
 */
export type EventSchemasSchemaProperties = {
  Content: string;
  Description?: string;
  RegistryName: string;
  SchemaName?: string;
  Tags?: TagsEntry[];
  Type: string;
};
/**
 * Attribute type definition for `AWS::EventSchemas::Schema`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-schema.html#aws-resource-eventschemas-schema-return-values}
 */
export type EventSchemasSchemaAttributes = {
  Id: string;
  SchemaArn: string;
  SchemaVersion: string;
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
