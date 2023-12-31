import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::Route53Resolver::ResolverRule
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverrule.html}
 */
export type Route53ResolverResolverRuleProperties = {
  /**
   * DNS queries for this domain name are forwarded to the IP addresses that are specified in TargetIps
   * @minLength `1`
   * @maxLength `256`
   */
  DomainName: string;
  /**
   * The name for the Resolver rule
   * @maxLength `64`
   */
  Name?: string;
  /**
   * The ID of the endpoint that the rule is associated with.
   * @minLength `1`
   * @maxLength `64`
   */
  ResolverEndpointId?: string;
  /**
   * When you want to forward DNS queries for specified domain name to resolvers on your network, specify FORWARD. When you have a forwarding rule to forward DNS queries for a domain to your network and you want Resolver to process queries for a subdomain of that domain, specify SYSTEM.
   */
  RuleType: "FORWARD" | "SYSTEM" | "RECURSIVE";
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
  /**
   * An array that contains the IP addresses and ports that an outbound endpoint forwards DNS queries to. Typically, these are the IP addresses of DNS resolvers on your network. Specify IPv4 addresses. IPv6 is not supported.
   */
  TargetIps?: TargetAddress[];
};
/**
 * Attribute type definition for `AWS::Route53Resolver::ResolverRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverrule.html#aws-resource-route53resolver-resolverrule-return-values}
 */
export type Route53ResolverResolverRuleAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the resolver rule.
   */
  Arn: string;
  /**
   * The ID of the endpoint that the rule is associated with.
   */
  ResolverRuleId: string;
};
/**
 * Type definition for `AWS::Route53Resolver::ResolverRule.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53resolver-resolverrule-tag.html}
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
  Value: string;
};
/**
 * Type definition for `AWS::Route53Resolver::ResolverRule.TargetAddress`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53resolver-resolverrule-targetaddress.html}
 */
export type TargetAddress = {
  /**
   * One IP address that you want to forward DNS queries to. You can specify only IPv4 addresses.
   */
  Ip?: string;
  /**
   * One IPv6 address that you want to forward DNS queries to. You can specify only IPv6 addresses.
   */
  Ipv6?: string;
  /**
   * The port at Ip that you want to forward DNS queries to.
   * @maxLength `65535`
   */
  Port?: string;
  /**
   * The protocol that you want to use to forward DNS queries.
   */
  Protocol?: "Do53" | "DoH";
};
/**
 * Resource Type definition for AWS::Route53Resolver::ResolverRule
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverrule.html}
 */
export class Route53ResolverResolverRule extends $Resource<
  "AWS::Route53Resolver::ResolverRule",
  Route53ResolverResolverRuleProperties,
  Route53ResolverResolverRuleAttributes
> {
  public static readonly Type = "AWS::Route53Resolver::ResolverRule";
  public static readonly AttributeNames = [
    "Arn" as const,
    "ResolverRuleId" as const,
  ];
  constructor(
    logicalId: string,
    properties: Route53ResolverResolverRuleProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      Route53ResolverResolverRule.Type,
      properties,
      Route53ResolverResolverRule.AttributeNames,
      options,
    );
  }
}
