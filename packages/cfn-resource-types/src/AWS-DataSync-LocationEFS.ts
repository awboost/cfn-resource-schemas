import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource schema for AWS::DataSync::LocationEFS.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationefs.html}
 */
export type DataSyncLocationEFSProperties = {
  /**
   * The Amazon Resource Name (ARN) for the Amazon EFS Access point that DataSync uses when accessing the EFS file system.
   * @maxLength `128`
   * @pattern `^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):elasticfilesystem:[a-z\-0-9]+:[0-9]{12}:access-point/fsap-[0-9a-f]{8,40}$`
   */
  AccessPointArn?: string;
  /**
   * The subnet and security group that DataSync uses to access target EFS file system.
   */
  Ec2Config: Ec2Config;
  /**
   * The Amazon Resource Name (ARN) for the Amazon EFS file system.
   * @maxLength `128`
   * @pattern `^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):elasticfilesystem:[a-z\-0-9]*:[0-9]{12}:file-system/fs-.*$`
   */
  EfsFilesystemArn?: string;
  /**
   * The Amazon Resource Name (ARN) of the AWS IAM role that the DataSync will assume when mounting the EFS file system.
   * @maxLength `128`
   * @pattern `^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):iam::[0-9]{12}:role/.*$`
   */
  FileSystemAccessRoleArn?: string;
  /**
   * Protocol that is used for encrypting the traffic exchanged between the DataSync Agent and the EFS file system.
   */
  InTransitEncryption?: "NONE" | "TLS1_2";
  /**
   * A subdirectory in the location's path. This subdirectory in the EFS file system is used to read data from the EFS source location or write data to the EFS destination.
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
 * Attribute type definition for `AWS::DataSync::LocationEFS`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationefs.html#aws-resource-datasync-locationefs-return-values}
 */
export type DataSyncLocationEFSAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the Amazon EFS file system location that is created.
   * @maxLength `128`
   * @pattern `^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]+:[0-9]{12}:location/loc-[0-9a-z]{17}$`
   */
  LocationArn: string;
  /**
   * The URL of the EFS location that was described.
   * @maxLength `4356`
   * @pattern `^(efs|nfs|s3|smb|fsxw)://[a-zA-Z0-9.\-/]+$`
   */
  LocationUri: string;
};
/**
 * Type definition for `AWS::DataSync::LocationEFS.Ec2Config`.
 * The subnet and security group that DataSync uses to access target EFS file system.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationefs-ec2config.html}
 */
export type Ec2Config = {
  /**
   * The Amazon Resource Names (ARNs) of the security groups that are configured for the Amazon EC2 resource.
   * @minLength `1`
   * @maxLength `5`
   */
  SecurityGroupArns: string[];
  /**
   * The ARN of the subnet that DataSync uses to access the target EFS file system.
   * @maxLength `128`
   * @pattern `^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):ec2:[a-z\-0-9]*:[0-9]{12}:subnet/.*$`
   */
  SubnetArn: string;
};
/**
 * Type definition for `AWS::DataSync::LocationEFS.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationefs-tag.html}
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
 * Resource schema for AWS::DataSync::LocationEFS.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationefs.html}
 */
export class DataSyncLocationEFS extends $Resource<
  "AWS::DataSync::LocationEFS",
  DataSyncLocationEFSProperties,
  DataSyncLocationEFSAttributes
> {
  public static readonly Type = "AWS::DataSync::LocationEFS";
  public static readonly AttributeNames = [
    "LocationArn" as const,
    "LocationUri" as const,
  ];
  constructor(
    logicalId: string,
    properties: DataSyncLocationEFSProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      DataSyncLocationEFS.Type,
      properties,
      DataSyncLocationEFS.AttributeNames,
      options,
    );
  }
}
