import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::ServiceCatalog::PortfolioShare
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioshare.html}
 */
export type ServiceCatalogPortfolioShareProperties = {
  /**
   * The language code.
   */
  AcceptLanguage?: string;
  /**
   * The AWS account ID.
   * @pattern `^[0-9]{12}$`
   */
  AccountId: string;
  /**
   * The portfolio identifier.
   */
  PortfolioId: string;
  /**
   * Enables or disables TagOptions sharing when creating the portfolio share.
   */
  ShareTagOptions?: boolean;
};
/**
 * Resource Type definition for AWS::ServiceCatalog::PortfolioShare
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioshare.html}
 */
export class ServiceCatalogPortfolioShare extends $Resource<
  "AWS::ServiceCatalog::PortfolioShare",
  ServiceCatalogPortfolioShareProperties,
  Record<string, never>
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
