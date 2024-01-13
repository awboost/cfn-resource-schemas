import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::EventSchemas::Discoverer
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-discoverer.html}
 */
export type EventSchemasDiscovererProperties = {
  /**
   * Defines whether event schemas from other accounts are discovered. Default is True.
   */
  CrossAccount?: boolean;
  /**
   * A description for the discoverer.
   */
  Description?: string;
  /**
   * The ARN of the event bus.
   */
  SourceArn: string;
  /**
   * Tags associated with the resource.
   */
  Tags?: TagsEntry[];
};
/**
 * Attribute type definition for `AWS::EventSchemas::Discoverer`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-discoverer.html#aws-resource-eventschemas-discoverer-return-values}
 */
export type EventSchemasDiscovererAttributes = {
  /**
   * The ARN of the discoverer.
   */
  DiscovererArn: string;
  /**
   * The Id of the discoverer.
   */
  DiscovererId: string;
  /**
   * Defines the current state of the discoverer.
   */
  State: string;
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
