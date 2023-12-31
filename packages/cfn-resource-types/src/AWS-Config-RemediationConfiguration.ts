import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Config::RemediationConfiguration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-remediationconfiguration.html}
 */
export type ConfigRemediationConfigurationProperties = {
  Automatic?: boolean;
  ConfigRuleName: string;
  ExecutionControls?: ExecutionControls;
  MaximumAutomaticAttempts?: number;
  Parameters?: Record<string, any>;
  ResourceType?: string;
  RetryAttemptSeconds?: number;
  TargetId: string;
  TargetType: string;
  TargetVersion?: string;
};
/**
 * Attribute type definition for `AWS::Config::RemediationConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-remediationconfiguration.html#aws-resource-config-remediationconfiguration-return-values}
 */
export type ConfigRemediationConfigurationAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::Config::RemediationConfiguration.ExecutionControls`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-remediationconfiguration-executioncontrols.html}
 */
export type ExecutionControls = {
  SsmControls?: SsmControls;
};
/**
 * Type definition for `AWS::Config::RemediationConfiguration.SsmControls`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-remediationconfiguration-ssmcontrols.html}
 */
export type SsmControls = {
  ConcurrentExecutionRatePercentage?: number;
  ErrorPercentage?: number;
};
/**
 * Resource Type definition for AWS::Config::RemediationConfiguration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-remediationconfiguration.html}
 */
export class ConfigRemediationConfiguration extends $Resource<
  "AWS::Config::RemediationConfiguration",
  ConfigRemediationConfigurationProperties,
  ConfigRemediationConfigurationAttributes
> {
  public static readonly Type = "AWS::Config::RemediationConfiguration";
  constructor(
    logicalId: string,
    properties: ConfigRemediationConfigurationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ConfigRemediationConfiguration.Type, properties, options);
  }
}
