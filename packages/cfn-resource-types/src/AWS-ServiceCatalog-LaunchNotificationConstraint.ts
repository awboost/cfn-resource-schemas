import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::ServiceCatalog::LaunchNotificationConstraint
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchnotificationconstraint.html}
 */
export type ServiceCatalogLaunchNotificationConstraintProperties = {
  AcceptLanguage?: string;
  Description?: string;
  NotificationArns: string[];
  PortfolioId: string;
  ProductId: string;
};
/**
 * Attribute type definition for `AWS::ServiceCatalog::LaunchNotificationConstraint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchnotificationconstraint.html#aws-resource-servicecatalog-launchnotificationconstraint-return-values}
 */
export type ServiceCatalogLaunchNotificationConstraintAttributes = {
  /**
   * Unique identifier for the constraint
   */
  Id: string;
};
/**
 * Resource Type definition for AWS::ServiceCatalog::LaunchNotificationConstraint
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchnotificationconstraint.html}
 */
export class ServiceCatalogLaunchNotificationConstraint extends $Resource<
  "AWS::ServiceCatalog::LaunchNotificationConstraint",
  ServiceCatalogLaunchNotificationConstraintProperties,
  ServiceCatalogLaunchNotificationConstraintAttributes
> {
  public static readonly Type =
    "AWS::ServiceCatalog::LaunchNotificationConstraint";
  constructor(
    logicalId: string,
    properties: ServiceCatalogLaunchNotificationConstraintProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ServiceCatalogLaunchNotificationConstraint.Type,
      properties,
      options,
    );
  }
}
