import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
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
  constructor(
    logicalId: string,
    properties: LogsLogStreamProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, LogsLogStream.Type, properties, options);
  }
}
