import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
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
   * The type of the analyzer, must be one of ACCOUNT, ORGANIZATION, ACCOUNT_UNUSED_ACCESS or ORGANIZATION_UNUSED_ACCESS
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
   * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `255`
   */
  Value: string;
};
/**
 * Type definition for `AWS::AccessAnalyzer::Analyzer.UnusedAccessConfiguration`.
 * The Configuration for Unused Access Analyzer
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-accessanalyzer-analyzer-unusedaccessconfiguration.html}
 */
export type UnusedAccessConfiguration = {
  /**
   * The specified access age in days for which to generate findings for unused access. For example, if you specify 90 days, the analyzer will generate findings for IAM entities within the accounts of the selected organization for any access that hasn't been used in 90 or more days since the analyzer's last scan. You can choose a value between 1 and 180 days.
   * @min `1`
   * @max `180`
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
