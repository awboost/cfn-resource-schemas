import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::ServiceCatalog::PortfolioProductAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioproductassociation.html}
 */
export type ServiceCatalogPortfolioProductAssociationProperties = {
  /**
   * The language code.
   */
  AcceptLanguage?: string;
  /**
   * The portfolio identifier.
   */
  PortfolioId?: string;
  /**
   * The product identifier.
   */
  ProductId?: string;
  /**
   * The identifier of the source portfolio. The source portfolio must be a portfolio imported from a different account than the one creating the association. This account must have previously shared this portfolio with the account creating the association.
   */
  SourcePortfolioId?: string;
};
/**
 * Resource Type definition for AWS::ServiceCatalog::PortfolioProductAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioproductassociation.html}
 */
export class ServiceCatalogPortfolioProductAssociation extends $Resource<
  "AWS::ServiceCatalog::PortfolioProductAssociation",
  ServiceCatalogPortfolioProductAssociationProperties,
  Record<string, never>
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
