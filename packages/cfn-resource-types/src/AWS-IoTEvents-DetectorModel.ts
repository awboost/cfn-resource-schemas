import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::IoTEvents::DetectorModel resource creates a detector model. You create a *detector model* (a model of your equipment or process) using *states*. For each state, you define conditional (Boolean) logic that evaluates the incoming inputs to detect significant events. When an event is detected, it can change the state or trigger custom-built or predefined actions using other AWS services. You can define additional events that trigger actions when entering or exiting a state and, optionally, when a condition is met. For more information, see [How to Use AWS IoT Events](https://docs.aws.amazon.com/iotevents/latest/developerguide/how-to-use-iotevents.html) in the *AWS IoT Events Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotevents-detectormodel.html}
 */
export type IoTEventsDetectorModelProperties = {
  /**
   * Information that defines how a detector operates.
   */
  DetectorModelDefinition: DetectorModelDefinition;
  /**
   * A brief description of the detector model.
   * @maxLength `128`
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
     * The value used to identify a detector instance. When a device or system sends input, a new detector instance with a unique key value is created. AWS IoT Events can continue to route input to its corresponding detector instance based on this identifying information.
    
    This parameter uses a JSON-path expression to select the attribute-value pair in the message payload that is used for identification. To route the message to the correct detector instance, the device must send a message payload that contains the same attribute-value.
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
     * An array of key-value pairs to apply to this resource.
    
    For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
     */
  Tags?: Tag[];
};
/**
 * Type definition for `AWS::IoTEvents::DetectorModel.Action`.
 * The actions to be performed.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-action.html}
 */
export type Action = {
  /**
   * Information needed to clear the timer.
   */
  ClearTimer?: ClearTimer;
  /**
   * Writes to the DynamoDB table that you created. The default action payload contains all attribute-value pairs that have the information about the detector model instance and the event that triggered the action. You can also customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html). One column of the DynamoDB table receives all attribute-value pairs in the payload that you specify. For more information, see [Actions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-event-actions.html) in *AWS IoT Events Developer Guide*.
   */
  DynamoDB?: DynamoDB;
  /**
     * Defines an action to write to the Amazon DynamoDB table that you created. The default action payload contains all attribute-value pairs that have the information about the detector model instance and the event that triggered the action. You can also customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html). A separate column of the DynamoDB table receives one attribute-value pair in the payload that you specify.
    
    You can use expressions for parameters that are strings. For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the *AWS IoT Events Developer Guide*.
     */
  DynamoDBv2?: DynamoDBv2;
  /**
   * Sends information about the detector model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream.
   */
  Firehose?: Firehose;
  /**
   * Sends an AWS IoT Events input, passing in information about the detector model instance and the event that triggered the action.
   */
  IotEvents?: IotEvents;
  /**
   * Sends information about the detector model instance and the event that triggered the action to a specified asset property in AWS IoT SiteWise.
   */
  IotSiteWise?: IotSiteWise;
  /**
   * Information required to publish the MQTT message through the AWS IoT message broker.
   */
  IotTopicPublish?: IotTopicPublish;
  Lambda?: Lambda;
  /**
   * Information required to reset the timer. The timer is reset to the previously evaluated result of the duration. The duration expression isn't reevaluated when you reset the timer.
   */
  ResetTimer?: ResetTimer;
  /**
   * Information needed to set the timer.
   */
  SetTimer?: SetTimer;
  /**
   * Information about the variable and its new value.
   */
  SetVariable?: SetVariable;
  /**
   * Information required to publish the Amazon SNS message.
   */
  Sns?: Sns;
  Sqs?: Sqs;
};
/**
 * Type definition for `AWS::IoTEvents::DetectorModel.AssetPropertyTimestamp`.
 * A structure that contains timestamp information. For more information, see [TimeInNanos](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_TimeInNanos.html) in the *AWS IoT SiteWise API Reference*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-assetpropertytimestamp.html}
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
 * Type definition for `AWS::IoTEvents::DetectorModel.AssetPropertyValue`.
 * A structure that contains value information. For more information, see [AssetPropertyValue](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_AssetPropertyValue.html) in the *AWS IoT SiteWise API Reference*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-assetpropertyvalue.html}
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
 * Type definition for `AWS::IoTEvents::DetectorModel.AssetPropertyVariant`.
 * A structure that contains an asset property value. For more information, see [Variant](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_Variant.html) in the *AWS IoT SiteWise API Reference*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-assetpropertyvariant.html}
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
 * Type definition for `AWS::IoTEvents::DetectorModel.ClearTimer`.
 * Information needed to clear the timer.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-cleartimer.html}
 */
export type ClearTimer = {
  /**
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
 * Writes to the DynamoDB table that you created. The default action payload contains all attribute-value pairs that have the information about the detector model instance and the event that triggered the action. You can also customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html). One column of the DynamoDB table receives all attribute-value pairs in the payload that you specify. For more information, see [Actions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-event-actions.html) in *AWS IoT Events Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-dynamodb.html}
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
    
    By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.
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
 * Type definition for `AWS::IoTEvents::DetectorModel.DynamoDBv2`.
 * Defines an action to write to the Amazon DynamoDB table that you created. The default action payload contains all attribute-value pairs that have the information about the detector model instance and the event that triggered the action. You can also customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html). A separate column of the DynamoDB table receives one attribute-value pair in the payload that you specify.

You can use expressions for parameters that are strings. For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the *AWS IoT Events Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-dynamodbv2.html}
 */
export type DynamoDBv2 = {
  /**
     * Information needed to configure the payload.
    
    By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.
     */
  Payload?: Payload;
  /**
   * The name of the DynamoDB table.
   */
  TableName: string;
};
/**
 * Type definition for `AWS::IoTEvents::DetectorModel.Event`.
 * Specifies the `actions` to be performed when the `condition` evaluates to `TRUE`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-event.html}
 */
export type Event = {
  /**
   * The actions to be performed.
   */
  Actions?: Action[];
  /**
   * The Boolean expression that, when `TRUE`, causes the `actions` to be performed. If not present, the `actions` are performed (=`TRUE`). If the expression result is not a `Boolean` value, the `actions` are not performed (=`FALSE`).
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
     * Information needed to configure the payload.
    
    By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.
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
 * Sends an AWS IoT Events input, passing in information about the detector model instance and the event that triggered the action.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-iotevents.html}
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
    
    By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.
     */
  Payload?: Payload;
};
/**
 * Type definition for `AWS::IoTEvents::DetectorModel.IotSiteWise`.
 * Sends information about the detector model instance and the event that triggered the action to a specified asset property in AWS IoT SiteWise.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-iotsitewise.html}
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
  PropertyValue: AssetPropertyValue;
};
/**
 * Type definition for `AWS::IoTEvents::DetectorModel.IotTopicPublish`.
 * Information required to publish the MQTT message through the AWS IoT message broker.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-iottopicpublish.html}
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
    
    By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.
     */
  Payload?: Payload;
};
/**
 * Type definition for `AWS::IoTEvents::DetectorModel.Lambda`.
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
     * Information needed to configure the payload.
    
    By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.
     */
  Payload?: Payload;
};
/**
 * Type definition for `AWS::IoTEvents::DetectorModel.OnEnter`.
 * When entering this state, perform these `actions` if the `condition` is `TRUE`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-onenter.html}
 */
export type OnEnter = {
  /**
   * Specifies the `actions` that are performed when the state is entered and the `condition` is `TRUE`.
   */
  Events?: Event[];
};
/**
 * Type definition for `AWS::IoTEvents::DetectorModel.OnExit`.
 * When exiting this state, perform these `actions` if the specified `condition` is `TRUE`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-onexit.html}
 */
export type OnExit = {
  /**
   * Specifies the `actions` that are performed when the state is exited and the `condition` is `TRUE`.
   */
  Events?: Event[];
};
/**
 * Type definition for `AWS::IoTEvents::DetectorModel.OnInput`.
 * When an input is received and the `condition` is `TRUE`, perform the specified `actions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-oninput.html}
 */
export type OnInput = {
  /**
   * Specifies the `actions` performed when the `condition` evaluates to `TRUE`.
   */
  Events?: Event[];
  /**
   * Specifies the `actions` performed, and the next `state` entered, when a `condition` evaluates to `TRUE`.
   */
  TransitionEvents?: TransitionEvent[];
};
/**
 * Type definition for `AWS::IoTEvents::DetectorModel.Payload`.
 * Information needed to configure the payload.

By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-payload.html}
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
   * The duration of the timer, in seconds. You can use a string expression that includes numbers, variables (`$variable.<variable-name>`), and input values (`$input.<input-name>.<path-to-datum>`) as the duration. The range of the duration is `1-31622400` seconds. To ensure accuracy, the minimum duration is `60` seconds. The evaluated result of the duration is rounded down to the nearest whole number.
   * @minLength `1`
   * @maxLength `1024`
   */
  DurationExpression?: string;
  /**
   * The number of seconds until the timer expires. The minimum value is `60` seconds to ensure accuracy. The maximum value is `31622400` seconds.
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
     * Information needed to configure the payload.
    
    By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.
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
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-sqs.html}
 */
export type Sqs = {
  /**
     * Information needed to configure the payload.
    
    By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.
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
 * Type definition for `AWS::IoTEvents::DetectorModel.State`.
 * Information that defines a state of a detector.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-state.html}
 */
export type State = {
  /**
   * When entering this state, perform these `actions` if the `condition` is `TRUE`.
   */
  OnEnter?: OnEnter;
  /**
   * When exiting this state, perform these `actions` if the specified `condition` is `TRUE`.
   */
  OnExit?: OnExit;
  /**
   * When an input is received and the `condition` is `TRUE`, perform the specified `actions`.
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
 * Tags to be applied to Input.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-tag.html}
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
 * Type definition for `AWS::IoTEvents::DetectorModel.TransitionEvent`.
 * Specifies the `actions `performed and the next `state` entered when a `condition` evaluates to `TRUE`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-transitionevent.html}
 */
export type TransitionEvent = {
  /**
   * The actions to be performed.
   */
  Actions?: Action[];
  /**
   * A Boolean expression that when `TRUE` causes the `actions` to be performed and the `nextState` to be entered.
   * @maxLength `512`
   */
  Condition: string;
  /**
   * The name of the event.
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
 * The AWS::IoTEvents::DetectorModel resource creates a detector model. You create a *detector model* (a model of your equipment or process) using *states*. For each state, you define conditional (Boolean) logic that evaluates the incoming inputs to detect significant events. When an event is detected, it can change the state or trigger custom-built or predefined actions using other AWS services. You can define additional events that trigger actions when entering or exiting a state and, optionally, when a condition is met. For more information, see [How to Use AWS IoT Events](https://docs.aws.amazon.com/iotevents/latest/developerguide/how-to-use-iotevents.html) in the *AWS IoT Events Developer Guide*.
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
