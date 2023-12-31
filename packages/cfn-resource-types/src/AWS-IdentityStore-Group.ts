import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::IdentityStore::Group
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-identitystore-group.html}
 */
export type IdentityStoreGroupProperties = {
  /**
   * A string containing the description of the group.
   * @minLength `1`
   * @maxLength `1024`
   * @pattern `^[\p{L}\p{M}\p{S}\p{N}\p{P}\t\n\r  　]+$`
   */
  Description?: string;
  /**
   * A string containing the name of the group. This value is commonly displayed when the group is referenced.
   * @minLength `1`
   * @maxLength `1024`
   * @pattern `^[\p{L}\p{M}\p{S}\p{N}\p{P}\t\n\r  ]+$`
   */
  DisplayName: string;
  /**
   * The globally unique identifier for the identity store.
   * @minLength `1`
   * @maxLength `36`
   * @pattern `^d-[0-9a-f]{10}$|^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$`
   */
  IdentityStoreId: string;
};
/**
 * Attribute type definition for `AWS::IdentityStore::Group`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-identitystore-group.html#aws-resource-identitystore-group-return-values}
 */
export type IdentityStoreGroupAttributes = {
  /**
   * The unique identifier for a group in the identity store.
   * @minLength `1`
   * @maxLength `47`
   * @pattern `^([0-9a-f]{10}-|)[A-Fa-f0-9]{8}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{12}$`
   */
  GroupId: string;
};
/**
 * Resource Type definition for AWS::IdentityStore::Group
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-identitystore-group.html}
 */
export class IdentityStoreGroup extends $Resource<
  "AWS::IdentityStore::Group",
  IdentityStoreGroupProperties,
  IdentityStoreGroupAttributes
> {
  public static readonly Type = "AWS::IdentityStore::Group";
  public static readonly AttributeNames = ["GroupId" as const];
  constructor(
    logicalId: string,
    properties: IdentityStoreGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      IdentityStoreGroup.Type,
      properties,
      IdentityStoreGroup.AttributeNames,
      options,
    );
  }
}
