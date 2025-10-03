import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::ApplicationSignals::GroupingConfiguration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationsignals-groupingconfiguration.html}
 */
export type ApplicationSignalsGroupingConfigurationProperties = {
  GroupingAttributeDefinitions: GroupingAttributeDefinition[];
};
/**
 * Attribute type definition for `AWS::ApplicationSignals::GroupingConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationsignals-groupingconfiguration.html#aws-resource-applicationsignals-groupingconfiguration-return-values}
 */
export type ApplicationSignalsGroupingConfigurationAttributes = {
  /**
   * The identifier for the specified AWS account.
   * @minLength `12`
   * @maxLength `12`
   * @pattern `^[0-9]{12}$`
   */
  AccountId: string;
  UpdatedAt: string;
};
/**
 * Type definition for `AWS::ApplicationSignals::GroupingConfiguration.GroupingAttributeDefinition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-groupingconfiguration-groupingattributedefinition.html}
 */
export type GroupingAttributeDefinition = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  DefaultGroupingValue?: string;
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  GroupingName: string;
  /**
   * @minLength `1`
   */
  GroupingSourceKeys: string[];
};
/**
 * Resource Type definition for AWS::ApplicationSignals::GroupingConfiguration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationsignals-groupingconfiguration.html}
 */
export class ApplicationSignalsGroupingConfiguration extends $Resource<
  "AWS::ApplicationSignals::GroupingConfiguration",
  ApplicationSignalsGroupingConfigurationProperties,
  ApplicationSignalsGroupingConfigurationAttributes
> {
  public static readonly Type =
    "AWS::ApplicationSignals::GroupingConfiguration";
  constructor(
    logicalId: string,
    properties: ApplicationSignalsGroupingConfigurationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ApplicationSignalsGroupingConfiguration.Type,
      properties,
      options,
    );
  }
}
