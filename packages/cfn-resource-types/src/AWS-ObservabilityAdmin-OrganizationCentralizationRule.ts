import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::ObservabilityAdmin::OrganizationCentralizationRule`.
 * Resource schema for AWS:ObservabilityAdmin:OrganizationCentralizationRule
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-observabilityadmin-organizationcentralizationrule.html}
 */
export type ObservabilityAdminOrganizationCentralizationRuleProperties = {
  Rule: CentralizationRule;
  /**
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^[0-9A-Za-z-]+$`
   */
  RuleName: string;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::ObservabilityAdmin::OrganizationCentralizationRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-observabilityadmin-organizationcentralizationrule.html#aws-resource-observabilityadmin-organizationcentralizationrule-return-values}
 */
export type ObservabilityAdminOrganizationCentralizationRuleAttributes = {
  /**
   * @minLength `1`
   * @maxLength `1011`
   * @pattern `^arn:aws([a-z0-9\-]+)?:([a-zA-Z0-9\-]+):([a-z0-9\-]+)?:([0-9]{12})?:(.+)$`
   */
  RuleArn: string;
};
/**
 * Type definition for `AWS::ObservabilityAdmin::OrganizationCentralizationRule.CentralizationRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-observabilityadmin-organizationcentralizationrule-centralizationrule.html}
 */
export type CentralizationRule = {
  Destination: CentralizationRuleDestination;
  Source: CentralizationRuleSource;
};
/**
 * Type definition for `AWS::ObservabilityAdmin::OrganizationCentralizationRule.CentralizationRuleDestination`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-observabilityadmin-organizationcentralizationrule-centralizationruledestination.html}
 */
export type CentralizationRuleDestination = {
  /**
   * @minLength `12`
   * @maxLength `12`
   * @pattern `^[0-9]{12}$`
   */
  Account?: string;
  DestinationLogsConfiguration?: DestinationLogsConfiguration;
  /**
   * @minLength `1`
   */
  Region: string;
};
/**
 * Type definition for `AWS::ObservabilityAdmin::OrganizationCentralizationRule.CentralizationRuleSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-observabilityadmin-organizationcentralizationrule-centralizationrulesource.html}
 */
export type CentralizationRuleSource = {
  /**
   * @minLength `1`
   */
  Regions: string[];
  /**
   * @minLength `1`
   * @maxLength `2000`
   */
  Scope?: string;
  SourceLogsConfiguration?: SourceLogsConfiguration;
};
/**
 * Type definition for `AWS::ObservabilityAdmin::OrganizationCentralizationRule.DestinationLogsConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-observabilityadmin-organizationcentralizationrule-destinationlogsconfiguration.html}
 */
export type DestinationLogsConfiguration = {
  BackupConfiguration?: LogsBackupConfiguration;
  LogsEncryptionConfiguration?: LogsEncryptionConfiguration;
};
/**
 * Type definition for `AWS::ObservabilityAdmin::OrganizationCentralizationRule.LogsBackupConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-observabilityadmin-organizationcentralizationrule-logsbackupconfiguration.html}
 */
export type LogsBackupConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `1011`
   * @pattern `^arn:aws([a-z0-9\-]+)?:([a-zA-Z0-9\-]+):([a-z0-9\-]+)?:([0-9]{12})?:(.+)$`
   */
  KmsKeyArn?: string;
  /**
   * @minLength `1`
   */
  Region: string;
};
/**
 * Type definition for `AWS::ObservabilityAdmin::OrganizationCentralizationRule.LogsEncryptionConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-observabilityadmin-organizationcentralizationrule-logsencryptionconfiguration.html}
 */
export type LogsEncryptionConfiguration = {
  EncryptionConflictResolutionStrategy?: "ALLOW" | "SKIP";
  EncryptionStrategy: "CUSTOMER_MANAGED" | "AWS_OWNED";
  /**
   * @minLength `1`
   * @maxLength `1011`
   * @pattern `^arn:aws([a-z0-9\-]+)?:([a-zA-Z0-9\-]+):([a-z0-9\-]+)?:([0-9]{12})?:(.+)$`
   */
  KmsKeyArn?: string;
};
/**
 * Type definition for `AWS::ObservabilityAdmin::OrganizationCentralizationRule.SourceLogsConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-observabilityadmin-organizationcentralizationrule-sourcelogsconfiguration.html}
 */
export type SourceLogsConfiguration = {
  EncryptedLogGroupStrategy: "ALLOW" | "SKIP";
  /**
   * @minLength `1`
   * @maxLength `2000`
   */
  LogGroupSelectionCriteria: string;
};
/**
 * Type definition for `AWS::ObservabilityAdmin::OrganizationCentralizationRule.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-observabilityadmin-organizationcentralizationrule-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::ObservabilityAdmin::OrganizationCentralizationRule`.
 * Resource schema for AWS:ObservabilityAdmin:OrganizationCentralizationRule
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-observabilityadmin-organizationcentralizationrule.html}
 */
export class ObservabilityAdminOrganizationCentralizationRule extends $Resource<
  "AWS::ObservabilityAdmin::OrganizationCentralizationRule",
  ObservabilityAdminOrganizationCentralizationRuleProperties,
  ObservabilityAdminOrganizationCentralizationRuleAttributes
> {
  public static readonly Type =
    "AWS::ObservabilityAdmin::OrganizationCentralizationRule";
  constructor(
    logicalId: string,
    properties: ObservabilityAdminOrganizationCentralizationRuleProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ObservabilityAdminOrganizationCentralizationRule.Type,
      properties,
      options,
    );
  }
}
