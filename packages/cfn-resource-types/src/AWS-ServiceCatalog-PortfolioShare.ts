import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::ServiceCatalog::PortfolioShare
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioshare.html}
 */
export type ServiceCatalogPortfolioShareProperties = {
  AcceptLanguage?: string;
  AccountId: string;
  PortfolioId: string;
  ShareTagOptions?: boolean;
};
/**
 * Attribute type definition for `AWS::ServiceCatalog::PortfolioShare`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioshare.html#aws-resource-servicecatalog-portfolioshare-return-values}
 */
export type ServiceCatalogPortfolioShareAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::ServiceCatalog::PortfolioShare
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioshare.html}
 */
export class ServiceCatalogPortfolioShare extends $Resource<
  "AWS::ServiceCatalog::PortfolioShare",
  ServiceCatalogPortfolioShareProperties,
  ServiceCatalogPortfolioShareAttributes
> {
  public static readonly Type = "AWS::ServiceCatalog::PortfolioShare";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: ServiceCatalogPortfolioShareProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ServiceCatalogPortfolioShare.Type,
      properties,
      ServiceCatalogPortfolioShare.AttributeNames,
      options,
    );
  }
}
