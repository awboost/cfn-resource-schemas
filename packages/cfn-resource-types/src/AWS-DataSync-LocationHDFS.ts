import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::DataSync::LocationHDFS.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationhdfs.html}
 */
export type DataSyncLocationHDFSProperties = {
  /**
   * ARN(s) of the agent(s) to use for an HDFS location.
   * @minLength `1`
   * @maxLength `4`
   */
  AgentArns: string[];
  /**
   * The authentication mode used to determine identity of user.
   */
  AuthenticationType: "SIMPLE" | "KERBEROS";
  /**
   * Size of chunks (blocks) in bytes that the data is divided into when stored in the HDFS cluster.
   * @min `1048576`
   * @max `1073741824`
   */
  BlockSize?: number;
  /**
   * The Base64 string representation of the Keytab file.
   * @maxLength `87384`
   */
  KerberosKeytab?: string;
  /**
   * The string representation of the Krb5Conf file, or the presigned URL to access the Krb5.conf file within an S3 bucket.
   * @maxLength `174764`
   */
  KerberosKrb5Conf?: string;
  /**
   * The unique identity, or principal, to which Kerberos can assign tickets.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^.+$`
   */
  KerberosPrincipal?: string;
  /**
   * The identifier for the Key Management Server where the encryption keys that encrypt data inside HDFS clusters are stored.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^kms:\/\/http[s]?@(([a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9\-]*[A-Za-z0-9])(;(([a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9\-]*[A-Za-z0-9]))*:[0-9]{1,5}\/kms$`
   */
  KmsKeyProviderUri?: string;
  /**
   * An array of Name Node(s) of the HDFS location.
   * @minLength `1`
   */
  NameNodes: NameNode[];
  /**
   * Configuration information for RPC Protection and Data Transfer Protection. These parameters can be set to AUTHENTICATION, INTEGRITY, or PRIVACY. The default value is PRIVACY.
   */
  QopConfiguration?: QopConfiguration;
  /**
   * Number of copies of each block that exists inside the HDFS cluster.
   * @min `1`
   * @max `512`
   */
  ReplicationFactor?: number;
  /**
   * The user name that has read and write permissions on the specified HDFS cluster.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[_.A-Za-z0-9][-_.A-Za-z0-9]*$`
   */
  SimpleUser?: string;
  /**
   * The subdirectory in HDFS that is used to read data from the HDFS source location or write data to the HDFS destination.
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
 * Attribute type definition for `AWS::DataSync::LocationHDFS`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationhdfs.html#aws-resource-datasync-locationhdfs-return-values}
 */
export type DataSyncLocationHDFSAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the HDFS location.
   * @maxLength `128`
   * @pattern `^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]+:[0-9]{12}:location/loc-[0-9a-z]{17}$`
   */
  LocationArn: string;
  /**
   * The URL of the HDFS location that was described.
   * @maxLength `4356`
   * @pattern `^(efs|nfs|s3|smb|fsxw|hdfs)://[a-zA-Z0-9.:/\-]+$`
   */
  LocationUri: string;
};
/**
 * Type definition for `AWS::DataSync::LocationHDFS.NameNode`.
 * HDFS Name Node IP and port information.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationhdfs-namenode.html}
 */
export type NameNode = {
  /**
   * The DNS name or IP address of the Name Node in the customer's on premises HDFS cluster.
   * @maxLength `255`
   * @pattern `^(([a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9\-]*[A-Za-z0-9])$`
   */
  Hostname: string;
  /**
   * The port on which the Name Node is listening on for client requests.
   * @min `1`
   * @max `65536`
   */
  Port: number;
};
/**
 * Type definition for `AWS::DataSync::LocationHDFS.QopConfiguration`.
 * Configuration information for RPC Protection and Data Transfer Protection. These parameters can be set to AUTHENTICATION, INTEGRITY, or PRIVACY. The default value is PRIVACY.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationhdfs-qopconfiguration.html}
 */
export type QopConfiguration = {
  /**
   * Configuration for Data Transfer Protection.
   */
  DataTransferProtection?:
    | "AUTHENTICATION"
    | "INTEGRITY"
    | "PRIVACY"
    | "DISABLED";
  /**
   * Configuration for RPC Protection.
   */
  RpcProtection?: "AUTHENTICATION" | "INTEGRITY" | "PRIVACY" | "DISABLED";
};
/**
 * Type definition for `AWS::DataSync::LocationHDFS.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationhdfs-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource schema for AWS::DataSync::LocationHDFS.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationhdfs.html}
 */
export class DataSyncLocationHDFS extends $Resource<
  "AWS::DataSync::LocationHDFS",
  DataSyncLocationHDFSProperties,
  DataSyncLocationHDFSAttributes
> {
  public static readonly Type = "AWS::DataSync::LocationHDFS";
  constructor(
    logicalId: string,
    properties: DataSyncLocationHDFSProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DataSyncLocationHDFS.Type, properties, options);
  }
}
