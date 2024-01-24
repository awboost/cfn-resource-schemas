import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::EC2::SecurityGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-securitygroup.html}
 */
export type EC2SecurityGroupProperties = {
  GroupDescription: string;
  GroupName?: string;
  SecurityGroupEgress?: Egress[];
  SecurityGroupIngress?: Ingress[];
  Tags?: Tag[];
  VpcId?: string;
};
/**
 * Attribute type definition for `AWS::EC2::SecurityGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-securitygroup.html#aws-resource-ec2-securitygroup-return-values}
 */
export type EC2SecurityGroupAttributes = {
  GroupId: string;
  Id: string;
};
/**
 * Type definition for `AWS::EC2::SecurityGroup.Egress`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-securitygroup-egress.html}
 */
export type Egress = {
  CidrIp?: string;
  CidrIpv6?: string;
  Description?: string;
  DestinationPrefixListId?: string;
  DestinationSecurityGroupId?: string;
  FromPort?: number;
  IpProtocol: string;
  ToPort?: number;
};
/**
 * Type definition for `AWS::EC2::SecurityGroup.Ingress`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-securitygroup-ingress.html}
 */
export type Ingress = {
  CidrIp?: string;
  CidrIpv6?: string;
  Description?: string;
  FromPort?: number;
  IpProtocol: string;
  SourcePrefixListId?: string;
  SourceSecurityGroupId?: string;
  SourceSecurityGroupName?: string;
  SourceSecurityGroupOwnerId?: string;
  ToPort?: number;
};
/**
 * Type definition for `AWS::EC2::SecurityGroup.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-securitygroup-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::EC2::SecurityGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-securitygroup.html}
 */
export class EC2SecurityGroup extends $Resource<
  "AWS::EC2::SecurityGroup",
  EC2SecurityGroupProperties,
  EC2SecurityGroupAttributes
> {
  public static readonly Type = "AWS::EC2::SecurityGroup";
  constructor(
    logicalId: string,
    properties: EC2SecurityGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2SecurityGroup.Type, properties, options);
  }
}
