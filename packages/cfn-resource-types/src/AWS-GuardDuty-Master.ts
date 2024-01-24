import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
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
  constructor(
    logicalId: string,
    properties: GuardDutyMasterProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, GuardDutyMaster.Type, properties, options);
  }
}
