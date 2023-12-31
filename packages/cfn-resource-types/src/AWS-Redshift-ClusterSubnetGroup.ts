import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for `AWS::Redshift::ClusterSubnetGroup`.
 * Specifies an Amazon Redshift subnet group.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersubnetgroup.html}
 */
export type RedshiftClusterSubnetGroupProperties = {
  /**
   * The description of the parameter group.
   */
  Description: string;
  /**
   * The list of VPC subnet IDs
   * @maxLength `20`
   */
  SubnetIds: string[];
  /**
   * The list of tags for the cluster parameter group.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Redshift::ClusterSubnetGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersubnetgroup.html#aws-resource-redshift-clustersubnetgroup-return-values}
 */
export type RedshiftClusterSubnetGroupAttributes = {
  /**
   * This name must be unique for all subnet groups that are created by your AWS account. If costumer do not provide it, cloudformation will generate it. Must not be "Default".
   * @maxLength `255`
   */
  ClusterSubnetGroupName: string;
};
/**
 * Type definition for `AWS::Redshift::ClusterSubnetGroup.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-clustersubnetgroup-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `127`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `255`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::Redshift::ClusterSubnetGroup`.
 * Specifies an Amazon Redshift subnet group.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersubnetgroup.html}
 */
export class RedshiftClusterSubnetGroup extends $Resource<
  "AWS::Redshift::ClusterSubnetGroup",
  RedshiftClusterSubnetGroupProperties,
  RedshiftClusterSubnetGroupAttributes
> {
  public static readonly Type = "AWS::Redshift::ClusterSubnetGroup";
  public static readonly AttributeNames = ["ClusterSubnetGroupName" as const];
  constructor(
    logicalId: string,
    properties: RedshiftClusterSubnetGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      RedshiftClusterSubnetGroup.Type,
      properties,
      RedshiftClusterSubnetGroup.AttributeNames,
      options,
    );
  }
}
