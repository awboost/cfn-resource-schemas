import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::IoTAnalytics::Datastore
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-datastore.html}
 */
export type IoTAnalyticsDatastoreProperties = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `[a-zA-Z0-9_]+`
   */
  DatastoreName?: string;
  DatastorePartitions?: DatastorePartitions;
  DatastoreStorage?: DatastoreStorage;
  FileFormatConfiguration?: FileFormatConfiguration;
  RetentionPeriod?: RetentionPeriod;
  /**
   * @minLength `1`
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::IoTAnalytics::Datastore`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-datastore.html#aws-resource-iotanalytics-datastore-return-values}
 */
export type IoTAnalyticsDatastoreAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::IoTAnalytics::Datastore.Column`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-datastore-column.html}
 */
export type Column = {
  Name: string;
  Type: string;
};
/**
 * Type definition for `AWS::IoTAnalytics::Datastore.CustomerManagedS3`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-datastore-customermanageds3.html}
 */
export type CustomerManagedS3 = {
  /**
   * @minLength `3`
   * @maxLength `255`
   * @pattern `[a-zA-Z0-9.\-_]*`
   */
  Bucket: string;
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `[a-zA-Z0-9!_.*'()/{}:-]/‍*`
   */
  KeyPrefix?: string;
  /**
   * @minLength `20`
   * @maxLength `2048`
   */
  RoleArn: string;
};
/**
 * Type definition for `AWS::IoTAnalytics::Datastore.CustomerManagedS3Storage`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-datastore-customermanageds3storage.html}
 */
export type CustomerManagedS3Storage = {
  /**
   * @minLength `3`
   * @maxLength `255`
   * @pattern `[a-zA-Z0-9.\-_]*`
   */
  Bucket: string;
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `[a-zA-Z0-9!_.*'()/{}:-]/‍*`
   */
  KeyPrefix?: string;
};
/**
 * Type definition for `AWS::IoTAnalytics::Datastore.DatastorePartition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-datastore-datastorepartition.html}
 */
export type DatastorePartition = {
  Partition?: Partition;
  TimestampPartition?: TimestampPartition;
};
/**
 * Type definition for `AWS::IoTAnalytics::Datastore.DatastorePartitions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-datastore-datastorepartitions.html}
 */
export type DatastorePartitions = {
  /**
   * @maxLength `25`
   */
  Partitions?: DatastorePartition[];
};
/**
 * Type definition for `AWS::IoTAnalytics::Datastore.DatastoreStorage`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-datastore-datastorestorage.html}
 */
export type DatastoreStorage = {
  CustomerManagedS3?: CustomerManagedS3;
  IotSiteWiseMultiLayerStorage?: IotSiteWiseMultiLayerStorage;
  ServiceManagedS3?: ServiceManagedS3;
};
/**
 * Type definition for `AWS::IoTAnalytics::Datastore.FileFormatConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-datastore-fileformatconfiguration.html}
 */
export type FileFormatConfiguration = {
  JsonConfiguration?: JsonConfiguration;
  ParquetConfiguration?: ParquetConfiguration;
};
/**
 * Type definition for `AWS::IoTAnalytics::Datastore.IotSiteWiseMultiLayerStorage`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-datastore-iotsitewisemultilayerstorage.html}
 */
export type IotSiteWiseMultiLayerStorage = {
  CustomerManagedS3Storage?: CustomerManagedS3Storage;
};
/**
 * Type definition for `AWS::IoTAnalytics::Datastore.JsonConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-datastore-jsonconfiguration.html}
 */
export type JsonConfiguration = Record<string, any>;
/**
 * Type definition for `AWS::IoTAnalytics::Datastore.ParquetConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-datastore-parquetconfiguration.html}
 */
export type ParquetConfiguration = {
  SchemaDefinition?: SchemaDefinition;
};
/**
 * Type definition for `AWS::IoTAnalytics::Datastore.Partition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-datastore-partition.html}
 */
export type Partition = {
  /**
   * @pattern `[a-zA-Z0-9_]+`
   */
  AttributeName: string;
};
/**
 * Type definition for `AWS::IoTAnalytics::Datastore.RetentionPeriod`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-datastore-retentionperiod.html}
 */
export type RetentionPeriod = {
  /**
   * @min `1`
   * @max `2147483647`
   */
  NumberOfDays?: number;
  Unlimited?: boolean;
};
/**
 * Type definition for `AWS::IoTAnalytics::Datastore.SchemaDefinition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-datastore-schemadefinition.html}
 */
export type SchemaDefinition = {
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  Columns?: Column[];
};
/**
 * Type definition for `AWS::IoTAnalytics::Datastore.ServiceManagedS3`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-datastore-servicemanageds3.html}
 */
export type ServiceManagedS3 = Record<string, any>;
/**
 * Type definition for `AWS::IoTAnalytics::Datastore.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-datastore-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::IoTAnalytics::Datastore.TimestampPartition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-datastore-timestamppartition.html}
 */
export type TimestampPartition = {
  /**
   * @pattern `[a-zA-Z0-9_]+`
   */
  AttributeName: string;
  /**
   * @pattern `[a-zA-Z0-9\s\[\]_,.'/:-]*`
   */
  TimestampFormat?: string;
};
/**
 * Resource Type definition for AWS::IoTAnalytics::Datastore
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-datastore.html}
 */
export class IoTAnalyticsDatastore extends $Resource<
  "AWS::IoTAnalytics::Datastore",
  IoTAnalyticsDatastoreProperties,
  IoTAnalyticsDatastoreAttributes
> {
  public static readonly Type = "AWS::IoTAnalytics::Datastore";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: IoTAnalyticsDatastoreProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      IoTAnalyticsDatastore.Type,
      properties,
      IoTAnalyticsDatastore.AttributeNames,
      options,
    );
  }
}
