import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::ElasticLoadBalancingV2::LoadBalancer`.
 * Specifies an Application Load Balancer, a Network Load Balancer, or a Gateway Load Balancer.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-loadbalancer.html}
 */
export type ElasticLoadBalancingV2LoadBalancerProperties = {
  /**
   * Indicates whether to evaluate inbound security group rules for traffic sent to a Network Load Balancer through privatelink.
   */
  EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic?: string;
  /**
   * The IP address type. The possible values are ``ipv4`` (for IPv4 addresses) and ``dualstack`` (for IPv4 and IPv6 addresses). You can’t specify ``dualstack`` for a load balancer with a UDP or TCP_UDP listener.
   */
  IpAddressType?: string;
  /**
   * The load balancer attributes.
   */
  LoadBalancerAttributes?: LoadBalancerAttribute[];
  /**
     * The name of the load balancer. This name must be unique per region per account, can have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, must not begin or end with a hyphen, and must not begin with "internal-".
     If you don't specify a name, AWS CloudFormation generates a unique physical ID for the load balancer. If you specify a name, you cannot perform updates that require replacement of this resource, but you can perform other updates. To replace the resource, specify a new name.
     */
  Name?: string;
  /**
     * The nodes of an Internet-facing load balancer have public IP addresses. The DNS name of an Internet-facing load balancer is publicly resolvable to the public IP addresses of the nodes. Therefore, Internet-facing load balancers can route requests from clients over the internet.
     The nodes of an internal load balancer have only private IP addresses. The DNS name of an internal load balancer is publicly resolvable to the private IP addresses of the nodes. Therefore, internal load balancers can route requests only from clients with access to the VPC for the load balancer.
     The default is an Internet-facing load balancer.
     You cannot specify a scheme for a Gateway Load Balancer.
     */
  Scheme?: string;
  /**
   * [Application Load Balancers and Network Load Balancers] The IDs of the security groups for the load balancer.
   */
  SecurityGroups?: string[];
  /**
     * The IDs of the public subnets. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings, but not both.
     [Application Load Balancers] You must specify subnets from at least two Availability Zones. You cannot specify Elastic IP addresses for your subnets.
     [Application Load Balancers on Outposts] You must specify one Outpost subnet.
     [Application Load Balancers on Local Zones] You can specify subnets from one or more Local Zones.
     [Network Load Balancers] You can specify subnets from one or more Availability Zones. You can specify one Elastic IP address per subnet if you need static IP addresses for your internet-facing load balancer. For internal load balancers, you can specify one private IP address per subnet from the IPv4 range of the subnet. For internet-facing load balancer, you can specify one IPv6 address per subnet.
     [Gateway Load Balancers] You can specify subnets from one or more Availability Zones. You cannot specify Elastic IP
     */
  SubnetMappings?: SubnetMapping[];
  /**
     * The IDs of the public subnets. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings, but not both. To specify an Elastic IP address, specify subnet mappings instead of subnets.
     [Application Load Balancers] You must specify subnets from at least two Availability Zones.
     [Application Load Balancers on Outposts] You must specify one Outpost subnet.
     [Application Load Balancers on Local Zones] You can specify subnets from one or more Local Zones.
     [Network Load Balancers] You can specify subnets from one or more Availability Zones.
     [Gateway Load Balancers] You can specify subnets from one or more Availability Zones.
     */
  Subnets?: string[];
  /**
   * The tags to assign to the load balancer.
   */
  Tags?: Tag[];
  /**
   * The type of load balancer. The default is ``application``.
   */
  Type?: string;
};
/**
 * Attribute type definition for `AWS::ElasticLoadBalancingV2::LoadBalancer`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-loadbalancer.html}
 */
export type ElasticLoadBalancingV2LoadBalancerAttributes = {
  CanonicalHostedZoneID: string;
  DNSName: string;
  LoadBalancerArn: string;
  LoadBalancerFullName: string;
  LoadBalancerName: string;
};
/**
 * Type definition for `AWS::ElasticLoadBalancingV2::LoadBalancer.LoadBalancerAttribute`.
 * Specifies an attribute for an Application Load Balancer, a Network Load Balancer, or a Gateway Load Balancer.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-loadbalancer-loadbalancerattribute.html}
 */
export type LoadBalancerAttribute = {
  /**
     * The name of the attribute.
     The following attributes are supported by all load balancers:
      +   ``deletion_protection.enabled`` - Indicates whether deletion protection is enabled. The value is ``true`` or ``false``. The default is ``false``.
      +   ``load_balancing.cross_zone.enabled`` - Indicates whether cross-zone load balancing is enabled. The possible values are ``true`` and ``false``. The default for Network Load Balancers and Gateway Load Balancers is ``false``. The default for Application Load Balancers is ``true``, and cannot be changed.
      
     The following attributes are supported by both Application Load Balancers and Network Load Balancers:
      +   ``access_logs.s3.enabled`` - Indicates whether access logs are enabled. The value is ``true`` or ``false``. The default is ``false``.
      +   ``access_logs.s3.bucket`` - The name of the S3 bucket for the access logs. This attribute is required if access logs are enabled. The bucket must exist in the same region as the load balancer and h
     */
  Key?: string;
  /**
   * The value of the attribute.
   */
  Value?: string;
};
/**
 * Type definition for `AWS::ElasticLoadBalancingV2::LoadBalancer.SubnetMapping`.
 * Specifies a subnet for a load balancer.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-loadbalancer-subnetmapping.html}
 */
export type SubnetMapping = {
  /**
   * [Network Load Balancers] The allocation ID of the Elastic IP address for an internet-facing load balancer.
   */
  AllocationId?: string;
  /**
   * [Network Load Balancers] The IPv6 address.
   */
  IPv6Address?: string;
  /**
   * [Network Load Balancers] The private IPv4 address for an internal load balancer.
   */
  PrivateIPv4Address?: string;
  /**
   * The ID of the subnet.
   */
  SubnetId: string;
};
/**
 * Type definition for `AWS::ElasticLoadBalancingV2::LoadBalancer.Tag`.
 * Information about a tag.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-loadbalancer-tag.html}
 */
export type Tag = {
  /**
   * The key of the tag.
   */
  Key: string;
  /**
   * The value of the tag.
   */
  Value?: string;
};
/**
 * Resource type definition for `AWS::ElasticLoadBalancingV2::LoadBalancer`.
 * Specifies an Application Load Balancer, a Network Load Balancer, or a Gateway Load Balancer.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-loadbalancer.html}
 */
export class ElasticLoadBalancingV2LoadBalancer extends $Resource<
  "AWS::ElasticLoadBalancingV2::LoadBalancer",
  ElasticLoadBalancingV2LoadBalancerProperties,
  ElasticLoadBalancingV2LoadBalancerAttributes
> {
  public static readonly Type = "AWS::ElasticLoadBalancingV2::LoadBalancer";
  constructor(
    logicalId: string,
    properties: ElasticLoadBalancingV2LoadBalancerProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ElasticLoadBalancingV2LoadBalancer.Type,
      properties,
      options,
    );
  }
}
