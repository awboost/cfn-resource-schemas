import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Redshift::ClusterSecurityGroupIngress
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersecuritygroupingress.html}
 */
export type RedshiftClusterSecurityGroupIngressProperties = {
  CIDRIP?: string;
  ClusterSecurityGroupName: string;
  EC2SecurityGroupName?: string;
  EC2SecurityGroupOwnerId?: string;
};
/**
 * Attribute type definition for `AWS::Redshift::ClusterSecurityGroupIngress`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersecuritygroupingress.html#aws-resource-redshift-clustersecuritygroupingress-return-values}
 */
export type RedshiftClusterSecurityGroupIngressAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::Redshift::ClusterSecurityGroupIngress
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersecuritygroupingress.html}
 */
export class RedshiftClusterSecurityGroupIngress extends $Resource<
  "AWS::Redshift::ClusterSecurityGroupIngress",
  RedshiftClusterSecurityGroupIngressProperties,
  RedshiftClusterSecurityGroupIngressAttributes
> {
  public static readonly Type = "AWS::Redshift::ClusterSecurityGroupIngress";
  constructor(
    logicalId: string,
    properties: RedshiftClusterSecurityGroupIngressProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      RedshiftClusterSecurityGroupIngress.Type,
      properties,
      options,
    );
  }
}
