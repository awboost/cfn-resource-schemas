import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::EventSchemas::Discoverer
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-discoverer.html}
 */
export type EventSchemasDiscovererProperties = {
  CrossAccount?: boolean;
  Description?: string;
  SourceArn: string;
  Tags?: TagsEntry[];
};
/**
 * Attribute type definition for `AWS::EventSchemas::Discoverer`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-discoverer.html#aws-resource-eventschemas-discoverer-return-values}
 */
export type EventSchemasDiscovererAttributes = {
  DiscovererArn: string;
  DiscovererId: string;
};
/**
 * Type definition for `AWS::EventSchemas::Discoverer.TagsEntry`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eventschemas-discoverer-tagsentry.html}
 */
export type TagsEntry = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::EventSchemas::Discoverer
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-discoverer.html}
 */
export class EventSchemasDiscoverer extends $Resource<
  "AWS::EventSchemas::Discoverer",
  EventSchemasDiscovererProperties,
  EventSchemasDiscovererAttributes
> {
  public static readonly Type = "AWS::EventSchemas::Discoverer";
  constructor(
    logicalId: string,
    properties: EventSchemasDiscovererProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EventSchemasDiscoverer.Type, properties, options);
  }
}
