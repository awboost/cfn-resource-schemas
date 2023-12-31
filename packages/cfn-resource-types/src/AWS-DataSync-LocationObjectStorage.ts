import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource schema for AWS::DataSync::LocationObjectStorage.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationobjectstorage.html}
 */
export type DataSyncLocationObjectStorageProperties = {
  /**
   * Optional. The access key is used if credentials are required to access the self-managed object storage server.
   * @minLength `1`
   * @maxLength `200`
   * @pattern `^.+$`
   */
  AccessKey?: string;
  /**
   * The Amazon Resource Name (ARN) of the agents associated with the self-managed object storage server location.
   * @minLength `1`
   * @maxLength `4`
   */
  AgentArns: string[];
  /**
   * The name of the bucket on the self-managed object storage server.
   * @minLength `3`
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9_\-\+\./\(\)\$\p{Zs}]+$`
   */
  BucketName?: string;
  /**
   * Optional. The secret key is used if credentials are required to access the self-managed object storage server.
   * @minLength `8`
   * @maxLength `200`
   * @pattern `^.+$`
   */
  SecretKey?: string;
  /**
   * X.509 PEM content containing a certificate authority or chain to trust.
   * @maxLength `32768`
   */
  ServerCertificate?: string;
  /**
   * The name of the self-managed object storage server. This value is the IP address or Domain Name Service (DNS) name of the object storage server.
   * @maxLength `255`
   * @pattern `^(([a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9\-]*[A-Za-z0-9])$`
   */
  ServerHostname?: string;
  /**
   * The port that your self-managed server accepts inbound network traffic on.
   * @min `1`
   * @max `65536`
   */
  ServerPort?: number;
  /**
   * The protocol that the object storage server uses to communicate.
   */
  ServerProtocol?: "HTTPS" | "HTTP";
  /**
   * The subdirectory in the self-managed object storage server that is used to read data from.
   * @maxLength `4096`
   * @pattern `^[a-zA-Z0-9_\-\+\./\(\)\p{Zs}]*$`
   */
  Subdirectory?: string;
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::DataSync::LocationObjectStorage`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationobjectstorage.html#aws-resource-datasync-locationobjectstorage-return-values}
 */
export type DataSyncLocationObjectStorageAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the location that is created.
   * @maxLength `128`
   * @pattern `^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]+:[0-9]{12}:location/loc-[0-9a-z]{17}$`
   */
  LocationArn: string;
  /**
   * The URL of the object storage location that was described.
   * @maxLength `4356`
   * @pattern `^(efs|nfs|s3|smb|fsxw|object-storage)://[a-zA-Z0-9./\-]+$`
   */
  LocationUri: string;
};
/**
 * Type definition for `AWS::DataSync::LocationObjectStorage.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationobjectstorage-tag.html}
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
 * Resource schema for AWS::DataSync::LocationObjectStorage.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationobjectstorage.html}
 */
export class DataSyncLocationObjectStorage extends $Resource<
  "AWS::DataSync::LocationObjectStorage",
  DataSyncLocationObjectStorageProperties,
  DataSyncLocationObjectStorageAttributes
> {
  public static readonly Type = "AWS::DataSync::LocationObjectStorage";
  public static readonly AttributeNames = [
    "LocationArn" as const,
    "LocationUri" as const,
  ];
  constructor(
    logicalId: string,
    properties: DataSyncLocationObjectStorageProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      DataSyncLocationObjectStorage.Type,
      properties,
      DataSyncLocationObjectStorage.AttributeNames,
      options,
    );
  }
}
