import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::EC2::EIPAssociation`.
 * Resource schema for EC2 EIP association.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-eipassociation.html}
 */
export type EC2EIPAssociationProperties = {
  /**
   * The allocation ID. This is required for EC2-VPC.
   */
  AllocationId?: string;
  /**
   * The Elastic IP address to associate with the instance.
   */
  EIP?: string;
  /**
   * The ID of the instance.
   */
  InstanceId?: string;
  /**
   * The ID of the network interface.
   */
  NetworkInterfaceId?: string;
  /**
   * The primary or secondary private IP address to associate with the Elastic IP address.
   */
  PrivateIpAddress?: string;
};
/**
 * Attribute type definition for `AWS::EC2::EIPAssociation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-eipassociation.html#aws-resource-ec2-eipassociation-return-values}
 */
export type EC2EIPAssociationAttributes = {
  /**
   * Composite ID of non-empty properties, to determine the identification.
   */
  Id: string;
};
/**
 * Resource type definition for `AWS::EC2::EIPAssociation`.
 * Resource schema for EC2 EIP association.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-eipassociation.html}
 */
export class EC2EIPAssociation extends $Resource<
  "AWS::EC2::EIPAssociation",
  EC2EIPAssociationProperties,
  EC2EIPAssociationAttributes
> {
  public static readonly Type = "AWS::EC2::EIPAssociation";
  constructor(
    logicalId: string,
    properties: EC2EIPAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2EIPAssociation.Type, properties, options);
  }
}
