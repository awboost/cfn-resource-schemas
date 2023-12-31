import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: ServiceCatalogAcceptedPortfolioShareProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ServiceCatalogAcceptedPortfolioShare.Type,
      properties,
      ServiceCatalogAcceptedPortfolioShare.AttributeNames,
      options,
    );
  }
}
