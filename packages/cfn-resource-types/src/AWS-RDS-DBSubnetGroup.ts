import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * The AWS::RDS::DBSubnetGroup resource creates a database subnet group. Subnet groups must contain at least two subnets in two different Availability Zones in the same region.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbsubnetgroup.html}
 */
export type RDSDBSubnetGroupProperties = {
  DBSubnetGroupDescription: string;
  /**
   * @pattern `^(?!default$)[a-zA-Z]{1}[a-zA-Z0-9-_\.\s]{0,254}$`
   */
  DBSubnetGroupName?: string;
  SubnetIds: string[];
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Type definition for `AWS::RDS::DBSubnetGroup.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbsubnetgroup-tag.html}
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
   * @maxLength `256`
   */
  Value?: string;
};
/**
 * The AWS::RDS::DBSubnetGroup resource creates a database subnet group. Subnet groups must contain at least two subnets in two different Availability Zones in the same region.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbsubnetgroup.html}
 */
export class RDSDBSubnetGroup extends $Resource<
  "AWS::RDS::DBSubnetGroup",
  RDSDBSubnetGroupProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::RDS::DBSubnetGroup";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: RDSDBSubnetGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      RDSDBSubnetGroup.Type,
      properties,
      RDSDBSubnetGroup.AttributeNames,
      options,
    );
  }
}
