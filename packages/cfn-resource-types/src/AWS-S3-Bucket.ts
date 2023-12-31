import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::S3::Bucket
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-bucket.html}
 */
export type S3BucketProperties = {
  /**
   * Configuration for the transfer acceleration state.
   */
  AccelerateConfiguration?: AccelerateConfiguration;
  /**
   * A canned access control list (ACL) that grants predefined permissions to the bucket.
   */
  AccessControl?:
    | "AuthenticatedRead"
    | "AwsExecRead"
    | "BucketOwnerFullControl"
    | "BucketOwnerRead"
    | "LogDeliveryWrite"
    | "Private"
    | "PublicRead"
    | "PublicReadWrite";
  /**
   * The configuration and any analyses for the analytics filter of an Amazon S3 bucket.
   */
  AnalyticsConfigurations?: AnalyticsConfiguration[];
  /**
   * Specifies default encryption for a bucket using server-side encryption with either Amazon S3-managed keys (SSE-S3) or AWS KMS-managed keys (SSE-KMS).
   */
  BucketEncryption?: BucketEncryption;
  /**
   * A name for the bucket. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the bucket name.
   * @minLength `3`
   * @maxLength `63`
   * @pattern `^[a-z0-9][a-z0-9//.//-]*[a-z0-9]$`
   */
  BucketName?: string;
  /**
   * Rules that define cross-origin resource sharing of objects in this bucket.
   */
  CorsConfiguration?: CorsConfiguration;
  /**
   * Specifies the S3 Intelligent-Tiering configuration for an Amazon S3 bucket.
   */
  IntelligentTieringConfigurations?: IntelligentTieringConfiguration[];
  /**
   * The inventory configuration for an Amazon S3 bucket.
   */
  InventoryConfigurations?: InventoryConfiguration[];
  /**
   * Rules that define how Amazon S3 manages objects during their lifetime.
   */
  LifecycleConfiguration?: LifecycleConfiguration;
  /**
   * Settings that define where logs are stored.
   */
  LoggingConfiguration?: LoggingConfiguration;
  /**
   * Settings that define a metrics configuration for the CloudWatch request metrics from the bucket.
   */
  MetricsConfigurations?: MetricsConfiguration[];
  /**
   * Configuration that defines how Amazon S3 handles bucket notifications.
   */
  NotificationConfiguration?: NotificationConfiguration;
  /**
   * Places an Object Lock configuration on the specified bucket.
   */
  ObjectLockConfiguration?: ObjectLockConfiguration;
  /**
   * Indicates whether this bucket has an Object Lock configuration enabled.
   */
  ObjectLockEnabled?: boolean;
  /**
   * Specifies the container element for object ownership rules.
   */
  OwnershipControls?: OwnershipControls;
  /**
   * Configuration that defines how Amazon S3 handles public access.
   */
  PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration;
  /**
   * Configuration for replicating objects in an S3 bucket.
   */
  ReplicationConfiguration?: ReplicationConfiguration;
  /**
   * An arbitrary set of tags (key-value pairs) for this S3 bucket.
   */
  Tags?: Tag[];
  /**
   * Describes the versioning state of an Amazon S3 bucket.
   */
  VersioningConfiguration?: VersioningConfiguration;
  /**
   * Specifies website configuration parameters for an Amazon S3 bucket.
   */
  WebsiteConfiguration?: WebsiteConfiguration;
};
/**
 * Attribute type definition for `AWS::S3::Bucket`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-bucket.html#aws-resource-s3-bucket-return-values}
 */
export type S3BucketAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the specified bucket.
   */
  Arn: string;
  /**
   * The IPv4 DNS name of the specified bucket.
   */
  DomainName: string;
  /**
   * The IPv6 DNS name of the specified bucket. For more information about dual-stack endpoints, see [Using Amazon S3 Dual-Stack Endpoints](https://docs.aws.amazon.com/AmazonS3/latest/dev/dual-stack-endpoints.html).
   */
  DualStackDomainName: string;
  /**
   * Returns the regional domain name of the specified bucket.
   */
  RegionalDomainName: string;
  /**
   * The Amazon S3 website endpoint for the specified bucket.
   */
  WebsiteURL: string;
};
/**
 * Type definition for `AWS::S3::Bucket.AbortIncompleteMultipartUpload`.
 * Specifies the days since the initiation of an incomplete multipart upload that Amazon S3 will wait before permanently removing all parts of the upload.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-abortincompletemultipartupload.html}
 */
export type AbortIncompleteMultipartUpload = {
  /**
   * Specifies the number of days after which Amazon S3 aborts an incomplete multipart upload.
   */
  DaysAfterInitiation: number;
};
/**
 * Type definition for `AWS::S3::Bucket.AccelerateConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-accelerateconfiguration.html}
 */
export type AccelerateConfiguration = {
  /**
   * Configures the transfer acceleration state for an Amazon S3 bucket.
   */
  AccelerationStatus: "Enabled" | "Suspended";
};
/**
 * Type definition for `AWS::S3::Bucket.AccessControlTranslation`.
 * Specify this only in a cross-account scenario (where source and destination bucket owners are not the same), and you want to change replica ownership to the AWS account that owns the destination bucket. If this is not specified in the replication configuration, the replicas are owned by same AWS account that owns the source object.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-accesscontroltranslation.html}
 */
export type AccessControlTranslation = {
  Owner: "Destination";
};
/**
 * Type definition for `AWS::S3::Bucket.AnalyticsConfiguration`.
 * Specifies the configuration and any analyses for the analytics filter of an Amazon S3 bucket.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-analyticsconfiguration.html}
 */
export type AnalyticsConfiguration = {
  /**
   * The ID that identifies the analytics configuration.
   */
  Id: string;
  /**
   * The prefix that an object must have to be included in the analytics results.
   */
  Prefix?: string;
  /**
   * Specifies data related to access patterns to be collected and made available to analyze the tradeoffs between different storage classes for an Amazon S3 bucket.
   */
  StorageClassAnalysis: StorageClassAnalysis;
  TagFilters?: TagFilter[];
};
/**
 * Type definition for `AWS::S3::Bucket.BucketEncryption`.
 * Specifies default encryption for a bucket using server-side encryption with either Amazon S3-managed keys (SSE-S3) or AWS KMS-managed keys (SSE-KMS).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-bucketencryption.html}
 */
export type BucketEncryption = {
  /**
   * Specifies the default server-side-encryption configuration.
   */
  ServerSideEncryptionConfiguration: ServerSideEncryptionRule[];
};
/**
 * Type definition for `AWS::S3::Bucket.CorsConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-corsconfiguration.html}
 */
export type CorsConfiguration = {
  CorsRules: CorsRule[];
};
/**
 * Type definition for `AWS::S3::Bucket.CorsRule`.
 * A set of origins and methods (cross-origin access that you want to allow). You can add up to 100 rules to the configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-corsrule.html}
 */
export type CorsRule = {
  /**
   * Headers that are specified in the Access-Control-Request-Headers header.
   */
  AllowedHeaders?: string[];
  /**
   * An HTTP method that you allow the origin to execute.
   */
  AllowedMethods: ("GET" | "PUT" | "HEAD" | "POST" | "DELETE")[];
  /**
   * One or more origins you want customers to be able to access the bucket from.
   */
  AllowedOrigins: string[];
  /**
   * One or more headers in the response that you want customers to be able to access from their applications (for example, from a JavaScript XMLHttpRequest object).
   */
  ExposedHeaders?: string[];
  /**
   * A unique identifier for this rule.
   * @maxLength `255`
   */
  Id?: string;
  /**
   * The time in seconds that your browser is to cache the preflight response for the specified resource.
   */
  MaxAge?: number;
};
/**
 * Type definition for `AWS::S3::Bucket.DataExport`.
 * Specifies how data related to the storage class analysis for an Amazon S3 bucket should be exported.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-dataexport.html}
 */
export type DataExport = {
  /**
   * Specifies information about where to publish analysis or configuration results for an Amazon S3 bucket and S3 Replication Time Control (S3 RTC).
   */
  Destination: Destination;
  /**
   * The version of the output schema to use when exporting data.
   */
  OutputSchemaVersion: "V_1";
};
/**
 * Type definition for `AWS::S3::Bucket.DefaultRetention`.
 * The default retention period that you want to apply to new objects placed in the specified bucket.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-defaultretention.html}
 */
export type DefaultRetention = {
  Days?: number;
  Mode?: "COMPLIANCE" | "GOVERNANCE";
  Years?: number;
};
/**
 * Type definition for `AWS::S3::Bucket.DeleteMarkerReplication`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-deletemarkerreplication.html}
 */
export type DeleteMarkerReplication = {
  Status?: "Disabled" | "Enabled";
};
/**
 * Type definition for `AWS::S3::Bucket.Destination`.
 * Specifies information about where to publish analysis or configuration results for an Amazon S3 bucket and S3 Replication Time Control (S3 RTC).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-destination.html}
 */
export type Destination = {
  /**
   * The account ID that owns the destination S3 bucket.
   */
  BucketAccountId?: string;
  /**
   * The Amazon Resource Name (ARN) of the bucket to which data is exported.
   */
  BucketArn: string;
  /**
   * Specifies the file format used when exporting data to Amazon S3.
   */
  Format: "CSV" | "ORC" | "Parquet";
  /**
   * The prefix to use when exporting data. The prefix is prepended to all results.
   */
  Prefix?: string;
};
/**
 * Type definition for `AWS::S3::Bucket.EncryptionConfiguration`.
 * Specifies encryption-related information for an Amazon S3 bucket that is a destination for replicated objects.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-encryptionconfiguration.html}
 */
export type EncryptionConfiguration = {
  /**
   * Specifies the ID (Key ARN or Alias ARN) of the customer managed customer master key (CMK) stored in AWS Key Management Service (KMS) for the destination bucket.
   */
  ReplicaKmsKeyID: string;
};
/**
 * Type definition for `AWS::S3::Bucket.EventBridgeConfiguration`.
 * Describes the Amazon EventBridge notification configuration for an Amazon S3 bucket.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-eventbridgeconfiguration.html}
 */
export type EventBridgeConfiguration = {
  /**
   * Specifies whether to send notifications to Amazon EventBridge when events occur in an Amazon S3 bucket.
   */
  EventBridgeEnabled: boolean;
};
/**
 * Type definition for `AWS::S3::Bucket.FilterRule`.
 * Specifies the Amazon S3 object key name to filter on and whether to filter on the suffix or prefix of the key name.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-filterrule.html}
 */
export type FilterRule = {
  /**
   * @maxLength `1024`
   */
  Name: string;
  Value: string;
};
/**
 * Type definition for `AWS::S3::Bucket.IntelligentTieringConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-intelligenttieringconfiguration.html}
 */
export type IntelligentTieringConfiguration = {
  /**
   * The ID used to identify the S3 Intelligent-Tiering configuration.
   */
  Id: string;
  /**
   * An object key name prefix that identifies the subset of objects to which the rule applies.
   */
  Prefix?: string;
  /**
   * Specifies the status of the configuration.
   */
  Status: "Disabled" | "Enabled";
  /**
   * A container for a key-value pair.
   */
  TagFilters?: TagFilter[];
  /**
   * Specifies a list of S3 Intelligent-Tiering storage class tiers in the configuration. At least one tier must be defined in the list. At most, you can specify two tiers in the list, one for each available AccessTier: ARCHIVE_ACCESS and DEEP_ARCHIVE_ACCESS.
   */
  Tierings: Tiering[];
};
/**
 * Type definition for `AWS::S3::Bucket.InventoryConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-inventoryconfiguration.html}
 */
export type InventoryConfiguration = {
  /**
   * Specifies information about where to publish analysis or configuration results for an Amazon S3 bucket and S3 Replication Time Control (S3 RTC).
   */
  Destination: Destination;
  /**
   * Specifies whether the inventory is enabled or disabled.
   */
  Enabled: boolean;
  /**
   * The ID used to identify the inventory configuration.
   */
  Id: string;
  /**
   * Object versions to include in the inventory list.
   */
  IncludedObjectVersions: "All" | "Current";
  /**
   * Contains the optional fields that are included in the inventory results.
   */
  OptionalFields?: (
    | "Size"
    | "LastModifiedDate"
    | "StorageClass"
    | "ETag"
    | "IsMultipartUploaded"
    | "ReplicationStatus"
    | "EncryptionStatus"
    | "ObjectLockRetainUntilDate"
    | "ObjectLockMode"
    | "ObjectLockLegalHoldStatus"
    | "IntelligentTieringAccessTier"
    | "BucketKeyStatus"
  )[];
  /**
   * The prefix that is prepended to all inventory results.
   */
  Prefix?: string;
  /**
   * Specifies the schedule for generating inventory results.
   */
  ScheduleFrequency: "Daily" | "Weekly";
};
/**
 * Type definition for `AWS::S3::Bucket.LambdaConfiguration`.
 * Describes the AWS Lambda functions to invoke and the events for which to invoke them.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-lambdaconfiguration.html}
 */
export type LambdaConfiguration = {
  /**
   * The Amazon S3 bucket event for which to invoke the AWS Lambda function.
   */
  Event: string;
  /**
   * The filtering rules that determine which objects invoke the AWS Lambda function.
   */
  Filter?: NotificationFilter;
  /**
   * The Amazon Resource Name (ARN) of the AWS Lambda function that Amazon S3 invokes when the specified event type occurs.
   */
  Function: string;
};
/**
 * Type definition for `AWS::S3::Bucket.LifecycleConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-lifecycleconfiguration.html}
 */
export type LifecycleConfiguration = {
  /**
   * A lifecycle rule for individual objects in an Amazon S3 bucket.
   */
  Rules: Rule[];
};
/**
 * Type definition for `AWS::S3::Bucket.LoggingConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-loggingconfiguration.html}
 */
export type LoggingConfiguration = {
  /**
   * The name of an Amazon S3 bucket where Amazon S3 store server access log files. You can store log files in any bucket that you own. By default, logs are stored in the bucket where the LoggingConfiguration property is defined.
   */
  DestinationBucketName?: string;
  LogFilePrefix?: string;
  /**
   * Describes the key format for server access log file in the target bucket. You can choose between SimplePrefix and PartitionedPrefix.
   */
  TargetObjectKeyFormat?:
    | {
        /**
         * This format defaults the prefix to the given log file prefix for delivering server access log file.
         */
        SimplePrefix: Record<string, any>;
      }
    | {
        /**
         * This format appends a time based prefix to the given log file prefix for delivering server access log file.
         */
        PartitionedPrefix: PartitionedPrefix;
      };
};
/**
 * Type definition for `AWS::S3::Bucket.Metrics`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-metrics.html}
 */
export type Metrics = {
  EventThreshold?: ReplicationTimeValue;
  Status: "Disabled" | "Enabled";
};
/**
 * Type definition for `AWS::S3::Bucket.MetricsConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-metricsconfiguration.html}
 */
export type MetricsConfiguration = {
  AccessPointArn?: string;
  Id: string;
  Prefix?: string;
  TagFilters?: TagFilter[];
};
/**
 * Type definition for `AWS::S3::Bucket.NoncurrentVersionExpiration`.
 * Container for the expiration rule that describes when noncurrent objects are expired. If your bucket is versioning-enabled (or versioning is suspended), you can set this action to request that Amazon S3 expire noncurrent object versions at a specific period in the object's lifetime
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-noncurrentversionexpiration.html}
 */
export type NoncurrentVersionExpiration = {
  /**
   * Specified the number of newer noncurrent and current versions that must exists before performing the associated action
   */
  NewerNoncurrentVersions?: number;
  /**
   * Specified the number of days an object is noncurrent before Amazon S3 can perform the associated action
   */
  NoncurrentDays: number;
};
/**
 * Type definition for `AWS::S3::Bucket.NoncurrentVersionTransition`.
 * Container for the transition rule that describes when noncurrent objects transition to the STANDARD_IA, ONEZONE_IA, INTELLIGENT_TIERING, GLACIER_IR, GLACIER, or DEEP_ARCHIVE storage class. If your bucket is versioning-enabled (or versioning is suspended), you can set this action to request that Amazon S3 transition noncurrent object versions to the STANDARD_IA, ONEZONE_IA, INTELLIGENT_TIERING, GLACIER_IR, GLACIER, or DEEP_ARCHIVE storage class at a specific period in the object's lifetime.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-noncurrentversiontransition.html}
 */
export type NoncurrentVersionTransition = {
  /**
   * Specified the number of newer noncurrent and current versions that must exists before performing the associated action
   */
  NewerNoncurrentVersions?: number;
  /**
   * The class of storage used to store the object.
   */
  StorageClass:
    | "DEEP_ARCHIVE"
    | "GLACIER"
    | "Glacier"
    | "GLACIER_IR"
    | "INTELLIGENT_TIERING"
    | "ONEZONE_IA"
    | "STANDARD_IA";
  /**
   * Specifies the number of days an object is noncurrent before Amazon S3 can perform the associated action.
   */
  TransitionInDays: number;
};
/**
 * Type definition for `AWS::S3::Bucket.NotificationConfiguration`.
 * Describes the notification configuration for an Amazon S3 bucket.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-notificationconfiguration.html}
 */
export type NotificationConfiguration = {
  /**
   * Describes the Amazon EventBridge notification configuration for an Amazon S3 bucket.
   */
  EventBridgeConfiguration?: EventBridgeConfiguration;
  LambdaConfigurations?: LambdaConfiguration[];
  QueueConfigurations?: QueueConfiguration[];
  TopicConfigurations?: TopicConfiguration[];
};
/**
 * Type definition for `AWS::S3::Bucket.NotificationFilter`.
 * Specifies object key name filtering rules.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-notificationfilter.html}
 */
export type NotificationFilter = {
  /**
   * A container for object key name prefix and suffix filtering rules.
   */
  S3Key: S3KeyFilter;
};
/**
 * Type definition for `AWS::S3::Bucket.ObjectLockConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-objectlockconfiguration.html}
 */
export type ObjectLockConfiguration = {
  ObjectLockEnabled?: "Enabled";
  /**
   * The Object Lock rule in place for the specified object.
   */
  Rule?: ObjectLockRule;
};
/**
 * Type definition for `AWS::S3::Bucket.ObjectLockRule`.
 * The Object Lock rule in place for the specified object.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-objectlockrule.html}
 */
export type ObjectLockRule = {
  /**
   * The default retention period that you want to apply to new objects placed in the specified bucket.
   */
  DefaultRetention?: DefaultRetention;
};
/**
 * Type definition for `AWS::S3::Bucket.OwnershipControls`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-ownershipcontrols.html}
 */
export type OwnershipControls = {
  Rules: OwnershipControlsRule[];
};
/**
 * Type definition for `AWS::S3::Bucket.OwnershipControlsRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-ownershipcontrolsrule.html}
 */
export type OwnershipControlsRule = {
  /**
   * Specifies an object ownership rule.
   */
  ObjectOwnership?:
    | "ObjectWriter"
    | "BucketOwnerPreferred"
    | "BucketOwnerEnforced";
};
/**
 * Type definition for `AWS::S3::Bucket.PartitionedPrefix`.
 * This format appends a time based prefix to the given log file prefix for delivering server access log file.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-partitionedprefix.html}
 */
export type PartitionedPrefix = {
  /**
   * Date Source for creating a partitioned prefix. This can be event time or delivery time.
   */
  PartitionDateSource?: "EventTime" | "DeliveryTime";
};
/**
 * Type definition for `AWS::S3::Bucket.PublicAccessBlockConfiguration`.
 * Configuration that defines how Amazon S3 handles public access.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-publicaccessblockconfiguration.html}
 */
export type PublicAccessBlockConfiguration = {
  /**
     * Specifies whether Amazon S3 should block public access control lists (ACLs) for this bucket and objects in this bucket. Setting this element to TRUE causes the following behavior:
    - PUT Bucket acl and PUT Object acl calls fail if the specified ACL is public.
     - PUT Object calls fail if the request includes a public ACL.
    Enabling this setting doesn't affect existing policies or ACLs.
     */
  BlockPublicAcls?: boolean;
  /**
     * Specifies whether Amazon S3 should block public bucket policies for this bucket. Setting this element to TRUE causes Amazon S3 to reject calls to PUT Bucket policy if the specified bucket policy allows public access.
    Enabling this setting doesn't affect existing bucket policies.
     */
  BlockPublicPolicy?: boolean;
  /**
     * Specifies whether Amazon S3 should ignore public ACLs for this bucket and objects in this bucket. Setting this element to TRUE causes Amazon S3 to ignore all public ACLs on this bucket and objects in this bucket.
    Enabling this setting doesn't affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set.
     */
  IgnorePublicAcls?: boolean;
  /**
     * Specifies whether Amazon S3 should restrict public bucket policies for this bucket. Setting this element to TRUE restricts access to this bucket to only AWS services and authorized users within this account if the bucket has a public policy.
    Enabling this setting doesn't affect previously stored bucket policies, except that public and cross-account access within any public bucket policy, including non-public delegation to specific accounts, is blocked.
     */
  RestrictPublicBuckets?: boolean;
};
/**
 * Type definition for `AWS::S3::Bucket.QueueConfiguration`.
 * The Amazon Simple Queue Service queues to publish messages to and the events for which to publish messages.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-queueconfiguration.html}
 */
export type QueueConfiguration = {
  /**
   * The Amazon S3 bucket event about which you want to publish messages to Amazon SQS.
   */
  Event: string;
  /**
   * The filtering rules that determine which objects trigger notifications.
   */
  Filter?: NotificationFilter;
  /**
   * The Amazon Resource Name (ARN) of the Amazon SQS queue to which Amazon S3 publishes a message when it detects events of the specified type.
   */
  Queue: string;
};
/**
 * Type definition for `AWS::S3::Bucket.RedirectAllRequestsTo`.
 * Specifies the redirect behavior of all requests to a website endpoint of an Amazon S3 bucket.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-redirectallrequeststo.html}
 */
export type RedirectAllRequestsTo = {
  /**
   * Name of the host where requests are redirected.
   */
  HostName: string;
  /**
   * Protocol to use when redirecting requests. The default is the protocol that is used in the original request.
   */
  Protocol?: "http" | "https";
};
/**
 * Type definition for `AWS::S3::Bucket.RedirectRule`.
 * Specifies how requests are redirected. In the event of an error, you can specify a different error code to return.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-redirectrule.html}
 */
export type RedirectRule = {
  /**
   * The host name to use in the redirect request.
   */
  HostName?: string;
  /**
   * The HTTP redirect code to use on the response. Not required if one of the siblings is present.
   */
  HttpRedirectCode?: string;
  /**
   * Protocol to use when redirecting requests. The default is the protocol that is used in the original request.
   */
  Protocol?: "http" | "https";
  /**
   * The object key prefix to use in the redirect request.
   */
  ReplaceKeyPrefixWith?: string;
  /**
   * The specific object key to use in the redirect request.d
   */
  ReplaceKeyWith?: string;
};
/**
 * Type definition for `AWS::S3::Bucket.ReplicaModifications`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicamodifications.html}
 */
export type ReplicaModifications = {
  /**
   * Specifies whether Amazon S3 replicates modifications on replicas.
   */
  Status: "Enabled" | "Disabled";
};
/**
 * Type definition for `AWS::S3::Bucket.ReplicationConfiguration`.
 * A container for replication rules. You can add up to 1,000 rules. The maximum size of a replication configuration is 2 MB.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicationconfiguration.html}
 */
export type ReplicationConfiguration = {
  /**
   * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that Amazon S3 assumes when replicating objects.
   */
  Role: string;
  /**
   * A container for one or more replication rules.
   */
  Rules: ReplicationRule[];
};
/**
 * Type definition for `AWS::S3::Bucket.ReplicationDestination`.
 * Specifies which Amazon S3 bucket to store replicated objects in and their storage class.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicationdestination.html}
 */
export type ReplicationDestination = {
  /**
   * Specify this only in a cross-account scenario (where source and destination bucket owners are not the same), and you want to change replica ownership to the AWS account that owns the destination bucket. If this is not specified in the replication configuration, the replicas are owned by same AWS account that owns the source object.
   */
  AccessControlTranslation?: AccessControlTranslation;
  Account?: string;
  Bucket: string;
  /**
   * Specifies encryption-related information for an Amazon S3 bucket that is a destination for replicated objects.
   */
  EncryptionConfiguration?: EncryptionConfiguration;
  Metrics?: Metrics;
  ReplicationTime?: ReplicationTime;
  /**
   * The storage class to use when replicating objects, such as S3 Standard or reduced redundancy.
   */
  StorageClass?:
    | "DEEP_ARCHIVE"
    | "GLACIER"
    | "GLACIER_IR"
    | "INTELLIGENT_TIERING"
    | "ONEZONE_IA"
    | "REDUCED_REDUNDANCY"
    | "STANDARD"
    | "STANDARD_IA";
};
/**
 * Type definition for `AWS::S3::Bucket.ReplicationRule`.
 * Specifies which Amazon S3 objects to replicate and where to store the replicas.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicationrule.html}
 */
export type ReplicationRule = {
  DeleteMarkerReplication?: DeleteMarkerReplication;
  /**
   * Specifies which Amazon S3 bucket to store replicated objects in and their storage class.
   */
  Destination: ReplicationDestination;
  Filter?: ReplicationRuleFilter;
  /**
   * A unique identifier for the rule.
   * @maxLength `255`
   */
  Id?: string;
  /**
   * An object key name prefix that identifies the object or objects to which the rule applies.
   * @maxLength `1024`
   */
  Prefix?: string;
  Priority?: number;
  /**
   * A container that describes additional filters for identifying the source objects that you want to replicate.
   */
  SourceSelectionCriteria?: SourceSelectionCriteria;
  /**
   * Specifies whether the rule is enabled.
   */
  Status: "Disabled" | "Enabled";
};
/**
 * Type definition for `AWS::S3::Bucket.ReplicationRuleAndOperator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicationruleandoperator.html}
 */
export type ReplicationRuleAndOperator = {
  Prefix?: string;
  TagFilters?: TagFilter[];
};
/**
 * Type definition for `AWS::S3::Bucket.ReplicationRuleFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicationrulefilter.html}
 */
export type ReplicationRuleFilter = {
  And?: ReplicationRuleAndOperator;
  Prefix?: string;
  /**
   * Tags to use to identify a subset of objects for an Amazon S3 bucket.
   */
  TagFilter?: TagFilter;
};
/**
 * Type definition for `AWS::S3::Bucket.ReplicationTime`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicationtime.html}
 */
export type ReplicationTime = {
  Status: "Disabled" | "Enabled";
  Time: ReplicationTimeValue;
};
/**
 * Type definition for `AWS::S3::Bucket.ReplicationTimeValue`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicationtimevalue.html}
 */
export type ReplicationTimeValue = {
  Minutes: number;
};
/**
 * Type definition for `AWS::S3::Bucket.RoutingRule`.
 * Specifies the redirect behavior and when a redirect is applied.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-routingrule.html}
 */
export type RoutingRule = {
  /**
   * Container for redirect information. You can redirect requests to another host, to another page, or with another protocol. In the event of an error, you can specify a different error code to return.
   */
  RedirectRule: RedirectRule;
  /**
   * A container for describing a condition that must be met for the specified redirect to apply.You must specify at least one of HttpErrorCodeReturnedEquals and KeyPrefixEquals
   */
  RoutingRuleCondition?: RoutingRuleCondition;
};
/**
 * Type definition for `AWS::S3::Bucket.RoutingRuleCondition`.
 * A container for describing a condition that must be met for the specified redirect to apply.You must specify at least one of HttpErrorCodeReturnedEquals and KeyPrefixEquals
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-routingrulecondition.html}
 */
export type RoutingRuleCondition = {
  /**
   * The HTTP error code when the redirect is applied.
   */
  HttpErrorCodeReturnedEquals?: string;
  /**
   * The object key name prefix when the redirect is applied.
   */
  KeyPrefixEquals?: string;
};
/**
 * Type definition for `AWS::S3::Bucket.Rule`.
 * You must specify at least one of the following properties: AbortIncompleteMultipartUpload, ExpirationDate, ExpirationInDays, NoncurrentVersionExpirationInDays, NoncurrentVersionTransition, NoncurrentVersionTransitions, Transition, or Transitions.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-rule.html}
 */
export type Rule = {
  /**
   * Specifies the days since the initiation of an incomplete multipart upload that Amazon S3 will wait before permanently removing all parts of the upload.
   */
  AbortIncompleteMultipartUpload?: AbortIncompleteMultipartUpload;
  /**
   * The date value in ISO 8601 format. The timezone is always UTC. (YYYY-MM-DDThh:mm:ssZ)
   * @pattern `^([0-2]\d{3})-(0[0-9]|1[0-2])-([0-2]\d|3[01])T([01]\d|2[0-4]):([0-5]\d):([0-6]\d)((\.\d{3})?)Z$`
   */
  ExpirationDate?: string;
  ExpirationInDays?: number;
  ExpiredObjectDeleteMarker?: boolean;
  /**
   * @maxLength `255`
   */
  Id?: string;
  /**
   * Container for the expiration rule that describes when noncurrent objects are expired. If your bucket is versioning-enabled (or versioning is suspended), you can set this action to request that Amazon S3 expire noncurrent object versions at a specific period in the object's lifetime
   */
  NoncurrentVersionExpiration?: NoncurrentVersionExpiration;
  NoncurrentVersionExpirationInDays?: number;
  /**
   * Container for the transition rule that describes when noncurrent objects transition to the STANDARD_IA, ONEZONE_IA, INTELLIGENT_TIERING, GLACIER_IR, GLACIER, or DEEP_ARCHIVE storage class. If your bucket is versioning-enabled (or versioning is suspended), you can set this action to request that Amazon S3 transition noncurrent object versions to the STANDARD_IA, ONEZONE_IA, INTELLIGENT_TIERING, GLACIER_IR, GLACIER, or DEEP_ARCHIVE storage class at a specific period in the object's lifetime.
   */
  NoncurrentVersionTransition?: NoncurrentVersionTransition;
  NoncurrentVersionTransitions?: NoncurrentVersionTransition[];
  /**
   * @maxLength `20`
   * @pattern `[0-9]+`
   */
  ObjectSizeGreaterThan?: string;
  /**
   * @maxLength `20`
   * @pattern `[0-9]+`
   */
  ObjectSizeLessThan?: string;
  Prefix?: string;
  Status: "Enabled" | "Disabled";
  TagFilters?: TagFilter[];
  /**
   * You must specify at least one of "TransitionDate" and "TransitionInDays"
   */
  Transition?: Transition;
  Transitions?: Transition[];
};
/**
 * Type definition for `AWS::S3::Bucket.S3KeyFilter`.
 * A container for object key name prefix and suffix filtering rules.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-s3keyfilter.html}
 */
export type S3KeyFilter = {
  Rules: FilterRule[];
};
/**
 * Type definition for `AWS::S3::Bucket.ServerSideEncryptionByDefault`.
 * Specifies the default server-side encryption to apply to new objects in the bucket. If a PUT Object request doesn't specify any server-side encryption, this default encryption will be applied.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-serversideencryptionbydefault.html}
 */
export type ServerSideEncryptionByDefault = {
  /**
   * "KMSMasterKeyID" can only be used when you set the value of SSEAlgorithm as aws:kms or aws:kms:dsse.
   */
  KMSMasterKeyID?: string;
  SSEAlgorithm: "aws:kms" | "AES256" | "aws:kms:dsse";
};
/**
 * Type definition for `AWS::S3::Bucket.ServerSideEncryptionRule`.
 * Specifies the default server-side encryption configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-serversideencryptionrule.html}
 */
export type ServerSideEncryptionRule = {
  /**
   * Specifies whether Amazon S3 should use an S3 Bucket Key with server-side encryption using KMS (SSE-KMS) for new objects in the bucket. Existing objects are not affected. Setting the BucketKeyEnabled element to true causes Amazon S3 to use an S3 Bucket Key. By default, S3 Bucket Key is not enabled.
   */
  BucketKeyEnabled?: boolean;
  /**
   * Specifies the default server-side encryption to apply to new objects in the bucket. If a PUT Object request doesn't specify any server-side encryption, this default encryption will be applied.
   */
  ServerSideEncryptionByDefault?: ServerSideEncryptionByDefault;
};
/**
 * Type definition for `AWS::S3::Bucket.SourceSelectionCriteria`.
 * A container that describes additional filters for identifying the source objects that you want to replicate.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-sourceselectioncriteria.html}
 */
export type SourceSelectionCriteria = {
  /**
   * A filter that you can specify for selection for modifications on replicas.
   */
  ReplicaModifications?: ReplicaModifications;
  /**
   * A container for filter information for the selection of Amazon S3 objects encrypted with AWS KMS.
   */
  SseKmsEncryptedObjects?: SseKmsEncryptedObjects;
};
/**
 * Type definition for `AWS::S3::Bucket.SseKmsEncryptedObjects`.
 * A container for filter information for the selection of S3 objects encrypted with AWS KMS.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-ssekmsencryptedobjects.html}
 */
export type SseKmsEncryptedObjects = {
  /**
   * Specifies whether Amazon S3 replicates objects created with server-side encryption using a customer master key (CMK) stored in AWS Key Management Service.
   */
  Status: "Disabled" | "Enabled";
};
/**
 * Type definition for `AWS::S3::Bucket.StorageClassAnalysis`.
 * Specifies data related to access patterns to be collected and made available to analyze the tradeoffs between different storage classes for an Amazon S3 bucket.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-storageclassanalysis.html}
 */
export type StorageClassAnalysis = {
  /**
   * Specifies how data related to the storage class analysis for an Amazon S3 bucket should be exported.
   */
  DataExport?: DataExport;
};
/**
 * Type definition for `AWS::S3::Bucket.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::S3::Bucket.TagFilter`.
 * Tags to use to identify a subset of objects for an Amazon S3 bucket.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-tagfilter.html}
 */
export type TagFilter = {
  Key: string;
  Value: string;
};
/**
 * Type definition for `AWS::S3::Bucket.Tiering`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-tiering.html}
 */
export type Tiering = {
  /**
   * S3 Intelligent-Tiering access tier. See Storage class for automatically optimizing frequently and infrequently accessed objects for a list of access tiers in the S3 Intelligent-Tiering storage class.
   */
  AccessTier: "ARCHIVE_ACCESS" | "DEEP_ARCHIVE_ACCESS";
  /**
   * The number of consecutive days of no access after which an object will be eligible to be transitioned to the corresponding tier. The minimum number of days specified for Archive Access tier must be at least 90 days and Deep Archive Access tier must be at least 180 days. The maximum can be up to 2 years (730 days).
   */
  Days: number;
};
/**
 * Type definition for `AWS::S3::Bucket.TopicConfiguration`.
 * The topic to which notifications are sent and the events for which notifications are generated.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-topicconfiguration.html}
 */
export type TopicConfiguration = {
  /**
   * The Amazon S3 bucket event about which to send notifications.
   */
  Event: string;
  /**
   * The filtering rules that determine for which objects to send notifications.
   */
  Filter?: NotificationFilter;
  /**
   * The Amazon Resource Name (ARN) of the Amazon SNS topic to which Amazon S3 publishes a message when it detects events of the specified type.
   */
  Topic: string;
};
/**
 * Type definition for `AWS::S3::Bucket.Transition`.
 * You must specify at least one of "TransitionDate" and "TransitionInDays"
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-transition.html}
 */
export type Transition = {
  StorageClass:
    | "DEEP_ARCHIVE"
    | "GLACIER"
    | "Glacier"
    | "GLACIER_IR"
    | "INTELLIGENT_TIERING"
    | "ONEZONE_IA"
    | "STANDARD_IA";
  /**
   * The date value in ISO 8601 format. The timezone is always UTC. (YYYY-MM-DDThh:mm:ssZ)
   * @pattern `^([0-2]\d{3})-(0[0-9]|1[0-2])-([0-2]\d|3[01])T([01]\d|2[0-4]):([0-5]\d):([0-6]\d)((\.\d{3})?)Z$`
   */
  TransitionDate?: string;
  TransitionInDays?: number;
};
/**
 * Type definition for `AWS::S3::Bucket.VersioningConfiguration`.
 * Describes the versioning state of an Amazon S3 bucket.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-versioningconfiguration.html}
 */
export type VersioningConfiguration = {
  /**
   * The versioning state of the bucket.
   */
  Status: "Enabled" | "Suspended";
};
/**
 * Type definition for `AWS::S3::Bucket.WebsiteConfiguration`.
 * Specifies website configuration parameters for an Amazon S3 bucket.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-websiteconfiguration.html}
 */
export type WebsiteConfiguration = {
  /**
   * The name of the error document for the website.
   */
  ErrorDocument?: string;
  /**
   * The name of the index document for the website.
   */
  IndexDocument?: string;
  /**
   * Specifies the redirect behavior of all requests to a website endpoint of an Amazon S3 bucket.
   */
  RedirectAllRequestsTo?: RedirectAllRequestsTo;
  RoutingRules?: RoutingRule[];
};
/**
 * Resource Type definition for AWS::S3::Bucket
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-bucket.html}
 */
export class S3Bucket extends $Resource<
  "AWS::S3::Bucket",
  S3BucketProperties,
  S3BucketAttributes
> {
  public static readonly Type = "AWS::S3::Bucket";
  public static readonly AttributeNames = [
    "Arn" as const,
    "DomainName" as const,
    "DualStackDomainName" as const,
    "RegionalDomainName" as const,
    "WebsiteURL" as const,
  ];
  constructor(
    logicalId: string,
    properties: S3BucketProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      S3Bucket.Type,
      properties,
      S3Bucket.AttributeNames,
      options,
    );
  }
}
