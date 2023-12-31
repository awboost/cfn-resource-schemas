import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::Connect::User
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-user.html}
 */
export type ConnectUserProperties = {
  /**
   * The identifier of the user account in the directory used for identity management.
   */
  DirectoryUserId?: string;
  /**
   * The identifier of the hierarchy group for the user.
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]/‍*agent-group/[-a-zA-Z0-9]*$`
   */
  HierarchyGroupArn?: string;
  /**
   * The information about the identity of the user.
   */
  IdentityInfo?: UserIdentityInfo;
  /**
   * The identifier of the Amazon Connect instance.
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*$`
   */
  InstanceArn: string;
  /**
   * The password for the user account. A password is required if you are using Amazon Connect for identity management. Otherwise, it is an error to include a password.
   * @pattern `^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]{8,64}$`
   */
  Password?: string;
  /**
   * The phone settings for the user.
   */
  PhoneConfig: UserPhoneConfig;
  /**
   * The identifier of the routing profile for the user.
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]/‍*routing-profile/[-a-zA-Z0-9]*$`
   */
  RoutingProfileArn: string;
  /**
   * One or more security profile arns for the user
   * @minLength `1`
   * @maxLength `10`
   */
  SecurityProfileArns: string[];
  /**
   * One or more tags.
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * The user name for the account.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `[a-zA-Z0-9\_\-\.\@]+`
   */
  Username: string;
};
/**
 * Attribute type definition for `AWS::Connect::User`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-user.html#aws-resource-connect-user-return-values}
 */
export type ConnectUserAttributes = {
  /**
   * The Amazon Resource Name (ARN) for the user.
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]/‍*agent/[-a-zA-Z0-9]*$`
   */
  UserArn: string;
};
/**
 * Type definition for `AWS::Connect::User.PhoneType`.
 * The phone type.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-user-phonetype.html}
 */
export type PhoneType = "SOFT_PHONE" | "DESK_PHONE";
/**
 * Type definition for `AWS::Connect::User.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-user-tag.html}
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
 * Type definition for `AWS::Connect::User.UserIdentityInfo`.
 * Contains information about the identity of a user.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-user-useridentityinfo.html}
 */
export type UserIdentityInfo = {
  /**
   * The email address. If you are using SAML for identity management and include this parameter, an error is returned.
   */
  Email?: string;
  /**
   * The first name. This is required if you are using Amazon Connect or SAML for identity management.
   */
  FirstName?: string;
  /**
   * The last name. This is required if you are using Amazon Connect or SAML for identity management.
   */
  LastName?: string;
  /**
   * The mobile phone number.
   * @pattern `^\+[1-9]\d{1,14}$`
   */
  Mobile?: string;
  /**
   * The secondary email address. If you provide a secondary email, the user receives email notifications -- other than password reset notifications -- to this email address instead of to their primary email address.
   * @pattern `(?=^.{0,265}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}`
   */
  SecondaryEmail?: string;
};
/**
 * Type definition for `AWS::Connect::User.UserPhoneConfig`.
 * Contains information about the phone configuration settings for a user.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-user-userphoneconfig.html}
 */
export type UserPhoneConfig = {
  /**
   * The After Call Work (ACW) timeout setting, in seconds.
   */
  AfterContactWorkTimeLimit?: number;
  /**
   * The Auto accept setting.
   */
  AutoAccept?: boolean;
  /**
   * The phone number for the user's desk phone.
   */
  DeskPhoneNumber?: string;
  /**
   * The phone type.
   */
  PhoneType: PhoneType;
};
/**
 * Resource Type definition for AWS::Connect::User
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-user.html}
 */
export class ConnectUser extends $Resource<
  "AWS::Connect::User",
  ConnectUserProperties,
  ConnectUserAttributes
> {
  public static readonly Type = "AWS::Connect::User";
  public static readonly AttributeNames = ["UserArn" as const];
  constructor(
    logicalId: string,
    properties: ConnectUserProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ConnectUser.Type,
      properties,
      ConnectUser.AttributeNames,
      options,
    );
  }
}
