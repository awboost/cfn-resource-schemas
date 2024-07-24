import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::EC2::EIPAssociation`.
 * Associates an Elastic IP address with an instance or a network interface. Before you can use an Elastic IP address, you must allocate it to your account. For more information about working with Elastic IP addresses, see [Elastic IP address concepts and rules](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-eips.html#vpc-eip-overview).
 You must specify ``AllocationId`` and either ``InstanceId``, ``NetworkInterfaceId``, or ``PrivateIpAddress``.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-eipassociation.html}
 */
export type EC2EIPAssociationProperties = {
  /**
   * The allocation ID. This is required.
   */
  AllocationId?: string;
  EIP?: string;
  /**
   * The ID of the instance. The instance must have exactly one attached network interface. You can specify either the instance ID or the network interface ID, but not both.
   */
  InstanceId?: string;
  /**
     * The ID of the network interface. If the instance has more than one network interface, you must specify a network interface ID.
     You can specify either the instance ID or the network interface ID, but not both.
     */
  NetworkInterfaceId?: string;
  /**
   * The primary or secondary private IP address to associate with the Elastic IP address. If no private IP address is specified, the Elastic IP address is associated with the primary private IP address.
   */
  PrivateIpAddress?: string;
};
/**
 * Attribute type definition for `AWS::EC2::EIPAssociation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-eipassociation.html#aws-resource-ec2-eipassociation-return-values}
 */
export type EC2EIPAssociationAttributes = {
  Id: string;
};
/**
 * Resource type definition for `AWS::EC2::EIPAssociation`.
 * Associates an Elastic IP address with an instance or a network interface. Before you can use an Elastic IP address, you must allocate it to your account. For more information about working with Elastic IP addresses, see [Elastic IP address concepts and rules](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-eips.html#vpc-eip-overview).
 You must specify ``AllocationId`` and either ``InstanceId``, ``NetworkInterfaceId``, or ``PrivateIpAddress``.
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
