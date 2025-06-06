import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::CloudFront::OriginAccessControl`.
 * Creates a new origin access control in CloudFront. After you create an origin access control, you can add it to an origin in a CloudFront distribution so that CloudFront sends authenticated (signed) requests to the origin.
 This makes it possible to block public access to the origin, allowing viewers (users) to access the origin's content only through CloudFront.
 For more information about using a CloudFront origin access control, see [Restricting access to an origin](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-origin.html) in the *Amazon CloudFront Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-originaccesscontrol.html}
 */
export type CloudFrontOriginAccessControlProperties = {
  /**
   * The origin access control.
   */
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
 * Creates a new origin access control in CloudFront. After you create an origin access control, you can add it to an origin in a CloudFront distribution so that CloudFront sends authenticated (signed) requests to the origin.
 This makes it possible to block public access to the origin, allowing viewers (users) to access the origin's content only through CloudFront.
 For more information about using a CloudFront origin access control, see [Restricting access to an origin](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-origin.html) in the *Amazon CloudFront Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-originaccesscontrol-originaccesscontrolconfig.html}
 */
export type OriginAccessControlConfig = {
  /**
   * A description of the origin access control.
   */
  Description?: string;
  /**
   * A name to identify the origin access control. You can specify up to 64 characters.
   */
  Name: string;
  /**
   * The type of origin that this origin access control is for.
   * @pattern `^(s3|mediastore|lambda|mediapackagev2)$`
   */
  OriginAccessControlOriginType: string;
  /**
     * Specifies which requests CloudFront signs (adds authentication information to). Specify ``always`` for the most common use case. For more information, see [origin access control advanced settings](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html#oac-advanced-settings) in the *Amazon CloudFront Developer Guide*.
     This field can have one of the following values:
      +  ``always`` – CloudFront signs all origin requests, overwriting the ``Authorization`` header from the viewer request if one exists.
      +  ``never`` – CloudFront doesn't sign any origin requests. This value turns off origin access control for all origins in all distributions that use this origin access control.
      +  ``no-override`` – If the viewer request doesn't contain the ``Authorization`` header, then CloudFront signs the origin request. If the viewer request contains the ``Authorization`` header, then CloudFront doesn't sign the origin request and instead passes along the ``Authorization`` header from the viewer request. *WARNING: To pass along the Authorization header from the viewer request, you must add the Authorization header to a cache policy for all cache behaviors that use origins associated with this origin access control.*
     * @pattern `^(never|no-override|always)$`
     */
  SigningBehavior: string;
  /**
   * The signing protocol of the origin access control, which determines how CloudFront signs (authenticates) requests. The only valid value is ``sigv4``.
   * @pattern `^(sigv4)$`
   */
  SigningProtocol: string;
};
/**
 * Resource type definition for `AWS::CloudFront::OriginAccessControl`.
 * Creates a new origin access control in CloudFront. After you create an origin access control, you can add it to an origin in a CloudFront distribution so that CloudFront sends authenticated (signed) requests to the origin.
 This makes it possible to block public access to the origin, allowing viewers (users) to access the origin's content only through CloudFront.
 For more information about using a CloudFront origin access control, see [Restricting access to an origin](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-origin.html) in the *Amazon CloudFront Developer Guide*.
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
