import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::SSM::PatchBaseline
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html}
 */
export type SSMPatchBaselineProperties = {
  /**
   * A set of rules defining the approval rules for a patch baseline.
   */
  ApprovalRules?: RuleGroup;
  /**
   * A list of explicitly approved patches for the baseline.
   * @minLength `0`
   * @maxLength `50`
   */
  ApprovedPatches?: string[];
  /**
   * Defines the compliance level for approved patches. This means that if an approved patch is reported as missing, this is the severity of the compliance violation. The default value is UNSPECIFIED.
   */
  ApprovedPatchesComplianceLevel?:
    | "CRITICAL"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | "INFORMATIONAL"
    | "UNSPECIFIED";
  /**
   * Indicates whether the list of approved patches includes non-security updates that should be applied to the instances. The default value is 'false'. Applies to Linux instances only.
   */
  ApprovedPatchesEnableNonSecurity?: boolean;
  /**
   * The compliance status for vendor recommended security updates that are not approved by this patch baseline.
   */
  AvailableSecurityUpdatesComplianceStatus?: "NON_COMPLIANT" | "COMPLIANT";
  /**
   * Set the baseline as default baseline. Only registering to default patch baseline is allowed.
   */
  DefaultBaseline?: boolean;
  /**
   * The description of the patch baseline.
   * @minLength `1`
   * @maxLength `1024`
   */
  Description?: string;
  /**
   * A set of global filters used to include patches in the baseline.
   */
  GlobalFilters?: PatchFilterGroup;
  /**
   * The name of the patch baseline.
   * @minLength `3`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9_\-.]{3,128}$`
   */
  Name: string;
  /**
   * Defines the operating system the patch baseline applies to. The Default value is WINDOWS.
   */
  OperatingSystem?:
    | "WINDOWS"
    | "AMAZON_LINUX"
    | "AMAZON_LINUX_2"
    | "AMAZON_LINUX_2022"
    | "AMAZON_LINUX_2023"
    | "UBUNTU"
    | "REDHAT_ENTERPRISE_LINUX"
    | "SUSE"
    | "CENTOS"
    | "ORACLE_LINUX"
    | "DEBIAN"
    | "MACOS"
    | "RASPBIAN"
    | "ROCKY_LINUX"
    | "ALMA_LINUX";
  /**
   * PatchGroups is used to associate instances with a specific patch baseline
   */
  PatchGroups?: string[];
  /**
   * A list of explicitly rejected patches for the baseline.
   * @minLength `0`
   * @maxLength `50`
   */
  RejectedPatches?: string[];
  /**
   * The action for Patch Manager to take on patches included in the RejectedPackages list.
   */
  RejectedPatchesAction?: "ALLOW_AS_DEPENDENCY" | "BLOCK";
  /**
   * Information about the patches to use to update the instances, including target operating systems and source repository. Applies to Linux instances only.
   * @minLength `0`
   * @maxLength `20`
   */
  Sources?: PatchSource[];
  /**
   * Optional metadata that you assign to a resource. Tags enable you to categorize a resource in different ways.
   * @minLength `0`
   * @maxLength `1000`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::SSM::PatchBaseline`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html#aws-resource-ssm-patchbaseline-return-values}
 */
export type SSMPatchBaselineAttributes = {
  /**
   * The ID of the patch baseline.
   * @minLength `20`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9_\-:/]{20,128}$`
   */
  Id: string;
};
/**
 * Type definition for `AWS::SSM::PatchBaseline.PatchFilter`.
 * Defines which patches should be included in a patch baseline.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-patchbaseline-patchfilter.html}
 */
export type PatchFilter = {
  Key?:
    | "ADVISORY_ID"
    | "ARCH"
    | "BUGZILLA_ID"
    | "CLASSIFICATION"
    | "CVE_ID"
    | "EPOCH"
    | "MSRC_SEVERITY"
    | "NAME"
    | "PATCH_ID"
    | "PATCH_SET"
    | "PRIORITY"
    | "PRODUCT"
    | "PRODUCT_FAMILY"
    | "RELEASE"
    | "REPOSITORY"
    | "SECTION"
    | "SECURITY"
    | "SEVERITY"
    | "VERSION";
  /**
   * @minLength `0`
   * @maxLength `20`
   */
  Values?: string[];
};
/**
 * Type definition for `AWS::SSM::PatchBaseline.PatchFilterGroup`.
 * The patch filter group that defines the criteria for the rule.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-patchbaseline-patchfiltergroup.html}
 */
export type PatchFilterGroup = {
  /**
   * @minLength `0`
   * @maxLength `5`
   */
  PatchFilters?: PatchFilter[];
};
/**
 * Type definition for `AWS::SSM::PatchBaseline.PatchSource`.
 * Information about the patches to use to update the instances, including target operating systems and source repository. Applies to Linux instances only.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-patchbaseline-patchsource.html}
 */
export type PatchSource = {
  /**
   * @minLength `1`
   * @maxLength `1024`
   */
  Configuration?: string;
  /**
   * @pattern `^[a-zA-Z0-9_\-.]{3,50}$`
   */
  Name?: string;
  /**
   * @minLength `0`
   * @maxLength `20`
   */
  Products?: string[];
};
/**
 * Type definition for `AWS::SSM::PatchBaseline.Rule`.
 * Defines an approval rule for a patch baseline.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-patchbaseline-rule.html}
 */
export type Rule = {
  /**
   * @min `0`
   * @max `360`
   */
  ApproveAfterDays?: number;
  /**
   * @minLength `0`
   * @maxLength `10`
   */
  ApproveUntilDate?: string;
  ComplianceLevel?:
    | "CRITICAL"
    | "HIGH"
    | "INFORMATIONAL"
    | "LOW"
    | "MEDIUM"
    | "UNSPECIFIED";
  EnableNonSecurity?: boolean;
  /**
   * The patch filter group that defines the criteria for the rule.
   */
  PatchFilterGroup?: PatchFilterGroup;
};
/**
 * Type definition for `AWS::SSM::PatchBaseline.RuleGroup`.
 * A set of rules defining the approval rules for a patch baseline.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-patchbaseline-rulegroup.html}
 */
export type RuleGroup = {
  /**
   * @minLength `0`
   * @maxLength `10`
   */
  PatchRules?: Rule[];
};
/**
 * Type definition for `AWS::SSM::PatchBaseline.Tag`.
 * Metadata that you assign to your AWS resources.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-patchbaseline-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   */
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
  constructor(
    logicalId: string,
    properties: SSMPatchBaselineProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SSMPatchBaseline.Type, properties, options);
  }
}
