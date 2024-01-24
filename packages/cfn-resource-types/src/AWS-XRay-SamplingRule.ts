import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::XRay::SamplingRule`.
 * This schema provides construct and validation rules for AWS-XRay SamplingRule resource parameters.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-samplingrule.html}
 */
export type XRaySamplingRuleProperties = {
  /**
   * The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.
   * @minLength `1`
   * @maxLength `32`
   */
  RuleName?: string;
  SamplingRule?: SamplingRule;
  SamplingRuleRecord?: SamplingRuleRecord;
  SamplingRuleUpdate?: SamplingRuleUpdate;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::XRay::SamplingRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-samplingrule.html#aws-resource-xray-samplingrule-return-values}
 */
export type XRaySamplingRuleAttributes = {
  /**
   * The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.
   */
  RuleARN: string;
};
/**
 * Type definition for `AWS::XRay::SamplingRule.SamplingRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-xray-samplingrule-samplingrule.html}
 */
export type SamplingRule = {
  /**
   * Matches attributes derived from the request.
   */
  Attributes?: Record<string, string>;
  /**
   * The percentage of matching requests to instrument, after the reservoir is exhausted.
   * @min `0`
   * @max `1`
   */
  FixedRate: number;
  /**
   * Matches the HTTP method from a request URL.
   * @maxLength `10`
   */
  HTTPMethod: string;
  /**
   * Matches the hostname from a request URL.
   * @maxLength `64`
   */
  Host: string;
  /**
   * The priority of the sampling rule.
   * @min `1`
   * @max `9999`
   */
  Priority: number;
  /**
   * A fixed number of matching requests to instrument per second, prior to applying the fixed rate. The reservoir is not used directly by services, but applies to all services using the rule collectively.
   * @min `0`
   */
  ReservoirSize: number;
  /**
   * Matches the ARN of the AWS resource on which the service runs.
   * @maxLength `500`
   */
  ResourceARN: string;
  /**
   * The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.
   */
  RuleARN?: string;
  /**
   * The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.
   * @minLength `1`
   * @maxLength `32`
   */
  RuleName?: string;
  /**
   * Matches the name that the service uses to identify itself in segments.
   * @maxLength `64`
   */
  ServiceName: string;
  /**
   * Matches the origin that the service uses to identify its type in segments.
   * @maxLength `64`
   */
  ServiceType: string;
  /**
   * Matches the path from a request URL.
   * @maxLength `128`
   */
  URLPath: string;
  /**
   * The version of the sampling rule format (1)
   * @min `1`
   */
  Version?: number;
};
/**
 * Type definition for `AWS::XRay::SamplingRule.SamplingRuleRecord`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-xray-samplingrule-samplingrulerecord.html}
 */
export type SamplingRuleRecord = {
  /**
   * When the rule was created, in Unix time seconds.
   */
  CreatedAt?: string;
  /**
   * When the rule was modified, in Unix time seconds.
   */
  ModifiedAt?: string;
  SamplingRule?: SamplingRule;
};
/**
 * Type definition for `AWS::XRay::SamplingRule.SamplingRuleUpdate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-xray-samplingrule-samplingruleupdate.html}
 */
export type SamplingRuleUpdate = {
  /**
   * Matches attributes derived from the request.
   */
  Attributes?: Record<string, string>;
  /**
   * The percentage of matching requests to instrument, after the reservoir is exhausted.
   * @min `0`
   * @max `1`
   */
  FixedRate?: number;
  /**
   * Matches the HTTP method from a request URL.
   * @maxLength `10`
   */
  HTTPMethod?: string;
  /**
   * Matches the hostname from a request URL.
   * @maxLength `64`
   */
  Host?: string;
  /**
   * The priority of the sampling rule.
   * @min `1`
   * @max `9999`
   */
  Priority?: number;
  /**
   * A fixed number of matching requests to instrument per second, prior to applying the fixed rate. The reservoir is not used directly by services, but applies to all services using the rule collectively.
   * @min `0`
   */
  ReservoirSize?: number;
  /**
   * Matches the ARN of the AWS resource on which the service runs.
   * @maxLength `500`
   */
  ResourceARN?: string;
  /**
   * The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.
   */
  RuleARN?: string;
  /**
   * The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.
   * @minLength `1`
   * @maxLength `32`
   */
  RuleName?: string;
  /**
   * Matches the name that the service uses to identify itself in segments.
   * @maxLength `64`
   */
  ServiceName?: string;
  /**
   * Matches the origin that the service uses to identify its type in segments.
   * @maxLength `64`
   */
  ServiceType?: string;
  /**
   * Matches the path from a request URL.
   * @maxLength `128`
   */
  URLPath?: string;
};
/**
 * Type definition for `AWS::XRay::SamplingRule.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-xray-samplingrule-tag.html}
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
 * Resource type definition for `AWS::XRay::SamplingRule`.
 * This schema provides construct and validation rules for AWS-XRay SamplingRule resource parameters.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-samplingrule.html}
 */
export class XRaySamplingRule extends $Resource<
  "AWS::XRay::SamplingRule",
  XRaySamplingRuleProperties,
  XRaySamplingRuleAttributes
> {
  public static readonly Type = "AWS::XRay::SamplingRule";
  constructor(
    logicalId: string,
    properties: XRaySamplingRuleProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, XRaySamplingRule.Type, properties, options);
  }
}
