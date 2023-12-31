import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::DataSync::LocationSMB.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationsmb.html}
 */
export type DataSyncLocationSMBProperties = {
  /**
   * The Amazon Resource Names (ARNs) of agents to use for a Simple Message Block (SMB) location.
   * @minLength `1`
   * @maxLength `4`
   */
  AgentArns: string[];
  /**
   * The name of the Windows domain that the SMB server belongs to.
   * @maxLength `253`
   * @pattern `^([A-Za-z0-9]+[A-Za-z0-9-.]*)*[A-Za-z0-9-]*[A-Za-z0-9]$`
   */
  Domain?: string;
  /**
   * The mount options used by DataSync to access the SMB server.
   */
  MountOptions?: MountOptions;
  /**
   * The password of the user who can mount the share and has the permissions to access files and folders in the SMB share.
   * @maxLength `104`
   * @pattern `^.{0,104}$`
   */
  Password?: string;
  /**
   * The name of the SMB server. This value is the IP address or Domain Name Service (DNS) name of the SMB server.
   * @maxLength `255`
   * @pattern `^(([a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9\-]*[A-Za-z0-9])$`
   */
  ServerHostname?: string;
  /**
   * The subdirectory in the SMB file system that is used to read data from the SMB source location or write data to the SMB destination
   * @maxLength `4096`
   * @pattern `^[a-zA-Z0-9_\-\+\./\(\)\$\p{Zs}]+$`
   */
  Subdirectory?: string;
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * The user who can mount the share, has the permissions to access files and folders in the SMB share.
   * @maxLength `104`
   * @pattern `^[^\x5B\x5D\\/:;|=,+*?]{1,104}$`
   */
  User: string;
};
/**
 * Attribute type definition for `AWS::DataSync::LocationSMB`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationsmb.html#aws-resource-datasync-locationsmb-return-values}
 */
export type DataSyncLocationSMBAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the SMB location that is created.
   * @maxLength `128`
   * @pattern `^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]+:[0-9]{12}:location/loc-[0-9a-z]{17}$`
   */
  LocationArn: string;
  /**
   * The URL of the SMB location that was described.
   * @maxLength `4356`
   * @pattern `^(efs|nfs|s3|smb|fsxw)://[a-zA-Z0-9./\-]+$`
   */
  LocationUri: string;
};
/**
 * Type definition for `AWS::DataSync::LocationSMB.MountOptions`.
 * The mount options used by DataSync to access the SMB server.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationsmb-mountoptions.html}
 */
export type MountOptions = {
  /**
   * The specific SMB version that you want DataSync to use to mount your SMB share.
   */
  Version?: "AUTOMATIC" | "SMB1" | "SMB2_0" | "SMB2" | "SMB3";
};
/**
 * Type definition for `AWS::DataSync::LocationSMB.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationsmb-tag.html}
 */
export type Tag = {
  /**
   * The key for an AWS resource tag.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9\s+=._:/-]+$`
   */
  Key: string;
  /**
   * The value for an AWS resource tag.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9\s+=._:@/-]+$`
   */
  Value: string;
};
/**
 * Resource schema for AWS::DataSync::LocationSMB.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationsmb.html}
 */
export class DataSyncLocationSMB extends $Resource<
  "AWS::DataSync::LocationSMB",
  DataSyncLocationSMBProperties,
  DataSyncLocationSMBAttributes
> {
  public static readonly Type = "AWS::DataSync::LocationSMB";
  constructor(
    logicalId: string,
    properties: DataSyncLocationSMBProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DataSyncLocationSMB.Type, properties, options);
  }
}
