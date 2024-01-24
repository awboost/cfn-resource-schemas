import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::MediaConnect::BridgeOutput
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-bridgeoutput.html}
 */
export type MediaConnectBridgeOutputProperties = {
  /**
   * The Amazon Resource Number (ARN) of the bridge.
   */
  BridgeArn: string;
  /**
   * The network output name.
   */
  Name: string;
  /**
   * The output of the bridge.
   */
  NetworkOutput: BridgeNetworkOutput;
};
/**
 * Type definition for `AWS::MediaConnect::BridgeOutput.BridgeNetworkOutput`.
 * The output of the bridge. A network output is delivered to your premises.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridgeoutput-bridgenetworkoutput.html}
 */
export type BridgeNetworkOutput = {
  /**
   * The network output IP Address.
   */
  IpAddress: string;
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
  Protocol: "rtp-fec" | "rtp" | "udp";
  /**
   * The network output TTL.
   */
  Ttl: number;
};
/**
 * Resource schema for AWS::MediaConnect::BridgeOutput
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-bridgeoutput.html}
 */
export class MediaConnectBridgeOutput extends $Resource<
  "AWS::MediaConnect::BridgeOutput",
  MediaConnectBridgeOutputProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::MediaConnect::BridgeOutput";
  constructor(
    logicalId: string,
    properties: MediaConnectBridgeOutputProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, MediaConnectBridgeOutput.Type, properties, options);
  }
}
