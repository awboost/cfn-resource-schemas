import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::EventSchemas::Registry
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-registry.html}
 */
export type EventSchemasRegistryProperties = {
  Description?: string;
  RegistryName?: string;
  Tags?: TagsEntry[];
};
/**
 * Attribute type definition for `AWS::EventSchemas::Registry`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-registry.html#aws-resource-eventschemas-registry-return-values}
 */
export type EventSchemasRegistryAttributes = {
  Id: string;
  RegistryArn: string;
};
/**
 * Type definition for `AWS::EventSchemas::Registry.TagsEntry`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eventschemas-registry-tagsentry.html}
 */
export type TagsEntry = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::EventSchemas::Registry
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-registry.html}
 */
export class EventSchemasRegistry extends $Resource<
  "AWS::EventSchemas::Registry",
  EventSchemasRegistryProperties,
  EventSchemasRegistryAttributes
> {
  public static readonly Type = "AWS::EventSchemas::Registry";
  constructor(
    logicalId: string,
    properties: EventSchemasRegistryProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EventSchemasRegistry.Type, properties, options);
  }
}
