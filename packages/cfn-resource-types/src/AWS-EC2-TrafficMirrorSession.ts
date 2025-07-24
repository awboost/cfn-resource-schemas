import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::EC2::TrafficMirrorSession
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-trafficmirrorsession.html}
 */
export type EC2TrafficMirrorSessionProperties = {
  /**
   * The description of the Traffic Mirror session.
   */
  Description?: string;
  /**
   * The ID of the source network interface.
   */
  NetworkInterfaceId: string;
  /**
   * The ID of the account that owns the Traffic Mirror session.
   */
  OwnerId?: string;
  /**
   * The number of bytes in each packet to mirror.
   */
  PacketLength?: number;
  /**
   * The session number determines the order in which sessions are evaluated when an interface is used by multiple sessions. The first session with a matching filter is the one that mirrors the packets.
   */
  SessionNumber: number;
  /**
   * The tags assigned to the Traffic Mirror session.
   */
  Tags?: Tag[];
  /**
   * The ID of a Traffic Mirror filter.
   */
  TrafficMirrorFilterId: string;
  /**
   * The ID of a Traffic Mirror target.
   */
  TrafficMirrorTargetId: string;
  /**
   * The VXLAN ID for the Traffic Mirror session.
   */
  VirtualNetworkId?: number;
};
/**
 * Attribute type definition for `AWS::EC2::TrafficMirrorSession`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-trafficmirrorsession.html#aws-resource-ec2-trafficmirrorsession-return-values}
 */
export type EC2TrafficMirrorSessionAttributes = {
  /**
   * The ID of a Traffic Mirror session.
   */
  Id: string;
};
/**
 * Type definition for `AWS::EC2::TrafficMirrorSession.Tag`.
 * A key-value pair to associate with a traffic mirror session resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-trafficmirrorsession-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource schema for AWS::EC2::TrafficMirrorSession
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-trafficmirrorsession.html}
 */
export class EC2TrafficMirrorSession extends $Resource<
  "AWS::EC2::TrafficMirrorSession",
  EC2TrafficMirrorSessionProperties,
  EC2TrafficMirrorSessionAttributes
> {
  public static readonly Type = "AWS::EC2::TrafficMirrorSession";
  constructor(
    logicalId: string,
    properties: EC2TrafficMirrorSessionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2TrafficMirrorSession.Type, properties, options);
  }
}
