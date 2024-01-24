import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::ApplicationInsights::Application
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html}
 */
export type ApplicationInsightsApplicationProperties = {
  /**
   * If set to true, application will be configured with recommended monitoring configuration.
   */
  AutoConfigurationEnabled?: boolean;
  /**
   * Indicates whether Application Insights can listen to CloudWatch events for the application resources.
   */
  CWEMonitorEnabled?: boolean;
  /**
   * The monitoring settings of the components.
   * @minLength `1`
   */
  ComponentMonitoringSettings?: ComponentMonitoringSetting[];
  /**
   * The custom grouped components.
   * @minLength `1`
   */
  CustomComponents?: CustomComponent[];
  /**
   * The grouping type of the application
   */
  GroupingType?: "ACCOUNT_BASED";
  /**
   * The log pattern sets.
   * @minLength `1`
   */
  LogPatternSets?: LogPatternSet[];
  /**
   * When set to true, creates opsItems for any problems detected on an application.
   */
  OpsCenterEnabled?: boolean;
  /**
   * The SNS topic provided to Application Insights that is associated to the created opsItem.
   * @minLength `20`
   * @maxLength `300`
   * @pattern `^arn:aws(-[\w]+)*:[\w\d-]+:([\w\d-]*)?:[\w\d_-]*([:/].+)*$`
   */
  OpsItemSNSTopicArn?: string;
  /**
   * The name of the resource group.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `[a-zA-Z0-9.-_]*`
   */
  ResourceGroupName: string;
  /**
   * The tags of Application Insights application.
   * @minLength `1`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::ApplicationInsights::Application`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#aws-resource-applicationinsights-application-return-values}
 */
export type ApplicationInsightsApplicationAttributes = {
  /**
   * The ARN of the ApplicationInsights application.
   */
  ApplicationARN: string;
};
/**
 * Type definition for `AWS::ApplicationInsights::Application.Alarm`.
 * A CloudWatch alarm to be monitored for the component.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationinsights-application-alarm.html}
 */
export type Alarm = {
  /**
   * The name of the CloudWatch alarm to be monitored for the component.
   * @minLength `1`
   * @maxLength `255`
   */
  AlarmName: string;
  /**
   * Indicates the degree of outage when the alarm goes off.
   */
  Severity?: "HIGH" | "MEDIUM" | "LOW";
};
/**
 * Type definition for `AWS::ApplicationInsights::Application.AlarmMetric`.
 * A metric to be monitored for the component.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationinsights-application-alarmmetric.html}
 */
export type AlarmMetric = {
  /**
   * The name of the metric to be monitored for the component.
   */
  AlarmMetricName: string;
};
/**
 * Type definition for `AWS::ApplicationInsights::Application.ComponentConfiguration`.
 * The configuration settings of the component.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationinsights-application-componentconfiguration.html}
 */
export type ComponentConfiguration = {
  /**
   * The configuration settings
   */
  ConfigurationDetails?: ConfigurationDetails;
  /**
   * Sub component configurations of the component.
   * @minLength `1`
   */
  SubComponentTypeConfigurations?: SubComponentTypeConfiguration[];
};
/**
 * Type definition for `AWS::ApplicationInsights::Application.ComponentMonitoringSetting`.
 * The monitoring setting of the component.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationinsights-application-componentmonitoringsetting.html}
 */
export type ComponentMonitoringSetting = {
  /**
   * The ARN of the compnonent.
   * @minLength `20`
   * @maxLength `300`
   * @pattern `^arn:aws(-[\w]+)*:[\w\d-]+:([\w\d-]*)?:[\w\d_-]*([:/].+)*$`
   */
  ComponentARN?: string;
  /**
   * The component monitoring configuration mode.
   */
  ComponentConfigurationMode: "DEFAULT" | "DEFAULT_WITH_OVERWRITE" | "CUSTOM";
  /**
   * The name of the component.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[\d\w\-_.+]*$`
   */
  ComponentName?: string;
  /**
   * The monitoring configuration of the component.
   */
  CustomComponentConfiguration?: ComponentConfiguration;
  /**
   * The overwritten settings on default component monitoring configuration.
   */
  DefaultOverwriteComponentConfiguration?: ComponentConfiguration;
  /**
   * The tier of the application component.
   * @pattern `^[A-Z][[A-Z]_]*$`
   */
  Tier: string;
};
/**
 * Type definition for `AWS::ApplicationInsights::Application.ConfigurationDetails`.
 * The configuration settings.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationinsights-application-configurationdetails.html}
 */
export type ConfigurationDetails = {
  /**
   * A list of metrics to monitor for the component.
   */
  AlarmMetrics?: AlarmMetric[];
  /**
   * A list of alarms to monitor for the component.
   */
  Alarms?: Alarm[];
  /**
   * The HA cluster Prometheus Exporter settings.
   */
  HAClusterPrometheusExporter?: HAClusterPrometheusExporter;
  /**
   * The HANA DB Prometheus Exporter settings.
   */
  HANAPrometheusExporter?: HANAPrometheusExporter;
  /**
   * The JMX Prometheus Exporter settings.
   */
  JMXPrometheusExporter?: JMXPrometheusExporter;
  /**
   * A list of logs to monitor for the component.
   */
  Logs?: Log[];
  /**
   * A list of Windows Events to log.
   */
  WindowsEvents?: WindowsEvent[];
};
/**
 * Type definition for `AWS::ApplicationInsights::Application.CustomComponent`.
 * The custom grouped component.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationinsights-application-customcomponent.html}
 */
export type CustomComponent = {
  /**
   * The name of the component.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[\d\w\-_.+]*$`
   */
  ComponentName: string;
  /**
   * The list of resource ARNs that belong to the component.
   * @minLength `1`
   */
  ResourceList: string[];
};
/**
 * Type definition for `AWS::ApplicationInsights::Application.EventLevel`.
 * The level of event to log.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationinsights-application-eventlevel.html}
 */
export type EventLevel =
  | "INFORMATION"
  | "WARNING"
  | "ERROR"
  | "CRITICAL"
  | "VERBOSE";
/**
 * Type definition for `AWS::ApplicationInsights::Application.HAClusterPrometheusExporter`.
 * The HA cluster Prometheus Exporter settings.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationinsights-application-haclusterprometheusexporter.html}
 */
export type HAClusterPrometheusExporter = {
  /**
   * Prometheus exporter port.
   */
  PrometheusPort?: string;
};
/**
 * Type definition for `AWS::ApplicationInsights::Application.HANAPrometheusExporter`.
 * The HANA DB Prometheus Exporter settings.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationinsights-application-hanaprometheusexporter.html}
 */
export type HANAPrometheusExporter = {
  /**
   * A flag which indicates agreeing to install SAP HANA DB client.
   */
  AgreeToInstallHANADBClient: boolean;
  /**
   * The HANA DB port.
   */
  HANAPort: string;
  /**
   * HANA DB SID.
   */
  HANASID: string;
  /**
     * The secret name which manages the HANA DB credentials e.g. {
      "username": "<>",
      "password": "<>"
    }.
     */
  HANASecretName: string;
  /**
   * Prometheus exporter port.
   */
  PrometheusPort?: string;
};
/**
 * Type definition for `AWS::ApplicationInsights::Application.JMXPrometheusExporter`.
 * The JMX Prometheus Exporter settings.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationinsights-application-jmxprometheusexporter.html}
 */
export type JMXPrometheusExporter = {
  /**
   * Java agent host port
   */
  HostPort?: string;
  /**
   * JMX service URL.
   */
  JMXURL?: string;
  /**
   * Prometheus exporter port.
   */
  PrometheusPort?: string;
};
/**
 * Type definition for `AWS::ApplicationInsights::Application.Log`.
 * A log to be monitored for the component.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationinsights-application-log.html}
 */
export type Log = {
  /**
   * The type of encoding of the logs to be monitored.
   */
  Encoding?: "utf-8" | "utf-16" | "ascii";
  /**
   * The CloudWatch log group name to be associated to the monitored log.
   * @minLength `1`
   * @maxLength `512`
   * @pattern `[\.\-_/#A-Za-z0-9]+`
   */
  LogGroupName?: string;
  /**
   * The path of the logs to be monitored.
   * @minLength `1`
   * @maxLength `260`
   * @pattern `^([a-zA-Z]:\\[\\\S|*\S]?.*|/[^"']*)$`
   */
  LogPath?: string;
  /**
   * The log type decides the log patterns against which Application Insights analyzes the log.
   * @pattern `^[A-Z][[A-Z]_]*$`
   */
  LogType: string;
  /**
   * The name of the log pattern set.
   * @minLength `1`
   * @maxLength `30`
   * @pattern `[a-zA-Z0-9.-_]*`
   */
  PatternSet?: string;
};
/**
 * Type definition for `AWS::ApplicationInsights::Application.LogPattern`.
 * The log pattern.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationinsights-application-logpattern.html}
 */
export type LogPattern = {
  /**
   * The log pattern.
   * @minLength `1`
   * @maxLength `50`
   */
  Pattern: string;
  /**
   * The name of the log pattern.
   * @minLength `1`
   * @maxLength `50`
   * @pattern `[a-zA-Z0-9.-_]*`
   */
  PatternName: string;
  /**
   * Rank of the log pattern.
   */
  Rank: number;
};
/**
 * Type definition for `AWS::ApplicationInsights::Application.LogPatternSet`.
 * The log pattern set.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationinsights-application-logpatternset.html}
 */
export type LogPatternSet = {
  /**
   * The log patterns of a set.
   * @minLength `1`
   */
  LogPatterns: LogPattern[];
  /**
   * The name of the log pattern set.
   * @minLength `1`
   * @maxLength `30`
   * @pattern `[a-zA-Z0-9.-_]*`
   */
  PatternSetName: string;
};
/**
 * Type definition for `AWS::ApplicationInsights::Application.SubComponentConfigurationDetails`.
 * The configuration settings of sub components.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationinsights-application-subcomponentconfigurationdetails.html}
 */
export type SubComponentConfigurationDetails = {
  /**
   * A list of metrics to monitor for the component.
   */
  AlarmMetrics?: AlarmMetric[];
  /**
   * A list of logs to monitor for the component.
   */
  Logs?: Log[];
  /**
   * A list of Windows Events to log.
   */
  WindowsEvents?: WindowsEvent[];
};
/**
 * Type definition for `AWS::ApplicationInsights::Application.SubComponentTypeConfiguration`.
 * One type sub component configurations for the component.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationinsights-application-subcomponenttypeconfiguration.html}
 */
export type SubComponentTypeConfiguration = {
  /**
   * The configuration settings of sub components.
   */
  SubComponentConfigurationDetails: SubComponentConfigurationDetails;
  /**
   * The sub component type.
   */
  SubComponentType: "AWS::EC2::Instance" | "AWS::EC2::Volume";
};
/**
 * Type definition for `AWS::ApplicationInsights::Application.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationinsights-application-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::ApplicationInsights::Application.WindowsEvent`.
 * A Windows Event to be monitored for the component.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationinsights-application-windowsevent.html}
 */
export type WindowsEvent = {
  /**
   * The levels of event to log.
   * @minLength `1`
   */
  EventLevels: EventLevel[];
  /**
   * The type of Windows Events to log.
   * @minLength `1`
   * @maxLength `260`
   * @pattern `^[a-zA-Z0-9_ \\/-]+$`
   */
  EventName: string;
  /**
   * The CloudWatch log group name to be associated to the monitored log.
   * @minLength `1`
   * @maxLength `512`
   * @pattern `[\.\-_/#A-Za-z0-9]+`
   */
  LogGroupName: string;
  /**
   * The name of the log pattern set.
   * @minLength `1`
   * @maxLength `30`
   * @pattern `[a-zA-Z0-9.-_]*`
   */
  PatternSet?: string;
};
/**
 * Resource schema for AWS::ApplicationInsights::Application
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html}
 */
export class ApplicationInsightsApplication extends $Resource<
  "AWS::ApplicationInsights::Application",
  ApplicationInsightsApplicationProperties,
  ApplicationInsightsApplicationAttributes
> {
  public static readonly Type = "AWS::ApplicationInsights::Application";
  constructor(
    logicalId: string,
    properties: ApplicationInsightsApplicationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ApplicationInsightsApplication.Type, properties, options);
  }
}
