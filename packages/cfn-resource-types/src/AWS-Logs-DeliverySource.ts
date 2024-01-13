import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Logs::DeliverySource`.
 *  A delivery source is an AWS resource that sends logs to an AWS destination. The destination can be CloudWatch Logs, Amazon S3, or Kinesis Data Firehose.

Only some AWS services support being configured as a delivery source. These services are listed as Supported [V2 Permissions] in the table at [Enabling logging from AWS services](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AWS-logs-and-resource-policy.html).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-deliverysource.html}
 */
export type LogsDeliverySourceProperties = {
  /**
   * The type of logs being delivered. Only mandatory when the resourceArn could match more than one. In such a case, the error message will contain all the possible options.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `[\w-]*$`
   */
  LogType?: string;
  /**
   * The unique name of the Log source.
   * @minLength `1`
   * @maxLength `60`
   * @pattern `[\w-]*$`
   */
  Name: string;
  /**
   * The ARN of the resource that will be sending the logs.
   * @minLength `16`
   * @maxLength `2048`
   * @pattern `^arn:(aws[a-zA-Z-]*)?:[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:[A-Za-z0-9_/.-]{0,63}:[A-Za-z0-9_/.-]{0,63}:[A-Za-z0-9][A-Za-z0-9:_/+=,@.-]{0,1023}$`
   */
  ResourceArn?: string;
  /**
   * The tags that have been assigned to this delivery source.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Logs::DeliverySource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-deliverysource.html#aws-resource-logs-deliverysource-return-values}
 */
export type LogsDeliverySourceAttributes = {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies this delivery source.
   * @minLength `16`
   * @maxLength `2048`
   * @pattern `^arn:(aws[a-zA-Z-]*)?:[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:[A-Za-z0-9_/.-]{0,63}:[A-Za-z0-9_/.-]{0,63}:[A-Za-z0-9][A-Za-z0-9:_/+=,@.-]{0,1023}$`
   */
  Arn: string;
  /**
   * This array contains the ARN of the AWS resource that sends logs and is represented by this delivery source. Currently, only one ARN can be in the array.
   */
  ResourceArns: string[];
  /**
   * The AWS service that is sending logs.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `[\w-]*$`
   */
  Service: string;
};
/**
 * Type definition for `AWS::Logs::DeliverySource.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-logs-deliverysource-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::Logs::DeliverySource`.
 *  A delivery source is an AWS resource that sends logs to an AWS destination. The destination can be CloudWatch Logs, Amazon S3, or Kinesis Data Firehose.

Only some AWS services support being configured as a delivery source. These services are listed as Supported [V2 Permissions] in the table at [Enabling logging from AWS services](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AWS-logs-and-resource-policy.html).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-deliverysource.html}
 */
export class LogsDeliverySource extends $Resource<
  "AWS::Logs::DeliverySource",
  LogsDeliverySourceProperties,
  LogsDeliverySourceAttributes
> {
  public static readonly Type = "AWS::Logs::DeliverySource";
  constructor(
    logicalId: string,
    properties: LogsDeliverySourceProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, LogsDeliverySource.Type, properties, options);
  }
}
