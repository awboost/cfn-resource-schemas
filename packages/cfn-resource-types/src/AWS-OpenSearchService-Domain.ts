import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::OpenSearchService::Domain`.
 * An example resource schema demonstrating some basic constructs and validation rules.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-domain.html}
 */
export type OpenSearchServiceDomainProperties = {
  AccessPolicies?: Record<string, any>;
  AdvancedOptions?: Record<string, string>;
  AdvancedSecurityOptions?: AdvancedSecurityOptionsInput;
  ClusterConfig?: ClusterConfig;
  CognitoOptions?: CognitoOptions;
  DomainEndpointOptions?: DomainEndpointOptions;
  DomainName?: string;
  EBSOptions?: EBSOptions;
  EncryptionAtRestOptions?: EncryptionAtRestOptions;
  EngineVersion?: string;
  LogPublishingOptions?: Record<string, LogPublishingOption>;
  NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions;
  OffPeakWindowOptions?: OffPeakWindowOptions;
  SnapshotOptions?: SnapshotOptions;
  SoftwareUpdateOptions?: SoftwareUpdateOptions;
  /**
   * An arbitrary set of tags (key-value pairs) for this Domain.
   */
  Tags?: Tag[];
  VPCOptions?: VPCOptions;
};
/**
 * Attribute type definition for `AWS::OpenSearchService::Domain`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-domain.html#aws-resource-opensearchservice-domain-return-values}
 */
export type OpenSearchServiceDomainAttributes = {
  AdvancedSecurityOptions: {
    AnonymousAuthDisableDate: string;
  };
  Arn: string;
  DomainArn: string;
  DomainEndpoint: string;
  DomainEndpoints: Record<string, string>;
  Id: string;
  ServiceSoftwareOptions: {
    AutomatedUpdateDate: string;
    Cancellable: boolean;
    CurrentVersion: string;
    Description: string;
    NewVersion: string;
    OptionalDeployment: boolean;
    UpdateAvailable: boolean;
    UpdateStatus: string;
  };
};
/**
 * Type definition for `AWS::OpenSearchService::Domain.AdvancedSecurityOptionsInput`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-advancedsecurityoptionsinput.html}
 */
export type AdvancedSecurityOptionsInput = {
  AnonymousAuthEnabled?: boolean;
  Enabled?: boolean;
  InternalUserDatabaseEnabled?: boolean;
  MasterUserOptions?: MasterUserOptions;
  SAMLOptions?: SAMLOptions;
};
/**
 * Type definition for `AWS::OpenSearchService::Domain.ClusterConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-clusterconfig.html}
 */
export type ClusterConfig = {
  DedicatedMasterCount?: number;
  DedicatedMasterEnabled?: boolean;
  DedicatedMasterType?: string;
  InstanceCount?: number;
  InstanceType?: string;
  MultiAZWithStandbyEnabled?: boolean;
  WarmCount?: number;
  WarmEnabled?: boolean;
  WarmType?: string;
  ZoneAwarenessConfig?: ZoneAwarenessConfig;
  ZoneAwarenessEnabled?: boolean;
};
/**
 * Type definition for `AWS::OpenSearchService::Domain.CognitoOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-cognitooptions.html}
 */
export type CognitoOptions = {
  Enabled?: boolean;
  IdentityPoolId?: string;
  RoleArn?: string;
  UserPoolId?: string;
};
/**
 * Type definition for `AWS::OpenSearchService::Domain.DomainEndpointOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-domainendpointoptions.html}
 */
export type DomainEndpointOptions = {
  CustomEndpoint?: string;
  CustomEndpointCertificateArn?: string;
  CustomEndpointEnabled?: boolean;
  EnforceHTTPS?: boolean;
  TLSSecurityPolicy?: string;
};
/**
 * Type definition for `AWS::OpenSearchService::Domain.EBSOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-ebsoptions.html}
 */
export type EBSOptions = {
  EBSEnabled?: boolean;
  Iops?: number;
  Throughput?: number;
  VolumeSize?: number;
  VolumeType?: string;
};
/**
 * Type definition for `AWS::OpenSearchService::Domain.EncryptionAtRestOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-encryptionatrestoptions.html}
 */
export type EncryptionAtRestOptions = {
  Enabled?: boolean;
  KmsKeyId?: string;
};
/**
 * Type definition for `AWS::OpenSearchService::Domain.Idp`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-idp.html}
 */
export type Idp = {
  EntityId: string;
  /**
   * @minLength `1`
   * @maxLength `1048576`
   */
  MetadataContent: string;
};
/**
 * Type definition for `AWS::OpenSearchService::Domain.LogPublishingOption`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-logpublishingoption.html}
 */
export type LogPublishingOption = {
  CloudWatchLogsLogGroupArn?: string;
  Enabled?: boolean;
};
/**
 * Type definition for `AWS::OpenSearchService::Domain.MasterUserOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-masteruseroptions.html}
 */
export type MasterUserOptions = {
  MasterUserARN?: string;
  MasterUserName?: string;
  MasterUserPassword?: string;
};
/**
 * Type definition for `AWS::OpenSearchService::Domain.NodeToNodeEncryptionOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-nodetonodeencryptionoptions.html}
 */
export type NodeToNodeEncryptionOptions = {
  Enabled?: boolean;
};
/**
 * Type definition for `AWS::OpenSearchService::Domain.OffPeakWindow`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-offpeakwindow.html}
 */
export type OffPeakWindow = {
  WindowStartTime?: WindowStartTime;
};
/**
 * Type definition for `AWS::OpenSearchService::Domain.OffPeakWindowOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-offpeakwindowoptions.html}
 */
export type OffPeakWindowOptions = {
  Enabled?: boolean;
  OffPeakWindow?: OffPeakWindow;
};
/**
 * Type definition for `AWS::OpenSearchService::Domain.SAMLOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-samloptions.html}
 */
export type SAMLOptions = {
  Enabled?: boolean;
  Idp?: Idp;
  MasterBackendRole?: string;
  MasterUserName?: string;
  RolesKey?: string;
  SessionTimeoutMinutes?: number;
  SubjectKey?: string;
};
/**
 * Type definition for `AWS::OpenSearchService::Domain.ServiceSoftwareOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-servicesoftwareoptions.html}
 */
export type ServiceSoftwareOptions = {
  AutomatedUpdateDate?: string;
  Cancellable?: boolean;
  CurrentVersion?: string;
  Description?: string;
  NewVersion?: string;
  OptionalDeployment?: boolean;
  UpdateAvailable?: boolean;
  UpdateStatus?: string;
};
/**
 * Type definition for `AWS::OpenSearchService::Domain.SnapshotOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-snapshotoptions.html}
 */
export type SnapshotOptions = {
  AutomatedSnapshotStartHour?: number;
};
/**
 * Type definition for `AWS::OpenSearchService::Domain.SoftwareUpdateOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-softwareupdateoptions.html}
 */
export type SoftwareUpdateOptions = {
  AutoSoftwareUpdateEnabled?: boolean;
};
/**
 * Type definition for `AWS::OpenSearchService::Domain.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-tag.html}
 */
export type Tag = {
  /**
   * The value of the tag.
   * @minLength `0`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The key of the tag.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::OpenSearchService::Domain.VPCOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-vpcoptions.html}
 */
export type VPCOptions = {
  SecurityGroupIds?: string[];
  SubnetIds?: string[];
};
/**
 * Type definition for `AWS::OpenSearchService::Domain.WindowStartTime`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-windowstarttime.html}
 */
export type WindowStartTime = {
  /**
   * @min `0`
   * @max `23`
   */
  Hours: number;
  /**
   * @min `0`
   * @max `59`
   */
  Minutes: number;
};
/**
 * Type definition for `AWS::OpenSearchService::Domain.ZoneAwarenessConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-zoneawarenessconfig.html}
 */
export type ZoneAwarenessConfig = {
  AvailabilityZoneCount?: number;
};
/**
 * Resource type definition for `AWS::OpenSearchService::Domain`.
 * An example resource schema demonstrating some basic constructs and validation rules.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-domain.html}
 */
export class OpenSearchServiceDomain extends $Resource<
  "AWS::OpenSearchService::Domain",
  OpenSearchServiceDomainProperties,
  OpenSearchServiceDomainAttributes
> {
  public static readonly Type = "AWS::OpenSearchService::Domain";
  constructor(
    logicalId: string,
    properties: OpenSearchServiceDomainProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, OpenSearchServiceDomain.Type, properties, options);
  }
}
