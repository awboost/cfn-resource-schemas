import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::ServiceCatalog::AcceptedPortfolioShare
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-acceptedportfolioshare.html}
 */
export type ServiceCatalogAcceptedPortfolioShareProperties = {
  /**
   * The language code.
   * @pattern `^(en|jp|zh)$`
   */
  AcceptLanguage?: string;
  /**
   * The portfolio identifier.
   * @minLength `1`
   * @maxLength `100`
   */
  PortfolioId: string;
};
/**
 * Resource Type definition for AWS::ServiceCatalog::AcceptedPortfolioShare
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-acceptedportfolioshare.html}
 */
export class ServiceCatalogAcceptedPortfolioShare extends $Resource<
  "AWS::ServiceCatalog::AcceptedPortfolioShare",
  ServiceCatalogAcceptedPortfolioShareProperties,
  Record<string, never>
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
