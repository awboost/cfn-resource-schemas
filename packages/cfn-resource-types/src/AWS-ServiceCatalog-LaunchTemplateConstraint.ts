import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: ServiceCatalogLaunchTemplateConstraintProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ServiceCatalogLaunchTemplateConstraint.Type,
      properties,
      ServiceCatalogLaunchTemplateConstraint.AttributeNames,
      options,
    );
  }
}
