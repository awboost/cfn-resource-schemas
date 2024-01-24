import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::SSMContacts::Plan`.
 * Engagement Plan for a SSM Incident Manager Contact.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-plan.html}
 */
export type SSMContactsPlanProperties = {
  /**
   * Contact ID for the AWS SSM Incident Manager Contact to associate the plan.
   * @pattern `arn:[-\w+=\/,.@]+:[-\w+=\/,.@]+:[-\w+=\/,.@]*:[0-9]+:([\w+=\/,.@:-]+)*`
   */
  ContactId?: string;
  /**
   * Rotation Ids to associate with Oncall Contact for engagement.
   */
  RotationIds?: string[];
  /**
   * The stages that an escalation plan or engagement plan engages contacts and contact methods in.
   */
  Stages?: Stage[];
};
/**
 * Attribute type definition for `AWS::SSMContacts::Plan`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-plan.html#aws-resource-ssmcontacts-plan-return-values}
 */
export type SSMContactsPlanAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the contact.
   */
  Arn: string;
};
/**
 * Type definition for `AWS::SSMContacts::Plan.ChannelTargetInfo`.
 * Information about the contact channel that SSM Incident Manager uses to engage the contact.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-plan-channeltargetinfo.html}
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
 * Type definition for `AWS::SSMContacts::Plan.ContactTargetInfo`.
 * The contact that SSM Incident Manager is engaging during an incident.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-plan-contacttargetinfo.html}
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
 * Type definition for `AWS::SSMContacts::Plan.Stage`.
 * A set amount of time that an escalation plan or engagement plan engages the specified contacts or contact methods.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-plan-stage.html}
 */
export type Stage = {
  /**
   * The time to wait until beginning the next stage.
   */
  DurationInMinutes: number;
  /**
   * The contacts or contact methods that the escalation plan or engagement plan is engaging.
   */
  Targets?: Targets[];
};
/**
 * Type definition for `AWS::SSMContacts::Plan.Targets`.
 * The contacts or contact methods that the escalation plan or engagement plan is engaging.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-plan-targets.html}
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
 * Resource type definition for `AWS::SSMContacts::Plan`.
 * Engagement Plan for a SSM Incident Manager Contact.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-plan.html}
 */
export class SSMContactsPlan extends $Resource<
  "AWS::SSMContacts::Plan",
  SSMContactsPlanProperties,
  SSMContactsPlanAttributes
> {
  public static readonly Type = "AWS::SSMContacts::Plan";
  constructor(
    logicalId: string,
    properties: SSMContactsPlanProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SSMContactsPlan.Type, properties, options);
  }
}
