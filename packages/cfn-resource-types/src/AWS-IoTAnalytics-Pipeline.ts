import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::IoTAnalytics::Pipeline
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-pipeline.html}
 */
export type IoTAnalyticsPipelineProperties = {
  /**
   * @minLength `1`
   * @maxLength `25`
   */
  PipelineActivities: Activity[];
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `[a-zA-Z0-9_]+`
   */
  PipelineName?: string;
  /**
   * @minLength `1`
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::IoTAnalytics::Pipeline`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-pipeline.html#aws-resource-iotanalytics-pipeline-return-values}
 */
export type IoTAnalyticsPipelineAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::IoTAnalytics::Pipeline.Activity`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-pipeline-activity.html}
 */
export type Activity = {
  AddAttributes?: AddAttributes;
  Channel?: Channel;
  Datastore?: Datastore;
  DeviceRegistryEnrich?: DeviceRegistryEnrich;
  DeviceShadowEnrich?: DeviceShadowEnrich;
  Filter?: Filter;
  Lambda?: Lambda;
  Math?: Math;
  RemoveAttributes?: RemoveAttributes;
  SelectAttributes?: SelectAttributes;
};
/**
 * Type definition for `AWS::IoTAnalytics::Pipeline.AddAttributes`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-pipeline-addattributes.html}
 */
export type AddAttributes = {
  Attributes: Record<string, string>;
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Name: string;
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Next?: string;
};
/**
 * Type definition for `AWS::IoTAnalytics::Pipeline.Channel`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-pipeline-channel.html}
 */
export type Channel = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `[a-zA-Z0-9_]+`
   */
  ChannelName: string;
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Name: string;
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Next?: string;
};
/**
 * Type definition for `AWS::IoTAnalytics::Pipeline.Datastore`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-pipeline-datastore.html}
 */
export type Datastore = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `[a-zA-Z0-9_]+`
   */
  DatastoreName: string;
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Name: string;
};
/**
 * Type definition for `AWS::IoTAnalytics::Pipeline.DeviceRegistryEnrich`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-pipeline-deviceregistryenrich.html}
 */
export type DeviceRegistryEnrich = {
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  Attribute: string;
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Name: string;
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Next?: string;
  /**
   * @minLength `20`
   * @maxLength `2048`
   */
  RoleArn: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  ThingName: string;
};
/**
 * Type definition for `AWS::IoTAnalytics::Pipeline.DeviceShadowEnrich`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-pipeline-deviceshadowenrich.html}
 */
export type DeviceShadowEnrich = {
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  Attribute: string;
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Name: string;
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Next?: string;
  /**
   * @minLength `20`
   * @maxLength `2048`
   */
  RoleArn: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  ThingName: string;
};
/**
 * Type definition for `AWS::IoTAnalytics::Pipeline.Filter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-pipeline-filter.html}
 */
export type Filter = {
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  Filter: string;
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Name: string;
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Next?: string;
};
/**
 * Type definition for `AWS::IoTAnalytics::Pipeline.Lambda`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-pipeline-lambda.html}
 */
export type Lambda = {
  /**
   * @min `1`
   * @max `1000`
   */
  BatchSize: number;
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `[a-zA-Z0-9_-]+`
   */
  LambdaName: string;
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Name: string;
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Next?: string;
};
/**
 * Type definition for `AWS::IoTAnalytics::Pipeline.Math`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-pipeline-math.html}
 */
export type Math = {
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  Attribute: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  Math: string;
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Name: string;
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Next?: string;
};
/**
 * Type definition for `AWS::IoTAnalytics::Pipeline.RemoveAttributes`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-pipeline-removeattributes.html}
 */
export type RemoveAttributes = {
  /**
   * @minLength `1`
   * @maxLength `50`
   */
  Attributes: string[];
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Name: string;
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Next?: string;
};
/**
 * Type definition for `AWS::IoTAnalytics::Pipeline.SelectAttributes`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-pipeline-selectattributes.html}
 */
export type SelectAttributes = {
  /**
   * @minLength `1`
   * @maxLength `50`
   */
  Attributes: string[];
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Name: string;
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Next?: string;
};
/**
 * Type definition for `AWS::IoTAnalytics::Pipeline.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-pipeline-tag.html}
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
 * Resource Type definition for AWS::IoTAnalytics::Pipeline
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-pipeline.html}
 */
export class IoTAnalyticsPipeline extends $Resource<
  "AWS::IoTAnalytics::Pipeline",
  IoTAnalyticsPipelineProperties,
  IoTAnalyticsPipelineAttributes
> {
  public static readonly Type = "AWS::IoTAnalytics::Pipeline";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: IoTAnalyticsPipelineProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      IoTAnalyticsPipeline.Type,
      properties,
      IoTAnalyticsPipeline.AttributeNames,
      options,
    );
  }
}
