import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::EFS::MountTarget
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-mounttarget.html}
 */
export type EFSMountTargetProperties = {
  FileSystemId: string;
  IpAddress?: string;
  SecurityGroups: string[];
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
 * Resource Type definition for AWS::EFS::MountTarget
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-mounttarget.html}
 */
export class EFSMountTarget extends $Resource<
  "AWS::EFS::MountTarget",
  EFSMountTargetProperties,
  EFSMountTargetAttributes
> {
  public static readonly Type = "AWS::EFS::MountTarget";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: EFSMountTargetProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      EFSMountTarget.Type,
      properties,
      EFSMountTarget.AttributeNames,
      options,
    );
  }
}
