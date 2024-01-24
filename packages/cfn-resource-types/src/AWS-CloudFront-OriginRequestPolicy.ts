import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::CloudFront::OriginRequestPolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-originrequestpolicy.html}
 */
export type CloudFrontOriginRequestPolicyProperties = {
  OriginRequestPolicyConfig: OriginRequestPolicyConfig;
};
/**
 * Attribute type definition for `AWS::CloudFront::OriginRequestPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-originrequestpolicy.html#aws-resource-cloudfront-originrequestpolicy-return-values}
 */
export type CloudFrontOriginRequestPolicyAttributes = {
  Id: string;
  LastModifiedTime: string;
};
/**
 * Type definition for `AWS::CloudFront::OriginRequestPolicy.CookiesConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-originrequestpolicy-cookiesconfig.html}
 */
export type CookiesConfig = {
  /**
   * @pattern `^(none|whitelist|all|allExcept)$`
   */
  CookieBehavior: string;
  Cookies?: string[];
};
/**
 * Type definition for `AWS::CloudFront::OriginRequestPolicy.HeadersConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-originrequestpolicy-headersconfig.html}
 */
export type HeadersConfig = {
  /**
   * @pattern `^(none|whitelist|allViewer|allViewerAndWhitelistCloudFront|allExcept)$`
   */
  HeaderBehavior: string;
  Headers?: string[];
};
/**
 * Type definition for `AWS::CloudFront::OriginRequestPolicy.OriginRequestPolicyConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-originrequestpolicy-originrequestpolicyconfig.html}
 */
export type OriginRequestPolicyConfig = {
  Comment?: string;
  CookiesConfig: CookiesConfig;
  HeadersConfig: HeadersConfig;
  Name: string;
  QueryStringsConfig: QueryStringsConfig;
};
/**
 * Type definition for `AWS::CloudFront::OriginRequestPolicy.QueryStringsConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-originrequestpolicy-querystringsconfig.html}
 */
export type QueryStringsConfig = {
  /**
   * @pattern `^(none|whitelist|all|allExcept)$`
   */
  QueryStringBehavior: string;
  QueryStrings?: string[];
};
/**
 * Resource Type definition for AWS::CloudFront::OriginRequestPolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-originrequestpolicy.html}
 */
export class CloudFrontOriginRequestPolicy extends $Resource<
  "AWS::CloudFront::OriginRequestPolicy",
  CloudFrontOriginRequestPolicyProperties,
  CloudFrontOriginRequestPolicyAttributes
> {
  public static readonly Type = "AWS::CloudFront::OriginRequestPolicy";
  constructor(
    logicalId: string,
    properties: CloudFrontOriginRequestPolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CloudFrontOriginRequestPolicy.Type, properties, options);
  }
}
