import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
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
  constructor(
    logicalId: string,
    properties: RedshiftClusterSecurityGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, RedshiftClusterSecurityGroup.Type, properties, options);
  }
}
