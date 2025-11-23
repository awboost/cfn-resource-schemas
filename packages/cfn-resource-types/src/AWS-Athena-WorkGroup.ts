import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::Athena::WorkGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-workgroup.html}
 */
export type AthenaWorkGroupProperties = {
  /**
   * The workgroup description.
   * @minLength `0`
   * @maxLength `1024`
   */
  Description?: string;
  /**
   * The workGroup name.
   * @pattern `[a-zA-Z0-9._-]{1,128}`
   */
  Name: string;
  /**
   * The option to delete the workgroup and its contents even if the workgroup contains any named queries.
   */
  RecursiveDeleteOption?: boolean;
  /**
   * The state of the workgroup: ENABLED or DISABLED.
   */
  State?: "ENABLED" | "DISABLED";
  /**
   * One or more tags, separated by commas, that you want to attach to the workgroup as you create it
   */
  Tags?: Tag[];
  /**
   * The workgroup configuration
   */
  WorkGroupConfiguration?: WorkGroupConfiguration;
  /**
   * The workgroup configuration update object
   */
  WorkGroupConfigurationUpdates?: WorkGroupConfigurationUpdates;
};
/**
 * Attribute type definition for `AWS::Athena::WorkGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-workgroup.html#aws-resource-athena-workgroup-return-values}
 */
export type AthenaWorkGroupAttributes = {
  /**
   * The date and time the workgroup was created.
   */
  CreationTime: string;
  /**
   * The workgroup configuration
   */
  WorkGroupConfiguration: {
    /**
     * The Athena engine version for running queries.
     */
    EngineVersion: {
      /**
       * Read only. The engine version on which the query runs. If the user requests a valid engine version other than Auto, the effective engine version is the same as the engine version that the user requested. If the user requests Auto, the effective engine version is chosen by Athena. When a request to update the engine version is made by a CreateWorkGroup or UpdateWorkGroup operation, the EffectiveEngineVersion field is ignored.
       */
      EffectiveEngineVersion: string;
    };
  };
  /**
   * The workgroup configuration update object
   */
  WorkGroupConfigurationUpdates: {
    /**
     * The Athena engine version for running queries.
     */
    EngineVersion: {
      /**
       * Read only. The engine version on which the query runs. If the user requests a valid engine version other than Auto, the effective engine version is the same as the engine version that the user requested. If the user requests Auto, the effective engine version is chosen by Athena. When a request to update the engine version is made by a CreateWorkGroup or UpdateWorkGroup operation, the EffectiveEngineVersion field is ignored.
       */
      EffectiveEngineVersion: string;
    };
  };
};
/**
 * Type definition for `AWS::Athena::WorkGroup.AclConfiguration`.
 * Indicates that an Amazon S3 canned ACL should be set to control ownership of stored query results
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-aclconfiguration.html}
 */
export type AclConfiguration = {
  /**
   * The Amazon S3 canned ACL that Athena should specify when storing query results. Currently the only supported canned ACL is BUCKET_OWNER_FULL_CONTROL
   */
  S3AclOption: S3AclOption;
};
/**
 * Type definition for `AWS::Athena::WorkGroup.Classification`.
 * A classification refers to a set of specific configurations.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-classification.html}
 */
export type Classification = {
  /**
   * The name of the configuration classification.
   */
  Name?: string;
  /**
   * A set of properties specified within a configuration classification.
   */
  Properties?: Record<string, string>;
};
/**
 * Type definition for `AWS::Athena::WorkGroup.CloudWatchLoggingConfiguration`.
 * Configuration settings for delivering logs to Amazon CloudWatch log groups.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-cloudwatchloggingconfiguration.html}
 */
export type CloudWatchLoggingConfiguration = {
  /**
   * Enables CloudWatch logging.
   */
  Enabled?: boolean;
  /**
   * The name of the log group in Amazon CloudWatch Logs where you want to publish your logs.
   */
  LogGroup?: string;
  /**
   * Prefix for the CloudWatch log stream name.
   */
  LogStreamNamePrefix?: string;
  /**
   * The types of logs that you want to publish to CloudWatch.
   */
  LogTypes?: Record<string, string[]>;
};
/**
 * Type definition for `AWS::Athena::WorkGroup.CustomerContentEncryptionConfiguration`.
 * Indicates the KMS key for encrypting notebook content.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-customercontentencryptionconfiguration.html}
 */
export type CustomerContentEncryptionConfiguration = {
  /**
   * For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID.
   */
  KmsKey: string;
};
/**
 * Type definition for `AWS::Athena::WorkGroup.EncryptionConfiguration`.
 * If query results are encrypted in Amazon S3, indicates the encryption option used (for example, SSE-KMS or CSE-KMS) and key information.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-encryptionconfiguration.html}
 */
export type EncryptionConfiguration = {
  /**
   * Indicates whether Amazon S3 server-side encryption with Amazon S3-managed keys (SSE-S3), server-side encryption with KMS-managed keys (SSE-KMS), or client-side encryption with KMS-managed keys (CSE-KMS) is used.
   */
  EncryptionOption: EncryptionOption;
  /**
   * For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID.
   */
  KmsKey?: string;
};
/**
 * Type definition for `AWS::Athena::WorkGroup.EncryptionOption`.
 * Indicates whether Amazon S3 server-side encryption with Amazon S3-managed keys (SSE-S3), server-side encryption with KMS-managed keys (SSE-KMS), or client-side encryption with KMS-managed keys (CSE-KMS) is used.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-encryptionoption.html}
 */
export type EncryptionOption = "SSE_S3" | "SSE_KMS" | "CSE_KMS";
/**
 * Type definition for `AWS::Athena::WorkGroup.EngineConfiguration`.
 * The engine configuration for running queries.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-engineconfiguration.html}
 */
export type EngineConfiguration = {
  /**
   * Contains additional notebook engine MAP<string, string> parameter mappings in the form of key-value pairs. To specify an Athena notebook that the Jupyter server will download and serve, specify a value for the StartSessionRequest$NotebookVersion field, and then add a key named NotebookId to AdditionalConfigs that has the value of the Athena notebook ID.
   */
  AdditionalConfigs?: Record<string, string>;
  /**
   * The configuration classifications that can be specified for the engine.
   */
  Classifications?: Classification[];
  /**
   * The number of DPUs to use for the coordinator. A coordinator is a special executor that orchestrates processing work and manages other executors in a notebook session. The default is 1.
   */
  CoordinatorDpuSize?: number;
  /**
   * The default number of DPUs to use for executors. An executor is the smallest unit of compute that a notebook session can request from Athena. The default is 1.
   */
  DefaultExecutorDpuSize?: number;
  /**
   * The maximum number of DPUs that can run concurrently.
   */
  MaxConcurrentDpus?: number;
  /**
   * Specifies custom jar files and Spark properties for use cases like cluster encryption, table formats, and general Spark tuning.
   */
  SparkProperties?: Record<string, string>;
};
/**
 * Type definition for `AWS::Athena::WorkGroup.EngineVersion`.
 * The Athena engine version for running queries.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-engineversion.html}
 */
export type EngineVersion = {
  /**
   * The engine version requested by the user. Possible values are determined by the output of ListEngineVersions, including Auto. The default is Auto.
   */
  SelectedEngineVersion?: string;
};
/**
 * Type definition for `AWS::Athena::WorkGroup.ManagedLoggingConfiguration`.
 * Configuration settings for managed log persistence.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-managedloggingconfiguration.html}
 */
export type ManagedLoggingConfiguration = {
  /**
   * Enables managed log persistence.
   */
  Enabled?: boolean;
  /**
   * The KMS key ARN to encrypt the logs stored in managed log persistence.
   */
  KmsKey?: string;
};
/**
 * Type definition for `AWS::Athena::WorkGroup.ManagedQueryResultsConfiguration`.
 * The configuration for the managed query results and encryption option. ResultConfiguration and ManagedQueryResultsConfiguration cannot be set at the same time
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-managedqueryresultsconfiguration.html}
 */
export type ManagedQueryResultsConfiguration = {
  Enabled?: boolean;
  /**
   * Indicates the encryption configuration for Athena Managed Storage. If not setting this field, Managed Storage will encrypt the query results with Athena's encryption key
   */
  EncryptionConfiguration?: ManagedStorageEncryptionConfiguration;
};
/**
 * Type definition for `AWS::Athena::WorkGroup.ManagedStorageEncryptionConfiguration`.
 * Indicates the encryption configuration for Athena Managed Storage. If not setting this field, Managed Storage will encrypt the query results with Athena's encryption key
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-managedstorageencryptionconfiguration.html}
 */
export type ManagedStorageEncryptionConfiguration = {
  /**
   * For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID.
   */
  KmsKey?: string;
};
/**
 * Type definition for `AWS::Athena::WorkGroup.MonitoringConfiguration`.
 * Contains the configuration settings for managed log persistence, delivering logs to Amazon S3 buckets, Amazon CloudWatch log groups etc.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-monitoringconfiguration.html}
 */
export type MonitoringConfiguration = {
  /**
   * Configuration settings for delivering logs to Amazon CloudWatch log groups.
   */
  CloudWatchLoggingConfiguration?: CloudWatchLoggingConfiguration;
  /**
   * Configuration settings for managed log persistence.
   */
  ManagedLoggingConfiguration?: ManagedLoggingConfiguration;
  /**
   * Configuration settings for delivering logs to Amazon S3 buckets.
   */
  S3LoggingConfiguration?: S3LoggingConfiguration;
};
/**
 * Type definition for `AWS::Athena::WorkGroup.ResultConfiguration`.
 * The location in Amazon S3 where query results are stored and the encryption option, if any, used for query results. These are known as "client-side settings". If workgroup settings override client-side settings, then the query uses the workgroup settings.

 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-resultconfiguration.html}
 */
export type ResultConfiguration = {
  /**
   * Indicates that an Amazon S3 canned ACL should be set to control ownership of stored query results
   */
  AclConfiguration?: AclConfiguration;
  /**
   * If query results are encrypted in Amazon S3, indicates the encryption option used (for example, SSE-KMS or CSE-KMS) and key information.
   */
  EncryptionConfiguration?: EncryptionConfiguration;
  /**
   * The AWS account ID of the owner of S3 bucket where query results are stored
   */
  ExpectedBucketOwner?: string;
  /**
   * The location in Amazon S3 where your query results are stored, such as s3://path/to/query/bucket/. To run the query, you must specify the query results location using one of the ways: either for individual queries using either this setting (client-side), or in the workgroup, using WorkGroupConfiguration
   */
  OutputLocation?: string;
};
/**
 * Type definition for `AWS::Athena::WorkGroup.ResultConfigurationUpdates`.
 * The result configuration information about the queries in this workgroup that will be updated. Includes the updated results location and an updated option for encrypting query results.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-resultconfigurationupdates.html}
 */
export type ResultConfigurationUpdates = {
  /**
   * Indicates that an Amazon S3 canned ACL should be set to control ownership of stored query results
   */
  AclConfiguration?: AclConfiguration;
  /**
   * If query results are encrypted in Amazon S3, indicates the encryption option used (for example, SSE-KMS or CSE-KMS) and key information.
   */
  EncryptionConfiguration?: EncryptionConfiguration;
  /**
   * The AWS account ID of the owner of S3 bucket where query results are stored
   */
  ExpectedBucketOwner?: string;
  /**
   * The location in Amazon S3 where your query results are stored, such as s3://path/to/query/bucket/. To run the query, you must specify the query results location using one of the ways: either for individual queries using either this setting (client-side), or in the workgroup, using WorkGroupConfiguration
   */
  OutputLocation?: string;
  RemoveAclConfiguration?: boolean;
  RemoveEncryptionConfiguration?: boolean;
  RemoveExpectedBucketOwner?: boolean;
  RemoveOutputLocation?: boolean;
};
/**
 * Type definition for `AWS::Athena::WorkGroup.S3AclOption`.
 * The Amazon S3 canned ACL that Athena should specify when storing query results. Currently the only supported canned ACL is BUCKET_OWNER_FULL_CONTROL
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-s3acloption.html}
 */
export type S3AclOption = "BUCKET_OWNER_FULL_CONTROL";
/**
 * Type definition for `AWS::Athena::WorkGroup.S3LoggingConfiguration`.
 * Configuration settings for delivering logs to Amazon S3 buckets.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-s3loggingconfiguration.html}
 */
export type S3LoggingConfiguration = {
  /**
   * Enables S3 log delivery.
   */
  Enabled?: boolean;
  /**
   * The KMS key ARN to encrypt the logs published to the given Amazon S3 destination.
   */
  KmsKey?: string;
  /**
   * The Amazon S3 destination URI for log publishing.
   */
  LogLocation?: string;
};
/**
 * Type definition for `AWS::Athena::WorkGroup.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::Athena::WorkGroup.WorkGroupConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-workgroupconfiguration.html}
 */
export type WorkGroupConfiguration = {
  /**
   * Additional Configuration that are passed to Athena Spark Calculations running in this workgroup
   */
  AdditionalConfiguration?: string;
  /**
   * The upper data usage limit (cutoff) for the amount of bytes a single query in a workgroup is allowed to scan.
   * @min `10000000`
   */
  BytesScannedCutoffPerQuery?: number;
  /**
   * Indicates the KMS key for encrypting notebook content.
   */
  CustomerContentEncryptionConfiguration?: CustomerContentEncryptionConfiguration;
  /**
   * If set to "true", the settings for the workgroup override client-side settings. If set to "false", client-side settings are used
   */
  EnforceWorkGroupConfiguration?: boolean;
  /**
   * The engine configuration for running queries.
   */
  EngineConfiguration?: EngineConfiguration;
  /**
   * The Athena engine version for running queries.
   */
  EngineVersion?: EngineVersion;
  /**
   * The ARN of the execution role used to access user resources for Spark sessions and Identity Center enabled workgroups. This property applies only to Spark enabled workgroups and Identity Center enabled workgroups.
   */
  ExecutionRole?: string;
  /**
   * The configuration for the managed query results and encryption option. ResultConfiguration and ManagedQueryResultsConfiguration cannot be set at the same time
   */
  ManagedQueryResultsConfiguration?: ManagedQueryResultsConfiguration;
  /**
   * Contains the configuration settings for managed log persistence, delivering logs to Amazon S3 buckets, Amazon CloudWatch log groups etc.
   */
  MonitoringConfiguration?: MonitoringConfiguration;
  /**
   * Indicates that the Amazon CloudWatch metrics are enabled for the workgroup.
   */
  PublishCloudWatchMetricsEnabled?: boolean;
  /**
   * If set to true, allows members assigned to a workgroup to reference Amazon S3 Requester Pays buckets in queries. If set to false, workgroup members cannot query data from Requester Pays buckets, and queries that retrieve data from Requester Pays buckets cause an error.
   */
  RequesterPaysEnabled?: boolean;
  /**
     * The location in Amazon S3 where query results are stored and the encryption option, if any, used for query results. These are known as "client-side settings". If workgroup settings override client-side settings, then the query uses the workgroup settings.
    
     */
  ResultConfiguration?: ResultConfiguration;
};
/**
 * Type definition for `AWS::Athena::WorkGroup.WorkGroupConfigurationUpdates`.
 * The configuration information that will be updated for this workgroup, which includes the location in Amazon S3 where query results are stored, the encryption option, if any, used for query results, whether the Amazon CloudWatch Metrics are enabled for the workgroup, whether the workgroup settings override the client-side settings, and the data usage limit for the amount of bytes scanned per query, if it is specified.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-workgroupconfigurationupdates.html}
 */
export type WorkGroupConfigurationUpdates = {
  /**
   * Additional Configuration that are passed to Athena Spark Calculations running in this workgroup
   */
  AdditionalConfiguration?: string;
  /**
   * The upper data usage limit (cutoff) for the amount of bytes a single query in a workgroup is allowed to scan.
   * @min `10000000`
   */
  BytesScannedCutoffPerQuery?: number;
  /**
   * Indicates the KMS key for encrypting notebook content.
   */
  CustomerContentEncryptionConfiguration?: CustomerContentEncryptionConfiguration;
  /**
   * If set to "true", the settings for the workgroup override client-side settings. If set to "false", client-side settings are used
   */
  EnforceWorkGroupConfiguration?: boolean;
  /**
   * The engine configuration for running queries.
   */
  EngineConfiguration?: EngineConfiguration;
  /**
   * The Athena engine version for running queries.
   */
  EngineVersion?: EngineVersion;
  /**
   * The ARN of the execution role used to access user resources for Spark sessions and Identity Center enabled workgroups. This property applies only to Spark enabled workgroups and Identity Center enabled workgroups.
   */
  ExecutionRole?: string;
  /**
   * The configuration for the managed query results and encryption option. ResultConfiguration and ManagedQueryResultsConfiguration cannot be set at the same time
   */
  ManagedQueryResultsConfiguration?: ManagedQueryResultsConfiguration;
  /**
   * Contains the configuration settings for managed log persistence, delivering logs to Amazon S3 buckets, Amazon CloudWatch log groups etc.
   */
  MonitoringConfiguration?: MonitoringConfiguration;
  /**
   * Indicates that the Amazon CloudWatch metrics are enabled for the workgroup.
   */
  PublishCloudWatchMetricsEnabled?: boolean;
  /**
   * Indicates that the data usage control limit per query is removed.
   */
  RemoveBytesScannedCutoffPerQuery?: boolean;
  RemoveCustomerContentEncryptionConfiguration?: boolean;
  /**
   * If set to true, allows members assigned to a workgroup to reference Amazon S3 Requester Pays buckets in queries. If set to false, workgroup members cannot query data from Requester Pays buckets, and queries that retrieve data from Requester Pays buckets cause an error.
   */
  RequesterPaysEnabled?: boolean;
  /**
   * The result configuration information about the queries in this workgroup that will be updated. Includes the updated results location and an updated option for encrypting query results.
   */
  ResultConfigurationUpdates?: ResultConfigurationUpdates;
};
/**
 * Resource schema for AWS::Athena::WorkGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-workgroup.html}
 */
export class AthenaWorkGroup extends $Resource<
  "AWS::Athena::WorkGroup",
  AthenaWorkGroupProperties,
  AthenaWorkGroupAttributes
> {
  public static readonly Type = "AWS::Athena::WorkGroup";
  constructor(
    logicalId: string,
    properties: AthenaWorkGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AthenaWorkGroup.Type, properties, options);
  }
}
