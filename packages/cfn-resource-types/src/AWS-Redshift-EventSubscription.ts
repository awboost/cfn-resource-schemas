import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The `AWS::Redshift::EventSubscription` resource creates an Amazon Redshift Event Subscription.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-eventsubscription.html}
 */
export type RedshiftEventSubscriptionProperties = {
  /**
   * A boolean value; set to true to activate the subscription, and set to false to create the subscription but not activate it.
   */
  Enabled?: boolean;
  /**
   * Specifies the Amazon Redshift event categories to be published by the event notification subscription.
   */
  EventCategories?: (
    | "configuration"
    | "management"
    | "monitoring"
    | "security"
    | "pending"
  )[];
  /**
   * Specifies the Amazon Redshift event severity to be published by the event notification subscription.
   */
  Severity?: "ERROR" | "INFO";
  /**
   * The Amazon Resource Name (ARN) of the Amazon SNS topic used to transmit the event notifications.
   */
  SnsTopicArn?: string;
  /**
   * A list of one or more identifiers of Amazon Redshift source objects.
   */
  SourceIds?: string[];
  /**
   * The type of source that will be generating the events.
   */
  SourceType?:
    | "cluster"
    | "cluster-parameter-group"
    | "cluster-security-group"
    | "cluster-snapshot"
    | "scheduled-action";
  /**
   * The name of the Amazon Redshift event notification subscription
   * @pattern `^(?=^[a-z][a-z0-9]*(-[a-z0-9]+)*$).{1,255}$`
   */
  SubscriptionName: string;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Redshift::EventSubscription`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-eventsubscription.html#aws-resource-redshift-eventsubscription-return-values}
 */
export type RedshiftEventSubscriptionAttributes = {
  /**
   * The name of the Amazon Redshift event notification subscription.
   */
  CustSubscriptionId: string;
  /**
   * The AWS account associated with the Amazon Redshift event notification subscription.
   */
  CustomerAwsId: string;
  /**
   * The list of Amazon Redshift event categories specified in the event notification subscription.
   */
  EventCategoriesList: string[];
  /**
   * A list of the sources that publish events to the Amazon Redshift event notification subscription.
   */
  SourceIdsList: string[];
  /**
   * The status of the Amazon Redshift event notification subscription.
   */
  Status: "active" | "no-permission" | "topic-not-exist";
  /**
   * The date and time the Amazon Redshift event notification subscription was created.
   */
  SubscriptionCreationTime: string;
};
/**
 * Type definition for `AWS::Redshift::EventSubscription.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-eventsubscription-tag.html}
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
 * The `AWS::Redshift::EventSubscription` resource creates an Amazon Redshift Event Subscription.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-eventsubscription.html}
 */
export class RedshiftEventSubscription extends $Resource<
  "AWS::Redshift::EventSubscription",
  RedshiftEventSubscriptionProperties,
  RedshiftEventSubscriptionAttributes
> {
  public static readonly Type = "AWS::Redshift::EventSubscription";
  constructor(
    logicalId: string,
    properties: RedshiftEventSubscriptionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, RedshiftEventSubscription.Type, properties, options);
  }
}
