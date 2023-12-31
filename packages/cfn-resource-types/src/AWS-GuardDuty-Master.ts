import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::GuardDuty::Master
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-master.html}
 */
export type GuardDutyMasterProperties = {
  DetectorId: string;
  InvitationId?: string;
};
/**
 * Attribute type definition for `AWS::GuardDuty::Master`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-master.html#aws-resource-guardduty-master-return-values}
 */
export type GuardDutyMasterAttributes = {
  MasterId: string;
};
/**
 * Resource Type definition for AWS::GuardDuty::Master
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-master.html}
 */
export class GuardDutyMaster extends $Resource<
  "AWS::GuardDuty::Master",
  GuardDutyMasterProperties,
  GuardDutyMasterAttributes
> {
  public static readonly Type = "AWS::GuardDuty::Master";
  public static readonly AttributeNames = ["MasterId" as const];
  constructor(
    logicalId: string,
    properties: GuardDutyMasterProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      GuardDutyMaster.Type,
      properties,
      GuardDutyMaster.AttributeNames,
      options,
    );
  }
}
