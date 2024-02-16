import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::GuardDuty::Master`.
 * GuardDuty Master resource schema
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-master.html}
 */
export type GuardDutyMasterProperties = {
  /**
   * Unique ID of the detector of the GuardDuty member account.
   */
  DetectorId: string;
  /**
   * Value used to validate the master account to the member account.
   */
  InvitationId?: string;
  /**
   * ID of the account used as the master account.
   */
  MasterId: string;
};
/**
 * Resource type definition for `AWS::GuardDuty::Master`.
 * GuardDuty Master resource schema
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-master.html}
 */
export class GuardDutyMaster extends $Resource<
  "AWS::GuardDuty::Master",
  GuardDutyMasterProperties,
  Record<string, never>
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
