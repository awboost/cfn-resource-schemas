import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: RDSDBSecurityGroupIngressProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      RDSDBSecurityGroupIngress.Type,
      properties,
      RDSDBSecurityGroupIngress.AttributeNames,
      options,
    );
  }
}
