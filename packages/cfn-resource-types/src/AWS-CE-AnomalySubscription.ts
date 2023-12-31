import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::CE::AnomalySubscription`.
 * AWS Cost Anomaly Detection leverages advanced Machine Learning technologies to identify anomalous spend and root causes, so you can quickly take action. Create subscription to be notified
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalysubscription.html}
 */
export type CEAnomalySubscriptionProperties = {
  /**
   * The frequency at which anomaly reports are sent over email.
   */
  Frequency: "DAILY" | "IMMEDIATE" | "WEEKLY";
  /**
   * A list of cost anomaly monitors.
   */
  MonitorArnList: string[];
  /**
   * Tags to assign to subscription.
   * @minLength `0`
   * @maxLength `200`
   */
  ResourceTags?: ResourceTag[];
  /**
   * A list of subscriber
   */
  Subscribers: Subscriber[];
  /**
   * The name of the subscription.
   * @minLength `0`
   * @maxLength `1024`
   * @pattern `[\S\s]*`
   */
  SubscriptionName: string;
  /**
   * The dollar value that triggers a notification if the threshold is exceeded.
   * @min `0`
   */
  Threshold?: number;
  /**
   * An Expression object in JSON String format used to specify the anomalies that you want to generate alerts for.
   */
  ThresholdExpression?: string;
};
/**
 * Attribute type definition for `AWS::CE::AnomalySubscription`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalysubscription.html#aws-resource-ce-anomalysubscription-return-values}
 */
export type CEAnomalySubscriptionAttributes = {
  /**
   * The accountId
   * @minLength `0`
   * @maxLength `1024`
   */
  AccountId: string;
  /**
   * Subscription ARN
   * @pattern `^arn:aws[-a-z0-9]*:[a-z0-9]+:[-a-z0-9]*:[0-9]{12}:[-a-zA-Z0-9/:_]+$`
   */
  SubscriptionArn: string;
};
/**
 * Type definition for `AWS::CE::AnomalySubscription.ResourceTag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ce-anomalysubscription-resourcetag.html}
 */
export type ResourceTag = {
  /**
   * The key name for the tag.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!aws:).*$`
   */
  Key: string;
  /**
   * The value for the tag.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::CE::AnomalySubscription.Subscriber`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ce-anomalysubscription-subscriber.html}
 */
export type Subscriber = {
  /**
   * @pattern `(^[a-zA-Z0-9.!#$%&'*+=?^_‘{|}~-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$)|(^arn:(aws[a-zA-Z-]*):sns:[a-zA-Z0-9-]+:[0-9]{12}:[a-zA-Z0-9_-]+(\.fifo)?$)`
   */
  Address: string;
  Type: "EMAIL" | "SNS";
};
/**
 * Resource type definition for `AWS::CE::AnomalySubscription`.
 * AWS Cost Anomaly Detection leverages advanced Machine Learning technologies to identify anomalous spend and root causes, so you can quickly take action. Create subscription to be notified
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalysubscription.html}
 */
export class CEAnomalySubscription extends $Resource<
  "AWS::CE::AnomalySubscription",
  CEAnomalySubscriptionProperties,
  CEAnomalySubscriptionAttributes
> {
  public static readonly Type = "AWS::CE::AnomalySubscription";
  constructor(
    logicalId: string,
    properties: CEAnomalySubscriptionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CEAnomalySubscription.Type, properties, options);
  }
}
