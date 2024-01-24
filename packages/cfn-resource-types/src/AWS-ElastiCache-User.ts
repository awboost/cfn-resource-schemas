import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::ElastiCache::User
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-user.html}
 */
export type ElastiCacheUserProperties = {
  /**
   * Access permissions string used for this user account.
   */
  AccessString?: string;
  AuthenticationMode?: {
    /**
     * Passwords used for this user account. You can create up to two passwords for each user.
     */
    Passwords?: string[];
    /**
     * Authentication Type
     */
    Type: "password" | "no-password-required" | "iam";
  };
  /**
   * Must be redis.
   */
  Engine: "redis";
  /**
   * Indicates a password is not required for this user account.
   */
  NoPasswordRequired?: boolean;
  /**
   * Passwords used for this user account. You can create up to two passwords for each user.
   */
  Passwords?: string[];
  /**
   * An array of key-value pairs to apply to this user.
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * The ID of the user.
   * @pattern `[a-z][a-z0-9\\-]*`
   */
  UserId: string;
  /**
   * The username of the user.
   */
  UserName: string;
};
/**
 * Attribute type definition for `AWS::ElastiCache::User`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-user.html#aws-resource-elasticache-user-return-values}
 */
export type ElastiCacheUserAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the user account.
   */
  Arn: string;
  /**
   * Indicates the user status. Can be "active", "modifying" or "deleting".
   */
  Status: string;
};
/**
 * Type definition for `AWS::ElastiCache::User.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-user-tag.html}
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
 * Resource Type definition for AWS::ElastiCache::User
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-user.html}
 */
export class ElastiCacheUser extends $Resource<
  "AWS::ElastiCache::User",
  ElastiCacheUserProperties,
  ElastiCacheUserAttributes
> {
  public static readonly Type = "AWS::ElastiCache::User";
  constructor(
    logicalId: string,
    properties: ElastiCacheUserProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ElastiCacheUser.Type, properties, options);
  }
}
