import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::NotificationsContacts::EmailContact Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-notificationscontacts-emailcontact.html}
 */
export type NotificationsContactsEmailContactProperties = {
  /**
   * @minLength `6`
   * @maxLength `254`
   * @pattern `^(.+)@(.+)$`
   */
  EmailAddress: string;
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `[\w-.~]+`
   */
  Name: string;
  /**
   * A list of tags that are attached to the role.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::NotificationsContacts::EmailContact`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-notificationscontacts-emailcontact.html#aws-resource-notificationscontacts-emailcontact-return-values}
 */
export type NotificationsContactsEmailContactAttributes = {
  /**
   * @pattern `^arn:aws:notifications-contacts::[0-9]{12}:emailcontact/[a-z0-9]{27}$`
   */
  Arn: string;
  EmailContact: {
    /**
     * @minLength `6`
     * @maxLength `254`
     * @pattern `^(.+)@(.+)$`
     */
    Address: string;
    /**
     * @pattern `^arn:aws:notifications-contacts::[0-9]{12}:emailcontact/[a-z0-9]{27}$`
     */
    Arn: string;
    CreationTime: string;
    /**
     * @minLength `1`
     * @maxLength `64`
     * @pattern `[\w-.~]+`
     */
    Name: string;
    Status: EmailContactStatus;
    UpdateTime: string;
  };
};
/**
 * Type definition for `AWS::NotificationsContacts::EmailContact.EmailContactStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-notificationscontacts-emailcontact-emailcontactstatus.html}
 */
export type EmailContactStatus = "inactive" | "active";
/**
 * Type definition for `AWS::NotificationsContacts::EmailContact.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-notificationscontacts-emailcontact-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Definition of AWS::NotificationsContacts::EmailContact Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-notificationscontacts-emailcontact.html}
 */
export class NotificationsContactsEmailContact extends $Resource<
  "AWS::NotificationsContacts::EmailContact",
  NotificationsContactsEmailContactProperties,
  NotificationsContactsEmailContactAttributes
> {
  public static readonly Type = "AWS::NotificationsContacts::EmailContact";
  constructor(
    logicalId: string,
    properties: NotificationsContactsEmailContactProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      NotificationsContactsEmailContact.Type,
      properties,
      options,
    );
  }
}
