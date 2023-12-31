import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::IoTAnalytics::Dataset
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-dataset.html}
 */
export type IoTAnalyticsDatasetProperties = {
  /**
   * @minLength `1`
   * @maxLength `1`
   */
  Actions: Action[];
  /**
   * @minLength `0`
   * @maxLength `20`
   */
  ContentDeliveryRules?: DatasetContentDeliveryRule[];
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `(^(?!_{2}))(^[a-zA-Z0-9_]+$)`
   */
  DatasetName?: string;
  /**
   * @minLength `1`
   * @maxLength `1`
   */
  LateDataRules?: LateDataRule[];
  RetentionPeriod?: RetentionPeriod;
  /**
   * @minLength `1`
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * @minLength `0`
   * @maxLength `5`
   */
  Triggers?: Trigger[];
  VersioningConfiguration?: VersioningConfiguration;
};
/**
 * Attribute type definition for `AWS::IoTAnalytics::Dataset`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-dataset.html#aws-resource-iotanalytics-dataset-return-values}
 */
export type IoTAnalyticsDatasetAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::IoTAnalytics::Dataset.Action`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-action.html}
 */
export type Action = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9_]+$`
   */
  ActionName: string;
  ContainerAction?: ContainerAction;
  QueryAction?: QueryAction;
};
/**
 * Type definition for `AWS::IoTAnalytics::Dataset.ContainerAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-containeraction.html}
 */
export type ContainerAction = {
  /**
   * @minLength `20`
   * @maxLength `2048`
   */
  ExecutionRoleArn: string;
  /**
   * @maxLength `255`
   */
  Image: string;
  ResourceConfiguration: ResourceConfiguration;
  /**
   * @minLength `0`
   * @maxLength `50`
   */
  Variables?: Variable[];
};
/**
 * Type definition for `AWS::IoTAnalytics::Dataset.DatasetContentDeliveryRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-datasetcontentdeliveryrule.html}
 */
export type DatasetContentDeliveryRule = {
  Destination: DatasetContentDeliveryRuleDestination;
  EntryName?: string;
};
/**
 * Type definition for `AWS::IoTAnalytics::Dataset.DatasetContentDeliveryRuleDestination`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-datasetcontentdeliveryruledestination.html}
 */
export type DatasetContentDeliveryRuleDestination = {
  IotEventsDestinationConfiguration?: IotEventsDestinationConfiguration;
  S3DestinationConfiguration?: S3DestinationConfiguration;
};
/**
 * Type definition for `AWS::IoTAnalytics::Dataset.DatasetContentVersionValue`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-datasetcontentversionvalue.html}
 */
export type DatasetContentVersionValue = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `(^(?!_{2}))(^[a-zA-Z0-9_]+$)`
   */
  DatasetName: string;
};
/**
 * Type definition for `AWS::IoTAnalytics::Dataset.DeltaTime`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-deltatime.html}
 */
export type DeltaTime = {
  OffsetSeconds: number;
  TimeExpression: string;
};
/**
 * Type definition for `AWS::IoTAnalytics::Dataset.DeltaTimeSessionWindowConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-deltatimesessionwindowconfiguration.html}
 */
export type DeltaTimeSessionWindowConfiguration = {
  /**
   * @min `1`
   * @max `60`
   */
  TimeoutInMinutes: number;
};
/**
 * Type definition for `AWS::IoTAnalytics::Dataset.Filter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-filter.html}
 */
export type Filter = {
  DeltaTime?: DeltaTime;
};
/**
 * Type definition for `AWS::IoTAnalytics::Dataset.GlueConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-glueconfiguration.html}
 */
export type GlueConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `150`
   */
  DatabaseName: string;
  /**
   * @minLength `1`
   * @maxLength `150`
   */
  TableName: string;
};
/**
 * Type definition for `AWS::IoTAnalytics::Dataset.IotEventsDestinationConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-ioteventsdestinationconfiguration.html}
 */
export type IotEventsDestinationConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z][a-zA-Z0-9_]*$`
   */
  InputName: string;
  /**
   * @minLength `20`
   * @maxLength `2048`
   */
  RoleArn: string;
};
/**
 * Type definition for `AWS::IoTAnalytics::Dataset.LateDataRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-latedatarule.html}
 */
export type LateDataRule = {
  RuleConfiguration: LateDataRuleConfiguration;
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9_]+$`
   */
  RuleName?: string;
};
/**
 * Type definition for `AWS::IoTAnalytics::Dataset.LateDataRuleConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-latedataruleconfiguration.html}
 */
export type LateDataRuleConfiguration = {
  DeltaTimeSessionWindowConfiguration?: DeltaTimeSessionWindowConfiguration;
};
/**
 * Type definition for `AWS::IoTAnalytics::Dataset.OutputFileUriValue`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-outputfileurivalue.html}
 */
export type OutputFileUriValue = {
  /**
   * @pattern `^[\w\.-]{1,255}$`
   */
  FileName: string;
};
/**
 * Type definition for `AWS::IoTAnalytics::Dataset.QueryAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-queryaction.html}
 */
export type QueryAction = {
  /**
   * @minLength `0`
   * @maxLength `1`
   */
  Filters?: Filter[];
  SqlQuery: string;
};
/**
 * Type definition for `AWS::IoTAnalytics::Dataset.ResourceConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-resourceconfiguration.html}
 */
export type ResourceConfiguration = {
  ComputeType: "ACU_1" | "ACU_2";
  /**
   * @min `1`
   * @max `50`
   */
  VolumeSizeInGB: number;
};
/**
 * Type definition for `AWS::IoTAnalytics::Dataset.RetentionPeriod`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-retentionperiod.html}
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
 * Type definition for `AWS::IoTAnalytics::Dataset.S3DestinationConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-s3destinationconfiguration.html}
 */
export type S3DestinationConfiguration = {
  /**
   * @minLength `3`
   * @maxLength `255`
   * @pattern `^[a-zA-Z0-9.\-_]*$`
   */
  Bucket: string;
  GlueConfiguration?: GlueConfiguration;
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[a-zA-Z0-9!_.*'()/{}:-]*$`
   */
  Key: string;
  /**
   * @minLength `20`
   * @maxLength `2048`
   */
  RoleArn: string;
};
/**
 * Type definition for `AWS::IoTAnalytics::Dataset.Schedule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-schedule.html}
 */
export type Schedule = {
  ScheduleExpression: string;
};
/**
 * Type definition for `AWS::IoTAnalytics::Dataset.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-tag.html}
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
 * Type definition for `AWS::IoTAnalytics::Dataset.Trigger`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-trigger.html}
 */
export type Trigger = {
  Schedule?: Schedule;
  TriggeringDataset?: TriggeringDataset;
};
/**
 * Type definition for `AWS::IoTAnalytics::Dataset.TriggeringDataset`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-triggeringdataset.html}
 */
export type TriggeringDataset = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `(^(?!_{2}))(^[a-zA-Z0-9_]+$)`
   */
  DatasetName: string;
};
/**
 * Type definition for `AWS::IoTAnalytics::Dataset.Variable`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-variable.html}
 */
export type Variable = {
  DatasetContentVersionValue?: DatasetContentVersionValue;
  DoubleValue?: number;
  OutputFileUriValue?: OutputFileUriValue;
  /**
   * @minLength `0`
   * @maxLength `1024`
   */
  StringValue?: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  VariableName: string;
};
/**
 * Type definition for `AWS::IoTAnalytics::Dataset.VersioningConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-versioningconfiguration.html}
 */
export type VersioningConfiguration = {
  /**
   * @min `1`
   * @max `1000`
   */
  MaxVersions?: number;
  Unlimited?: boolean;
};
/**
 * Resource Type definition for AWS::IoTAnalytics::Dataset
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-dataset.html}
 */
export class IoTAnalyticsDataset extends $Resource<
  "AWS::IoTAnalytics::Dataset",
  IoTAnalyticsDatasetProperties,
  IoTAnalyticsDatasetAttributes
> {
  public static readonly Type = "AWS::IoTAnalytics::Dataset";
  constructor(
    logicalId: string,
    properties: IoTAnalyticsDatasetProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IoTAnalyticsDataset.Type, properties, options);
  }
}
