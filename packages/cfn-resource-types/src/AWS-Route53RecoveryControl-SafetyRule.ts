import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for `AWS::Route53RecoveryControl::SafetyRule`.
 * Resource schema for AWS Route53 Recovery Control basic constructs and validation rules.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-safetyrule.html}
 */
export type Route53RecoveryControlSafetyRuleProperties = {
  /**
   * An assertion rule enforces that, when a routing control state is changed, that the criteria set by the rule configuration is met. Otherwise, the change to the routing control is not accepted.
   */
  AssertionRule?: AssertionRule;
  /**
   * The Amazon Resource Name (ARN) of the control panel.
   */
  ControlPanelArn?: string;
  /**
   * A gating rule verifies that a set of gating controls evaluates as true, based on a rule configuration that you specify. If the gating rule evaluates to true, Amazon Route 53 Application Recovery Controller allows a set of routing control state changes to run and complete against the set of target controls.
   */
  GatingRule?: GatingRule;
  /**
   * The name for the safety rule.
   */
  Name?: string;
  /**
   * The rule configuration for an assertion rule or gating rule. This is the criteria that you set for specific assertion controls (routing controls) or gating controls. This configuration specifies how many controls must be enabled after a transaction completes.
   */
  RuleConfig?: RuleConfig;
  /**
   * A collection of tags associated with a resource
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Route53RecoveryControl::SafetyRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-safetyrule.html#aws-resource-route53recoverycontrol-safetyrule-return-values}
 */
export type Route53RecoveryControlSafetyRuleAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the safety rule.
   */
  SafetyRuleArn: string;
  /**
   * The deployment status of the routing control. Status can be one of the following: PENDING, DEPLOYED, PENDING_DELETION.
   */
  Status: "PENDING" | "DEPLOYED" | "PENDING_DELETION";
};
/**
 * Type definition for `AWS::Route53RecoveryControl::SafetyRule.AssertionRule`.
 * An assertion rule enforces that, when a routing control state is changed, that the criteria set by the rule configuration is met. Otherwise, the change to the routing control is not accepted.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53recoverycontrol-safetyrule-assertionrule.html}
 */
export type AssertionRule = {
  /**
   * The routing controls that are part of transactions that are evaluated to determine if a request to change a routing control state is allowed. For example, you might include three routing controls, one for each of three AWS Regions.
   */
  AssertedControls: string[];
  /**
   * An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail. This helps prevent "flapping" of state. The wait period is 5000 ms by default, but you can choose a custom value.
   */
  WaitPeriodMs: number;
};
/**
 * Type definition for `AWS::Route53RecoveryControl::SafetyRule.GatingRule`.
 * A gating rule verifies that a set of gating controls evaluates as true, based on a rule configuration that you specify. If the gating rule evaluates to true, Amazon Route 53 Application Recovery Controller allows a set of routing control state changes to run and complete against the set of target controls.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53recoverycontrol-safetyrule-gatingrule.html}
 */
export type GatingRule = {
  /**
   * The gating controls for the gating rule. That is, routing controls that are evaluated by the rule configuration that you specify.
   */
  GatingControls: string[];
  /**
     * Routing controls that can only be set or unset if the specified RuleConfig evaluates to true for the specified GatingControls. For example, say you have three gating controls, one for each of three AWS Regions. Now you specify AtLeast 2 as your RuleConfig. With these settings, you can only change (set or unset) the routing controls that you have specified as TargetControls if that rule evaluates to true.
    In other words, your ability to change the routing controls that you have specified as TargetControls is gated by the rule that you set for the routing controls in GatingControls.
     */
  TargetControls: string[];
  /**
   * An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail. This helps prevent "flapping" of state. The wait period is 5000 ms by default, but you can choose a custom value.
   */
  WaitPeriodMs: number;
};
/**
 * Type definition for `AWS::Route53RecoveryControl::SafetyRule.RuleConfig`.
 * The rule configuration for an assertion rule or gating rule. This is the criteria that you set for specific assertion controls (routing controls) or gating controls. This configuration specifies how many controls must be enabled after a transaction completes.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53recoverycontrol-safetyrule-ruleconfig.html}
 */
export type RuleConfig = {
  /**
   * Logical negation of the rule. If the rule would usually evaluate true, it's evaluated as false, and vice versa.
   */
  Inverted: boolean;
  /**
   * The value of N, when you specify an ATLEAST rule type. That is, Threshold is the number of controls that must be set when you specify an ATLEAST type.
   */
  Threshold: number;
  /**
   * A rule can be one of the following: ATLEAST, AND, or OR.
   */
  Type: RuleType;
};
/**
 * Type definition for `AWS::Route53RecoveryControl::SafetyRule.RuleType`.
 * A rule can be one of the following: ATLEAST, AND, or OR.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53recoverycontrol-safetyrule-ruletype.html}
 */
export type RuleType = "AND" | "OR" | "ATLEAST";
/**
 * Type definition for `AWS::Route53RecoveryControl::SafetyRule.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53recoverycontrol-safetyrule-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::Route53RecoveryControl::SafetyRule`.
 * Resource schema for AWS Route53 Recovery Control basic constructs and validation rules.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-safetyrule.html}
 */
export class Route53RecoveryControlSafetyRule extends $Resource<
  "AWS::Route53RecoveryControl::SafetyRule",
  Route53RecoveryControlSafetyRuleProperties,
  Route53RecoveryControlSafetyRuleAttributes
> {
  public static readonly Type = "AWS::Route53RecoveryControl::SafetyRule";
  public static readonly AttributeNames = [
    "SafetyRuleArn" as const,
    "Status" as const,
  ];
  constructor(
    logicalId: string,
    properties: Route53RecoveryControlSafetyRuleProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      Route53RecoveryControlSafetyRule.Type,
      properties,
      Route53RecoveryControlSafetyRule.AttributeNames,
      options,
    );
  }
}
