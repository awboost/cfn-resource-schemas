import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::PinpointEmail::ConfigurationSet
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpointemail-configurationset.html}
 */
export type PinpointEmailConfigurationSetProperties = {
  DeliveryOptions?: DeliveryOptions;
  Name: string;
  ReputationOptions?: ReputationOptions;
  SendingOptions?: SendingOptions;
  Tags?: Tags[];
  TrackingOptions?: TrackingOptions;
};
/**
 * Attribute type definition for `AWS::PinpointEmail::ConfigurationSet`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpointemail-configurationset.html#aws-resource-pinpointemail-configurationset-return-values}
 */
export type PinpointEmailConfigurationSetAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::PinpointEmail::ConfigurationSet.DeliveryOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationset-deliveryoptions.html}
 */
export type DeliveryOptions = {
  SendingPoolName?: string;
};
/**
 * Type definition for `AWS::PinpointEmail::ConfigurationSet.ReputationOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationset-reputationoptions.html}
 */
export type ReputationOptions = {
  ReputationMetricsEnabled?: boolean;
};
/**
 * Type definition for `AWS::PinpointEmail::ConfigurationSet.SendingOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationset-sendingoptions.html}
 */
export type SendingOptions = {
  SendingEnabled?: boolean;
};
/**
 * Type definition for `AWS::PinpointEmail::ConfigurationSet.Tags`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationset-tags.html}
 */
export type Tags = {
  Key?: string;
  Value?: string;
};
/**
 * Type definition for `AWS::PinpointEmail::ConfigurationSet.TrackingOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationset-trackingoptions.html}
 */
export type TrackingOptions = {
  CustomRedirectDomain?: string;
};
/**
 * Resource Type definition for AWS::PinpointEmail::ConfigurationSet
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpointemail-configurationset.html}
 */
export class PinpointEmailConfigurationSet extends $Resource<
  "AWS::PinpointEmail::ConfigurationSet",
  PinpointEmailConfigurationSetProperties,
  PinpointEmailConfigurationSetAttributes
> {
  public static readonly Type = "AWS::PinpointEmail::ConfigurationSet";
  constructor(
    logicalId: string,
    properties: PinpointEmailConfigurationSetProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, PinpointEmailConfigurationSet.Type, properties, options);
  }
}
