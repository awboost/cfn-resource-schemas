import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::ServiceCatalog::StackSetConstraint
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-stacksetconstraint.html}
 */
export type ServiceCatalogStackSetConstraintProperties = {
  /**
   * The language code.
   */
  AcceptLanguage?: string;
  /**
   * One or more AWS accounts that will have access to the provisioned product.
   */
  AccountList: string[];
  /**
   * AdminRole ARN.
   */
  AdminRole: string;
  /**
   * The description of the constraint.
   */
  Description: string;
  /**
   * ExecutionRole name.
   */
  ExecutionRole: string;
  /**
   * The portfolio identifier.
   */
  PortfolioId: string;
  /**
   * The product identifier.
   */
  ProductId: string;
  /**
   * One or more AWS Regions where the provisioned product will be available.
   */
  RegionList: string[];
  /**
   * Permission to create, update, and delete stack instances. Choose from ALLOWED and NOT_ALLOWED.
   */
  StackInstanceControl: string;
};
/**
 * Attribute type definition for `AWS::ServiceCatalog::StackSetConstraint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-stacksetconstraint.html#aws-resource-servicecatalog-stacksetconstraint-return-values}
 */
export type ServiceCatalogStackSetConstraintAttributes = {
  /**
   * Unique identifier for the constraint
   */
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
