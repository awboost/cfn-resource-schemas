import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::CloudFront::CachePolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-cachepolicy.html}
 */
export type CloudFrontCachePolicyProperties = {
  CachePolicyConfig: CachePolicyConfig;
};
/**
 * Attribute type definition for `AWS::CloudFront::CachePolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-cachepolicy.html#aws-resource-cloudfront-cachepolicy-return-values}
 */
export type CloudFrontCachePolicyAttributes = {
  Id: string;
  LastModifiedTime: string;
};
/**
 * Type definition for `AWS::CloudFront::CachePolicy.CachePolicyConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-cachepolicy-cachepolicyconfig.html}
 */
export type CachePolicyConfig = {
  Comment?: string;
  /**
   * @min `0`
   */
  DefaultTTL: number;
  /**
   * @min `0`
   */
  MaxTTL: number;
  /**
   * @min `0`
   */
  MinTTL: number;
  Name: string;
  ParametersInCacheKeyAndForwardedToOrigin: ParametersInCacheKeyAndForwardedToOrigin;
};
/**
 * Type definition for `AWS::CloudFront::CachePolicy.CookiesConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-cachepolicy-cookiesconfig.html}
 */
export type CookiesConfig = {
  /**
   * @pattern `^(none|whitelist|allExcept|all)$`
   */
  CookieBehavior: string;
  Cookies?: string[];
};
/**
 * Type definition for `AWS::CloudFront::CachePolicy.HeadersConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-cachepolicy-headersconfig.html}
 */
export type HeadersConfig = {
  /**
   * @pattern `^(none|whitelist)$`
   */
  HeaderBehavior: string;
  Headers?: string[];
};
/**
 * Type definition for `AWS::CloudFront::CachePolicy.ParametersInCacheKeyAndForwardedToOrigin`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-cachepolicy-parametersincachekeyandforwardedtoorigin.html}
 */
export type ParametersInCacheKeyAndForwardedToOrigin = {
  CookiesConfig: CookiesConfig;
  EnableAcceptEncodingBrotli?: boolean;
  EnableAcceptEncodingGzip: boolean;
  HeadersConfig: HeadersConfig;
  QueryStringsConfig: QueryStringsConfig;
};
/**
 * Type definition for `AWS::CloudFront::CachePolicy.QueryStringsConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-cachepolicy-querystringsconfig.html}
 */
export type QueryStringsConfig = {
  /**
   * @pattern `^(none|whitelist|allExcept|all)$`
   */
  QueryStringBehavior: string;
  QueryStrings?: string[];
};
/**
 * Resource Type definition for AWS::CloudFront::CachePolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-cachepolicy.html}
 */
export class CloudFrontCachePolicy extends $Resource<
  "AWS::CloudFront::CachePolicy",
  CloudFrontCachePolicyProperties,
  CloudFrontCachePolicyAttributes
> {
  public static readonly Type = "AWS::CloudFront::CachePolicy";
  constructor(
    logicalId: string,
    properties: CloudFrontCachePolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CloudFrontCachePolicy.Type, properties, options);
  }
}
