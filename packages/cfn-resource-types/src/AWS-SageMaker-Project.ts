import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::SageMaker::Project
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-project.html}
 */
export type SageMakerProjectProperties = {
  /**
   * The description of the project.
   * @maxLength `1024`
   * @pattern `.*`
   */
  ProjectDescription?: string;
  /**
   * The name of the project.
   * @minLength `1`
   * @maxLength `32`
   * @pattern `^[a-zA-Z0-9](-*[a-zA-Z0-9])*$`
   */
  ProjectName: string;
  /**
   * Provisioned ServiceCatalog  Details
   */
  ServiceCatalogProvisionedProductDetails?: {
    /**
     * The identifier of the provisioning artifact (also known as a version).
     * @maxLength `100`
     * @pattern `^[a-zA-Z0-9](-*[a-zA-Z0-9])*$`
     */
    ProvisionedProductId?: string;
    /**
     * Provisioned Product Status Message
     */
    ProvisionedProductStatusMessage?: string;
  };
  /**
   * Input ServiceCatalog Provisioning Details
   */
  ServiceCatalogProvisioningDetails: {
    /**
     * The path identifier of the product.
     * @maxLength `100`
     * @pattern `^[a-zA-Z0-9](-*[a-zA-Z0-9])*$`
     */
    PathId?: string;
    /**
     * Service Catalog product identifier.
     * @maxLength `100`
     * @pattern `^[a-zA-Z0-9](-*[a-zA-Z0-9])*$`
     */
    ProductId: string;
    /**
     * The identifier of the provisioning artifact (also known as a version).
     * @maxLength `100`
     * @pattern `^[a-zA-Z0-9](-*[a-zA-Z0-9])*$`
     */
    ProvisioningArtifactId?: string;
    /**
     * Parameters specified by the administrator that are required for provisioning the product.
     */
    ProvisioningParameters?: ProvisioningParameter[];
  };
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `40`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::SageMaker::Project`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-project.html#aws-resource-sagemaker-project-return-values}
 */
export type SageMakerProjectAttributes = {
  /**
   * The time at which the project was created.
   */
  CreationTime: string;
  /**
   * The Amazon Resource Name (ARN) of the Project.
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:project.*`
   */
  ProjectArn: string;
  /**
   * Project Id.
   * @maxLength `20`
   * @pattern `^[a-zA-Z0-9](-*[a-zA-Z0-9])*`
   */
  ProjectId: string;
  /**
   * The status of a project.
   */
  ProjectStatus:
    | "Pending"
    | "CreateInProgress"
    | "CreateCompleted"
    | "CreateFailed"
    | "DeleteInProgress"
    | "DeleteFailed"
    | "DeleteCompleted";
};
/**
 * Type definition for `AWS::SageMaker::Project.ProvisioningParameter`.
 * Information about a parameter used to provision a product.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-project-provisioningparameter.html}
 */
export type ProvisioningParameter = {
  /**
   * The parameter key.
   * @minLength `1`
   * @maxLength `1000`
   * @pattern `.*`
   */
  Key: string;
  /**
   * The parameter value.
   * @maxLength `4096`
   * @pattern `.*`
   */
  Value: string;
};
/**
 * Type definition for `AWS::SageMaker::Project.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-project-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @maxLength `256`
   * @pattern `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::SageMaker::Project
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-project.html}
 */
export class SageMakerProject extends $Resource<
  "AWS::SageMaker::Project",
  SageMakerProjectProperties,
  SageMakerProjectAttributes
> {
  public static readonly Type = "AWS::SageMaker::Project";
  constructor(
    logicalId: string,
    properties: SageMakerProjectProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SageMakerProject.Type, properties, options);
  }
}
