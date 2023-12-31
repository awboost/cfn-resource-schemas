import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::RDS::DBSecurityGroupIngress
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbsecuritygroupingress.html}
 */
export type RDSDBSecurityGroupIngressProperties = {
  CIDRIP?: string;
  DBSecurityGroupName: string;
  EC2SecurityGroupId?: string;
  EC2SecurityGroupName?: string;
  EC2SecurityGroupOwnerId?: string;
};
/**
 * Attribute type definition for `AWS::RDS::DBSecurityGroupIngress`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbsecuritygroupingress.html#aws-resource-rds-dbsecuritygroupingress-return-values}
 */
export type RDSDBSecurityGroupIngressAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::RDS::DBSecurityGroupIngress
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbsecuritygroupingress.html}
 */
export class RDSDBSecurityGroupIngress extends $Resource<
  "AWS::RDS::DBSecurityGroupIngress",
  RDSDBSecurityGroupIngressProperties,
  RDSDBSecurityGroupIngressAttributes
> {
  public static readonly Type = "AWS::RDS::DBSecurityGroupIngress";
  constructor(
    logicalId: string,
    properties: RDSDBSecurityGroupIngressProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, RDSDBSecurityGroupIngress.Type, properties, options);
  }
}
