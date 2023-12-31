import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: ServiceCatalogResourceUpdateConstraintProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ServiceCatalogResourceUpdateConstraint.Type,
      properties,
      ServiceCatalogResourceUpdateConstraint.AttributeNames,
      options,
    );
  }
}
