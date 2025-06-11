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
   * Valid IPv4 address within the address range of the specified subnet.
   */
  IpAddress?: string;
  IpAddressType?: "IPV4_ONLY" | "IPV6_ONLY" | "DUAL_STACK";
  Ipv6Address?: string;
  /**
   * VPC security group IDs, of the form ``sg-xxxxxxxx``. These must be for the same VPC as the subnet specified. The maximum number of security groups depends on account quota. For more information, see [Amazon VPC Quotas](https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html) in the *Amazon VPC User Guide* (see the *Security Groups* table).
   */
  SecurityGroups: string[];
  /**
   * The ID of the subnet to add the mount target in. For One Zone file systems, use the subnet that is associated with the file system's Availability Zone.
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
