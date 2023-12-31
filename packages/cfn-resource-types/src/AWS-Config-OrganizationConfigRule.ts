import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Config::OrganizationConfigRule
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-organizationconfigrule.html}
 */
export type ConfigOrganizationConfigRuleProperties = {
  ExcludedAccounts?: string[];
  OrganizationConfigRuleName: string;
  OrganizationCustomPolicyRuleMetadata?: OrganizationCustomPolicyRuleMetadata;
  OrganizationCustomRuleMetadata?: OrganizationCustomRuleMetadata;
  OrganizationManagedRuleMetadata?: OrganizationManagedRuleMetadata;
};
/**
 * Attribute type definition for `AWS::Config::OrganizationConfigRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-organizationconfigrule.html#aws-resource-config-organizationconfigrule-return-values}
 */
export type ConfigOrganizationConfigRuleAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::Config::OrganizationConfigRule.OrganizationCustomPolicyRuleMetadata`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-organizationconfigrule-organizationcustompolicyrulemetadata.html}
 */
export type OrganizationCustomPolicyRuleMetadata = {
  DebugLogDeliveryAccounts?: string[];
  Description?: string;
  InputParameters?: string;
  MaximumExecutionFrequency?: string;
  OrganizationConfigRuleTriggerTypes?: string[];
  PolicyText: string;
  ResourceIdScope?: string;
  ResourceTypesScope?: string[];
  Runtime: string;
  TagKeyScope?: string;
  TagValueScope?: string;
};
/**
 * Type definition for `AWS::Config::OrganizationConfigRule.OrganizationCustomRuleMetadata`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-organizationconfigrule-organizationcustomrulemetadata.html}
 */
export type OrganizationCustomRuleMetadata = {
  Description?: string;
  InputParameters?: string;
  LambdaFunctionArn: string;
  MaximumExecutionFrequency?: string;
  OrganizationConfigRuleTriggerTypes: string[];
  ResourceIdScope?: string;
  ResourceTypesScope?: string[];
  TagKeyScope?: string;
  TagValueScope?: string;
};
/**
 * Type definition for `AWS::Config::OrganizationConfigRule.OrganizationManagedRuleMetadata`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-organizationconfigrule-organizationmanagedrulemetadata.html}
 */
export type OrganizationManagedRuleMetadata = {
  Description?: string;
  InputParameters?: string;
  MaximumExecutionFrequency?: string;
  ResourceIdScope?: string;
  ResourceTypesScope?: string[];
  RuleIdentifier: string;
  TagKeyScope?: string;
  TagValueScope?: string;
};
/**
 * Resource Type definition for AWS::Config::OrganizationConfigRule
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-organizationconfigrule.html}
 */
export class ConfigOrganizationConfigRule extends $Resource<
  "AWS::Config::OrganizationConfigRule",
  ConfigOrganizationConfigRuleProperties,
  ConfigOrganizationConfigRuleAttributes
> {
  public static readonly Type = "AWS::Config::OrganizationConfigRule";
  constructor(
    logicalId: string,
    properties: ConfigOrganizationConfigRuleProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ConfigOrganizationConfigRule.Type, properties, options);
  }
}
