import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::EC2::SecurityGroupIngress
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-securitygroupingress.html}
 */
export type EC2SecurityGroupIngressProperties = {
  CidrIp?: string;
  CidrIpv6?: string;
  Description?: string;
  FromPort?: number;
  GroupId?: string;
  GroupName?: string;
  IpProtocol: string;
  SourcePrefixListId?: string;
  SourceSecurityGroupId?: string;
  SourceSecurityGroupName?: string;
  SourceSecurityGroupOwnerId?: string;
  ToPort?: number;
};
/**
 * Attribute type definition for `AWS::EC2::SecurityGroupIngress`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-securitygroupingress.html#aws-resource-ec2-securitygroupingress-return-values}
 */
export type EC2SecurityGroupIngressAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::EC2::SecurityGroupIngress
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-securitygroupingress.html}
 */
export class EC2SecurityGroupIngress extends $Resource<
  "AWS::EC2::SecurityGroupIngress",
  EC2SecurityGroupIngressProperties,
  EC2SecurityGroupIngressAttributes
> {
  public static readonly Type = "AWS::EC2::SecurityGroupIngress";
  constructor(
    logicalId: string,
    properties: EC2SecurityGroupIngressProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2SecurityGroupIngress.Type, properties, options);
  }
}
