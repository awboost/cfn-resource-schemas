import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The ``AWS::SecurityHub::AutomationRule`` resource specifies an automation rule based on input parameters. For more information, see [Automation rules](https://docs.aws.amazon.com/securityhub/latest/userguide/automation-rules.html) in the *User Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html}
 */
export type SecurityHubAutomationRuleProperties = {
  /**
   * @minLength `1`
   * @maxLength `1`
   */
  Actions?: AutomationRulesAction[];
  /**
   * A set of [Security Finding Format (ASFF)](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-findings-format.html) finding field attributes and corresponding expected values that ASH uses to filter findings. If a rule is enabled and a finding matches the criteria specified in this parameter, ASH applies the rule action to the finding.
   */
  Criteria?: AutomationRulesFindingFilters;
  /**
   * @minLength `1`
   * @maxLength `1024`
   */
  Description?: string;
  IsTerminal?: boolean;
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  RuleName?: string;
  /**
   * @min `1`
   * @max `1000`
   */
  RuleOrder?: number;
  /**
   * Whether the rule is active after it is created. If this parameter is equal to ``ENABLED``, ASH applies the rule to findings and finding updates after the rule is created.
   */
  RuleStatus?: "ENABLED" | "DISABLED";
  /**
   * A key-value pair to associate with a resource.
   */
  Tags?: Tags;
};
/**
 * Attribute type definition for `AWS::SecurityHub::AutomationRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#aws-resource-securityhub-automationrule-return-values}
 */
export type SecurityHubAutomationRuleAttributes = {
  /**
   * The date and time, in UTC and ISO 8601 format.
   * @pattern `^(\d\d\d\d)-([0][1-9]|[1][0-2])-([0][1-9]|[1-2](\d)|[3][0-1])[T](?:([0-1](\d)|[2][0-3]):[0-5](\d):[0-5](\d)|23:59:60)(?:\.(\d)+)?([Z]|[+-](\d\d)(:?(\d\d))?)$`
   */
  CreatedAt: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  CreatedBy: string;
  /**
   * @pattern `arn:aws\S*:securityhub:\S*`
   */
  RuleArn: string;
  /**
   * The date and time, in UTC and ISO 8601 format.
   * @pattern `^(\d\d\d\d)-([0][1-9]|[1][0-2])-([0][1-9]|[1-2](\d)|[3][0-1])[T](?:([0-1](\d)|[2][0-3]):[0-5](\d):[0-5](\d)|23:59:60)(?:\.(\d)+)?([Z]|[+-](\d\d)(:?(\d\d))?)$`
   */
  UpdatedAt: string;
};
/**
 * Type definition for `AWS::SecurityHub::AutomationRule.arnOrId`.
 * The Amazon Resource Name (ARN) or Id of the automation rule.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-arnorid.html}
 */
export type arnOrId = string | string;
/**
 * Type definition for `AWS::SecurityHub::AutomationRule.AutomationRulesAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-automationrulesaction.html}
 */
export type AutomationRulesAction = {
  /**
   * The rule action will update the ``Note`` field of a finding.
   */
  FindingFieldsUpdate: AutomationRulesFindingFieldsUpdate;
  Type: "FINDING_FIELDS_UPDATE";
};
/**
 * Type definition for `AWS::SecurityHub::AutomationRule.AutomationRulesFindingFieldsUpdate`.
 * The rule action will update the ``Note`` field of a finding.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-automationrulesfindingfieldsupdate.html}
 */
export type AutomationRulesFindingFieldsUpdate = {
  /**
   * Integer from 0 to 100.
   * @min `0`
   * @max `100`
   */
  Confidence?: number;
  /**
   * Integer from 0 to 100.
   * @min `0`
   * @max `100`
   */
  Criticality?: number;
  /**
   * The rule action will update the ``Note`` field of a finding.
   */
  Note?: NoteUpdate;
  /**
   * The rule action will update the ``RelatedFindings`` field of a finding.
   * @minLength `1`
   * @maxLength `10`
   */
  RelatedFindings?: RelatedFinding[];
  /**
   * The rule action will update the ``Severity`` field of a finding.
   */
  Severity?: SeverityUpdate;
  /**
   * @maxLength `50`
   */
  Types?: string[];
  /**
   * An object of user-defined name and value string pair added to a finding.
   */
  UserDefinedFields?: map;
  VerificationState?:
    | "UNKNOWN"
    | "TRUE_POSITIVE"
    | "FALSE_POSITIVE"
    | "BENIGN_POSITIVE";
  /**
   * The rule action will update the ``Workflow`` field of a finding.
   */
  Workflow?: WorkflowUpdate;
};
/**
 * Type definition for `AWS::SecurityHub::AutomationRule.AutomationRulesFindingFilters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-automationrulesfindingfilters.html}
 */
export type AutomationRulesFindingFilters = {
  /**
   * @maxLength `100`
   */
  AwsAccountId?: StringFilter[];
  /**
   * @maxLength `20`
   */
  CompanyName?: StringFilter[];
  /**
   * @maxLength `20`
   */
  ComplianceAssociatedStandardsId?: StringFilter[];
  /**
   * @maxLength `20`
   */
  ComplianceSecurityControlId?: StringFilter[];
  /**
   * @maxLength `20`
   */
  ComplianceStatus?: StringFilter[];
  /**
   * @maxLength `20`
   */
  Confidence?: NumberFilter[];
  /**
   * @maxLength `20`
   */
  CreatedAt?: DateFilter[];
  /**
   * @maxLength `20`
   */
  Criticality?: NumberFilter[];
  /**
   * @maxLength `20`
   */
  Description?: StringFilter[];
  /**
   * @maxLength `20`
   */
  FirstObservedAt?: DateFilter[];
  /**
   * @maxLength `100`
   */
  GeneratorId?: StringFilter[];
  /**
   * @maxLength `20`
   */
  Id?: StringFilter[];
  /**
   * @maxLength `20`
   */
  LastObservedAt?: DateFilter[];
  /**
   * @maxLength `20`
   */
  NoteText?: StringFilter[];
  /**
   * @maxLength `20`
   */
  NoteUpdatedAt?: DateFilter[];
  /**
   * @maxLength `20`
   */
  NoteUpdatedBy?: StringFilter[];
  /**
   * @maxLength `20`
   */
  ProductArn?: StringFilter[];
  /**
   * @maxLength `20`
   */
  ProductName?: StringFilter[];
  /**
   * @maxLength `20`
   */
  RecordState?: StringFilter[];
  /**
   * @maxLength `20`
   */
  RelatedFindingsId?: StringFilter[];
  /**
   * @maxLength `20`
   */
  RelatedFindingsProductArn?: StringFilter[];
  /**
   * @maxLength `20`
   */
  ResourceDetailsOther?: MapFilter[];
  /**
   * @maxLength `100`
   */
  ResourceId?: StringFilter[];
  /**
   * @maxLength `20`
   */
  ResourcePartition?: StringFilter[];
  /**
   * @maxLength `20`
   */
  ResourceRegion?: StringFilter[];
  /**
   * @maxLength `20`
   */
  ResourceTags?: MapFilter[];
  /**
   * @maxLength `20`
   */
  ResourceType?: StringFilter[];
  /**
   * @maxLength `20`
   */
  SeverityLabel?: StringFilter[];
  /**
   * @maxLength `20`
   */
  SourceUrl?: StringFilter[];
  /**
   * @maxLength `100`
   */
  Title?: StringFilter[];
  /**
   * @maxLength `20`
   */
  Type?: StringFilter[];
  /**
   * @maxLength `20`
   */
  UpdatedAt?: DateFilter[];
  /**
   * @maxLength `20`
   */
  UserDefinedFields?: MapFilter[];
  /**
   * @maxLength `20`
   */
  VerificationState?: StringFilter[];
  /**
   * @maxLength `20`
   */
  WorkflowStatus?: StringFilter[];
};
/**
 * Type definition for `AWS::SecurityHub::AutomationRule.DateFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-datefilter.html}
 */
export type DateFilter = {
  DateRange?: DateRange;
  /**
   * The date and time, in UTC and ISO 8601 format.
   * @pattern `^(\d\d\d\d)-([0][1-9]|[1][0-2])-([0][1-9]|[1-2](\d)|[3][0-1])[T](?:([0-1](\d)|[2][0-3]):[0-5](\d):[0-5](\d)|23:59:60)(?:\.(\d)+)?([Z]|[+-](\d\d)(:?(\d\d))?)$`
   */
  End?: string;
  /**
   * The date and time, in UTC and ISO 8601 format.
   * @pattern `^(\d\d\d\d)-([0][1-9]|[1][0-2])-([0][1-9]|[1-2](\d)|[3][0-1])[T](?:([0-1](\d)|[2][0-3]):[0-5](\d):[0-5](\d)|23:59:60)(?:\.(\d)+)?([Z]|[+-](\d\d)(:?(\d\d))?)$`
   */
  Start?: string;
};
/**
 * Type definition for `AWS::SecurityHub::AutomationRule.DateRange`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-daterange.html}
 */
export type DateRange = {
  Unit: "DAYS";
  Value: number;
};
/**
 * Type definition for `AWS::SecurityHub::AutomationRule.map`.
 * An object of user-defined name and value string pair added to a finding.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-map.html}
 */
export type map = Record<string, string>;
/**
 * Type definition for `AWS::SecurityHub::AutomationRule.MapFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-mapfilter.html}
 */
export type MapFilter = {
  Comparison: "EQUALS" | "NOT_EQUALS" | "CONTAINS" | "NOT_CONTAINS";
  Key: string;
  Value: string;
};
/**
 * Type definition for `AWS::SecurityHub::AutomationRule.NoteUpdate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-noteupdate.html}
 */
export type NoteUpdate = {
  /**
   * @minLength `1`
   * @maxLength `512`
   */
  Text: string;
  /**
   * The Amazon Resource Name (ARN) or Id of the automation rule.
   */
  UpdatedBy: arnOrId;
};
/**
 * Type definition for `AWS::SecurityHub::AutomationRule.NumberFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-numberfilter.html}
 */
export type NumberFilter = {
  Eq?: number;
  Gte?: number;
  Lte?: number;
};
/**
 * Type definition for `AWS::SecurityHub::AutomationRule.RelatedFinding`.
 * Provides details about a list of findings that the current finding relates to.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-relatedfinding.html}
 */
export type RelatedFinding = {
  /**
   * The Amazon Resource Name (ARN) or Id of the automation rule.
   */
  Id: arnOrId;
  /**
   * The Amazon Resource Name (ARN) for the product that generated a related finding.
   * @minLength `12`
   * @maxLength `2048`
   * @pattern `^arn:(aws|aws-cn|aws-us-gov|aws-iso-?[a-z]{0,2}):[A-Za-z0-9]{1,63}:[a-z]+-([a-z]{1,10}-)?[a-z]+-[0-9]+:([0-9]{12})?:.+$`
   */
  ProductArn: string;
};
/**
 * Type definition for `AWS::SecurityHub::AutomationRule.SeverityUpdate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-severityupdate.html}
 */
export type SeverityUpdate = {
  Label?: "INFORMATIONAL" | "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
  /**
   * Integer from 0 to 100.
   * @min `0`
   * @max `100`
   */
  Normalized?: number;
  Product?: number;
};
/**
 * Type definition for `AWS::SecurityHub::AutomationRule.StringFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-stringfilter.html}
 */
export type StringFilter = {
  /**
   * The condition to apply to a string value when filtering Security Hub findings.
   */
  Comparison: StringFilterComparison;
  Value: string;
};
/**
 * Type definition for `AWS::SecurityHub::AutomationRule.StringFilterComparison`.
 * The condition to apply to a string value when filtering Security Hub findings.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-stringfiltercomparison.html}
 */
export type StringFilterComparison =
  | "EQUALS"
  | "PREFIX"
  | "NOT_EQUALS"
  | "PREFIX_NOT_EQUALS"
  | "CONTAINS"
  | "NOT_CONTAINS";
/**
 * Type definition for `AWS::SecurityHub::AutomationRule.Tags`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-tags.html}
 */
export type Tags = Record<string, string>;
/**
 * Type definition for `AWS::SecurityHub::AutomationRule.WorkflowUpdate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-workflowupdate.html}
 */
export type WorkflowUpdate = {
  Status: "NEW" | "NOTIFIED" | "RESOLVED" | "SUPPRESSED";
};
/**
 * The ``AWS::SecurityHub::AutomationRule`` resource specifies an automation rule based on input parameters. For more information, see [Automation rules](https://docs.aws.amazon.com/securityhub/latest/userguide/automation-rules.html) in the *User Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html}
 */
export class SecurityHubAutomationRule extends $Resource<
  "AWS::SecurityHub::AutomationRule",
  SecurityHubAutomationRuleProperties,
  SecurityHubAutomationRuleAttributes
> {
  public static readonly Type = "AWS::SecurityHub::AutomationRule";
  constructor(
    logicalId: string,
    properties: SecurityHubAutomationRuleProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SecurityHubAutomationRule.Type, properties, options);
  }
}
