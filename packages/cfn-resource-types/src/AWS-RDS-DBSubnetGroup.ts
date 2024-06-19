import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The ``AWS::RDS::DBSubnetGroup`` resource creates a database subnet group. Subnet groups must contain at least two subnets in two different Availability Zones in the same region.
 For more information, see [Working with DB subnet groups](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html#USER_VPC.Subnets) in the *Amazon RDS User Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbsubnetgroup.html}
 */
export type RDSDBSubnetGroupProperties = {
  /**
   * The description for the DB subnet group.
   */
  DBSubnetGroupDescription: string;
  /**
     * The name for the DB subnet group. This value is stored as a lowercase string.
     Constraints: Must contain no more than 255 lowercase alphanumeric characters or hyphens. Must not be "Default".
     Example: ``mysubnetgroup``
     */
  DBSubnetGroupName?: string;
  /**
   * The EC2 Subnet IDs for the DB subnet group.
   */
  SubnetIds: string[];
  /**
   * An optional array of key-value pairs to apply to this DB subnet group.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Type definition for `AWS::RDS::DBSubnetGroup.Tag`.
 * Metadata assigned to an Amazon RDS resource consisting of a key-value pair.
 For more information, see [Tagging Amazon RDS Resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the *Amazon RDS User Guide* or [Tagging Amazon Aurora and Amazon RDS Resources](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html) in the *Amazon Aurora User Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbsubnetgroup-tag.html}
 */
export type Tag = {
  /**
   * A key is the required name of the tag. The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with ``aws:`` or ``rds:``. The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$").
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * A value is the optional value of the tag. The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with ``aws:`` or ``rds:``. The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$").
   * @minLength `0`
   * @maxLength `256`
   */
  Value?: string;
};
/**
 * The ``AWS::RDS::DBSubnetGroup`` resource creates a database subnet group. Subnet groups must contain at least two subnets in two different Availability Zones in the same region.
 For more information, see [Working with DB subnet groups](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html#USER_VPC.Subnets) in the *Amazon RDS User Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbsubnetgroup.html}
 */
export class RDSDBSubnetGroup extends $Resource<
  "AWS::RDS::DBSubnetGroup",
  RDSDBSubnetGroupProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::RDS::DBSubnetGroup";
  constructor(
    logicalId: string,
    properties: RDSDBSubnetGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, RDSDBSubnetGroup.Type, properties, options);
  }
}
