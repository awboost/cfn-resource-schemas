import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::SMSVOICE::Pool
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-smsvoice-pool.html}
 */
export type SMSVOICEPoolProperties = {
  /**
   * When set to true the pool can't be deleted. By default this is set to false.
   */
  DeletionProtectionEnabled?: boolean;
  /**
   * A keyword is a word that you can search for on a particular phone number or pool. It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, AWS End User Messaging SMS and Voice responds with a customizable message. Keywords "HELP" and "STOP" are mandatory keywords
   */
  MandatoryKeywords: {
    /**
     * A keyword is a word that you can search for on a particular phone number or pool. It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, AWS End User Messaging SMS and Voice responds with a customizable message. Keywords "HELP" and "STOP" are mandatory keywords
     */
    HELP: MandatoryKeyword;
    /**
     * A keyword is a word that you can search for on a particular phone number or pool. It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, AWS End User Messaging SMS and Voice responds with a customizable message. Keywords "HELP" and "STOP" are mandatory keywords
     */
    STOP: MandatoryKeyword;
  };
  /**
   * The name of the OptOutList to associate with the pool. You can use the OptOutListName or OptOutListArn.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[A-Za-z0-9_:/-]+$`
   */
  OptOutListName?: string;
  /**
   * A keyword is a word that you can search for on a particular phone number or pool. It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, AWS End User Messaging SMS and Voice responds with a customizable message.
   */
  OptionalKeywords?: OptionalKeyword[];
  /**
   * The origination identity to use such as a PhoneNumberId, PhoneNumberArn, SenderId or SenderIdArn and it's IsoCountryCode.
   * @minLength `1`
   */
  OriginationIdentities: string[];
  /**
   * By default this is set to false. When an end recipient sends a message that begins with HELP or STOP to one of your dedicated numbers, AWS End User Messaging SMS and Voice automatically replies with a customizable message and adds the end recipient to the OptOutList. When set to true you're responsible for responding to HELP and STOP requests. You're also responsible for tracking and honoring opt-out requests.
   */
  SelfManagedOptOutsEnabled?: boolean;
  /**
   * Indicates whether shared routes are enabled for the pool.
   */
  SharedRoutesEnabled?: boolean;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
  /**
   * When you set up two-way SMS, you can receive incoming messages from your customers. When one of your customers sends a message to your phone number, the message body is sent to an Amazon SNS topic or Amazon Connect for processing.
   */
  TwoWay?: {
    /**
     * The Amazon Resource Name (ARN) of the two way channel.
     * @pattern `^[ \S]+`
     */
    ChannelArn?: string;
    /**
     * An optional IAM Role Arn for a service to assume, to be able to post inbound SMS messages.
     * @pattern `^arn:\S+$`
     */
    ChannelRole?: string;
    /**
     * By default this is set to false. When set to true you can receive incoming text messages from your end recipients.
     */
    Enabled: boolean;
  };
};
/**
 * Attribute type definition for `AWS::SMSVOICE::Pool`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-smsvoice-pool.html#aws-resource-smsvoice-pool-return-values}
 */
export type SMSVOICEPoolAttributes = {
  Arn: string;
  PoolId: string;
};
/**
 * Type definition for `AWS::SMSVOICE::Pool.MandatoryKeyword`.
 * A keyword is a word that you can search for on a particular phone number or pool. It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, AWS End User Messaging SMS and Voice responds with a customizable message. Keywords "HELP" and "STOP" are mandatory keywords
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-smsvoice-pool-mandatorykeyword.html}
 */
export type MandatoryKeyword = {
  /**
   * @maxLength `1600`
   * @pattern `^(?!\s*$)[\s\S]+$`
   */
  Message: string;
};
/**
 * Type definition for `AWS::SMSVOICE::Pool.OptionalKeyword`.
 * A keyword is a word that you can search for on a particular phone number or pool. It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, AWS End User Messaging SMS and Voice responds with a customizable message.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-smsvoice-pool-optionalkeyword.html}
 */
export type OptionalKeyword = {
  Action: "AUTOMATIC_RESPONSE" | "OPT_OUT" | "OPT_IN";
  /**
   * @maxLength `30`
   * @pattern `^(?!.*(?i)(stop|help))[ \S]+`
   */
  Keyword: string;
  /**
   * @maxLength `1600`
   * @pattern `^(?!\s*$)[\s\S]+$`
   */
  Message: string;
};
/**
 * Type definition for `AWS::SMSVOICE::Pool.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-smsvoice-pool-tag.html}
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
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::SMSVOICE::Pool
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-smsvoice-pool.html}
 */
export class SMSVOICEPool extends $Resource<
  "AWS::SMSVOICE::Pool",
  SMSVOICEPoolProperties,
  SMSVOICEPoolAttributes
> {
  public static readonly Type = "AWS::SMSVOICE::Pool";
  constructor(
    logicalId: string,
    properties: SMSVOICEPoolProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SMSVOICEPool.Type, properties, options);
  }
}
