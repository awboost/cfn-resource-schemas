import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::CloudWatch::Dashboard
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-dashboard.html}
 */
export type CloudWatchDashboardProperties = {
  DashboardBody: string;
  DashboardName?: string;
};
/**
 * Attribute type definition for `AWS::CloudWatch::Dashboard`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-dashboard.html#aws-resource-cloudwatch-dashboard-return-values}
 */
export type CloudWatchDashboardAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::CloudWatch::Dashboard
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-dashboard.html}
 */
export class CloudWatchDashboard extends $Resource<
  "AWS::CloudWatch::Dashboard",
  CloudWatchDashboardProperties,
  CloudWatchDashboardAttributes
> {
  public static readonly Type = "AWS::CloudWatch::Dashboard";
  constructor(
    logicalId: string,
    properties: CloudWatchDashboardProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CloudWatchDashboard.Type, properties, options);
  }
}
