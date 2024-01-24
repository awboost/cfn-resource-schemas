import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::IAM::OIDCProvider
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-oidcprovider.html}
 */
export type IAMOIDCProviderProperties = {
  ClientIdList?: string[];
  Tags?: Tag[];
  /**
   * @maxLength `5`
   */
  ThumbprintList: string[];
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  Url?: string;
};
/**
 * Attribute type definition for `AWS::IAM::OIDCProvider`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-oidcprovider.html#aws-resource-iam-oidcprovider-return-values}
 */
export type IAMOIDCProviderAttributes = {
  /**
   * Amazon Resource Name (ARN) of the OIDC provider
   * @minLength `20`
   * @maxLength `2048`
   */
  Arn: string;
};
/**
 * Type definition for `AWS::IAM::OIDCProvider.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-oidcprovider-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::IAM::OIDCProvider
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-oidcprovider.html}
 */
export class IAMOIDCProvider extends $Resource<
  "AWS::IAM::OIDCProvider",
  IAMOIDCProviderProperties,
  IAMOIDCProviderAttributes
> {
  public static readonly Type = "AWS::IAM::OIDCProvider";
  constructor(
    logicalId: string,
    properties: IAMOIDCProviderProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IAMOIDCProvider.Type, properties, options);
  }
}
