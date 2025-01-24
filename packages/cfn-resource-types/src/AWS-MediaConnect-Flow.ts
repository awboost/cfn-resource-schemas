import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::MediaConnect::Flow
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html}
 */
export type MediaConnectFlowProperties = {
  /**
   * The Availability Zone that you want to create the flow in. These options are limited to the Availability Zones within the current AWS.
   */
  AvailabilityZone?: string;
  /**
   * The maintenance settings you want to use for the flow.
   */
  Maintenance?: Maintenance;
  /**
   * The media streams associated with the flow. You can associate any of these media streams with sources and outputs on the flow.
   */
  MediaStreams?: MediaStream[];
  /**
   * The name of the flow.
   */
  Name: string;
  /**
   * The source of the flow.
   */
  Source: Source;
  /**
   * The source failover config of the flow.
   */
  SourceFailoverConfig?: FailoverConfig;
  /**
   * The source monitoring config of the flow.
   */
  SourceMonitoringConfig?: SourceMonitoringConfig;
  /**
   * The VPC interfaces that you added to this flow.
   */
  VpcInterfaces?: VpcInterface[];
};
/**
 * Attribute type definition for `AWS::MediaConnect::Flow`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#aws-resource-mediaconnect-flow-return-values}
 */
export type MediaConnectFlowAttributes = {
  /**
   * The IP address from which video will be sent to output destinations.
   */
  EgressIp: string;
  /**
   * The Amazon Resource Name (ARN), a unique identifier for any AWS resource, of the flow.
   */
  FlowArn: string;
  /**
   * The Availability Zone that you want to create the flow in. These options are limited to the Availability Zones within the current AWS.(ReadOnly)
   */
  FlowAvailabilityZone: string;
  /**
   * The media streams associated with the flow. You can associate any of these media streams with sources and outputs on the flow.
   */
  MediaStreams: {
    /**
     * The format type number (sometimes referred to as RTP payload type) of the media stream. MediaConnect assigns this value to the media stream. For ST 2110 JPEG XS outputs, you need to provide this value to the receiver.
     */
    Fmt: number;
  }[];
  /**
   * The source of the flow.
   */
  Source: {
    /**
     * The IP address that the flow will be listening on for incoming content.
     */
    IngestIp: string;
    /**
     * The ARN of the source.
     */
    SourceArn: string;
    /**
     * The port that the flow will be listening on for incoming content.(ReadOnly)
     */
    SourceIngestPort: string;
  };
  /**
   * The VPC interfaces that you added to this flow.
   */
  VpcInterfaces: {
    /**
     * IDs of the network interfaces created in customer's account by MediaConnect.
     */
    NetworkInterfaceIds: string[];
  }[];
};
/**
 * Type definition for `AWS::MediaConnect::Flow.AudioMonitoringSetting`.
 * Specifies the configuration for audio stream metrics monitoring.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-audiomonitoringsetting.html}
 */
export type AudioMonitoringSetting = {
  /**
   * Configures settings for the SilentAudio metric.
   */
  SilentAudio?: SilentAudio;
};
/**
 * Type definition for `AWS::MediaConnect::Flow.BlackFrames`.
 * Configures settings for the BlackFrames metric.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-blackframes.html}
 */
export type BlackFrames = {
  /**
   * Indicates whether the BlackFrames metric is enabled or disabled.
   */
  State?: "ENABLED" | "DISABLED";
  /**
   * Specifies the number of consecutive seconds of black frames that triggers an event or alert.
   */
  ThresholdSeconds?: number;
};
/**
 * Type definition for `AWS::MediaConnect::Flow.Encryption`.
 * Information about the encryption of the flow.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-encryption.html}
 */
export type Encryption = {
  /**
   * The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256).
   */
  Algorithm?: "aes128" | "aes192" | "aes256";
  /**
   * A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content. This parameter is not valid for static key encryption.
   */
  ConstantInitializationVector?: string;
  /**
   * The value of one of the devices that you configured with your digital rights management (DRM) platform key provider. This parameter is required for SPEKE encryption and is not valid for static key encryption.
   */
  DeviceId?: string;
  /**
   * The type of key that is used for the encryption. If no keyType is provided, the service will use the default setting (static-key).
   */
  KeyType?: "speke" | "static-key" | "srt-password";
  /**
   * The AWS Region that the API Gateway proxy endpoint was created in. This parameter is required for SPEKE encryption and is not valid for static key encryption.
   */
  Region?: string;
  /**
   * An identifier for the content. The service sends this value to the key server to identify the current endpoint. The resource ID is also known as the content ID. This parameter is required for SPEKE encryption and is not valid for static key encryption.
   */
  ResourceId?: string;
  /**
   * The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity).
   */
  RoleArn: string;
  /**
   *  The ARN of the secret that you created in AWS Secrets Manager to store the encryption key. This parameter is required for static key encryption and is not valid for SPEKE encryption.
   */
  SecretArn?: string;
  /**
   * The URL from the API Gateway proxy that you set up to talk to your key server. This parameter is required for SPEKE encryption and is not valid for static key encryption.
   */
  Url?: string;
};
/**
 * Type definition for `AWS::MediaConnect::Flow.FailoverConfig`.
 * The settings for source failover
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-failoverconfig.html}
 */
export type FailoverConfig = {
  /**
   * The type of failover you choose for this flow. MERGE combines the source streams into a single stream, allowing graceful recovery from any single-source loss. FAILOVER allows switching between different streams.
   */
  FailoverMode?: "MERGE" | "FAILOVER";
  /**
   * Search window time to look for dash-7 packets
   */
  RecoveryWindow?: number;
  /**
   * The priority you want to assign to a source. You can have a primary stream and a backup stream or two equally prioritized streams.
   */
  SourcePriority?: {
    /**
     * The name of the source you choose as the primary source for this flow.
     */
    PrimarySource: string;
  };
  State?: "ENABLED" | "DISABLED";
};
/**
 * Type definition for `AWS::MediaConnect::Flow.Fmtp`.
 * A set of parameters that define the media stream.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-fmtp.html}
 */
export type Fmtp = {
  /**
   * The format of the audio channel.
   */
  ChannelOrder?: string;
  /**
   * The format used for the representation of color.
   */
  Colorimetry?:
    | "BT601"
    | "BT709"
    | "BT2020"
    | "BT2100"
    | "ST2065-1"
    | "ST2065-3"
    | "XYZ";
  /**
   * The frame rate for the video stream, in frames/second. For example: 60000/1001.
   */
  ExactFramerate?: string;
  /**
   * The pixel aspect ratio (PAR) of the video.
   */
  Par?: string;
  /**
   * The encoding range of the video.
   */
  Range?: "NARROW" | "FULL" | "FULLPROTECT";
  /**
   * The type of compression that was used to smooth the video's appearance.
   */
  ScanMode?: "progressive" | "interlace" | "progressive-segmented-frame";
  /**
   * The transfer characteristic system (TCS) that is used in the video.
   */
  Tcs?:
    | "SDR"
    | "PQ"
    | "HLG"
    | "LINEAR"
    | "BT2100LINPQ"
    | "BT2100LINHLG"
    | "ST2065-1"
    | "ST428-1"
    | "DENSITY";
};
/**
 * Type definition for `AWS::MediaConnect::Flow.FrozenFrames`.
 * Configures settings for the FrozenFrames metric.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-frozenframes.html}
 */
export type FrozenFrames = {
  /**
   * Indicates whether the FrozenFrames metric is enabled or disabled.
   */
  State?: "ENABLED" | "DISABLED";
  /**
   * Specifies the number of consecutive seconds of a static image that triggers an event or alert.
   */
  ThresholdSeconds?: number;
};
/**
 * Type definition for `AWS::MediaConnect::Flow.GatewayBridgeSource`.
 * The source configuration for cloud flows receiving a stream from a bridge.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-gatewaybridgesource.html}
 */
export type GatewayBridgeSource = {
  /**
   * The ARN of the bridge feeding this flow.
   */
  BridgeArn: string;
  /**
   * The name of the VPC interface attachment to use for this bridge source.
   */
  VpcInterfaceAttachment?: VpcInterfaceAttachment;
};
/**
 * Type definition for `AWS::MediaConnect::Flow.InputConfiguration`.
 * The transport parameters associated with an incoming media stream.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-inputconfiguration.html}
 */
export type InputConfiguration = {
  /**
   * The port that the flow listens on for an incoming media stream.
   */
  InputPort: number;
  /**
   * The VPC interface where the media stream comes in from.
   */
  Interface: Interface;
};
/**
 * Type definition for `AWS::MediaConnect::Flow.Interface`.
 * The VPC interface that you want to use for the media stream associated with the output.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-interface.html}
 */
export type Interface = {
  /**
   * The name of the VPC interface that you want to use for the media stream associated with the output.
   */
  Name: string;
};
/**
 * Type definition for `AWS::MediaConnect::Flow.Maintenance`.
 * The maintenance setting of a flow.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-maintenance.html}
 */
export type Maintenance = {
  /**
   * A day of a week when the maintenance will happen. Use Monday/Tuesday/Wednesday/Thursday/Friday/Saturday/Sunday.
   */
  MaintenanceDay:
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday";
  /**
   * UTC time when the maintenance will happen. Use 24-hour HH:MM format. Minutes must be 00. Example: 13:00. The default value is 02:00.
   */
  MaintenanceStartHour: string;
};
/**
 * Type definition for `AWS::MediaConnect::Flow.MediaStream`.
 * A single track or stream of media that contains video, audio, or ancillary data. After you add a media stream to a flow, you can associate it with sources and outputs on that flow, as long as they use the CDI protocol or the ST 2110 JPEG XS protocol. Each source or output can consist of one or many media streams.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-mediastream.html}
 */
export type MediaStream = {
  /**
   * Attributes that are related to the media stream.
   */
  Attributes?: MediaStreamAttributes;
  /**
   * The sample rate for the stream. This value in measured in kHz.
   */
  ClockRate?: number;
  /**
   * A description that can help you quickly identify what your media stream is used for.
   */
  Description?: string;
  /**
   * A unique identifier for the media stream.
   */
  MediaStreamId: number;
  /**
   * A name that helps you distinguish one media stream from another.
   */
  MediaStreamName: string;
  /**
   * The type of media stream.
   */
  MediaStreamType: "video" | "audio" | "ancillary-data";
  /**
   * The resolution of the video.
   */
  VideoFormat?: "2160p" | "1080p" | "1080i" | "720p" | "480p";
};
/**
 * Type definition for `AWS::MediaConnect::Flow.MediaStreamAttributes`.
 * Attributes that are related to the media stream.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-mediastreamattributes.html}
 */
export type MediaStreamAttributes = {
  /**
   * A set of parameters that define the media stream.
   */
  Fmtp?: Fmtp;
  /**
   * The audio language, in a format that is recognized by the receiver.
   */
  Lang?: string;
};
/**
 * Type definition for `AWS::MediaConnect::Flow.MediaStreamSourceConfiguration`.
 * The media stream that is associated with the source, and the parameters for that association.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-mediastreamsourceconfiguration.html}
 */
export type MediaStreamSourceConfiguration = {
  /**
   * The format that was used to encode the data. For ancillary data streams, set the encoding name to smpte291. For audio streams, set the encoding name to pcm. For video, 2110 streams, set the encoding name to raw. For video, JPEG XS streams, set the encoding name to jxsv.
   */
  EncodingName: "jxsv" | "raw" | "smpte291" | "pcm";
  /**
   * The media streams that you want to associate with the source.
   */
  InputConfigurations?: InputConfiguration[];
  /**
   * A name that helps you distinguish one media stream from another.
   */
  MediaStreamName: string;
};
/**
 * Type definition for `AWS::MediaConnect::Flow.SilentAudio`.
 * Configures settings for the SilentAudio metric.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-silentaudio.html}
 */
export type SilentAudio = {
  /**
   * Indicates whether the SilentAudio metric is enabled or disabled.
   */
  State?: "ENABLED" | "DISABLED";
  /**
   * Specifies the number of consecutive seconds of silence that triggers an event or alert.
   */
  ThresholdSeconds?: number;
};
/**
 * Type definition for `AWS::MediaConnect::Flow.Source`.
 * The settings for the source of the flow.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-source.html}
 */
export type Source = {
  /**
   * The type of decryption that is used on the content ingested from this source.
   */
  Decryption?: Encryption;
  /**
   * A description for the source. This value is not used or seen outside of the current AWS Elemental MediaConnect account.
   */
  Description?: string;
  /**
   * The ARN of the entitlement that allows you to subscribe to content that comes from another AWS account. The entitlement is set by the content originator and the ARN is generated as part of the originator's flow.
   */
  EntitlementArn?: string;
  /**
   * The source configuration for cloud flows receiving a stream from a bridge.
   */
  GatewayBridgeSource?: GatewayBridgeSource;
  /**
   * The port that the flow will be listening on for incoming content.
   */
  IngestPort?: number;
  /**
   * The smoothing max bitrate for RIST, RTP, and RTP-FEC streams.
   */
  MaxBitrate?: number;
  /**
   * The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams.
   */
  MaxLatency?: number;
  /**
   * The size of the buffer (in milliseconds) to use to sync incoming source data.
   */
  MaxSyncBuffer?: number;
  /**
   * The media stream that is associated with the source, and the parameters for that association.
   */
  MediaStreamSourceConfigurations?: MediaStreamSourceConfiguration[];
  /**
   * The minimum latency in milliseconds.
   */
  MinLatency?: number;
  /**
   * The name of the source.
   */
  Name?: string;
  /**
   * The protocol that is used by the source.
   */
  Protocol?:
    | "zixi-push"
    | "rtp-fec"
    | "rtp"
    | "rist"
    | "fujitsu-qos"
    | "srt-listener"
    | "srt-caller"
    | "st2110-jpegxs"
    | "cdi";
  /**
   * The port that the flow uses to send outbound requests to initiate connection with the sender for fujitsu-qos protocol.
   */
  SenderControlPort?: number;
  /**
   * The IP address that the flow communicates with to initiate connection with the sender for fujitsu-qos protocol.
   */
  SenderIpAddress?: string;
  /**
   * Source IP or domain name for SRT-caller protocol.
   */
  SourceListenerAddress?: string;
  /**
   * Source port for SRT-caller protocol.
   */
  SourceListenerPort?: number;
  /**
   * The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams.
   */
  StreamId?: string;
  /**
   * The name of the VPC Interface this Source is configured with.
   */
  VpcInterfaceName?: string;
  /**
   * The range of IP addresses that should be allowed to contribute content to your source. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
   */
  WhitelistCidr?: string;
};
/**
 * Type definition for `AWS::MediaConnect::Flow.SourceMonitoringConfig`.
 * The settings for source monitoring.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-sourcemonitoringconfig.html}
 */
export type SourceMonitoringConfig = {
  /**
   * Contains the settings for audio stream metrics monitoring.
   */
  AudioMonitoringSettings?: AudioMonitoringSetting[];
  /**
   * Indicates whether content quality analysis is enabled or disabled.
   */
  ContentQualityAnalysisState?: "ENABLED" | "DISABLED";
  /**
   * The state of thumbnail monitoring.
   */
  ThumbnailState?: "ENABLED" | "DISABLED";
  /**
   * Contains the settings for video stream metrics monitoring.
   */
  VideoMonitoringSettings?: VideoMonitoringSetting[];
};
/**
 * Type definition for `AWS::MediaConnect::Flow.VideoMonitoringSetting`.
 * Specifies the configuration for video stream metrics monitoring.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-videomonitoringsetting.html}
 */
export type VideoMonitoringSetting = {
  /**
   * Configures settings for the BlackFrames metric.
   */
  BlackFrames?: BlackFrames;
  /**
   * Configures settings for the FrozenFrames metric.
   */
  FrozenFrames?: FrozenFrames;
};
/**
 * Type definition for `AWS::MediaConnect::Flow.VpcInterface`.
 * The details of a VPC interface.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-vpcinterface.html}
 */
export type VpcInterface = {
  /**
   * Immutable and has to be a unique against other VpcInterfaces in this Flow.
   */
  Name: string;
  /**
   * The type of network adapter that you want MediaConnect to use on this interface. If you don't set this value, it defaults to ENA.
   */
  NetworkInterfaceType?: "ena" | "efa";
  /**
   * Role Arn MediaConnect can assume to create ENIs in customer's account.
   */
  RoleArn: string;
  /**
   * Security Group IDs to be used on ENI.
   */
  SecurityGroupIds: string[];
  /**
   * Subnet must be in the AZ of the Flow
   */
  SubnetId: string;
};
/**
 * Type definition for `AWS::MediaConnect::Flow.VpcInterfaceAttachment`.
 * The settings for attaching a VPC interface to an resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-vpcinterfaceattachment.html}
 */
export type VpcInterfaceAttachment = {
  /**
   * The name of the VPC interface to use for this resource.
   */
  VpcInterfaceName?: string;
};
/**
 * Resource schema for AWS::MediaConnect::Flow
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html}
 */
export class MediaConnectFlow extends $Resource<
  "AWS::MediaConnect::Flow",
  MediaConnectFlowProperties,
  MediaConnectFlowAttributes
> {
  public static readonly Type = "AWS::MediaConnect::Flow";
  constructor(
    logicalId: string,
    properties: MediaConnectFlowProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, MediaConnectFlow.Type, properties, options);
  }
}
