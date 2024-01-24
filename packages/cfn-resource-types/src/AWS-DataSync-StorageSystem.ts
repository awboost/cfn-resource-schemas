import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::DataSync::StorageSystem.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-storagesystem.html}
 */
export type DataSyncStorageSystemProperties = {
  /**
   * The ARN of the DataSync agent that connects to and reads from the on-premises storage system's management interface.
   * @minLength `1`
   * @maxLength `1`
   */
  AgentArns: string[];
  /**
   * The ARN of the Amazon CloudWatch log group used to monitor and log discovery job events.
   * @maxLength `562`
   * @pattern `^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):logs:[a-z\-0-9]+:[0-9]{12}:log-group:([^:\*]*)(:\*)?$`
   */
  CloudWatchLogGroupArn?: string;
  /**
   * A familiar name for the on-premises storage system.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9\s+=._:@/-]+$`
   */
  Name?: string;
  /**
   * The server name and network port required to connect with the management interface of the on-premises storage system.
   */
  ServerConfiguration: ServerConfiguration;
  /**
   * The username and password for accessing your on-premises storage system's management interface.
   */
  ServerCredentials?: ServerCredentials;
  /**
   * The type of on-premises storage system that DataSync Discovery will analyze.
   */
  SystemType: "NetAppONTAP";
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::DataSync::StorageSystem`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-storagesystem.html#aws-resource-datasync-storagesystem-return-values}
 */
export type DataSyncStorageSystemAttributes = {
  /**
   * Indicates whether the DataSync agent can access the on-premises storage system.
   */
  ConnectivityStatus: "PASS" | "FAIL" | "UNKNOWN";
  /**
   * The ARN of a secret stored by AWS Secrets Manager.
   * @maxLength `2048`
   * @pattern `^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):secretsmanager:[a-z\-0-9]+:[0-9]{12}:secret:.*`
   */
  SecretsManagerArn: string;
  /**
   * The ARN of the on-premises storage system added to DataSync Discovery.
   * @maxLength `128`
   * @pattern `^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]+:[0-9]{12}:system/storage-system-[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$`
   */
  StorageSystemArn: string;
};
/**
 * Type definition for `AWS::DataSync::StorageSystem.ServerConfiguration`.
 * The server name and network port required to connect with the management interface of the on-premises storage system.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-storagesystem-serverconfiguration.html}
 */
export type ServerConfiguration = {
  /**
   * The domain name or IP address of the storage system's management interface.
   * @maxLength `255`
   * @pattern `^(([a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9\-]*[A-Za-z0-9])$`
   */
  ServerHostname: string;
  /**
   * The network port needed to access the system's management interface
   * @min `1`
   * @max `65535`
   */
  ServerPort?: number;
};
/**
 * Type definition for `AWS::DataSync::StorageSystem.ServerCredentials`.
 * The username and password for accessing your on-premises storage system's management interface.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-storagesystem-servercredentials.html}
 */
export type ServerCredentials = {
  /**
   * The password for your storage system's management interface
   * @maxLength `1024`
   */
  Password: string;
  /**
   * The username for your storage system's management interface.
   * @maxLength `1024`
   */
  Username: string;
};
/**
 * Type definition for `AWS::DataSync::StorageSystem.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-storagesystem-tag.html}
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
 * Resource schema for AWS::DataSync::StorageSystem.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-storagesystem.html}
 */
export class DataSyncStorageSystem extends $Resource<
  "AWS::DataSync::StorageSystem",
  DataSyncStorageSystemProperties,
  DataSyncStorageSystemAttributes
> {
  public static readonly Type = "AWS::DataSync::StorageSystem";
  constructor(
    logicalId: string,
    properties: DataSyncStorageSystemProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DataSyncStorageSystem.Type, properties, options);
  }
}
