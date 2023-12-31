import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::Redshift::ClusterSecurityGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersecuritygroup.html}
 */
export type RedshiftClusterSecurityGroupProperties = {
  Description: string;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Redshift::ClusterSecurityGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersecuritygroup.html#aws-resource-redshift-clustersecuritygroup-return-values}
 */
export type RedshiftClusterSecurityGroupAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::Redshift::ClusterSecurityGroup.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-clustersecuritygroup-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::Redshift::ClusterSecurityGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersecuritygroup.html}
 */
export class RedshiftClusterSecurityGroup extends $Resource<
  "AWS::Redshift::ClusterSecurityGroup",
  RedshiftClusterSecurityGroupProperties,
  RedshiftClusterSecurityGroupAttributes
> {
  public static readonly Type = "AWS::Redshift::ClusterSecurityGroup";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: RedshiftClusterSecurityGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      RedshiftClusterSecurityGroup.Type,
      properties,
      RedshiftClusterSecurityGroup.AttributeNames,
      options,
    );
  }
}
