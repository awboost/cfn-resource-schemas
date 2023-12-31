import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  /**
   * @maxLength `8`
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
  | "IMPORT_NETWORK_FIREWALL";
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
   * @maxLength `8192`
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
  public static readonly AttributeNames = ["Arn" as const, "Id" as const];
  constructor(
    logicalId: string,
    properties: FMSPolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      FMSPolicy.Type,
      properties,
      FMSPolicy.AttributeNames,
      options,
    );
  }
}
