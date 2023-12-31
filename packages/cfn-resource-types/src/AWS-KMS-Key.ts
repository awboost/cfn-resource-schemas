import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::KMS::Key resource specifies an AWS KMS key in AWS Key Management Service (AWS KMS). Authorized users can use the AWS KMS key to encrypt and decrypt small amounts of data (up to 4096 bytes), but they are more commonly used to generate data keys. You can also use AWS KMS keys to encrypt data stored in AWS services that are integrated with AWS KMS or within their applications.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-key.html}
 */
export type KMSKeyProperties = {
  /**
   * Skips ("bypasses") the key policy lockout safety check. The default value is false.
   */
  BypassPolicyLockoutSafetyCheck?: boolean;
  /**
   * A description of the AWS KMS key. Use a description that helps you to distinguish this AWS KMS key from others in the account, such as its intended use.
   * @minLength `0`
   * @maxLength `8192`
   */
  Description?: string;
  /**
   * Enables automatic rotation of the key material for the specified AWS KMS key. By default, automation key rotation is not enabled.
   */
  EnableKeyRotation?: boolean;
  /**
   * Specifies whether the AWS KMS key is enabled. Disabled AWS KMS keys cannot be used in cryptographic operations.
   */
  Enabled?: boolean;
  /**
   * The key policy that authorizes use of the AWS KMS key. The key policy must observe the following rules.
   */
  KeyPolicy?: Record<string, any> | string;
  /**
   * Specifies the type of AWS KMS key to create. The default value is SYMMETRIC_DEFAULT. This property is required only for asymmetric AWS KMS keys. You can't change the KeySpec value after the AWS KMS key is created.
   */
  KeySpec?:
    | "SYMMETRIC_DEFAULT"
    | "RSA_2048"
    | "RSA_3072"
    | "RSA_4096"
    | "ECC_NIST_P256"
    | "ECC_NIST_P384"
    | "ECC_NIST_P521"
    | "ECC_SECG_P256K1"
    | "HMAC_224"
    | "HMAC_256"
    | "HMAC_384"
    | "HMAC_512"
    | "SM2";
  /**
   * Determines the cryptographic operations for which you can use the AWS KMS key. The default value is ENCRYPT_DECRYPT. This property is required only for asymmetric AWS KMS keys. You can't change the KeyUsage value after the AWS KMS key is created.
   */
  KeyUsage?: "ENCRYPT_DECRYPT" | "SIGN_VERIFY" | "GENERATE_VERIFY_MAC";
  /**
   * Specifies whether the AWS KMS key should be Multi-Region. You can't change the MultiRegion value after the AWS KMS key is created.
   */
  MultiRegion?: boolean;
  /**
   * The source of the key material for the KMS key. You cannot change the origin after you create the KMS key. The default is AWS_KMS, which means that AWS KMS creates the key material.
   */
  Origin?: "AWS_KMS" | "EXTERNAL";
  /**
   * Specifies the number of days in the waiting period before AWS KMS deletes an AWS KMS key that has been removed from a CloudFormation stack. Enter a value between 7 and 30 days. The default value is 30 days.
   * @min `7`
   * @max `30`
   */
  PendingWindowInDays?: number;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::KMS::Key`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-key.html#aws-resource-kms-key-return-values}
 */
export type KMSKeyAttributes = {
  Arn: string;
  KeyId: string;
};
/**
 * Type definition for `AWS::KMS::Key.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kms-key-tag.html}
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
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * The AWS::KMS::Key resource specifies an AWS KMS key in AWS Key Management Service (AWS KMS). Authorized users can use the AWS KMS key to encrypt and decrypt small amounts of data (up to 4096 bytes), but they are more commonly used to generate data keys. You can also use AWS KMS keys to encrypt data stored in AWS services that are integrated with AWS KMS or within their applications.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-key.html}
 */
export class KMSKey extends $Resource<
  "AWS::KMS::Key",
  KMSKeyProperties,
  KMSKeyAttributes
> {
  public static readonly Type = "AWS::KMS::Key";
  constructor(
    logicalId: string,
    properties: KMSKeyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, KMSKey.Type, properties, options);
  }
}
