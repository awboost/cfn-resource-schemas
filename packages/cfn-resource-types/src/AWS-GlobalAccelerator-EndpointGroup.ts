import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::GlobalAccelerator::EndpointGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-endpointgroup.html}
 */
export type GlobalAcceleratorEndpointGroupProperties = {
  /**
   * The list of endpoint objects.
   */
  EndpointConfigurations?: EndpointConfiguration[];
  /**
   * The name of the AWS Region where the endpoint group is located
   */
  EndpointGroupRegion: string;
  /**
   * The time in seconds between each health check for an endpoint. Must be a value of 10 or 30
   */
  HealthCheckIntervalSeconds?: number;
  HealthCheckPath?: string;
  /**
   * The port that AWS Global Accelerator uses to check the health of endpoints in this endpoint group.
   * @min `-1`
   * @max `65535`
   */
  HealthCheckPort?: number;
  /**
   * The protocol that AWS Global Accelerator uses to check the health of endpoints in this endpoint group.
   */
  HealthCheckProtocol?: "TCP" | "HTTP" | "HTTPS";
  /**
   * The Amazon Resource Name (ARN) of the listener
   */
  ListenerArn: string;
  PortOverrides?: PortOverride[];
  /**
   * The number of consecutive health checks required to set the state of the endpoint to unhealthy.
   */
  ThresholdCount?: number;
  /**
   * The percentage of traffic to sent to an AWS Region
   * @min `0`
   * @max `100`
   */
  TrafficDialPercentage?: number;
};
/**
 * Attribute type definition for `AWS::GlobalAccelerator::EndpointGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-endpointgroup.html#aws-resource-globalaccelerator-endpointgroup-return-values}
 */
export type GlobalAcceleratorEndpointGroupAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the endpoint group
   */
  EndpointGroupArn: string;
};
/**
 * Type definition for `AWS::GlobalAccelerator::EndpointGroup.EndpointConfiguration`.
 * The configuration for a given endpoint
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-globalaccelerator-endpointgroup-endpointconfiguration.html}
 */
export type EndpointConfiguration = {
  /**
   * Attachment ARN that provides access control to the cross account endpoint. Not required for resources hosted in the same account as the endpoint group.
   */
  AttachmentArn?: string;
  /**
   * true if client ip should be preserved
   */
  ClientIPPreservationEnabled?: boolean;
  /**
   * Id of the endpoint. For Network/Application Load Balancer this value is the ARN.  For EIP, this value is the allocation ID.  For EC2 instances, this is the EC2 instance ID
   */
  EndpointId: string;
  /**
   * The weight for the endpoint.
   * @min `0`
   * @max `255`
   */
  Weight?: number;
};
/**
 * Type definition for `AWS::GlobalAccelerator::EndpointGroup.PortOverride`.
 * listener to endpoint port mapping.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-globalaccelerator-endpointgroup-portoverride.html}
 */
export type PortOverride = {
  /**
   * A network port number
   * @min `0`
   * @max `65535`
   */
  EndpointPort: number;
  /**
   * A network port number
   * @min `0`
   * @max `65535`
   */
  ListenerPort: number;
};
/**
 * Resource Type definition for AWS::GlobalAccelerator::EndpointGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-endpointgroup.html}
 */
export class GlobalAcceleratorEndpointGroup extends $Resource<
  "AWS::GlobalAccelerator::EndpointGroup",
  GlobalAcceleratorEndpointGroupProperties,
  GlobalAcceleratorEndpointGroupAttributes
> {
  public static readonly Type = "AWS::GlobalAccelerator::EndpointGroup";
  constructor(
    logicalId: string,
    properties: GlobalAcceleratorEndpointGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, GlobalAcceleratorEndpointGroup.Type, properties, options);
  }
}
