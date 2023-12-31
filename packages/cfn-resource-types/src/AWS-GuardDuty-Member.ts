import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::GuardDuty::Member
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-member.html}
 */
export type GuardDutyMemberProperties = {
  DetectorId: string;
  DisableEmailNotification?: boolean;
  Email: string;
  Message?: string;
  Status?: string;
};
/**
 * Attribute type definition for `AWS::GuardDuty::Member`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-member.html#aws-resource-guardduty-member-return-values}
 */
export type GuardDutyMemberAttributes = {
  MemberId: string;
};
/**
 * Resource Type definition for AWS::GuardDuty::Member
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-member.html}
 */
export class GuardDutyMember extends $Resource<
  "AWS::GuardDuty::Member",
  GuardDutyMemberProperties,
  GuardDutyMemberAttributes
> {
  public static readonly Type = "AWS::GuardDuty::Member";
  public static readonly AttributeNames = ["MemberId" as const];
  constructor(
    logicalId: string,
    properties: GuardDutyMemberProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      GuardDutyMember.Type,
      properties,
      GuardDutyMember.AttributeNames,
      options,
    );
  }
}
