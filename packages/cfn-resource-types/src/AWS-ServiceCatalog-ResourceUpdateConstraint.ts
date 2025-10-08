import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for AWS::ServiceCatalog::ResourceUpdateConstraint
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-resourceupdateconstraint.html}
 */
export type ServiceCatalogResourceUpdateConstraintProperties = {
  /**
   * The language code
   */
  AcceptLanguage?: string;
  /**
   * The description of the constraint
   */
  Description?: string;
  /**
   * The portfolio identifier
   */
  PortfolioId: string;
  /**
   * The product identifier
   */
  ProductId: string;
  /**
   * ALLOWED or NOT_ALLOWED, to permit or prevent changes to the tags on provisioned instances of the specified portfolio / product combination
   */
  TagUpdateOnProvisionedProduct: string;
};
/**
 * Attribute type definition for `AWS::ServiceCatalog::ResourceUpdateConstraint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-resourceupdateconstraint.html#aws-resource-servicecatalog-resourceupdateconstraint-return-values}
 */
export type ServiceCatalogResourceUpdateConstraintAttributes = {
  /**
   * Unique identifier for the constraint
   */
  Id: string;
};
/**
 * Resource type definition for AWS::ServiceCatalog::ResourceUpdateConstraint
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-resourceupdateconstraint.html}
 */
export class ServiceCatalogResourceUpdateConstraint extends $Resource<
  "AWS::ServiceCatalog::ResourceUpdateConstraint",
  ServiceCatalogResourceUpdateConstraintProperties,
  ServiceCatalogResourceUpdateConstraintAttributes
> {
  public static readonly Type = "AWS::ServiceCatalog::ResourceUpdateConstraint";
  constructor(
    logicalId: string,
    properties: ServiceCatalogResourceUpdateConstraintProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ServiceCatalogResourceUpdateConstraint.Type,
      properties,
      options,
    );
  }
}
