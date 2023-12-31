import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Definition of AWS::IoTFleetWise::Campaign Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html}
 */
export type IoTFleetWiseCampaignProperties = {
  Action: UpdateCampaignAction;
  CollectionScheme:
    | {
        TimeBasedCollectionScheme: TimeBasedCollectionScheme;
      }
    | {
        ConditionBasedCollectionScheme: ConditionBasedCollectionScheme;
      };
  Compression?: Compression;
  /**
   * @minLength `1`
   * @maxLength `1`
   */
  DataDestinationConfigs?: (
    | {
        S3Config: S3Config;
      }
    | {
        TimestreamConfig: TimestreamConfig;
      }
  )[];
  /**
   * @maxLength `5`
   */
  DataExtraDimensions?: string[];
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
   * @max `4294967295`
   */
  PostTriggerCollectionDuration?: number;
  Priority?: number;
  SignalCatalogArn: string;
  /**
   * @maxLength `1000`
   */
  SignalsToCollect?: SignalInformation[];
  SpoolingMode?: SpoolingMode;
  StartTime?: string;
  /**
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
   * @max `4294967295`
   */
  MinimumTriggerIntervalMs?: number;
  TriggerMode?: TriggerMode;
};
/**
 * Type definition for `AWS::IoTFleetWise::Campaign.DataFormat`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-dataformat.html}
 */
export type DataFormat = "JSON" | "PARQUET";
/**
 * Type definition for `AWS::IoTFleetWise::Campaign.DiagnosticsMode`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-diagnosticsmode.html}
 */
export type DiagnosticsMode = "OFF" | "SEND_ACTIVE_DTCS";
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
 * Type definition for `AWS::IoTFleetWise::Campaign.SignalInformation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-signalinformation.html}
 */
export type SignalInformation = {
  /**
   * @min `1`
   * @max `4294967295`
   */
  MaxSampleCount?: number;
  /**
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
   * @max `60000`
   */
  PeriodMs: number;
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
  public static readonly AttributeNames = [
    "Arn" as const,
    "CreationTime" as const,
    "LastModificationTime" as const,
    "Status" as const,
  ];
  constructor(
    logicalId: string,
    properties: IoTFleetWiseCampaignProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      IoTFleetWiseCampaign.Type,
      properties,
      IoTFleetWiseCampaign.AttributeNames,
      options,
    );
  }
}
