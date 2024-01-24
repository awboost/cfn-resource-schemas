import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for AWS::IVSChat::Room.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivschat-room.html}
 */
export type IVSChatRoomProperties = {
  /**
   * Array of logging configuration identifiers attached to the room.
   * @minLength `0`
   * @maxLength `50`
   */
  LoggingConfigurationIdentifiers?: string[];
  /**
   * The maximum number of characters in a single message.
   * @min `1`
   * @max `500`
   */
  MaximumMessageLength?: number;
  /**
   * The maximum number of messages per second that can be sent to the room.
   * @min `1`
   * @max `10`
   */
  MaximumMessageRatePerSecond?: number;
  /**
   * Configuration information for optional review of messages.
   */
  MessageReviewHandler?: MessageReviewHandler;
  /**
   * The name of the room. The value does not need to be unique.
   * @minLength `0`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9-_]*$`
   */
  Name?: string;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::IVSChat::Room`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivschat-room.html#aws-resource-ivschat-room-return-values}
 */
export type IVSChatRoomAttributes = {
  /**
   * Room ARN is automatically generated on creation and assigned as the unique identifier.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^arn:aws:ivschat:[a-z0-9-]+:[0-9]+:room/[a-zA-Z0-9-]+$`
   */
  Arn: string;
  /**
   * The system-generated ID of the room.
   * @minLength `12`
   * @maxLength `12`
   * @pattern `^[a-zA-Z0-9]+$`
   */
  Id: string;
};
/**
 * Type definition for `AWS::IVSChat::Room.MessageReviewHandler`.
 * Configuration information for optional review of messages.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivschat-room-messagereviewhandler.html}
 */
export type MessageReviewHandler = {
  /**
   * Specifies the fallback behavior if the handler does not return a valid response, encounters an error, or times out.
   */
  FallbackResult?: "ALLOW" | "DENY";
  /**
   * Identifier of the message review handler.
   * @minLength `0`
   * @maxLength `170`
   * @pattern `^$|^arn:aws:lambda:[a-z0-9-]+:[0-9]{12}:function:.+`
   */
  Uri?: string;
};
/**
 * Type definition for `AWS::IVSChat::Room.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivschat-room-tag.html}
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
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for AWS::IVSChat::Room.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivschat-room.html}
 */
export class IVSChatRoom extends $Resource<
  "AWS::IVSChat::Room",
  IVSChatRoomProperties,
  IVSChatRoomAttributes
> {
  public static readonly Type = "AWS::IVSChat::Room";
  constructor(
    logicalId: string,
    properties: IVSChatRoomProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IVSChatRoom.Type, properties, options);
  }
}
