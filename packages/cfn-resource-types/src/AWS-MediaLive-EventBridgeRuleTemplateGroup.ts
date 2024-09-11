import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::MediaLive::EventBridgeRuleTemplateGroup Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-eventbridgeruletemplategroup.html}
 */
export type MediaLiveEventBridgeRuleTemplateGroupProperties = {
  /**
   * A resource's optional description.
   * @minLength `0`
   * @maxLength `1024`
   */
  Description?: string;
  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[^\s]+$`
   */
  Name: string;
  /**
   * Represents the tags associated with a resource.
   */
  Tags?: TagMap;
};
/**
 * Attribute type definition for `AWS::MediaLive::EventBridgeRuleTemplateGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-eventbridgeruletemplategroup.html#aws-resource-medialive-eventbridgeruletemplategroup-return-values}
 */
export type MediaLiveEventBridgeRuleTemplateGroupAttributes = {
  /**
   * An eventbridge rule template group's ARN (Amazon Resource Name)
   * @pattern `^arn:.+:medialive:.+:eventbridge-rule-template-group:.+$`
   */
  Arn: string;
  CreatedAt: string;
  /**
   * An eventbridge rule template group's id. AWS provided template groups have ids that start with `aws-`
   * @minLength `7`
   * @maxLength `11`
   * @pattern `^(aws-)?[0-9]{7}$`
   */
  Id: string;
  Identifier: string;
  ModifiedAt: string;
};
/**
 * Type definition for `AWS::MediaLive::EventBridgeRuleTemplateGroup.TagMap`.
 * Represents the tags associated with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-eventbridgeruletemplategroup-tagmap.html}
 */
export type TagMap = Record<string, string>;
/**
 * Definition of AWS::MediaLive::EventBridgeRuleTemplateGroup Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-eventbridgeruletemplategroup.html}
 */
export class MediaLiveEventBridgeRuleTemplateGroup extends $Resource<
  "AWS::MediaLive::EventBridgeRuleTemplateGroup",
  MediaLiveEventBridgeRuleTemplateGroupProperties,
  MediaLiveEventBridgeRuleTemplateGroupAttributes
> {
  public static readonly Type = "AWS::MediaLive::EventBridgeRuleTemplateGroup";
  constructor(
    logicalId: string,
    properties: MediaLiveEventBridgeRuleTemplateGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      MediaLiveEventBridgeRuleTemplateGroup.Type,
      properties,
      options,
    );
  }
}
