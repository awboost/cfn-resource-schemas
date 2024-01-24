import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Config::AggregationAuthorization
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-aggregationauthorization.html}
 */
export type ConfigAggregationAuthorizationProperties = {
  /**
   * The 12-digit account ID of the account authorized to aggregate data.
   * @pattern `^\d{12}$`
   */
  AuthorizedAccountId: string;
  /**
   * The region authorized to collect aggregated data.
   * @minLength `1`
   * @maxLength `64`
   */
  AuthorizedAwsRegion: string;
  /**
   * The tags for the AggregationAuthorization.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Config::AggregationAuthorization`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-aggregationauthorization.html#aws-resource-config-aggregationauthorization-return-values}
 */
export type ConfigAggregationAuthorizationAttributes = {
  /**
   * The ARN of the AggregationAuthorization.
   */
  AggregationAuthorizationArn: string;
};
/**
 * Type definition for `AWS::Config::AggregationAuthorization.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-aggregationauthorization-tag.html}
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
 * Resource Type definition for AWS::Config::AggregationAuthorization
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-aggregationauthorization.html}
 */
export class ConfigAggregationAuthorization extends $Resource<
  "AWS::Config::AggregationAuthorization",
  ConfigAggregationAuthorizationProperties,
  ConfigAggregationAuthorizationAttributes
> {
  public static readonly Type = "AWS::Config::AggregationAuthorization";
  constructor(
    logicalId: string,
    properties: ConfigAggregationAuthorizationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ConfigAggregationAuthorization.Type, properties, options);
  }
}
