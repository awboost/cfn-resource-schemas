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
  /**
   * A list of key-value pairs to associate with the cloudwatch dashboard. You can associate up to 50 tags with a dashboard
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Type definition for `AWS::CloudWatch::Dashboard.Tag`.
 * Metadata that you can assign to a cloudwatch dashboard. Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only resources with certain tag values.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-dashboard-tag.html}
 */
export type Tag = {
  /**
   * A unique identifier for the tag. The combination of tag keys and values can help you organize and categorize your resources.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the specified tag key.
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
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
