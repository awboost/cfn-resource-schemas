import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::ECR::RepositoryCreationTemplate`.
 * The details of the repository creation template associated with the request.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-repositorycreationtemplate.html}
 */
export type ECRRepositoryCreationTemplateProperties = {
  /**
   * A list of enumerable Strings representing the repository creation scenarios that this template will apply towards. The two supported scenarios are PULL_THROUGH_CACHE and REPLICATION
   */
  AppliedFor: AppliedForItem[];
  /**
   * The ARN of the role to be assumed by Amazon ECR. Amazon ECR will assume your supplied role when the customRoleArn is specified. When this field isn't specified, Amazon ECR will use the service-linked role for the repository creation template.
   * @maxLength `2048`
   * @pattern `^arn:aws[-a-z0-9]*:iam::[0-9]{12}:role/[A-Za-z0-9+=,-.@_]*$`
   */
  CustomRoleArn?: string;
  /**
   * The description associated with the repository creation template.
   * @minLength `0`
   * @maxLength `256`
   */
  Description?: string;
  /**
   * The encryption configuration associated with the repository creation template.
   */
  EncryptionConfiguration?: EncryptionConfiguration;
  /**
   * The tag mutability setting for the repository. If this parameter is omitted, the default setting of ``MUTABLE`` will be used which will allow image tags to be overwritten. If ``IMMUTABLE`` is specified, all image tags within the repository will be immutable which will prevent them from being overwritten.
   */
  ImageTagMutability?:
    | "MUTABLE"
    | "IMMUTABLE"
    | "IMMUTABLE_WITH_EXCLUSION"
    | "MUTABLE_WITH_EXCLUSION";
  /**
   * A list of filters that specify which image tags are excluded from the repository creation template's image tag mutability setting.
   * @minLength `1`
   * @maxLength `5`
   */
  ImageTagMutabilityExclusionFilters?: ImageTagMutabilityExclusionFilter[];
  /**
   * The lifecycle policy to use for repositories created using the template.
   * @minLength `100`
   * @maxLength `30720`
   */
  LifecyclePolicy?: string;
  /**
   * The repository namespace prefix associated with the repository creation template.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^((?:[a-z0-9]+(?:[._-][a-z0-9]+)/‍*)*[a-z0-9]+(?:[._-][a-z0-9]+)/‍*?|ROOT)$`
   */
  Prefix: string;
  /**
   * The repository policy to apply to repositories created using the template. A repository policy is a permissions policy associated with a repository to control access permissions.
   */
  RepositoryPolicy?: string;
  /**
   * The metadata to apply to the repository to help you categorize and organize. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
   * @maxLength `50`
   */
  ResourceTags?: Tag[];
};
/**
 * Attribute type definition for `AWS::ECR::RepositoryCreationTemplate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-repositorycreationtemplate.html#aws-resource-ecr-repositorycreationtemplate-return-values}
 */
export type ECRRepositoryCreationTemplateAttributes = {
  CreatedAt: string;
  UpdatedAt: string;
};
/**
 * Type definition for `AWS::ECR::RepositoryCreationTemplate.AppliedForItem`.
 * Enumerable Strings representing the repository creation scenarios that the template will apply towards.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-repositorycreationtemplate-appliedforitem.html}
 */
export type AppliedForItem =
  | "REPLICATION"
  | "PULL_THROUGH_CACHE"
  | "CREATE_ON_PUSH";
/**
 * Type definition for `AWS::ECR::RepositoryCreationTemplate.EncryptionConfiguration`.
 * The encryption configuration for the repository. This determines how the contents of your repository are encrypted at rest.
 By default, when no encryption configuration is set or the ``AES256`` encryption type is used, Amazon ECR uses server-side encryption with Amazon S3-managed encryption keys which encrypts your data at rest using an AES256 encryption algorithm. This does not require any action on your part.
 For more control over the encryption of the contents of your repository, you can use server-side encryption with KMSlong key stored in KMSlong (KMS) to encrypt your images. For more information, see [Amazon ECR encryption at rest](https://docs.aws.amazon.com/AmazonECR/latest/userguide/encryption-at-rest.html) in the *Amazon Elastic Container Registry User Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-repositorycreationtemplate-encryptionconfiguration.html}
 */
export type EncryptionConfiguration = {
  /**
     * The encryption type to use.
     If you use the ``KMS`` encryption type, the contents of the repository will be encrypted using server-side encryption with KMSlong key stored in KMS. When you use KMS to encrypt your data, you can either use the default AWS managed KMS key for Amazon ECR, or specify your own KMS key, which you already created.
     If you use the ``KMS_DSSE`` encryption type, the contents of the repository will be encrypted with two layers of encryption using server-side encryption with the KMS Management Service key stored in KMS. Similar to the ``KMS`` encryption type, you can either use the default AWS managed KMS key for Amazon ECR, or specify your own KMS key, which you've already created.
     If you use the ``AES256`` encryption type, Amazon ECR uses server-side encryption with Amazon S3-managed encryption keys which encrypts the images in the repository using an AES256 encryption algorithm.
     For more information, see [Amazon ECR encryption at rest](https://docs.aws.amazon.com/AmazonECR/latest/userguide/encryption-at-rest.html) in the *Amazon Elastic Container Registry User Guide*.
     */
  EncryptionType: EncryptionType;
  /**
   * If you use the ``KMS`` encryption type, specify the KMS key to use for encryption. The alias, key ID, or full ARN of the KMS key can be specified. The key must exist in the same Region as the repository. If no key is specified, the default AWS managed KMS key for Amazon ECR will be used.
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
 * Type definition for `AWS::ECR::RepositoryCreationTemplate.ImageTagMutabilityExclusionFilter`.
 * A filter that specifies which image tags should be excluded from the repository's image tag mutability setting.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-repositorycreationtemplate-imagetagmutabilityexclusionfilter.html}
 */
export type ImageTagMutabilityExclusionFilter = {
  ImageTagMutabilityExclusionFilterType: "WILDCARD";
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[0-9a-zA-Z._*-]{1,128}`
   */
  ImageTagMutabilityExclusionFilterValue: string;
};
/**
 * Type definition for `AWS::ECR::RepositoryCreationTemplate.Tag`.
 * The metadata to apply to a resource to help you categorize and organize them. Each tag consists of a key and a value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-repositorycreationtemplate-tag.html}
 */
export type Tag = {
  /**
   * One part of a key-value pair that make up a tag. A ``key`` is a general label that acts like a category for more specific tag values.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * A ``value`` acts as a descriptor within a tag category (key).
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::ECR::RepositoryCreationTemplate`.
 * The details of the repository creation template associated with the request.
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
