import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Config::DeliveryChannel
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-deliverychannel.html}
 */
export type ConfigDeliveryChannelProperties = {
  ConfigSnapshotDeliveryProperties?: ConfigSnapshotDeliveryProperties;
  Name?: string;
  S3BucketName: string;
  S3KeyPrefix?: string;
  S3KmsKeyArn?: string;
  SnsTopicARN?: string;
};
/**
 * Attribute type definition for `AWS::Config::DeliveryChannel`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-deliverychannel.html#aws-resource-config-deliverychannel-return-values}
 */
export type ConfigDeliveryChannelAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::Config::DeliveryChannel.ConfigSnapshotDeliveryProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-deliverychannel-configsnapshotdeliveryproperties.html}
 */
export type ConfigSnapshotDeliveryProperties = {
  DeliveryFrequency?: string;
};
/**
 * Resource Type definition for AWS::Config::DeliveryChannel
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-deliverychannel.html}
 */
export class ConfigDeliveryChannel extends $Resource<
  "AWS::Config::DeliveryChannel",
  ConfigDeliveryChannelProperties,
  ConfigDeliveryChannelAttributes
> {
  public static readonly Type = "AWS::Config::DeliveryChannel";
  constructor(
    logicalId: string,
    properties: ConfigDeliveryChannelProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ConfigDeliveryChannel.Type, properties, options);
  }
}
