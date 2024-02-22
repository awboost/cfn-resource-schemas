import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::SageMaker::FeatureGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html}
 */
export type SageMakerFeatureGroupProperties = {
  /**
   * Description about the FeatureGroup.
   * @maxLength `128`
   */
  Description?: string;
  /**
   * The Event Time Feature Name.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,63}`
   */
  EventTimeFeatureName: string;
  /**
   * An Array of Feature Definition
   * @minLength `1`
   * @maxLength `2500`
   */
  FeatureDefinitions: FeatureDefinition[];
  /**
   * The Name of the FeatureGroup.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,63}`
   */
  FeatureGroupName: string;
  OfflineStoreConfig?: {
    DataCatalogConfig?: DataCatalogConfig;
    DisableGlueTableCreation?: boolean;
    S3StorageConfig: S3StorageConfig;
    /**
     * Format for the offline store feature group. Iceberg is the optimal format for feature groups shared between offline and online stores.
     */
    TableFormat?: TableFormat;
  };
  OnlineStoreConfig?: {
    EnableOnlineStore?: boolean;
    SecurityConfig?: OnlineStoreSecurityConfig;
    StorageType?: StorageType;
    /**
     * TTL configuration of the feature group
     */
    TtlDuration?: TtlDuration;
  };
  /**
   * The Record Identifier Feature Name.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,63}`
   */
  RecordIdentifierFeatureName: string;
  /**
   * Role Arn
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$`
   */
  RoleArn?: string;
  /**
   * An array of key-value pair to apply to this resource.
   * @maxLength `50`
   */
  Tags?: Tag[];
  ThroughputConfig?: ThroughputConfig;
};
/**
 * Attribute type definition for `AWS::SageMaker::FeatureGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#aws-resource-sagemaker-featuregroup-return-values}
 */
export type SageMakerFeatureGroupAttributes = {
  /**
   * A timestamp of FeatureGroup creation time.
   */
  CreationTime: string;
  /**
   * The status of the feature group.
   */
  FeatureGroupStatus: string;
};
/**
 * Type definition for `AWS::SageMaker::FeatureGroup.DataCatalogConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-featuregroup-datacatalogconfig.html}
 */
export type DataCatalogConfig = {
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF	]*`
   */
  Catalog: string;
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF	]*`
   */
  Database: string;
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF	]*`
   */
  TableName: string;
};
/**
 * Type definition for `AWS::SageMaker::FeatureGroup.FeatureDefinition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-featuregroup-featuredefinition.html}
 */
export type FeatureDefinition = {
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,63}`
   */
  FeatureName: string;
  FeatureType: "Integral" | "Fractional" | "String";
};
/**
 * Type definition for `AWS::SageMaker::FeatureGroup.OnlineStoreSecurityConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-featuregroup-onlinestoresecurityconfig.html}
 */
export type OnlineStoreSecurityConfig = {
  /**
   * @maxLength `2048`
   */
  KmsKeyId?: string;
};
/**
 * Type definition for `AWS::SageMaker::FeatureGroup.S3StorageConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-featuregroup-s3storageconfig.html}
 */
export type S3StorageConfig = {
  /**
   * @maxLength `2048`
   */
  KmsKeyId?: string;
  /**
   * @maxLength `1024`
   * @pattern `^(https|s3)://([^/]+)/?(.*)$`
   */
  S3Uri: string;
};
/**
 * Type definition for `AWS::SageMaker::FeatureGroup.StorageType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-featuregroup-storagetype.html}
 */
export type StorageType = "Standard" | "InMemory";
/**
 * Type definition for `AWS::SageMaker::FeatureGroup.TableFormat`.
 * Format for the offline store feature group. Iceberg is the optimal format for feature groups shared between offline and online stores.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-featuregroup-tableformat.html}
 */
export type TableFormat = "Iceberg" | "Glue";
/**
 * Type definition for `AWS::SageMaker::FeatureGroup.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-featuregroup-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Type definition for `AWS::SageMaker::FeatureGroup.ThroughputConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-featuregroup-throughputconfig.html}
 */
export type ThroughputConfig = {
  /**
   * For provisioned feature groups with online store enabled, this indicates the read throughput you are billed for and can consume without throttling.
   */
  ProvisionedReadCapacityUnits?: number;
  /**
   * For provisioned feature groups, this indicates the write throughput you are billed for and can consume without throttling.
   */
  ProvisionedWriteCapacityUnits?: number;
  /**
   * Throughput mode configuration of the feature group
   */
  ThroughputMode: ThroughputMode;
};
/**
 * Type definition for `AWS::SageMaker::FeatureGroup.ThroughputMode`.
 * Throughput mode configuration of the feature group
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-featuregroup-throughputmode.html}
 */
export type ThroughputMode = "OnDemand" | "Provisioned";
/**
 * Type definition for `AWS::SageMaker::FeatureGroup.TtlDuration`.
 * TTL configuration of the feature group
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-featuregroup-ttlduration.html}
 */
export type TtlDuration = {
  /**
   * Unit of ttl configuration
   */
  Unit?: Unit;
  /**
   * Value of ttl configuration
   */
  Value?: number;
};
/**
 * Type definition for `AWS::SageMaker::FeatureGroup.Unit`.
 * Unit of ttl configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-featuregroup-unit.html}
 */
export type Unit = "Seconds" | "Minutes" | "Hours" | "Days" | "Weeks";
/**
 * Resource Type definition for AWS::SageMaker::FeatureGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html}
 */
export class SageMakerFeatureGroup extends $Resource<
  "AWS::SageMaker::FeatureGroup",
  SageMakerFeatureGroupProperties,
  SageMakerFeatureGroupAttributes
> {
  public static readonly Type = "AWS::SageMaker::FeatureGroup";
  constructor(
    logicalId: string,
    properties: SageMakerFeatureGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SageMakerFeatureGroup.Type, properties, options);
  }
}
