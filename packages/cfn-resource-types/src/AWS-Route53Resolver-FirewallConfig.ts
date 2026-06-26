import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Route53Resolver::FirewallConfig`.
 * Configuration of the firewall behavior provided by DNS Firewall for a single VPC from Amazon Virtual Private Cloud (Amazon VPC).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewallconfig.html}
 */
export type Route53ResolverFirewallConfigProperties = {
  /**
   * Determines how DNS Firewall operates during failures. By default, fail open is disabled, which means the failure mode is closed. If you enable this option, the failure mode is open. This behavior is only enforced for VPCs that have at least one DNS Firewall rule group association.
   */
  FirewallFailOpen?: "ENABLED" | "DISABLED" | "USE_LOCAL_RESOURCE_SETTING";
  /**
   * The ID of the VPC that this firewall configuration applies to.
   * @minLength `1`
   * @maxLength `64`
   */
  ResourceId?: string;
};
/**
 * Attribute type definition for `AWS::Route53Resolver::FirewallConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewallconfig.html#aws-resource-route53resolver-firewallconfig-return-values}
 */
export type Route53ResolverFirewallConfigAttributes = {
  /**
   * The ARN of the firewall configuration.
   */
  Arn: string;
  /**
   * The ID of the firewall configuration.
   * @minLength `1`
   * @maxLength `64`
   */
  Id: string;
  /**
   * The Amazon Web Services account ID of the owner of the VPC that this firewall configuration applies to.
   * @minLength `12`
   * @maxLength `32`
   */
  OwnerId: string;
};
/**
 * Resource type definition for `AWS::Route53Resolver::FirewallConfig`.
 * Configuration of the firewall behavior provided by DNS Firewall for a single VPC from Amazon Virtual Private Cloud (Amazon VPC).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewallconfig.html}
 */
export class Route53ResolverFirewallConfig extends $Resource<
  "AWS::Route53Resolver::FirewallConfig",
  Route53ResolverFirewallConfigProperties,
  Route53ResolverFirewallConfigAttributes
> {
  public static readonly Type = "AWS::Route53Resolver::FirewallConfig";
  constructor(
    logicalId: string,
    properties: Route53ResolverFirewallConfigProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, Route53ResolverFirewallConfig.Type, properties, options);
  }
}
