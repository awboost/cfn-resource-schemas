import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::ServiceCatalog::AcceptedPortfolioShare
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-acceptedportfolioshare.html}
 */
export type ServiceCatalogAcceptedPortfolioShareProperties = {
  AcceptLanguage?: string;
  PortfolioId: string;
};
/**
 * Attribute type definition for `AWS::ServiceCatalog::AcceptedPortfolioShare`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-acceptedportfolioshare.html#aws-resource-servicecatalog-acceptedportfolioshare-return-values}
 */
export type ServiceCatalogAcceptedPortfolioShareAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::ServiceCatalog::AcceptedPortfolioShare
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-acceptedportfolioshare.html}
 */
export class ServiceCatalogAcceptedPortfolioShare extends $Resource<
  "AWS::ServiceCatalog::AcceptedPortfolioShare",
  ServiceCatalogAcceptedPortfolioShareProperties,
  ServiceCatalogAcceptedPortfolioShareAttributes
> {
  public static readonly Type = "AWS::ServiceCatalog::AcceptedPortfolioShare";
  constructor(
    logicalId: string,
    properties: ServiceCatalogAcceptedPortfolioShareProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ServiceCatalogAcceptedPortfolioShare.Type,
      properties,
      options,
    );
  }
}
