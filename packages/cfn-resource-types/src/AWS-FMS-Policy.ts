import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::FMS::Policy`.
 * Creates an AWS Firewall Manager policy.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html}
 */
export type FMSPolicyProperties = {
  DeleteAllPolicyResources?: boolean;
  /**
   * An FMS includeMap or excludeMap.
   */
  ExcludeMap?: IEMap;
  ExcludeResourceTags: boolean;
  /**
   * An FMS includeMap or excludeMap.
   */
  IncludeMap?: IEMap;
  /**
   * @maxLength `256`
   * @pattern `^([a-zA-Z0-9_.:/=+\-@\s]+)$`
   */
  PolicyDescription?: string;
  /**
   * @minLength `1`
   * @maxLength `1024`
   * @pattern `^([a-zA-Z0-9_.:/=+\-@\s]+)$`
   */
  PolicyName: string;
  RemediationEnabled: boolean;
  ResourceSetIds?: string[];
  ResourceTagLogicalOperator?: "AND" | "OR";
  /**
   * @maxLength `50`
   */
  ResourceTags?: ResourceTag[];
  /**
   * An AWS resource type
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^([^\s]*)$`
   */
  ResourceType?: string;
  ResourceTypeList?: string[];
  ResourcesCleanUp?: boolean;
  /**
   * Firewall security service policy data.
   */
  SecurityServicePolicyData: SecurityServicePolicyData;
  Tags?: PolicyTag[];
};
/**
 * Attribute type definition for `AWS::FMS::Policy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#aws-resource-fms-policy-return-values}
 */
export type FMSPolicyAttributes = {
  /**
   * A resource ARN.
   * @minLength `1`
   * @maxLength `1024`
   * @pattern `^([^\s]*)$`
   */
  Arn: string;
  /**
   * @minLength `36`
   * @maxLength `36`
   * @pattern `^[a-z0-9A-Z-]{36}$`
   */
  Id: string;
};
/**
 * Type definition for `AWS::FMS::Policy.FirewallDeploymentModel`.
 * Firewall deployment mode.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-firewalldeploymentmodel.html}
 */
export type FirewallDeploymentModel = "DISTRIBUTED" | "CENTRALIZED";
/**
 * Type definition for `AWS::FMS::Policy.IEMap`.
 * An FMS includeMap or excludeMap.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-iemap.html}
 */
export type IEMap = {
  ACCOUNT?: string[];
  ORGUNIT?: string[];
};
/**
 * Type definition for `AWS::FMS::Policy.NetworkAclCommonPolicy`.
 * Network ACL common policy.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-networkaclcommonpolicy.html}
 */
export type NetworkAclCommonPolicy = {
  /**
   * Network ACL entry set.
   */
  NetworkAclEntrySet: NetworkAclEntrySet;
};
/**
 * Type definition for `AWS::FMS::Policy.NetworkAclEntry`.
 * Network ACL entry.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-networkaclentry.html}
 */
export type NetworkAclEntry = {
  /**
   * CIDR block.
   * @pattern `^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(\/([0-9]|[1-2][0-9]|3[0-2]))$`
   */
  CidrBlock?: string;
  /**
   * Whether the entry is an egress entry.
   */
  Egress: boolean;
  /**
   * ICMP type and code.
   */
  IcmpTypeCode?: {
    /**
     * Code.
     * @min `0`
     * @max `255`
     */
    Code: number;
    /**
     * Type.
     * @min `0`
     * @max `255`
     */
    Type: number;
  };
  /**
   * IPv6 CIDR block.
   * @pattern `^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))(/(1[0-2]|[0-9]))?$`
   */
  Ipv6CidrBlock?: string;
  /**
   * Port range.
   */
  PortRange?: {
    /**
     * From Port.
     * @min `0`
     * @max `65535`
     */
    From: number;
    /**
     * To Port.
     * @min `0`
     * @max `65535`
     */
    To: number;
  };
  /**
   * Protocol.
   * @pattern `^(tcp|udp|icmp|-1|([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]))$`
   */
  Protocol: string;
  /**
   * Rule Action.
   */
  RuleAction: "allow" | "deny";
};
/**
 * Type definition for `AWS::FMS::Policy.NetworkAclEntrySet`.
 * Network ACL entry set.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-networkaclentryset.html}
 */
export type NetworkAclEntrySet = {
  /**
   * NetworkAcl entry list.
   */
  FirstEntries?: NetworkAclEntry[];
  ForceRemediateForFirstEntries: boolean;
  ForceRemediateForLastEntries: boolean;
  /**
   * NetworkAcl entry list.
   */
  LastEntries?: NetworkAclEntry[];
};
/**
 * Type definition for `AWS::FMS::Policy.NetworkFirewallPolicy`.
 * Network firewall policy.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-networkfirewallpolicy.html}
 */
export type NetworkFirewallPolicy = {
  /**
   * Firewall deployment mode.
   */
  FirewallDeploymentModel: FirewallDeploymentModel;
};
/**
 * Type definition for `AWS::FMS::Policy.PolicyOption`.
 * Firewall policy option.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-policyoption.html}
 */
export type PolicyOption = {
  /**
   * Network ACL common policy.
   */
  NetworkAclCommonPolicy?: NetworkAclCommonPolicy;
  /**
   * Network firewall policy.
   */
  NetworkFirewallPolicy?: NetworkFirewallPolicy;
  /**
   * Third party firewall policy.
   */
  ThirdPartyFirewallPolicy?: ThirdPartyFirewallPolicy;
};
/**
 * Type definition for `AWS::FMS::Policy.PolicyTag`.
 * A policy tag.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-policytag.html}
 */
export type PolicyTag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^([^\s]*)$`
   */
  Key: string;
  /**
   * @maxLength `256`
   * @pattern `^([^\s]*)$`
   */
  Value: string;
};
/**
 * Type definition for `AWS::FMS::Policy.PolicyType`.
 * Firewall policy type.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-policytype.html}
 */
export type PolicyType =
  | "WAF"
  | "WAFV2"
  | "SHIELD_ADVANCED"
  | "SECURITY_GROUPS_COMMON"
  | "SECURITY_GROUPS_CONTENT_AUDIT"
  | "SECURITY_GROUPS_USAGE_AUDIT"
  | "NETWORK_FIREWALL"
  | "THIRD_PARTY_FIREWALL"
  | "DNS_FIREWALL"
  | "IMPORT_NETWORK_FIREWALL"
  | "NETWORK_ACL_COMMON";
/**
 * Type definition for `AWS::FMS::Policy.ResourceTag`.
 * A resource tag.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-resourcetag.html}
 */
export type ResourceTag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @maxLength `256`
   */
  Value?: string;
};
/**
 * Type definition for `AWS::FMS::Policy.SecurityServicePolicyData`.
 * Firewall security service policy data.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-securityservicepolicydata.html}
 */
export type SecurityServicePolicyData = {
  /**
   * Firewall managed service data.
   * @minLength `1`
   * @maxLength `30000`
   */
  ManagedServiceData?: string;
  /**
   * Firewall policy option.
   */
  PolicyOption?: PolicyOption;
  /**
   * Firewall policy type.
   */
  Type: PolicyType;
};
/**
 * Type definition for `AWS::FMS::Policy.ThirdPartyFirewallPolicy`.
 * Third party firewall policy.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-thirdpartyfirewallpolicy.html}
 */
export type ThirdPartyFirewallPolicy = {
  /**
   * Firewall deployment mode.
   */
  FirewallDeploymentModel: FirewallDeploymentModel;
};
/**
 * Resource type definition for `AWS::FMS::Policy`.
 * Creates an AWS Firewall Manager policy.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html}
 */
export class FMSPolicy extends $Resource<
  "AWS::FMS::Policy",
  FMSPolicyProperties,
  FMSPolicyAttributes
> {
  public static readonly Type = "AWS::FMS::Policy";
  constructor(
    logicalId: string,
    properties: FMSPolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, FMSPolicy.Type, properties, options);
  }
}
