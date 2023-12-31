import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::EC2::TrafficMirrorSession
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-trafficmirrorsession.html}
 */
export type EC2TrafficMirrorSessionProperties = {
  Description?: string;
  NetworkInterfaceId: string;
  PacketLength?: number;
  SessionNumber: number;
  Tags?: Tag[];
  TrafficMirrorFilterId: string;
  TrafficMirrorTargetId: string;
  VirtualNetworkId?: number;
};
/**
 * Attribute type definition for `AWS::EC2::TrafficMirrorSession`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-trafficmirrorsession.html#aws-resource-ec2-trafficmirrorsession-return-values}
 */
export type EC2TrafficMirrorSessionAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::EC2::TrafficMirrorSession.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-trafficmirrorsession-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::EC2::TrafficMirrorSession
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-trafficmirrorsession.html}
 */
export class EC2TrafficMirrorSession extends $Resource<
  "AWS::EC2::TrafficMirrorSession",
  EC2TrafficMirrorSessionProperties,
  EC2TrafficMirrorSessionAttributes
> {
  public static readonly Type = "AWS::EC2::TrafficMirrorSession";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: EC2TrafficMirrorSessionProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      EC2TrafficMirrorSession.Type,
      properties,
      EC2TrafficMirrorSession.AttributeNames,
      options,
    );
  }
}
