import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::IoT::ResourceSpecificLogging`.
 * Resource-specific logging allows you to specify a logging level for a specific thing group.
 * @see {@link https://docs.aws.amazon.com/iot/latest/developerguide/configure-logging.html}
 */
export type IoTResourceSpecificLoggingProperties = {
  /**
   * The log level for a specific target. Valid values are: ERROR, WARN, INFO, DEBUG, or DISABLED.
   */
  LogLevel: "ERROR" | "WARN" | "INFO" | "DEBUG" | "DISABLED";
  /**
   * The target name.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `[a-zA-Z0-9.:\s_\-]+`
   */
  TargetName: string;
  /**
   * The target type. Value must be THING_GROUP, CLIENT_ID, SOURCE_IP, PRINCIPAL_ID, or EVENT_TYPE.
   */
  TargetType:
    | "THING_GROUP"
    | "CLIENT_ID"
    | "SOURCE_IP"
    | "PRINCIPAL_ID"
    | "EVENT_TYPE";
};
/**
 * Attribute type definition for `AWS::IoT::ResourceSpecificLogging`.
 * @see {@link https://docs.aws.amazon.com/iot/latest/developerguide/configure-logging.html}
 */
export type IoTResourceSpecificLoggingAttributes = {
  /**
   * Unique Id for a Target (TargetType:TargetName), this will be internally built to serve as primary identifier for a log target.
   * @minLength `13`
   * @maxLength `140`
   * @pattern `[a-zA-Z0-9.:\s_\-]+`
   */
  TargetId: string;
};
/**
 * Resource type definition for `AWS::IoT::ResourceSpecificLogging`.
 * Resource-specific logging allows you to specify a logging level for a specific thing group.
 * @see {@link https://docs.aws.amazon.com/iot/latest/developerguide/configure-logging.html}
 */
export class IoTResourceSpecificLogging extends $Resource<
  "AWS::IoT::ResourceSpecificLogging",
  IoTResourceSpecificLoggingProperties,
  IoTResourceSpecificLoggingAttributes
> {
  public static readonly Type = "AWS::IoT::ResourceSpecificLogging";
  constructor(
    logicalId: string,
    properties: IoTResourceSpecificLoggingProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IoTResourceSpecificLogging.Type, properties, options);
  }
}
