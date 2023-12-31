import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::IoT::TopicRuleDestination
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicruledestination.html}
 */
export type IoTTopicRuleDestinationProperties = {
  /**
   * HTTP URL destination properties.
   */
  HttpUrlProperties?: HttpUrlDestinationSummary;
  /**
   * The status of the TopicRuleDestination.
   */
  Status?: TopicRuleDestinationStatus;
  /**
   * VPC destination properties.
   */
  VpcProperties?: VpcDestinationProperties;
};
/**
 * Attribute type definition for `AWS::IoT::TopicRuleDestination`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicruledestination.html#aws-resource-iot-topicruledestination-return-values}
 */
export type IoTTopicRuleDestinationAttributes = {
  /**
   * Amazon Resource Name (ARN).
   */
  Arn: string;
  /**
   * The reasoning for the current status of the TopicRuleDestination.
   */
  StatusReason: string;
};
/**
 * Type definition for `AWS::IoT::TopicRuleDestination.HttpUrlDestinationSummary`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicruledestination-httpurldestinationsummary.html}
 */
export type HttpUrlDestinationSummary = {
  ConfirmationUrl?: string;
};
/**
 * Type definition for `AWS::IoT::TopicRuleDestination.TopicRuleDestinationStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicruledestination-topicruledestinationstatus.html}
 */
export type TopicRuleDestinationStatus = "ENABLED" | "IN_PROGRESS" | "DISABLED";
/**
 * Type definition for `AWS::IoT::TopicRuleDestination.VpcDestinationProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicruledestination-vpcdestinationproperties.html}
 */
export type VpcDestinationProperties = {
  RoleArn?: string;
  SecurityGroups?: string[];
  SubnetIds?: string[];
  VpcId?: string;
};
/**
 * Resource Type definition for AWS::IoT::TopicRuleDestination
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicruledestination.html}
 */
export class IoTTopicRuleDestination extends $Resource<
  "AWS::IoT::TopicRuleDestination",
  IoTTopicRuleDestinationProperties,
  IoTTopicRuleDestinationAttributes
> {
  public static readonly Type = "AWS::IoT::TopicRuleDestination";
  constructor(
    logicalId: string,
    properties: IoTTopicRuleDestinationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IoTTopicRuleDestination.Type, properties, options);
  }
}
