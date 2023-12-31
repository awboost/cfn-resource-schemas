import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Kinesis::StreamConsumer
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesis-streamconsumer.html}
 */
export type KinesisStreamConsumerProperties = {
  ConsumerName: string;
  StreamARN: string;
};
/**
 * Attribute type definition for `AWS::Kinesis::StreamConsumer`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesis-streamconsumer.html#aws-resource-kinesis-streamconsumer-return-values}
 */
export type KinesisStreamConsumerAttributes = {
  ConsumerARN: string;
  ConsumerCreationTimestamp: string;
  ConsumerStatus: string;
  Id: string;
};
/**
 * Resource Type definition for AWS::Kinesis::StreamConsumer
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesis-streamconsumer.html}
 */
export class KinesisStreamConsumer extends $Resource<
  "AWS::Kinesis::StreamConsumer",
  KinesisStreamConsumerProperties,
  KinesisStreamConsumerAttributes
> {
  public static readonly Type = "AWS::Kinesis::StreamConsumer";
  constructor(
    logicalId: string,
    properties: KinesisStreamConsumerProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, KinesisStreamConsumer.Type, properties, options);
  }
}
