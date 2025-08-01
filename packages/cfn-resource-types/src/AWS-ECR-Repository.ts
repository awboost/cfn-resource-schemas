import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The ``AWS::ECR::Repository`` resource specifies an Amazon Elastic Container Registry (Amazon ECR) repository, where users can push and pull Docker images, Open Container Initiative (OCI) images, and OCI compatible artifacts. For more information, see [Amazon ECR private repositories](https://docs.aws.amazon.com/AmazonECR/latest/userguide/Repositories.html) in the *Amazon ECR User Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-repository.html}
 */
export type ECRRepositoryProperties = {
  /**
   * If true, deleting the repository force deletes the contents of the repository. If false, the repository must be empty before attempting to delete it.
   */
  EmptyOnDelete?: boolean;
  /**
   * The encryption configuration for the repository. This determines how the contents of your repository are encrypted at rest.
   */
  EncryptionConfiguration?: EncryptionConfiguration;
  /**
   * The image scanning configuration for the repository. This determines whether images are scanned for known vulnerabilities after being pushed to the repository.
   */
  ImageScanningConfiguration?: ImageScanningConfiguration;
  /**
   * The tag mutability setting for the repository. If this parameter is omitted, the default setting of ``MUTABLE`` will be used which will allow image tags to be overwritten. If ``IMMUTABLE`` is specified, all image tags within the repository will be immutable which will prevent them from being overwritten.
   */
  ImageTagMutability?:
    | "MUTABLE"
    | "IMMUTABLE"
    | "MUTABLE_WITH_EXCLUSION"
    | "IMMUTABLE_WITH_EXCLUSION";
  /**
   * @minLength `1`
   * @maxLength `5`
   */
  ImageTagMutabilityExclusionFilters?: ImageTagMutabilityExclusionFilter[];
  /**
   * Creates or updates a lifecycle policy. For information about lifecycle policy syntax, see [Lifecycle policy template](https://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html).
   */
  LifecyclePolicy?: LifecyclePolicy;
  /**
     * The name to use for the repository. The repository name may be specified on its own (such as ``nginx-web-app``) or it can be prepended with a namespace to group the repository into a category (such as ``project-a/nginx-web-app``). If you don't specify a name, CFNlong generates a unique physical ID and uses that ID for the repository name. For more information, see [Name type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
     The repository name must start with a letter and can only contain lowercase letters, numbers, hyphens, underscores, and forward slashes.
      If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
     * @minLength `2`
     * @maxLength `256`
     * @pattern `^(?=.{2,256}$)((?:[a-z0-9]+(?:[._-][a-z0-9]+)/‍*)*[a-z0-9]+(?:[._-][a-z0-9]+)*)$`
     */
  RepositoryName?: string;
  /**
   * The JSON repository policy text to apply to the repository. For more information, see [Amazon ECR repository policies](https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policy-examples.html) in the *Amazon Elastic Container Registry User Guide*.
   */
  RepositoryPolicyText?: Record<string, any> | string;
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::ECR::Repository`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-repository.html#aws-resource-ecr-repository-return-values}
 */
export type ECRRepositoryAttributes = {
  Arn: string;
  RepositoryUri: string;
};
/**
 * Type definition for `AWS::ECR::Repository.EncryptionConfiguration`.
 * The encryption configuration for the repository. This determines how the contents of your repository are encrypted at rest.
 By default, when no encryption configuration is set or the ``AES256`` encryption type is used, Amazon ECR uses server-side encryption with Amazon S3-managed encryption keys which encrypts your data at rest using an AES256 encryption algorithm. This does not require any action on your part.
 For more control over the encryption of the contents of your repository, you can use server-side encryption with KMSlong key stored in KMSlong (KMS) to encrypt your images. For more information, see [Amazon ECR encryption at rest](https://docs.aws.amazon.com/AmazonECR/latest/userguide/encryption-at-rest.html) in the *Amazon Elastic Container Registry User Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-repository-encryptionconfiguration.html}
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
 * Type definition for `AWS::ECR::Repository.EncryptionType`.
 * The encryption type to use.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-repository-encryptiontype.html}
 */
export type EncryptionType = "AES256" | "KMS" | "KMS_DSSE";
/**
 * Type definition for `AWS::ECR::Repository.ImageScanningConfiguration`.
 * The image scanning configuration for a repository.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-repository-imagescanningconfiguration.html}
 */
export type ImageScanningConfiguration = {
  /**
   * The setting that determines whether images are scanned after being pushed to a repository. If set to ``true``, images will be scanned after being pushed. If this parameter is not specified, it will default to ``false`` and images will not be scanned unless a scan is manually started.
   */
  ScanOnPush?: boolean;
};
/**
 * Type definition for `AWS::ECR::Repository.ImageTagMutabilityExclusionFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-repository-imagetagmutabilityexclusionfilter.html}
 */
export type ImageTagMutabilityExclusionFilter = {
  /**
   * Specifies the type of filter to use for excluding image tags from the repository's mutability setting.
   */
  ImageTagMutabilityExclusionFilterType: ImageTagMutabilityExclusionFilterType;
  /**
   * The value to use when filtering image tags.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[0-9a-zA-Z._*-]{1,128}`
   */
  ImageTagMutabilityExclusionFilterValue: string;
};
/**
 * Type definition for `AWS::ECR::Repository.ImageTagMutabilityExclusionFilterType`.
 * Specifies the type of filter to use for excluding image tags from the repository's mutability setting.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-repository-imagetagmutabilityexclusionfiltertype.html}
 */
export type ImageTagMutabilityExclusionFilterType = "WILDCARD";
/**
 * Type definition for `AWS::ECR::Repository.LifecyclePolicy`.
 * The ``LifecyclePolicy`` property type specifies a lifecycle policy. For information about lifecycle policy syntax, see [Lifecycle policy template](https://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html) in the *Amazon ECR User Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-repository-lifecyclepolicy.html}
 */
export type LifecyclePolicy = {
  /**
   * The JSON repository policy text to apply to the repository.
   * @minLength `100`
   * @maxLength `30720`
   */
  LifecyclePolicyText?: string;
  /**
     * The AWS account ID associated with the registry that contains the repository. If you do
     not specify a registry, the default registry is assumed.
     * @minLength `12`
     * @maxLength `12`
     * @pattern `^[0-9]{12}$`
     */
  RegistryId?: string;
};
/**
 * Type definition for `AWS::ECR::Repository.Tag`.
 * The metadata to apply to a resource to help you categorize and organize them. Each tag consists of a key and a value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-repository-tag.html}
 */
export type Tag = {
  /**
   * One part of a key-value pair that make up a tag. A ``key`` is a general label that acts like a category for more specific tag values.
   * @minLength `1`
   * @maxLength `127`
   */
  Key: string;
  /**
   * A ``value`` acts as a descriptor within a tag category (key).
   * @minLength `1`
   * @maxLength `255`
   */
  Value: string;
};
/**
 * The ``AWS::ECR::Repository`` resource specifies an Amazon Elastic Container Registry (Amazon ECR) repository, where users can push and pull Docker images, Open Container Initiative (OCI) images, and OCI compatible artifacts. For more information, see [Amazon ECR private repositories](https://docs.aws.amazon.com/AmazonECR/latest/userguide/Repositories.html) in the *Amazon ECR User Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-repository.html}
 */
export class ECRRepository extends $Resource<
  "AWS::ECR::Repository",
  ECRRepositoryProperties,
  ECRRepositoryAttributes
> {
  public static readonly Type = "AWS::ECR::Repository";
  constructor(
    logicalId: string,
    properties: ECRRepositoryProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ECRRepository.Type, properties, options);
  }
}
