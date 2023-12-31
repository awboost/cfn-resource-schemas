import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::ServiceCatalog::StackSetConstraint
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-stacksetconstraint.html}
 */
export type ServiceCatalogStackSetConstraintProperties = {
  AcceptLanguage?: string;
  AccountList: string[];
  AdminRole: string;
  Description: string;
  ExecutionRole: string;
  PortfolioId: string;
  ProductId: string;
  RegionList: string[];
  StackInstanceControl: string;
};
/**
 * Attribute type definition for `AWS::ServiceCatalog::StackSetConstraint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-stacksetconstraint.html#aws-resource-servicecatalog-stacksetconstraint-return-values}
 */
export type ServiceCatalogStackSetConstraintAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::ServiceCatalog::StackSetConstraint
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-stacksetconstraint.html}
 */
export class ServiceCatalogStackSetConstraint extends $Resource<
  "AWS::ServiceCatalog::StackSetConstraint",
  ServiceCatalogStackSetConstraintProperties,
  ServiceCatalogStackSetConstraintAttributes
> {
  public static readonly Type = "AWS::ServiceCatalog::StackSetConstraint";
  constructor(
    logicalId: string,
    properties: ServiceCatalogStackSetConstraintProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ServiceCatalogStackSetConstraint.Type,
      properties,
      options,
    );
  }
}
