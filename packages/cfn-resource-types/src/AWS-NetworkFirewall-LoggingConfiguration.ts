import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for AWS::NetworkFirewall::LoggingConfiguration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-loggingconfiguration.html}
 */
export type NetworkFirewallLoggingConfigurationProperties = {
  /**
   * A resource ARN.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^arn:aws.*$`
   */
  FirewallArn: string;
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9-]+$`
   */
  FirewallName?: string;
  LoggingConfiguration: LoggingConfiguration;
};
/**
 * Type definition for `AWS::NetworkFirewall::LoggingConfiguration.LogDestinationConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-loggingconfiguration-logdestinationconfig.html}
 */
export type LogDestinationConfig = {
  /**
   * A key-value pair to configure the logDestinations.
   */
  LogDestination: Record<string, string>;
  LogDestinationType: "S3" | "CloudWatchLogs" | "KinesisDataFirehose";
  LogType: "ALERT" | "FLOW";
};
/**
 * Type definition for `AWS::NetworkFirewall::LoggingConfiguration.LoggingConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-loggingconfiguration-loggingconfiguration.html}
 */
export type LoggingConfiguration = {
  /**
   * @minLength `1`
   */
  LogDestinationConfigs: LogDestinationConfig[];
};
/**
 * Resource type definition for AWS::NetworkFirewall::LoggingConfiguration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-loggingconfiguration.html}
 */
export class NetworkFirewallLoggingConfiguration extends $Resource<
  "AWS::NetworkFirewall::LoggingConfiguration",
  NetworkFirewallLoggingConfigurationProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::NetworkFirewall::LoggingConfiguration";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: NetworkFirewallLoggingConfigurationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      NetworkFirewallLoggingConfiguration.Type,
      properties,
      NetworkFirewallLoggingConfiguration.AttributeNames,
      options,
    );
  }
}
