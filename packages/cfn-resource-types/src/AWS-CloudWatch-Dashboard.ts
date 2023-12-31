import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: CloudWatchDashboardProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      CloudWatchDashboard.Type,
      properties,
      CloudWatchDashboard.AttributeNames,
      options,
    );
  }
}
