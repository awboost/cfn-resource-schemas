import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::Lightsail::LoadBalancer
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-loadbalancer.html}
 */
export type LightsailLoadBalancerProperties = {
  /**
   * The names of the instances attached to the load balancer.
   */
  AttachedInstances?: string[];
  /**
   * The path you provided to perform the load balancer health check. If you didn't specify a health check path, Lightsail uses the root path of your website (e.g., "/").
   */
  HealthCheckPath?: string;
  /**
   * The instance port where you're creating your load balancer.
   */
  InstancePort: number;
  /**
   * The IP address type for the load balancer. The possible values are ipv4 for IPv4 only, and dualstack for IPv4 and IPv6. The default value is dualstack.
   */
  IpAddressType?: string;
  /**
   * The name of your load balancer.
   * @pattern `\w[\w\-]*\w`
   */
  LoadBalancerName: string;
  /**
   * Configuration option to enable session stickiness.
   */
  SessionStickinessEnabled?: boolean;
  /**
   * Configuration option to adjust session stickiness cookie duration parameter.
   */
  SessionStickinessLBCookieDurationSeconds?: string;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
  /**
   * The name of the TLS policy to apply to the load balancer.
   */
  TlsPolicyName?: string;
};
/**
 * Attribute type definition for `AWS::Lightsail::LoadBalancer`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-loadbalancer.html#aws-resource-lightsail-loadbalancer-return-values}
 */
export type LightsailLoadBalancerAttributes = {
  LoadBalancerArn: string;
};
/**
 * Type definition for `AWS::Lightsail::LoadBalancer.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-loadbalancer-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @maxLength `256`
   */
  Value?: string;
};
/**
 * Resource Type definition for AWS::Lightsail::LoadBalancer
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-loadbalancer.html}
 */
export class LightsailLoadBalancer extends $Resource<
  "AWS::Lightsail::LoadBalancer",
  LightsailLoadBalancerProperties,
  LightsailLoadBalancerAttributes
> {
  public static readonly Type = "AWS::Lightsail::LoadBalancer";
  public static readonly AttributeNames = ["LoadBalancerArn" as const];
  constructor(
    logicalId: string,
    properties: LightsailLoadBalancerProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      LightsailLoadBalancer.Type,
      properties,
      LightsailLoadBalancer.AttributeNames,
      options,
    );
  }
}
