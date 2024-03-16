import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The ``AWS::Logs::LogGroup`` resource specifies a log group. A log group defines common properties for log streams, such as their retention and access control rules. Each log stream must belong to one log group.
 You can create up to 1,000,000 log groups per Region per account. You must use the following guidelines when naming a log group:
  +  Log group names must be unique within a Region for an AWS account.
  +  Log group names can be between 1 and 512 characters long.
  +  Log group names consist of the following characters: a-z, A-Z, 0-9, '_' (underscore), '-' (hyphen), '/' (forward slash), and '.' (period).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loggroup.html}
 */
export type LogsLogGroupProperties = {
  /**
     * Creates a data protection policy and assigns it to the log group. A data protection policy can help safeguard sensitive data that's ingested by the log group by auditing and masking the sensitive log data. When a user who does not have permission to view masked data views a log event that includes masked data, the sensitive data is replaced by asterisks.
     For more information, including a list of types of data that can be audited and masked, see [Protect sensitive log data with masking](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/mask-sensitive-log-data.html).
     */
  DataProtectionPolicy?: Record<string, any>;
  /**
     * The Amazon Resource Name (ARN) of the KMS key to use when encrypting log data.
     To associate an KMS key with the log group, specify the ARN of that KMS key here. If you do so, ingested data is encrypted using this key. This association is stored as long as the data encrypted with the KMS key is still within CWL. This enables CWL to decrypt this data whenever it is requested.
     If you attempt to associate a KMS key with the log group but the KMS key doesn't exist or is deactivated, you will receive an ``InvalidParameterException`` error.
     Log group data is always encrypted in CWL. If you omit this key, the encryption does not use KMS. For more information, see [Encrypt log data in using](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/encrypt-log-data-kms.html)
     * @maxLength `256`
     * @pattern `^arn:[a-z0-9-]+:kms:[a-z0-9-]+:\d{12}:(key|alias)/.+\Z`
     */
  KmsKeyId?: string;
  /**
     * Specifies the log group class for this log group. There are two classes:
      + The ``Standard`` log class supports all CWL features.
     + The ``Infrequent Access`` log class supports a subset of CWL features and incurs lower costs.
     
     For details about the features supported by each class, see [Log classes](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch_Logs_Log_Classes.html)
     */
  LogGroupClass?: "STANDARD" | "INFREQUENT_ACCESS";
  /**
   * The name of the log group. If you don't specify a name, CFNlong generates a unique ID for the log group.
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[.\-_/#A-Za-z0-9]{1,512}\Z`
   */
  LogGroupName?: string;
  /**
     * The number of days to retain the log events in the specified log group. Possible values are: 1, 3, 5, 7, 14, 30, 60, 90, 120, 150, 180, 365, 400, 545, 731, 1096, 1827, 2192, 2557, 2922, 3288, and 3653.
     To set a log group so that its log events do not expire, use [DeleteRetentionPolicy](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteRetentionPolicy.html).
     */
  RetentionInDays?:
    | 1
    | 3
    | 5
    | 7
    | 14
    | 30
    | 60
    | 90
    | 120
    | 150
    | 180
    | 365
    | 400
    | 545
    | 731
    | 1096
    | 1827
    | 2192
    | 2557
    | 2922
    | 3288
    | 3653;
  /**
     * An array of key-value pairs to apply to the log group.
     For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
     */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Logs::LogGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loggroup.html#aws-resource-logs-loggroup-return-values}
 */
export type LogsLogGroupAttributes = {
  Arn: string;
};
/**
 * Type definition for `AWS::Logs::LogGroup.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-logs-loggroup-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * The ``AWS::Logs::LogGroup`` resource specifies a log group. A log group defines common properties for log streams, such as their retention and access control rules. Each log stream must belong to one log group.
 You can create up to 1,000,000 log groups per Region per account. You must use the following guidelines when naming a log group:
  +  Log group names must be unique within a Region for an AWS account.
  +  Log group names can be between 1 and 512 characters long.
  +  Log group names consist of the following characters: a-z, A-Z, 0-9, '_' (underscore), '-' (hyphen), '/' (forward slash), and '.' (period).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loggroup.html}
 */
export class LogsLogGroup extends $Resource<
  "AWS::Logs::LogGroup",
  LogsLogGroupProperties,
  LogsLogGroupAttributes
> {
  public static readonly Type = "AWS::Logs::LogGroup";
  constructor(
    logicalId: string,
    properties: LogsLogGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, LogsLogGroup.Type, properties, options);
  }
}
