import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::IAM::SAMLProvider
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-samlprovider.html}
 */
export type IAMSAMLProviderProperties = {
  /**
   * The private key from your external identity provider
   * @minLength `1`
   * @maxLength `16384`
   * @pattern `[\u0009\u000A\u000D\u0020-\u00FF]+`
   */
  AddPrivateKey?: string;
  /**
   * The encryption setting for the SAML provider
   */
  AssertionEncryptionMode?: "Allowed" | "Required";
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `[\w._-]+`
   */
  Name?: string;
  /**
   * @maxLength `2`
   */
  PrivateKeyList?: SAMLPrivateKey[];
  /**
   * The Key ID of the private key to remove
   * @minLength `22`
   * @maxLength `64`
   * @pattern `[A-Z0-9]+`
   */
  RemovePrivateKey?: string;
  /**
   * @minLength `1000`
   * @maxLength `10000000`
   */
  SamlMetadataDocument?: string;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::IAM::SAMLProvider`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-samlprovider.html#aws-resource-iam-samlprovider-return-values}
 */
export type IAMSAMLProviderAttributes = {
  /**
   * Amazon Resource Name (ARN) of the SAML provider
   * @minLength `1`
   * @maxLength `1600`
   */
  Arn: string;
  /**
   * The unique identifier assigned to the SAML provider
   * @minLength `22`
   * @maxLength `64`
   * @pattern `[A-Z0-9]+`
   */
  SamlProviderUUID: string;
};
/**
 * Type definition for `AWS::IAM::SAMLProvider.SAMLPrivateKey`.
 * The private key metadata for the SAML provider
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-samlprovider-samlprivatekey.html}
 */
export type SAMLPrivateKey = {
  /**
   * The unique identifier for the SAML private key.
   * @minLength `22`
   * @maxLength `64`
   * @pattern `[A-Z0-9]+`
   */
  KeyId: string;
  /**
   * The date and time, in <a href=\"http://www.iso.org/iso/iso8601\">ISO 8601 date-time </a> format, when the private key was uploaded.
   */
  Timestamp: string;
};
/**
 * Type definition for `AWS::IAM::SAMLProvider.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-samlprovider-tag.html}
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
 * Resource Type definition for AWS::IAM::SAMLProvider
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-samlprovider.html}
 */
export class IAMSAMLProvider extends $Resource<
  "AWS::IAM::SAMLProvider",
  IAMSAMLProviderProperties,
  IAMSAMLProviderAttributes
> {
  public static readonly Type = "AWS::IAM::SAMLProvider";
  constructor(
    logicalId: string,
    properties: IAMSAMLProviderProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IAMSAMLProvider.Type, properties, options);
  }
}
