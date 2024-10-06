import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::IoTEvents::DetectorModel resource creates a detector model. You create a *detector model* (a model of your equipment or process) using *states*. For each state, you define conditional (Boolean) logic that evaluates the incoming inputs to detect significant events. When an event is detected, it can change the state or trigger custom-built or predefined actions using other AWS services. You can define additional events that trigger actions when entering or exiting a state and, optionally, when a condition is met. For more information, see [How to Use](https://docs.aws.amazon.com/iotevents/latest/developerguide/how-to-use-iotevents.html) in the *Developer Guide*.
  When you successfully update a detector model (using the ITE console, ITE API or CLI commands, or CFN) all detector instances created by the model are reset to their initial states. (The detector's ``state``, and the values of any variables and timers are reset.)
 When you successfully update a detector model (using the ITE console, ITE API or CLI commands, or CFN) the version number of the detector model is incremented. (A detector model with version number 1 before the update has version number 2 after the update succeeds.)
 If you attempt to update a detector model using CFN and the update does not succeed, the system may, in some cases, restore the original detector model. When this occurs, the detector model's version is incremented twice (for example, from version 1 to version 3) and the detector instances are reset.
 Also, be aware that if you attempt to update several detector models at once using CFN, some updates may succeed and others fail. In this case, the effects on each detector model's detector instances and version number depend on whether the update succeeded or failed, with the results as stated.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotevents-detectormodel.html}
 */
export type IoTEventsDetectorModelProperties = {
  /**
   * Information that defines how a detector operates.
   */
  DetectorModelDefinition: DetectorModelDefinition;
  /**
   * A brief description of the detector model.
   * @maxLength `1024`
   */
  DetectorModelDescription?: string;
  /**
   * The name of the detector model.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9_-]+$`
   */
  DetectorModelName?: string;
  /**
   * Information about the order in which events are evaluated and how actions are executed.
   */
  EvaluationMethod?: "BATCH" | "SERIAL";
  /**
     * The value used to identify a detector instance. When a device or system sends input, a new detector instance with a unique key value is created. ITE can continue to route input to its corresponding detector instance based on this identifying information.
     This parameter uses a JSON-path expression to select the attribute-value pair in the message payload that is used for identification. To route the message to the correct detector instance, the device must send a message payload that contains the same attribute-value.
     * @minLength `1`
     * @maxLength `128`
     * @pattern `^((`[\w\- ]+`)|([\w\-]+))(\.((`[\w\- ]+`)|([\w\-]+)))*$`
     */
  Key?: string;
  /**
   * The ARN of the role that grants permission to ITE to perform its operations.
   * @minLength `1`
   * @maxLength `2048`
   */
  RoleArn: string;
  /**
     * An array of key-value pairs to apply to this resource.
     For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
     */
  Tags?: Tag[];
};
/**
 * Type definition for `AWS::IoTEvents::DetectorModel.Action`.
 * An action to be performed when the ``condition`` is TRUE.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-action.html}
 */
export type Action = {
  /**
   * Information needed to clear the timer.
   */
  ClearTimer?: ClearTimer;
  /**
   * Writes to the DynamoDB table that you created. The default action payload contains all attribute-value pairs that have the information about the detector model instance and the event that triggered the action. You can customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html). One column of the DynamoDB table receives all attribute-value pairs in the payload that you specify. For more information, see [Actions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-event-actions.html) in *Developer Guide*.
   */
  DynamoDB?: DynamoDB;
  /**
   * Writes to the DynamoDB table that you created. The default action payload contains all attribute-value pairs that have the information about the detector model instance and the event that triggered the action. You can customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html). A separate column of the DynamoDB table receives one attribute-value pair in the payload that you specify. For more information, see [Actions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-event-actions.html) in *Developer Guide*.
   */
  DynamoDBv2?: DynamoDBv2;
  /**
   * Sends information about the detector model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream.
   */
  Firehose?: Firehose;
  /**
   * Sends ITE input, which passes information about the detector model instance and the event that triggered the action.
   */
  IotEvents?: IotEvents;
  /**
   * Sends information about the detector model instance and the event that triggered the action to an asset property in ITSW .
   */
  IotSiteWise?: IotSiteWise;
  /**
   * Publishes an MQTT message with the given topic to the IoT message broker.
   */
  IotTopicPublish?: IotTopicPublish;
  /**
   * Calls a Lambda function, passing in information about the detector model instance and the event that triggered the action.
   */
  Lambda?: Lambda;
  /**
   * Information needed to reset the timer.
   */
  ResetTimer?: ResetTimer;
  /**
   * Information needed to set the timer.
   */
  SetTimer?: SetTimer;
  /**
   * Sets a variable to a specified value.
   */
  SetVariable?: SetVariable;
  /**
   * Sends an Amazon SNS message.
   */
  Sns?: Sns;
  /**
   * Sends an Amazon SNS message.
   */
  Sqs?: Sqs;
};
/**
 * Type definition for `AWS::IoTEvents::DetectorModel.AssetPropertyTimestamp`.
 * A structure that contains timestamp information. For more information, see [TimeInNanos](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_TimeInNanos.html) in the *API Reference*.
 You must use expressions for all parameters in ``AssetPropertyTimestamp``. The expressions accept literals, operators, functions, references, and substitution templates.
  **Examples**
 +  For literal values, the expressions must contain single quotes. For example, the value for the ``timeInSeconds`` parameter can be ``'1586400675'``.
  +  For references, you must specify either variables or input values. For example, the value for the ``offsetInNanos`` parameter can be ``$variable.time``.
  +  For a substitution template, you must use ``${}``, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.
 In the following example, the value for the ``timeInSeconds`` parameter uses a substitution template.
  ``'${$input.TemperatureInput.sensorData.timestamp / 1000}'``
  
 For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the *Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-assetpropertytimestamp.html}
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
 * Type definition for `AWS::IoTEvents::DetectorModel.AssetPropertyValue`.
 * A structure that contains value information. For more information, see [AssetPropertyValue](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_AssetPropertyValue.html) in the *API Reference*.
 You must use expressions for all parameters in ``AssetPropertyValue``. The expressions accept literals, operators, functions, references, and substitution templates.
  **Examples**
 +  For literal values, the expressions must contain single quotes. For example, the value for the ``quality`` parameter can be ``'GOOD'``.
  +  For references, you must specify either variables or input values. For example, the value for the ``quality`` parameter can be ``$input.TemperatureInput.sensorData.quality``.
  
 For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the *Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-assetpropertyvalue.html}
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
 * Type definition for `AWS::IoTEvents::DetectorModel.AssetPropertyVariant`.
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
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-assetpropertyvariant.html}
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
 * Type definition for `AWS::IoTEvents::DetectorModel.ClearTimer`.
 * Information needed to clear the timer.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-cleartimer.html}
 */
export type ClearTimer = {
  /**
   * The name of the timer to clear.
   * @minLength `1`
   * @maxLength `128`
   */
  TimerName: string;
};
/**
 * Type definition for `AWS::IoTEvents::DetectorModel.DetectorModelDefinition`.
 * Information that defines how a detector operates.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-detectormodeldefinition.html}
 */
export type DetectorModelDefinition = {
  /**
   * The state that is entered at the creation of each detector (instance).
   * @minLength `1`
   * @maxLength `128`
   */
  InitialStateName: string;
  /**
   * Information about the states of the detector.
   * @minLength `1`
   */
  States: State[];
};
/**
 * Type definition for `AWS::IoTEvents::DetectorModel.DynamoDB`.
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
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-dynamodb.html}
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
 * Type definition for `AWS::IoTEvents::DetectorModel.DynamoDBv2`.
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
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-dynamodbv2.html}
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
 * Type definition for `AWS::IoTEvents::DetectorModel.Event`.
 * Specifies the ``actions`` to be performed when the ``condition`` evaluates to TRUE.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-event.html}
 */
export type Event = {
  /**
   * The actions to be performed.
   */
  Actions?: Action[];
  /**
   * Optional. The Boolean expression that, when TRUE, causes the ``actions`` to be performed. If not present, the actions are performed (=TRUE). If the expression result is not a Boolean value, the actions are not performed (=FALSE).
   * @maxLength `512`
   */
  Condition?: string;
  /**
   * The name of the event.
   * @maxLength `128`
   */
  EventName: string;
};
/**
 * Type definition for `AWS::IoTEvents::DetectorModel.Firehose`.
 * Sends information about the detector model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-firehose.html}
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
 * Type definition for `AWS::IoTEvents::DetectorModel.IotEvents`.
 * Sends an ITE input, passing in information about the detector model instance and the event that triggered the action.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-iotevents.html}
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
 * Type definition for `AWS::IoTEvents::DetectorModel.IotSiteWise`.
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
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-iotsitewise.html}
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
  PropertyValue: AssetPropertyValue;
};
/**
 * Type definition for `AWS::IoTEvents::DetectorModel.IotTopicPublish`.
 * Information required to publish the MQTT message through the IoT message broker.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-iottopicpublish.html}
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
 * Type definition for `AWS::IoTEvents::DetectorModel.Lambda`.
 * Calls a Lambda function, passing in information about the detector model instance and the event that triggered the action.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-lambda.html}
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
 * Type definition for `AWS::IoTEvents::DetectorModel.OnEnter`.
 * When entering this state, perform these ``actions`` if the ``condition`` is TRUE.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-onenter.html}
 */
export type OnEnter = {
  /**
   * Specifies the actions that are performed when the state is entered and the ``condition`` is ``TRUE``.
   */
  Events?: Event[];
};
/**
 * Type definition for `AWS::IoTEvents::DetectorModel.OnExit`.
 * When exiting this state, perform these ``actions`` if the specified ``condition`` is ``TRUE``.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-onexit.html}
 */
export type OnExit = {
  /**
   * Specifies the ``actions`` that are performed when the state is exited and the ``condition`` is ``TRUE``.
   */
  Events?: Event[];
};
/**
 * Type definition for `AWS::IoTEvents::DetectorModel.OnInput`.
 * Specifies the actions performed when the ``condition`` evaluates to TRUE.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-oninput.html}
 */
export type OnInput = {
  /**
   * Specifies the actions performed when the ``condition`` evaluates to TRUE.
   */
  Events?: Event[];
  /**
   * Specifies the actions performed, and the next state entered, when a ``condition`` evaluates to TRUE.
   */
  TransitionEvents?: TransitionEvent[];
};
/**
 * Type definition for `AWS::IoTEvents::DetectorModel.Payload`.
 * Information needed to configure the payload.
 By default, ITE generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use ``contentExpression``.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-payload.html}
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
 * Type definition for `AWS::IoTEvents::DetectorModel.ResetTimer`.
 * Information required to reset the timer. The timer is reset to the previously evaluated result of the duration. The duration expression isn't reevaluated when you reset the timer.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-resettimer.html}
 */
export type ResetTimer = {
  /**
   * The name of the timer to reset.
   * @minLength `1`
   * @maxLength `128`
   */
  TimerName: string;
};
/**
 * Type definition for `AWS::IoTEvents::DetectorModel.SetTimer`.
 * Information needed to set the timer.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-settimer.html}
 */
export type SetTimer = {
  /**
   * The duration of the timer, in seconds. You can use a string expression that includes numbers, variables (``$variable.<variable-name>``), and input values (``$input.<input-name>.<path-to-datum>``) as the duration. The range of the duration is 1-31622400 seconds. To ensure accuracy, the minimum duration is 60 seconds. The evaluated result of the duration is rounded down to the nearest whole number.
   * @minLength `1`
   * @maxLength `1024`
   */
  DurationExpression?: string;
  /**
   * The number of seconds until the timer expires. The minimum value is 60 seconds to ensure accuracy. The maximum value is 31622400 seconds.
   * @min `60`
   * @max `31622400`
   */
  Seconds?: number;
  /**
   * The name of the timer.
   * @minLength `1`
   * @maxLength `128`
   */
  TimerName: string;
};
/**
 * Type definition for `AWS::IoTEvents::DetectorModel.SetVariable`.
 * Information about the variable and its new value.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-setvariable.html}
 */
export type SetVariable = {
  /**
   * The new value of the variable.
   * @minLength `1`
   * @maxLength `1024`
   */
  Value: string;
  /**
   * The name of the variable.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z][a-zA-Z0-9_]*$`
   */
  VariableName: string;
};
/**
 * Type definition for `AWS::IoTEvents::DetectorModel.Sns`.
 * Information required to publish the Amazon SNS message.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-sns.html}
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
 * Type definition for `AWS::IoTEvents::DetectorModel.Sqs`.
 * Sends information about the detector model instance and the event that triggered the action to an Amazon SQS queue.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-sqs.html}
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
 * Type definition for `AWS::IoTEvents::DetectorModel.State`.
 * Information that defines a state of a detector.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-state.html}
 */
export type State = {
  /**
   * When entering this state, perform these ``actions`` if the ``condition`` is TRUE.
   */
  OnEnter?: OnEnter;
  /**
   * When exiting this state, perform these ``actions`` if the specified ``condition`` is ``TRUE``.
   */
  OnExit?: OnExit;
  /**
   * When an input is received and the ``condition`` is TRUE, perform the specified ``actions``.
   */
  OnInput?: OnInput;
  /**
   * The name of the state.
   * @minLength `1`
   * @maxLength `128`
   */
  StateName: string;
};
/**
 * Type definition for `AWS::IoTEvents::DetectorModel.Tag`.
 * Metadata that can be used to manage the resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-tag.html}
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
 * Type definition for `AWS::IoTEvents::DetectorModel.TransitionEvent`.
 * Specifies the actions performed and the next state entered when a ``condition`` evaluates to TRUE.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-transitionevent.html}
 */
export type TransitionEvent = {
  /**
   * The actions to be performed.
   */
  Actions?: Action[];
  /**
   * Required. A Boolean expression that when TRUE causes the actions to be performed and the ``nextState`` to be entered.
   * @maxLength `512`
   */
  Condition: string;
  /**
   * The name of the transition event.
   * @minLength `1`
   * @maxLength `128`
   */
  EventName: string;
  /**
   * The next state to enter.
   * @minLength `1`
   * @maxLength `128`
   */
  NextState: string;
};
/**
 * The AWS::IoTEvents::DetectorModel resource creates a detector model. You create a *detector model* (a model of your equipment or process) using *states*. For each state, you define conditional (Boolean) logic that evaluates the incoming inputs to detect significant events. When an event is detected, it can change the state or trigger custom-built or predefined actions using other AWS services. You can define additional events that trigger actions when entering or exiting a state and, optionally, when a condition is met. For more information, see [How to Use](https://docs.aws.amazon.com/iotevents/latest/developerguide/how-to-use-iotevents.html) in the *Developer Guide*.
  When you successfully update a detector model (using the ITE console, ITE API or CLI commands, or CFN) all detector instances created by the model are reset to their initial states. (The detector's ``state``, and the values of any variables and timers are reset.)
 When you successfully update a detector model (using the ITE console, ITE API or CLI commands, or CFN) the version number of the detector model is incremented. (A detector model with version number 1 before the update has version number 2 after the update succeeds.)
 If you attempt to update a detector model using CFN and the update does not succeed, the system may, in some cases, restore the original detector model. When this occurs, the detector model's version is incremented twice (for example, from version 1 to version 3) and the detector instances are reset.
 Also, be aware that if you attempt to update several detector models at once using CFN, some updates may succeed and others fail. In this case, the effects on each detector model's detector instances and version number depend on whether the update succeeded or failed, with the results as stated.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotevents-detectormodel.html}
 */
export class IoTEventsDetectorModel extends $Resource<
  "AWS::IoTEvents::DetectorModel",
  IoTEventsDetectorModelProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::IoTEvents::DetectorModel";
  constructor(
    logicalId: string,
    properties: IoTEventsDetectorModelProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IoTEventsDetectorModel.Type, properties, options);
  }
}
