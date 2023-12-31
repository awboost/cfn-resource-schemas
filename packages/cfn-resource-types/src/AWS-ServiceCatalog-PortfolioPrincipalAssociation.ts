import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::ServiceCatalog::PortfolioPrincipalAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioprincipalassociation.html}
 */
export type ServiceCatalogPortfolioPrincipalAssociationProperties = {
  AcceptLanguage?: string;
  PortfolioId: string;
  PrincipalARN: string;
  PrincipalType: string;
};
/**
 * Attribute type definition for `AWS::ServiceCatalog::PortfolioPrincipalAssociation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioprincipalassociation.html#aws-resource-servicecatalog-portfolioprincipalassociation-return-values}
 */
export type ServiceCatalogPortfolioPrincipalAssociationAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::ServiceCatalog::PortfolioPrincipalAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioprincipalassociation.html}
 */
export class ServiceCatalogPortfolioPrincipalAssociation extends $Resource<
  "AWS::ServiceCatalog::PortfolioPrincipalAssociation",
  ServiceCatalogPortfolioPrincipalAssociationProperties,
  ServiceCatalogPortfolioPrincipalAssociationAttributes
> {
  public static readonly Type =
    "AWS::ServiceCatalog::PortfolioPrincipalAssociation";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: ServiceCatalogPortfolioPrincipalAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ServiceCatalogPortfolioPrincipalAssociation.Type,
      properties,
      ServiceCatalogPortfolioPrincipalAssociation.AttributeNames,
      options,
    );
  }
}
