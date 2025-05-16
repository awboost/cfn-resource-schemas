import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::DataSync::StorageSystem
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-storagesystem.html}
 */
export type DataSyncStorageSystemProperties = {
  AgentArns: string[];
  CloudWatchLogGroupArn?: string;
  Name?: string;
  ServerConfiguration: ServerConfiguration;
  ServerCredentials?: ServerCredentials;
  SystemType: string;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::DataSync::StorageSystem`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-storagesystem.html#aws-resource-datasync-storagesystem-return-values}
 */
export type DataSyncStorageSystemAttributes = {
  ConnectivityStatus: string;
  Id: string;
  SecretsManagerArn: string;
  StorageSystemArn: string;
};
/**
 * Type definition for `AWS::DataSync::StorageSystem.ServerConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-storagesystem-serverconfiguration.html}
 */
export type ServerConfiguration = {
  ServerHostname: string;
  ServerPort?: number;
};
/**
 * Type definition for `AWS::DataSync::StorageSystem.ServerCredentials`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-storagesystem-servercredentials.html}
 */
export type ServerCredentials = {
  Password: string;
  Username: string;
};
/**
 * Type definition for `AWS::DataSync::StorageSystem.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-storagesystem-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::DataSync::StorageSystem
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
