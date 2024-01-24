import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Config::ConfigurationAggregator
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationaggregator.html}
 */
export type ConfigConfigurationAggregatorProperties = {
  AccountAggregationSources?: AccountAggregationSource[];
  /**
   * The name of the aggregator.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `[\w\-]+`
   */
  ConfigurationAggregatorName?: string;
  OrganizationAggregationSource?: OrganizationAggregationSource;
  /**
   * The tags for the configuration aggregator.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Config::ConfigurationAggregator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationaggregator.html#aws-resource-config-configurationaggregator-return-values}
 */
export type ConfigConfigurationAggregatorAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the aggregator.
   */
  ConfigurationAggregatorArn: string;
};
/**
 * Type definition for `AWS::Config::ConfigurationAggregator.AccountAggregationSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configurationaggregator-accountaggregationsource.html}
 */
export type AccountAggregationSource = {
  AccountIds: string[];
  AllAwsRegions?: boolean;
  AwsRegions?: string[];
};
/**
 * Type definition for `AWS::Config::ConfigurationAggregator.OrganizationAggregationSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configurationaggregator-organizationaggregationsource.html}
 */
export type OrganizationAggregationSource = {
  AllAwsRegions?: boolean;
  AwsRegions?: string[];
  RoleArn: string;
};
/**
 * Type definition for `AWS::Config::ConfigurationAggregator.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configurationaggregator-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::Config::ConfigurationAggregator
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationaggregator.html}
 */
export class ConfigConfigurationAggregator extends $Resource<
  "AWS::Config::ConfigurationAggregator",
  ConfigConfigurationAggregatorProperties,
  ConfigConfigurationAggregatorAttributes
> {
  public static readonly Type = "AWS::Config::ConfigurationAggregator";
  constructor(
    logicalId: string,
    properties: ConfigConfigurationAggregatorProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ConfigConfigurationAggregator.Type, properties, options);
  }
}
