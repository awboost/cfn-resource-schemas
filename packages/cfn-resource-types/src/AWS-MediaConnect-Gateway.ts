import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::MediaConnect::Gateway
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-gateway.html}
 */
export type MediaConnectGatewayProperties = {
  /**
   * The range of IP addresses that contribute content or initiate output requests for flows communicating with this gateway. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
   */
  EgressCidrBlocks: string[];
  /**
   * The name of the gateway. This name can not be modified after the gateway is created.
   */
  Name: string;
  /**
   * The list of networks in the gateway.
   * @minLength `1`
   * @maxLength `4`
   */
  Networks: GatewayNetwork[];
};
/**
 * Attribute type definition for `AWS::MediaConnect::Gateway`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-gateway.html#aws-resource-mediaconnect-gateway-return-values}
 */
export type MediaConnectGatewayAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the gateway.
   */
  GatewayArn: string;
  /**
   * The current status of the gateway.
   */
  GatewayState:
    | "CREATING"
    | "ACTIVE"
    | "UPDATING"
    | "ERROR"
    | "DELETING"
    | "DELETED";
};
/**
 * Type definition for `AWS::MediaConnect::Gateway.GatewayNetwork`.
 * The network settings for a gateway.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-gateway-gatewaynetwork.html}
 */
export type GatewayNetwork = {
  /**
   * A unique IP address range to use for this network. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
   */
  CidrBlock: string;
  /**
   * The name of the network. This name is used to reference the network and must be unique among networks in this gateway.
   */
  Name: string;
};
/**
 * Resource schema for AWS::MediaConnect::Gateway
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-gateway.html}
 */
export class MediaConnectGateway extends $Resource<
  "AWS::MediaConnect::Gateway",
  MediaConnectGatewayProperties,
  MediaConnectGatewayAttributes
> {
  public static readonly Type = "AWS::MediaConnect::Gateway";
  constructor(
    logicalId: string,
    properties: MediaConnectGatewayProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, MediaConnectGateway.Type, properties, options);
  }
}
