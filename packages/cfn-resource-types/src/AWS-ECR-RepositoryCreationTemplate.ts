import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * AWS::ECR::RepositoryCreationTemplate is used to create repository with configuration from a pre-defined template.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-repositorycreationtemplate.html}
 */
export type ECRRepositoryCreationTemplateProperties = {
  /**
   * A list of enumerable Strings representing the repository creation scenarios that the template will apply towards.
   */
  AppliedFor: AppliedForItem[];
  /**
   * The ARN of the role to be assumed by ECR. This role must be in the same account as the registry that you are configuring.
   * @maxLength `2048`
   * @pattern `^arn:aws[-a-z0-9]*:iam::[0-9]{12}:role/[A-Za-z0-9+=,-.@_]*$`
   */
  CustomRoleArn?: string;
  /**
   * The description of the template.
   * @minLength `0`
   * @maxLength `256`
   */
  Description?: string;
  /**
     * The encryption configuration for the repository. This determines how the contents of your repository are encrypted at rest. By default, when no encryption configuration is set or the AES256 encryption type is used, Amazon ECR uses server-side encryption with Amazon S3-managed encryption keys which encrypts your data at rest using an AES-256 encryption algorithm. This does not require any action on your part.
    
    For more information, see https://docs.aws.amazon.com/AmazonECR/latest/userguide/encryption-at-rest.html
     */
  EncryptionConfiguration?: EncryptionConfiguration;
  /**
   * The image tag mutability setting for the repository.
   */
  ImageTagMutability?: "MUTABLE" | "IMMUTABLE";
  /**
   * The JSON lifecycle policy text to apply to the repository. For information about lifecycle policy syntax, see https://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html
   * @minLength `100`
   * @maxLength `30720`
   */
  LifecyclePolicy?: string;
  /**
   * The prefix use to match the repository name and apply the template.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^((?:[a-z0-9]+(?:[._-][a-z0-9]+)/‍*)*[a-z0-9]+(?:[._-][a-z0-9]+)/‍*?|ROOT)$`
   */
  Prefix: string;
  /**
   * The JSON repository policy text to apply to the repository. For more information, see https://docs.aws.amazon.com/AmazonECR/latest/userguide/RepositoryPolicyExamples.html
   */
  RepositoryPolicy?: string;
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `50`
   */
  ResourceTags?: Tag[];
};
/**
 * Attribute type definition for `AWS::ECR::RepositoryCreationTemplate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-repositorycreationtemplate.html#aws-resource-ecr-repositorycreationtemplate-return-values}
 */
export type ECRRepositoryCreationTemplateAttributes = {
  /**
   * Create timestamp of the template.
   */
  CreatedAt: string;
  /**
   * Update timestamp of the template.
   */
  UpdatedAt: string;
};
/**
 * Type definition for `AWS::ECR::RepositoryCreationTemplate.AppliedForItem`.
 * Enumerable Strings representing the repository creation scenarios that the template will apply towards.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-repositorycreationtemplate-appliedforitem.html}
 */
export type AppliedForItem = "REPLICATION" | "PULL_THROUGH_CACHE";
/**
 * Type definition for `AWS::ECR::RepositoryCreationTemplate.EncryptionConfiguration`.
 * The encryption configuration for the repository. This determines how the contents of your repository are encrypted at rest. By default, when no encryption configuration is set or the AES256 encryption type is used, Amazon ECR uses server-side encryption with Amazon S3-managed encryption keys which encrypts your data at rest using an AES-256 encryption algorithm. This does not require any action on your part.

For more information, see https://docs.aws.amazon.com/AmazonECR/latest/userguide/encryption-at-rest.html
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-repositorycreationtemplate-encryptionconfiguration.html}
 */
export type EncryptionConfiguration = {
  /**
   * The encryption type to use.
   */
  EncryptionType: EncryptionType;
  /**
   * If you use the KMS or KMS_DSSE encryption type, specify the CMK to use for encryption. The alias, key ID, or full ARN of the CMK can be specified. The key must exist in the same Region as the repository. If no key is specified, the default AWS managed CMK for Amazon ECR will be used.
   * @minLength `1`
   * @maxLength `2048`
   */
  KmsKey?: string;
};
/**
 * Type definition for `AWS::ECR::RepositoryCreationTemplate.EncryptionType`.
 * The encryption type to use.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-repositorycreationtemplate-encryptiontype.html}
 */
export type EncryptionType = "AES256" | "KMS" | "KMS_DSSE";
/**
 * Type definition for `AWS::ECR::RepositoryCreationTemplate.Tag`.
 * An array of key-value pairs to apply to this resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-repositorycreationtemplate-tag.html}
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
 * AWS::ECR::RepositoryCreationTemplate is used to create repository with configuration from a pre-defined template.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-repositorycreationtemplate.html}
 */
export class ECRRepositoryCreationTemplate extends $Resource<
  "AWS::ECR::RepositoryCreationTemplate",
  ECRRepositoryCreationTemplateProperties,
  ECRRepositoryCreationTemplateAttributes
> {
  public static readonly Type = "AWS::ECR::RepositoryCreationTemplate";
  constructor(
    logicalId: string,
    properties: ECRRepositoryCreationTemplateProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ECRRepositoryCreationTemplate.Type, properties, options);
  }
}
