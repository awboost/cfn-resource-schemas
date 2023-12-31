import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
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
  constructor(
    logicalId: string,
    properties: ServiceCatalogPortfolioShareProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ServiceCatalogPortfolioShare.Type, properties, options);
  }
}
