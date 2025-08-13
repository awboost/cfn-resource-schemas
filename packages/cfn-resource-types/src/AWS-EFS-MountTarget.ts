import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The ``AWS::EFS::MountTarget`` resource is an Amazon EFS resource that creates a mount target for an EFS file system. You can then mount the file system on Amazon EC2 instances or other resources by using the mount target.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-mounttarget.html}
 */
export type EFSMountTargetProperties = {
  /**
   * The ID of the file system for which to create the mount target.
   */
  FileSystemId: string;
  /**
   * If the ``IpAddressType`` for the mount target is IPv4 ( ``IPV4_ONLY`` or ``DUAL_STACK``), then specify the IPv4 address to use. If you do not specify an ``IpAddress``, then Amazon EFS selects an unused IP address from the subnet specified for ``SubnetId``.
   */
  IpAddress?: string;
  /**
     * The IP address type for the mount target. The possible values are ``IPV4_ONLY`` (only IPv4 addresses), ``IPV6_ONLY`` (only IPv6 addresses), and ``DUAL_STACK`` (dual-stack, both IPv4 and IPv6 addresses). If you don’t specify an ``IpAddressType``, then ``IPV4_ONLY`` is used.
      The ``IPAddressType`` must match the IP type of the subnet. Additionally, the ``IPAddressType`` parameter overrides the value set as the default IP address for the subnet in the VPC. For example, if the ``IPAddressType`` is ``IPV4_ONLY`` and ``AssignIpv6AddressOnCreation`` is ``true``, then IPv4 is used for the mount target. For more information, see [Modify the IP addressing attributes of your subnet](https://docs.aws.amazon.com/vpc/latest/userguide/subnet-public-ip.html).
     */
  IpAddressType?: "IPV4_ONLY" | "IPV6_ONLY" | "DUAL_STACK";
  /**
   * If the ``IPAddressType`` for the mount target is IPv6 (``IPV6_ONLY`` or ``DUAL_STACK``), then specify the IPv6 address to use. If you do not specify an ``Ipv6Address``, then Amazon EFS selects an unused IP address from the subnet specified for ``SubnetId``.
   */
  Ipv6Address?: string;
  /**
   * VPC security group IDs, of the form ``sg-xxxxxxxx``. These must be for the same VPC as the subnet specified. The maximum number of security groups depends on account quota. For more information, see [Amazon VPC Quotas](https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html) in the *Amazon VPC User Guide* (see the *Security Groups* table). If you don't specify a security group, then Amazon EFS uses the default security group for the subnet's VPC.
   */
  SecurityGroups: string[];
  /**
   * The ID of the subnet to add the mount target in. For One Zone file systems, use the subnet that is associated with the file system's Availability Zone. The subnet type must be the same type as the ``IpAddressType``.
   */
  SubnetId: string;
};
/**
 * Attribute type definition for `AWS::EFS::MountTarget`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-mounttarget.html#aws-resource-efs-mounttarget-return-values}
 */
export type EFSMountTargetAttributes = {
  Id: string;
};
/**
 * The ``AWS::EFS::MountTarget`` resource is an Amazon EFS resource that creates a mount target for an EFS file system. You can then mount the file system on Amazon EC2 instances or other resources by using the mount target.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-mounttarget.html}
 */
export class EFSMountTarget extends $Resource<
  "AWS::EFS::MountTarget",
  EFSMountTargetProperties,
  EFSMountTargetAttributes
> {
  public static readonly Type = "AWS::EFS::MountTarget";
  constructor(
    logicalId: string,
    properties: EFSMountTargetProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EFSMountTarget.Type, properties, options);
  }
}
