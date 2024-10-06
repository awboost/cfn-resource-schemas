import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::IoTEvents::AlarmModel`.
 * Represents an alarm model to monitor an ITE input attribute. You can use the alarm to get notified when the value is outside a specified range. For more information, see [Create an alarm model](https://docs.aws.amazon.com/iotevents/latest/developerguide/create-alarms.html) in the *Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotevents-alarmmodel.html}
 */
export type IoTEventsAlarmModelProperties = {
  /**
   * Contains the configuration information of alarm state changes.
   */
  AlarmCapabilities?: AlarmCapabilities;
  /**
   * Contains information about one or more alarm actions.
   */
  AlarmEventActions?: AlarmEventActions;
  /**
   * The description of the alarm model.
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
   * An input attribute used as a key to create an alarm. ITE routes [inputs](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Input.html) associated with this key to the alarm.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^((`[\w\- ]+`)|([\w\-]+))(\.((`[\w\- ]+`)|([\w\-]+)))*$`
   */
  Key?: string;
  /**
   * The ARN of the IAM role that allows the alarm to perform actions and access AWS resources. For more information, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *General Reference*.
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
     * A list of key-value pairs that contain metadata for the alarm model. The tags help you manage the alarm model. For more information, see [Tagging your resources](https://docs.aws.amazon.com/iotevents/latest/developerguide/tagging-iotevents.html) in the *Developer Guide*.
     You can create up to 50 tags for one alarm model.
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
   * The value must be ``TRUE`` or ``FALSE``. If ``TRUE``, you receive a notification when the alarm state changes. You must choose to acknowledge the notification before the alarm state can return to ``NORMAL``. If ``FALSE``, you won't receive notifications. The alarm automatically changes to the ``NORMAL`` state when the input property value returns to the specified range.
   */
  Enabled?: boolean;
};
/**
 * Type definition for `AWS::IoTEvents::AlarmModel.AlarmAction`.
 * Specifies one of the following actions to receive notifications when the alarm state changes.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-alarmaction.html}
 */
export type AlarmAction = {
  /**
     * Defines an action to write to the Amazon DynamoDB table that you created. The standard action payload contains all the information about the detector model instance and the event that triggered the action. You can customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html). One column of the DynamoDB table receives all attribute-value pairs in the payload that you specify.
     You must use expressions for all parameters in ``DynamoDBAction``. The expressions accept literals, operators, functions, references, and substitution templates.
      **Examples**
     +  For literal values, the expressions must contain single quotes. For example, the value for the ``hashKeyType`` parameter can be ``'STRING'``.
      +  For references, you must specify either variables or input values. For example, the value for the ``hashKeyField`` parameter can be ``$input.GreenhouseInput.name``.
      +  For a substitution template, you must use ``${}``, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.
     In the following example, the value for the ``hashKeyValue`` parameter uses a substitution template.
      ``'${$input.GreenhouseInput.temperature * 6 / 5 + 32} in Fahrenheit'``
      +  For a string concatenation, you must use ``+``. A string concatenation can also contain a combination of literals, operators, functions, references, and substitution templates.
     In the following example, the value for the ``tableName`` parameter uses a string concatenation.
      ``'GreenhouseTemperatureTable ' + $input.GreenhouseInput.date``
      
     For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the *Developer Guide*.
     If the defined payload type is a string, ``DynamoDBAction`` writes non-JSON data to the DynamoDB table as binary data. The DynamoDB console displays the data as Base64-encoded text. The value for the ``payloadField`` parameter is ``<payload-field>_raw``.
     */
  DynamoDB?: DynamoDB;
  /**
     * Defines an action to write to the Amazon DynamoDB table that you created. The default action payload contains all the information about the detector model instance and the event that triggered the action. You can customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html). A separate column of the DynamoDB table receives one attribute-value pair in the payload that you specify.
     You must use expressions for all parameters in ``DynamoDBv2Action``. The expressions accept literals, operators, functions, references, and substitution templates.
      **Examples**
     +  For literal values, the expressions must contain single quotes. For example, the value for the ``tableName`` parameter can be ``'GreenhouseTemperatureTable'``.
      +  For references, you must specify either variables or input values. For example, the value for the ``tableName`` parameter can be ``$variable.ddbtableName``.
      +  For a substitution template, you must use ``${}``, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.
     In the following example, the value for the ``contentExpression`` parameter in ``Payload`` uses a substitution template.
      ``'{\"sensorID\": \"${$input.GreenhouseInput.sensor_id}\", \"temperature\": \"${$input.GreenhouseInput.temperature * 9 / 5 + 32}\"}'``
      +  For a string concatenation, you must use ``+``. A string concatenation can also contain a combination of literals, operators, functions, references, and substitution templates.
     In the following example, the value for the ``tableName`` parameter uses a string concatenation.
      ``'GreenhouseTemperatureTable ' + $input.GreenhouseInput.date``
      
     For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the *Developer Guide*.
     The value for the ``type`` parameter in ``Payload`` must be ``JSON``.
     */
  DynamoDBv2?: DynamoDBv2;
  /**
   * Sends information about the detector model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream.
   */
  Firehose?: Firehose;
  /**
   * Sends an ITE input, passing in information about the detector model instance and the event that triggered the action.
   */
  IotEvents?: IotEvents;
  /**
     * Sends information about the detector model instance and the event that triggered the action to a specified asset property in ITSW.
     You must use expressions for all parameters in ``IotSiteWiseAction``. The expressions accept literals, operators, functions, references, and substitutions templates.
      **Examples**
     +  For literal values, the expressions must contain single quotes. For example, the value for the ``propertyAlias`` parameter can be ``'/company/windfarm/3/turbine/7/temperature'``.
      +  For references, you must specify either variables or input values. For example, the value for the ``assetId`` parameter can be ``$input.TurbineInput.assetId1``.
      +  For a substitution template, you must use ``${}``, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.
     In the following example, the value for the ``propertyAlias`` parameter uses a substitution template.
      ``'company/windfarm/${$input.TemperatureInput.sensorData.windfarmID}/turbine/ ${$input.TemperatureInput.sensorData.turbineID}/temperature'``
      
     You must specify either ``propertyAlias`` or both ``assetId`` and ``propertyId`` to identify the target asset property in ITSW.
     For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the *Developer Guide*.
     */
  IotSiteWise?: IotSiteWise;
  /**
   * Information required to publish the MQTT message through the IoT message broker.
   */
  IotTopicPublish?: IotTopicPublish;
  /**
   * Calls a Lambda function, passing in information about the detector model instance and the event that triggered the action.
   */
  Lambda?: Lambda;
  /**
   * Information required to publish the Amazon SNS message.
   */
  Sns?: Sns;
  /**
   * Sends information about the detector model instance and the event that triggered the action to an Amazon SQS queue.
   */
  Sqs?: Sqs;
};
/**
 * Type definition for `AWS::IoTEvents::AlarmModel.AlarmCapabilities`.
 * Contains the configuration information of alarm state changes.
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
 * A structure that contains timestamp information. For more information, see [TimeInNanos](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_TimeInNanos.html) in the *API Reference*.
 You must use expressions for all parameters in ``AssetPropertyTimestamp``. The expressions accept literals, operators, functions, references, and substitution templates.
  **Examples**
 +  For literal values, the expressions must contain single quotes. For example, the value for the ``timeInSeconds`` parameter can be ``'1586400675'``.
  +  For references, you must specify either variables or input values. For example, the value for the ``offsetInNanos`` parameter can be ``$variable.time``.
  +  For a substitution template, you must use ``${}``, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.
 In the following example, the value for the ``timeInSeconds`` parameter uses a substitution template.
  ``'${$input.TemperatureInput.sensorData.timestamp / 1000}'``
  
 For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the *Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-assetpropertytimestamp.html}
 */
export type AssetPropertyTimestamp = {
  /**
   * The nanosecond offset converted from ``timeInSeconds``. The valid range is between 0-999999999.
   */
  OffsetInNanos?: string;
  /**
   * The timestamp, in seconds, in the Unix epoch format. The valid range is between 1-31556889864403199.
   */
  TimeInSeconds: string;
};
/**
 * Type definition for `AWS::IoTEvents::AlarmModel.AssetPropertyValue`.
 * A structure that contains value information. For more information, see [AssetPropertyValue](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_AssetPropertyValue.html) in the *API Reference*.
 You must use expressions for all parameters in ``AssetPropertyValue``. The expressions accept literals, operators, functions, references, and substitution templates.
  **Examples**
 +  For literal values, the expressions must contain single quotes. For example, the value for the ``quality`` parameter can be ``'GOOD'``.
  +  For references, you must specify either variables or input values. For example, the value for the ``quality`` parameter can be ``$input.TemperatureInput.sensorData.quality``.
  
 For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the *Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-assetpropertyvalue.html}
 */
export type AssetPropertyValue = {
  /**
   * The quality of the asset property value. The value must be ``'GOOD'``, ``'BAD'``, or ``'UNCERTAIN'``.
   */
  Quality?: string;
  /**
   * The timestamp associated with the asset property value. The default is the current event time.
   */
  Timestamp?: AssetPropertyTimestamp;
  /**
   * The value to send to an asset property.
   */
  Value: AssetPropertyVariant;
};
/**
 * Type definition for `AWS::IoTEvents::AlarmModel.AssetPropertyVariant`.
 * A structure that contains an asset property value. For more information, see [Variant](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_Variant.html) in the *API Reference*.
 You must use expressions for all parameters in ``AssetPropertyVariant``. The expressions accept literals, operators, functions, references, and substitution templates.
  **Examples**
 +  For literal values, the expressions must contain single quotes. For example, the value for the ``integerValue`` parameter can be ``'100'``.
  +  For references, you must specify either variables or parameters. For example, the value for the ``booleanValue`` parameter can be ``$variable.offline``.
  +  For a substitution template, you must use ``${}``, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.
 In the following example, the value for the ``doubleValue`` parameter uses a substitution template.
  ``'${$input.TemperatureInput.sensorData.temperature * 6 / 5 + 32}'``
  
 For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the *Developer Guide*.
 You must specify one of the following value types, depending on the ``dataType`` of the specified asset property. For more information, see [AssetProperty](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_AssetProperty.html) in the *API Reference*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-assetpropertyvariant.html}
 */
export type AssetPropertyVariant = {
  /**
   * The asset property value is a Boolean value that must be ``'TRUE'`` or ``'FALSE'``. You must use an expression, and the evaluated result should be a Boolean value.
   */
  BooleanValue?: string;
  /**
   * The asset property value is a double. You must use an expression, and the evaluated result should be a double.
   */
  DoubleValue?: string;
  /**
   * The asset property value is an integer. You must use an expression, and the evaluated result should be an integer.
   */
  IntegerValue?: string;
  /**
   * The asset property value is a string. You must use an expression, and the evaluated result should be a string.
   */
  StringValue?: string;
};
/**
 * Type definition for `AWS::IoTEvents::AlarmModel.DynamoDB`.
 * Defines an action to write to the Amazon DynamoDB table that you created. The standard action payload contains all the information about the detector model instance and the event that triggered the action. You can customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html). One column of the DynamoDB table receives all attribute-value pairs in the payload that you specify.
 You must use expressions for all parameters in ``DynamoDBAction``. The expressions accept literals, operators, functions, references, and substitution templates.
  **Examples**
 +  For literal values, the expressions must contain single quotes. For example, the value for the ``hashKeyType`` parameter can be ``'STRING'``.
  +  For references, you must specify either variables or input values. For example, the value for the ``hashKeyField`` parameter can be ``$input.GreenhouseInput.name``.
  +  For a substitution template, you must use ``${}``, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.
 In the following example, the value for the ``hashKeyValue`` parameter uses a substitution template.
  ``'${$input.GreenhouseInput.temperature * 6 / 5 + 32} in Fahrenheit'``
  +  For a string concatenation, you must use ``+``. A string concatenation can also contain a combination of literals, operators, functions, references, and substitution templates.
 In the following example, the value for the ``tableName`` parameter uses a string concatenation.
  ``'GreenhouseTemperatureTable ' + $input.GreenhouseInput.date``
  
 For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the *Developer Guide*.
 If the defined payload type is a string, ``DynamoDBAction`` writes non-JSON data to the DynamoDB table as binary data. The DynamoDB console displays the data as Base64-encoded text. The value for the ``payloadField`` parameter is ``<payload-field>_raw``.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-dynamodb.html}
 */
export type DynamoDB = {
  /**
   * The name of the hash key (also called the partition key). The ``hashKeyField`` value must match the partition key of the target DynamoDB table.
   */
  HashKeyField: string;
  /**
     * The data type for the hash key (also called the partition key). You can specify the following values:
      +   ``'STRING'`` - The hash key is a string.
      +   ``'NUMBER'`` - The hash key is a number.
      
     If you don't specify ``hashKeyType``, the default value is ``'STRING'``.
     */
  HashKeyType?: string;
  /**
   * The value of the hash key (also called the partition key).
   */
  HashKeyValue: string;
  /**
     * The type of operation to perform. You can specify the following values:
      +   ``'INSERT'`` - Insert data as a new item into the DynamoDB table. This item uses the specified hash key as a partition key. If you specified a range key, the item uses the range key as a sort key.
      +   ``'UPDATE'`` - Update an existing item of the DynamoDB table with new data. This item's partition key must match the specified hash key. If you specified a range key, the range key must match the item's sort key.
      +   ``'DELETE'`` - Delete an existing item of the DynamoDB table. This item's partition key must match the specified hash key. If you specified a range key, the range key must match the item's sort key.
      
     If you don't specify this parameter, ITE triggers the ``'INSERT'`` operation.
     */
  Operation?: string;
  /**
     * Information needed to configure the payload.
     By default, ITE generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use ``contentExpression``.
     */
  Payload?: Payload;
  /**
     * The name of the DynamoDB column that receives the action payload.
     If you don't specify this parameter, the name of the DynamoDB column is ``payload``.
     */
  PayloadField?: string;
  /**
   * The name of the range key (also called the sort key). The ``rangeKeyField`` value must match the sort key of the target DynamoDB table.
   */
  RangeKeyField?: string;
  /**
     * The data type for the range key (also called the sort key), You can specify the following values:
      +   ``'STRING'`` - The range key is a string.
      +   ``'NUMBER'`` - The range key is number.
      
     If you don't specify ``rangeKeyField``, the default value is ``'STRING'``.
     */
  RangeKeyType?: string;
  /**
   * The value of the range key (also called the sort key).
   */
  RangeKeyValue?: string;
  /**
   * The name of the DynamoDB table. The ``tableName`` value must match the table name of the target DynamoDB table.
   */
  TableName: string;
};
/**
 * Type definition for `AWS::IoTEvents::AlarmModel.DynamoDBv2`.
 * Defines an action to write to the Amazon DynamoDB table that you created. The default action payload contains all the information about the detector model instance and the event that triggered the action. You can customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html). A separate column of the DynamoDB table receives one attribute-value pair in the payload that you specify.
 You must use expressions for all parameters in ``DynamoDBv2Action``. The expressions accept literals, operators, functions, references, and substitution templates.
  **Examples**
 +  For literal values, the expressions must contain single quotes. For example, the value for the ``tableName`` parameter can be ``'GreenhouseTemperatureTable'``.
  +  For references, you must specify either variables or input values. For example, the value for the ``tableName`` parameter can be ``$variable.ddbtableName``.
  +  For a substitution template, you must use ``${}``, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.
 In the following example, the value for the ``contentExpression`` parameter in ``Payload`` uses a substitution template.
  ``'{\"sensorID\": \"${$input.GreenhouseInput.sensor_id}\", \"temperature\": \"${$input.GreenhouseInput.temperature * 9 / 5 + 32}\"}'``
  +  For a string concatenation, you must use ``+``. A string concatenation can also contain a combination of literals, operators, functions, references, and substitution templates.
 In the following example, the value for the ``tableName`` parameter uses a string concatenation.
  ``'GreenhouseTemperatureTable ' + $input.GreenhouseInput.date``
  
 For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the *Developer Guide*.
 The value for the ``type`` parameter in ``Payload`` must be ``JSON``.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-dynamodbv2.html}
 */
export type DynamoDBv2 = {
  /**
     * Information needed to configure the payload.
     By default, ITE generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use ``contentExpression``.
     */
  Payload?: Payload;
  /**
   * The name of the DynamoDB table.
   */
  TableName: string;
};
/**
 * Type definition for `AWS::IoTEvents::AlarmModel.Firehose`.
 * Sends information about the detector model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-firehose.html}
 */
export type Firehose = {
  /**
   * The name of the Kinesis Data Firehose delivery stream where the data is written.
   */
  DeliveryStreamName: string;
  /**
   * You can configure the action payload when you send a message to an Amazon Data Firehose delivery stream.
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
   * The value must be ``TRUE`` or ``FALSE``. If ``FALSE``, all alarm instances created based on the alarm model are activated. The default value is ``TRUE``.
   */
  DisabledOnInitialization: boolean;
};
/**
 * Type definition for `AWS::IoTEvents::AlarmModel.IotEvents`.
 * Sends an ITE input, passing in information about the detector model instance and the event that triggered the action.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-iotevents.html}
 */
export type IotEvents = {
  /**
   * The name of the ITE input where the data is sent.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z][a-zA-Z0-9_]*$`
   */
  InputName: string;
  /**
   * You can configure the action payload when you send a message to an ITE input.
   */
  Payload?: Payload;
};
/**
 * Type definition for `AWS::IoTEvents::AlarmModel.IotSiteWise`.
 * Sends information about the detector model instance and the event that triggered the action to a specified asset property in ITSW.
 You must use expressions for all parameters in ``IotSiteWiseAction``. The expressions accept literals, operators, functions, references, and substitutions templates.
  **Examples**
 +  For literal values, the expressions must contain single quotes. For example, the value for the ``propertyAlias`` parameter can be ``'/company/windfarm/3/turbine/7/temperature'``.
  +  For references, you must specify either variables or input values. For example, the value for the ``assetId`` parameter can be ``$input.TurbineInput.assetId1``.
  +  For a substitution template, you must use ``${}``, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.
 In the following example, the value for the ``propertyAlias`` parameter uses a substitution template.
  ``'company/windfarm/${$input.TemperatureInput.sensorData.windfarmID}/turbine/ ${$input.TemperatureInput.sensorData.turbineID}/temperature'``
  
 You must specify either ``propertyAlias`` or both ``assetId`` and ``propertyId`` to identify the target asset property in ITSW.
 For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the *Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-iotsitewise.html}
 */
export type IotSiteWise = {
  /**
   * The ID of the asset that has the specified property.
   */
  AssetId?: string;
  /**
   * A unique identifier for this entry. You can use the entry ID to track which data entry causes an error in case of failure. The default is a new unique identifier.
   */
  EntryId?: string;
  /**
   * The alias of the asset property.
   */
  PropertyAlias?: string;
  /**
   * The ID of the asset property.
   */
  PropertyId?: string;
  /**
   * The value to send to the asset property. This value contains timestamp, quality, and value (TQV) information.
   */
  PropertyValue?: AssetPropertyValue;
};
/**
 * Type definition for `AWS::IoTEvents::AlarmModel.IotTopicPublish`.
 * Information required to publish the MQTT message through the IoT message broker.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-iottopicpublish.html}
 */
export type IotTopicPublish = {
  /**
   * The MQTT topic of the message. You can use a string expression that includes variables (``$variable.<variable-name>``) and input values (``$input.<input-name>.<path-to-datum>``) as the topic string.
   * @minLength `1`
   * @maxLength `128`
   */
  MqttTopic: string;
  /**
   * You can configure the action payload when you publish a message to an IoTCore topic.
   */
  Payload?: Payload;
};
/**
 * Type definition for `AWS::IoTEvents::AlarmModel.Lambda`.
 * Calls a Lambda function, passing in information about the detector model instance and the event that triggered the action.
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
   * You can configure the action payload when you send a message to a Lambda function.
   */
  Payload?: Payload;
};
/**
 * Type definition for `AWS::IoTEvents::AlarmModel.Payload`.
 * Information needed to configure the payload.
 By default, ITE generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use ``contentExpression``.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-payload.html}
 */
export type Payload = {
  /**
   * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
   * @minLength `1`
   */
  ContentExpression: string;
  /**
   * The value of the payload type can be either ``STRING`` or ``JSON``.
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
   * The value on the left side of the comparison operator. You can specify an ITE input attribute as an input property.
   * @minLength `1`
   * @maxLength `512`
   */
  InputProperty: string;
  /**
   * The value on the right side of the comparison operator. You can enter a number or specify an ITE input attribute.
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
   * You can configure the action payload when you send a message as an Amazon SNS push notification.
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
 * Sends information about the detector model instance and the event that triggered the action to an Amazon SQS queue.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-sqs.html}
 */
export type Sqs = {
  /**
   * You can configure the action payload when you send a message to an Amazon SQS queue.
   */
  Payload?: Payload;
  /**
   * The URL of the SQS queue where the data is written.
   */
  QueueUrl: string;
  /**
   * Set this to TRUE if you want the data to be base-64 encoded before it is written to the queue. Otherwise, set this to FALSE.
   */
  UseBase64?: boolean;
};
/**
 * Type definition for `AWS::IoTEvents::AlarmModel.Tag`.
 * Metadata that can be used to manage the resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-tag.html}
 */
export type Tag = {
  /**
   * The tag's key.
   */
  Key: string;
  /**
   * The tag's value.
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::IoTEvents::AlarmModel`.
 * Represents an alarm model to monitor an ITE input attribute. You can use the alarm to get notified when the value is outside a specified range. For more information, see [Create an alarm model](https://docs.aws.amazon.com/iotevents/latest/developerguide/create-alarms.html) in the *Developer Guide*.
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
