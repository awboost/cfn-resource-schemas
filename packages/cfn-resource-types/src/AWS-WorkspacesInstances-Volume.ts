import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::WorkspacesInstances::Volume - Manages WorkSpaces Volume resources
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesinstances-volume.html}
 */
export type WorkspacesInstancesVolumeProperties = {
  /**
   * The Availability Zone in which to create the volume
   * @pattern `^[a-z]{2}-[a-z]+-\d[a-z](-[a-z0-9]+)?$`
   */
  AvailabilityZone: string;
  /**
   * Indicates whether the volume should be encrypted
   */
  Encrypted?: boolean;
  /**
   * The number of I/O operations per second (IOPS)
   * @min `0`
   */
  Iops?: number;
  /**
   * The identifier of the AWS Key Management Service (AWS KMS) customer master key (CMK) to use for Amazon EBS encryption
   * @maxLength `128`
   */
  KmsKeyId?: string;
  /**
   * The size of the volume, in GiBs
   * @min `0`
   */
  SizeInGB?: number;
  /**
   * The snapshot from which to create the volume
   * @pattern `^snap-[0-9a-zA-Z]{1,63}$`
   */
  SnapshotId?: string;
  /**
   * The tags passed to EBS volume
   * @maxLength `30`
   */
  TagSpecifications?: TagSpecification[];
  /**
   * The throughput to provision for a volume, with a maximum of 1,000 MiB/s
   * @min `0`
   */
  Throughput?: number;
  /**
   * The volume type
   */
  VolumeType?: "standard" | "io1" | "io2" | "gp2" | "sc1" | "st1" | "gp3";
};
/**
 * Attribute type definition for `AWS::WorkspacesInstances::Volume`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesinstances-volume.html#aws-resource-workspacesinstances-volume-return-values}
 */
export type WorkspacesInstancesVolumeAttributes = {
  /**
   * Unique identifier for the volume
   * @pattern `^vol-[0-9a-zA-Z]{1,63}$`
   */
  VolumeId: string;
};
/**
 * Type definition for `AWS::WorkspacesInstances::Volume.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesinstances-volume-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::WorkspacesInstances::Volume.TagSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesinstances-volume-tagspecification.html}
 */
export type TagSpecification = {
  ResourceType?:
    | "instance"
    | "volume"
    | "spot-instances-request"
    | "network-interface";
  /**
   * The tags to apply to the resource
   */
  Tags?: Tag[];
};
/**
 * Resource Type definition for AWS::WorkspacesInstances::Volume - Manages WorkSpaces Volume resources
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesinstances-volume.html}
 */
export class WorkspacesInstancesVolume extends $Resource<
  "AWS::WorkspacesInstances::Volume",
  WorkspacesInstancesVolumeProperties,
  WorkspacesInstancesVolumeAttributes
> {
  public static readonly Type = "AWS::WorkspacesInstances::Volume";
  constructor(
    logicalId: string,
    properties: WorkspacesInstancesVolumeProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, WorkspacesInstancesVolume.Type, properties, options);
  }
}
