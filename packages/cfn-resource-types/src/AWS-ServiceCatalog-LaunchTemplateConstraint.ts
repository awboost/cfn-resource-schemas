import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::ServiceCatalog::LaunchTemplateConstraint
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchtemplateconstraint.html}
 */
export type ServiceCatalogLaunchTemplateConstraintProperties = {
  AcceptLanguage?: string;
  Description?: string;
  PortfolioId: string;
  ProductId: string;
  Rules: string;
};
/**
 * Attribute type definition for `AWS::ServiceCatalog::LaunchTemplateConstraint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchtemplateconstraint.html#aws-resource-servicecatalog-launchtemplateconstraint-return-values}
 */
export type ServiceCatalogLaunchTemplateConstraintAttributes = {
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
