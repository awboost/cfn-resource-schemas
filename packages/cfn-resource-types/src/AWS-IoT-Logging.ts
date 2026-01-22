import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::IoT::Logging`.
 * Logging Options enable you to configure your IoT V2 logging role and default logging level so that you can monitor progress events logs as it passes from your devices through Iot core service.
 * @see {@link https://docs.aws.amazon.com/iot/latest/developerguide/configure-logging.html}
 */
export type IoTLoggingProperties = {
  /**
   * Your 12-digit account ID (used as the primary identifier for the CloudFormation resource).
   * @minLength `12`
   * @maxLength `12`
   * @pattern `^[0-9]{12}$`
   */
  AccountId: string;
  /**
   * The log level to use. Valid values are: ERROR, WARN, INFO, DEBUG, or DISABLED.
   */
  DefaultLogLevel: "ERROR" | "WARN" | "INFO" | "DEBUG" | "DISABLED";
  /**
   * Configurations for event-based logging that specifies which event types to log and their logging settings. Overrides account-level logging for the specified event
   */
  EventConfigurations?: EventConfiguration[];
  /**
   * The ARN of the role that allows IoT to write to Cloudwatch logs.
   * @minLength `20`
   * @maxLength `2048`
   */
  RoleArn: string;
};
/**
 * Type definition for `AWS::IoT::Logging.EventConfiguration`.
 * Configuration for event-based logging that specifies which event types to log and their logging settings. Used for account-level logging overrides.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-logging-eventconfiguration.html}
 */
export type EventConfiguration = {
  /**
   * The type of event to log. These include event types like Connect, Publish, and Disconnect.
   * @minLength `1`
   * @maxLength `512`
   */
  EventType: string;
  /**
   * CloudWatch Log Group for event-based logging. Specifies where log events should be sent. The log destination for event-based logging overrides default Log Group for the specified event type and applies to all resources associated with that event.
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^(?!aws/)[a-zA-Z0-9_\-/.#]+$`
   */
  LogDestination?: string;
  /**
   * The logging level for the specified event type. Determines the verbosity of log messages generated for this event type.
   */
  LogLevel?: "ERROR" | "WARN" | "INFO" | "DEBUG" | "DISABLED";
};
/**
 * Resource type definition for `AWS::IoT::Logging`.
 * Logging Options enable you to configure your IoT V2 logging role and default logging level so that you can monitor progress events logs as it passes from your devices through Iot core service.
 * @see {@link https://docs.aws.amazon.com/iot/latest/developerguide/configure-logging.html}
 */
export class IoTLogging extends $Resource<
  "AWS::IoT::Logging",
  IoTLoggingProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::IoT::Logging";
  constructor(
    logicalId: string,
    properties: IoTLoggingProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IoTLogging.Type, properties, options);
  }
}
