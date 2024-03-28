import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::CloudFront::OriginAccessControl
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-originaccesscontrol.html}
 */
export type CloudFrontOriginAccessControlProperties = {
  OriginAccessControlConfig: OriginAccessControlConfig;
};
/**
 * Attribute type definition for `AWS::CloudFront::OriginAccessControl`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-originaccesscontrol.html#aws-resource-cloudfront-originaccesscontrol-return-values}
 */
export type CloudFrontOriginAccessControlAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::CloudFront::OriginAccessControl.OriginAccessControlConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-originaccesscontrol-originaccesscontrolconfig.html}
 */
export type OriginAccessControlConfig = {
  Description?: string;
  Name: string;
  /**
   * @pattern `^(s3|mediastore|lambda|mediapackagev2)$`
   */
  OriginAccessControlOriginType: string;
  /**
   * @pattern `^(never|no-override|always)$`
   */
  SigningBehavior: string;
  /**
   * @pattern `^(sigv4)$`
   */
  SigningProtocol: string;
};
/**
 * Resource Type definition for AWS::CloudFront::OriginAccessControl
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-originaccesscontrol.html}
 */
export class CloudFrontOriginAccessControl extends $Resource<
  "AWS::CloudFront::OriginAccessControl",
  CloudFrontOriginAccessControlProperties,
  CloudFrontOriginAccessControlAttributes
> {
  public static readonly Type = "AWS::CloudFront::OriginAccessControl";
  constructor(
    logicalId: string,
    properties: CloudFrontOriginAccessControlProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CloudFrontOriginAccessControl.Type, properties, options);
  }
}
