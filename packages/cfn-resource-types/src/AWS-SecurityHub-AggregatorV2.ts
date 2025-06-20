import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::SecurityHub::AggregatorV2 resource represents the AWS Security Hub AggregatorV2 in your account. One aggregatorv2 resource is created for each account in non opt-in region in which you configure region linking mode.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-aggregatorv2.html}
 */
export type SecurityHubAggregatorV2Properties = {
  /**
   * The list of included Regions
   * @minLength `1`
   * @maxLength `50`
   */
  LinkedRegions: string[];
  /**
   * Indicates to link a list of included Regions
   */
  RegionLinkingMode: "SPECIFIED_REGIONS";
  /**
   * A key-value pair to associate with the Security Hub V2 resource.
   */
  Tags?: Tags;
};
/**
 * Attribute type definition for `AWS::SecurityHub::AggregatorV2`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-aggregatorv2.html#aws-resource-securityhub-aggregatorv2-return-values}
 */
export type SecurityHubAggregatorV2Attributes = {
  /**
   * The aggregation Region of the AggregatorV2
   * @pattern `^[a-zA-Z0-9-]{1,32}$`
   */
  AggregationRegion: string;
  /**
   * The ARN of the AggregatorV2 being created and assigned as the unique identifier
   * @pattern `arn:aws\S*:securityhub:\S*`
   */
  AggregatorV2Arn: string;
};
/**
 * Type definition for `AWS::SecurityHub::AggregatorV2.Tags`.
 * A key-value pair to associate with the Security Hub V2 resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-aggregatorv2-tags.html}
 */
export type Tags = Record<string, string>;
/**
 * The AWS::SecurityHub::AggregatorV2 resource represents the AWS Security Hub AggregatorV2 in your account. One aggregatorv2 resource is created for each account in non opt-in region in which you configure region linking mode.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-aggregatorv2.html}
 */
export class SecurityHubAggregatorV2 extends $Resource<
  "AWS::SecurityHub::AggregatorV2",
  SecurityHubAggregatorV2Properties,
  SecurityHubAggregatorV2Attributes
> {
  public static readonly Type = "AWS::SecurityHub::AggregatorV2";
  constructor(
    logicalId: string,
    properties: SecurityHubAggregatorV2Properties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SecurityHubAggregatorV2.Type, properties, options);
  }
}
