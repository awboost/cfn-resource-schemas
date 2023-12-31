import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::MSK::Cluster
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html}
 */
export type MSKClusterProperties = {
  BrokerNodeGroupInfo: BrokerNodeGroupInfo;
  ClientAuthentication?: ClientAuthentication;
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  ClusterName: string;
  ConfigurationInfo?: ConfigurationInfo;
  /**
   * The current version of the MSK cluster
   */
  CurrentVersion?: string;
  EncryptionInfo?: EncryptionInfo;
  /**
   * @minLength `7`
   * @maxLength `23`
   */
  EnhancedMonitoring?:
    | "DEFAULT"
    | "PER_BROKER"
    | "PER_TOPIC_PER_BROKER"
    | "PER_TOPIC_PER_PARTITION";
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  KafkaVersion: string;
  LoggingInfo?: LoggingInfo;
  NumberOfBrokerNodes: number;
  OpenMonitoring?: OpenMonitoring;
  /**
   * @minLength `5`
   * @maxLength `6`
   */
  StorageMode?: "LOCAL" | "TIERED";
  /**
   * A key-value pair to associate with a resource.
   */
  Tags?: Record<string, string>;
};
/**
 * Attribute type definition for `AWS::MSK::Cluster`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#aws-resource-msk-cluster-return-values}
 */
export type MSKClusterAttributes = {
  Arn: string;
};
/**
 * Type definition for `AWS::MSK::Cluster.BrokerLogs`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-brokerlogs.html}
 */
export type BrokerLogs = {
  CloudWatchLogs?: CloudWatchLogs;
  Firehose?: Firehose;
  S3?: S3;
};
/**
 * Type definition for `AWS::MSK::Cluster.BrokerNodeGroupInfo`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-brokernodegroupinfo.html}
 */
export type BrokerNodeGroupInfo = {
  /**
   * @minLength `6`
   * @maxLength `9`
   */
  BrokerAZDistribution?: string;
  ClientSubnets: string[];
  ConnectivityInfo?: ConnectivityInfo;
  /**
   * @minLength `5`
   * @maxLength `32`
   */
  InstanceType: string;
  SecurityGroups?: string[];
  StorageInfo?: StorageInfo;
};
/**
 * Type definition for `AWS::MSK::Cluster.ClientAuthentication`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-clientauthentication.html}
 */
export type ClientAuthentication = {
  Sasl?: Sasl;
  Tls?: Tls;
  Unauthenticated?: Unauthenticated;
};
/**
 * Type definition for `AWS::MSK::Cluster.CloudWatchLogs`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-cloudwatchlogs.html}
 */
export type CloudWatchLogs = {
  Enabled: boolean;
  LogGroup?: string;
};
/**
 * Type definition for `AWS::MSK::Cluster.ConfigurationInfo`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-configurationinfo.html}
 */
export type ConfigurationInfo = {
  Arn: string;
  Revision: number;
};
/**
 * Type definition for `AWS::MSK::Cluster.ConnectivityInfo`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-connectivityinfo.html}
 */
export type ConnectivityInfo = {
  PublicAccess?: PublicAccess;
  VpcConnectivity?: VpcConnectivity;
};
/**
 * Type definition for `AWS::MSK::Cluster.EBSStorageInfo`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-ebsstorageinfo.html}
 */
export type EBSStorageInfo = {
  ProvisionedThroughput?: ProvisionedThroughput;
  /**
   * @min `1`
   * @max `16384`
   */
  VolumeSize?: number;
};
/**
 * Type definition for `AWS::MSK::Cluster.EncryptionAtRest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-encryptionatrest.html}
 */
export type EncryptionAtRest = {
  DataVolumeKMSKeyId: string;
};
/**
 * Type definition for `AWS::MSK::Cluster.EncryptionInfo`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-encryptioninfo.html}
 */
export type EncryptionInfo = {
  EncryptionAtRest?: EncryptionAtRest;
  EncryptionInTransit?: EncryptionInTransit;
};
/**
 * Type definition for `AWS::MSK::Cluster.EncryptionInTransit`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-encryptionintransit.html}
 */
export type EncryptionInTransit = {
  ClientBroker?: "TLS" | "TLS_PLAINTEXT" | "PLAINTEXT";
  InCluster?: boolean;
};
/**
 * Type definition for `AWS::MSK::Cluster.Firehose`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-firehose.html}
 */
export type Firehose = {
  DeliveryStream?: string;
  Enabled: boolean;
};
/**
 * Type definition for `AWS::MSK::Cluster.Iam`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-iam.html}
 */
export type Iam = {
  Enabled: boolean;
};
/**
 * Type definition for `AWS::MSK::Cluster.JmxExporter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-jmxexporter.html}
 */
export type JmxExporter = {
  EnabledInBroker: boolean;
};
/**
 * Type definition for `AWS::MSK::Cluster.LoggingInfo`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-logginginfo.html}
 */
export type LoggingInfo = {
  BrokerLogs: BrokerLogs;
};
/**
 * Type definition for `AWS::MSK::Cluster.NodeExporter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-nodeexporter.html}
 */
export type NodeExporter = {
  EnabledInBroker: boolean;
};
/**
 * Type definition for `AWS::MSK::Cluster.OpenMonitoring`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-openmonitoring.html}
 */
export type OpenMonitoring = {
  Prometheus: Prometheus;
};
/**
 * Type definition for `AWS::MSK::Cluster.Prometheus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-prometheus.html}
 */
export type Prometheus = {
  JmxExporter?: JmxExporter;
  NodeExporter?: NodeExporter;
};
/**
 * Type definition for `AWS::MSK::Cluster.ProvisionedThroughput`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-provisionedthroughput.html}
 */
export type ProvisionedThroughput = {
  Enabled?: boolean;
  VolumeThroughput?: number;
};
/**
 * Type definition for `AWS::MSK::Cluster.PublicAccess`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-publicaccess.html}
 */
export type PublicAccess = {
  /**
   * @minLength `7`
   * @maxLength `23`
   */
  Type?: string;
};
/**
 * Type definition for `AWS::MSK::Cluster.S3`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-s3.html}
 */
export type S3 = {
  Bucket?: string;
  Enabled: boolean;
  Prefix?: string;
};
/**
 * Type definition for `AWS::MSK::Cluster.Sasl`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-sasl.html}
 */
export type Sasl = {
  Iam?: Iam;
  Scram?: Scram;
};
/**
 * Type definition for `AWS::MSK::Cluster.Scram`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-scram.html}
 */
export type Scram = {
  Enabled: boolean;
};
/**
 * Type definition for `AWS::MSK::Cluster.StorageInfo`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-storageinfo.html}
 */
export type StorageInfo = {
  EBSStorageInfo?: EBSStorageInfo;
};
/**
 * Type definition for `AWS::MSK::Cluster.Tls`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-tls.html}
 */
export type Tls = {
  CertificateAuthorityArnList?: string[];
  Enabled?: boolean;
};
/**
 * Type definition for `AWS::MSK::Cluster.Unauthenticated`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-unauthenticated.html}
 */
export type Unauthenticated = {
  Enabled: boolean;
};
/**
 * Type definition for `AWS::MSK::Cluster.VpcConnectivity`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-vpcconnectivity.html}
 */
export type VpcConnectivity = {
  ClientAuthentication?: VpcConnectivityClientAuthentication;
};
/**
 * Type definition for `AWS::MSK::Cluster.VpcConnectivityClientAuthentication`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-vpcconnectivityclientauthentication.html}
 */
export type VpcConnectivityClientAuthentication = {
  Sasl?: VpcConnectivitySasl;
  Tls?: VpcConnectivityTls;
};
/**
 * Type definition for `AWS::MSK::Cluster.VpcConnectivityIam`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-vpcconnectivityiam.html}
 */
export type VpcConnectivityIam = {
  Enabled: boolean;
};
/**
 * Type definition for `AWS::MSK::Cluster.VpcConnectivitySasl`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-vpcconnectivitysasl.html}
 */
export type VpcConnectivitySasl = {
  Iam?: VpcConnectivityIam;
  Scram?: VpcConnectivityScram;
};
/**
 * Type definition for `AWS::MSK::Cluster.VpcConnectivityScram`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-vpcconnectivityscram.html}
 */
export type VpcConnectivityScram = {
  Enabled: boolean;
};
/**
 * Type definition for `AWS::MSK::Cluster.VpcConnectivityTls`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-vpcconnectivitytls.html}
 */
export type VpcConnectivityTls = {
  Enabled: boolean;
};
/**
 * Resource Type definition for AWS::MSK::Cluster
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html}
 */
export class MSKCluster extends $Resource<
  "AWS::MSK::Cluster",
  MSKClusterProperties,
  MSKClusterAttributes
> {
  public static readonly Type = "AWS::MSK::Cluster";
  constructor(
    logicalId: string,
    properties: MSKClusterProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, MSKCluster.Type, properties, options);
  }
}
