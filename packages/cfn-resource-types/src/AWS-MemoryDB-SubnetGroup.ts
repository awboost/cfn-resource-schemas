import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::MemoryDB::SubnetGroup resource creates an Amazon MemoryDB Subnet Group.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-subnetgroup.html}
 */
export type MemoryDBSubnetGroupProperties = {
  /**
   * An optional description of the subnet group.
   */
  Description?: string;
  /**
   * The name of the subnet group. This value must be unique as it also serves as the subnet group identifier.
   * @pattern `[a-z][a-z0-9\-]*`
   */
  SubnetGroupName: string;
  /**
   * A list of VPC subnet IDs for the subnet group.
   */
  SubnetIds: string[];
  /**
   * An array of key-value pairs to apply to this subnet group.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::MemoryDB::SubnetGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-subnetgroup.html#aws-resource-memorydb-subnetgroup-return-values}
 */
export type MemoryDBSubnetGroupAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the subnet group.
   */
  ARN: string;
  /**
   * Supported network types would be a list of network types supported by subnet group and can be either [ipv4] or [ipv4, dual_stack] or [ipv6].
   */
  SupportedNetworkTypes: string[];
};
/**
 * Type definition for `AWS::MemoryDB::SubnetGroup.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-memorydb-subnetgroup-tag.html}
 */
export type Tag = {
  /**
   * The key for the tag. May not be null.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!aws:)(?!memorydb:)[a-zA-Z0-9 _\.\/=+:\-@]{1,128}$`
   */
  Key: string;
  /**
   * The tag's value. May be null.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^(?!aws:)(?!memorydb:)[a-zA-Z0-9 _\.\/=+:\-@]{1,256}$`
   */
  Value: string;
};
/**
 * The AWS::MemoryDB::SubnetGroup resource creates an Amazon MemoryDB Subnet Group.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-subnetgroup.html}
 */
export class MemoryDBSubnetGroup extends $Resource<
  "AWS::MemoryDB::SubnetGroup",
  MemoryDBSubnetGroupProperties,
  MemoryDBSubnetGroupAttributes
> {
  public static readonly Type = "AWS::MemoryDB::SubnetGroup";
  constructor(
    logicalId: string,
    properties: MemoryDBSubnetGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, MemoryDBSubnetGroup.Type, properties, options);
  }
}
