import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::PinpointEmail::ConfigurationSetEventDestination
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpointemail-configurationseteventdestination.html}
 */
export type PinpointEmailConfigurationSetEventDestinationProperties = {
  ConfigurationSetName: string;
  EventDestination?: EventDestination;
  EventDestinationName: string;
};
/**
 * Attribute type definition for `AWS::PinpointEmail::ConfigurationSetEventDestination`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpointemail-configurationseteventdestination.html#aws-resource-pinpointemail-configurationseteventdestination-return-values}
 */
export type PinpointEmailConfigurationSetEventDestinationAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::PinpointEmail::ConfigurationSetEventDestination.CloudWatchDestination`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationseteventdestination-cloudwatchdestination.html}
 */
export type CloudWatchDestination = {
  DimensionConfigurations?: DimensionConfiguration[];
};
/**
 * Type definition for `AWS::PinpointEmail::ConfigurationSetEventDestination.DimensionConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationseteventdestination-dimensionconfiguration.html}
 */
export type DimensionConfiguration = {
  DefaultDimensionValue: string;
  DimensionName: string;
  DimensionValueSource: string;
};
/**
 * Type definition for `AWS::PinpointEmail::ConfigurationSetEventDestination.EventDestination`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationseteventdestination-eventdestination.html}
 */
export type EventDestination = {
  CloudWatchDestination?: CloudWatchDestination;
  Enabled?: boolean;
  KinesisFirehoseDestination?: KinesisFirehoseDestination;
  MatchingEventTypes: string[];
  PinpointDestination?: PinpointDestination;
  SnsDestination?: SnsDestination;
};
/**
 * Type definition for `AWS::PinpointEmail::ConfigurationSetEventDestination.KinesisFirehoseDestination`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationseteventdestination-kinesisfirehosedestination.html}
 */
export type KinesisFirehoseDestination = {
  DeliveryStreamArn: string;
  IamRoleArn: string;
};
/**
 * Type definition for `AWS::PinpointEmail::ConfigurationSetEventDestination.PinpointDestination`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationseteventdestination-pinpointdestination.html}
 */
export type PinpointDestination = {
  ApplicationArn?: string;
};
/**
 * Type definition for `AWS::PinpointEmail::ConfigurationSetEventDestination.SnsDestination`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationseteventdestination-snsdestination.html}
 */
export type SnsDestination = {
  TopicArn: string;
};
/**
 * Resource Type definition for AWS::PinpointEmail::ConfigurationSetEventDestination
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpointemail-configurationseteventdestination.html}
 */
export class PinpointEmailConfigurationSetEventDestination extends $Resource<
  "AWS::PinpointEmail::ConfigurationSetEventDestination",
  PinpointEmailConfigurationSetEventDestinationProperties,
  PinpointEmailConfigurationSetEventDestinationAttributes
> {
  public static readonly Type =
    "AWS::PinpointEmail::ConfigurationSetEventDestination";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: PinpointEmailConfigurationSetEventDestinationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      PinpointEmailConfigurationSetEventDestination.Type,
      properties,
      PinpointEmailConfigurationSetEventDestination.AttributeNames,
      options,
    );
  }
}
