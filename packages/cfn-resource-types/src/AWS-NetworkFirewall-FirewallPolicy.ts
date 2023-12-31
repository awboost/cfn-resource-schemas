import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for AWS::NetworkFirewall::FirewallPolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-firewallpolicy.html}
 */
export type NetworkFirewallFirewallPolicyProperties = {
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^.*$`
   */
  Description?: string;
  FirewallPolicy: FirewallPolicy;
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9-]+$`
   */
  FirewallPolicyName: string;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::NetworkFirewall::FirewallPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-firewallpolicy.html#aws-resource-networkfirewall-firewallpolicy-return-values}
 */
export type NetworkFirewallFirewallPolicyAttributes = {
  /**
   * A resource ARN.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^(arn:aws.*)$`
   */
  FirewallPolicyArn: string;
  /**
   * @minLength `36`
   * @maxLength `36`
   * @pattern `^([0-9a-f]{8})-([0-9a-f]{4}-){3}([0-9a-f]{12})$`
   */
  FirewallPolicyId: string;
};
/**
 * Type definition for `AWS::NetworkFirewall::FirewallPolicy.ActionDefinition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-actiondefinition.html}
 */
export type ActionDefinition = {
  PublishMetricAction?: PublishMetricAction;
};
/**
 * Type definition for `AWS::NetworkFirewall::FirewallPolicy.CustomAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-customaction.html}
 */
export type CustomAction = {
  ActionDefinition: ActionDefinition;
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9]+$`
   */
  ActionName: string;
};
/**
 * Type definition for `AWS::NetworkFirewall::FirewallPolicy.Dimension`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-dimension.html}
 */
export type Dimension = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9-_ ]+$`
   */
  Value: string;
};
/**
 * Type definition for `AWS::NetworkFirewall::FirewallPolicy.FirewallPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-firewallpolicy.html}
 */
export type FirewallPolicy = {
  PolicyVariables?: {
    RuleVariables?: RuleVariables;
  };
  StatefulDefaultActions?: string[];
  StatefulEngineOptions?: StatefulEngineOptions;
  StatefulRuleGroupReferences?: StatefulRuleGroupReference[];
  StatelessCustomActions?: CustomAction[];
  StatelessDefaultActions: string[];
  StatelessFragmentDefaultActions: string[];
  StatelessRuleGroupReferences?: StatelessRuleGroupReference[];
};
/**
 * Type definition for `AWS::NetworkFirewall::FirewallPolicy.IPSet`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-ipset.html}
 */
export type IPSet = {
  Definition?: string[];
};
/**
 * Type definition for `AWS::NetworkFirewall::FirewallPolicy.OverrideAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-overrideaction.html}
 */
export type OverrideAction = "DROP_TO_ALERT";
/**
 * Type definition for `AWS::NetworkFirewall::FirewallPolicy.PublishMetricAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-publishmetricaction.html}
 */
export type PublishMetricAction = {
  Dimensions: Dimension[];
};
/**
 * Type definition for `AWS::NetworkFirewall::FirewallPolicy.RuleOrder`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-ruleorder.html}
 */
export type RuleOrder = "DEFAULT_ACTION_ORDER" | "STRICT_ORDER";
/**
 * Type definition for `AWS::NetworkFirewall::FirewallPolicy.RuleVariables`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-rulevariables.html}
 */
export type RuleVariables = Record<string, IPSet>;
/**
 * Type definition for `AWS::NetworkFirewall::FirewallPolicy.StatefulEngineOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-statefulengineoptions.html}
 */
export type StatefulEngineOptions = {
  RuleOrder?: RuleOrder;
  StreamExceptionPolicy?: StreamExceptionPolicy;
};
/**
 * Type definition for `AWS::NetworkFirewall::FirewallPolicy.StatefulRuleGroupOverride`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-statefulrulegroupoverride.html}
 */
export type StatefulRuleGroupOverride = {
  Action?: OverrideAction;
};
/**
 * Type definition for `AWS::NetworkFirewall::FirewallPolicy.StatefulRuleGroupReference`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-statefulrulegroupreference.html}
 */
export type StatefulRuleGroupReference = {
  Override?: StatefulRuleGroupOverride;
  /**
   * @min `1`
   * @max `65535`
   */
  Priority?: number;
  /**
   * A resource ARN.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^(arn:aws.*)$`
   */
  ResourceArn: string;
};
/**
 * Type definition for `AWS::NetworkFirewall::FirewallPolicy.StatelessRuleGroupReference`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-statelessrulegroupreference.html}
 */
export type StatelessRuleGroupReference = {
  /**
   * @min `1`
   * @max `65535`
   */
  Priority: number;
  /**
   * A resource ARN.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^(arn:aws.*)$`
   */
  ResourceArn: string;
};
/**
 * Type definition for `AWS::NetworkFirewall::FirewallPolicy.StreamExceptionPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-streamexceptionpolicy.html}
 */
export type StreamExceptionPolicy = "DROP" | "CONTINUE" | "REJECT";
/**
 * Type definition for `AWS::NetworkFirewall::FirewallPolicy.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^.*$`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `255`
   * @pattern `^.*$`
   */
  Value: string;
};
/**
 * Resource type definition for AWS::NetworkFirewall::FirewallPolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-firewallpolicy.html}
 */
export class NetworkFirewallFirewallPolicy extends $Resource<
  "AWS::NetworkFirewall::FirewallPolicy",
  NetworkFirewallFirewallPolicyProperties,
  NetworkFirewallFirewallPolicyAttributes
> {
  public static readonly Type = "AWS::NetworkFirewall::FirewallPolicy";
  constructor(
    logicalId: string,
    properties: NetworkFirewallFirewallPolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, NetworkFirewallFirewallPolicy.Type, properties, options);
  }
}
