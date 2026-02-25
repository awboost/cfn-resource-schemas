import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::ServiceCatalog::LaunchRoleConstraint
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchroleconstraint.html}
 */
export type ServiceCatalogLaunchRoleConstraintProperties = {
  /**
   * The language code for the constraint.
   */
  AcceptLanguage?: string;
  /**
   * The description of the launch role constraint.
   */
  Description?: string;
  /**
   * The local IAM role name to use in the launch constraint.
   */
  LocalRoleName?: string;
  /**
   * The ID of the portfolio to which this launch role constraint applies.
   */
  PortfolioId: string;
  /**
   * The ID of the product to which this launch role constraint applies.
   */
  ProductId: string;
  /**
   * The ARN of the IAM role used for the launch constraint.
   * @pattern `arn:(aws|aws-cn|aws-us-gov):iam::[0-9]*:(role)\/.*`
   */
  RoleArn?: string;
};
/**
 * Attribute type definition for `AWS::ServiceCatalog::LaunchRoleConstraint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchroleconstraint.html#aws-resource-servicecatalog-launchroleconstraint-return-values}
 */
export type ServiceCatalogLaunchRoleConstraintAttributes = {
  /**
   * The unique identifier for the launch role constraint.
   */
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
