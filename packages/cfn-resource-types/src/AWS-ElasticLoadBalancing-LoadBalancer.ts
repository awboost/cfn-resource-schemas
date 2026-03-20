import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::ElasticLoadBalancing::LoadBalancer
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html}
 */
export type ElasticLoadBalancingLoadBalancerProperties = {
  AccessLoggingPolicy?: AccessLoggingPolicy;
  AppCookieStickinessPolicy?: AppCookieStickinessPolicy[];
  AvailabilityZones?: string[];
  ConnectionDrainingPolicy?: ConnectionDrainingPolicy;
  ConnectionSettings?: ConnectionSettings;
  CrossZone?: boolean;
  HealthCheck?: HealthCheck;
  Instances?: string[];
  LBCookieStickinessPolicy?: LBCookieStickinessPolicy[];
  Listeners: Listeners[];
  LoadBalancerName?: string;
  Policies?: Policies[];
  Scheme?: string;
  SecurityGroups?: string[];
  SourceSecurityGroupGroupName?: string;
  SourceSecurityGroupOwnerAlias?: string;
  Subnets?: string[];
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::ElasticLoadBalancing::LoadBalancer`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#aws-resource-elasticloadbalancing-loadbalancer-return-values}
 */
export type ElasticLoadBalancingLoadBalancerAttributes = {
  CanonicalHostedZoneName: string;
  CanonicalHostedZoneNameID: string;
  DNSName: string;
  Id: string;
};
/**
 * Type definition for `AWS::ElasticLoadBalancing::LoadBalancer.AccessLoggingPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancing-loadbalancer-accessloggingpolicy.html}
 */
export type AccessLoggingPolicy = {
  EmitInterval?: number;
  Enabled: boolean;
  S3BucketName: string;
  S3BucketPrefix?: string;
};
/**
 * Type definition for `AWS::ElasticLoadBalancing::LoadBalancer.AppCookieStickinessPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancing-loadbalancer-appcookiestickinesspolicy.html}
 */
export type AppCookieStickinessPolicy = {
  CookieName: string;
  PolicyName: string;
};
/**
 * Type definition for `AWS::ElasticLoadBalancing::LoadBalancer.ConnectionDrainingPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancing-loadbalancer-connectiondrainingpolicy.html}
 */
export type ConnectionDrainingPolicy = {
  Enabled: boolean;
  Timeout?: number;
};
/**
 * Type definition for `AWS::ElasticLoadBalancing::LoadBalancer.ConnectionSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancing-loadbalancer-connectionsettings.html}
 */
export type ConnectionSettings = {
  IdleTimeout: number;
};
/**
 * Type definition for `AWS::ElasticLoadBalancing::LoadBalancer.HealthCheck`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancing-loadbalancer-healthcheck.html}
 */
export type HealthCheck = {
  HealthyThreshold: string;
  Interval: string;
  Target: string;
  Timeout: string;
  UnhealthyThreshold: string;
};
/**
 * Type definition for `AWS::ElasticLoadBalancing::LoadBalancer.LBCookieStickinessPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancing-loadbalancer-lbcookiestickinesspolicy.html}
 */
export type LBCookieStickinessPolicy = {
  CookieExpirationPeriod?: string;
  PolicyName?: string;
};
/**
 * Type definition for `AWS::ElasticLoadBalancing::LoadBalancer.Listeners`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancing-loadbalancer-listeners.html}
 */
export type Listeners = {
  InstancePort: string;
  InstanceProtocol?: string;
  LoadBalancerPort: string;
  PolicyNames?: string[];
  Protocol: string;
  SSLCertificateId?: string;
};
/**
 * Type definition for `AWS::ElasticLoadBalancing::LoadBalancer.Policies`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancing-loadbalancer-policies.html}
 */
export type Policies = {
  Attributes: Record<string, any>[];
  InstancePorts?: string[];
  LoadBalancerPorts?: string[];
  PolicyName: string;
  PolicyType: string;
};
/**
 * Type definition for `AWS::ElasticLoadBalancing::LoadBalancer.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancing-loadbalancer-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::ElasticLoadBalancing::LoadBalancer
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html}
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
