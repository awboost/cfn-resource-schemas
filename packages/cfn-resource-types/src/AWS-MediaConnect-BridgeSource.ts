import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource schema for AWS::MediaConnect::BridgeSource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-bridgesource.html}
 */
export type MediaConnectBridgeSourceProperties = {
  /**
   * The Amazon Resource Number (ARN) of the bridge.
   */
  BridgeArn: string;
  /**
   * The source of the bridge. A flow source originates in MediaConnect as an existing cloud flow.
   */
  FlowSource?: BridgeFlowSource;
  /**
   * The name of the source.
   */
  Name: string;
  /**
   * The source of the bridge. A network source originates at your premises.
   */
  NetworkSource?: BridgeNetworkSource;
};
/**
 * Type definition for `AWS::MediaConnect::BridgeSource.BridgeFlowSource`.
 * The source of the bridge. A flow source originates in MediaConnect as an existing cloud flow.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridgesource-bridgeflowsource.html}
 */
export type BridgeFlowSource = {
  /**
   * The ARN of the cloud flow used as a source of this bridge.
   */
  FlowArn: string;
  /**
   * The name of the VPC interface attachment to use for this source.
   */
  FlowVpcInterfaceAttachment?: VpcInterfaceAttachment;
};
/**
 * Type definition for `AWS::MediaConnect::BridgeSource.BridgeNetworkSource`.
 * The source of the bridge. A network source originates at your premises.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridgesource-bridgenetworksource.html}
 */
export type BridgeNetworkSource = {
  /**
   * The network source multicast IP.
   */
  MulticastIp: string;
  /**
   * The network source's gateway network name.
   */
  NetworkName: string;
  /**
   * The network source port.
   */
  Port: number;
  /**
   * The network source protocol.
   */
  Protocol: ProtocolEnum;
};
/**
 * Type definition for `AWS::MediaConnect::BridgeSource.ProtocolEnum`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridgesource-protocolenum.html}
 */
export type ProtocolEnum = "rtp-fec" | "rtp" | "udp";
/**
 * Type definition for `AWS::MediaConnect::BridgeSource.VpcInterfaceAttachment`.
 * The settings for attaching a VPC interface to an resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridgesource-vpcinterfaceattachment.html}
 */
export type VpcInterfaceAttachment = {
  /**
   * The name of the VPC interface to use for this resource.
   */
  VpcInterfaceName?: string;
};
/**
 * Resource schema for AWS::MediaConnect::BridgeSource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-bridgesource.html}
 */
export class MediaConnectBridgeSource extends $Resource<
  "AWS::MediaConnect::BridgeSource",
  MediaConnectBridgeSourceProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::MediaConnect::BridgeSource";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: MediaConnectBridgeSourceProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      MediaConnectBridgeSource.Type,
      properties,
      MediaConnectBridgeSource.AttributeNames,
      options,
    );
  }
}
