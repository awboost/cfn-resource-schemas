import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::ServiceCatalog::LaunchRoleConstraint
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchroleconstraint.html}
 */
export type ServiceCatalogLaunchRoleConstraintProperties = {
  AcceptLanguage?: string;
  Description?: string;
  LocalRoleName?: string;
  PortfolioId: string;
  ProductId: string;
  RoleArn?: string;
};
/**
 * Attribute type definition for `AWS::ServiceCatalog::LaunchRoleConstraint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchroleconstraint.html#aws-resource-servicecatalog-launchroleconstraint-return-values}
 */
export type ServiceCatalogLaunchRoleConstraintAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::ServiceCatalog::LaunchRoleConstraint
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchroleconstraint.html}
 */
export class ServiceCatalogLaunchRoleConstraint extends $Resource<
  "AWS::ServiceCatalog::LaunchRoleConstraint",
  ServiceCatalogLaunchRoleConstraintProperties,
  ServiceCatalogLaunchRoleConstraintAttributes
> {
  public static readonly Type = "AWS::ServiceCatalog::LaunchRoleConstraint";
  constructor(
    logicalId: string,
    properties: ServiceCatalogLaunchRoleConstraintProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ServiceCatalogLaunchRoleConstraint.Type,
      properties,
      options,
    );
  }
}
