import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::IoTEvents::AlarmModel resource creates a alarm model. AWS IoT Events alarms help you monitor your data for changes. The data can be metrics that you measure for your equipment and processes. You can create alarms that send notifications when a threshold is breached. Alarms help you detect issues, streamline maintenance, and optimize performance of your equipment and processes.

Alarms are instances of alarm models. The alarm model specifies what to detect, when to send notifications, who gets notified, and more. You can also specify one or more supported actions that occur when the alarm state changes. AWS IoT Events routes input attributes derived from your data to the appropriate alarms. If the data that you're monitoring is outside the specified range, the alarm is invoked. You can also acknowledge the alarms or set them to the snooze mode.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotevents-alarmmodel.html}
 */
export type IoTEventsAlarmModelProperties = {
  /**
   * Contains the configuration information of alarm state changes
   */
  AlarmCapabilities?: AlarmCapabilities;
  /**
   * Contains information about one or more alarm actions.
   */
  AlarmEventActions?: AlarmEventActions;
  /**
   * A brief description of the alarm model.
   * @maxLength `1024`
   */
  AlarmModelDescription?: string;
  /**
   * The name of the alarm model.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9_-]+$`
   */
  AlarmModelName?: string;
  /**
   * Defines when your alarm is invoked.
   */
  AlarmRule: AlarmRule;
  /**
     * The value used to identify a alarm instance. When a device or system sends input, a new alarm instance with a unique key value is created. AWS IoT Events can continue to route input to its corresponding alarm instance based on this identifying information.
    
    This parameter uses a JSON-path expression to select the attribute-value pair in the message payload that is used for identification. To route the message to the correct alarm instance, the device must send a message payload that contains the same attribute-value.
     * @minLength `1`
     * @maxLength `128`
     * @pattern `^((`[\w\- ]+`)|([\w\-]+))(\.((`[\w\- ]+`)|([\w\-]+)))*$`
     */
  Key?: string;
  /**
   * The ARN of the role that grants permission to AWS IoT Events to perform its operations.
   * @minLength `1`
   * @maxLength `2048`
   */
  RoleArn: string;
  /**
     * A non-negative integer that reflects the severity level of the alarm.
    
    
     * @min `0`
     * @max `2147483647`
     */
  Severity?: number;
  /**
     * An array of key-value pairs to apply to this resource.
    
    For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
     */
  Tags?: Tag[];
};
/**
 * Type definition for `AWS::IoTEvents::AlarmModel.AcknowledgeFlow`.
 * Specifies whether to get notified for alarm state changes.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-acknowledgeflow.html}
 */
export type AcknowledgeFlow = {
  /**
   * The value must be TRUE or FALSE. If TRUE, you receive a notification when the alarm state changes. You must choose to acknowledge the notification before the alarm state can return to NORMAL. If FALSE, you won't receive notifications. The alarm automatically changes to the NORMAL state when the input property value returns to the specified range.
   */
  Enabled?: boolean;
};
/**
 * Type definition for `AWS::IoTEvents::AlarmModel.AlarmAction`.
 * The actions to be performed.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-alarmaction.html}
 */
export type AlarmAction = {
  /**
   * Writes to the DynamoDB table that you created. The default action payload contains all attribute-value pairs that have the information about the alarm model instance and the event that triggered the action. You can also customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html). One column of the DynamoDB table receives all attribute-value pairs in the payload that you specify. For more information, see [Actions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-event-actions.html) in *AWS IoT Events Developer Guide*.
   */
  DynamoDB?: DynamoDB;
  /**
     * Defines an action to write to the Amazon DynamoDB table that you created. The default action payload contains all attribute-value pairs that have the information about the alarm model instance and the event that triggered the action. You can also customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html). A separate column of the DynamoDB table receives one attribute-value pair in the payload that you specify.
    
    You can use expressions for parameters that are strings. For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the *AWS IoT Events Developer Guide*.
     */
  DynamoDBv2?: DynamoDBv2;
  /**
   * Sends information about the alarm model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream.
   */
  Firehose?: Firehose;
  /**
   * Sends an AWS IoT Events input, passing in information about the alarm model instance and the event that triggered the action.
   */
  IotEvents?: IotEvents;
  /**
   * Sends information about the alarm model instance and the event that triggered the action to a specified asset property in AWS IoT SiteWise.
   */
  IotSiteWise?: IotSiteWise;
  /**
   * Information required to publish the MQTT message through the AWS IoT message broker.
   */
  IotTopicPublish?: IotTopicPublish;
  Lambda?: Lambda;
  /**
   * Information required to publish the Amazon SNS message.
   */
  Sns?: Sns;
  Sqs?: Sqs;
};
/**
 * Type definition for `AWS::IoTEvents::AlarmModel.AlarmCapabilities`.
 * Contains the configuration information of alarm state changes
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-alarmcapabilities.html}
 */
export type AlarmCapabilities = {
  /**
   * Specifies whether to get notified for alarm state changes.
   */
  AcknowledgeFlow?: AcknowledgeFlow;
  /**
   * Specifies the default alarm state. The configuration applies to all alarms that were created based on this alarm model.
   */
  InitializationConfiguration?: InitializationConfiguration;
};
/**
 * Type definition for `AWS::IoTEvents::AlarmModel.AlarmEventActions`.
 * Contains information about one or more alarm actions.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-alarmeventactions.html}
 */
export type AlarmEventActions = {
  /**
   * Specifies one or more supported actions to receive notifications when the alarm state changes.
   */
  AlarmActions?: AlarmAction[];
};
/**
 * Type definition for `AWS::IoTEvents::AlarmModel.AlarmRule`.
 * Defines when your alarm is invoked.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-alarmrule.html}
 */
export type AlarmRule = {
  /**
   * A rule that compares an input property value to a threshold value with a comparison operator.
   */
  SimpleRule?: SimpleRule;
};
/**
 * Type definition for `AWS::IoTEvents::AlarmModel.AssetPropertyTimestamp`.
 * A structure that contains timestamp information. For more information, see [TimeInNanos](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_TimeInNanos.html) in the *AWS IoT SiteWise API Reference*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-assetpropertytimestamp.html}
 */
export type AssetPropertyTimestamp = {
  /**
   * The timestamp, in seconds, in the Unix epoch format. The valid range is between `1-31556889864403199`. You can also specify an expression.
   */
  OffsetInNanos?: string;
  /**
   * The nanosecond offset converted from `timeInSeconds`. The valid range is between `0-999999999`. You can also specify an expression.
   */
  TimeInSeconds: string;
};
/**
 * Type definition for `AWS::IoTEvents::AlarmModel.AssetPropertyValue`.
 * A structure that contains value information. For more information, see [AssetPropertyValue](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_AssetPropertyValue.html) in the *AWS IoT SiteWise API Reference*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-assetpropertyvalue.html}
 */
export type AssetPropertyValue = {
  /**
   * The quality of the asset property value. The value must be `GOOD`, `BAD`, or `UNCERTAIN`. You can also specify an expression.
   */
  Quality?: string;
  /**
   * A structure that contains timestamp information. For more information, see [TimeInNanos](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_TimeInNanos.html) in the *AWS IoT SiteWise API Reference*.
   */
  Timestamp?: AssetPropertyTimestamp;
  /**
   * A structure that contains an asset property value. For more information, see [Variant](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_Variant.html) in the *AWS IoT SiteWise API Reference*.
   */
  Value: AssetPropertyVariant;
};
/**
 * Type definition for `AWS::IoTEvents::AlarmModel.AssetPropertyVariant`.
 * A structure that contains an asset property value. For more information, see [Variant](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_Variant.html) in the *AWS IoT SiteWise API Reference*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-assetpropertyvariant.html}
 */
export type AssetPropertyVariant = {
  /**
   * The asset property value is a Boolean value that must be `TRUE` or `FALSE`. You can also specify an expression. If you use an expression, the evaluated result should be a Boolean value.
   */
  BooleanValue?: string;
  /**
   * The asset property value is a double. You can also specify an expression. If you use an expression, the evaluated result should be a double.
   */
  DoubleValue?: string;
  /**
   * The asset property value is an integer. You can also specify an expression. If you use an expression, the evaluated result should be an integer.
   */
  IntegerValue?: string;
  /**
   * The asset property value is a string. You can also specify an expression. If you use an expression, the evaluated result should be a string.
   */
  StringValue?: string;
};
/**
 * Type definition for `AWS::IoTEvents::AlarmModel.DynamoDB`.
 * Writes to the DynamoDB table that you created. The default action payload contains all attribute-value pairs that have the information about the alarm model instance and the event that triggered the action. You can also customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html). One column of the DynamoDB table receives all attribute-value pairs in the payload that you specify. For more information, see [Actions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-event-actions.html) in *AWS IoT Events Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-dynamodb.html}
 */
export type DynamoDB = {
  /**
   * The name of the hash key (also called the partition key).
   */
  HashKeyField: string;
  /**
     * The data type for the hash key (also called the partition key). You can specify the following values:
    
    * `STRING` - The hash key is a string.
    
    * `NUMBER` - The hash key is a number.
    
    If you don't specify `hashKeyType`, the default value is `STRING`.
     */
  HashKeyType?: string;
  /**
   * The value of the hash key (also called the partition key).
   */
  HashKeyValue: string;
  /**
     * The type of operation to perform. You can specify the following values:
    
    * `INSERT` - Insert data as a new item into the DynamoDB table. This item uses the specified hash key as a partition key. If you specified a range key, the item uses the range key as a sort key.
    
    * `UPDATE` - Update an existing item of the DynamoDB table with new data. This item's partition key must match the specified hash key. If you specified a range key, the range key must match the item's sort key.
    
    * `DELETE` - Delete an existing item of the DynamoDB table. This item's partition key must match the specified hash key. If you specified a range key, the range key must match the item's sort key.
    
    If you don't specify this parameter, AWS IoT Events triggers the `INSERT` operation.
     */
  Operation?: string;
  /**
     * Information needed to configure the payload.
    
    By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the alarm model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.
     */
  Payload?: Payload;
  /**
     * The name of the DynamoDB column that receives the action payload.
    
    If you don't specify this parameter, the name of the DynamoDB column is `payload`.
     */
  PayloadField?: string;
  /**
   * The name of the range key (also called the sort key).
   */
  RangeKeyField?: string;
  /**
     * The data type for the range key (also called the sort key), You can specify the following values:
    
    * `STRING` - The range key is a string.
    
    * `NUMBER` - The range key is number.
    
    If you don't specify `rangeKeyField`, the default value is `STRING`.
     */
  RangeKeyType?: string;
  /**
   * The value of the range key (also called the sort key).
   */
  RangeKeyValue?: string;
  /**
   * The name of the DynamoDB table.
   */
  TableName: string;
};
/**
 * Type definition for `AWS::IoTEvents::AlarmModel.DynamoDBv2`.
 * Defines an action to write to the Amazon DynamoDB table that you created. The default action payload contains all attribute-value pairs that have the information about the alarm model instance and the event that triggered the action. You can also customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html). A separate column of the DynamoDB table receives one attribute-value pair in the payload that you specify.

You can use expressions for parameters that are strings. For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the *AWS IoT Events Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-dynamodbv2.html}
 */
export type DynamoDBv2 = {
  /**
     * Information needed to configure the payload.
    
    By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the alarm model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.
     */
  Payload?: Payload;
  /**
   * The name of the DynamoDB table.
   */
  TableName: string;
};
/**
 * Type definition for `AWS::IoTEvents::AlarmModel.Firehose`.
 * Sends information about the alarm model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-firehose.html}
 */
export type Firehose = {
  /**
   * The name of the Kinesis Data Firehose delivery stream where the data is written.
   */
  DeliveryStreamName: string;
  /**
     * Information needed to configure the payload.
    
    By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the alarm model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.
     */
  Payload?: Payload;
  /**
   * A character separator that is used to separate records written to the Kinesis Data Firehose delivery stream. Valid values are: '\n' (newline), '\t' (tab), '\r\n' (Windows newline), ',' (comma).
   * @pattern `([\n\t])|(\r\n)|(,)`
   */
  Separator?: string;
};
/**
 * Type definition for `AWS::IoTEvents::AlarmModel.InitializationConfiguration`.
 * Specifies the default alarm state. The configuration applies to all alarms that were created based on this alarm model.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-initializationconfiguration.html}
 */
export type InitializationConfiguration = {
  /**
   * The value must be TRUE or FALSE. If FALSE, all alarm instances created based on the alarm model are activated. The default value is TRUE.
   */
  DisabledOnInitialization: boolean;
};
/**
 * Type definition for `AWS::IoTEvents::AlarmModel.IotEvents`.
 * Sends an AWS IoT Events input, passing in information about the alarm model instance and the event that triggered the action.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-iotevents.html}
 */
export type IotEvents = {
  /**
   * The name of the AWS IoT Events input where the data is sent.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z][a-zA-Z0-9_]*$`
   */
  InputName: string;
  /**
     * Information needed to configure the payload.
    
    By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the alarm model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.
     */
  Payload?: Payload;
};
/**
 * Type definition for `AWS::IoTEvents::AlarmModel.IotSiteWise`.
 * Sends information about the alarm model instance and the event that triggered the action to a specified asset property in AWS IoT SiteWise.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-iotsitewise.html}
 */
export type IotSiteWise = {
  /**
   * The ID of the asset that has the specified property. You can specify an expression.
   */
  AssetId?: string;
  /**
   * A unique identifier for this entry. You can use the entry ID to track which data entry causes an error in case of failure. The default is a new unique identifier. You can also specify an expression.
   */
  EntryId?: string;
  /**
   * The alias of the asset property. You can also specify an expression.
   */
  PropertyAlias?: string;
  /**
   * The ID of the asset property. You can specify an expression.
   */
  PropertyId?: string;
  /**
   * A structure that contains value information. For more information, see [AssetPropertyValue](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_AssetPropertyValue.html) in the *AWS IoT SiteWise API Reference*.
   */
  PropertyValue?: AssetPropertyValue;
};
/**
 * Type definition for `AWS::IoTEvents::AlarmModel.IotTopicPublish`.
 * Information required to publish the MQTT message through the AWS IoT message broker.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-iottopicpublish.html}
 */
export type IotTopicPublish = {
  /**
   * The MQTT topic of the message. You can use a string expression that includes variables (`$variable.<variable-name>`) and input values (`$input.<input-name>.<path-to-datum>`) as the topic string.
   * @minLength `1`
   * @maxLength `128`
   */
  MqttTopic: string;
  /**
     * Information needed to configure the payload.
    
    By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the alarm model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.
     */
  Payload?: Payload;
};
/**
 * Type definition for `AWS::IoTEvents::AlarmModel.Lambda`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-lambda.html}
 */
export type Lambda = {
  /**
   * The ARN of the Lambda function that is executed.
   * @minLength `1`
   * @maxLength `2048`
   */
  FunctionArn: string;
  /**
     * Information needed to configure the payload.
    
    By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the alarm model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.
     */
  Payload?: Payload;
};
/**
 * Type definition for `AWS::IoTEvents::AlarmModel.Payload`.
 * Information needed to configure the payload.

By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the alarm model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-payload.html}
 */
export type Payload = {
  /**
   * The content of the payload. You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.
   * @minLength `1`
   */
  ContentExpression: string;
  /**
   * The value of the payload type can be either `STRING` or `JSON`.
   */
  Type: string;
};
/**
 * Type definition for `AWS::IoTEvents::AlarmModel.SimpleRule`.
 * A rule that compares an input property value to a threshold value with a comparison operator.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-simplerule.html}
 */
export type SimpleRule = {
  /**
   * The comparison operator.
   */
  ComparisonOperator:
    | "GREATER"
    | "GREATER_OR_EQUAL"
    | "LESS"
    | "LESS_OR_EQUAL"
    | "EQUAL"
    | "NOT_EQUAL";
  /**
   * The value on the left side of the comparison operator. You can specify an AWS IoT Events input attribute as an input property.
   * @minLength `1`
   * @maxLength `512`
   */
  InputProperty: string;
  /**
   * The value on the right side of the comparison operator. You can enter a number or specify an AWS IoT Events input attribute.
   * @minLength `1`
   * @maxLength `512`
   */
  Threshold: string;
};
/**
 * Type definition for `AWS::IoTEvents::AlarmModel.Sns`.
 * Information required to publish the Amazon SNS message.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-sns.html}
 */
export type Sns = {
  /**
     * Information needed to configure the payload.
    
    By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the alarm model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.
     */
  Payload?: Payload;
  /**
   * The ARN of the Amazon SNS target where the message is sent.
   * @minLength `1`
   * @maxLength `2048`
   */
  TargetArn: string;
};
/**
 * Type definition for `AWS::IoTEvents::AlarmModel.Sqs`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-sqs.html}
 */
export type Sqs = {
  /**
     * Information needed to configure the payload.
    
    By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the alarm model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.
     */
  Payload?: Payload;
  /**
   * The URL of the SQS queue where the data is written.
   */
  QueueUrl: string;
  /**
   * Set this to `TRUE` if you want the data to be base-64 encoded before it is written to the queue. Otherwise, set this to `FALSE`.
   */
  UseBase64?: boolean;
};
/**
 * Type definition for `AWS::IoTEvents::AlarmModel.Tag`.
 * Tags to be applied to Input.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-tag.html}
 */
export type Tag = {
  /**
   * Key of the Tag.
   */
  Key: string;
  /**
   * Value of the Tag.
   */
  Value: string;
};
/**
 * The AWS::IoTEvents::AlarmModel resource creates a alarm model. AWS IoT Events alarms help you monitor your data for changes. The data can be metrics that you measure for your equipment and processes. You can create alarms that send notifications when a threshold is breached. Alarms help you detect issues, streamline maintenance, and optimize performance of your equipment and processes.

Alarms are instances of alarm models. The alarm model specifies what to detect, when to send notifications, who gets notified, and more. You can also specify one or more supported actions that occur when the alarm state changes. AWS IoT Events routes input attributes derived from your data to the appropriate alarms. If the data that you're monitoring is outside the specified range, the alarm is invoked. You can also acknowledge the alarms or set them to the snooze mode.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotevents-alarmmodel.html}
 */
export class IoTEventsAlarmModel extends $Resource<
  "AWS::IoTEvents::AlarmModel",
  IoTEventsAlarmModelProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::IoTEvents::AlarmModel";
  constructor(
    logicalId: string,
    properties: IoTEventsAlarmModelProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IoTEventsAlarmModel.Type, properties, options);
  }
}
