import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::MemoryDB::ACL
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-acl.html}
 */
export type MemoryDBACLProperties = {
  /**
   * The name of the acl.
   * @pattern `[a-z][a-z0-9\\-]*`
   */
  ACLName: string;
  /**
   * An array of key-value pairs to apply to this cluster.
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * List of users associated to this acl.
   */
  UserNames?: string[];
};
/**
 * Attribute type definition for `AWS::MemoryDB::ACL`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-acl.html#aws-resource-memorydb-acl-return-values}
 */
export type MemoryDBACLAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the acl.
   */
  Arn: string;
  /**
   * Indicates acl status. Can be "creating", "active", "modifying", "deleting".
   */
  Status: string;
};
/**
 * Type definition for `AWS::MemoryDB::ACL.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-memorydb-acl-tag.html}
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
 * Resource Type definition for AWS::MemoryDB::ACL
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-acl.html}
 */
export class MemoryDBACL extends $Resource<
  "AWS::MemoryDB::ACL",
  MemoryDBACLProperties,
  MemoryDBACLAttributes
> {
  public static readonly Type = "AWS::MemoryDB::ACL";
  constructor(
    logicalId: string,
    properties: MemoryDBACLProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, MemoryDBACL.Type, properties, options);
  }
}
