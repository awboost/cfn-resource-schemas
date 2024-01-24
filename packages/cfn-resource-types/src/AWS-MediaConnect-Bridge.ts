import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::MediaConnect::Bridge
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-bridge.html}
 */
export type MediaConnectBridgeProperties = {
  EgressGatewayBridge?: EgressGatewayBridge;
  IngressGatewayBridge?: IngressGatewayBridge;
  /**
   * The name of the bridge.
   */
  Name: string;
  /**
   * The outputs on this bridge.
   * @minLength `0`
   * @maxLength `2`
   */
  Outputs?: BridgeOutput[];
  /**
   * The placement Amazon Resource Number (ARN) of the bridge.
   */
  PlacementArn: string;
  /**
   * The settings for source failover.
   */
  SourceFailoverConfig?: FailoverConfig;
  /**
   * The sources on this bridge.
   * @minLength `0`
   * @maxLength `2`
   */
  Sources: BridgeSource[];
};
/**
 * Attribute type definition for `AWS::MediaConnect::Bridge`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-bridge.html#aws-resource-mediaconnect-bridge-return-values}
 */
export type MediaConnectBridgeAttributes = {
  /**
   * The Amazon Resource Number (ARN) of the bridge.
   */
  BridgeArn: string;
  BridgeState: BridgeStateEnum;
};
/**
 * Type definition for `AWS::MediaConnect::Bridge.BridgeFlowSource`.
 * The source of the bridge. A flow source originates in MediaConnect as an existing cloud flow.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridge-bridgeflowsource.html}
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
  /**
   * The name of the flow source.
   */
  Name: string;
};
/**
 * Type definition for `AWS::MediaConnect::Bridge.BridgeNetworkOutput`.
 * The output of the bridge. A network output is delivered to your premises.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridge-bridgenetworkoutput.html}
 */
export type BridgeNetworkOutput = {
  /**
   * The network output IP Address.
   */
  IpAddress: string;
  /**
   * The network output name.
   */
  Name: string;
  /**
   * The network output's gateway network name.
   */
  NetworkName: string;
  /**
   * The network output port.
   */
  Port: number;
  /**
   * The network output protocol.
   */
  Protocol: ProtocolEnum;
  /**
   * The network output TTL.
   */
  Ttl: number;
};
/**
 * Type definition for `AWS::MediaConnect::Bridge.BridgeNetworkSource`.
 * The source of the bridge. A network source originates at your premises.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridge-bridgenetworksource.html}
 */
export type BridgeNetworkSource = {
  /**
   * The network source multicast IP.
   */
  MulticastIp: string;
  /**
   * The name of the network source.
   */
  Name: string;
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
 * Type definition for `AWS::MediaConnect::Bridge.BridgeOutput`.
 * The output of the bridge.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridge-bridgeoutput.html}
 */
export type BridgeOutput = {
  /**
   * The output of the bridge. A network output is delivered to your premises.
   */
  NetworkOutput?: BridgeNetworkOutput;
};
/**
 * Type definition for `AWS::MediaConnect::Bridge.BridgeSource`.
 * The bridge's source.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridge-bridgesource.html}
 */
export type BridgeSource = {
  /**
   * The source of the bridge. A flow source originates in MediaConnect as an existing cloud flow.
   */
  FlowSource?: BridgeFlowSource;
  /**
   * The source of the bridge. A network source originates at your premises.
   */
  NetworkSource?: BridgeNetworkSource;
};
/**
 * Type definition for `AWS::MediaConnect::Bridge.BridgeStateEnum`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridge-bridgestateenum.html}
 */
export type BridgeStateEnum =
  | "CREATING"
  | "STANDBY"
  | "STARTING"
  | "DEPLOYING"
  | "ACTIVE"
  | "STOPPING"
  | "DELETING"
  | "DELETED"
  | "START_FAILED"
  | "START_PENDING"
  | "UPDATING";
/**
 * Type definition for `AWS::MediaConnect::Bridge.EgressGatewayBridge`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridge-egressgatewaybridge.html}
 */
export type EgressGatewayBridge = {
  /**
   * The maximum expected bitrate of the egress bridge.
   */
  MaxBitrate: number;
};
/**
 * Type definition for `AWS::MediaConnect::Bridge.FailoverConfig`.
 * The settings for source failover.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridge-failoverconfig.html}
 */
export type FailoverConfig = {
  /**
   * The type of failover you choose for this flow. FAILOVER allows switching between different streams.
   */
  FailoverMode: FailoverModeEnum;
  /**
   * The priority you want to assign to a source. You can have a primary stream and a backup stream or two equally prioritized streams.
   */
  SourcePriority?: SourcePriority;
  State?: FailoverConfigStateEnum;
};
/**
 * Type definition for `AWS::MediaConnect::Bridge.FailoverConfigStateEnum`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridge-failoverconfigstateenum.html}
 */
export type FailoverConfigStateEnum = "ENABLED" | "DISABLED";
/**
 * Type definition for `AWS::MediaConnect::Bridge.FailoverModeEnum`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridge-failovermodeenum.html}
 */
export type FailoverModeEnum = "FAILOVER";
/**
 * Type definition for `AWS::MediaConnect::Bridge.IngressGatewayBridge`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridge-ingressgatewaybridge.html}
 */
export type IngressGatewayBridge = {
  /**
   * The maximum expected bitrate of the ingress bridge.
   */
  MaxBitrate: number;
  /**
   * The maximum number of outputs on the ingress bridge.
   */
  MaxOutputs: number;
};
/**
 * Type definition for `AWS::MediaConnect::Bridge.ProtocolEnum`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridge-protocolenum.html}
 */
export type ProtocolEnum = "rtp-fec" | "rtp" | "udp";
/**
 * Type definition for `AWS::MediaConnect::Bridge.SourcePriority`.
 * The priority you want to assign to a source. You can have a primary stream and a backup stream or two equally prioritized streams.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridge-sourcepriority.html}
 */
export type SourcePriority = {
  /**
   * The name of the source you choose as the primary source for this flow.
   */
  PrimarySource?: string;
};
/**
 * Type definition for `AWS::MediaConnect::Bridge.VpcInterfaceAttachment`.
 * The settings for attaching a VPC interface to an resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridge-vpcinterfaceattachment.html}
 */
export type VpcInterfaceAttachment = {
  /**
   * The name of the VPC interface to use for this resource.
   */
  VpcInterfaceName?: string;
};
/**
 * Resource schema for AWS::MediaConnect::Bridge
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-bridge.html}
 */
export class MediaConnectBridge extends $Resource<
  "AWS::MediaConnect::Bridge",
  MediaConnectBridgeProperties,
  MediaConnectBridgeAttributes
> {
  public static readonly Type = "AWS::MediaConnect::Bridge";
  constructor(
    logicalId: string,
    properties: MediaConnectBridgeProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, MediaConnectBridge.Type, properties, options);
  }
}
