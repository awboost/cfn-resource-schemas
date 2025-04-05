import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::Neptune::DBSubnetGroup type creates an Amazon Neptune DB subnet group. Subnet groups must contain at least two subnets in two different Availability Zones in the same AWS Region.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbsubnetgroup.html}
 */
export type NeptuneDBSubnetGroupProperties = {
  /**
   * The description for the DB subnet group.
   */
  DBSubnetGroupDescription: string;
  /**
     * The name for the DB subnet group. This value is stored as a lowercase string.
    
    Constraints: Must contain no more than 255 lowercase alphanumeric characters or hyphens. Must not be "Default".
    
    Example: mysubnetgroup
    
    
     */
  DBSubnetGroupName?: string;
  /**
   * The Amazon EC2 subnet IDs for the DB subnet group.
   */
  SubnetIds: string[];
  /**
   * An optional array of key-value pairs to apply to this DB subnet group.
   */
  Tags?: Tag[];
};
/**
 * Type definition for `AWS::Neptune::DBSubnetGroup.Tag`.
 * An optional array of key-value pairs to apply to this DB subnet group.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-neptune-dbsubnetgroup-tag.html}
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
 * The AWS::Neptune::DBSubnetGroup type creates an Amazon Neptune DB subnet group. Subnet groups must contain at least two subnets in two different Availability Zones in the same AWS Region.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbsubnetgroup.html}
 */
export class NeptuneDBSubnetGroup extends $Resource<
  "AWS::Neptune::DBSubnetGroup",
  NeptuneDBSubnetGroupProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::Neptune::DBSubnetGroup";
  constructor(
    logicalId: string,
    properties: NeptuneDBSubnetGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, NeptuneDBSubnetGroup.Type, properties, options);
  }
}
