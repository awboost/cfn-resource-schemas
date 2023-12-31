import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for `AWS::XRay::Group`.
 * This schema provides construct and validation rules for AWS-XRay Group resource parameters.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-group.html}
 */
export type XRayGroupProperties = {
  /**
   * The filter expression defining criteria by which to group traces.
   */
  FilterExpression?: string;
  /**
   * The case-sensitive name of the new group. Names must be unique.
   * @minLength `1`
   * @maxLength `32`
   */
  GroupName: string;
  InsightsConfiguration?: InsightsConfiguration;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::XRay::Group`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-group.html#aws-resource-xray-group-return-values}
 */
export type XRayGroupAttributes = {
  /**
   * The ARN of the group that was generated on creation.
   * @minLength `1`
   * @maxLength `400`
   */
  GroupARN: string;
};
/**
 * Type definition for `AWS::XRay::Group.InsightsConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-xray-group-insightsconfiguration.html}
 */
export type InsightsConfiguration = {
  /**
   * Set the InsightsEnabled value to true to enable insights or false to disable insights.
   */
  InsightsEnabled?: boolean;
  /**
   * Set the NotificationsEnabled value to true to enable insights notifications. Notifications can only be enabled on a group with InsightsEnabled set to true.
   */
  NotificationsEnabled?: boolean;
};
/**
 * Type definition for `AWS::XRay::Group.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-xray-group-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag.
   */
  Key: string;
  /**
   * The value for the tag.
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::XRay::Group`.
 * This schema provides construct and validation rules for AWS-XRay Group resource parameters.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-group.html}
 */
export class XRayGroup extends $Resource<
  "AWS::XRay::Group",
  XRayGroupProperties,
  XRayGroupAttributes
> {
  public static readonly Type = "AWS::XRay::Group";
  public static readonly AttributeNames = ["GroupARN" as const];
  constructor(
    logicalId: string,
    properties: XRayGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      XRayGroup.Type,
      properties,
      XRayGroup.AttributeNames,
      options,
    );
  }
}
