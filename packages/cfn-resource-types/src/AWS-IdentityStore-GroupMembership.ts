import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for `AWS::IdentityStore::GroupMembership`.
 * Resource Type Definition for AWS:IdentityStore::GroupMembership
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-identitystore-groupmembership.html}
 */
export type IdentityStoreGroupMembershipProperties = {
  /**
   * The unique identifier for a group in the identity store.
   * @minLength `1`
   * @maxLength `47`
   * @pattern `^([0-9a-f]{10}-|)[A-Fa-f0-9]{8}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{12}$`
   */
  GroupId: string;
  /**
   * The globally unique identifier for the identity store.
   * @minLength `1`
   * @maxLength `36`
   * @pattern `^d-[0-9a-f]{10}$|^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$`
   */
  IdentityStoreId: string;
  /**
   * An object containing the identifier of a group member.
   */
  MemberId: MemberId;
};
/**
 * Attribute type definition for `AWS::IdentityStore::GroupMembership`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-identitystore-groupmembership.html#aws-resource-identitystore-groupmembership-return-values}
 */
export type IdentityStoreGroupMembershipAttributes = {
  /**
   * The identifier for a GroupMembership in the identity store.
   * @minLength `1`
   * @maxLength `47`
   * @pattern `^([0-9a-f]{10}-|)[A-Fa-f0-9]{8}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{12}$`
   */
  MembershipId: string;
};
/**
 * Type definition for `AWS::IdentityStore::GroupMembership.MemberId`.
 * An object containing the identifier of a group member.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-identitystore-groupmembership-memberid.html}
 */
export type MemberId = {
  /**
   * The identifier for a user in the identity store.
   * @minLength `1`
   * @maxLength `47`
   * @pattern `^([0-9a-f]{10}-|)[A-Fa-f0-9]{8}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{12}$`
   */
  UserId: string;
};
/**
 * Resource type definition for `AWS::IdentityStore::GroupMembership`.
 * Resource Type Definition for AWS:IdentityStore::GroupMembership
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-identitystore-groupmembership.html}
 */
export class IdentityStoreGroupMembership extends $Resource<
  "AWS::IdentityStore::GroupMembership",
  IdentityStoreGroupMembershipProperties,
  IdentityStoreGroupMembershipAttributes
> {
  public static readonly Type = "AWS::IdentityStore::GroupMembership";
  public static readonly AttributeNames = ["MembershipId" as const];
  constructor(
    logicalId: string,
    properties: IdentityStoreGroupMembershipProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      IdentityStoreGroupMembership.Type,
      properties,
      IdentityStoreGroupMembership.AttributeNames,
      options,
    );
  }
}
