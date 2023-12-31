import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: ServiceCatalogPortfolioProductAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ServiceCatalogPortfolioProductAssociation.Type,
      properties,
      ServiceCatalogPortfolioProductAssociation.AttributeNames,
      options,
    );
  }
}
