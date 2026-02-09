import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::MSK::Topic
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-topic.html}
 */
export type MSKTopicProperties = {
  /**
   * The Amazon Resource Name (ARN) of the MSK cluster
   */
  ClusterArn: string;
  /**
   * Base64 encoded configuration properties of the topic
   */
  Configs?: string;
  /**
   * The number of partitions for the topic
   * @min `1`
   */
  PartitionCount: number;
  /**
   * The replication factor for the topic
   * @min `1`
   */
  ReplicationFactor: number;
  /**
   * The name of the topic
   */
  TopicName: string;
};
/**
 * Attribute type definition for `AWS::MSK::Topic`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-topic.html#aws-resource-msk-topic-return-values}
 */
export type MSKTopicAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the topic
   */
  TopicArn: string;
};
/**
 * Resource Type definition for AWS::MSK::Topic
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-topic.html}
 */
export class MSKTopic extends $Resource<
  "AWS::MSK::Topic",
  MSKTopicProperties,
  MSKTopicAttributes
> {
  public static readonly Type = "AWS::MSK::Topic";
  constructor(
    logicalId: string,
    properties: MSKTopicProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, MSKTopic.Type, properties, options);
  }
}
