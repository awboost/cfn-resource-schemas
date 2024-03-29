import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::RDS::EventSubscription resource allows you to receive notifications for Amazon Relational Database Service events through the Amazon Simple Notification Service (Amazon SNS). For more information, see Using Amazon RDS Event Notification in the Amazon RDS User Guide.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-eventsubscription.html}
 */
export type RDSEventSubscriptionProperties = {
  /**
   * A Boolean value; set to true to activate the subscription, set to false to create the subscription but not active it.
   */
  Enabled?: boolean;
  /**
   * A list of event categories for a SourceType that you want to subscribe to. You can see a list of the categories for a given SourceType in the Events topic in the Amazon RDS User Guide or by using the DescribeEventCategories action.
   */
  EventCategories?: string[];
  /**
   * The Amazon Resource Name (ARN) of the SNS topic created for event notification. The ARN is created by Amazon SNS when you create a topic and subscribe to it.
   */
  SnsTopicArn: string;
  /**
   * The list of identifiers of the event sources for which events will be returned. If not specified, then all sources are included in the response. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it cannot end with a hyphen or contain two consecutive hyphens.
   */
  SourceIds?: string[];
  /**
   * The type of source that will be generating the events. For example, if you want to be notified of events generated by a DB instance, you would set this parameter to db-instance. if this value is not specified, all events are returned.
   */
  SourceType?: string;
  /**
   * The name of the subscription.
   * @maxLength `255`
   */
  SubscriptionName?: string;
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Type definition for `AWS::RDS::EventSubscription.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-eventsubscription-tag.html}
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
  Value?: string;
};
/**
 * The AWS::RDS::EventSubscription resource allows you to receive notifications for Amazon Relational Database Service events through the Amazon Simple Notification Service (Amazon SNS). For more information, see Using Amazon RDS Event Notification in the Amazon RDS User Guide.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-eventsubscription.html}
 */
export class RDSEventSubscription extends $Resource<
  "AWS::RDS::EventSubscription",
  RDSEventSubscriptionProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::RDS::EventSubscription";
  constructor(
    logicalId: string,
    properties: RDSEventSubscriptionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, RDSEventSubscription.Type, properties, options);
  }
}
