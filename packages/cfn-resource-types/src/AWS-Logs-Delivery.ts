import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Logs::Delivery`.
 * This structure contains information about one delivery in your account.

A delivery is a connection between a logical delivery source and a logical delivery destination.

For more information, see [CreateDelivery](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateDelivery.html).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-delivery.html}
 */
export type LogsDeliveryProperties = {
  /**
   * The ARN of the delivery destination that is associated with this delivery.
   * @minLength `16`
   * @maxLength `2048`
   * @pattern `[\w#+=/:,.@-]*\*?`
   */
  DeliveryDestinationArn: string;
  /**
   * The name of the delivery source that is associated with this delivery.
   * @minLength `1`
   * @maxLength `60`
   * @pattern `[\w-]*$`
   */
  DeliverySourceName: string;
  /**
   * The field delimiter to use between record fields when the final output format of a delivery is in Plain , W3C , or Raw format.
   * @minLength `1`
   * @maxLength `5`
   */
  FieldDelimiter?: string;
  /**
   * The list of record fields to be delivered to the destination, in order. If the delivery's log source has mandatory fields, they must be included in this list.
   */
  RecordFields?: string[];
  /**
   * This parameter causes the S3 objects that contain delivered logs to use a prefix structure that allows for integration with Apache Hive.
   */
  S3EnableHiveCompatiblePath?: boolean;
  /**
   * This string allows re-configuring the S3 object prefix to contain either static or variable sections. The valid variables to use in the suffix path will vary by each log source. See ConfigurationTemplate$allowedSuffixPathFields for more info on what values are supported in the suffix path for each log source.
   * @minLength `0`
   * @maxLength `256`
   */
  S3SuffixPath?: string;
  /**
   * The tags that have been assigned to this delivery.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Logs::Delivery`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-delivery.html#aws-resource-logs-delivery-return-values}
 */
export type LogsDeliveryAttributes = {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies this delivery.
   * @minLength `16`
   * @maxLength `2048`
   * @pattern `[\w#+=/:,.@-]*\*?`
   */
  Arn: string;
  /**
   * Displays whether the delivery destination associated with this delivery is CloudWatch Logs, Amazon S3, or Kinesis Data Firehose.
   * @minLength `1`
   * @maxLength `12`
   * @pattern `^[0-9A-Za-z]+$`
   */
  DeliveryDestinationType: string;
  /**
   * The unique ID that identifies this delivery in your account.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[0-9A-Za-z]+$`
   */
  DeliveryId: string;
};
/**
 * Type definition for `AWS::Logs::Delivery.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-logs-delivery-tag.html}
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
 * Resource type definition for `AWS::Logs::Delivery`.
 * This structure contains information about one delivery in your account.

A delivery is a connection between a logical delivery source and a logical delivery destination.

For more information, see [CreateDelivery](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateDelivery.html).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-delivery.html}
 */
export class LogsDelivery extends $Resource<
  "AWS::Logs::Delivery",
  LogsDeliveryProperties,
  LogsDeliveryAttributes
> {
  public static readonly Type = "AWS::Logs::Delivery";
  constructor(
    logicalId: string,
    properties: LogsDeliveryProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, LogsDelivery.Type, properties, options);
  }
}
