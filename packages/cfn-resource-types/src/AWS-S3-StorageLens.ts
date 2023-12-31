import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * The AWS::S3::StorageLens resource is an Amazon S3 resource type that you can use to create Storage Lens configurations.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html}
 */
export type S3StorageLensProperties = {
  /**
   * Specifies the details of Amazon S3 Storage Lens configuration.
   */
  StorageLensConfiguration: StorageLensConfiguration;
  /**
   * A set of tags (key-value pairs) for this Amazon S3 Storage Lens configuration.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Type definition for `AWS::S3::StorageLens.AccountLevel`.
 * Account-level metrics configurations.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-accountlevel.html}
 */
export type AccountLevel = {
  /**
   * Enables activity metrics.
   */
  ActivityMetrics?: ActivityMetrics;
  /**
   * Enables advanced cost optimization metrics.
   */
  AdvancedCostOptimizationMetrics?: AdvancedCostOptimizationMetrics;
  /**
   * Enables advanced data protection metrics.
   */
  AdvancedDataProtectionMetrics?: AdvancedDataProtectionMetrics;
  /**
   * Bucket-level metrics configurations.
   */
  BucketLevel: BucketLevel;
  /**
   * Enables detailed status codes metrics.
   */
  DetailedStatusCodesMetrics?: DetailedStatusCodesMetrics;
  /**
   * Specifies the details of Amazon S3 Storage Lens Group configuration.
   */
  StorageLensGroupLevel?: StorageLensGroupLevel;
};
/**
 * Type definition for `AWS::S3::StorageLens.ActivityMetrics`.
 * Enables activity metrics.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-activitymetrics.html}
 */
export type ActivityMetrics = {
  /**
   * Specifies whether activity metrics are enabled or disabled.
   */
  IsEnabled?: boolean;
};
/**
 * Type definition for `AWS::S3::StorageLens.AdvancedCostOptimizationMetrics`.
 * Enables advanced cost optimization metrics.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-advancedcostoptimizationmetrics.html}
 */
export type AdvancedCostOptimizationMetrics = {
  /**
   * Specifies whether advanced cost optimization metrics are enabled or disabled.
   */
  IsEnabled?: boolean;
};
/**
 * Type definition for `AWS::S3::StorageLens.AdvancedDataProtectionMetrics`.
 * Enables advanced data protection metrics.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-advanceddataprotectionmetrics.html}
 */
export type AdvancedDataProtectionMetrics = {
  /**
   * Specifies whether advanced data protection metrics are enabled or disabled.
   */
  IsEnabled?: boolean;
};
/**
 * Type definition for `AWS::S3::StorageLens.AwsOrg`.
 * The AWS Organizations ARN to use in the Amazon S3 Storage Lens configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-awsorg.html}
 */
export type AwsOrg = {
  /**
   * The Amazon Resource Name (ARN) of the specified resource.
   */
  Arn: string;
};
/**
 * Type definition for `AWS::S3::StorageLens.BucketLevel`.
 * Bucket-level metrics configurations.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-bucketlevel.html}
 */
export type BucketLevel = {
  /**
   * Enables activity metrics.
   */
  ActivityMetrics?: ActivityMetrics;
  /**
   * Enables advanced cost optimization metrics.
   */
  AdvancedCostOptimizationMetrics?: AdvancedCostOptimizationMetrics;
  /**
   * Enables advanced data protection metrics.
   */
  AdvancedDataProtectionMetrics?: AdvancedDataProtectionMetrics;
  /**
   * Enables detailed status codes metrics.
   */
  DetailedStatusCodesMetrics?: DetailedStatusCodesMetrics;
  /**
   * Prefix-level metrics configurations.
   */
  PrefixLevel?: PrefixLevel;
};
/**
 * Type definition for `AWS::S3::StorageLens.BucketsAndRegions`.
 * S3 buckets and Regions to include/exclude in the Amazon S3 Storage Lens configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-bucketsandregions.html}
 */
export type BucketsAndRegions = {
  Buckets?: string[];
  Regions?: string[];
};
/**
 * Type definition for `AWS::S3::StorageLens.CloudWatchMetrics`.
 * CloudWatch metrics settings for the Amazon S3 Storage Lens metrics export.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-cloudwatchmetrics.html}
 */
export type CloudWatchMetrics = {
  /**
   * Specifies whether CloudWatch metrics are enabled or disabled.
   */
  IsEnabled: boolean;
};
/**
 * Type definition for `AWS::S3::StorageLens.DataExport`.
 * Specifies how Amazon S3 Storage Lens metrics should be exported.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-dataexport.html}
 */
export type DataExport = {
  /**
   * CloudWatch metrics settings for the Amazon S3 Storage Lens metrics export.
   */
  CloudWatchMetrics?: CloudWatchMetrics;
  /**
   * S3 bucket destination settings for the Amazon S3 Storage Lens metrics export.
   */
  S3BucketDestination?: S3BucketDestination;
};
/**
 * Type definition for `AWS::S3::StorageLens.DetailedStatusCodesMetrics`.
 * Enables detailed status codes metrics.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-detailedstatuscodesmetrics.html}
 */
export type DetailedStatusCodesMetrics = {
  /**
   * Specifies whether detailed status codes metrics are enabled or disabled.
   */
  IsEnabled?: boolean;
};
/**
 * Type definition for `AWS::S3::StorageLens.PrefixLevel`.
 * Prefix-level metrics configurations.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-prefixlevel.html}
 */
export type PrefixLevel = {
  StorageMetrics: PrefixLevelStorageMetrics;
};
/**
 * Type definition for `AWS::S3::StorageLens.PrefixLevelStorageMetrics`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-prefixlevelstoragemetrics.html}
 */
export type PrefixLevelStorageMetrics = {
  /**
   * Specifies whether prefix-level storage metrics are enabled or disabled.
   */
  IsEnabled?: boolean;
  /**
   * Selection criteria for prefix-level metrics.
   */
  SelectionCriteria?: SelectionCriteria;
};
/**
 * Type definition for `AWS::S3::StorageLens.S3BucketDestination`.
 * S3 bucket destination settings for the Amazon S3 Storage Lens metrics export.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-s3bucketdestination.html}
 */
export type S3BucketDestination = {
  /**
   * The AWS account ID that owns the destination S3 bucket.
   */
  AccountId: string;
  /**
   * The ARN of the bucket to which Amazon S3 Storage Lens exports will be placed.
   */
  Arn: string;
  /**
   * Configures the server-side encryption for Amazon S3 Storage Lens report files with either S3-managed keys (SSE-S3) or KMS-managed keys (SSE-KMS).
   */
  Encryption?:
    | {
        /**
         * S3 default server-side encryption.
         */
        SSES3: Record<string, any>;
      }
    | {
        /**
         * AWS KMS server-side encryption.
         */
        SSEKMS: SSEKMS;
      };
  /**
   * Specifies the file format to use when exporting Amazon S3 Storage Lens metrics export.
   */
  Format: "CSV" | "Parquet";
  /**
   * The version of the output schema to use when exporting Amazon S3 Storage Lens metrics.
   */
  OutputSchemaVersion: "V_1";
  /**
   * The prefix to use for Amazon S3 Storage Lens export.
   */
  Prefix?: string;
};
/**
 * Type definition for `AWS::S3::StorageLens.SSEKMS`.
 * AWS KMS server-side encryption.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-ssekms.html}
 */
export type SSEKMS = {
  /**
   * The ARN of the KMS key to use for encryption.
   */
  KeyId: string;
};
/**
 * Type definition for `AWS::S3::StorageLens.SelectionCriteria`.
 * Selection criteria for prefix-level metrics.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-selectioncriteria.html}
 */
export type SelectionCriteria = {
  /**
   * Delimiter to divide S3 key into hierarchy of prefixes.
   */
  Delimiter?: string;
  /**
   * Max depth of prefixes of S3 key that Amazon S3 Storage Lens will analyze.
   */
  MaxDepth?: number;
  /**
   * The minimum storage bytes threshold for the prefixes to be included in the analysis.
   */
  MinStorageBytesPercentage?: number;
};
/**
 * Type definition for `AWS::S3::StorageLens.StorageLensConfiguration`.
 * Specifies the details of Amazon S3 Storage Lens configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-storagelensconfiguration.html}
 */
export type StorageLensConfiguration = {
  /**
   * Account-level metrics configurations.
   */
  AccountLevel: AccountLevel;
  /**
   * The AWS Organizations ARN to use in the Amazon S3 Storage Lens configuration.
   */
  AwsOrg?: AwsOrg;
  /**
   * Specifies how Amazon S3 Storage Lens metrics should be exported.
   */
  DataExport?: DataExport;
  /**
   * S3 buckets and Regions to include/exclude in the Amazon S3 Storage Lens configuration.
   */
  Exclude?: BucketsAndRegions;
  /**
   * The ID that identifies the Amazon S3 Storage Lens configuration.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[a-zA-Z0-9\-_.]+$`
   */
  Id: string;
  /**
   * S3 buckets and Regions to include/exclude in the Amazon S3 Storage Lens configuration.
   */
  Include?: BucketsAndRegions;
  /**
   * Specifies whether the Amazon S3 Storage Lens configuration is enabled or disabled.
   */
  IsEnabled: boolean;
  /**
   * The ARN for the Amazon S3 Storage Lens configuration.
   */
  StorageLensArn?: string;
};
/**
 * Type definition for `AWS::S3::StorageLens.StorageLensGroupLevel`.
 * Specifies the details of Amazon S3 Storage Lens Group configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-storagelensgrouplevel.html}
 */
export type StorageLensGroupLevel = {
  /**
   * Selection criteria for Storage Lens Group level metrics
   */
  StorageLensGroupSelectionCriteria?: StorageLensGroupSelectionCriteria;
};
/**
 * Type definition for `AWS::S3::StorageLens.StorageLensGroupSelectionCriteria`.
 * Selection criteria for Storage Lens Group level metrics
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-storagelensgroupselectioncriteria.html}
 */
export type StorageLensGroupSelectionCriteria = {
  Exclude?: string[];
  Include?: string[];
};
/**
 * Type definition for `AWS::S3::StorageLens.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `127`
   * @pattern `^(?!aws:.*)[a-zA-Z0-9\s\_\.\/\=\+\-]+$`
   */
  Key: string;
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^(?!aws:.*)[a-zA-Z0-9\s\_\.\/\=\+\-\@]+$`
   */
  Value: string;
};
/**
 * The AWS::S3::StorageLens resource is an Amazon S3 resource type that you can use to create Storage Lens configurations.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html}
 */
export class S3StorageLens extends $Resource<
  "AWS::S3::StorageLens",
  S3StorageLensProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::S3::StorageLens";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: S3StorageLensProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      S3StorageLens.Type,
      properties,
      S3StorageLens.AttributeNames,
      options,
    );
  }
}
