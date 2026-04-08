import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::S3Files::MountTarget
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3files-mounttarget.html}
 */
export type S3FilesMountTargetProperties = {
  /**
   * @maxLength `128`
   * @pattern `^(arn:aws[-a-z]*:s3files:[0-9a-z-:]+:file-system/fs-[0-9a-f]{17,40}|fs-[0-9a-f]{17,40})$`
   */
  FileSystemId: string;
  IpAddressType?: "IPV4_ONLY" | "IPV6_ONLY" | "DUAL_STACK";
  /**
   * @minLength `7`
   * @maxLength `15`
   * @pattern `^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$`
   */
  Ipv4Address?: string;
  /**
   * @minLength `3`
   * @maxLength `39`
   */
  Ipv6Address?: string;
  /**
   * @maxLength `100`
   */
  SecurityGroups?: string[];
  /**
   * @minLength `15`
   * @maxLength `47`
   * @pattern `^subnet-[0-9a-f]{8,40}$`
   */
  SubnetId: string;
};
/**
 * Attribute type definition for `AWS::S3Files::MountTarget`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3files-mounttarget.html#aws-resource-s3files-mounttarget-return-values}
 */
export type S3FilesMountTargetAttributes = {
  AvailabilityZoneId: string;
  /**
   * @minLength `22`
   * @maxLength `45`
   * @pattern `^fsmt-[0-9a-f]{17,40}$`
   */
  MountTargetId: string;
  NetworkInterfaceId: string;
  /**
   * @maxLength `12`
   * @pattern `^((\d{12})|(\d{4}-\d{4}-\d{4}))$`
   */
  OwnerId: string;
  Status:
    | "available"
    | "creating"
    | "updating"
    | "deleting"
    | "deleted"
    | "error";
  StatusMessage: string;
  VpcId: string;
};
/**
 * Resource Type definition for AWS::S3Files::MountTarget
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3files-mounttarget.html}
 */
export class S3FilesMountTarget extends $Resource<
  "AWS::S3Files::MountTarget",
  S3FilesMountTargetProperties,
  S3FilesMountTargetAttributes
> {
  public static readonly Type = "AWS::S3Files::MountTarget";
  constructor(
    logicalId: string,
    properties: S3FilesMountTargetProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, S3FilesMountTarget.Type, properties, options);
  }
}
