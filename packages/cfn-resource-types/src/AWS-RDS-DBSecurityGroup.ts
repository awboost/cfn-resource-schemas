import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::RDS::DBSecurityGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbsecuritygroup.html}
 */
export type RDSDBSecurityGroupProperties = {
  DBSecurityGroupIngress: Ingress[];
  EC2VpcId?: string;
  GroupDescription: string;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::RDS::DBSecurityGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbsecuritygroup.html#aws-resource-rds-dbsecuritygroup-return-values}
 */
export type RDSDBSecurityGroupAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::RDS::DBSecurityGroup.Ingress`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbsecuritygroup-ingress.html}
 */
export type Ingress = {
  CIDRIP?: string;
  EC2SecurityGroupId?: string;
  EC2SecurityGroupName?: string;
  EC2SecurityGroupOwnerId?: string;
};
/**
 * Type definition for `AWS::RDS::DBSecurityGroup.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbsecuritygroup-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::RDS::DBSecurityGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbsecuritygroup.html}
 */
export class RDSDBSecurityGroup extends $Resource<
  "AWS::RDS::DBSecurityGroup",
  RDSDBSecurityGroupProperties,
  RDSDBSecurityGroupAttributes
> {
  public static readonly Type = "AWS::RDS::DBSecurityGroup";
  constructor(
    logicalId: string,
    properties: RDSDBSecurityGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, RDSDBSecurityGroup.Type, properties, options);
  }
}
