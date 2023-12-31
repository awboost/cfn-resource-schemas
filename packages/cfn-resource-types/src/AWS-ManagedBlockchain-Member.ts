import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::ManagedBlockchain::Member
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-member.html}
 */
export type ManagedBlockchainMemberProperties = {
  InvitationId?: string;
  MemberConfiguration: MemberConfiguration;
  NetworkConfiguration?: NetworkConfiguration;
  NetworkId?: string;
};
/**
 * Attribute type definition for `AWS::ManagedBlockchain::Member`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-member.html#aws-resource-managedblockchain-member-return-values}
 */
export type ManagedBlockchainMemberAttributes = {
  MemberId: string;
};
/**
 * Type definition for `AWS::ManagedBlockchain::Member.ApprovalThresholdPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-member-approvalthresholdpolicy.html}
 */
export type ApprovalThresholdPolicy = {
  ProposalDurationInHours?: number;
  ThresholdComparator?: string;
  ThresholdPercentage?: number;
};
/**
 * Type definition for `AWS::ManagedBlockchain::Member.MemberConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-member-memberconfiguration.html}
 */
export type MemberConfiguration = {
  Description?: string;
  MemberFrameworkConfiguration?: MemberFrameworkConfiguration;
  Name: string;
};
/**
 * Type definition for `AWS::ManagedBlockchain::Member.MemberFabricConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-member-memberfabricconfiguration.html}
 */
export type MemberFabricConfiguration = {
  AdminPassword: string;
  AdminUsername: string;
};
/**
 * Type definition for `AWS::ManagedBlockchain::Member.MemberFrameworkConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-member-memberframeworkconfiguration.html}
 */
export type MemberFrameworkConfiguration = {
  MemberFabricConfiguration?: MemberFabricConfiguration;
};
/**
 * Type definition for `AWS::ManagedBlockchain::Member.NetworkConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-member-networkconfiguration.html}
 */
export type NetworkConfiguration = {
  Description?: string;
  Framework: string;
  FrameworkVersion: string;
  Name: string;
  NetworkFrameworkConfiguration?: NetworkFrameworkConfiguration;
  VotingPolicy: VotingPolicy;
};
/**
 * Type definition for `AWS::ManagedBlockchain::Member.NetworkFabricConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-member-networkfabricconfiguration.html}
 */
export type NetworkFabricConfiguration = {
  Edition: string;
};
/**
 * Type definition for `AWS::ManagedBlockchain::Member.NetworkFrameworkConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-member-networkframeworkconfiguration.html}
 */
export type NetworkFrameworkConfiguration = {
  NetworkFabricConfiguration?: NetworkFabricConfiguration;
};
/**
 * Type definition for `AWS::ManagedBlockchain::Member.VotingPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-member-votingpolicy.html}
 */
export type VotingPolicy = {
  ApprovalThresholdPolicy?: ApprovalThresholdPolicy;
};
/**
 * Resource Type definition for AWS::ManagedBlockchain::Member
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-member.html}
 */
export class ManagedBlockchainMember extends $Resource<
  "AWS::ManagedBlockchain::Member",
  ManagedBlockchainMemberProperties,
  ManagedBlockchainMemberAttributes
> {
  public static readonly Type = "AWS::ManagedBlockchain::Member";
  constructor(
    logicalId: string,
    properties: ManagedBlockchainMemberProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ManagedBlockchainMember.Type, properties, options);
  }
}
