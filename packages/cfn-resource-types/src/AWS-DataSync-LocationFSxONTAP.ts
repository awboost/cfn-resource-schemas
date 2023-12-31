import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource schema for AWS::DataSync::LocationFSxONTAP.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxontap.html}
 */
export type DataSyncLocationFSxONTAPProperties = {
  /**
   * Configuration settings for NFS or SMB protocol.
   */
  Protocol?: Protocol;
  /**
   * The ARNs of the security groups that are to use to configure the FSx ONTAP file system.
   * @minLength `1`
   * @maxLength `5`
   */
  SecurityGroupArns: string[];
  /**
   * The Amazon Resource Name (ARN) for the FSx ONTAP SVM.
   * @maxLength `162`
   * @pattern `^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):fsx:[a-z\-0-9]+:[0-9]{12}:storage-virtual-machine/fs-[0-9a-f]+/svm-[0-9a-f]{17,}$`
   */
  StorageVirtualMachineArn: string;
  /**
   * A subdirectory in the location's path.
   * @maxLength `4096`
   * @pattern `^[a-zA-Z0-9_\-\+\./\(\)\$\p{Zs}]+$`
   */
  Subdirectory?: string;
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::DataSync::LocationFSxONTAP`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxontap.html#aws-resource-datasync-locationfsxontap-return-values}
 */
export type DataSyncLocationFSxONTAPAttributes = {
  /**
   * The Amazon Resource Name (ARN) for the FSx ONAP file system.
   * @maxLength `128`
   * @pattern `^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):fsx:[a-z\-0-9]+:[0-9]{12}:file-system/fs-[0-9a-f]+$`
   */
  FsxFilesystemArn: string;
  /**
   * The Amazon Resource Name (ARN) of the Amazon FSx ONTAP file system location that is created.
   * @maxLength `128`
   * @pattern `^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]+:[0-9]{12}:location/loc-[0-9a-z]{17}$`
   */
  LocationArn: string;
  /**
   * The URL of the FSx ONTAP file system that was described.
   * @maxLength `4360`
   * @pattern `^(efs|nfs|s3|smb|hdfs|fsx[a-z0-9-]+)://[a-zA-Z0-9.:/\-]+$`
   */
  LocationUri: string;
};
/**
 * Type definition for `AWS::DataSync::LocationFSxONTAP.NFS`.
 * NFS protocol configuration for FSx ONTAP file system.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationfsxontap-nfs.html}
 */
export type NFS = {
  /**
   * The NFS mount options that DataSync can use to mount your NFS share.
   */
  MountOptions: NfsMountOptions;
};
/**
 * Type definition for `AWS::DataSync::LocationFSxONTAP.NfsMountOptions`.
 * The NFS mount options that DataSync can use to mount your NFS share.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationfsxontap-nfsmountoptions.html}
 */
export type NfsMountOptions = {
  /**
   * The specific NFS version that you want DataSync to use to mount your NFS share.
   */
  Version?: "AUTOMATIC" | "NFS3" | "NFS4_0" | "NFS4_1";
};
/**
 * Type definition for `AWS::DataSync::LocationFSxONTAP.Protocol`.
 * Configuration settings for NFS or SMB protocol.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationfsxontap-protocol.html}
 */
export type Protocol = {
  /**
   * NFS protocol configuration for FSx ONTAP file system.
   */
  NFS?: NFS;
  /**
   * SMB protocol configuration for FSx ONTAP file system.
   */
  SMB?: SMB;
};
/**
 * Type definition for `AWS::DataSync::LocationFSxONTAP.SMB`.
 * SMB protocol configuration for FSx ONTAP file system.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationfsxontap-smb.html}
 */
export type SMB = {
  /**
   * The name of the Windows domain that the SMB server belongs to.
   * @maxLength `253`
   * @pattern `^([A-Za-z0-9]+[A-Za-z0-9-.]*)*[A-Za-z0-9-]*[A-Za-z0-9]$`
   */
  Domain?: string;
  /**
   * The mount options used by DataSync to access the SMB server.
   */
  MountOptions: SmbMountOptions;
  /**
   * The password of the user who can mount the share and has the permissions to access files and folders in the SMB share.
   * @maxLength `104`
   * @pattern `^.{0,104}$`
   */
  Password: string;
  /**
   * The user who can mount the share, has the permissions to access files and folders in the SMB share.
   * @maxLength `104`
   * @pattern `^[^\x5B\x5D\\/:;|=,+*?]{1,104}$`
   */
  User: string;
};
/**
 * Type definition for `AWS::DataSync::LocationFSxONTAP.SmbMountOptions`.
 * The mount options used by DataSync to access the SMB server.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationfsxontap-smbmountoptions.html}
 */
export type SmbMountOptions = {
  /**
   * The specific SMB version that you want DataSync to use to mount your SMB share.
   */
  Version?: "AUTOMATIC" | "SMB2" | "SMB3";
};
/**
 * Type definition for `AWS::DataSync::LocationFSxONTAP.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationfsxontap-tag.html}
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
 * Resource schema for AWS::DataSync::LocationFSxONTAP.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxontap.html}
 */
export class DataSyncLocationFSxONTAP extends $Resource<
  "AWS::DataSync::LocationFSxONTAP",
  DataSyncLocationFSxONTAPProperties,
  DataSyncLocationFSxONTAPAttributes
> {
  public static readonly Type = "AWS::DataSync::LocationFSxONTAP";
  public static readonly AttributeNames = [
    "FsxFilesystemArn" as const,
    "LocationArn" as const,
    "LocationUri" as const,
  ];
  constructor(
    logicalId: string,
    properties: DataSyncLocationFSxONTAPProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      DataSyncLocationFSxONTAP.Type,
      properties,
      DataSyncLocationFSxONTAP.AttributeNames,
      options,
    );
  }
}
