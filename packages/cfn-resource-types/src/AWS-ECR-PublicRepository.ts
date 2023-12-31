import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::ECR::PublicRepository resource specifies an Amazon Elastic Container Public Registry (Amazon Public ECR) repository, where users can push and pull Docker images. For more information, see https://docs.aws.amazon.com/AmazonECR
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-publicrepository.html}
 */
export type ECRPublicRepositoryProperties = {
  /**
   * The CatalogData property type specifies Catalog data for ECR Public Repository. For information about Catalog Data, see <link>
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
   * The name to use for the repository. The repository name may be specified on its own (such as nginx-web-app) or it can be prepended with a namespace to group the repository into a category (such as project-a/nginx-web-app). If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the repository name. For more information, see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html.
   * @minLength `2`
   * @maxLength `256`
   * @pattern `^(?=.{2,256}$)((?:[a-z0-9]+(?:[._-][a-z0-9]+)/‍*)*[a-z0-9]+(?:[._-][a-z0-9]+)*)$`
   */
  RepositoryName?: string;
  /**
   * The JSON repository policy text to apply to the repository. For more information, see https://docs.aws.amazon.com/AmazonECR/latest/userguide/RepositoryPolicyExamples.html in the Amazon Elastic Container Registry User Guide.
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
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-publicrepository-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `127`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `255`
   */
  Value: string;
};
/**
 * The AWS::ECR::PublicRepository resource specifies an Amazon Elastic Container Public Registry (Amazon Public ECR) repository, where users can push and pull Docker images. For more information, see https://docs.aws.amazon.com/AmazonECR
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
