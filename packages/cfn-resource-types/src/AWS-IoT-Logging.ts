import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
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
   * The ARN of the role that allows IoT to write to Cloudwatch logs.
   * @minLength `20`
   * @maxLength `2048`
   */
  RoleArn: string;
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
