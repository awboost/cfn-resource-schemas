import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::IoTFleetWise::Campaign Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html}
 */
export type IoTFleetWiseCampaignProperties = {
  Action?: UpdateCampaignAction;
  CollectionScheme: CollectionScheme;
  Compression?: Compression;
  /**
   * @minLength `1`
   * @maxLength `1`
   */
  DataDestinationConfigs?: DataDestinationConfig[];
  /**
   * @minLength `0`
   * @maxLength `5`
   */
  DataExtraDimensions?: string[];
  /**
   * @minLength `0`
   * @maxLength `20`
   */
  DataPartitions?: DataPartition[];
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^[^\u0000-\u001F\u007F]+$`
   */
  Description?: string;
  DiagnosticsMode?: DiagnosticsMode;
  ExpiryTime?: string;
  /**
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^[a-zA-Z\d\-_:]+$`
   */
  Name: string;
  /**
   * @min `0`
   * @max `4294967295`
   */
  PostTriggerCollectionDuration?: number;
  /**
   * @min `0`
   */
  Priority?: number;
  SignalCatalogArn: string;
  /**
   * @minLength `0`
   * @maxLength `1000`
   */
  SignalsToCollect?: SignalInformation[];
  /**
   * @minLength `0`
   * @maxLength `10`
   */
  SignalsToFetch?: SignalFetchInformation[];
  SpoolingMode?: SpoolingMode;
  StartTime?: string;
  /**
   * @minLength `0`
   * @maxLength `50`
   */
  Tags?: Tag[];
  TargetArn: string;
};
/**
 * Attribute type definition for `AWS::IoTFleetWise::Campaign`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#aws-resource-iotfleetwise-campaign-return-values}
 */
export type IoTFleetWiseCampaignAttributes = {
  Arn: string;
  CreationTime: string;
  LastModificationTime: string;
  Status: CampaignStatus;
};
/**
 * Type definition for `AWS::IoTFleetWise::Campaign.CampaignStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-campaignstatus.html}
 */
export type CampaignStatus =
  | "CREATING"
  | "WAITING_FOR_APPROVAL"
  | "RUNNING"
  | "SUSPENDED";
/**
 * Type definition for `AWS::IoTFleetWise::Campaign.CollectionScheme`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-collectionscheme.html}
 */
export type CollectionScheme =
  | {
      TimeBasedCollectionScheme: TimeBasedCollectionScheme;
    }
  | {
      ConditionBasedCollectionScheme: ConditionBasedCollectionScheme;
    };
/**
 * Type definition for `AWS::IoTFleetWise::Campaign.Compression`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-compression.html}
 */
export type Compression = "OFF" | "SNAPPY";
/**
 * Type definition for `AWS::IoTFleetWise::Campaign.ConditionBasedCollectionScheme`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-conditionbasedcollectionscheme.html}
 */
export type ConditionBasedCollectionScheme = {
  /**
   * @min `1`
   */
  ConditionLanguageVersion?: number;
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  Expression: string;
  /**
   * @min `0`
   * @max `4294967295`
   */
  MinimumTriggerIntervalMs?: number;
  TriggerMode?: TriggerMode;
};
/**
 * Type definition for `AWS::IoTFleetWise::Campaign.ConditionBasedSignalFetchConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-conditionbasedsignalfetchconfig.html}
 */
export type ConditionBasedSignalFetchConfig = {
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  ConditionExpression: string;
  TriggerMode: TriggerMode;
};
/**
 * Type definition for `AWS::IoTFleetWise::Campaign.DataDestinationConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-datadestinationconfig.html}
 */
export type DataDestinationConfig =
  | {
      S3Config: S3Config;
    }
  | {
      TimestreamConfig: TimestreamConfig;
    }
  | {
      MqttTopicConfig: MqttTopicConfig;
    };
/**
 * Type definition for `AWS::IoTFleetWise::Campaign.DataFormat`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-dataformat.html}
 */
export type DataFormat = "JSON" | "PARQUET";
/**
 * Type definition for `AWS::IoTFleetWise::Campaign.DataPartition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-datapartition.html}
 */
export type DataPartition = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9]+$`
   */
  Id: string;
  StorageOptions: DataPartitionStorageOptions;
  UploadOptions?: DataPartitionUploadOptions;
};
/**
 * Type definition for `AWS::IoTFleetWise::Campaign.DataPartitionStorageOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-datapartitionstorageoptions.html}
 */
export type DataPartitionStorageOptions = {
  MaximumSize: StorageMaximumSize;
  MinimumTimeToLive: StorageMinimumTimeToLive;
  /**
   * @minLength `1`
   * @maxLength `4096`
   */
  StorageLocation: string;
};
/**
 * Type definition for `AWS::IoTFleetWise::Campaign.DataPartitionUploadOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-datapartitionuploadoptions.html}
 */
export type DataPartitionUploadOptions = {
  /**
   * @min `1`
   */
  ConditionLanguageVersion?: number;
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  Expression: string;
};
/**
 * Type definition for `AWS::IoTFleetWise::Campaign.DiagnosticsMode`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-diagnosticsmode.html}
 */
export type DiagnosticsMode = "OFF" | "SEND_ACTIVE_DTCS";
/**
 * Type definition for `AWS::IoTFleetWise::Campaign.MqttTopicConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-mqtttopicconfig.html}
 */
export type MqttTopicConfig = {
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:(aws[a-zA-Z0-9-]*):iam::(\d{12})?:(role((\u002F)|(\u002F[\u0021-\u007F]+\u002F))[\w+=,.@-]+)$`
   */
  ExecutionRoleArn: string;
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:.*`
   */
  MqttTopicArn: string;
};
/**
 * Type definition for `AWS::IoTFleetWise::Campaign.S3Config`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-s3config.html}
 */
export type S3Config = {
  /**
   * @minLength `16`
   * @maxLength `100`
   * @pattern `^arn:(aws[a-zA-Z0-9-]*):s3:::.+$`
   */
  BucketArn: string;
  DataFormat?: DataFormat;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[a-zA-Z0-9-_:./!*'()]+$`
   */
  Prefix?: string;
  StorageCompressionFormat?: StorageCompressionFormat;
};
/**
 * Type definition for `AWS::IoTFleetWise::Campaign.SignalFetchConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-signalfetchconfig.html}
 */
export type SignalFetchConfig =
  | {
      TimeBased: TimeBasedSignalFetchConfig;
    }
  | {
      ConditionBased: ConditionBasedSignalFetchConfig;
    };
/**
 * Type definition for `AWS::IoTFleetWise::Campaign.SignalFetchInformation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-signalfetchinformation.html}
 */
export type SignalFetchInformation = {
  /**
   * @minLength `1`
   * @maxLength `5`
   */
  Actions: string[];
  /**
   * @min `1`
   * @max `1`
   */
  ConditionLanguageVersion?: number;
  /**
   * @minLength `1`
   * @maxLength `150`
   * @pattern `^[a-zA-Z0-9_.]+$`
   */
  FullyQualifiedName: string;
  SignalFetchConfig: SignalFetchConfig;
};
/**
 * Type definition for `AWS::IoTFleetWise::Campaign.SignalInformation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-signalinformation.html}
 */
export type SignalInformation = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9]+$`
   */
  DataPartitionId?: string;
  /**
   * @min `1`
   * @max `4294967295`
   */
  MaxSampleCount?: number;
  /**
   * @min `0`
   * @max `4294967295`
   */
  MinimumSamplingIntervalMs?: number;
  /**
   * @minLength `1`
   * @maxLength `150`
   * @pattern `^[\w|*|-]+(\.[\w|*|-]+)*$`
   */
  Name: string;
};
/**
 * Type definition for `AWS::IoTFleetWise::Campaign.SpoolingMode`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-spoolingmode.html}
 */
export type SpoolingMode = "OFF" | "TO_DISK";
/**
 * Type definition for `AWS::IoTFleetWise::Campaign.StorageCompressionFormat`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-storagecompressionformat.html}
 */
export type StorageCompressionFormat = "NONE" | "GZIP";
/**
 * Type definition for `AWS::IoTFleetWise::Campaign.StorageMaximumSize`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-storagemaximumsize.html}
 */
export type StorageMaximumSize = {
  Unit: StorageMaximumSizeUnit;
  /**
   * @min `1`
   * @max `1073741824`
   */
  Value: number;
};
/**
 * Type definition for `AWS::IoTFleetWise::Campaign.StorageMaximumSizeUnit`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-storagemaximumsizeunit.html}
 */
export type StorageMaximumSizeUnit = "MB" | "GB" | "TB";
/**
 * Type definition for `AWS::IoTFleetWise::Campaign.StorageMinimumTimeToLive`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-storageminimumtimetolive.html}
 */
export type StorageMinimumTimeToLive = {
  Unit: StorageMinimumTimeToLiveUnit;
  /**
   * @min `1`
   * @max `10000`
   */
  Value: number;
};
/**
 * Type definition for `AWS::IoTFleetWise::Campaign.StorageMinimumTimeToLiveUnit`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-storageminimumtimetoliveunit.html}
 */
export type StorageMinimumTimeToLiveUnit = "HOURS" | "DAYS" | "WEEKS";
/**
 * Type definition for `AWS::IoTFleetWise::Campaign.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-tag.html}
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
 * Type definition for `AWS::IoTFleetWise::Campaign.TimeBasedCollectionScheme`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-timebasedcollectionscheme.html}
 */
export type TimeBasedCollectionScheme = {
  /**
   * @min `10000`
   * @max `86400000`
   */
  PeriodMs: number;
};
/**
 * Type definition for `AWS::IoTFleetWise::Campaign.TimeBasedSignalFetchConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-timebasedsignalfetchconfig.html}
 */
export type TimeBasedSignalFetchConfig = {
  /**
   * @min `1`
   */
  ExecutionFrequencyMs: number;
};
/**
 * Type definition for `AWS::IoTFleetWise::Campaign.TimestreamConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-timestreamconfig.html}
 */
export type TimestreamConfig = {
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:(aws[a-zA-Z0-9-]*):iam::(\d{12})?:(role((\u002F)|(\u002F[\u0021-\u007F]+\u002F))[\w+=,.@-]+)$`
   */
  ExecutionRoleArn: string;
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:(aws[a-zA-Z0-9-]*):timestream:[a-zA-Z0-9-]+:[0-9]{12}:database\/[a-zA-Z0-9_.-]+\/table\/[a-zA-Z0-9_.-]+$`
   */
  TimestreamTableArn: string;
};
/**
 * Type definition for `AWS::IoTFleetWise::Campaign.TriggerMode`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-triggermode.html}
 */
export type TriggerMode = "ALWAYS" | "RISING_EDGE";
/**
 * Type definition for `AWS::IoTFleetWise::Campaign.UpdateCampaignAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-updatecampaignaction.html}
 */
export type UpdateCampaignAction = "APPROVE" | "SUSPEND" | "RESUME" | "UPDATE";
/**
 * Definition of AWS::IoTFleetWise::Campaign Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html}
 */
export class IoTFleetWiseCampaign extends $Resource<
  "AWS::IoTFleetWise::Campaign",
  IoTFleetWiseCampaignProperties,
  IoTFleetWiseCampaignAttributes
> {
  public static readonly Type = "AWS::IoTFleetWise::Campaign";
  constructor(
    logicalId: string,
    properties: IoTFleetWiseCampaignProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IoTFleetWiseCampaign.Type, properties, options);
  }
}
