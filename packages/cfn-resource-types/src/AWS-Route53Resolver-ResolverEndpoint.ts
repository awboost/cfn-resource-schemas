import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for AWS::Route53Resolver::ResolverEndpoint
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverendpoint.html}
 */
export type Route53ResolverResolverEndpointProperties = {
  /**
     * Indicates whether the Resolver endpoint allows inbound or outbound DNS queries:
    - INBOUND: allows DNS queries to your VPC from your network
    - OUTBOUND: allows DNS queries from your VPC to your network
    - INBOUND_DELEGATION: allows DNS queries to your VPC from your network with authoritative answers from private hosted zones
     */
  Direction: string;
  /**
   * The subnets and IP addresses in your VPC that DNS queries originate from (for outbound endpoints) or that you forward DNS queries to (for inbound endpoints). The subnet ID uniquely identifies a VPC.
   */
  IpAddresses: IpAddressRequest[];
  /**
   * A friendly name that lets you easily find a configuration in the Resolver dashboard in the Route 53 console.
   */
  Name?: string;
  /**
   * The ARN (Amazon Resource Name) for the Outpost.
   */
  OutpostArn?: string;
  /**
   * The Amazon EC2 instance type.
   */
  PreferredInstanceType?: string;
  /**
   * Protocols used for the endpoint. DoH-FIPS is applicable for inbound endpoints only.
   */
  Protocols?: string[];
  /**
   * The Resolver endpoint IP address type.
   */
  ResolverEndpointType?: "IPV6" | "IPV4" | "DUALSTACK";
  /**
   * The ID of one or more security groups that control access to this VPC. The security group must include one or more inbound rules (for inbound endpoints) or outbound rules (for outbound endpoints). Inbound and outbound rules must allow TCP and UDP access. For inbound access, open port 53. For outbound access, open the port that you're using for DNS queries on your network.
   */
  SecurityGroupIds: string[];
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Route53Resolver::ResolverEndpoint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverendpoint.html#aws-resource-route53resolver-resolverendpoint-return-values}
 */
export type Route53ResolverResolverEndpointAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the resolver endpoint, such as arn:aws:route53resolver:us-east-1:123456789012:resolver-endpoint/resolver-endpoint-a1bzhi.
   */
  Arn: string;
  /**
   * The ID of the VPC that you want to create the resolver endpoint in.
   */
  HostVPCId: string;
  /**
   * The number of IP addresses that the resolver endpoint can use for DNS queries.
   */
  IpAddressCount: string;
  /**
   * The ID of the resolver endpoint.
   */
  ResolverEndpointId: string;
};
/**
 * Type definition for `AWS::Route53Resolver::ResolverEndpoint.IpAddressRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53resolver-resolverendpoint-ipaddressrequest.html}
 */
export type IpAddressRequest = {
  /**
   * The IPv4 address that you want to use for DNS queries.
   */
  Ip?: string;
  /**
   * The IPv6 address that you want to use for DNS queries.
   */
  Ipv6?: string;
  /**
   * The ID of the subnet that contains the IP address.
   */
  SubnetId: string;
};
/**
 * Type definition for `AWS::Route53Resolver::ResolverEndpoint.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53resolver-resolverendpoint-tag.html}
 */
export type Tag = {
  /**
   * The name for the tag. For example, if you want to associate Resolver resources with the account IDs of your customers for billing purposes, the value of Key might be account-id.
   */
  Key: string;
  /**
   * The value for the tag. For example, if Key is account-id, then Value might be the ID of the customer account that you're creating the resource for.
   */
  Value: string;
};
/**
 * Resource type definition for AWS::Route53Resolver::ResolverEndpoint
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverendpoint.html}
 */
export class Route53ResolverResolverEndpoint extends $Resource<
  "AWS::Route53Resolver::ResolverEndpoint",
  Route53ResolverResolverEndpointProperties,
  Route53ResolverResolverEndpointAttributes
> {
  public static readonly Type = "AWS::Route53Resolver::ResolverEndpoint";
  constructor(
    logicalId: string,
    properties: Route53ResolverResolverEndpointProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, Route53ResolverResolverEndpoint.Type, properties, options);
  }
}
