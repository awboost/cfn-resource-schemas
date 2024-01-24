import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::MediaConnect::FlowSource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowsource.html}
 */
export type MediaConnectFlowSourceProperties = {
  /**
   * The type of encryption that is used on the content ingested from this source.
   */
  Decryption?: Encryption;
  /**
   * A description for the source. This value is not used or seen outside of the current AWS Elemental MediaConnect account.
   */
  Description: string;
  /**
   * The ARN of the entitlement that allows you to subscribe to content that comes from another AWS account. The entitlement is set by the content originator and the ARN is generated as part of the originator's flow.
   */
  EntitlementArn?: string;
  /**
   * The ARN of the flow.
   */
  FlowArn?: string;
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
   * The minimum latency in milliseconds.
   */
  MinLatency?: number;
  /**
   * The name of the source.
   */
  Name: string;
  /**
   * The protocol that is used by the source.
   */
  Protocol?:
    | "zixi-push"
    | "rtp-fec"
    | "rtp"
    | "rist"
    | "srt-listener"
    | "srt-caller";
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
 * Attribute type definition for `AWS::MediaConnect::FlowSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowsource.html#aws-resource-mediaconnect-flowsource-return-values}
 */
export type MediaConnectFlowSourceAttributes = {
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
 * Type definition for `AWS::MediaConnect::FlowSource.Encryption`.
 * Information about the encryption of the flow.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowsource-encryption.html}
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
 * Type definition for `AWS::MediaConnect::FlowSource.GatewayBridgeSource`.
 * The source configuration for cloud flows receiving a stream from a bridge.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowsource-gatewaybridgesource.html}
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
 * Type definition for `AWS::MediaConnect::FlowSource.VpcInterfaceAttachment`.
 * The settings for attaching a VPC interface to an resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowsource-vpcinterfaceattachment.html}
 */
export type VpcInterfaceAttachment = {
  /**
   * The name of the VPC interface to use for this resource.
   */
  VpcInterfaceName?: string;
};
/**
 * Resource schema for AWS::MediaConnect::FlowSource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowsource.html}
 */
export class MediaConnectFlowSource extends $Resource<
  "AWS::MediaConnect::FlowSource",
  MediaConnectFlowSourceProperties,
  MediaConnectFlowSourceAttributes
> {
  public static readonly Type = "AWS::MediaConnect::FlowSource";
  constructor(
    logicalId: string,
    properties: MediaConnectFlowSourceProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, MediaConnectFlowSource.Type, properties, options);
  }
}
