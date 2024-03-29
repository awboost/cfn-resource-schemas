import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::EC2::VerifiedAccessGroup resource creates an AWS EC2 Verified Access Group.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessgroup.html}
 */
export type EC2VerifiedAccessGroupProperties = {
  /**
   * A description for the AWS Verified Access group.
   */
  Description?: string;
  /**
   * The AWS Verified Access policy document.
   */
  PolicyDocument?: string;
  /**
   * The status of the Verified Access policy.
   */
  PolicyEnabled?: boolean;
  /**
   * The configuration options for customer provided KMS encryption.
   */
  SseSpecification?: SseSpecification;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
  /**
   * The ID of the AWS Verified Access instance.
   */
  VerifiedAccessInstanceId: string;
};
/**
 * Attribute type definition for `AWS::EC2::VerifiedAccessGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessgroup.html#aws-resource-ec2-verifiedaccessgroup-return-values}
 */
export type EC2VerifiedAccessGroupAttributes = {
  /**
   * Time this Verified Access Group was created.
   */
  CreationTime: string;
  /**
   * Time this Verified Access Group was last updated.
   */
  LastUpdatedTime: string;
  /**
   * The AWS account number that owns the group.
   */
  Owner: string;
  /**
   * The ARN of the Verified Access group.
   */
  VerifiedAccessGroupArn: string;
  /**
   * The ID of the AWS Verified Access group.
   */
  VerifiedAccessGroupId: string;
};
/**
 * Type definition for `AWS::EC2::VerifiedAccessGroup.SseSpecification`.
 * The configuration options for customer provided KMS encryption.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-verifiedaccessgroup-ssespecification.html}
 */
export type SseSpecification = {
  /**
   * Whether to encrypt the policy with the provided key or disable encryption
   */
  CustomerManagedKeyEnabled?: boolean;
  /**
   * KMS Key Arn used to encrypt the group policy
   */
  KmsKeyArn?: string;
};
/**
 * Type definition for `AWS::EC2::VerifiedAccessGroup.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-verifiedaccessgroup-tag.html}
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
 * The AWS::EC2::VerifiedAccessGroup resource creates an AWS EC2 Verified Access Group.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessgroup.html}
 */
export class EC2VerifiedAccessGroup extends $Resource<
  "AWS::EC2::VerifiedAccessGroup",
  EC2VerifiedAccessGroupProperties,
  EC2VerifiedAccessGroupAttributes
> {
  public static readonly Type = "AWS::EC2::VerifiedAccessGroup";
  constructor(
    logicalId: string,
    properties: EC2VerifiedAccessGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2VerifiedAccessGroup.Type, properties, options);
  }
}
