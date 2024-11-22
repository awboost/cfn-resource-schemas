import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::CloudFront::CloudFrontOriginAccessIdentity`.
 * The request to create a new origin access identity (OAI). An origin access identity is a special CloudFront user that you can associate with Amazon S3 origins, so that you can secure all or just some of your Amazon S3 content. For more information, see [Restricting Access to Amazon S3 Content by Using an Origin Access Identity](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html) in the *Amazon CloudFront Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-cloudfrontoriginaccessidentity.html}
 */
export type CloudFrontCloudFrontOriginAccessIdentityProperties = {
  /**
   * The current configuration information for the identity.
   */
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
 * Origin access identity configuration. Send a ``GET`` request to the ``/CloudFront API version/CloudFront/identity ID/config`` resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-cloudfrontoriginaccessidentity-cloudfrontoriginaccessidentityconfig.html}
 */
export type CloudFrontOriginAccessIdentityConfig = {
  /**
   * A comment to describe the origin access identity. The comment cannot be longer than 128 characters.
   */
  Comment: string;
};
/**
 * Resource type definition for `AWS::CloudFront::CloudFrontOriginAccessIdentity`.
 * The request to create a new origin access identity (OAI). An origin access identity is a special CloudFront user that you can associate with Amazon S3 origins, so that you can secure all or just some of your Amazon S3 content. For more information, see [Restricting Access to Amazon S3 Content by Using an Origin Access Identity](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html) in the *Amazon CloudFront Developer Guide*.
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
