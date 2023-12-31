import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * The AWS::Logs::Destination resource specifies a CloudWatch Logs destination. A destination encapsulates a physical resource (such as an Amazon Kinesis data stream) and enables you to subscribe that resource to a stream of log events.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-destination.html}
 */
export type LogsDestinationProperties = {
  /**
   * The name of the destination resource
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[^:*]{1,512}$`
   */
  DestinationName: string;
  /**
   * An IAM policy document that governs which AWS accounts can create subscription filters against this destination.
   * @minLength `1`
   */
  DestinationPolicy?: string;
  /**
   * The ARN of an IAM role that permits CloudWatch Logs to send data to the specified AWS resource
   * @minLength `1`
   */
  RoleArn: string;
  /**
   * The ARN of the physical target where the log events are delivered (for example, a Kinesis stream)
   * @minLength `1`
   */
  TargetArn: string;
};
/**
 * Attribute type definition for `AWS::Logs::Destination`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-destination.html#aws-resource-logs-destination-return-values}
 */
export type LogsDestinationAttributes = {
  Arn: string;
};
/**
 * The AWS::Logs::Destination resource specifies a CloudWatch Logs destination. A destination encapsulates a physical resource (such as an Amazon Kinesis data stream) and enables you to subscribe that resource to a stream of log events.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-destination.html}
 */
export class LogsDestination extends $Resource<
  "AWS::Logs::Destination",
  LogsDestinationProperties,
  LogsDestinationAttributes
> {
  public static readonly Type = "AWS::Logs::Destination";
  public static readonly AttributeNames = ["Arn" as const];
  constructor(
    logicalId: string,
    properties: LogsDestinationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      LogsDestination.Type,
      properties,
      LogsDestination.AttributeNames,
      options,
    );
  }
}
