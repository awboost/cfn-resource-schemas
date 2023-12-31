import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::EC2::VPCPeeringConnection
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcpeeringconnection.html}
 */
export type EC2VPCPeeringConnectionProperties = {
  /**
   * The AWS account ID of the owner of the accepter VPC.
   */
  PeerOwnerId?: string;
  /**
   * The Region code for the accepter VPC, if the accepter VPC is located in a Region other than the Region in which you make the request.
   */
  PeerRegion?: string;
  /**
   * The Amazon Resource Name (ARN) of the VPC peer role for the peering connection in another AWS account.
   */
  PeerRoleArn?: string;
  /**
   * The ID of the VPC with which you are creating the VPC peering connection. You must specify this parameter in the request.
   */
  PeerVpcId: string;
  Tags?: Tag[];
  /**
   * The ID of the VPC.
   */
  VpcId: string;
};
/**
 * Attribute type definition for `AWS::EC2::VPCPeeringConnection`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcpeeringconnection.html#aws-resource-ec2-vpcpeeringconnection-return-values}
 */
export type EC2VPCPeeringConnectionAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::EC2::VPCPeeringConnection.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-vpcpeeringconnection-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::EC2::VPCPeeringConnection
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcpeeringconnection.html}
 */
export class EC2VPCPeeringConnection extends $Resource<
  "AWS::EC2::VPCPeeringConnection",
  EC2VPCPeeringConnectionProperties,
  EC2VPCPeeringConnectionAttributes
> {
  public static readonly Type = "AWS::EC2::VPCPeeringConnection";
  constructor(
    logicalId: string,
    properties: EC2VPCPeeringConnectionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2VPCPeeringConnection.Type, properties, options);
  }
}
