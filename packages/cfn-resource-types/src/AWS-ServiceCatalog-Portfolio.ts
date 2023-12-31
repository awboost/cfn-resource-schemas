import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::ServiceCatalog::Portfolio
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolio.html}
 */
export type ServiceCatalogPortfolioProperties = {
  AcceptLanguage?: string;
  Description?: string;
  DisplayName: string;
  ProviderName: string;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::ServiceCatalog::Portfolio`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolio.html#aws-resource-servicecatalog-portfolio-return-values}
 */
export type ServiceCatalogPortfolioAttributes = {
  Id: string;
  PortfolioName: string;
};
/**
 * Type definition for `AWS::ServiceCatalog::Portfolio.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicecatalog-portfolio-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::ServiceCatalog::Portfolio
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolio.html}
 */
export class ServiceCatalogPortfolio extends $Resource<
  "AWS::ServiceCatalog::Portfolio",
  ServiceCatalogPortfolioProperties,
  ServiceCatalogPortfolioAttributes
> {
  public static readonly Type = "AWS::ServiceCatalog::Portfolio";
  public static readonly AttributeNames = [
    "Id" as const,
    "PortfolioName" as const,
  ];
  constructor(
    logicalId: string,
    properties: ServiceCatalogPortfolioProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ServiceCatalogPortfolio.Type,
      properties,
      ServiceCatalogPortfolio.AttributeNames,
      options,
    );
  }
}
