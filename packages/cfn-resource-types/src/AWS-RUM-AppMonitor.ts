import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::RUM::AppMonitor
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rum-appmonitor.html}
 */
export type RUMAppMonitorProperties = {
  /**
   * AppMonitor configuration
   */
  AppMonitorConfiguration?: AppMonitorConfiguration;
  /**
   * AppMonitor custom events configuration
   */
  CustomEvents?: CustomEvents;
  /**
   * Data collected by RUM is kept by RUM for 30 days and then deleted. This parameter specifies whether RUM sends a copy of this telemetry data to CWLlong in your account. This enables you to keep the telemetry data for more than 30 days, but it does incur CWLlong charges. If you omit this parameter, the default is false
   */
  CwLogEnabled?: boolean;
  /**
   * The top-level internet domain name for which your application has administrative authority.
   * @minLength `1`
   * @maxLength `253`
   * @pattern `^(localhost)|^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$|^(?![-.])([A-Za-z0-9-\.\-]{0,63})((?![-])([a-zA-Z0-9]{1}|^[a-zA-Z0-9]{0,1}))\.(?![-])[A-Za-z-0-9]{1,63}((?![-])([a-zA-Z0-9]{1}|^[a-zA-Z0-9]{0,1}))|^(\*\.)(?![-.])([A-Za-z0-9-\.\-]{0,63})((?![-])([a-zA-Z0-9]{1}|^[a-zA-Z0-9]{0,1}))\.(?![-])[A-Za-z-0-9]{1,63}((?![-])([a-zA-Z0-9]{1}|^[a-zA-Z0-9]{0,1}))`
   */
  Domain: string;
  /**
   * A name for the app monitor
   * @minLength `1`
   * @maxLength `255`
   * @pattern `[\.\-_/#A-Za-z0-9]+`
   */
  Name: string;
  /**
   * A structure that defines resource policy attached to your app monitor.
   */
  ResourcePolicy?: ResourcePolicy;
  /**
   * Assigns one or more tags (key-value pairs) to the app monitor. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. Tags don't have any semantic meaning to AWS and are interpreted strictly as strings of characters.You can associate as many as 50 tags with an app monitor.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::RUM::AppMonitor`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rum-appmonitor.html#aws-resource-rum-appmonitor-return-values}
 */
export type RUMAppMonitorAttributes = {
  /**
   * The unique ID of the new app monitor.
   * @minLength `36`
   * @maxLength `36`
   * @pattern `^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$`
   */
  Id: string;
};
/**
 * Type definition for `AWS::RUM::AppMonitor.AppMonitorConfiguration`.
 * AppMonitor configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rum-appmonitor-appmonitorconfiguration.html}
 */
export type AppMonitorConfiguration = {
  /**
   * If you set this to true, the RUM web client sets two cookies, a session cookie and a user cookie. The cookies allow the RUM web client to collect data relating to the number of users an application has and the behavior of the application across a sequence of events. Cookies are stored in the top-level domain of the current page.
   */
  AllowCookies?: boolean;
  /**
   * If you set this to true, RUM enables xray tracing for the user sessions that RUM samples. RUM adds an xray trace header to allowed HTTP requests. It also records an xray segment for allowed HTTP requests. You can see traces and segments from these user sessions in the xray console and the CW ServiceLens console.
   */
  EnableXRay?: boolean;
  /**
   * A list of URLs in your website or application to exclude from RUM data collection. You can't include both ExcludedPages and IncludedPages in the same operation.
   * @minLength `0`
   * @maxLength `50`
   */
  ExcludedPages?: string[];
  /**
   * A list of pages in the RUM console that are to be displayed with a favorite icon.
   * @minLength `0`
   * @maxLength `50`
   */
  FavoritePages?: string[];
  /**
   * The ARN of the guest IAM role that is attached to the identity pool that is used to authorize the sending of data to RUM.
   * @pattern `arn:[^:]*:[^:]*:[^:]*:[^:]*:.*`
   */
  GuestRoleArn?: string;
  /**
   * The ID of the identity pool that is used to authorize the sending of data to RUM.
   * @minLength `1`
   * @maxLength `55`
   * @pattern `[\w-]+:[0-9a-f-]+`
   */
  IdentityPoolId?: string;
  /**
   * If this app monitor is to collect data from only certain pages in your application, this structure lists those pages. You can't include both ExcludedPages and IncludedPages in the same operation.
   * @minLength `0`
   * @maxLength `50`
   */
  IncludedPages?: string[];
  /**
   * An array of structures which define the destinations and the metrics that you want to send.
   * @minLength `0`
   * @maxLength `20`
   */
  MetricDestinations?: MetricDestination[];
  /**
   * Specifies the percentage of user sessions to use for RUM data collection. Choosing a higher percentage gives you more data but also incurs more costs. The number you specify is the percentage of user sessions that will be used. If you omit this parameter, the default of 10 is used.
   * @min `0`
   * @max `1`
   */
  SessionSampleRate?: number;
  /**
   * An array that lists the types of telemetry data that this app monitor is to collect.
   */
  Telemetries?: Telemetry[];
};
/**
 * Type definition for `AWS::RUM::AppMonitor.CustomEvents`.
 * AppMonitor custom events configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rum-appmonitor-customevents.html}
 */
export type CustomEvents = {
  /**
   * Indicates whether AppMonitor accepts custom events.
   */
  Status?: CustomEventsStatus;
};
/**
 * Type definition for `AWS::RUM::AppMonitor.CustomEventsStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rum-appmonitor-customeventsstatus.html}
 */
export type CustomEventsStatus = "ENABLED" | "DISABLED";
/**
 * Type definition for `AWS::RUM::AppMonitor.MetricDefinition`.
 * A single metric definition
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rum-appmonitor-metricdefinition.html}
 */
export type MetricDefinition = {
  /**
     * Use this field only if you are sending the metric to CloudWatch.
    
    This field is a map of field paths to dimension names. It defines the dimensions to associate with this metric in CloudWatch. For extended metrics, valid values for the entries in this field are the following:
    
    "metadata.pageId": "PageId"
    
    "metadata.browserName": "BrowserName"
    
    "metadata.deviceType": "DeviceType"
    
    "metadata.osName": "OSName"
    
    "metadata.countryCode": "CountryCode"
    
    "event_details.fileType": "FileType"
    
    All dimensions listed in this field must also be included in EventPattern.
     */
  DimensionKeys?: Record<string, string>;
  /**
     * The pattern that defines the metric, specified as a JSON object. RUM checks events that happen in a user's session against the pattern, and events that match the pattern are sent to the metric destination.
    
    When you define extended metrics, the metric definition is not valid if EventPattern is omitted.
    
    Example event patterns:
    
    '{ "event_type": ["com.amazon.rum.js_error_event"], "metadata": { "browserName": [ "Chrome", "Safari" ], } }'
    
    '{ "event_type": ["com.amazon.rum.performance_navigation_event"], "metadata": { "browserName": [ "Chrome", "Firefox" ] }, "event_details": { "duration": [{ "numeric": [ "<", 2000 ] }] } }'
    
    '{ "event_type": ["com.amazon.rum.performance_navigation_event"], "metadata": { "browserName": [ "Chrome", "Safari" ], "countryCode": [ "US" ] }, "event_details": { "duration": [{ "numeric": [ ">=", 2000, "<", 8000 ] }] } }'
    
    If the metrics destination' is CloudWatch and the event also matches a value in DimensionKeys, then the metric is published with the specified dimensions.
     * @minLength `1`
     * @maxLength `4000`
     */
  EventPattern?: string;
  /**
     * The name for the metric that is defined in this structure. For extended metrics, valid values are the following:
    
    PerformanceNavigationDuration
    
    PerformanceResourceDuration
    
    NavigationSatisfiedTransaction
    
    NavigationToleratedTransaction
    
    NavigationFrustratedTransaction
    
    WebVitalsCumulativeLayoutShift
    
    WebVitalsFirstInputDelay
    
    WebVitalsLargestContentfulPaint
    
    JsErrorCount
    
    HttpErrorCount
    
    SessionCount
     * @minLength `1`
     * @maxLength `255`
     */
  Name: string;
  /**
   * The namespace used by CloudWatch Metrics for the metric that is defined in this structure
   * @minLength `1`
   * @maxLength `237`
   * @pattern `[a-zA-Z0-9-._/#:]+$`
   */
  Namespace?: string;
  /**
   * The CloudWatch metric unit to use for this metric. If you omit this field, the metric is recorded with no unit.
   * @minLength `1`
   * @maxLength `256`
   */
  UnitLabel?: string;
  /**
     * The field within the event object that the metric value is sourced from.
    
    If you omit this field, a hardcoded value of 1 is pushed as the metric value. This is useful if you just want to count the number of events that the filter catches.
    
    If this metric is sent to Evidently, this field will be passed to Evidently raw and Evidently will handle data extraction from the event.
     * @minLength `1`
     * @maxLength `256`
     * @pattern `.*`
     */
  ValueKey?: string;
};
/**
 * Type definition for `AWS::RUM::AppMonitor.MetricDestination`.
 * An structure which defines the destination and the metrics that you want to send.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rum-appmonitor-metricdestination.html}
 */
export type MetricDestination = {
  /**
   * Defines the destination to send the metrics to. Valid values are CloudWatch and Evidently. If you specify Evidently, you must also specify the ARN of the Evidently experiment that is to be the destination and an IAM role that has permission to write to the experiment.
   */
  Destination: "CloudWatch" | "Evidently";
  /**
   * Use this parameter only if Destination is Evidently. This parameter specifies the ARN of the Evidently experiment that will receive the extended metrics.
   * @pattern `arn:[^:]*:[^:]*:[^:]*:[^:]*:.*`
   */
  DestinationArn?: string;
  /**
     * This parameter is required if Destination is Evidently. If Destination is CloudWatch, do not use this parameter.
    
    This parameter specifies the ARN of an IAM role that RUM will assume to write to the Evidently experiment that you are sending metrics to. This role must have permission to write to that experiment.
     * @pattern `arn:[^:]*:[^:]*:[^:]*:[^:]*:.*`
     */
  IamRoleArn?: string;
  /**
   * An array of structures which define the metrics that you want to send.
   * @minLength `0`
   * @maxLength `2000`
   */
  MetricDefinitions?: MetricDefinition[];
};
/**
 * Type definition for `AWS::RUM::AppMonitor.ResourcePolicy`.
 * A structure that defines resource policy attached to your app monitor.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rum-appmonitor-resourcepolicy.html}
 */
export type ResourcePolicy = {
  /**
   * The JSON to use as the resource policy. The document can be up to 4 KB in size.
   */
  PolicyDocument: string;
  /**
     * A string value that you can use to conditionally update your policy. You can provide the revision ID of your existing policy to make mutating requests against that policy.
    
     When you assign a policy revision ID, then later requests about that policy will be rejected with an InvalidPolicyRevisionIdException error if they don't provide the correct current revision ID.
     * @minLength `1`
     * @maxLength `255`
     */
  PolicyRevisionId?: string;
};
/**
 * Type definition for `AWS::RUM::AppMonitor.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rum-appmonitor-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!aws:)[a-zA-Z+-=._:/]+$`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::RUM::AppMonitor.Telemetry`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rum-appmonitor-telemetry.html}
 */
export type Telemetry = "errors" | "performance" | "http";
/**
 * Resource Type definition for AWS::RUM::AppMonitor
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rum-appmonitor.html}
 */
export class RUMAppMonitor extends $Resource<
  "AWS::RUM::AppMonitor",
  RUMAppMonitorProperties,
  RUMAppMonitorAttributes
> {
  public static readonly Type = "AWS::RUM::AppMonitor";
  constructor(
    logicalId: string,
    properties: RUMAppMonitorProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, RUMAppMonitor.Type, properties, options);
  }
}
