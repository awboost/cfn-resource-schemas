import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Connect::Queue
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-queue.html}
 */
export type ConnectQueueProperties = {
  /**
   * The description of the queue.
   * @minLength `1`
   * @maxLength `250`
   */
  Description?: string;
  /**
   * The identifier for the hours of operation.
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]/‍*operating-hours/[-a-zA-Z0-9]*$`
   */
  HoursOfOperationArn: string;
  /**
   * The identifier of the Amazon Connect instance.
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*$`
   */
  InstanceArn: string;
  /**
   * The maximum number of contacts that can be in the queue before it is considered full.
   * @min `0`
   */
  MaxContacts?: number;
  /**
   * The name of the queue.
   * @minLength `1`
   * @maxLength `127`
   */
  Name: string;
  /**
   * The outbound caller ID name, number, and outbound whisper flow.
   */
  OutboundCallerConfig?: OutboundCallerConfig;
  /**
   * The quick connects available to agents who are working the queue.
   * @minLength `1`
   * @maxLength `50`
   */
  QuickConnectArns?: string[];
  /**
   * The status of the queue.
   */
  Status?: "ENABLED" | "DISABLED";
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Connect::Queue`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-queue.html#aws-resource-connect-queue-return-values}
 */
export type ConnectQueueAttributes = {
  /**
   * The Amazon Resource Name (ARN) for the queue.
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]/‍*queue/[-a-zA-Z0-9]*$`
   */
  QueueArn: string;
  /**
   * The type of queue.
   */
  Type: "STANDARD" | "AGENT";
};
/**
 * Type definition for `AWS::Connect::Queue.OutboundCallerConfig`.
 * The outbound caller ID name, number, and outbound whisper flow.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-queue-outboundcallerconfig.html}
 */
export type OutboundCallerConfig = {
  /**
   * The caller ID name.
   * @minLength `1`
   * @maxLength `255`
   */
  OutboundCallerIdName?: string;
  /**
   * The caller ID number.
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:phone-number/[-a-zA-Z0-9]*$`
   */
  OutboundCallerIdNumberArn?: string;
  /**
   * The outbound whisper flow to be used during an outbound call.
   * @minLength `1`
   * @maxLength `500`
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]/‍*contact-flow/[-a-zA-Z0-9]*$`
   */
  OutboundFlowArn?: string;
};
/**
 * Type definition for `AWS::Connect::Queue.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-queue-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!aws:)[a-zA-Z+-=._:/]+$`
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
 * Resource Type definition for AWS::Connect::Queue
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-queue.html}
 */
export class ConnectQueue extends $Resource<
  "AWS::Connect::Queue",
  ConnectQueueProperties,
  ConnectQueueAttributes
> {
  public static readonly Type = "AWS::Connect::Queue";
  constructor(
    logicalId: string,
    properties: ConnectQueueProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ConnectQueue.Type, properties, options);
  }
}
