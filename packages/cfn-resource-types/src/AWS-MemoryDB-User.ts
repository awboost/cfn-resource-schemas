import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::MemoryDB::User
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-user.html}
 */
export type MemoryDBUserProperties = {
  /**
   * Access permissions string used for this user account.
   */
  AccessString?: string;
  AuthenticationMode?: {
    /**
     * Passwords used for this user account. You can create up to two passwords for each user.
     * @minLength `1`
     * @maxLength `2`
     */
    Passwords?: string[];
    /**
     * Type of authentication strategy for this user.
     */
    Type?: "password" | "iam";
  };
  /**
   * An array of key-value pairs to apply to this user.
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * The name of the user.
   * @pattern `[a-z][a-z0-9\\-]*`
   */
  UserName: string;
};
/**
 * Attribute type definition for `AWS::MemoryDB::User`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-user.html#aws-resource-memorydb-user-return-values}
 */
export type MemoryDBUserAttributes = {
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
 * Type definition for `AWS::MemoryDB::User.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-memorydb-user-tag.html}
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
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9 _\.\/=+:\-@]*$`
   */
  Value?: string;
};
/**
 * Resource Type definition for AWS::MemoryDB::User
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-user.html}
 */
export class MemoryDBUser extends $Resource<
  "AWS::MemoryDB::User",
  MemoryDBUserProperties,
  MemoryDBUserAttributes
> {
  public static readonly Type = "AWS::MemoryDB::User";
  public static readonly AttributeNames = ["Arn" as const, "Status" as const];
  constructor(
    logicalId: string,
    properties: MemoryDBUserProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      MemoryDBUser.Type,
      properties,
      MemoryDBUser.AttributeNames,
      options,
    );
  }
}
