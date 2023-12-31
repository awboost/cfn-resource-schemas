import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource schema for AWS::SES::ContactList.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-contactlist.html}
 */
export type SESContactListProperties = {
  /**
   * The name of the contact list.
   * @pattern `^[a-zA-Z0-9_-]{1,64}$`
   */
  ContactListName?: string;
  /**
   * The description of the contact list.
   * @maxLength `500`
   */
  Description?: string;
  /**
   * The tags (keys and values) associated with the contact list.
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * The topics associated with the contact list.
   * @maxLength `20`
   */
  Topics?: Topic[];
};
/**
 * Type definition for `AWS::SES::ContactList.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-contactlist-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::SES::ContactList.Topic`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-contactlist-topic.html}
 */
export type Topic = {
  DefaultSubscriptionStatus: string;
  /**
   * The description of the topic.
   * @maxLength `500`
   */
  Description?: string;
  /**
   * The display name of the topic.
   * @maxLength `128`
   */
  DisplayName: string;
  /**
   * The name of the topic.
   * @pattern `^[a-zA-Z0-9_-]{1,64}$`
   */
  TopicName: string;
};
/**
 * Resource schema for AWS::SES::ContactList.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-contactlist.html}
 */
export class SESContactList extends $Resource<
  "AWS::SES::ContactList",
  SESContactListProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::SES::ContactList";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: SESContactListProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      SESContactList.Type,
      properties,
      SESContactList.AttributeNames,
      options,
    );
  }
}
