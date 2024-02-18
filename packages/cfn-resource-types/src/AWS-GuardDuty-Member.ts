import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::GuardDuty::Member
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-member.html}
 */
export type GuardDutyMemberProperties = {
  DetectorId?: string;
  DisableEmailNotification?: boolean;
  Email: string;
  MemberId?: string;
  Message?: string;
  Status?: string;
};
/**
 * Resource Type definition for AWS::GuardDuty::Member
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-member.html}
 */
export class GuardDutyMember extends $Resource<
  "AWS::GuardDuty::Member",
  GuardDutyMemberProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::GuardDuty::Member";
  constructor(
    logicalId: string,
    properties: GuardDutyMemberProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, GuardDutyMember.Type, properties, options);
  }
}
