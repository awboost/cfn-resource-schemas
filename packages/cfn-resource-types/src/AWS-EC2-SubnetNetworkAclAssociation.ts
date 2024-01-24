import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::EC2::SubnetNetworkAclAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnetnetworkaclassociation.html}
 */
export type EC2SubnetNetworkAclAssociationProperties = {
  /**
   * The ID of the network ACL
   */
  NetworkAclId: string;
  /**
   * The ID of the subnet
   */
  SubnetId: string;
};
/**
 * Attribute type definition for `AWS::EC2::SubnetNetworkAclAssociation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnetnetworkaclassociation.html#aws-resource-ec2-subnetnetworkaclassociation-return-values}
 */
export type EC2SubnetNetworkAclAssociationAttributes = {
  AssociationId: string;
};
/**
 * Resource Type definition for AWS::EC2::SubnetNetworkAclAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnetnetworkaclassociation.html}
 */
export class EC2SubnetNetworkAclAssociation extends $Resource<
  "AWS::EC2::SubnetNetworkAclAssociation",
  EC2SubnetNetworkAclAssociationProperties,
  EC2SubnetNetworkAclAssociationAttributes
> {
  public static readonly Type = "AWS::EC2::SubnetNetworkAclAssociation";
  constructor(
    logicalId: string,
    properties: EC2SubnetNetworkAclAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2SubnetNetworkAclAssociation.Type, properties, options);
  }
}
