import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::Connect::QuickConnect
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-quickconnect.html}
 */
export type ConnectQuickConnectProperties = {
  /**
   * The description of the quick connect.
   * @minLength `1`
   * @maxLength `250`
   */
  Description?: string;
  /**
   * The identifier of the Amazon Connect instance.
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*$`
   */
  InstanceArn: string;
  /**
   * The name of the quick connect.
   * @minLength `1`
   * @maxLength `127`
   */
  Name: string;
  /**
   * Configuration settings for the quick connect.
   */
  QuickConnectConfig: QuickConnectConfig;
  /**
   * One or more tags.
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Connect::QuickConnect`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-quickconnect.html#aws-resource-connect-quickconnect-return-values}
 */
export type ConnectQuickConnectAttributes = {
  /**
   * The Amazon Resource Name (ARN) for the quick connect.
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]/‍*transfer-destination/[-a-zA-Z0-9]*$`
   */
  QuickConnectArn: string;
  /**
   * The type of quick connect. In the Amazon Connect console, when you create a quick connect, you are prompted to assign one of the following types: Agent (USER), External (PHONE_NUMBER), or Queue (QUEUE).
   */
  QuickConnectType: "PHONE_NUMBER" | "QUEUE" | "USER";
};
/**
 * Type definition for `AWS::Connect::QuickConnect.PhoneNumberQuickConnectConfig`.
 * The phone configuration. This is required only if QuickConnectType is PHONE_NUMBER.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-quickconnect-phonenumberquickconnectconfig.html}
 */
export type PhoneNumberQuickConnectConfig = {
  /**
   * The phone number in E.164 format.
   * @pattern `^\+[1-9]\d{1,14}$`
   */
  PhoneNumber: string;
};
/**
 * Type definition for `AWS::Connect::QuickConnect.QueueQuickConnectConfig`.
 * The queue configuration. This is required only if QuickConnectType is QUEUE.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-quickconnect-queuequickconnectconfig.html}
 */
export type QueueQuickConnectConfig = {
  /**
   * The identifier of the contact flow.
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]/‍*contact-flow/[-a-zA-Z0-9]*$`
   */
  ContactFlowArn: string;
  /**
   * The identifier for the queue.
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]/‍*queue/[-a-zA-Z0-9]*$`
   */
  QueueArn: string;
};
/**
 * Type definition for `AWS::Connect::QuickConnect.QuickConnectConfig`.
 * Configuration settings for the quick connect.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-quickconnect-quickconnectconfig.html}
 */
export type QuickConnectConfig = {
  /**
   * The phone configuration. This is required only if QuickConnectType is PHONE_NUMBER.
   */
  PhoneConfig?: PhoneNumberQuickConnectConfig;
  /**
   * The queue configuration. This is required only if QuickConnectType is QUEUE.
   */
  QueueConfig?: QueueQuickConnectConfig;
  /**
   * The type of quick connect. In the Amazon Connect console, when you create a quick connect, you are prompted to assign one of the following types: Agent (USER), External (PHONE_NUMBER), or Queue (QUEUE).
   */
  QuickConnectType: QuickConnectType;
  /**
   * The user configuration. This is required only if QuickConnectType is USER.
   */
  UserConfig?: UserQuickConnectConfig;
};
/**
 * Type definition for `AWS::Connect::QuickConnect.QuickConnectType`.
 * The type of quick connect. In the Amazon Connect console, when you create a quick connect, you are prompted to assign one of the following types: Agent (USER), External (PHONE_NUMBER), or Queue (QUEUE).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-quickconnect-quickconnecttype.html}
 */
export type QuickConnectType = "PHONE_NUMBER" | "QUEUE" | "USER";
/**
 * Type definition for `AWS::Connect::QuickConnect.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-quickconnect-tag.html}
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
   * The value for the tag. You can specify a value that is maximum of 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::Connect::QuickConnect.UserQuickConnectConfig`.
 * The user configuration. This is required only if QuickConnectType is USER.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-quickconnect-userquickconnectconfig.html}
 */
export type UserQuickConnectConfig = {
  /**
   * The identifier of the contact flow.
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]/‍*contact-flow/[-a-zA-Z0-9]*$`
   */
  ContactFlowArn: string;
  /**
   * The identifier of the user.
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]/‍*agent/[-a-zA-Z0-9]*$`
   */
  UserArn: string;
};
/**
 * Resource Type definition for AWS::Connect::QuickConnect
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-quickconnect.html}
 */
export class ConnectQuickConnect extends $Resource<
  "AWS::Connect::QuickConnect",
  ConnectQuickConnectProperties,
  ConnectQuickConnectAttributes
> {
  public static readonly Type = "AWS::Connect::QuickConnect";
  public static readonly AttributeNames = [
    "QuickConnectArn" as const,
    "QuickConnectType" as const,
  ];
  constructor(
    logicalId: string,
    properties: ConnectQuickConnectProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ConnectQuickConnect.Type,
      properties,
      ConnectQuickConnect.AttributeNames,
      options,
    );
  }
}
