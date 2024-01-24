import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::ElastiCache::UserGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-usergroup.html}
 */
export type ElastiCacheUserGroupProperties = {
  /**
   * Must be redis.
   */
  Engine: "redis";
  /**
   * An array of key-value pairs to apply to this user.
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * The ID of the user group.
   * @pattern `[a-z][a-z0-9\\-]*`
   */
  UserGroupId: string;
  /**
   * List of users associated to this user group.
   */
  UserIds: string[];
};
/**
 * Attribute type definition for `AWS::ElastiCache::UserGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-usergroup.html#aws-resource-elasticache-usergroup-return-values}
 */
export type ElastiCacheUserGroupAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the user account.
   */
  Arn: string;
  /**
   * Indicates user group status. Can be "creating", "active", "modifying", "deleting".
   */
  Status: string;
};
/**
 * Type definition for `AWS::ElastiCache::UserGroup.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-usergroup-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with 'aws:'. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!aws:)[a-zA-Z0-9 _\.\/=+:\-@]*$`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9 _\.\/=+:\-@]*$`
   */
  Value?: string;
};
/**
 * Resource Type definition for AWS::ElastiCache::UserGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-usergroup.html}
 */
export class ElastiCacheUserGroup extends $Resource<
  "AWS::ElastiCache::UserGroup",
  ElastiCacheUserGroupProperties,
  ElastiCacheUserGroupAttributes
> {
  public static readonly Type = "AWS::ElastiCache::UserGroup";
  constructor(
    logicalId: string,
    properties: ElastiCacheUserGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ElastiCacheUserGroup.Type, properties, options);
  }
}
