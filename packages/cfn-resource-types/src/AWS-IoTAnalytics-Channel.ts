import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::IoTAnalytics::Channel
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-channel.html}
 */
export type IoTAnalyticsChannelProperties = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `(^(?!_{2}))(^[a-zA-Z0-9_]+$)`
   */
  ChannelName?: string;
  ChannelStorage?: ChannelStorage;
  RetentionPeriod?: RetentionPeriod;
  /**
   * @minLength `1`
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::IoTAnalytics::Channel`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-channel.html#aws-resource-iotanalytics-channel-return-values}
 */
export type IoTAnalyticsChannelAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::IoTAnalytics::Channel.ChannelStorage`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-channel-channelstorage.html}
 */
export type ChannelStorage = {
  CustomerManagedS3?: CustomerManagedS3;
  ServiceManagedS3?: ServiceManagedS3;
};
/**
 * Type definition for `AWS::IoTAnalytics::Channel.CustomerManagedS3`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-channel-customermanageds3.html}
 */
export type CustomerManagedS3 = {
  /**
   * @minLength `3`
   * @maxLength `255`
   * @pattern `^[a-zA-Z0-9.\-_]*$`
   */
  Bucket: string;
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[a-zA-Z0-9!_.*'()/{}:-]/‍*$`
   */
  KeyPrefix?: string;
  /**
   * @minLength `20`
   * @maxLength `2048`
   */
  RoleArn: string;
};
/**
 * Type definition for `AWS::IoTAnalytics::Channel.RetentionPeriod`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-channel-retentionperiod.html}
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
 * Type definition for `AWS::IoTAnalytics::Channel.ServiceManagedS3`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-channel-servicemanageds3.html}
 */
export type ServiceManagedS3 = Record<string, any>;
/**
 * Type definition for `AWS::IoTAnalytics::Channel.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-channel-tag.html}
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
 * Resource Type definition for AWS::IoTAnalytics::Channel
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-channel.html}
 */
export class IoTAnalyticsChannel extends $Resource<
  "AWS::IoTAnalytics::Channel",
  IoTAnalyticsChannelProperties,
  IoTAnalyticsChannelAttributes
> {
  public static readonly Type = "AWS::IoTAnalytics::Channel";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: IoTAnalyticsChannelProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      IoTAnalyticsChannel.Type,
      properties,
      IoTAnalyticsChannel.AttributeNames,
      options,
    );
  }
}
