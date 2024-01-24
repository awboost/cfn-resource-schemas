import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::KMS::ReplicaKey resource specifies a multi-region replica AWS KMS key in AWS Key Management Service (AWS KMS).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-replicakey.html}
 */
export type KMSReplicaKeyProperties = {
  /**
   * A description of the AWS KMS key. Use a description that helps you to distinguish this AWS KMS key from others in the account, such as its intended use.
   * @minLength `0`
   * @maxLength `8192`
   */
  Description?: string;
  /**
   * Specifies whether the AWS KMS key is enabled. Disabled AWS KMS keys cannot be used in cryptographic operations.
   */
  Enabled?: boolean;
  /**
   * The key policy that authorizes use of the AWS KMS key. The key policy must observe the following rules.
   */
  KeyPolicy: Record<string, any> | string;
  /**
   * Specifies the number of days in the waiting period before AWS KMS deletes an AWS KMS key that has been removed from a CloudFormation stack. Enter a value between 7 and 30 days. The default value is 30 days.
   * @min `7`
   * @max `30`
   */
  PendingWindowInDays?: number;
  /**
   * Identifies the primary AWS KMS key to create a replica of. Specify the Amazon Resource Name (ARN) of the AWS KMS key. You cannot specify an alias or key ID. For help finding the ARN, see Finding the Key ID and ARN in the AWS Key Management Service Developer Guide.
   * @minLength `1`
   * @maxLength `256`
   */
  PrimaryKeyArn: string;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::KMS::ReplicaKey`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-replicakey.html#aws-resource-kms-replicakey-return-values}
 */
export type KMSReplicaKeyAttributes = {
  Arn: string;
  KeyId: string;
};
/**
 * Type definition for `AWS::KMS::ReplicaKey.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kms-replicakey-tag.html}
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
 * The AWS::KMS::ReplicaKey resource specifies a multi-region replica AWS KMS key in AWS Key Management Service (AWS KMS).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-replicakey.html}
 */
export class KMSReplicaKey extends $Resource<
  "AWS::KMS::ReplicaKey",
  KMSReplicaKeyProperties,
  KMSReplicaKeyAttributes
> {
  public static readonly Type = "AWS::KMS::ReplicaKey";
  constructor(
    logicalId: string,
    properties: KMSReplicaKeyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, KMSReplicaKey.Type, properties, options);
  }
}
