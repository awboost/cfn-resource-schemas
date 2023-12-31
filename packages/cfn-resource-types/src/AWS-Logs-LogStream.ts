import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::Logs::LogStream
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-logstream.html}
 */
export type LogsLogStreamProperties = {
  /**
   * The name of the log group where the log stream is created.
   */
  LogGroupName: string;
  /**
   * The name of the log stream. The name must be unique wihtin the log group.
   */
  LogStreamName?: string;
};
/**
 * Resource Type definition for AWS::Logs::LogStream
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-logstream.html}
 */
export class LogsLogStream extends $Resource<
  "AWS::Logs::LogStream",
  LogsLogStreamProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::Logs::LogStream";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: LogsLogStreamProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      LogsLogStream.Type,
      properties,
      LogsLogStream.AttributeNames,
      options,
    );
  }
}
