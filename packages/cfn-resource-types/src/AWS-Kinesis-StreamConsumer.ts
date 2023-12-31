import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = [
    "ConsumerARN" as const,
    "ConsumerCreationTimestamp" as const,
    "ConsumerStatus" as const,
    "Id" as const,
  ];
  constructor(
    logicalId: string,
    properties: KinesisStreamConsumerProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      KinesisStreamConsumer.Type,
      properties,
      KinesisStreamConsumer.AttributeNames,
      options,
    );
  }
}
