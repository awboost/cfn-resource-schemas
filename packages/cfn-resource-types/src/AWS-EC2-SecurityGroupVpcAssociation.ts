import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for the AWS::EC2::SecurityGroupVpcAssociation resource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-securitygroupvpcassociation.html}
 */
export type EC2SecurityGroupVpcAssociationProperties = {
  /**
   * The group ID of the specified security group.
   */
  GroupId: string;
  /**
   * The ID of the VPC in the security group vpc association.
   */
  VpcId: string;
};
/**
 * Attribute type definition for `AWS::EC2::SecurityGroupVpcAssociation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-securitygroupvpcassociation.html#aws-resource-ec2-securitygroupvpcassociation-return-values}
 */
export type EC2SecurityGroupVpcAssociationAttributes = {
  /**
   * The state of the security group vpc association.
   */
  State: SecurityGroupVpcAssociationState;
  /**
   * The reason for the state of the security group vpc association.
   */
  StateReason: string;
  /**
   * The owner of the VPC in the security group vpc association.
   */
  VpcOwnerId: string;
};
/**
 * Type definition for `AWS::EC2::SecurityGroupVpcAssociation.SecurityGroupVpcAssociationState`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-securitygroupvpcassociation-securitygroupvpcassociationstate.html}
 */
export type SecurityGroupVpcAssociationState =
  | "associating"
  | "associated"
  | "association-failed"
  | "disassociating"
  | "disassociated"
  | "disassociation-failed";
/**
 * Resource type definition for the AWS::EC2::SecurityGroupVpcAssociation resource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-securitygroupvpcassociation.html}
 */
export class EC2SecurityGroupVpcAssociation extends $Resource<
  "AWS::EC2::SecurityGroupVpcAssociation",
  EC2SecurityGroupVpcAssociationProperties,
  EC2SecurityGroupVpcAssociationAttributes
> {
  public static readonly Type = "AWS::EC2::SecurityGroupVpcAssociation";
  constructor(
    logicalId: string,
    properties: EC2SecurityGroupVpcAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2SecurityGroupVpcAssociation.Type, properties, options);
  }
}
