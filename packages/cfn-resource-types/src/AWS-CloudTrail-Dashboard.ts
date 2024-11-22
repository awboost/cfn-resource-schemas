import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::CloudTrail::Dashboard`.
 * The Amazon CloudTrail dashboard resource allows customers to manage managed dashboards and create custom dashboards. You can manually refresh custom and managed dashboards. For custom dashboards, you can also set up an automatic refresh schedule and modify dashboard widgets.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-dashboard.html}
 */
export type CloudTrailDashboardProperties = {
  /**
   * The name of the dashboard.
   * @pattern `^[a-zA-Z0-9_\-]+$`
   */
  Name?: string;
  /**
   * Configures the automatic refresh schedule for the dashboard. Includes the frequency unit (DAYS or HOURS) and value, as well as the status (ENABLED or DISABLED) of the refresh schedule.
   */
  RefreshSchedule?: RefreshSchedule;
  Tags?: Tag[];
  /**
   * Indicates whether the dashboard is protected from termination.
   */
  TerminationProtectionEnabled?: boolean;
  /**
   * List of widgets on the dashboard
   */
  Widgets?: Widget[];
};
/**
 * Attribute type definition for `AWS::CloudTrail::Dashboard`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-dashboard.html#aws-resource-cloudtrail-dashboard-return-values}
 */
export type CloudTrailDashboardAttributes = {
  /**
   * The timestamp of the dashboard creation.
   */
  CreatedTimestamp: string;
  /**
   * The ARN of the dashboard.
   * @pattern `^[a-zA-Z0-9._/\-:]+$`
   */
  DashboardArn: string;
  /**
   * The status of the dashboard. Values are CREATING, CREATED, UPDATING, UPDATED and DELETING.
   */
  Status: "CREATING" | "CREATED" | "UPDATING" | "UPDATED" | "DELETING";
  /**
   * The type of the dashboard. Values are CUSTOM and MANAGED.
   */
  Type: "MANAGED" | "CUSTOM";
  /**
   * The timestamp showing when the dashboard was updated, if applicable. UpdatedTimestamp is always either the same or newer than the time shown in CreatedTimestamp.
   */
  UpdatedTimestamp: string;
};
/**
 * Type definition for `AWS::CloudTrail::Dashboard.RefreshSchedule`.
 * Configures the automatic refresh schedule for the dashboard. Includes the frequency unit (DAYS or HOURS) and value, as well as the status (ENABLED or DISABLED) of the refresh schedule.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-dashboard-refreshschedule.html}
 */
export type RefreshSchedule = {
  Frequency?: {
    /**
     * The frequency unit. Supported values are HOURS and DAYS.
     */
    Unit: "HOURS" | "DAYS";
    /**
     * The frequency value.
     */
    Value: number;
  };
  /**
   * The status of the schedule. Supported values are ENABLED and DISABLED.
   */
  Status?: "ENABLED" | "DISABLED";
  /**
   * StartTime of the automatic schedule refresh.
   * @pattern `^[0-9]{2}:[0-9]{2}`
   */
  TimeOfDay?: string;
};
/**
 * Type definition for `AWS::CloudTrail::Dashboard.Tag`.
 * An arbitrary set of tags (key-value pairs) for this dashboard.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-dashboard-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Value: string;
};
/**
 * Type definition for `AWS::CloudTrail::Dashboard.Widget`.
 * The dashboard widget
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-dashboard-widget.html}
 */
export type Widget = {
  /**
   * The placeholder keys in the QueryStatement. For example: $StartTime$, $EndTime$, $Period$.
   * @minLength `1`
   * @maxLength `10`
   */
  QueryParameters?: string[];
  /**
   * The SQL query statement on one or more event data stores.
   * @minLength `1`
   * @maxLength `10000`
   * @pattern `(?s).*`
   */
  QueryStatement: string;
  /**
   * The view properties of the widget.
   */
  ViewProperties?: Record<string, string>;
};
/**
 * Resource type definition for `AWS::CloudTrail::Dashboard`.
 * The Amazon CloudTrail dashboard resource allows customers to manage managed dashboards and create custom dashboards. You can manually refresh custom and managed dashboards. For custom dashboards, you can also set up an automatic refresh schedule and modify dashboard widgets.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-dashboard.html}
 */
export class CloudTrailDashboard extends $Resource<
  "AWS::CloudTrail::Dashboard",
  CloudTrailDashboardProperties,
  CloudTrailDashboardAttributes
> {
  public static readonly Type = "AWS::CloudTrail::Dashboard";
  constructor(
    logicalId: string,
    properties: CloudTrailDashboardProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CloudTrailDashboard.Type, properties, options);
  }
}
