import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::GroundStation::Config`.
 * AWS Ground Station config resource type for CloudFormation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html}
 */
export type GroundStationConfigProperties = {
  ConfigData: ConfigData;
  /**
   * @pattern `^[ a-zA-Z0-9_:-]{1,256}$`
   */
  Name: string;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::GroundStation::Config`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html#aws-resource-groundstation-config-return-values}
 */
export type GroundStationConfigAttributes = {
  /**
   * @pattern `^(arn:(aws[a-zA-Z-]*)?:[a-z0-9-.]+:.*)|()$`
   */
  Arn: string;
  Id: string;
  Type: string;
};
/**
 * Type definition for `AWS::GroundStation::Config.AntennaDownlinkConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-antennadownlinkconfig.html}
 */
export type AntennaDownlinkConfig = {
  SpectrumConfig?: SpectrumConfig;
};
/**
 * Type definition for `AWS::GroundStation::Config.AntennaDownlinkDemodDecodeConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-antennadownlinkdemoddecodeconfig.html}
 */
export type AntennaDownlinkDemodDecodeConfig = {
  DecodeConfig?: DecodeConfig;
  DemodulationConfig?: DemodulationConfig;
  SpectrumConfig?: SpectrumConfig;
};
/**
 * Type definition for `AWS::GroundStation::Config.AntennaUplinkConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-antennauplinkconfig.html}
 */
export type AntennaUplinkConfig = {
  SpectrumConfig?: UplinkSpectrumConfig;
  TargetEirp?: Eirp;
  TransmitDisabled?: boolean;
};
/**
 * Type definition for `AWS::GroundStation::Config.BandwidthUnits`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-bandwidthunits.html}
 */
export type BandwidthUnits = "GHz" | "MHz" | "kHz";
/**
 * Type definition for `AWS::GroundStation::Config.ConfigData`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-configdata.html}
 */
export type ConfigData = {
  AntennaDownlinkConfig?: AntennaDownlinkConfig;
  AntennaDownlinkDemodDecodeConfig?: AntennaDownlinkDemodDecodeConfig;
  AntennaUplinkConfig?: AntennaUplinkConfig;
  DataflowEndpointConfig?: DataflowEndpointConfig;
  S3RecordingConfig?: S3RecordingConfig;
  TelemetrySinkConfig?: TelemetrySinkConfig;
  TrackingConfig?: TrackingConfig;
  UplinkEchoConfig?: UplinkEchoConfig;
};
/**
 * Type definition for `AWS::GroundStation::Config.DataflowEndpointConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-dataflowendpointconfig.html}
 */
export type DataflowEndpointConfig = {
  DataflowEndpointName?: string;
  DataflowEndpointRegion?: string;
};
/**
 * Type definition for `AWS::GroundStation::Config.DecodeConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-decodeconfig.html}
 */
export type DecodeConfig = {
  /**
   * @pattern `^[{}\[\]:.,"0-9A-z\-_\s]{1,8192}$`
   */
  UnvalidatedJSON?: string;
};
/**
 * Type definition for `AWS::GroundStation::Config.DemodulationConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-demodulationconfig.html}
 */
export type DemodulationConfig = {
  /**
   * @pattern `^[{}\[\]:.,"0-9A-z\-_\s]{1,8192}$`
   */
  UnvalidatedJSON?: string;
};
/**
 * Type definition for `AWS::GroundStation::Config.Eirp`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-eirp.html}
 */
export type Eirp = {
  Units?: EirpUnits;
  Value?: number;
};
/**
 * Type definition for `AWS::GroundStation::Config.EirpUnits`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-eirpunits.html}
 */
export type EirpUnits = "dBW";
/**
 * Type definition for `AWS::GroundStation::Config.Frequency`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-frequency.html}
 */
export type Frequency = {
  Units?: FrequencyUnits;
  Value?: number;
};
/**
 * Type definition for `AWS::GroundStation::Config.FrequencyBandwidth`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-frequencybandwidth.html}
 */
export type FrequencyBandwidth = {
  Units?: BandwidthUnits;
  Value?: number;
};
/**
 * Type definition for `AWS::GroundStation::Config.FrequencyUnits`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-frequencyunits.html}
 */
export type FrequencyUnits = "GHz" | "MHz" | "kHz";
/**
 * Type definition for `AWS::GroundStation::Config.KinesisDataStreamData`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-kinesisdatastreamdata.html}
 */
export type KinesisDataStreamData = {
  /**
   * @pattern `^arn:[a-z0-9-.]{1,63}:kinesis:[-a-z0-9]{1,50}:[0-9]{12}:stream/[a-zA-Z0-9_.-]{1,128}$`
   */
  KinesisDataStreamArn: string;
  /**
   * @pattern `^arn:[^:\n]+:iam::[^:\n]+:role\/.+$`
   */
  KinesisRoleArn: string;
};
/**
 * Type definition for `AWS::GroundStation::Config.Polarization`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-polarization.html}
 */
export type Polarization = "LEFT_HAND" | "RIGHT_HAND" | "NONE";
/**
 * Type definition for `AWS::GroundStation::Config.S3RecordingConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-s3recordingconfig.html}
 */
export type S3RecordingConfig = {
  /**
   * @pattern `^arn:aws[A-Za-z0-9-]{0,64}:s3:::[A-Za-z0-9-]{1,64}$`
   */
  BucketArn?: string;
  /**
   * @pattern `^([a-zA-Z0-9_\-=/]|\{satellite_id\}|\{config\-name}|\{s3\-config-id}|\{year\}|\{month\}|\{day\}){1,900}$`
   */
  Prefix?: string;
  /**
   * @pattern `^arn:[^:\n]+:iam::[^:\n]+:role\/.+$`
   */
  RoleArn?: string;
};
/**
 * Type definition for `AWS::GroundStation::Config.SpectrumConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-spectrumconfig.html}
 */
export type SpectrumConfig = {
  Bandwidth?: FrequencyBandwidth;
  CenterFrequency?: Frequency;
  Polarization?: Polarization;
};
/**
 * Type definition for `AWS::GroundStation::Config.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-tag.html}
 */
export type Tag = {
  /**
   * @pattern `^[ a-zA-Z0-9\+\-=._:/@]{1,128}$`
   */
  Key?: string;
  /**
   * @pattern `^[ a-zA-Z0-9\+\-=._:/@]{1,256}$`
   */
  Value?: string;
};
/**
 * Type definition for `AWS::GroundStation::Config.TelemetrySinkConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-telemetrysinkconfig.html}
 */
export type TelemetrySinkConfig = {
  TelemetrySinkData: TelemetrySinkData;
  TelemetrySinkType: TelemetrySinkType;
};
/**
 * Type definition for `AWS::GroundStation::Config.TelemetrySinkData`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-telemetrysinkdata.html}
 */
export type TelemetrySinkData = {
  KinesisDataStreamData?: KinesisDataStreamData;
};
/**
 * Type definition for `AWS::GroundStation::Config.TelemetrySinkType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-telemetrysinktype.html}
 */
export type TelemetrySinkType = "KINESIS_DATA_STREAM";
/**
 * Type definition for `AWS::GroundStation::Config.TrackingConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-trackingconfig.html}
 */
export type TrackingConfig = {
  Autotrack?: "REQUIRED" | "PREFERRED" | "REMOVED";
};
/**
 * Type definition for `AWS::GroundStation::Config.UplinkEchoConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-uplinkechoconfig.html}
 */
export type UplinkEchoConfig = {
  /**
   * @pattern `^(arn:(aws[a-zA-Z-]*)?:[a-z0-9-.]+:.*)|()$`
   */
  AntennaUplinkConfigArn?: string;
  Enabled?: boolean;
};
/**
 * Type definition for `AWS::GroundStation::Config.UplinkSpectrumConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-uplinkspectrumconfig.html}
 */
export type UplinkSpectrumConfig = {
  CenterFrequency?: Frequency;
  Polarization?: Polarization;
};
/**
 * Resource type definition for `AWS::GroundStation::Config`.
 * AWS Ground Station config resource type for CloudFormation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html}
 */
export class GroundStationConfig extends $Resource<
  "AWS::GroundStation::Config",
  GroundStationConfigProperties,
  GroundStationConfigAttributes
> {
  public static readonly Type = "AWS::GroundStation::Config";
  constructor(
    logicalId: string,
    properties: GroundStationConfigProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, GroundStationConfig.Type, properties, options);
  }
}
