import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::SSMContacts::Contact
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contact.html}
 */
export type SSMContactsContactProperties = {
  /**
   * Alias of the contact. String value with 20 to 256 characters. Only alphabetical, numeric characters, dash, or underscore allowed.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[a-z0-9_\-\.]*$`
   */
  Alias: string;
  /**
   * Name of the contact. String value with 3 to 256 characters. Only alphabetical, space, numeric characters, dash, or underscore allowed.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[a-zA-Z0-9_\-\s]*$`
   */
  DisplayName: string;
  /**
   * The stages that an escalation plan or engagement plan engages contacts and contact methods in.
   */
  Plan?: Stage[];
  /**
   * Contact type, which specify type of contact. Currently supported values: “PERSONAL”, “SHARED”, “OTHER“.
   */
  Type: "PERSONAL" | "CUSTOM" | "SERVICE" | "ESCALATION" | "ONCALL_SCHEDULE";
};
/**
 * Attribute type definition for `AWS::SSMContacts::Contact`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contact.html#aws-resource-ssmcontacts-contact-return-values}
 */
export type SSMContactsContactAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the contact.
   */
  Arn: string;
};
/**
 * Type definition for `AWS::SSMContacts::Contact.ChannelTargetInfo`.
 * Information about the contact channel that SSM Incident Manager uses to engage the contact.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-contact-channeltargetinfo.html}
 */
export type ChannelTargetInfo = {
  /**
   * The Amazon Resource Name (ARN) of the contact channel.
   */
  ChannelId: string;
  /**
   * The number of minutes to wait to retry sending engagement in the case the engagement initially fails.
   */
  RetryIntervalInMinutes: number;
};
/**
 * Type definition for `AWS::SSMContacts::Contact.ContactTargetInfo`.
 * The contact that SSM Incident Manager is engaging during an incident.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-contact-contacttargetinfo.html}
 */
export type ContactTargetInfo = {
  /**
   * The Amazon Resource Name (ARN) of the contact.
   */
  ContactId: string;
  /**
   * A Boolean value determining if the contact's acknowledgement stops the progress of stages in the plan.
   */
  IsEssential: boolean;
};
/**
 * Type definition for `AWS::SSMContacts::Contact.Stage`.
 * A set amount of time that an escalation plan or engagement plan engages the specified contacts or contact methods.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-contact-stage.html}
 */
export type Stage = {
  /**
   * The time to wait until beginning the next stage.
   */
  DurationInMinutes?: number;
  /**
   * List of Rotation Ids to associate with Contact
   */
  RotationIds?: string[];
  /**
   * The contacts or contact methods that the escalation plan or engagement plan is engaging.
   */
  Targets?: Targets[];
};
/**
 * Type definition for `AWS::SSMContacts::Contact.Targets`.
 * The contacts or contact methods that the escalation plan or engagement plan is engaging.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-contact-targets.html}
 */
export type Targets = {
  /**
   * Information about the contact channel that SSM Incident Manager uses to engage the contact.
   */
  ChannelTargetInfo?: ChannelTargetInfo;
  /**
   * The contact that SSM Incident Manager is engaging during an incident.
   */
  ContactTargetInfo?: ContactTargetInfo;
};
/**
 * Resource Type definition for AWS::SSMContacts::Contact
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contact.html}
 */
export class SSMContactsContact extends $Resource<
  "AWS::SSMContacts::Contact",
  SSMContactsContactProperties,
  SSMContactsContactAttributes
> {
  public static readonly Type = "AWS::SSMContacts::Contact";
  public static readonly AttributeNames = ["Arn" as const];
  constructor(
    logicalId: string,
    properties: SSMContactsContactProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      SSMContactsContact.Type,
      properties,
      SSMContactsContact.AttributeNames,
      options,
    );
  }
}
