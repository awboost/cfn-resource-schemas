import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::DataSync::LocationNFS
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationnfs.html}
 */
export type DataSyncLocationNFSProperties = {
  /**
   * The NFS mount options that DataSync can use to mount your NFS share.
   */
  MountOptions?: MountOptions;
  /**
   * Contains a list of Amazon Resource Names (ARNs) of agents that are used to connect an NFS server.
   */
  OnPremConfig: OnPremConfig;
  /**
   * The name of the NFS server. This value is the IP address or DNS name of the NFS server.
   * @maxLength `255`
   * @pattern `^(([a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9\-]*[A-Za-z0-9])$`
   */
  ServerHostname?: string;
  /**
   * The subdirectory in the NFS file system that is used to read data from the NFS source location or write data to the NFS destination.
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
 * Attribute type definition for `AWS::DataSync::LocationNFS`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationnfs.html#aws-resource-datasync-locationnfs-return-values}
 */
export type DataSyncLocationNFSAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the NFS location.
   * @maxLength `128`
   * @pattern `^arn:(aws|aws-cn|aws-us-gov|aws-eusc|aws-iso|aws-iso-b):datasync:[a-z\-0-9]+:[0-9]{12}:location/loc-[0-9a-z]{17}$`
   */
  LocationArn: string;
  /**
   * The URL of the NFS location that was described.
   * @maxLength `4356`
   * @pattern `^(efs|nfs|s3|smb|fsxw)://[a-zA-Z0-9./\-]+$`
   */
  LocationUri: string;
};
/**
 * Type definition for `AWS::DataSync::LocationNFS.MountOptions`.
 * The NFS mount options that DataSync can use to mount your NFS share.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationnfs-mountoptions.html}
 */
export type MountOptions = {
  /**
   * The specific NFS version that you want DataSync to use to mount your NFS share.
   */
  Version?: "AUTOMATIC" | "NFS3" | "NFS4_0" | "NFS4_1";
};
/**
 * Type definition for `AWS::DataSync::LocationNFS.OnPremConfig`.
 * Contains a list of Amazon Resource Names (ARNs) of agents that are used to connect an NFS server.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationnfs-onpremconfig.html}
 */
export type OnPremConfig = {
  /**
   * ARN(s) of the agent(s) to use for an NFS location.
   * @minLength `1`
   * @maxLength `8`
   */
  AgentArns: string[];
};
/**
 * Type definition for `AWS::DataSync::LocationNFS.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationnfs-tag.html}
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
 * Resource schema for AWS::DataSync::LocationNFS
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationnfs.html}
 */
export class DataSyncLocationNFS extends $Resource<
  "AWS::DataSync::LocationNFS",
  DataSyncLocationNFSProperties,
  DataSyncLocationNFSAttributes
> {
  public static readonly Type = "AWS::DataSync::LocationNFS";
  constructor(
    logicalId: string,
    properties: DataSyncLocationNFSProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DataSyncLocationNFS.Type, properties, options);
  }
}
