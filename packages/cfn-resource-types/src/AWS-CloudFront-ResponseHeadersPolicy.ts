import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::CloudFront::ResponseHeadersPolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-responseheaderspolicy.html}
 */
export type CloudFrontResponseHeadersPolicyProperties = {
  ResponseHeadersPolicyConfig: ResponseHeadersPolicyConfig;
};
/**
 * Attribute type definition for `AWS::CloudFront::ResponseHeadersPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-responseheaderspolicy.html#aws-resource-cloudfront-responseheaderspolicy-return-values}
 */
export type CloudFrontResponseHeadersPolicyAttributes = {
  Id: string;
  LastModifiedTime: string;
};
/**
 * Type definition for `AWS::CloudFront::ResponseHeadersPolicy.AccessControlAllowHeaders`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-accesscontrolallowheaders.html}
 */
export type AccessControlAllowHeaders = {
  Items: string[];
};
/**
 * Type definition for `AWS::CloudFront::ResponseHeadersPolicy.AccessControlAllowMethods`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-accesscontrolallowmethods.html}
 */
export type AccessControlAllowMethods = {
  Items: string[];
};
/**
 * Type definition for `AWS::CloudFront::ResponseHeadersPolicy.AccessControlAllowOrigins`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-accesscontrolalloworigins.html}
 */
export type AccessControlAllowOrigins = {
  Items: string[];
};
/**
 * Type definition for `AWS::CloudFront::ResponseHeadersPolicy.AccessControlExposeHeaders`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-accesscontrolexposeheaders.html}
 */
export type AccessControlExposeHeaders = {
  Items: string[];
};
/**
 * Type definition for `AWS::CloudFront::ResponseHeadersPolicy.ContentSecurityPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-contentsecuritypolicy.html}
 */
export type ContentSecurityPolicy = {
  ContentSecurityPolicy: string;
  Override: boolean;
};
/**
 * Type definition for `AWS::CloudFront::ResponseHeadersPolicy.ContentTypeOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-contenttypeoptions.html}
 */
export type ContentTypeOptions = {
  Override: boolean;
};
/**
 * Type definition for `AWS::CloudFront::ResponseHeadersPolicy.CorsConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-corsconfig.html}
 */
export type CorsConfig = {
  AccessControlAllowCredentials: boolean;
  AccessControlAllowHeaders: AccessControlAllowHeaders;
  AccessControlAllowMethods: AccessControlAllowMethods;
  AccessControlAllowOrigins: AccessControlAllowOrigins;
  AccessControlExposeHeaders?: AccessControlExposeHeaders;
  AccessControlMaxAgeSec?: number;
  OriginOverride: boolean;
};
/**
 * Type definition for `AWS::CloudFront::ResponseHeadersPolicy.CustomHeader`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-customheader.html}
 */
export type CustomHeader = {
  Header: string;
  Override: boolean;
  Value: string;
};
/**
 * Type definition for `AWS::CloudFront::ResponseHeadersPolicy.CustomHeadersConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-customheadersconfig.html}
 */
export type CustomHeadersConfig = {
  Items: CustomHeader[];
};
/**
 * Type definition for `AWS::CloudFront::ResponseHeadersPolicy.FrameOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-frameoptions.html}
 */
export type FrameOptions = {
  /**
   * @pattern `^(DENY|SAMEORIGIN)$`
   */
  FrameOption: string;
  Override: boolean;
};
/**
 * Type definition for `AWS::CloudFront::ResponseHeadersPolicy.ReferrerPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-referrerpolicy.html}
 */
export type ReferrerPolicy = {
  Override: boolean;
  /**
   * @pattern `^(no-referrer|no-referrer-when-downgrade|origin|origin-when-cross-origin|same-origin|strict-origin|strict-origin-when-cross-origin|unsafe-url)$`
   */
  ReferrerPolicy: string;
};
/**
 * Type definition for `AWS::CloudFront::ResponseHeadersPolicy.RemoveHeader`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-removeheader.html}
 */
export type RemoveHeader = {
  Header: string;
};
/**
 * Type definition for `AWS::CloudFront::ResponseHeadersPolicy.RemoveHeadersConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-removeheadersconfig.html}
 */
export type RemoveHeadersConfig = {
  Items: RemoveHeader[];
};
/**
 * Type definition for `AWS::CloudFront::ResponseHeadersPolicy.ResponseHeadersPolicyConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-responseheaderspolicyconfig.html}
 */
export type ResponseHeadersPolicyConfig = {
  Comment?: string;
  CorsConfig?: CorsConfig;
  CustomHeadersConfig?: CustomHeadersConfig;
  Name: string;
  RemoveHeadersConfig?: RemoveHeadersConfig;
  SecurityHeadersConfig?: SecurityHeadersConfig;
  ServerTimingHeadersConfig?: ServerTimingHeadersConfig;
};
/**
 * Type definition for `AWS::CloudFront::ResponseHeadersPolicy.SecurityHeadersConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-securityheadersconfig.html}
 */
export type SecurityHeadersConfig = {
  ContentSecurityPolicy?: ContentSecurityPolicy;
  ContentTypeOptions?: ContentTypeOptions;
  FrameOptions?: FrameOptions;
  ReferrerPolicy?: ReferrerPolicy;
  StrictTransportSecurity?: StrictTransportSecurity;
  XSSProtection?: XSSProtection;
};
/**
 * Type definition for `AWS::CloudFront::ResponseHeadersPolicy.ServerTimingHeadersConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-servertimingheadersconfig.html}
 */
export type ServerTimingHeadersConfig = {
  Enabled: boolean;
  /**
   * @max `100`
   */
  SamplingRate?: number;
};
/**
 * Type definition for `AWS::CloudFront::ResponseHeadersPolicy.StrictTransportSecurity`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-stricttransportsecurity.html}
 */
export type StrictTransportSecurity = {
  AccessControlMaxAgeSec: number;
  IncludeSubdomains?: boolean;
  Override: boolean;
  Preload?: boolean;
};
/**
 * Type definition for `AWS::CloudFront::ResponseHeadersPolicy.XSSProtection`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-xssprotection.html}
 */
export type XSSProtection = {
  ModeBlock?: boolean;
  Override: boolean;
  Protection: boolean;
  ReportUri?: string;
};
/**
 * Resource Type definition for AWS::CloudFront::ResponseHeadersPolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-responseheaderspolicy.html}
 */
export class CloudFrontResponseHeadersPolicy extends $Resource<
  "AWS::CloudFront::ResponseHeadersPolicy",
  CloudFrontResponseHeadersPolicyProperties,
  CloudFrontResponseHeadersPolicyAttributes
> {
  public static readonly Type = "AWS::CloudFront::ResponseHeadersPolicy";
  public static readonly AttributeNames = [
    "Id" as const,
    "LastModifiedTime" as const,
  ];
  constructor(
    logicalId: string,
    properties: CloudFrontResponseHeadersPolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      CloudFrontResponseHeadersPolicy.Type,
      properties,
      CloudFrontResponseHeadersPolicy.AttributeNames,
      options,
    );
  }
}
