import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::SES::MailManagerAddonInstance Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanageraddoninstance.html}
 */
export type SESMailManagerAddonInstanceProperties = {
  /**
   * @minLength `4`
   * @maxLength `67`
   * @pattern `^as-[a-zA-Z0-9]{1,64}$`
   */
  AddonSubscriptionId: string;
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::SES::MailManagerAddonInstance`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanageraddoninstance.html#aws-resource-ses-mailmanageraddoninstance-return-values}
 */
export type SESMailManagerAddonInstanceAttributes = {
  AddonInstanceArn: string;
  /**
   * @minLength `4`
   * @maxLength `67`
   * @pattern `^ai-[a-zA-Z0-9]{1,64}$`
   */
  AddonInstanceId: string;
  AddonName: string;
};
/**
 * Type definition for `AWS::SES::MailManagerAddonInstance.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanageraddoninstance-tag.html}
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
 * Definition of AWS::SES::MailManagerAddonInstance Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanageraddoninstance.html}
 */
export class SESMailManagerAddonInstance extends $Resource<
  "AWS::SES::MailManagerAddonInstance",
  SESMailManagerAddonInstanceProperties,
  SESMailManagerAddonInstanceAttributes
> {
  public static readonly Type = "AWS::SES::MailManagerAddonInstance";
  constructor(
    logicalId: string,
    properties: SESMailManagerAddonInstanceProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SESMailManagerAddonInstance.Type, properties, options);
  }
}
