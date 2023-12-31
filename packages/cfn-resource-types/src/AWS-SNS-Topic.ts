import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::SNS::Topic
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-topic.html}
 */
export type SNSTopicProperties = {
  /**
   * The archive policy determines the number of days Amazon SNS retains messages. You can set a retention period from 1 to 365 days.
   */
  ArchivePolicy?: Record<string, any>;
  /**
     * Enables content-based deduplication for FIFO topics. By default, ContentBasedDeduplication is set to false. If you create a FIFO topic and this attribute is false, you must specify a value for the MessageDeduplicationId parameter for the Publish action.
    
    When you set ContentBasedDeduplication to true, Amazon SNS uses a SHA-256 hash to generate the MessageDeduplicationId using the body of the message (but not the attributes of the message).
    
    (Optional) To override the generated value, you can specify a value for the the MessageDeduplicationId parameter for the Publish action.
    
    
     */
  ContentBasedDeduplication?: boolean;
  /**
     * The body of the policy document you want to use for this topic.
    
    You can only add one policy per topic.
    
    The policy must be in JSON string format.
    
    Length Constraints: Maximum length of 30720
     */
  DataProtectionPolicy?: Record<string, any>;
  /**
   * The display name to use for an Amazon SNS topic with SMS subscriptions.
   */
  DisplayName?: string;
  /**
   * Set to true to create a FIFO topic.
   */
  FifoTopic?: boolean;
  /**
     * The ID of an AWS-managed customer master key (CMK) for Amazon SNS or a custom CMK. For more information, see Key Terms. For more examples, see KeyId in the AWS Key Management Service API Reference.
    
    This property applies only to [server-side-encryption](https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html).
     */
  KmsMasterKeyId?: string;
  /**
   * Version of the Amazon SNS signature used. If the SignatureVersion is 1, Signature is a Base64-encoded SHA1withRSA signature of the Message, MessageId, Type, Timestamp, and TopicArn values. If the SignatureVersion is 2, Signature is a Base64-encoded SHA256withRSA signature of the Message, MessageId, Type, Timestamp, and TopicArn values.
   */
  SignatureVersion?: string;
  /**
   * The SNS subscriptions (endpoints) for this topic.
   */
  Subscription?: Subscription[];
  Tags?: Tag[];
  /**
     * The name of the topic you want to create. Topic names must include only uppercase and lowercase ASCII letters, numbers, underscores, and hyphens, and must be between 1 and 256 characters long. FIFO topic names must end with .fifo.
    
    If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the topic name. For more information, see Name Type.
     */
  TopicName?: string;
  /**
   * Tracing mode of an Amazon SNS topic. By default TracingConfig is set to PassThrough, and the topic passes through the tracing header it receives from an SNS publisher to its subscriptions. If set to Active, SNS will vend X-Ray segment data to topic owner account if the sampled flag in the tracing header is true. Only supported on standard topics.
   */
  TracingConfig?: string;
};
/**
 * Attribute type definition for `AWS::SNS::Topic`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-topic.html#aws-resource-sns-topic-return-values}
 */
export type SNSTopicAttributes = {
  TopicArn: string;
};
/**
 * Type definition for `AWS::SNS::Topic.Subscription`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sns-topic-subscription.html}
 */
export type Subscription = {
  Endpoint: string;
  Protocol: string;
};
/**
 * Type definition for `AWS::SNS::Topic.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sns-topic-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, `_`, `.`, `/`, `=`, `+`, and `-`.
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 characters in length.
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::SNS::Topic
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-topic.html}
 */
export class SNSTopic extends $Resource<
  "AWS::SNS::Topic",
  SNSTopicProperties,
  SNSTopicAttributes
> {
  public static readonly Type = "AWS::SNS::Topic";
  public static readonly AttributeNames = ["TopicArn" as const];
  constructor(
    logicalId: string,
    properties: SNSTopicProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      SNSTopic.Type,
      properties,
      SNSTopic.AttributeNames,
      options,
    );
  }
}
