import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Shield::ProactiveEngagement`.
 * Authorizes the Shield Response Team (SRT) to use email and phone to notify contacts about escalations to the SRT and to initiate proactive customer support.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-shield-proactiveengagement.html}
 */
export type ShieldProactiveEngagementProperties = {
  /**
     * A list of email addresses and phone numbers that the Shield Response Team (SRT) can use to contact you for escalations to the SRT and to initiate proactive customer support.
    To enable proactive engagement, the contact list must include at least one phone number.
     * @minLength `1`
     * @maxLength `10`
     */
  EmergencyContactList: EmergencyContact[];
  /**
     * If `ENABLED`, the Shield Response Team (SRT) will use email and phone to notify contacts about escalations to the SRT and to initiate proactive customer support.
    If `DISABLED`, the SRT will not proactively notify contacts about escalations or to initiate proactive customer support.
     */
  ProactiveEngagementStatus: "ENABLED" | "DISABLED";
};
/**
 * Attribute type definition for `AWS::Shield::ProactiveEngagement`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-shield-proactiveengagement.html#aws-resource-shield-proactiveengagement-return-values}
 */
export type ShieldProactiveEngagementAttributes = {
  AccountId: string;
};
/**
 * Type definition for `AWS::Shield::ProactiveEngagement.EmergencyContact`.
 * An emergency contact is used by Shield Response Team (SRT) to contact you for escalations to the SRT and to initiate proactive customer support. An emergency contact requires an email address.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-shield-proactiveengagement-emergencycontact.html}
 */
export type EmergencyContact = {
  /**
   * Additional notes regarding the contact.
   * @minLength `1`
   * @maxLength `1024`
   * @pattern `^[\w\s\.\-,:/()+@]*$`
   */
  ContactNotes?: string;
  /**
   * The email address for the contact.
   * @minLength `1`
   * @maxLength `150`
   * @pattern `^\S+@\S+\.\S+$`
   */
  EmailAddress: string;
  /**
   * The phone number for the contact
   * @minLength `1`
   * @maxLength `16`
   * @pattern `^\+[1-9]\d{1,14}$`
   */
  PhoneNumber?: string;
};
/**
 * Resource type definition for `AWS::Shield::ProactiveEngagement`.
 * Authorizes the Shield Response Team (SRT) to use email and phone to notify contacts about escalations to the SRT and to initiate proactive customer support.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-shield-proactiveengagement.html}
 */
export class ShieldProactiveEngagement extends $Resource<
  "AWS::Shield::ProactiveEngagement",
  ShieldProactiveEngagementProperties,
  ShieldProactiveEngagementAttributes
> {
  public static readonly Type = "AWS::Shield::ProactiveEngagement";
  constructor(
    logicalId: string,
    properties: ShieldProactiveEngagementProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ShieldProactiveEngagement.Type, properties, options);
  }
}
