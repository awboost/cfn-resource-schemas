import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::ServiceCatalog::PortfolioProductAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioproductassociation.html}
 */
export type ServiceCatalogPortfolioProductAssociationProperties = {
  AcceptLanguage?: string;
  PortfolioId: string;
  ProductId: string;
  SourcePortfolioId?: string;
};
/**
 * Attribute type definition for `AWS::ServiceCatalog::PortfolioProductAssociation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioproductassociation.html#aws-resource-servicecatalog-portfolioproductassociation-return-values}
 */
export type ServiceCatalogPortfolioProductAssociationAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::ServiceCatalog::PortfolioProductAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioproductassociation.html}
 */
export class ServiceCatalogPortfolioProductAssociation extends $Resource<
  "AWS::ServiceCatalog::PortfolioProductAssociation",
  ServiceCatalogPortfolioProductAssociationProperties,
  ServiceCatalogPortfolioProductAssociationAttributes
> {
  public static readonly Type =
    "AWS::ServiceCatalog::PortfolioProductAssociation";
  constructor(
    logicalId: string,
    properties: ServiceCatalogPortfolioProductAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ServiceCatalogPortfolioProductAssociation.Type,
      properties,
      options,
    );
  }
}
