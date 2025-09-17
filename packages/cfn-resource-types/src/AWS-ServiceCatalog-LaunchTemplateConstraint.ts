import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::ServiceCatalog::LaunchTemplateConstraint
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchtemplateconstraint.html}
 */
export type ServiceCatalogLaunchTemplateConstraintProperties = {
  /**
   * The language code.
   */
  AcceptLanguage?: string;
  /**
   * The description of the constraint.
   */
  Description?: string;
  /**
   * The portfolio identifier.
   */
  PortfolioId: string;
  /**
   * The product identifier.
   */
  ProductId: string;
  /**
   * A json encoded string of the template constraint rules
   */
  Rules: string;
};
/**
 * Attribute type definition for `AWS::ServiceCatalog::LaunchTemplateConstraint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchtemplateconstraint.html#aws-resource-servicecatalog-launchtemplateconstraint-return-values}
 */
export type ServiceCatalogLaunchTemplateConstraintAttributes = {
  /**
   * Unique identifier for the constraint
   */
  Id: string;
};
/**
 * Resource Type definition for AWS::ServiceCatalog::LaunchTemplateConstraint
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchtemplateconstraint.html}
 */
export class ServiceCatalogLaunchTemplateConstraint extends $Resource<
  "AWS::ServiceCatalog::LaunchTemplateConstraint",
  ServiceCatalogLaunchTemplateConstraintProperties,
  ServiceCatalogLaunchTemplateConstraintAttributes
> {
  public static readonly Type = "AWS::ServiceCatalog::LaunchTemplateConstraint";
  constructor(
    logicalId: string,
    properties: ServiceCatalogLaunchTemplateConstraintProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ServiceCatalogLaunchTemplateConstraint.Type,
      properties,
      options,
    );
  }
}
