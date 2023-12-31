import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
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
};
/**
 * Attribute type definition for `AWS::MediaConnect::Flow`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#aws-resource-mediaconnect-flow-return-values}
 */
export type MediaConnectFlowAttributes = {
  /**
   * The Amazon Resource Name (ARN), a unique identifier for any AWS resource, of the flow.
   */
  FlowArn: string;
  /**
   * The Availability Zone that you want to create the flow in. These options are limited to the Availability Zones within the current AWS.(ReadOnly)
   */
  FlowAvailabilityZone: string;
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
