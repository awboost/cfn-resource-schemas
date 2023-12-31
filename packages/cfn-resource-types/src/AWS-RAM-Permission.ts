import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for AWS::RAM::Permission
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ram-permission.html}
 */
export type RAMPermissionProperties = {
  /**
   * The name of the permission.
   */
  Name: string;
  /**
   * Policy template for the permission.
   */
  PolicyTemplate: Record<string, any>;
  /**
   * The resource type this permission can be used with.
   */
  ResourceType: string;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::RAM::Permission`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ram-permission.html#aws-resource-ram-permission-return-values}
 */
export type RAMPermissionAttributes = {
  Arn: string;
  /**
   * Set to true to use this as the default permission.
   */
  IsResourceTypeDefault: boolean;
  PermissionType: string;
  /**
   * Version of the permission.
   */
  Version: string;
};
/**
 * Type definition for `AWS::RAM::Permission.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ram-permission-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for AWS::RAM::Permission
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ram-permission.html}
 */
export class RAMPermission extends $Resource<
  "AWS::RAM::Permission",
  RAMPermissionProperties,
  RAMPermissionAttributes
> {
  public static readonly Type = "AWS::RAM::Permission";
  constructor(
    logicalId: string,
    properties: RAMPermissionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, RAMPermission.Type, properties, options);
  }
}
