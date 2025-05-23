import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::SES::MailManagerAddressList Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanageraddresslist.html}
 */
export type SESMailManagerAddressListProperties = {
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[a-zA-Z0-9_.-]+$`
   */
  AddressListName?: string;
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::SES::MailManagerAddressList`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanageraddresslist.html#aws-resource-ses-mailmanageraddresslist-return-values}
 */
export type SESMailManagerAddressListAttributes = {
  AddressListArn: string;
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[a-zA-Z0-9-]+$`
   */
  AddressListId: string;
};
/**
 * Type definition for `AWS::SES::MailManagerAddressList.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanageraddresslist-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9/_\+=\.:@\-]+$`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9/_\+=\.:@\-]*$`
   */
  Value: string;
};
/**
 * Definition of AWS::SES::MailManagerAddressList Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanageraddresslist.html}
 */
export class SESMailManagerAddressList extends $Resource<
  "AWS::SES::MailManagerAddressList",
  SESMailManagerAddressListProperties,
  SESMailManagerAddressListAttributes
> {
  public static readonly Type = "AWS::SES::MailManagerAddressList";
  constructor(
    logicalId: string,
    properties: SESMailManagerAddressListProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SESMailManagerAddressList.Type, properties, options);
  }
}
