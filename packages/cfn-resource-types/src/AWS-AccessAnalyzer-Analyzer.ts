import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::AccessAnalyzer::Analyzer type specifies an analyzer of the user's account
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-accessanalyzer-analyzer.html}
 */
export type AccessAnalyzerAnalyzerProperties = {
  /**
   * The configuration for the analyzer
   */
  AnalyzerConfiguration?: {
    /**
     * Specifies the configuration of an internal access analyzer for an AWS organization or account. This configuration determines how the analyzer evaluates internal access within your AWS environment.
     */
    InternalAccessConfiguration?: InternalAccessConfiguration;
    /**
     * The Configuration for Unused Access Analyzer
     */
    UnusedAccessConfiguration?: UnusedAccessConfiguration;
  };
  /**
   * Analyzer name
   * @minLength `1`
   * @maxLength `1024`
   */
  AnalyzerName?: string;
  ArchiveRules?: ArchiveRule[];
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * The type of the analyzer, must be one of ACCOUNT, ORGANIZATION, ACCOUNT_INTERNAL_ACCESS, ORGANIZATION_INTERNAL_ACCESS, ACCOUNT_UNUSED_ACCESS and ORGANIZATION_UNUSED_ACCESS
   * @minLength `0`
   * @maxLength `1024`
   */
  Type: string;
};
/**
 * Attribute type definition for `AWS::AccessAnalyzer::Analyzer`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-accessanalyzer-analyzer.html#aws-resource-accessanalyzer-analyzer-return-values}
 */
export type AccessAnalyzerAnalyzerAttributes = {
  /**
   * Amazon Resource Name (ARN) of the analyzer
   * @minLength `1`
   * @maxLength `1600`
   */
  Arn: string;
};
/**
 * Type definition for `AWS::AccessAnalyzer::Analyzer.AnalysisRuleCriteria`.
 * The criteria for an analysis rule for an analyzer.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-accessanalyzer-analyzer-analysisrulecriteria.html}
 */
export type AnalysisRuleCriteria = {
  /**
   * A list of AWS account IDs to apply to the analysis rule criteria. The accounts cannot include the organization analyzer owner account. Account IDs can only be applied to the analysis rule criteria for organization-level analyzers.
   */
  AccountIds?: string[];
  /**
     * An array of key-value pairs to match for your resources. You can use the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    
    For the tag key, you can specify a value that is 1 to 128 characters in length and cannot be prefixed with aws:.
    
    For the tag value, you can specify a value that is 0 to 256 characters in length. If the specified tag value is 0 characters, the rule is applied to all principals with the specified tag key.
     */
  ResourceTags?: Tag[][];
};
/**
 * Type definition for `AWS::AccessAnalyzer::Analyzer.ArchiveRule`.
 * An Access Analyzer archive rule. Archive rules automatically archive new findings that meet the criteria you define when you create the rule.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-accessanalyzer-analyzer-archiverule.html}
 */
export type ArchiveRule = {
  /**
   * @minLength `1`
   */
  Filter: Filter[];
  /**
   * The archive rule name
   */
  RuleName: string;
};
/**
 * Type definition for `AWS::AccessAnalyzer::Analyzer.Filter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-accessanalyzer-analyzer-filter.html}
 */
export type Filter = {
  Contains?: string[];
  Eq?: string[];
  Exists?: boolean;
  Neq?: string[];
  Property: string;
};
/**
 * Type definition for `AWS::AccessAnalyzer::Analyzer.InternalAccessAnalysisRuleCriteria`.
 * The criteria for an analysis rule for an internal access analyzer.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-accessanalyzer-analyzer-internalaccessanalysisrulecriteria.html}
 */
export type InternalAccessAnalysisRuleCriteria = {
  /**
   * A list of AWS account IDs to apply to the internal access analysis rule criteria. Account IDs can only be applied to the analysis rule criteria for organization-level analyzers and cannot include the organization owner account.
   */
  AccountIds?: string[];
  /**
   * A list of resource ARNs to apply to the internal access analysis rule criteria. The analyzer will only generate findings for resources that match these ARNs.
   */
  ResourceArns?: string[];
  /**
   * A list of resource types to apply to the internal access analysis rule criteria. The analyzer will only generate findings for resources of these types.
   */
  ResourceTypes?: string[];
};
/**
 * Type definition for `AWS::AccessAnalyzer::Analyzer.InternalAccessConfiguration`.
 * Specifies the configuration of an internal access analyzer for an AWS organization or account. This configuration determines how the analyzer evaluates internal access within your AWS environment.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-accessanalyzer-analyzer-internalaccessconfiguration.html}
 */
export type InternalAccessConfiguration = {
  /**
   * Contains information about analysis rules for the internal access analyzer. Analysis rules determine which entities will generate findings based on the criteria you define when you create the rule.
   */
  InternalAccessAnalysisRule?: {
    /**
     * A list of rules for the internal access analyzer containing criteria to include in analysis. Only resources that meet the rule criteria will generate findings.
     */
    Inclusions?: InternalAccessAnalysisRuleCriteria[];
  };
};
/**
 * Type definition for `AWS::AccessAnalyzer::Analyzer.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-accessanalyzer-analyzer-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `127`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `255`
   */
  Value?: string;
};
/**
 * Type definition for `AWS::AccessAnalyzer::Analyzer.UnusedAccessConfiguration`.
 * The Configuration for Unused Access Analyzer
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-accessanalyzer-analyzer-unusedaccessconfiguration.html}
 */
export type UnusedAccessConfiguration = {
  /**
   * Contains information about rules for the analyzer.
   */
  AnalysisRule?: {
    /**
     * A list of rules for the analyzer containing criteria to exclude from analysis. Entities that meet the rule criteria will not generate findings.
     */
    Exclusions?: AnalysisRuleCriteria[];
  };
  /**
   * The specified access age in days for which to generate findings for unused access. For example, if you specify 90 days, the analyzer will generate findings for IAM entities within the accounts of the selected organization for any access that hasn't been used in 90 or more days since the analyzer's last scan. You can choose a value between 1 and 365 days.
   * @min `1`
   * @max `365`
   */
  UnusedAccessAge?: number;
};
/**
 * The AWS::AccessAnalyzer::Analyzer type specifies an analyzer of the user's account
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-accessanalyzer-analyzer.html}
 */
export class AccessAnalyzerAnalyzer extends $Resource<
  "AWS::AccessAnalyzer::Analyzer",
  AccessAnalyzerAnalyzerProperties,
  AccessAnalyzerAnalyzerAttributes
> {
  public static readonly Type = "AWS::AccessAnalyzer::Analyzer";
  constructor(
    logicalId: string,
    properties: AccessAnalyzerAnalyzerProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AccessAnalyzerAnalyzer.Type, properties, options);
  }
}
