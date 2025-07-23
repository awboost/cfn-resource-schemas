import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::Wisdom::MessageTemplate Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html}
 */
export type WisdomMessageTemplateProperties = {
  /**
   * The channel subtype this message template applies to.
   */
  ChannelSubtype: ChannelSubtype;
  /**
   * The content of the message template.
   */
  Content: Content;
  /**
   * An object that specifies the default values to use for variables in the message template. This object contains different categories of key-value pairs. Each key defines a variable or placeholder in the message template. The corresponding value defines the default value for that variable.
   */
  DefaultAttributes?: MessageTemplateAttributes;
  /**
   * The description of the message template.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[a-zA-Z0-9\\s_.,-]+`
   */
  Description?: string;
  /**
   * The configuration information of the user groups that the message template is accessible to.
   */
  GroupingConfiguration?: GroupingConfiguration;
  /**
   * The Amazon Resource Name (ARN) of the knowledge base to which the message template belongs.
   * @pattern `^arn:[a-z-]*?:wisdom:[a-z0-9-]*?:[0-9]{12}:[a-z-]*?/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(?:/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})?$`
   */
  KnowledgeBaseArn: string;
  /**
   * The language code value for the language in which the message template is written. The supported language codes include de_DE, en_US, es_ES, fr_FR, id_ID, it_IT, ja_JP, ko_KR, pt_BR, zh_CN, zh_TW
   * @minLength `2`
   * @maxLength `5`
   */
  Language?: string;
  /**
   * List of message template attachments
   */
  MessageTemplateAttachments?: MessageTemplateAttachment[];
  /**
   * The name of the message template.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[a-zA-Z0-9\\s_.,-]+`
   */
  Name: string;
  /**
   * The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Wisdom::MessageTemplate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#aws-resource-wisdom-messagetemplate-return-values}
 */
export type WisdomMessageTemplateAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the message template.
   * @pattern `^arn:[a-z-]*?:wisdom:[a-z0-9-]*?:[0-9]{12}:[a-z-]*?/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(?:/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})?$`
   */
  MessageTemplateArn: string;
  /**
   * List of message template attachments
   */
  MessageTemplateAttachments: {
    /**
     * @minLength `1`
     */
    AttachmentId: string;
  }[];
  /**
   * The content SHA256 of the message template.
   * @minLength `1`
   * @maxLength `64`
   */
  MessageTemplateContentSha256: string;
  /**
   * The unique identifier of the message template.
   * @pattern `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$`
   */
  MessageTemplateId: string;
};
/**
 * Type definition for `AWS::Wisdom::MessageTemplate.AgentAttributes`.
 * The agent attributes that are used with the message template.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-messagetemplate-agentattributes.html}
 */
export type AgentAttributes = {
  /**
   * The agent’s first name as entered in their Amazon Connect user account.
   * @minLength `1`
   * @maxLength `32767`
   */
  FirstName?: string;
  /**
   * The agent’s last name as entered in their Amazon Connect user account.
   * @minLength `1`
   * @maxLength `32767`
   */
  LastName?: string;
};
/**
 * Type definition for `AWS::Wisdom::MessageTemplate.ChannelSubtype`.
 * The channel subtype this message template applies to.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-messagetemplate-channelsubtype.html}
 */
export type ChannelSubtype = "EMAIL" | "SMS";
/**
 * Type definition for `AWS::Wisdom::MessageTemplate.Content`.
 * The content of the message template.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-messagetemplate-content.html}
 */
export type Content = {
  /**
   * The content of message template that applies to email channel subtype.
   */
  EmailMessageTemplateContent?: EmailMessageTemplateContent;
  /**
   * The content of message template that applies to SMS channel subtype.
   */
  SmsMessageTemplateContent?: SmsMessageTemplateContent;
};
/**
 * Type definition for `AWS::Wisdom::MessageTemplate.CustomAttributes`.
 * The custom attributes that are used with the message template.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-messagetemplate-customattributes.html}
 */
export type CustomAttributes = Record<string, string>;
/**
 * Type definition for `AWS::Wisdom::MessageTemplate.CustomerProfileAttributes`.
 * The customer profile attributes that are used with the message template.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-messagetemplate-customerprofileattributes.html}
 */
export type CustomerProfileAttributes = {
  /**
   * A unique account number that you have given to the customer.
   * @minLength `1`
   * @maxLength `32767`
   */
  AccountNumber?: string;
  /**
   * Any additional information relevant to the customer's profile.
   * @minLength `1`
   * @maxLength `32767`
   */
  AdditionalInformation?: string;
  /**
   * The first line of a customer address.
   * @minLength `1`
   * @maxLength `32767`
   */
  Address1?: string;
  /**
   * The second line of a customer address.
   * @minLength `1`
   * @maxLength `32767`
   */
  Address2?: string;
  /**
   * The third line of a customer address.
   * @minLength `1`
   * @maxLength `32767`
   */
  Address3?: string;
  /**
   * The fourth line of a customer address.
   * @minLength `1`
   * @maxLength `32767`
   */
  Address4?: string;
  /**
   * The first line of a customer’s billing address.
   * @minLength `1`
   * @maxLength `32767`
   */
  BillingAddress1?: string;
  /**
   * The second line of a customer’s billing address.
   * @minLength `1`
   * @maxLength `32767`
   */
  BillingAddress2?: string;
  /**
   * The third line of a customer’s billing address.
   * @minLength `1`
   * @maxLength `32767`
   */
  BillingAddress3?: string;
  /**
   * The fourth line of a customer’s billing address.
   * @minLength `1`
   * @maxLength `32767`
   */
  BillingAddress4?: string;
  /**
   * The city of a customer’s billing address.
   * @minLength `1`
   * @maxLength `32767`
   */
  BillingCity?: string;
  /**
   * The country of a customer’s billing address.
   * @minLength `1`
   * @maxLength `32767`
   */
  BillingCountry?: string;
  /**
   * The county of a customer’s billing address.
   * @minLength `1`
   * @maxLength `32767`
   */
  BillingCounty?: string;
  /**
   * The postal code of a customer’s billing address.
   * @minLength `1`
   * @maxLength `32767`
   */
  BillingPostalCode?: string;
  /**
   * The province of a customer’s billing address.
   * @minLength `1`
   * @maxLength `32767`
   */
  BillingProvince?: string;
  /**
   * The state of a customer’s billing address.
   * @minLength `1`
   * @maxLength `32767`
   */
  BillingState?: string;
  /**
   * The customer's birth date.
   * @minLength `1`
   * @maxLength `32767`
   */
  BirthDate?: string;
  /**
   * The customer's business email address.
   * @minLength `1`
   * @maxLength `32767`
   */
  BusinessEmailAddress?: string;
  /**
   * The name of the customer's business.
   * @minLength `1`
   * @maxLength `32767`
   */
  BusinessName?: string;
  /**
   * The customer's business phone number.
   * @minLength `1`
   * @maxLength `32767`
   */
  BusinessPhoneNumber?: string;
  /**
   * The city in which a customer lives.
   * @minLength `1`
   * @maxLength `32767`
   */
  City?: string;
  /**
   * The country in which a customer lives.
   * @minLength `1`
   * @maxLength `32767`
   */
  Country?: string;
  /**
   * The county in which a customer lives.
   * @minLength `1`
   * @maxLength `32767`
   */
  County?: string;
  /**
   * The custom attributes that are used with the message template.
   */
  Custom?: CustomAttributes;
  /**
   * The customer's email address, which has not been specified as a personal or business address.
   * @minLength `1`
   * @maxLength `32767`
   */
  EmailAddress?: string;
  /**
   * The customer's first name.
   * @minLength `1`
   * @maxLength `32767`
   */
  FirstName?: string;
  /**
   * The customer's gender.
   * @minLength `1`
   * @maxLength `32767`
   */
  Gender?: string;
  /**
   * The customer's home phone number.
   * @minLength `1`
   * @maxLength `32767`
   */
  HomePhoneNumber?: string;
  /**
   * The customer's last name.
   * @minLength `1`
   * @maxLength `32767`
   */
  LastName?: string;
  /**
   * The first line of a customer’s mailing address.
   * @minLength `1`
   * @maxLength `32767`
   */
  MailingAddress1?: string;
  /**
   * The second line of a customer’s mailing address.
   * @minLength `1`
   * @maxLength `32767`
   */
  MailingAddress2?: string;
  /**
   * The third line of a customer’s mailing address.
   * @minLength `1`
   * @maxLength `32767`
   */
  MailingAddress3?: string;
  /**
   * The fourth line of a customer’s mailing address.
   * @minLength `1`
   * @maxLength `32767`
   */
  MailingAddress4?: string;
  /**
   * The city of a customer’s mailing address.
   * @minLength `1`
   * @maxLength `32767`
   */
  MailingCity?: string;
  /**
   * The country of a customer’s mailing address.
   * @minLength `1`
   * @maxLength `32767`
   */
  MailingCountry?: string;
  /**
   * The county of a customer’s mailing address.
   * @minLength `1`
   * @maxLength `32767`
   */
  MailingCounty?: string;
  /**
   * The postal code of a customer’s mailing address
   * @minLength `1`
   * @maxLength `32767`
   */
  MailingPostalCode?: string;
  /**
   * The province of a customer’s mailing address.
   * @minLength `1`
   * @maxLength `32767`
   */
  MailingProvince?: string;
  /**
   * The state of a customer’s mailing address.
   * @minLength `1`
   * @maxLength `32767`
   */
  MailingState?: string;
  /**
   * The customer's middle name.
   * @minLength `1`
   * @maxLength `32767`
   */
  MiddleName?: string;
  /**
   * The customer's mobile phone number.
   * @minLength `1`
   * @maxLength `32767`
   */
  MobilePhoneNumber?: string;
  /**
   * The customer's party type.
   * @minLength `1`
   * @maxLength `32767`
   */
  PartyType?: string;
  /**
   * The customer's phone number, which has not been specified as a mobile, home, or business number.
   * @minLength `1`
   * @maxLength `32767`
   */
  PhoneNumber?: string;
  /**
   * The postal code of a customer address.
   * @minLength `1`
   * @maxLength `32767`
   */
  PostalCode?: string;
  /**
   * The ARN of a customer profile.
   * @minLength `1`
   * @maxLength `32767`
   */
  ProfileARN?: string;
  /**
   * The unique identifier of a customer profile.
   * @minLength `1`
   * @maxLength `32767`
   */
  ProfileId?: string;
  /**
   * The province in which a customer lives.
   * @minLength `1`
   * @maxLength `32767`
   */
  Province?: string;
  /**
   * The first line of a customer’s shipping address.
   * @minLength `1`
   * @maxLength `32767`
   */
  ShippingAddress1?: string;
  /**
   * The second line of a customer’s shipping address.
   * @minLength `1`
   * @maxLength `32767`
   */
  ShippingAddress2?: string;
  /**
   * The third line of a customer’s shipping address.
   * @minLength `1`
   * @maxLength `32767`
   */
  ShippingAddress3?: string;
  /**
   * The fourth line of a customer’s shipping address
   * @minLength `1`
   * @maxLength `32767`
   */
  ShippingAddress4?: string;
  /**
   * The city of a customer’s shipping address.
   * @minLength `1`
   * @maxLength `32767`
   */
  ShippingCity?: string;
  /**
   * The country of a customer’s shipping address.
   * @minLength `1`
   * @maxLength `32767`
   */
  ShippingCountry?: string;
  /**
   * The county of a customer’s shipping address.
   * @minLength `1`
   * @maxLength `32767`
   */
  ShippingCounty?: string;
  /**
   * The postal code of a customer’s shipping address.
   * @minLength `1`
   * @maxLength `32767`
   */
  ShippingPostalCode?: string;
  /**
   * The province of a customer’s shipping address.
   * @minLength `1`
   * @maxLength `32767`
   */
  ShippingProvince?: string;
  /**
   * The state of a customer’s shipping address.
   * @minLength `1`
   * @maxLength `32767`
   */
  ShippingState?: string;
  /**
   * The state in which a customer lives.
   * @minLength `1`
   * @maxLength `32767`
   */
  State?: string;
};
/**
 * Type definition for `AWS::Wisdom::MessageTemplate.EmailMessageTemplateContent`.
 * The content of message template that applies to email channel subtype.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-messagetemplate-emailmessagetemplatecontent.html}
 */
export type EmailMessageTemplateContent = {
  /**
   * The body to use in email messages.
   */
  Body: EmailMessageTemplateContentBody;
  /**
   * The email headers to include in email messages.
   * @minLength `0`
   * @maxLength `15`
   */
  Headers: EmailMessageTemplateHeader[];
  /**
   * The subject line, or title, to use in email messages.
   * @minLength `1`
   */
  Subject: string;
};
/**
 * Type definition for `AWS::Wisdom::MessageTemplate.EmailMessageTemplateContentBody`.
 * The body to use in email messages.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-messagetemplate-emailmessagetemplatecontentbody.html}
 */
export type EmailMessageTemplateContentBody = {
  /**
   * The message body, in HTML format, to use in email messages that are based on the message template. We recommend using HTML format for email clients that render HTML content. You can include links, formatted text, and more in an HTML message.
   */
  Html?: MessageTemplateBodyContentProvider;
  /**
   * The message body, in plain text format, to use in email messages that are based on the message template. We recommend using plain text format for email clients that don't render HTML content and clients that are connected to high-latency networks, such as mobile devices.
   */
  PlainText?: MessageTemplateBodyContentProvider;
};
/**
 * Type definition for `AWS::Wisdom::MessageTemplate.EmailMessageTemplateHeader`.
 * The email header to include in email messages.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-messagetemplate-emailmessagetemplateheader.html}
 */
export type EmailMessageTemplateHeader = {
  /**
   * The name of the email header.
   * @minLength `1`
   * @maxLength `126`
   * @pattern `^[!-9;-@A-~]+$`
   */
  Name?: string;
  /**
   * The value of the email header.
   * @minLength `1`
   * @maxLength `870`
   * @pattern `[ -~]*`
   */
  Value?: string;
};
/**
 * Type definition for `AWS::Wisdom::MessageTemplate.GroupingConfiguration`.
 * The configuration information of the user groups that the message template is accessible to.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-messagetemplate-groupingconfiguration.html}
 */
export type GroupingConfiguration = {
  /**
   * The criteria used for grouping Amazon Q in Connect users.
   * @minLength `1`
   * @maxLength `100`
   */
  Criteria: string;
  /**
   * The list of values that define different groups of Amazon Q in Connect users.
   */
  Values: string[];
};
/**
 * Type definition for `AWS::Wisdom::MessageTemplate.MessageTemplateAttachment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-messagetemplate-messagetemplateattachment.html}
 */
export type MessageTemplateAttachment = {
  /**
   * The name of the attachment file being uploaded. The name should include the file extension.
   * @minLength `1`
   * @maxLength `255`
   */
  AttachmentName: string;
  /**
   * The S3 Presigned URL for the attachment file. When generating the PreSignedUrl, please ensure that the expires-in time is set to 30 minutes. The URL can be generated through the AWS Console or through the AWS CLI (https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html).
   * @minLength `1`
   */
  S3PresignedUrl: string;
};
/**
 * Type definition for `AWS::Wisdom::MessageTemplate.MessageTemplateAttributes`.
 * An object that specifies the default values to use for variables in the message template. This object contains different categories of key-value pairs. Each key defines a variable or placeholder in the message template. The corresponding value defines the default value for that variable.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-messagetemplate-messagetemplateattributes.html}
 */
export type MessageTemplateAttributes = {
  /**
   * The agent attributes that are used with the message template.
   */
  AgentAttributes?: AgentAttributes;
  /**
   * The custom attributes that are used with the message template.
   */
  CustomAttributes?: CustomAttributes;
  /**
   * The customer profile attributes that are used with the message template.
   */
  CustomerProfileAttributes?: CustomerProfileAttributes;
  /**
   * The system attributes that are used with the message template.
   */
  SystemAttributes?: SystemAttributes;
};
/**
 * Type definition for `AWS::Wisdom::MessageTemplate.MessageTemplateBodyContentProvider`.
 * The container of message template body.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-messagetemplate-messagetemplatebodycontentprovider.html}
 */
export type MessageTemplateBodyContentProvider = {
  /**
   * @minLength `1`
   */
  Content?: string;
};
/**
 * Type definition for `AWS::Wisdom::MessageTemplate.SmsMessageTemplateContent`.
 * The content of message template that applies to SMS channel subtype.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-messagetemplate-smsmessagetemplatecontent.html}
 */
export type SmsMessageTemplateContent = {
  /**
   * The body to use in SMS messages.
   */
  Body: SmsMessageTemplateContentBody;
};
/**
 * Type definition for `AWS::Wisdom::MessageTemplate.SmsMessageTemplateContentBody`.
 * The body to use in SMS messages.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-messagetemplate-smsmessagetemplatecontentbody.html}
 */
export type SmsMessageTemplateContentBody = {
  /**
   * The container of message template body.
   */
  PlainText?: MessageTemplateBodyContentProvider;
};
/**
 * Type definition for `AWS::Wisdom::MessageTemplate.SystemAttributes`.
 * The system attributes that are used with the message template.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-messagetemplate-systemattributes.html}
 */
export type SystemAttributes = {
  /**
   * The CustomerEndpoint attribute.
   */
  CustomerEndpoint?: SystemEndpointAttributes;
  /**
   * The name of the task.
   * @minLength `1`
   * @maxLength `32767`
   */
  Name?: string;
  /**
   * The SystemEndpoint attribute.
   */
  SystemEndpoint?: SystemEndpointAttributes;
};
/**
 * Type definition for `AWS::Wisdom::MessageTemplate.SystemEndpointAttributes`.
 * The system endpoint attributes that are used with the message template.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-messagetemplate-systemendpointattributes.html}
 */
export type SystemEndpointAttributes = {
  /**
   * The customer's phone number if used with customerEndpoint, or the number the customer dialed to call your contact center if used with systemEndpoint.
   * @minLength `1`
   * @maxLength `32767`
   */
  Address?: string;
};
/**
 * Type definition for `AWS::Wisdom::MessageTemplate.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-messagetemplate-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!aws:)[a-zA-Z+-=._:/]+$`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Definition of AWS::Wisdom::MessageTemplate Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html}
 */
export class WisdomMessageTemplate extends $Resource<
  "AWS::Wisdom::MessageTemplate",
  WisdomMessageTemplateProperties,
  WisdomMessageTemplateAttributes
> {
  public static readonly Type = "AWS::Wisdom::MessageTemplate";
  constructor(
    logicalId: string,
    properties: WisdomMessageTemplateProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, WisdomMessageTemplate.Type, properties, options);
  }
}
