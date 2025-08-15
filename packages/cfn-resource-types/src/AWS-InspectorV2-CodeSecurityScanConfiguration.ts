import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::InspectorV2::CodeSecurityScanConfiguration`.
 * Inspector CodeSecurityScanConfiguration resource schema
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-codesecurityscanconfiguration.html}
 */
export type InspectorV2CodeSecurityScanConfigurationProperties = {
  /**
   * Code Security Scan Configuration
   */
  Configuration?: CodeSecurityScanConfiguration;
  /**
   * Configuration Level
   */
  Level?: ConfigurationLevel;
  /**
   * Code Security Scan Configuration name
   * @minLength `1`
   * @maxLength `60`
   * @pattern `^[a-zA-Z0-9-_$:.]*$`
   */
  Name?: string;
  /**
   * Scope Settings
   */
  ScopeSettings?: ScopeSettings;
  Tags?: TagMap;
};
/**
 * Attribute type definition for `AWS::InspectorV2::CodeSecurityScanConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-codesecurityscanconfiguration.html#aws-resource-inspectorv2-codesecurityscanconfiguration-return-values}
 */
export type InspectorV2CodeSecurityScanConfigurationAttributes = {
  /**
   * Code Security Scan Configuration ARN
   * @pattern `^arn:(aws[a-zA-Z-]*)?:inspector2:[a-z]{2}(-gov)?-[a-z]+-\d{1}:\d{12}:owner/(\d{12}|o-[a-z0-9]{10,32})/codesecurity-configuration/[a-f0-9-]{36}$`
   */
  Arn: string;
};
/**
 * Type definition for `AWS::InspectorV2::CodeSecurityScanConfiguration.CodeSecurityScanConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-codesecurityscanconfiguration-codesecurityscanconfiguration.html}
 */
export type CodeSecurityScanConfiguration = {
  continuousIntegrationScanConfiguration?: ContinuousIntegrationScanConfiguration;
  periodicScanConfiguration?: PeriodicScanConfiguration;
  /**
   * @minLength `1`
   * @maxLength `3`
   */
  ruleSetCategories: RuleSetCategory[];
};
/**
 * Type definition for `AWS::InspectorV2::CodeSecurityScanConfiguration.ConfigurationLevel`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-codesecurityscanconfiguration-configurationlevel.html}
 */
export type ConfigurationLevel = "ORGANIZATION" | "ACCOUNT";
/**
 * Type definition for `AWS::InspectorV2::CodeSecurityScanConfiguration.ContinuousIntegrationScanConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-codesecurityscanconfiguration-continuousintegrationscanconfiguration.html}
 */
export type ContinuousIntegrationScanConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `2`
   */
  supportedEvents: ContinuousIntegrationScanEvent[];
};
/**
 * Type definition for `AWS::InspectorV2::CodeSecurityScanConfiguration.ContinuousIntegrationScanEvent`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-codesecurityscanconfiguration-continuousintegrationscanevent.html}
 */
export type ContinuousIntegrationScanEvent = "PULL_REQUEST" | "PUSH";
/**
 * Type definition for `AWS::InspectorV2::CodeSecurityScanConfiguration.PeriodicScanConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-codesecurityscanconfiguration-periodicscanconfiguration.html}
 */
export type PeriodicScanConfiguration = {
  frequency?: PeriodicScanFrequency;
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  frequencyExpression?: string;
};
/**
 * Type definition for `AWS::InspectorV2::CodeSecurityScanConfiguration.PeriodicScanFrequency`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-codesecurityscanconfiguration-periodicscanfrequency.html}
 */
export type PeriodicScanFrequency = "WEEKLY" | "MONTHLY" | "NEVER";
/**
 * Type definition for `AWS::InspectorV2::CodeSecurityScanConfiguration.ProjectSelectionScope`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-codesecurityscanconfiguration-projectselectionscope.html}
 */
export type ProjectSelectionScope = "ALL";
/**
 * Type definition for `AWS::InspectorV2::CodeSecurityScanConfiguration.RuleSetCategory`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-codesecurityscanconfiguration-rulesetcategory.html}
 */
export type RuleSetCategory = "SAST" | "IAC" | "SCA";
/**
 * Type definition for `AWS::InspectorV2::CodeSecurityScanConfiguration.ScopeSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-codesecurityscanconfiguration-scopesettings.html}
 */
export type ScopeSettings = {
  projectSelectionScope?: ProjectSelectionScope;
};
/**
 * Type definition for `AWS::InspectorV2::CodeSecurityScanConfiguration.TagMap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-codesecurityscanconfiguration-tagmap.html}
 */
export type TagMap = Record<string, string>;
/**
 * Resource type definition for `AWS::InspectorV2::CodeSecurityScanConfiguration`.
 * Inspector CodeSecurityScanConfiguration resource schema
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-codesecurityscanconfiguration.html}
 */
export class InspectorV2CodeSecurityScanConfiguration extends $Resource<
  "AWS::InspectorV2::CodeSecurityScanConfiguration",
  InspectorV2CodeSecurityScanConfigurationProperties,
  InspectorV2CodeSecurityScanConfigurationAttributes
> {
  public static readonly Type =
    "AWS::InspectorV2::CodeSecurityScanConfiguration";
  constructor(
    logicalId: string,
    properties: InspectorV2CodeSecurityScanConfigurationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      InspectorV2CodeSecurityScanConfiguration.Type,
      properties,
      options,
    );
  }
}
