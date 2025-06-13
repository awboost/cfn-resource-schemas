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
   * The Athena engine version for running queries.
   */
  EngineVersion?: EngineVersion;
  /**
   * Execution Role ARN required to run Athena Spark Calculations
   */
  ExecutionRole?: string;
  /**
   * The configuration for the managed query results and encryption option. ResultConfiguration and ManagedQueryResultsConfiguration cannot be set at the same time
   */
  ManagedQueryResultsConfiguration?: ManagedQueryResultsConfiguration;
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
   * The Athena engine version for running queries.
   */
  EngineVersion?: EngineVersion;
  /**
   * Execution Role ARN required to run Athena Spark Calculations
   */
  ExecutionRole?: string;
  /**
   * The configuration for the managed query results and encryption option. ResultConfiguration and ManagedQueryResultsConfiguration cannot be set at the same time
   */
  ManagedQueryResultsConfiguration?: ManagedQueryResultsConfiguration;
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
