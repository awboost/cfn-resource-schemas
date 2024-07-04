import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::SES::MailManagerAddonSubscription Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanageraddonsubscription.html}
 */
export type SESMailManagerAddonSubscriptionProperties = {
  AddonName: string;
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::SES::MailManagerAddonSubscription`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanageraddonsubscription.html#aws-resource-ses-mailmanageraddonsubscription-return-values}
 */
export type SESMailManagerAddonSubscriptionAttributes = {
  AddonSubscriptionArn: string;
  /**
   * @minLength `4`
   * @maxLength `67`
   * @pattern `^as-[a-zA-Z0-9]{1,64}$`
   */
  AddonSubscriptionId: string;
};
/**
 * Type definition for `AWS::SES::MailManagerAddonSubscription.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanageraddonsubscription-tag.html}
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
 * Definition of AWS::SES::MailManagerAddonSubscription Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanageraddonsubscription.html}
 */
export class SESMailManagerAddonSubscription extends $Resource<
  "AWS::SES::MailManagerAddonSubscription",
  SESMailManagerAddonSubscriptionProperties,
  SESMailManagerAddonSubscriptionAttributes
> {
  public static readonly Type = "AWS::SES::MailManagerAddonSubscription";
  constructor(
    logicalId: string,
    properties: SESMailManagerAddonSubscriptionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SESMailManagerAddonSubscription.Type, properties, options);
  }
}
