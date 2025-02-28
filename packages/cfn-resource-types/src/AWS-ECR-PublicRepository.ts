import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The ``AWS::ECR::PublicRepository`` resource specifies an Amazon Elastic Container Registry Public (Amazon ECR Public) repository, where users can push and pull Docker images, Open Container Initiative (OCI) images, and OCI compatible artifacts. For more information, see [Amazon ECR public repositories](https://docs.aws.amazon.com/AmazonECR/latest/public/public-repositories.html) in the *Amazon ECR Public User Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-publicrepository.html}
 */
export type ECRPublicRepositoryProperties = {
  /**
   * The details about the repository that are publicly visible in the Amazon ECR Public Gallery. For more information, see [Amazon ECR Public repository catalog data](https://docs.aws.amazon.com/AmazonECR/latest/public/public-repository-catalog-data.html) in the *Amazon ECR Public User Guide*.
   */
  RepositoryCatalogData?: {
    /**
     * Provide a detailed description of the repository. Identify what is included in the repository, any licensing details, or other relevant information.
     * @maxLength `10240`
     */
    AboutText?: string;
    /**
     * Select the system architectures that the images in your repository are compatible with.
     * @maxLength `50`
     */
    Architectures?: string[];
    /**
     * Select the operating systems that the images in your repository are compatible with.
     * @maxLength `50`
     */
    OperatingSystems?: string[];
    /**
     * The description of the public repository.
     * @maxLength `1024`
     */
    RepositoryDescription?: string;
    /**
     * Provide detailed information about how to use the images in the repository. This provides context, support information, and additional usage details for users of the repository.
     * @maxLength `10240`
     */
    UsageText?: string;
  };
  /**
     * The name to use for the public repository. The repository name may be specified on its own (such as ``nginx-web-app``) or it can be prepended with a namespace to group the repository into a category (such as ``project-a/nginx-web-app``). If you don't specify a name, CFNlong generates a unique physical ID and uses that ID for the repository name. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
      If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
     * @minLength `2`
     * @maxLength `256`
     * @pattern `^(?=.{2,256}$)((?:[a-z0-9]+(?:[._-][a-z0-9]+)/‍*)*[a-z0-9]+(?:[._-][a-z0-9]+)*)$`
     */
  RepositoryName?: string;
  /**
   * The JSON repository policy text to apply to the public repository. For more information, see [Amazon ECR Public repository policies](https://docs.aws.amazon.com/AmazonECR/latest/public/public-repository-policies.html) in the *Amazon ECR Public User Guide*.
   */
  RepositoryPolicyText?: Record<string, any> | string;
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::ECR::PublicRepository`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-publicrepository.html#aws-resource-ecr-publicrepository-return-values}
 */
export type ECRPublicRepositoryAttributes = {
  Arn: string;
};
/**
 * Type definition for `AWS::ECR::PublicRepository.Tag`.
 * The metadata to apply to a resource to help you categorize and organize them. Each tag consists of a key and a value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-publicrepository-tag.html}
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
 * The ``AWS::ECR::PublicRepository`` resource specifies an Amazon Elastic Container Registry Public (Amazon ECR Public) repository, where users can push and pull Docker images, Open Container Initiative (OCI) images, and OCI compatible artifacts. For more information, see [Amazon ECR public repositories](https://docs.aws.amazon.com/AmazonECR/latest/public/public-repositories.html) in the *Amazon ECR Public User Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-publicrepository.html}
 */
export class ECRPublicRepository extends $Resource<
  "AWS::ECR::PublicRepository",
  ECRPublicRepositoryProperties,
  ECRPublicRepositoryAttributes
> {
  public static readonly Type = "AWS::ECR::PublicRepository";
  constructor(
    logicalId: string,
    properties: ECRPublicRepositoryProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ECRPublicRepository.Type, properties, options);
  }
}
