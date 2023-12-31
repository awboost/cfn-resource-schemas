import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::SSM::PatchBaseline
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html}
 */
export type SSMPatchBaselineProperties = {
  ApprovalRules?: RuleGroup;
  ApprovedPatches?: string[];
  ApprovedPatchesComplianceLevel?: string;
  ApprovedPatchesEnableNonSecurity?: boolean;
  Description?: string;
  GlobalFilters?: PatchFilterGroup;
  Name: string;
  OperatingSystem?: string;
  PatchGroups?: string[];
  RejectedPatches?: string[];
  RejectedPatchesAction?: string;
  Sources?: PatchSource[];
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::SSM::PatchBaseline`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html#aws-resource-ssm-patchbaseline-return-values}
 */
export type SSMPatchBaselineAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::SSM::PatchBaseline.PatchFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-patchbaseline-patchfilter.html}
 */
export type PatchFilter = {
  Key?: string;
  Values?: string[];
};
/**
 * Type definition for `AWS::SSM::PatchBaseline.PatchFilterGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-patchbaseline-patchfiltergroup.html}
 */
export type PatchFilterGroup = {
  PatchFilters?: PatchFilter[];
};
/**
 * Type definition for `AWS::SSM::PatchBaseline.PatchSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-patchbaseline-patchsource.html}
 */
export type PatchSource = {
  Configuration?: string;
  Name?: string;
  Products?: string[];
};
/**
 * Type definition for `AWS::SSM::PatchBaseline.PatchStringDate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-patchbaseline-patchstringdate.html}
 */
export type PatchStringDate = Record<string, any>;
/**
 * Type definition for `AWS::SSM::PatchBaseline.Rule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-patchbaseline-rule.html}
 */
export type Rule = {
  ApproveAfterDays?: number;
  ApproveUntilDate?: PatchStringDate;
  ComplianceLevel?: string;
  EnableNonSecurity?: boolean;
  PatchFilterGroup?: PatchFilterGroup;
};
/**
 * Type definition for `AWS::SSM::PatchBaseline.RuleGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-patchbaseline-rulegroup.html}
 */
export type RuleGroup = {
  PatchRules?: Rule[];
};
/**
 * Type definition for `AWS::SSM::PatchBaseline.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-patchbaseline-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::SSM::PatchBaseline
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html}
 */
export class SSMPatchBaseline extends $Resource<
  "AWS::SSM::PatchBaseline",
  SSMPatchBaselineProperties,
  SSMPatchBaselineAttributes
> {
  public static readonly Type = "AWS::SSM::PatchBaseline";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: SSMPatchBaselineProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      SSMPatchBaseline.Type,
      properties,
      SSMPatchBaseline.AttributeNames,
      options,
    );
  }
}
