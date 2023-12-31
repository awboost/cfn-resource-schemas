import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::EC2::VPCEndpoint
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpoint.html}
 */
export type EC2VPCEndpointProperties = {
  /**
   * A policy to attach to the endpoint that controls access to the service.
   */
  PolicyDocument?: string | Record<string, any>;
  /**
   * Indicate whether to associate a private hosted zone with the specified VPC.
   */
  PrivateDnsEnabled?: boolean;
  /**
   * One or more route table IDs.
   */
  RouteTableIds?: string[];
  /**
   * The ID of one or more security groups to associate with the endpoint network interface.
   */
  SecurityGroupIds?: string[];
  /**
   * The service name.
   */
  ServiceName: string;
  /**
   * The ID of one or more subnets in which to create an endpoint network interface.
   */
  SubnetIds?: string[];
  VpcEndpointType?: "Interface" | "Gateway" | "GatewayLoadBalancer";
  /**
   * The ID of the VPC in which the endpoint will be used.
   */
  VpcId: string;
};
/**
 * Attribute type definition for `AWS::EC2::VPCEndpoint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpoint.html#aws-resource-ec2-vpcendpoint-return-values}
 */
export type EC2VPCEndpointAttributes = {
  CreationTimestamp: string;
  DnsEntries: string[];
  Id: string;
  NetworkInterfaceIds: string[];
};
/**
 * Resource Type definition for AWS::EC2::VPCEndpoint
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpoint.html}
 */
export class EC2VPCEndpoint extends $Resource<
  "AWS::EC2::VPCEndpoint",
  EC2VPCEndpointProperties,
  EC2VPCEndpointAttributes
> {
  public static readonly Type = "AWS::EC2::VPCEndpoint";
  constructor(
    logicalId: string,
    properties: EC2VPCEndpointProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2VPCEndpoint.Type, properties, options);
  }
}
