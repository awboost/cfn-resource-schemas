import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::MediaConnect::FlowOutput
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowoutput.html}
 */
export type MediaConnectFlowOutputProperties = {
  /**
   * The range of IP addresses that should be allowed to initiate output requests to this flow. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
   */
  CidrAllowList?: string[];
  /**
   * A description of the output.
   */
  Description?: string;
  /**
   * The address where you want to send the output.
   */
  Destination?: string;
  /**
   * The type of key used for the encryption. If no keyType is provided, the service will use the default setting (static-key).
   */
  Encryption?: Encryption;
  /**
   * The Amazon Resource Name (ARN), a unique identifier for any AWS resource, of the flow.
   */
  FlowArn: string;
  /**
   * The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams.
   */
  MaxLatency?: number;
  /**
   * The definition for each media stream that is associated with the output.
   */
  MediaStreamOutputConfigurations?: MediaStreamOutputConfiguration[];
  /**
   * The minimum latency in milliseconds.
   */
  MinLatency?: number;
  /**
   * The name of the output. This value must be unique within the current flow.
   */
  Name?: string;
  /**
   * A suffix for the names of the NDI sources that the flow creates. If a custom name isn't specified, MediaConnect uses the output name.
   */
  NdiProgramName?: string;
  /**
   * A quality setting for the NDI Speed HQ encoder.
   */
  NdiSpeedHqQuality?: number;
  /**
   * An indication of whether the output should transmit data or not.
   */
  OutputStatus?: "ENABLED" | "DISABLED";
  /**
   * The port to use when content is distributed to this output.
   */
  Port?: number;
  /**
   * The protocol that is used by the source or output.
   */
  Protocol?:
    | "zixi-push"
    | "rtp-fec"
    | "rtp"
    | "zixi-pull"
    | "rist"
    | "fujitsu-qos"
    | "srt-listener"
    | "srt-caller"
    | "st2110-jpegxs"
    | "cdi"
    | "ndi-speed-hq";
  /**
   * The remote ID for the Zixi-pull stream.
   */
  RemoteId?: string;
  RouterIntegrationState?: "ENABLED" | "DISABLED";
  /**
   * The configuration that defines how content is encrypted during transit between the MediaConnect router and a MediaConnect flow.
   */
  RouterIntegrationTransitEncryption?: FlowTransitEncryption;
  /**
   * The smoothing latency in milliseconds for RIST, RTP, and RTP-FEC streams.
   */
  SmoothingLatency?: number;
  /**
   * The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams.
   */
  StreamId?: string;
  /**
   * The name of the VPC interface attachment to use for this output.
   */
  VpcInterfaceAttachment?: VpcInterfaceAttachment;
};
/**
 * Attribute type definition for `AWS::MediaConnect::FlowOutput`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowoutput.html#aws-resource-mediaconnect-flowoutput-return-values}
 */
export type MediaConnectFlowOutputAttributes = {
  /**
   * The ARN of the output.
   */
  OutputArn: string;
};
/**
 * Type definition for `AWS::MediaConnect::FlowOutput.AutomaticEncryptionKeyConfiguration`.
 * Configuration settings for automatic encryption key management, where MediaConnect handles key creation and rotation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowoutput-automaticencryptionkeyconfiguration.html}
 */
export type AutomaticEncryptionKeyConfiguration = Record<string, any>;
/**
 * Type definition for `AWS::MediaConnect::FlowOutput.DestinationConfiguration`.
 * The definition of a media stream that is associated with the output.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowoutput-destinationconfiguration.html}
 */
export type DestinationConfiguration = {
  /**
   * The IP address where contents of the media stream will be sent.
   */
  DestinationIp: string;
  /**
   * The port to use when the content of the media stream is distributed to the output.
   */
  DestinationPort: number;
  /**
   * The VPC interface that is used for the media stream associated with the output.
   */
  Interface: Interface;
};
/**
 * Type definition for `AWS::MediaConnect::FlowOutput.EncodingParameters`.
 * A collection of parameters that determine how MediaConnect will convert the content. These fields only apply to outputs on flows that have a CDI source.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowoutput-encodingparameters.html}
 */
export type EncodingParameters = {
  /**
   * A value that is used to calculate compression for an output. The bitrate of the output is calculated as follows: Output bitrate = (1 / compressionFactor) * (source bitrate) This property only applies to outputs that use the ST 2110 JPEG XS protocol, with a flow source that uses the CDI protocol. Valid values are in the range of 3.0 to 10.0, inclusive.
   */
  CompressionFactor: number;
  /**
   * A setting on the encoder that drives compression settings. This property only applies to video media streams associated with outputs that use the ST 2110 JPEG XS protocol, with a flow source that uses the CDI protocol.
   */
  EncoderProfile?: "main" | "high";
};
/**
 * Type definition for `AWS::MediaConnect::FlowOutput.Encryption`.
 * Information about the encryption of the flow.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowoutput-encryption.html}
 */
export type Encryption = {
  /**
   * The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256).
   */
  Algorithm?: "aes128" | "aes192" | "aes256";
  /**
   * The type of key that is used for the encryption. If no keyType is provided, the service will use the default setting (static-key).
   */
  KeyType?: "static-key" | "srt-password";
  /**
   * The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity).
   */
  RoleArn: string;
  /**
   *  The ARN of the secret that you created in AWS Secrets Manager to store the encryption key. This parameter is required for static key encryption and is not valid for SPEKE encryption.
   */
  SecretArn: string;
};
/**
 * Type definition for `AWS::MediaConnect::FlowOutput.FlowTransitEncryption`.
 * The configuration that defines how content is encrypted during transit between the MediaConnect router and a MediaConnect flow.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowoutput-flowtransitencryption.html}
 */
export type FlowTransitEncryption = {
  /**
   * Configuration settings for flow transit encryption keys.
   */
  EncryptionKeyConfiguration: FlowTransitEncryptionKeyConfiguration;
  EncryptionKeyType?: FlowTransitEncryptionKeyType;
};
/**
 * Type definition for `AWS::MediaConnect::FlowOutput.FlowTransitEncryptionKeyConfiguration`.
 * Configuration settings for flow transit encryption keys.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowoutput-flowtransitencryptionkeyconfiguration.html}
 */
export type FlowTransitEncryptionKeyConfiguration =
  | {
      /**
       * The configuration settings for transit encryption of a flow output using AWS Secrets Manager, including the secret ARN and role ARN.
       */
      SecretsManager: SecretsManagerEncryptionKeyConfiguration;
    }
  | {
      /**
       * Configuration settings for automatic encryption key management, where MediaConnect handles key creation and rotation.
       */
      Automatic: AutomaticEncryptionKeyConfiguration;
    };
/**
 * Type definition for `AWS::MediaConnect::FlowOutput.FlowTransitEncryptionKeyType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowoutput-flowtransitencryptionkeytype.html}
 */
export type FlowTransitEncryptionKeyType = "SECRETS_MANAGER" | "AUTOMATIC";
/**
 * Type definition for `AWS::MediaConnect::FlowOutput.Interface`.
 * The VPC interface that you want to use for the media stream associated with the output.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowoutput-interface.html}
 */
export type Interface = {
  /**
   * The name of the VPC interface that you want to use for the media stream associated with the output.
   */
  Name: string;
};
/**
 * Type definition for `AWS::MediaConnect::FlowOutput.MediaStreamOutputConfiguration`.
 * The media stream that is associated with the output, and the parameters for that association.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowoutput-mediastreamoutputconfiguration.html}
 */
export type MediaStreamOutputConfiguration = {
  /**
   * The media streams that you want to associate with the output.
   */
  DestinationConfigurations?: DestinationConfiguration[];
  /**
   * The format that will be used to encode the data. For ancillary data streams, set the encoding name to smpte291. For audio streams, set the encoding name to pcm. For video streams on sources or outputs that use the CDI protocol, set the encoding name to raw. For video streams on sources or outputs that use the ST 2110 JPEG XS protocol, set the encoding name to jxsv.
   */
  EncodingName: "jxsv" | "raw" | "smpte291" | "pcm";
  /**
   * A collection of parameters that determine how MediaConnect will convert the content. These fields only apply to outputs on flows that have a CDI source.
   */
  EncodingParameters?: EncodingParameters;
  /**
   * A name that helps you distinguish one media stream from another.
   */
  MediaStreamName: string;
};
/**
 * Type definition for `AWS::MediaConnect::FlowOutput.SecretsManagerEncryptionKeyConfiguration`.
 * The configuration settings for transit encryption of a flow output using AWS Secrets Manager, including the secret ARN and role ARN.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowoutput-secretsmanagerencryptionkeyconfiguration.html}
 */
export type SecretsManagerEncryptionKeyConfiguration = {
  /**
   * The ARN of the IAM role used for transit encryption to the router input using AWS Secrets Manager.
   * @pattern `^arn:(aws[a-zA-Z-]*):iam::[0-9]{12}:role/[a-zA-Z0-9_+=,.@-]+$`
   */
  RoleArn: string;
  /**
   * The ARN of the AWS Secrets Manager secret used for transit encryption to the router input.
   * @pattern `^arn:(aws[a-zA-Z-]*):secretsmanager:[a-z0-9-]+:[0-9]{12}:secret:[a-zA-Z0-9/_+=.@-]+$`
   */
  SecretArn: string;
};
/**
 * Type definition for `AWS::MediaConnect::FlowOutput.VpcInterfaceAttachment`.
 * The settings for attaching a VPC interface to an output.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowoutput-vpcinterfaceattachment.html}
 */
export type VpcInterfaceAttachment = {
  /**
   * The name of the VPC interface to use for this output.
   */
  VpcInterfaceName?: string;
};
/**
 * Resource schema for AWS::MediaConnect::FlowOutput
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowoutput.html}
 */
export class MediaConnectFlowOutput extends $Resource<
  "AWS::MediaConnect::FlowOutput",
  MediaConnectFlowOutputProperties,
  MediaConnectFlowOutputAttributes
> {
  public static readonly Type = "AWS::MediaConnect::FlowOutput";
  constructor(
    logicalId: string,
    properties: MediaConnectFlowOutputProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, MediaConnectFlowOutput.Type, properties, options);
  }
}
