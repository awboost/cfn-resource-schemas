import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::SMSVOICE::ConfigurationSet
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-smsvoice-configurationset.html}
 */
export type SMSVOICEConfigurationSetProperties = {
  /**
   * The name to use for the configuration set.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[A-Za-z0-9_-]+$`
   */
  ConfigurationSetName?: string;
  /**
   * The default sender ID to set for the ConfigurationSet.
   * @pattern `^[A-Za-z0-9_-]+$`
   */
  DefaultSenderId?: string;
  /**
   * An event destination is a location where you send message events.
   * @maxLength `5`
   */
  EventDestinations?: EventDestination[];
  /**
   * Set to true to enable message feedback.
   */
  MessageFeedbackEnabled?: boolean;
  /**
   * The unique identifier for the protect configuration to be associated to the configuration set.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[A-Za-z0-9_:/-]+$`
   */
  ProtectConfigurationId?: string;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::SMSVOICE::ConfigurationSet`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-smsvoice-configurationset.html#aws-resource-smsvoice-configurationset-return-values}
 */
export type SMSVOICEConfigurationSetAttributes = {
  Arn: string;
};
/**
 * Type definition for `AWS::SMSVOICE::ConfigurationSet.CloudWatchLogsDestination`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-smsvoice-configurationset-cloudwatchlogsdestination.html}
 */
export type CloudWatchLogsDestination = {
  /**
   * The Amazon Resource Name (ARN) of an AWS Identity and Access Management role that is able to write event data to an Amazon CloudWatch destination.
   * @pattern `^arn:\S+$`
   */
  IamRoleArn: string;
  /**
   * The name of the Amazon CloudWatch log group that you want to record events in.
   * @pattern `^arn:\S+$`
   */
  LogGroupArn: string;
};
/**
 * Type definition for `AWS::SMSVOICE::ConfigurationSet.EventDestination`.
 * An event destination is a location where you send message events. The event options are Amazon CloudWatch, Amazon Data Firehose, or Amazon SNS. For example, when a message is delivered successfully, you can send information about that event to an event destination, or send notifications to endpoints that are subscribed to an Amazon SNS topic.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-smsvoice-configurationset-eventdestination.html}
 */
export type EventDestination = {
  /**
   * An object that contains IamRoleArn and LogGroupArn associated with an Amazon CloudWatch event destination.
   */
  CloudWatchLogsDestination?: CloudWatchLogsDestination;
  /**
   * When set to true events will be logged. By default this is set to true
   */
  Enabled: boolean;
  /**
   * The name that identifies the event destination.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[A-Za-z0-9_-]+$`
   */
  EventDestinationName: string;
  /**
   * An object that contains IamRoleArn and DeliveryStreamArn associated with an Amazon Kinesis Firehose event destination.
   */
  KinesisFirehoseDestination?: KinesisFirehoseDestination;
  /**
   * An array of event types that determine which events to log. If 'ALL' is used, then AWS End User Messaging SMS and Voice logs every event type.
   */
  MatchingEventTypes: string[];
  /**
   * An object that contains SNS TopicArn event destination.
   */
  SnsDestination?: SnsDestination;
};
/**
 * Type definition for `AWS::SMSVOICE::ConfigurationSet.KinesisFirehoseDestination`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-smsvoice-configurationset-kinesisfirehosedestination.html}
 */
export type KinesisFirehoseDestination = {
  /**
   * The Amazon Resource Name (ARN) of the delivery stream.
   * @pattern `^arn:\S+$`
   */
  DeliveryStreamArn: string;
  /**
   * The Amazon Resource Name (ARN) of an AWS Identity and Access Management role that is able to write event data to an Amazon CloudWatch destination.
   * @pattern `^arn:\S+$`
   */
  IamRoleArn: string;
};
/**
 * Type definition for `AWS::SMSVOICE::ConfigurationSet.SnsDestination`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-smsvoice-configurationset-snsdestination.html}
 */
export type SnsDestination = {
  /**
   * The Amazon Resource Name (ARN) of the Amazon SNS topic that you want to publish events to.
   * @pattern `^arn:\S+$`
   */
  TopicArn: string;
};
/**
 * Type definition for `AWS::SMSVOICE::ConfigurationSet.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-smsvoice-configurationset-tag.html}
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
 * Resource Type definition for AWS::SMSVOICE::ConfigurationSet
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-smsvoice-configurationset.html}
 */
export class SMSVOICEConfigurationSet extends $Resource<
  "AWS::SMSVOICE::ConfigurationSet",
  SMSVOICEConfigurationSetProperties,
  SMSVOICEConfigurationSetAttributes
> {
  public static readonly Type = "AWS::SMSVOICE::ConfigurationSet";
  constructor(
    logicalId: string,
    properties: SMSVOICEConfigurationSetProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SMSVOICEConfigurationSet.Type, properties, options);
  }
}
