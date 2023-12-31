import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for AWS::NetworkFirewall::Firewall
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-firewall.html}
 */
export type NetworkFirewallFirewallProperties = {
  DeleteProtection?: boolean;
  /**
   * @maxLength `512`
   * @pattern `^.*$`
   */
  Description?: string;
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9-]+$`
   */
  FirewallName: string;
  /**
   * A resource ARN.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^arn:aws.*$`
   */
  FirewallPolicyArn: string;
  FirewallPolicyChangeProtection?: boolean;
  SubnetChangeProtection?: boolean;
  /**
   * @minLength `1`
   */
  SubnetMappings: SubnetMapping[];
  Tags?: Tag[];
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^vpc-[0-9a-f]+$`
   */
  VpcId: string;
};
/**
 * Attribute type definition for `AWS::NetworkFirewall::Firewall`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-firewall.html#aws-resource-networkfirewall-firewall-return-values}
 */
export type NetworkFirewallFirewallAttributes = {
  EndpointIds: string[];
  /**
   * A resource ARN.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^arn:aws.*$`
   */
  FirewallArn: string;
  /**
   * @minLength `36`
   * @maxLength `36`
   * @pattern `^([0-9a-f]{8})-([0-9a-f]{4}-){3}([0-9a-f]{12})$`
   */
  FirewallId: string;
};
/**
 * Type definition for `AWS::NetworkFirewall::Firewall.SubnetMapping`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewall-subnetmapping.html}
 */
export type SubnetMapping = {
  /**
   * A IPAddressType
   */
  IPAddressType?: string;
  /**
   * A SubnetId.
   */
  SubnetId: string;
};
/**
 * Type definition for `AWS::NetworkFirewall::Firewall.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewall-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @maxLength `255`
   */
  Value: string;
};
/**
 * Resource type definition for AWS::NetworkFirewall::Firewall
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-firewall.html}
 */
export class NetworkFirewallFirewall extends $Resource<
  "AWS::NetworkFirewall::Firewall",
  NetworkFirewallFirewallProperties,
  NetworkFirewallFirewallAttributes
> {
  public static readonly Type = "AWS::NetworkFirewall::Firewall";
  public static readonly AttributeNames = [
    "EndpointIds" as const,
    "FirewallArn" as const,
    "FirewallId" as const,
  ];
  constructor(
    logicalId: string,
    properties: NetworkFirewallFirewallProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      NetworkFirewallFirewall.Type,
      properties,
      NetworkFirewallFirewall.AttributeNames,
      options,
    );
  }
}
