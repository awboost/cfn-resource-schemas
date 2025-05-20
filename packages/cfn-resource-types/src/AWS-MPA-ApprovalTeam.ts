import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::MPA::ApprovalTeam.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mpa-approvalteam.html}
 */
export type MPAApprovalTeamProperties = {
  ApprovalStrategy: ApprovalStrategy;
  /**
   * @minLength `1`
   */
  Approvers: Approver[];
  Description: string;
  Name: string;
  /**
   * @minLength `1`
   */
  Policies: Policy[];
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::MPA::ApprovalTeam`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mpa-approvalteam.html#aws-resource-mpa-approvalteam-return-values}
 */
export type MPAApprovalTeamAttributes = {
  /**
   * @minLength `1`
   */
  Approvers: {
    ApproverId: string;
    PrimaryIdentityStatus: string;
    ResponseTime: string;
  }[];
  Arn: string;
  CreationTime: string;
  LastUpdateTime: string;
  NumberOfApprovers: number;
  Status: string;
  StatusCode: string;
  StatusMessage: string;
  UpdateSessionArn: string;
  VersionId: string;
};
/**
 * Type definition for `AWS::MPA::ApprovalTeam.ApprovalStrategy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mpa-approvalteam-approvalstrategy.html}
 */
export type ApprovalStrategy = {
  MofN: MofNApprovalStrategy;
};
/**
 * Type definition for `AWS::MPA::ApprovalTeam.Approver`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mpa-approvalteam-approver.html}
 */
export type Approver = {
  PrimaryIdentityId: string;
  PrimaryIdentitySourceArn: string;
};
/**
 * Type definition for `AWS::MPA::ApprovalTeam.MofNApprovalStrategy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mpa-approvalteam-mofnapprovalstrategy.html}
 */
export type MofNApprovalStrategy = {
  MinApprovalsRequired: number;
};
/**
 * Type definition for `AWS::MPA::ApprovalTeam.Policy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mpa-approvalteam-policy.html}
 */
export type Policy = {
  PolicyArn: string;
};
/**
 * Type definition for `AWS::MPA::ApprovalTeam.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mpa-approvalteam-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::MPA::ApprovalTeam.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mpa-approvalteam.html}
 */
export class MPAApprovalTeam extends $Resource<
  "AWS::MPA::ApprovalTeam",
  MPAApprovalTeamProperties,
  MPAApprovalTeamAttributes
> {
  public static readonly Type = "AWS::MPA::ApprovalTeam";
  constructor(
    logicalId: string,
    properties: MPAApprovalTeamProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, MPAApprovalTeam.Type, properties, options);
  }
}
