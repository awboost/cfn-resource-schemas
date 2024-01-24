import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::ServiceCatalog::ResourceUpdateConstraint
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-resourceupdateconstraint.html}
 */
export type ServiceCatalogResourceUpdateConstraintProperties = {
  AcceptLanguage?: string;
  Description?: string;
  PortfolioId: string;
  ProductId: string;
  TagUpdateOnProvisionedProduct: string;
};
/**
 * Attribute type definition for `AWS::ServiceCatalog::ResourceUpdateConstraint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-resourceupdateconstraint.html#aws-resource-servicecatalog-resourceupdateconstraint-return-values}
 */
export type ServiceCatalogResourceUpdateConstraintAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::ServiceCatalog::ResourceUpdateConstraint
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
