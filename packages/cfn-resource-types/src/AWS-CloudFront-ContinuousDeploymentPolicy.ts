import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::CloudFront::ContinuousDeploymentPolicy`.
 * Creates a continuous deployment policy that routes a subset of production traffic from a primary distribution to a staging distribution.
 After you create and update a staging distribution, you can use a continuous deployment policy to incrementally move traffic to the staging distribution. This enables you to test changes to a distribution's configuration before moving all of your production traffic to the new configuration.
 For more information, see [Using CloudFront continuous deployment to safely test CDN configuration changes](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/continuous-deployment.html) in the *Amazon CloudFront Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-continuousdeploymentpolicy.html}
 */
export type CloudFrontContinuousDeploymentPolicyProperties = {
  /**
   * Contains the configuration for a continuous deployment policy.
   */
  ContinuousDeploymentPolicyConfig: ContinuousDeploymentPolicyConfig;
};
/**
 * Attribute type definition for `AWS::CloudFront::ContinuousDeploymentPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-continuousdeploymentpolicy.html#aws-resource-cloudfront-continuousdeploymentpolicy-return-values}
 */
export type CloudFrontContinuousDeploymentPolicyAttributes = {
  Id: string;
  LastModifiedTime: string;
};
/**
 * Type definition for `AWS::CloudFront::ContinuousDeploymentPolicy.ContinuousDeploymentPolicyConfig`.
 * Contains the configuration for a continuous deployment policy.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-continuousdeploymentpolicy-continuousdeploymentpolicyconfig.html}
 */
export type ContinuousDeploymentPolicyConfig = {
  /**
   * A Boolean that indicates whether this continuous deployment policy is enabled (in effect). When this value is ``true``, this policy is enabled and in effect. When this value is ``false``, this policy is not enabled and has no effect.
   */
  Enabled: boolean;
  /**
   * This configuration determines which HTTP requests are sent to the staging distribution. If the HTTP request contains a header and value that matches what you specify here, the request is sent to the staging distribution. Otherwise the request is sent to the primary distribution.
   */
  SingleHeaderPolicyConfig?: {
    /**
     * @minLength `1`
     * @maxLength `256`
     */
    Header: string;
    /**
     * @minLength `1`
     * @maxLength `1783`
     */
    Value: string;
  };
  /**
   * This configuration determines the percentage of HTTP requests that are sent to the staging distribution.
   */
  SingleWeightPolicyConfig?: {
    /**
     * Session stickiness provides the ability to define multiple requests from a single viewer as a single session. This prevents the potentially inconsistent experience of sending some of a given user's requests to your staging distribution, while others are sent to your primary distribution. Define the session duration using TTL values.
     */
    SessionStickinessConfig?: SessionStickinessConfig;
    /**
     * @min `0`
     * @max `1`
     */
    Weight: number;
  };
  /**
   * The CloudFront domain name of the staging distribution. For example: ``d111111abcdef8.cloudfront.net``.
   * @minLength `1`
   */
  StagingDistributionDnsNames: string[];
  /**
   * Contains the parameters for routing production traffic from your primary to staging distributions.
   */
  TrafficConfig?: TrafficConfig;
  /**
   * The type of traffic configuration.
   */
  Type?: "SingleWeight" | "SingleHeader";
};
/**
 * Type definition for `AWS::CloudFront::ContinuousDeploymentPolicy.SessionStickinessConfig`.
 * Session stickiness provides the ability to define multiple requests from a single viewer as a single session. This prevents the potentially inconsistent experience of sending some of a given user's requests to your staging distribution, while others are sent to your primary distribution. Define the session duration using TTL values.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-continuousdeploymentpolicy-sessionstickinessconfig.html}
 */
export type SessionStickinessConfig = {
  /**
   * The amount of time after which you want sessions to cease if no requests are received. Allowed values are 300–3600 seconds (5–60 minutes).
   * @min `300`
   * @max `3600`
   */
  IdleTTL: number;
  /**
   * The maximum amount of time to consider requests from the viewer as being part of the same session. Allowed values are 300–3600 seconds (5–60 minutes).
   * @min `300`
   * @max `3600`
   */
  MaximumTTL: number;
};
/**
 * Type definition for `AWS::CloudFront::ContinuousDeploymentPolicy.SingleHeaderConfig`.
 * Determines which HTTP requests are sent to the staging distribution.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-continuousdeploymentpolicy-singleheaderconfig.html}
 */
export type SingleHeaderConfig = {
  /**
   * The request header name that you want CloudFront to send to your staging distribution. The header must contain the prefix ``aws-cf-cd-``.
   * @minLength `1`
   * @maxLength `256`
   */
  Header: string;
  /**
   * The request header value.
   * @minLength `1`
   * @maxLength `1783`
   */
  Value: string;
};
/**
 * Type definition for `AWS::CloudFront::ContinuousDeploymentPolicy.SingleWeightConfig`.
 * This configuration determines the percentage of HTTP requests that are sent to the staging distribution.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-continuousdeploymentpolicy-singleweightconfig.html}
 */
export type SingleWeightConfig = {
  /**
   * Session stickiness provides the ability to define multiple requests from a single viewer as a single session. This prevents the potentially inconsistent experience of sending some of a given user's requests to your staging distribution, while others are sent to your primary distribution. Define the session duration using TTL values.
   */
  SessionStickinessConfig?: SessionStickinessConfig;
  /**
   * The percentage of traffic to send to a staging distribution, expressed as a decimal number between 0 and 0.15. For example, a value of 0.10 means 10% of traffic is sent to the staging distribution.
   * @min `0`
   * @max `1`
   */
  Weight: number;
};
/**
 * Type definition for `AWS::CloudFront::ContinuousDeploymentPolicy.TrafficConfig`.
 * The traffic configuration of your continuous deployment.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-continuousdeploymentpolicy-trafficconfig.html}
 */
export type TrafficConfig = {
  /**
   * Determines which HTTP requests are sent to the staging distribution.
   */
  SingleHeaderConfig?: SingleHeaderConfig;
  /**
   * Contains the percentage of traffic to send to the staging distribution.
   */
  SingleWeightConfig?: SingleWeightConfig;
  /**
   * The type of traffic configuration.
   */
  Type: "SingleWeight" | "SingleHeader";
};
/**
 * Resource type definition for `AWS::CloudFront::ContinuousDeploymentPolicy`.
 * Creates a continuous deployment policy that routes a subset of production traffic from a primary distribution to a staging distribution.
 After you create and update a staging distribution, you can use a continuous deployment policy to incrementally move traffic to the staging distribution. This enables you to test changes to a distribution's configuration before moving all of your production traffic to the new configuration.
 For more information, see [Using CloudFront continuous deployment to safely test CDN configuration changes](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/continuous-deployment.html) in the *Amazon CloudFront Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-continuousdeploymentpolicy.html}
 */
export class CloudFrontContinuousDeploymentPolicy extends $Resource<
  "AWS::CloudFront::ContinuousDeploymentPolicy",
  CloudFrontContinuousDeploymentPolicyProperties,
  CloudFrontContinuousDeploymentPolicyAttributes
> {
  public static readonly Type = "AWS::CloudFront::ContinuousDeploymentPolicy";
  constructor(
    logicalId: string,
    properties: CloudFrontContinuousDeploymentPolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      CloudFrontContinuousDeploymentPolicy.Type,
      properties,
      options,
    );
  }
}
