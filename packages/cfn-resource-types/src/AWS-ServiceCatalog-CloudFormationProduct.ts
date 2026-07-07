import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for AWS::ServiceCatalog::CloudFormationProduct
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-cloudformationproduct.html}
 */
export type ServiceCatalogCloudFormationProductProperties = {
  /**
   * The language code.
   */
  AcceptLanguage?: string;
  /**
   * The description of the product.
   */
  Description?: string;
  /**
   * The distributor of the product.
   */
  Distributor?: string;
  /**
   * The name of the product.
   */
  Name: string;
  /**
   * The owner of the product.
   */
  Owner: string;
  /**
   * The type of product.
   */
  ProductType?:
    | "CLOUD_FORMATION_TEMPLATE"
    | "MARKETPLACE_AMI"
    | "MARKETPLACE_CAR"
    | "TERRAFORM_OPEN_SOURCE"
    | "TERRAFORM_CLOUD"
    | "EXTERNAL";
  /**
   * The configuration of the provisioning artifact (also known as a version).
   */
  ProvisioningArtifactParameters?: ProvisioningArtifactProperties[];
  /**
   * This property is turned off by default. If turned off, you can update provisioning artifacts or product attributes (such as description, distributor, name, owner, and more) and the associated provisioning artifacts will retain the same unique identifier. Provisioning artifacts are matched within the CloudFormationProduct resource, and only those that have been updated will be changed. Provisioning artifacts are matched by a combinaton of provisioning artifact template URL and name.
   */
  ReplaceProvisioningArtifacts?: boolean;
  /**
   * A top level ProductViewDetail response containing details about the product's connection. AWS Service Catalog returns this field for the CreateProduct, UpdateProduct, DescribeProductAsAdmin, and SearchProductAsAdmin APIs. This response contains the same fields as the ConnectionParameters request, with the addition of the LastSync response.
   */
  SourceConnection?: SourceConnection;
  /**
   * The support information about the product.
   */
  SupportDescription?: string;
  /**
   * The contact email for product support.
   */
  SupportEmail?: string;
  /**
   * The contact URL for product support.
   */
  SupportUrl?: string;
  /**
   * One or more tags.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::ServiceCatalog::CloudFormationProduct`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-cloudformationproduct.html#aws-resource-servicecatalog-cloudformationproduct-return-values}
 */
export type ServiceCatalogCloudFormationProductAttributes = {
  /**
   * The ID of the product, such as prod-tsjbmal34qvek
   */
  Id: string;
  /**
   * The name of the product.
   */
  ProductName: string;
  /**
   * The IDs of the provisioning artifacts
   */
  ProvisioningArtifactIds: string;
  /**
   * The names of the provisioning artifacts
   */
  ProvisioningArtifactNames: string;
};
/**
 * Type definition for `AWS::ServiceCatalog::CloudFormationProduct.CodeStarParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicecatalog-cloudformationproduct-codestarparameters.html}
 */
export type CodeStarParameters = {
  /**
   * The absolute path where the artifact resides within the repo and branch, formatted as "folder/file.json".
   */
  ArtifactPath: string;
  /**
   * The specific branch where the artifact resides.
   */
  Branch: string;
  /**
     * The CodeStar ARN, which is the connection between AWS Service Catalog and the external repository.
    
    
     */
  ConnectionArn: string;
  /**
   * The specific repository where the product's artifact-to-be-synced resides, formatted as "Account/Repo."
   */
  Repository: string;
};
/**
 * Type definition for `AWS::ServiceCatalog::CloudFormationProduct.ProvisioningArtifactProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicecatalog-cloudformationproduct-provisioningartifactproperties.html}
 */
export type ProvisioningArtifactProperties = {
  /**
   * The description of the provisioning artifact, including how it differs from the previous provisioning artifact.
   */
  Description?: string;
  /**
   * If set to true, AWS Service Catalog stops validating the specified provisioning artifact even if it is invalid.
   */
  DisableTemplateValidation?: boolean;
  /**
     * Specify the template source with one of the following options, but not both. Keys accepted: [ LoadTemplateFromURL, ImportFromPhysicalId ] The URL of the AWS CloudFormation template in Amazon S3 in JSON format. Specify the URL in JSON format as follows:
    
    "LoadTemplateFromURL": "https://s3.amazonaws.com/cf-templates-ozkq9d3hgiq2-us-east-1/..."
    
    ImportFromPhysicalId: The physical id of the resource that contains the template. Currently only supports AWS CloudFormation stack arn. Specify the physical id in JSON format as follows: ImportFromPhysicalId: "arn:aws:cloudformation:[us-east-1]:[accountId]:stack/[StackName]/[resourceId]
     */
  Info: {
    /**
     * The physical id of the resource that contains the template. Currently only supports AWS CloudFormation stack arn
     */
    ImportFromPhysicalId?: string;
    /**
     * The URL of the AWS CloudFormation template in Amazon S3 in JSON format.
     */
    LoadTemplateFromURL?: string;
  };
  /**
   * The name of the provisioning artifact (for example, v1 v2beta). No spaces are allowed.
   */
  Name?: string;
  /**
   * The type of provisioning artifact. Valid values are CLOUD_FORMATION_TEMPLATE, TERRAFORM_OPEN_SOURCE, TERRAFORM_CLOUD, EXTERNAL
   */
  Type?:
    | "CLOUD_FORMATION_TEMPLATE"
    | "MARKETPLACE_AMI"
    | "MARKETPLACE_CAR"
    | "TERRAFORM_OPEN_SOURCE"
    | "TERRAFORM_CLOUD"
    | "EXTERNAL";
};
/**
 * Type definition for `AWS::ServiceCatalog::CloudFormationProduct.SourceConnection`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicecatalog-cloudformationproduct-sourceconnection.html}
 */
export type SourceConnection = {
  /**
   * The connection details based on the connection Type.
   */
  ConnectionParameters: {
    CodeStar?: CodeStarParameters;
  };
  /**
   * The only supported SourceConnection type is Codestar.
   */
  Type: string;
};
/**
 * Type definition for `AWS::ServiceCatalog::CloudFormationProduct.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicecatalog-cloudformationproduct-tag.html}
 */
export type Tag = {
  /**
   * The tag key.
   */
  Key: string;
  /**
   * The tag value
   */
  Value: string;
};
/**
 * Resource type definition for AWS::ServiceCatalog::CloudFormationProduct
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-cloudformationproduct.html}
 */
export class ServiceCatalogCloudFormationProduct extends $Resource<
  "AWS::ServiceCatalog::CloudFormationProduct",
  ServiceCatalogCloudFormationProductProperties,
  ServiceCatalogCloudFormationProductAttributes
> {
  public static readonly Type = "AWS::ServiceCatalog::CloudFormationProduct";
  constructor(
    logicalId: string,
    properties: ServiceCatalogCloudFormationProductProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ServiceCatalogCloudFormationProduct.Type,
      properties,
      options,
    );
  }
}
