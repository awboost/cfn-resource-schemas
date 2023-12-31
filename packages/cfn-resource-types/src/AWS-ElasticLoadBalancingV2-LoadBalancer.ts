import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::ElasticLoadBalancingV2::LoadBalancer
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-loadbalancer.html}
 */
export type ElasticLoadBalancingV2LoadBalancerProperties = {
  /**
   * The type of IP addresses used by the subnets for your load balancer. The possible values are ipv4 (for IPv4 addresses) and dualstack (for IPv4 and IPv6 addresses).
   */
  IpAddressType?: string;
  /**
   * The load balancer attributes.
   */
  LoadBalancerAttributes?: LoadBalancerAttribute[];
  /**
   * The name of the load balancer.
   */
  Name?: string;
  /**
   * The nodes of an Internet-facing load balancer have public IP addresses. The DNS name of an Internet-facing load balancer is publicly resolvable to the public IP addresses of the nodes. Therefore, Internet-facing load balancers can route requests from clients over the internet. The nodes of an internal load balancer have only private IP addresses. The DNS name of an internal load balancer is publicly resolvable to the private IP addresses of the nodes. Therefore, internal load balancers can route requests only from clients with access to the VPC for the load balancer. The default is an Internet-facing load balancer.
   */
  Scheme?: string;
  /**
   * The IDs of the security groups for the load balancer.
   */
  SecurityGroups?: string[];
  /**
   * The IDs of the public subnets. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings, but not both.
   */
  SubnetMappings?: SubnetMapping[];
  /**
   * The IDs of the public subnets. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings, but not both. To specify an Elastic IP address, specify subnet mappings instead of subnets.
   */
  Subnets?: string[];
  /**
   * The tags to assign to the load balancer.
   */
  Tags?: Tag[];
  /**
   * The type of load balancer. The default is application.
   */
  Type?: string;
};
/**
 * Attribute type definition for `AWS::ElasticLoadBalancingV2::LoadBalancer`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-loadbalancer.html#aws-resource-elasticloadbalancingv2-loadbalancer-return-values}
 */
export type ElasticLoadBalancingV2LoadBalancerAttributes = {
  /**
   * The ID of the Amazon Route 53 hosted zone associated with the load balancer.
   */
  CanonicalHostedZoneID: string;
  /**
   * The public DNS name of the load balancer.
   */
  DNSName: string;
  /**
   * The Amazon Resource Name (ARN) of the load balancer.
   */
  LoadBalancerArn: string;
  /**
   * The full name of the load balancer.
   */
  LoadBalancerFullName: string;
  /**
   * The name of the load balancer.
   */
  LoadBalancerName: string;
};
/**
 * Type definition for `AWS::ElasticLoadBalancingV2::LoadBalancer.LoadBalancerAttribute`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-loadbalancer-loadbalancerattribute.html}
 */
export type LoadBalancerAttribute = {
  Key?: string;
  Value?: string;
};
/**
 * Type definition for `AWS::ElasticLoadBalancingV2::LoadBalancer.SubnetMapping`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-loadbalancer-subnetmapping.html}
 */
export type SubnetMapping = {
  AllocationId?: string;
  IPv6Address?: string;
  PrivateIPv4Address?: string;
  SubnetId: string;
};
/**
 * Type definition for `AWS::ElasticLoadBalancingV2::LoadBalancer.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-loadbalancer-tag.html}
 */
export type Tag = {
  Key: string;
  Value?: string;
};
/**
 * Resource Type definition for AWS::ElasticLoadBalancingV2::LoadBalancer
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-loadbalancer.html}
 */
export class ElasticLoadBalancingV2LoadBalancer extends $Resource<
  "AWS::ElasticLoadBalancingV2::LoadBalancer",
  ElasticLoadBalancingV2LoadBalancerProperties,
  ElasticLoadBalancingV2LoadBalancerAttributes
> {
  public static readonly Type = "AWS::ElasticLoadBalancingV2::LoadBalancer";
  public static readonly AttributeNames = [
    "CanonicalHostedZoneID" as const,
    "DNSName" as const,
    "LoadBalancerArn" as const,
    "LoadBalancerFullName" as const,
    "LoadBalancerName" as const,
  ];
  constructor(
    logicalId: string,
    properties: ElasticLoadBalancingV2LoadBalancerProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ElasticLoadBalancingV2LoadBalancer.Type,
      properties,
      ElasticLoadBalancingV2LoadBalancer.AttributeNames,
      options,
    );
  }
}
