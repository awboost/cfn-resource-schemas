import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::CloudFront::CloudFrontOriginAccessIdentity
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-cloudfrontoriginaccessidentity.html}
 */
export type CloudFrontCloudFrontOriginAccessIdentityProperties = {
  CloudFrontOriginAccessIdentityConfig: CloudFrontOriginAccessIdentityConfig;
};
/**
 * Attribute type definition for `AWS::CloudFront::CloudFrontOriginAccessIdentity`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-cloudfrontoriginaccessidentity.html#aws-resource-cloudfront-cloudfrontoriginaccessidentity-return-values}
 */
export type CloudFrontCloudFrontOriginAccessIdentityAttributes = {
  Id: string;
  S3CanonicalUserId: string;
};
/**
 * Type definition for `AWS::CloudFront::CloudFrontOriginAccessIdentity.CloudFrontOriginAccessIdentityConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-cloudfrontoriginaccessidentity-cloudfrontoriginaccessidentityconfig.html}
 */
export type CloudFrontOriginAccessIdentityConfig = {
  Comment: string;
};
/**
 * Resource Type definition for AWS::CloudFront::CloudFrontOriginAccessIdentity
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-cloudfrontoriginaccessidentity.html}
 */
export class CloudFrontCloudFrontOriginAccessIdentity extends $Resource<
  "AWS::CloudFront::CloudFrontOriginAccessIdentity",
  CloudFrontCloudFrontOriginAccessIdentityProperties,
  CloudFrontCloudFrontOriginAccessIdentityAttributes
> {
  public static readonly Type =
    "AWS::CloudFront::CloudFrontOriginAccessIdentity";
  constructor(
    logicalId: string,
    properties: CloudFrontCloudFrontOriginAccessIdentityProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      CloudFrontCloudFrontOriginAccessIdentity.Type,
      properties,
      options,
    );
  }
}
