import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::CloudWatch::Dashboard
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-dashboard.html}
 */
export type CloudWatchDashboardProperties = {
  /**
   * The detailed information about the dashboard in JSON format, including the widgets to include and their location on the dashboard
   */
  DashboardBody: string;
  /**
   * The name of the dashboard. The name must be between 1 and 255 characters. If you do not specify a name, one will be generated automatically.
   */
  DashboardName?: string;
};
/**
 * Resource Type definition for AWS::CloudWatch::Dashboard
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-dashboard.html}
 */
export class CloudWatchDashboard extends $Resource<
  "AWS::CloudWatch::Dashboard",
  CloudWatchDashboardProperties,
  Record<string, never>
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
