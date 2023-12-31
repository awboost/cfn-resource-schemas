import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::SSMContacts::ContactChannel
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contactchannel.html}
 */
export type SSMContactsContactChannelProperties = {
  /**
   * The details that SSM Incident Manager uses when trying to engage the contact channel.
   */
  ChannelAddress?: string;
  /**
   * The device name. String of 6 to 50 alphabetical, numeric, dash, and underscore characters.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `[a-zA-Z 0-9_\-+'&amp;\uD83C-\uDBFF\uDC00-\uDFFF\u2000-\u3300]+`
   */
  ChannelName?: string;
  /**
   * Device type, which specify notification channel. Currently supported values: “SMS”, “VOICE”, “EMAIL”, “CHATBOT.
   */
  ChannelType?: "SMS" | "VOICE" | "EMAIL";
  /**
   * ARN of the contact resource
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `arn:[-\w+=\/,.@]+:[-\w+=\/,.@]+:[-\w+=\/,.@]*:[0-9]+:([\w+=\/,.@:-]+)*`
   */
  ContactId?: string;
  /**
   * If you want to activate the channel at a later time, you can choose to defer activation. SSM Incident Manager can't engage your contact channel until it has been activated.
   */
  DeferActivation?: boolean;
};
/**
 * Attribute type definition for `AWS::SSMContacts::ContactChannel`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contactchannel.html#aws-resource-ssmcontacts-contactchannel-return-values}
 */
export type SSMContactsContactChannelAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the engagement to a contact channel.
   */
  Arn: string;
};
/**
 * Resource Type definition for AWS::SSMContacts::ContactChannel
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contactchannel.html}
 */
export class SSMContactsContactChannel extends $Resource<
  "AWS::SSMContacts::ContactChannel",
  SSMContactsContactChannelProperties,
  SSMContactsContactChannelAttributes
> {
  public static readonly Type = "AWS::SSMContacts::ContactChannel";
  public static readonly AttributeNames = ["Arn" as const];
  constructor(
    logicalId: string,
    properties: SSMContactsContactChannelProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      SSMContactsContactChannel.Type,
      properties,
      SSMContactsContactChannel.AttributeNames,
      options,
    );
  }
}
