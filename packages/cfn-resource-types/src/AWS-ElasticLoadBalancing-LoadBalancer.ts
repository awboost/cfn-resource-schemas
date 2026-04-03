import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::ElasticLoadBalancing::LoadBalancer
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-elb.html}
 */
export type ElasticLoadBalancingLoadBalancerProperties = {
  /**
   * Information about where and how access logs are stored for the load balancer.
   */
  AccessLoggingPolicy?: AccessLoggingPolicy;
  /**
   * Information about a policy for application-controlled session stickiness.
   */
  AppCookieStickinessPolicy?: AppCookieStickinessPolicy[];
  /**
   * The Availability Zones for a load balancer in a default VPC. For a load balancer in a nondefault VPC, specify Subnets instead.
   */
  AvailabilityZones?: string[];
  /**
   * If enabled, the load balancer allows existing requests to complete before the load balancer shifts traffic away from a deregistered or unhealthy instance.
   */
  ConnectionDrainingPolicy?: ConnectionDrainingPolicy;
  /**
   * If enabled, the load balancer allows the connections to remain idle (no data is sent over the connection) for the specified duration.
   */
  ConnectionSettings?: ConnectionSettings;
  /**
   * If enabled, the load balancer routes the request traffic evenly across all instances regardless of the Availability Zones.
   */
  CrossZone?: boolean;
  /**
   * The health check settings to use when evaluating the health of your EC2 instances.
   */
  HealthCheck?: HealthCheck;
  /**
   * The IDs of the instances for the load balancer.
   */
  Instances?: string[];
  /**
   * Information about a policy for duration-based session stickiness.
   */
  LBCookieStickinessPolicy?: LBCookieStickinessPolicy[];
  /**
   * The Listeners for the load balancer. You can specify at most one listener per port.
   */
  Listeners: Listeners[];
  /**
   * The name of the load balancer. This name must be unique within your set of load balancers for the region.
   */
  LoadBalancerName?: string;
  /**
   * The policies defined for your Classic Load Balancer. Specify only back-end server policies.
   */
  Policies?: Policies[];
  /**
   * The type of load balancer. Valid only for load balancers in a VPC.
   */
  Scheme?: string;
  /**
   * The security groups for the load balancer. Valid only for load balancers in a VPC.
   */
  SecurityGroups?: string[];
  /**
   * The IDs of the subnets for the load balancer. You can specify at most one subnet per Availability Zone.
   */
  Subnets?: string[];
  /**
   * The tags associated with a load balancer.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::ElasticLoadBalancing::LoadBalancer`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-elb.html}
 */
export type ElasticLoadBalancingLoadBalancerAttributes = {
  /**
   * The name of the Route 53 hosted zone that is associated with the load balancer. Internal-facing load balancers.
   */
  CanonicalHostedZoneName: string;
  /**
   * The ID of the Route 53 hosted zone name that is associated with the load balancer.
   */
  CanonicalHostedZoneNameID: string;
  /**
   * The DNS name for the load balancer
   */
  DNSName: string;
  SourceSecurityGroup: {
    /**
     * The name of the security group that you can use as part of your inbound rules for your load balancer's back-end instances.
     */
    GroupName: string;
    /**
     * The owner of the source security group.
     */
    OwnerAlias: string;
  };
};
/**
 * Type definition for `AWS::ElasticLoadBalancing::LoadBalancer.AccessLoggingPolicy`.
 * Information about where and how access logs are stored for the load balancer.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancing-loadbalancer-accessloggingpolicy.html}
 */
export type AccessLoggingPolicy = {
  /**
     * The interval for publishing the access logs. You can specify an interval of either 5 minutes or 60 minutes.
    
    Default: 60 minutes
     */
  EmitInterval?: number;
  /**
   * Specifies whether access logs are enabled for the load balancer.
   */
  Enabled: boolean;
  /**
   * The name of the Amazon S3 bucket where the access logs are stored.
   */
  S3BucketName: string;
  /**
   * The logical hierarchy you created for your Amazon S3 bucket, for example `my-bucket-prefix/prod`. If the prefix is not provided, the log is placed at the root level of the bucket.
   */
  S3BucketPrefix?: string;
};
/**
 * Type definition for `AWS::ElasticLoadBalancing::LoadBalancer.AppCookieStickinessPolicy`.
 * Information about a policy for application-controlled session stickiness.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancing-loadbalancer-appcookiestickinesspolicy.html}
 */
export type AppCookieStickinessPolicy = {
  /**
   * The name of the application cookie used for stickiness.
   */
  CookieName: string;
  /**
   * The mnemonic name for the policy being created. The name must be unique within a set of policies for this load balancer.
   */
  PolicyName: string;
};
/**
 * Type definition for `AWS::ElasticLoadBalancing::LoadBalancer.ConnectionDrainingPolicy`.
 * If enabled, the load balancer allows existing requests to complete before the load balancer shifts traffic away from a deregistered or unhealthy instance.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancing-loadbalancer-connectiondrainingpolicy.html}
 */
export type ConnectionDrainingPolicy = {
  /**
   * Specifies whether connection draining is enabled for the load balancer.
   */
  Enabled: boolean;
  /**
   * The maximum time, in seconds, to keep the existing connections open before deregistering the instances.
   */
  Timeout?: number;
};
/**
 * Type definition for `AWS::ElasticLoadBalancing::LoadBalancer.ConnectionSettings`.
 * If enabled, the load balancer allows the connections to remain idle (no data is sent over the connection) for the specified duration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancing-loadbalancer-connectionsettings.html}
 */
export type ConnectionSettings = {
  /**
   * The time, in seconds, that the connection is allowed to be idle (no data has been sent over the connection) before it is closed by the load balancer.
   */
  IdleTimeout: number;
};
/**
 * Type definition for `AWS::ElasticLoadBalancing::LoadBalancer.HealthCheck`.
 * The health check settings to use when evaluating the health of your EC2 instances.

Update requires replacement if you did not previously specify health check settings or if you are removing the health check settings. Otherwise, update requires no interruption.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancing-loadbalancer-healthcheck.html}
 */
export type HealthCheck = {
  /**
   * The number of consecutive health checks successes required before moving the instance to the `Healthy` state.
   */
  HealthyThreshold: string;
  /**
   * The approximate interval, in seconds, between health checks of an individual instance.
   */
  Interval: string;
  /**
   * The instance being checked.
   */
  Target: string;
  /**
     * The amount of time, in seconds, during which no response means a failed health check.
    
    This value must be less than the `Interval` value.
     */
  Timeout: string;
  /**
   * The number of consecutive health check failures required before moving the instance to the `Unhealthy` state.
   */
  UnhealthyThreshold: string;
};
/**
 * Type definition for `AWS::ElasticLoadBalancing::LoadBalancer.LBCookieStickinessPolicy`.
 * Information about a policy for duration-based session stickiness.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancing-loadbalancer-lbcookiestickinesspolicy.html}
 */
export type LBCookieStickinessPolicy = {
  /**
   * The time period, in seconds, after which the cookie should be considered stale. If this parameter is not specified, the stickiness session lasts for the duration of the browser session.
   */
  CookieExpirationPeriod?: string;
  /**
   * The name of the policy. This name must be unique within the set of policies for this load balancer.
   */
  PolicyName?: string;
};
/**
 * Type definition for `AWS::ElasticLoadBalancing::LoadBalancer.Listeners`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancing-loadbalancer-listeners.html}
 */
export type Listeners = {
  /**
   * The port on which the instance is listening.
   */
  InstancePort: string;
  /**
     * The protocol to use for routing traffic to instances: HTTP, HTTPS, TCP, or SSL.
    
    If the front-end protocol is TCP or SSL, the back-end protocol must be TCP or SSL. If the front-end protocol is HTTP or HTTPS, the back-end protocol must be HTTP or HTTPS.
    
    If there is another listener with the same `InstancePort` whose `InstanceProtocol` is secure, (HTTPS or SSL), the listener's `InstanceProtocol` must also be secure.
    
    If there is another listener with the same `InstancePort` whose `InstanceProtocol` is HTTP or TCP, the listener's `InstanceProtocol` must be HTTP or TCP.
     */
  InstanceProtocol?: string;
  /**
   * The port on which the load balancer is listening. On EC2-VPC, you can specify any port from the range 1-65535. On EC2-Classic, you can specify any port from the following list: 25, 80, 443, 465, 587, 1024-65535.
   */
  LoadBalancerPort: string;
  /**
   * The names of the policies to associate with the listener.
   */
  PolicyNames?: string[];
  /**
   * The load balancer transport protocol to use for routing: HTTP, HTTPS, TCP, or SSL.
   */
  Protocol: string;
  /**
   * The Amazon Resource Name (ARN) of the server certificate.
   */
  SSLCertificateId?: string;
};
/**
 * Type definition for `AWS::ElasticLoadBalancing::LoadBalancer.Policies`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancing-loadbalancer-policies.html}
 */
export type Policies = {
  /**
   * The policy attributes.
   */
  Attributes: PolicyItem[];
  /**
   * The instance ports for the policy. Required only for some policy types.
   */
  InstancePorts?: string[];
  /**
   * The load balancer ports for the policy. Required only for some policy types.
   */
  LoadBalancerPorts?: string[];
  /**
   * The name of the policy.
   */
  PolicyName: string;
  /**
   * The name of the policy type.
   */
  PolicyType: string;
};
/**
 * Type definition for `AWS::ElasticLoadBalancing::LoadBalancer.PolicyItem`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancing-loadbalancer-policyitem.html}
 */
export type PolicyItem = {
  Name?: string;
  Value?: string;
};
/**
 * Type definition for `AWS::ElasticLoadBalancing::LoadBalancer.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancing-loadbalancer-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with `aws:`. You can use any of the following characters: the set of Unicode letters, digits, whitespace, `_`, `.`, `/`, `=`, `+`, and `-`.
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that's 1 to 256 characters in length.
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::ElasticLoadBalancing::LoadBalancer
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-elb.html}
 */
export class ElasticLoadBalancingLoadBalancer extends $Resource<
  "AWS::ElasticLoadBalancing::LoadBalancer",
  ElasticLoadBalancingLoadBalancerProperties,
  ElasticLoadBalancingLoadBalancerAttributes
> {
  public static readonly Type = "AWS::ElasticLoadBalancing::LoadBalancer";
  constructor(
    logicalId: string,
    properties: ElasticLoadBalancingLoadBalancerProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ElasticLoadBalancingLoadBalancer.Type,
      properties,
      options,
    );
  }
}
