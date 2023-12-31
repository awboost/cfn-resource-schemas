import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::CloudFront::Distribution
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-distribution.html}
 */
export type CloudFrontDistributionProperties = {
  DistributionConfig: DistributionConfig;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::CloudFront::Distribution`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-distribution.html#aws-resource-cloudfront-distribution-return-values}
 */
export type CloudFrontDistributionAttributes = {
  DomainName: string;
  Id: string;
};
/**
 * Type definition for `AWS::CloudFront::Distribution.CacheBehavior`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-cachebehavior.html}
 */
export type CacheBehavior = {
  AllowedMethods?: string[];
  CachePolicyId?: string;
  CachedMethods?: string[];
  Compress?: boolean;
  DefaultTTL?: number;
  FieldLevelEncryptionId?: string;
  ForwardedValues?: ForwardedValues;
  FunctionAssociations?: FunctionAssociation[];
  LambdaFunctionAssociations?: LambdaFunctionAssociation[];
  MaxTTL?: number;
  MinTTL?: number;
  OriginRequestPolicyId?: string;
  PathPattern: string;
  RealtimeLogConfigArn?: string;
  ResponseHeadersPolicyId?: string;
  SmoothStreaming?: boolean;
  TargetOriginId: string;
  TrustedKeyGroups?: string[];
  TrustedSigners?: string[];
  ViewerProtocolPolicy: string;
};
/**
 * Type definition for `AWS::CloudFront::Distribution.Cookies`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-cookies.html}
 */
export type Cookies = {
  Forward: string;
  WhitelistedNames?: string[];
};
/**
 * Type definition for `AWS::CloudFront::Distribution.CustomErrorResponse`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-customerrorresponse.html}
 */
export type CustomErrorResponse = {
  ErrorCachingMinTTL?: number;
  ErrorCode: number;
  ResponseCode?: number;
  ResponsePagePath?: string;
};
/**
 * Type definition for `AWS::CloudFront::Distribution.CustomOriginConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-customoriginconfig.html}
 */
export type CustomOriginConfig = {
  HTTPPort?: number;
  HTTPSPort?: number;
  OriginKeepaliveTimeout?: number;
  OriginProtocolPolicy: string;
  OriginReadTimeout?: number;
  OriginSSLProtocols?: string[];
};
/**
 * Type definition for `AWS::CloudFront::Distribution.DefaultCacheBehavior`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-defaultcachebehavior.html}
 */
export type DefaultCacheBehavior = {
  AllowedMethods?: string[];
  CachePolicyId?: string;
  CachedMethods?: string[];
  Compress?: boolean;
  DefaultTTL?: number;
  FieldLevelEncryptionId?: string;
  ForwardedValues?: ForwardedValues;
  FunctionAssociations?: FunctionAssociation[];
  LambdaFunctionAssociations?: LambdaFunctionAssociation[];
  MaxTTL?: number;
  MinTTL?: number;
  OriginRequestPolicyId?: string;
  RealtimeLogConfigArn?: string;
  ResponseHeadersPolicyId?: string;
  SmoothStreaming?: boolean;
  TargetOriginId: string;
  TrustedKeyGroups?: string[];
  TrustedSigners?: string[];
  ViewerProtocolPolicy: string;
};
/**
 * Type definition for `AWS::CloudFront::Distribution.DistributionConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-distributionconfig.html}
 */
export type DistributionConfig = {
  Aliases?: string[];
  CNAMEs?: string[];
  CacheBehaviors?: CacheBehavior[];
  Comment?: string;
  ContinuousDeploymentPolicyId?: string;
  CustomErrorResponses?: CustomErrorResponse[];
  CustomOrigin?: LegacyCustomOrigin;
  DefaultCacheBehavior: DefaultCacheBehavior;
  DefaultRootObject?: string;
  Enabled: boolean;
  HttpVersion?: string;
  IPV6Enabled?: boolean;
  Logging?: Logging;
  OriginGroups?: OriginGroups;
  Origins?: Origin[];
  PriceClass?: string;
  Restrictions?: Restrictions;
  S3Origin?: LegacyS3Origin;
  Staging?: boolean;
  ViewerCertificate?: ViewerCertificate;
  WebACLId?: string;
};
/**
 * Type definition for `AWS::CloudFront::Distribution.ForwardedValues`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-forwardedvalues.html}
 */
export type ForwardedValues = {
  Cookies?: Cookies;
  Headers?: string[];
  QueryString: boolean;
  QueryStringCacheKeys?: string[];
};
/**
 * Type definition for `AWS::CloudFront::Distribution.FunctionAssociation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-functionassociation.html}
 */
export type FunctionAssociation = {
  EventType?: string;
  FunctionARN?: string;
};
/**
 * Type definition for `AWS::CloudFront::Distribution.GeoRestriction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-georestriction.html}
 */
export type GeoRestriction = {
  Locations?: string[];
  RestrictionType: string;
};
/**
 * Type definition for `AWS::CloudFront::Distribution.LambdaFunctionAssociation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-lambdafunctionassociation.html}
 */
export type LambdaFunctionAssociation = {
  EventType?: string;
  IncludeBody?: boolean;
  LambdaFunctionARN?: string;
};
/**
 * Type definition for `AWS::CloudFront::Distribution.LegacyCustomOrigin`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-legacycustomorigin.html}
 */
export type LegacyCustomOrigin = {
  DNSName: string;
  HTTPPort?: number;
  HTTPSPort?: number;
  OriginProtocolPolicy: string;
  OriginSSLProtocols: string[];
};
/**
 * Type definition for `AWS::CloudFront::Distribution.LegacyS3Origin`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-legacys3origin.html}
 */
export type LegacyS3Origin = {
  DNSName: string;
  OriginAccessIdentity?: string;
};
/**
 * Type definition for `AWS::CloudFront::Distribution.Logging`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-logging.html}
 */
export type Logging = {
  Bucket: string;
  IncludeCookies?: boolean;
  Prefix?: string;
};
/**
 * Type definition for `AWS::CloudFront::Distribution.Origin`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-origin.html}
 */
export type Origin = {
  ConnectionAttempts?: number;
  ConnectionTimeout?: number;
  CustomOriginConfig?: CustomOriginConfig;
  DomainName: string;
  Id: string;
  OriginAccessControlId?: string;
  OriginCustomHeaders?: OriginCustomHeader[];
  OriginPath?: string;
  OriginShield?: OriginShield;
  S3OriginConfig?: S3OriginConfig;
};
/**
 * Type definition for `AWS::CloudFront::Distribution.OriginCustomHeader`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-origincustomheader.html}
 */
export type OriginCustomHeader = {
  HeaderName: string;
  HeaderValue: string;
};
/**
 * Type definition for `AWS::CloudFront::Distribution.OriginGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-origingroup.html}
 */
export type OriginGroup = {
  FailoverCriteria: OriginGroupFailoverCriteria;
  Id: string;
  Members: OriginGroupMembers;
};
/**
 * Type definition for `AWS::CloudFront::Distribution.OriginGroupFailoverCriteria`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-origingroupfailovercriteria.html}
 */
export type OriginGroupFailoverCriteria = {
  StatusCodes: StatusCodes;
};
/**
 * Type definition for `AWS::CloudFront::Distribution.OriginGroupMember`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-origingroupmember.html}
 */
export type OriginGroupMember = {
  OriginId: string;
};
/**
 * Type definition for `AWS::CloudFront::Distribution.OriginGroupMembers`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-origingroupmembers.html}
 */
export type OriginGroupMembers = {
  Items: OriginGroupMember[];
  Quantity: number;
};
/**
 * Type definition for `AWS::CloudFront::Distribution.OriginGroups`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-origingroups.html}
 */
export type OriginGroups = {
  Items?: OriginGroup[];
  Quantity: number;
};
/**
 * Type definition for `AWS::CloudFront::Distribution.OriginShield`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-originshield.html}
 */
export type OriginShield = {
  Enabled?: boolean;
  OriginShieldRegion?: string;
};
/**
 * Type definition for `AWS::CloudFront::Distribution.Restrictions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-restrictions.html}
 */
export type Restrictions = {
  GeoRestriction: GeoRestriction;
};
/**
 * Type definition for `AWS::CloudFront::Distribution.S3OriginConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-s3originconfig.html}
 */
export type S3OriginConfig = {
  OriginAccessIdentity?: string;
};
/**
 * Type definition for `AWS::CloudFront::Distribution.StatusCodes`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-statuscodes.html}
 */
export type StatusCodes = {
  Items: number[];
  Quantity: number;
};
/**
 * Type definition for `AWS::CloudFront::Distribution.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Type definition for `AWS::CloudFront::Distribution.ViewerCertificate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-viewercertificate.html}
 */
export type ViewerCertificate = {
  AcmCertificateArn?: string;
  CloudFrontDefaultCertificate?: boolean;
  IamCertificateId?: string;
  MinimumProtocolVersion?: string;
  SslSupportMethod?: string;
};
/**
 * Resource Type definition for AWS::CloudFront::Distribution
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-distribution.html}
 */
export class CloudFrontDistribution extends $Resource<
  "AWS::CloudFront::Distribution",
  CloudFrontDistributionProperties,
  CloudFrontDistributionAttributes
> {
  public static readonly Type = "AWS::CloudFront::Distribution";
  public static readonly AttributeNames = [
    "DomainName" as const,
    "Id" as const,
  ];
  constructor(
    logicalId: string,
    properties: CloudFrontDistributionProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      CloudFrontDistribution.Type,
      properties,
      CloudFrontDistribution.AttributeNames,
      options,
    );
  }
}
