import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Logs::DeliveryDestination`.
 * This structure contains information about one delivery destination in your account.

A delivery destination is an AWS resource that represents an AWS service that logs can be sent to CloudWatch Logs, Amazon S3, are supported as Kinesis Data Firehose delivery destinations.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-deliverydestination.html}
 */
export type LogsDeliveryDestinationProperties = {
  /**
     * IAM policy that grants permissions to CloudWatch Logs to deliver logs cross-account to a specified destination in this account.
    
    The policy must be in JSON string format.
    
    Length Constraints: Maximum length of 51200
     */
  DeliveryDestinationPolicy?: Record<string, any>;
  /**
   * The ARN of the Amazon Web Services destination that this delivery destination represents. That Amazon Web Services destination can be a log group in CloudWatch Logs, an Amazon S3 bucket, or a delivery stream in Firehose.
   * @minLength `16`
   * @maxLength `2048`
   * @pattern `[\w#+=/:,.@-]*\*?`
   */
  DestinationResourceArn?: string;
  /**
   * The name of this delivery destination.
   * @minLength `1`
   * @maxLength `60`
   * @pattern `[\w-]*$`
   */
  Name: string;
  /**
   * The format of the logs that are sent to this delivery destination.
   * @minLength `1`
   * @maxLength `12`
   * @pattern `^[0-9A-Za-z]+$`
   */
  OutputFormat?: string;
  /**
   * The tags that have been assigned to this delivery destination.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Logs::DeliveryDestination`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-deliverydestination.html#aws-resource-logs-deliverydestination-return-values}
 */
export type LogsDeliveryDestinationAttributes = {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies this delivery destination.
   * @minLength `16`
   * @maxLength `2048`
   * @pattern `[\w#+=/:,.@-]*\*?`
   */
  Arn: string;
  /**
   * Displays whether this delivery destination is CloudWatch Logs, Amazon S3, or Kinesis Data Firehose.
   * @minLength `1`
   * @maxLength `12`
   * @pattern `^[0-9A-Za-z]+$`
   */
  DeliveryDestinationType: string;
};
/**
 * Type definition for `AWS::Logs::DeliveryDestination.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-logs-deliverydestination-tag.html}
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
 * Resource type definition for `AWS::Logs::DeliveryDestination`.
 * This structure contains information about one delivery destination in your account.

A delivery destination is an AWS resource that represents an AWS service that logs can be sent to CloudWatch Logs, Amazon S3, are supported as Kinesis Data Firehose delivery destinations.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-deliverydestination.html}
 */
export class LogsDeliveryDestination extends $Resource<
  "AWS::Logs::DeliveryDestination",
  LogsDeliveryDestinationProperties,
  LogsDeliveryDestinationAttributes
> {
  public static readonly Type = "AWS::Logs::DeliveryDestination";
  constructor(
    logicalId: string,
    properties: LogsDeliveryDestinationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, LogsDeliveryDestination.Type, properties, options);
  }
}
