import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = [
    "Id" as const,
    "RegistryArn" as const,
  ];
  constructor(
    logicalId: string,
    properties: EventSchemasRegistryProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      EventSchemasRegistry.Type,
      properties,
      EventSchemasRegistry.AttributeNames,
      options,
    );
  }
}
