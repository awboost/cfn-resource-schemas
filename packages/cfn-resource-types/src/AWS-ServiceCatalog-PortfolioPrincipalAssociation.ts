import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
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
  constructor(
    logicalId: string,
    properties: ServiceCatalogPortfolioPrincipalAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ServiceCatalogPortfolioPrincipalAssociation.Type,
      properties,
      options,
    );
  }
}
