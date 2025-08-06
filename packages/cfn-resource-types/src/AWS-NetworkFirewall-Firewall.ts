import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for AWS::NetworkFirewall::Firewall
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-firewall.html}
 */
export type NetworkFirewallFirewallProperties = {
  AvailabilityZoneChangeProtection?: boolean;
  AvailabilityZoneMappings?: AvailabilityZoneMapping[];
  DeleteProtection?: boolean;
  /**
   * @maxLength `512`
   * @pattern `^.*$`
   */
  Description?: string;
  /**
   * The types of analysis to enable for the firewall. Can be TLS_SNI, HTTP_HOST, or both.
   */
  EnabledAnalysisTypes?: EnabledAnalysisType[];
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
  SubnetMappings?: SubnetMapping[];
  Tags?: Tag[];
  /**
   * @maxLength `128`
   * @pattern `^tgw-[0-9a-z]+$`
   */
  TransitGatewayId?: string;
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^vpc-[0-9a-f]+$`
   */
  VpcId?: string;
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
 * Type definition for `AWS::NetworkFirewall::Firewall.AvailabilityZoneMapping`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewall-availabilityzonemapping.html}
 */
export type AvailabilityZoneMapping = {
  /**
   * A AvailabilityZone
   */
  AvailabilityZone: string;
};
/**
 * Type definition for `AWS::NetworkFirewall::Firewall.EnabledAnalysisType`.
 * An analysis type.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewall-enabledanalysistype.html}
 */
export type EnabledAnalysisType = "TLS_SNI" | "HTTP_HOST";
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
   * @minLength `0`
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
  constructor(
    logicalId: string,
    properties: NetworkFirewallFirewallProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, NetworkFirewallFirewall.Type, properties, options);
  }
}
