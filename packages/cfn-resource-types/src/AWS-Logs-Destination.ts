import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
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
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
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
 * Type definition for `AWS::Logs::Destination.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-logs-destination-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., :, /, =, +, - and @.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., :, /, =, +, - and @.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
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
  constructor(
    logicalId: string,
    properties: LogsDestinationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, LogsDestination.Type, properties, options);
  }
}
