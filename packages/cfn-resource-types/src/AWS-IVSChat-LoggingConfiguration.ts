import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for AWS::IVSChat::LoggingConfiguration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivschat-loggingconfiguration.html}
 */
export type IVSChatLoggingConfigurationProperties = {
  /**
   * Destination configuration for IVS Chat logging.
   */
  DestinationConfiguration: DestinationConfiguration;
  /**
   * The name of the logging configuration. The value does not need to be unique.
   * @minLength `0`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9-_]*$`
   */
  Name?: string;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::IVSChat::LoggingConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivschat-loggingconfiguration.html#aws-resource-ivschat-loggingconfiguration-return-values}
 */
export type IVSChatLoggingConfigurationAttributes = {
  /**
   * LoggingConfiguration ARN is automatically generated on creation and assigned as the unique identifier.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^arn:aws:ivschat:[a-z0-9-]+:[0-9]+:logging-configuration/[a-zA-Z0-9-]+$`
   */
  Arn: string;
  /**
   * The system-generated ID of the logging configuration.
   * @minLength `12`
   * @maxLength `12`
   * @pattern `^[a-zA-Z0-9]+$`
   */
  Id: string;
  /**
   * The state of the logging configuration. When the state is ACTIVE, the configuration is ready to log chat content.
   */
  State:
    | "CREATING"
    | "CREATE_FAILED"
    | "DELETING"
    | "DELETE_FAILED"
    | "UPDATING"
    | "UPDATING_FAILED"
    | "ACTIVE";
};
/**
 * Type definition for `AWS::IVSChat::LoggingConfiguration.CloudWatchLogsDestinationConfiguration`.
 * CloudWatch destination configuration for IVS Chat logging.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivschat-loggingconfiguration-cloudwatchlogsdestinationconfiguration.html}
 */
export type CloudWatchLogsDestinationConfiguration = {
  /**
   * Name of the Amazon CloudWatch Logs log group where chat activity will be logged.
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\.\-_/#A-Za-z0-9]+$`
   */
  LogGroupName: string;
};
/**
 * Type definition for `AWS::IVSChat::LoggingConfiguration.DestinationConfiguration`.
 * Destination configuration for IVS Chat logging.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivschat-loggingconfiguration-destinationconfiguration.html}
 */
export type DestinationConfiguration = {
  /**
   * CloudWatch destination configuration for IVS Chat logging.
   */
  CloudWatchLogs?: CloudWatchLogsDestinationConfiguration;
  /**
   * Kinesis Firehose destination configuration for IVS Chat logging.
   */
  Firehose?: FirehoseDestinationConfiguration;
  /**
   * S3 destination configuration for IVS Chat logging.
   */
  S3?: S3DestinationConfiguration;
};
/**
 * Type definition for `AWS::IVSChat::LoggingConfiguration.FirehoseDestinationConfiguration`.
 * Kinesis Firehose destination configuration for IVS Chat logging.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivschat-loggingconfiguration-firehosedestinationconfiguration.html}
 */
export type FirehoseDestinationConfiguration = {
  /**
   * Name of the Amazon Kinesis Firehose delivery stream where chat activity will be logged.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[a-zA-Z0-9_.-]+$`
   */
  DeliveryStreamName: string;
};
/**
 * Type definition for `AWS::IVSChat::LoggingConfiguration.S3DestinationConfiguration`.
 * S3 destination configuration for IVS Chat logging.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivschat-loggingconfiguration-s3destinationconfiguration.html}
 */
export type S3DestinationConfiguration = {
  /**
   * Name of the Amazon S3 bucket where chat activity will be logged.
   * @minLength `3`
   * @maxLength `63`
   * @pattern `^[a-z0-9-.]+$`
   */
  BucketName: string;
};
/**
 * Type definition for `AWS::IVSChat::LoggingConfiguration.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivschat-loggingconfiguration-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
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
 * Resource type definition for AWS::IVSChat::LoggingConfiguration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivschat-loggingconfiguration.html}
 */
export class IVSChatLoggingConfiguration extends $Resource<
  "AWS::IVSChat::LoggingConfiguration",
  IVSChatLoggingConfigurationProperties,
  IVSChatLoggingConfigurationAttributes
> {
  public static readonly Type = "AWS::IVSChat::LoggingConfiguration";
  constructor(
    logicalId: string,
    properties: IVSChatLoggingConfigurationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IVSChatLoggingConfiguration.Type, properties, options);
  }
}
