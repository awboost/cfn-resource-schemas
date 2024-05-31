import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::SecurityHub::FindingAggregator resource represents the AWS Security Hub Finding Aggregator in your account. One finding aggregator resource is created for each account in non opt-in region in which you configure region linking mode.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-findingaggregator.html}
 */
export type SecurityHubFindingAggregatorProperties = {
  /**
   * Indicates whether to link all Regions, all Regions except for a list of excluded Regions, or a list of included Regions
   */
  RegionLinkingMode:
    | "ALL_REGIONS"
    | "ALL_REGIONS_EXCEPT_SPECIFIED"
    | "SPECIFIED_REGIONS";
  /**
   * The list of excluded Regions or included Regions
   * @minLength `1`
   * @maxLength `50`
   */
  Regions?: string[];
};
/**
 * Attribute type definition for `AWS::SecurityHub::FindingAggregator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-findingaggregator.html#aws-resource-securityhub-findingaggregator-return-values}
 */
export type SecurityHubFindingAggregatorAttributes = {
  /**
   * The aggregation Region of the FindingAggregator
   * @pattern `^[a-zA-Z0-9-]{1,32}$`
   */
  FindingAggregationRegion: string;
  /**
   * The ARN of the FindingAggregator being created and assigned as the unique identifier
   * @pattern `arn:aws\S*:securityhub:\S*`
   */
  FindingAggregatorArn: string;
};
/**
 * The AWS::SecurityHub::FindingAggregator resource represents the AWS Security Hub Finding Aggregator in your account. One finding aggregator resource is created for each account in non opt-in region in which you configure region linking mode.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-findingaggregator.html}
 */
export class SecurityHubFindingAggregator extends $Resource<
  "AWS::SecurityHub::FindingAggregator",
  SecurityHubFindingAggregatorProperties,
  SecurityHubFindingAggregatorAttributes
> {
  public static readonly Type = "AWS::SecurityHub::FindingAggregator";
  constructor(
    logicalId: string,
    properties: SecurityHubFindingAggregatorProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SecurityHubFindingAggregator.Type, properties, options);
  }
}
