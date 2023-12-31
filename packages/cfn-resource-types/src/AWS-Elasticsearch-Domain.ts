import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Elasticsearch::Domain
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticsearch-domain.html}
 */
export type ElasticsearchDomainProperties = {
  AccessPolicies?: Record<string, any>;
  AdvancedOptions?: Record<string, string>;
  AdvancedSecurityOptions?: AdvancedSecurityOptionsInput;
  CognitoOptions?: CognitoOptions;
  DomainEndpointOptions?: DomainEndpointOptions;
  DomainName?: string;
  EBSOptions?: EBSOptions;
  ElasticsearchClusterConfig?: ElasticsearchClusterConfig;
  ElasticsearchVersion?: string;
  EncryptionAtRestOptions?: EncryptionAtRestOptions;
  LogPublishingOptions?: Record<string, LogPublishingOption>;
  NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions;
  SnapshotOptions?: SnapshotOptions;
  Tags?: Tag[];
  VPCOptions?: VPCOptions;
};
/**
 * Attribute type definition for `AWS::Elasticsearch::Domain`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticsearch-domain.html#aws-resource-elasticsearch-domain-return-values}
 */
export type ElasticsearchDomainAttributes = {
  Arn: string;
  DomainArn: string;
  DomainEndpoint: string;
  Id: string;
};
/**
 * Type definition for `AWS::Elasticsearch::Domain.AdvancedSecurityOptionsInput`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticsearch-domain-advancedsecurityoptionsinput.html}
 */
export type AdvancedSecurityOptionsInput = {
  AnonymousAuthEnabled?: boolean;
  Enabled?: boolean;
  InternalUserDatabaseEnabled?: boolean;
  MasterUserOptions?: MasterUserOptions;
};
/**
 * Type definition for `AWS::Elasticsearch::Domain.CognitoOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticsearch-domain-cognitooptions.html}
 */
export type CognitoOptions = {
  Enabled?: boolean;
  IdentityPoolId?: string;
  RoleArn?: string;
  UserPoolId?: string;
};
/**
 * Type definition for `AWS::Elasticsearch::Domain.ColdStorageOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticsearch-domain-coldstorageoptions.html}
 */
export type ColdStorageOptions = {
  Enabled?: boolean;
};
/**
 * Type definition for `AWS::Elasticsearch::Domain.DomainEndpointOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticsearch-domain-domainendpointoptions.html}
 */
export type DomainEndpointOptions = {
  CustomEndpoint?: string;
  CustomEndpointCertificateArn?: string;
  CustomEndpointEnabled?: boolean;
  EnforceHTTPS?: boolean;
  TLSSecurityPolicy?: string;
};
/**
 * Type definition for `AWS::Elasticsearch::Domain.EBSOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticsearch-domain-ebsoptions.html}
 */
export type EBSOptions = {
  EBSEnabled?: boolean;
  Iops?: number;
  VolumeSize?: number;
  VolumeType?: string;
};
/**
 * Type definition for `AWS::Elasticsearch::Domain.ElasticsearchClusterConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticsearch-domain-elasticsearchclusterconfig.html}
 */
export type ElasticsearchClusterConfig = {
  ColdStorageOptions?: ColdStorageOptions;
  DedicatedMasterCount?: number;
  DedicatedMasterEnabled?: boolean;
  DedicatedMasterType?: string;
  InstanceCount?: number;
  InstanceType?: string;
  WarmCount?: number;
  WarmEnabled?: boolean;
  WarmType?: string;
  ZoneAwarenessConfig?: ZoneAwarenessConfig;
  ZoneAwarenessEnabled?: boolean;
};
/**
 * Type definition for `AWS::Elasticsearch::Domain.EncryptionAtRestOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticsearch-domain-encryptionatrestoptions.html}
 */
export type EncryptionAtRestOptions = {
  Enabled?: boolean;
  KmsKeyId?: string;
};
/**
 * Type definition for `AWS::Elasticsearch::Domain.LogPublishingOption`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticsearch-domain-logpublishingoption.html}
 */
export type LogPublishingOption = {
  CloudWatchLogsLogGroupArn?: string;
  Enabled?: boolean;
};
/**
 * Type definition for `AWS::Elasticsearch::Domain.MasterUserOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticsearch-domain-masteruseroptions.html}
 */
export type MasterUserOptions = {
  MasterUserARN?: string;
  MasterUserName?: string;
  MasterUserPassword?: string;
};
/**
 * Type definition for `AWS::Elasticsearch::Domain.NodeToNodeEncryptionOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticsearch-domain-nodetonodeencryptionoptions.html}
 */
export type NodeToNodeEncryptionOptions = {
  Enabled?: boolean;
};
/**
 * Type definition for `AWS::Elasticsearch::Domain.SnapshotOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticsearch-domain-snapshotoptions.html}
 */
export type SnapshotOptions = {
  AutomatedSnapshotStartHour?: number;
};
/**
 * Type definition for `AWS::Elasticsearch::Domain.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticsearch-domain-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Type definition for `AWS::Elasticsearch::Domain.VPCOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticsearch-domain-vpcoptions.html}
 */
export type VPCOptions = {
  SecurityGroupIds?: string[];
  SubnetIds?: string[];
};
/**
 * Type definition for `AWS::Elasticsearch::Domain.ZoneAwarenessConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticsearch-domain-zoneawarenessconfig.html}
 */
export type ZoneAwarenessConfig = {
  AvailabilityZoneCount?: number;
};
/**
 * Resource Type definition for AWS::Elasticsearch::Domain
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticsearch-domain.html}
 */
export class ElasticsearchDomain extends $Resource<
  "AWS::Elasticsearch::Domain",
  ElasticsearchDomainProperties,
  ElasticsearchDomainAttributes
> {
  public static readonly Type = "AWS::Elasticsearch::Domain";
  constructor(
    logicalId: string,
    properties: ElasticsearchDomainProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ElasticsearchDomain.Type, properties, options);
  }
}
