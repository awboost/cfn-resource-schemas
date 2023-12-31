import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::ServiceCatalog::CloudFormationProduct
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-cloudformationproduct.html}
 */
export type ServiceCatalogCloudFormationProductProperties = {
  AcceptLanguage?: string;
  Description?: string;
  Distributor?: string;
  Name: string;
  Owner: string;
  ProductType?: string;
  ProvisioningArtifactParameters?: ProvisioningArtifactProperties[];
  ReplaceProvisioningArtifacts?: boolean;
  SourceConnection?: SourceConnection;
  SupportDescription?: string;
  SupportEmail?: string;
  SupportUrl?: string;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::ServiceCatalog::CloudFormationProduct`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-cloudformationproduct.html#aws-resource-servicecatalog-cloudformationproduct-return-values}
 */
export type ServiceCatalogCloudFormationProductAttributes = {
  Id: string;
  ProductName: string;
  ProvisioningArtifactIds: string;
  ProvisioningArtifactNames: string;
};
/**
 * Type definition for `AWS::ServiceCatalog::CloudFormationProduct.CodeStarParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicecatalog-cloudformationproduct-codestarparameters.html}
 */
export type CodeStarParameters = {
  ArtifactPath: string;
  Branch: string;
  ConnectionArn: string;
  Repository: string;
};
/**
 * Type definition for `AWS::ServiceCatalog::CloudFormationProduct.ConnectionParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicecatalog-cloudformationproduct-connectionparameters.html}
 */
export type ConnectionParameters = {
  CodeStar?: CodeStarParameters;
};
/**
 * Type definition for `AWS::ServiceCatalog::CloudFormationProduct.ProvisioningArtifactProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicecatalog-cloudformationproduct-provisioningartifactproperties.html}
 */
export type ProvisioningArtifactProperties = {
  Description?: string;
  DisableTemplateValidation?: boolean;
  Info: Record<string, any>;
  Name?: string;
  Type?: string;
};
/**
 * Type definition for `AWS::ServiceCatalog::CloudFormationProduct.SourceConnection`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicecatalog-cloudformationproduct-sourceconnection.html}
 */
export type SourceConnection = {
  ConnectionParameters: ConnectionParameters;
  Type: string;
};
/**
 * Type definition for `AWS::ServiceCatalog::CloudFormationProduct.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicecatalog-cloudformationproduct-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::ServiceCatalog::CloudFormationProduct
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-cloudformationproduct.html}
 */
export class ServiceCatalogCloudFormationProduct extends $Resource<
  "AWS::ServiceCatalog::CloudFormationProduct",
  ServiceCatalogCloudFormationProductProperties,
  ServiceCatalogCloudFormationProductAttributes
> {
  public static readonly Type = "AWS::ServiceCatalog::CloudFormationProduct";
  public static readonly AttributeNames = [
    "Id" as const,
    "ProductName" as const,
    "ProvisioningArtifactIds" as const,
    "ProvisioningArtifactNames" as const,
  ];
  constructor(
    logicalId: string,
    properties: ServiceCatalogCloudFormationProductProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ServiceCatalogCloudFormationProduct.Type,
      properties,
      ServiceCatalogCloudFormationProduct.AttributeNames,
      options,
    );
  }
}
