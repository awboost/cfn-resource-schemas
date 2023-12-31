import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Config::ConfigRule`.
 * Schema for AWS Config ConfigRule
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configrule.html}
 */
export type ConfigConfigRuleProperties = {
  /**
   * Name for the AWS Config rule
   */
  ConfigRuleName?: string;
  /**
   * Description provided for the AWS Config rule
   */
  Description?: string;
  /**
   * List of EvaluationModeConfiguration objects
   */
  EvaluationModes?: EvaluationModeConfiguration[];
  /**
   * JSON string passed the Lambda function
   */
  InputParameters?: string | Record<string, any>;
  /**
   * Maximum frequency at which the rule has to be evaluated
   */
  MaximumExecutionFrequency?: string;
  /**
   * Scope to constrain which resources can trigger the AWS Config rule
   */
  Scope?: Scope;
  /**
   * Source of events for the AWS Config rule
   */
  Source: Source;
};
/**
 * Attribute type definition for `AWS::Config::ConfigRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configrule.html#aws-resource-config-configrule-return-values}
 */
export type ConfigConfigRuleAttributes = {
  /**
   * ARN generated for the AWS Config rule
   */
  Arn: string;
  /**
   * Compliance details of the Config rule
   */
  Compliance: {
    /**
     * Compliance type determined by the Config rule
     */
    Type: string;
  };
  /**
   * ID of the config rule
   */
  ConfigRuleId: string;
};
/**
 * Type definition for `AWS::Config::ConfigRule.CustomPolicyDetails`.
 * Custom policy details when rule is custom owned
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configrule-custompolicydetails.html}
 */
export type CustomPolicyDetails = {
  /**
   * Logging toggle for custom policy rule
   */
  EnableDebugLogDelivery?: boolean;
  /**
   * Runtime system for custom policy rule
   */
  PolicyRuntime?: string;
  /**
   * Policy definition containing logic for custom policy rule
   */
  PolicyText?: string;
};
/**
 * Type definition for `AWS::Config::ConfigRule.EvaluationModeConfiguration`.
 * Evaluation mode for the AWS Config rule
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configrule-evaluationmodeconfiguration.html}
 */
export type EvaluationModeConfiguration = {
  /**
   * Mode of evaluation of AWS Config rule
   */
  Mode?: string;
};
/**
 * Type definition for `AWS::Config::ConfigRule.Scope`.
 * Scope to constrain which resources can trigger the rule
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configrule-scope.html}
 */
export type Scope = {
  /**
   * ID of the only one resource which we want to trigger the rule
   */
  ComplianceResourceId?: string;
  /**
   * Resource types of resources which we want to trigger the rule
   */
  ComplianceResourceTypes?: string[];
  /**
   * Tag key applied only to resources which we want to trigger the rule
   */
  TagKey?: string;
  /**
   * Tag value applied only to resources which we want to trigger the rule
   */
  TagValue?: string;
};
/**
 * Type definition for `AWS::Config::ConfigRule.Source`.
 * Source of events for the config rule
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configrule-source.html}
 */
export type Source = {
  /**
   * Custom policy details when rule is custom owned
   */
  CustomPolicyDetails?: CustomPolicyDetails;
  /**
   * Owner of the config rule
   */
  Owner: string;
  /**
   * List of message types that can trigger the rule
   */
  SourceDetails?: SourceDetail[];
  /**
   * Identifier for the source of events
   */
  SourceIdentifier?: string;
};
/**
 * Type definition for `AWS::Config::ConfigRule.SourceDetail`.
 * Source and message type that can trigger the rule
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configrule-sourcedetail.html}
 */
export type SourceDetail = {
  /**
   * Source of event that can trigger the rule
   */
  EventSource: string;
  /**
   * Frequency at which the rule has to be evaluated
   */
  MaximumExecutionFrequency?: string;
  /**
   * Notification type that can trigger the rule
   */
  MessageType: string;
};
/**
 * Resource type definition for `AWS::Config::ConfigRule`.
 * Schema for AWS Config ConfigRule
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configrule.html}
 */
export class ConfigConfigRule extends $Resource<
  "AWS::Config::ConfigRule",
  ConfigConfigRuleProperties,
  ConfigConfigRuleAttributes
> {
  public static readonly Type = "AWS::Config::ConfigRule";
  constructor(
    logicalId: string,
    properties: ConfigConfigRuleProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ConfigConfigRule.Type, properties, options);
  }
}
