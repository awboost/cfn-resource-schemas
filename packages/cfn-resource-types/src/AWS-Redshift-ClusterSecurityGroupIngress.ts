import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: RedshiftClusterSecurityGroupIngressProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      RedshiftClusterSecurityGroupIngress.Type,
      properties,
      RedshiftClusterSecurityGroupIngress.AttributeNames,
      options,
    );
  }
}
