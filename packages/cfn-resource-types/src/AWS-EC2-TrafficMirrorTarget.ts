import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::EC2::TrafficMirrorTarget`.
 * The description of the Traffic Mirror target.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-trafficmirrortarget.html}
 */
export type EC2TrafficMirrorTargetProperties = {
  /**
   * The description of the Traffic Mirror target.
   */
  Description?: string;
  /**
   * The ID of the Gateway Load Balancer endpoint.
   */
  GatewayLoadBalancerEndpointId?: string;
  /**
   * The network interface ID that is associated with the target.
   */
  NetworkInterfaceId?: string;
  /**
   * The Amazon Resource Name (ARN) of the Network Load Balancer that is associated with the target.
   */
  NetworkLoadBalancerArn?: string;
  /**
   *  The tags to assign to the Traffic Mirror target.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::EC2::TrafficMirrorTarget`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-trafficmirrortarget.html#aws-resource-ec2-trafficmirrortarget-return-values}
 */
export type EC2TrafficMirrorTargetAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::EC2::TrafficMirrorTarget.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-trafficmirrortarget-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource type definition for `AWS::EC2::TrafficMirrorTarget`.
 * The description of the Traffic Mirror target.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-trafficmirrortarget.html}
 */
export class EC2TrafficMirrorTarget extends $Resource<
  "AWS::EC2::TrafficMirrorTarget",
  EC2TrafficMirrorTargetProperties,
  EC2TrafficMirrorTargetAttributes
> {
  public static readonly Type = "AWS::EC2::TrafficMirrorTarget";
  constructor(
    logicalId: string,
    properties: EC2TrafficMirrorTargetProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2TrafficMirrorTarget.Type, properties, options);
  }
}
