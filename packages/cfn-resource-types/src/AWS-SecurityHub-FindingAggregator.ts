import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The ``AWS::SecurityHub::FindingAggregator`` resource enables cross-Region aggregation. When cross-Region aggregation is enabled, you can aggregate findings, finding updates, insights, control compliance statuses, and security scores from one or more linked Regions to a single aggregation Region. You can then view and manage all of this data from the aggregation Region. For more details about cross-Region aggregation, see [Cross-Region aggregation](https://docs.aws.amazon.com/securityhub/latest/userguide/finding-aggregation.html) in the *User Guide*
 This resource must be created in the Region that you want to designate as your aggregation Region.
 Cross-Region aggregation is also a prerequisite for using [central configuration](https://docs.aws.amazon.com/securityhub/latest/userguide/central-configuration-intro.html) in ASH.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-findingaggregator.html}
 */
export type SecurityHubFindingAggregatorProperties = {
  /**
     * Indicates whether to aggregate findings from all of the available Regions in the current partition. Also determines whether to automatically aggregate findings from new Regions as Security Hub supports them and you opt into them.
     The selected option also determines how to use the Regions provided in the Regions list.
     The options are as follows:
      +   ``ALL_REGIONS`` - Aggregates findings from all of the Regions where Security Hub is enabled. When you choose this option, Security Hub also automatically aggregates findings from new Regions as Security Hub supports them and you opt into them.
      +   ``ALL_REGIONS_EXCEPT_SPECIFIED`` - Aggregates findings from all of the Regions where Security Hub is enabled, except for the Regions listed in the ``Regions`` parameter. When you choose this option, Security Hub also automatically aggregates findings from new Regions as Security Hub supports them and you opt into them.
      +   ``SPECIFIED_REGIONS`` - Aggregates findings only from the Regions listed in the ``Regions`` parameter. Security Hub does not automatically aggregate findings from new Regions.
      +   ``NO_REGIONS`` - Aggregates no data because no Regions are selected as linked Regions.
     */
  RegionLinkingMode:
    | "ALL_REGIONS"
    | "ALL_REGIONS_EXCEPT_SPECIFIED"
    | "SPECIFIED_REGIONS";
  /**
     * If ``RegionLinkingMode`` is ``ALL_REGIONS_EXCEPT_SPECIFIED``, then this is a space-separated list of Regions that don't replicate and send findings to the home Region.
     If ``RegionLinkingMode`` is ``SPECIFIED_REGIONS``, then this is a space-separated list of Regions that do replicate and send findings to the home Region.
     An ``InvalidInputException`` error results if you populate this field while ``RegionLinkingMode`` is ``NO_REGIONS``.
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
   * @pattern `^[a-zA-Z0-9-]{1,32}$`
   */
  FindingAggregationRegion: string;
  /**
   * @pattern `arn:aws\S*:securityhub:\S*`
   */
  FindingAggregatorArn: string;
};
/**
 * The ``AWS::SecurityHub::FindingAggregator`` resource enables cross-Region aggregation. When cross-Region aggregation is enabled, you can aggregate findings, finding updates, insights, control compliance statuses, and security scores from one or more linked Regions to a single aggregation Region. You can then view and manage all of this data from the aggregation Region. For more details about cross-Region aggregation, see [Cross-Region aggregation](https://docs.aws.amazon.com/securityhub/latest/userguide/finding-aggregation.html) in the *User Guide*
 This resource must be created in the Region that you want to designate as your aggregation Region.
 Cross-Region aggregation is also a prerequisite for using [central configuration](https://docs.aws.amazon.com/securityhub/latest/userguide/central-configuration-intro.html) in ASH.
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
