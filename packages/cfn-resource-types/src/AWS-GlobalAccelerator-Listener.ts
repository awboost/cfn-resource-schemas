import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::GlobalAccelerator::Listener
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-listener.html}
 */
export type GlobalAcceleratorListenerProperties = {
  /**
   * The Amazon Resource Name (ARN) of the accelerator.
   */
  AcceleratorArn: string;
  /**
   * Client affinity lets you direct all requests from a user to the same endpoint.
   */
  ClientAffinity?: "NONE" | "SOURCE_IP";
  PortRanges: PortRange[];
  /**
   * The protocol for the listener.
   */
  Protocol: "TCP" | "UDP";
};
/**
 * Attribute type definition for `AWS::GlobalAccelerator::Listener`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-listener.html#aws-resource-globalaccelerator-listener-return-values}
 */
export type GlobalAcceleratorListenerAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the listener.
   */
  ListenerArn: string;
};
/**
 * Type definition for `AWS::GlobalAccelerator::Listener.PortRange`.
 * A port range to support for connections from  clients to your accelerator.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-globalaccelerator-listener-portrange.html}
 */
export type PortRange = {
  /**
   * A network port number
   * @max `65535`
   */
  FromPort: number;
  /**
   * A network port number
   * @max `65535`
   */
  ToPort: number;
};
/**
 * Resource Type definition for AWS::GlobalAccelerator::Listener
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-listener.html}
 */
export class GlobalAcceleratorListener extends $Resource<
  "AWS::GlobalAccelerator::Listener",
  GlobalAcceleratorListenerProperties,
  GlobalAcceleratorListenerAttributes
> {
  public static readonly Type = "AWS::GlobalAccelerator::Listener";
  public static readonly AttributeNames = ["ListenerArn" as const];
  constructor(
    logicalId: string,
    properties: GlobalAcceleratorListenerProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      GlobalAcceleratorListener.Type,
      properties,
      GlobalAcceleratorListener.AttributeNames,
      options,
    );
  }
}
