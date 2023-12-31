import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * The AWS::SecurityHub::AutomationRule resource represents the Automation Rule in your account. One rule resource is created for each Automation Rule in which you configure rule criteria and actions.


 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html}
 */
export type SecurityHubAutomationRuleProperties = {
  /**
   * @minLength `1`
   * @maxLength `1`
   */
  Actions?: AutomationRulesAction[];
  /**
   * The rule criteria for evaluating findings
   */
  Criteria?: AutomationRulesFindingFilters;
  /**
   * Rule description
   * @minLength `1`
   * @maxLength `1024`
   */
  Description?: string;
  /**
   * If Rule is a terminal rule
   */
  IsTerminal?: boolean;
  /**
   * Rule name
   * @minLength `1`
   * @maxLength `256`
   */
  RuleName?: string;
  /**
   * Rule order value
   * @min `1`
   * @max `1000`
   */
  RuleOrder?: number;
  /**
   * Status of the Rule upon creation
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
   * The date and time when Automation Rule was created
   * @pattern `^(\d\d\d\d)-([0][1-9]|[1][0-2])-([0][1-9]|[1-2](\d)|[3][0-1])[T](?:([0-1](\d)|[2][0-3]):[0-5](\d):[0-5](\d)|23:59:60)(?:\.(\d)+)?([Z]|[+-](\d\d)(:?(\d\d))?)$`
   */
  CreatedAt: string;
  /**
   * The identifier by which created the rule
   * @minLength `1`
   * @maxLength `256`
   */
  CreatedBy: string;
  /**
   * An Automation Rule Arn is automatically created
   * @pattern `arn:aws\S*:securityhub:\S*`
   */
  RuleArn: string;
  /**
   * The date and time when Automation Rule was last updated
   * @pattern `^(\d\d\d\d)-([0][1-9]|[1][0-2])-([0][1-9]|[1-2](\d)|[3][0-1])[T](?:([0-1](\d)|[2][0-3]):[0-5](\d):[0-5](\d)|23:59:60)(?:\.(\d)+)?([Z]|[+-](\d\d)(:?(\d\d))?)$`
   */
  UpdatedAt: string;
};
/**
 * Type definition for `AWS::SecurityHub::AutomationRule.AutomationRulesAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-automationrulesaction.html}
 */
export type AutomationRulesAction = {
  FindingFieldsUpdate: AutomationRulesFindingFieldsUpdate;
  Type: "FINDING_FIELDS_UPDATE";
};
/**
 * Type definition for `AWS::SecurityHub::AutomationRule.AutomationRulesFindingFieldsUpdate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-automationrulesfindingfieldsupdate.html}
 */
export type AutomationRulesFindingFieldsUpdate = {
  /**
   * @max `100`
   */
  Confidence?: number;
  /**
   * @max `100`
   */
  Criticality?: number;
  /**
   * Note added to the finding
   */
  Note?: NoteUpdate;
  /**
   * @minLength `1`
   * @maxLength `10`
   */
  RelatedFindings?: RelatedFinding[];
  /**
   * Severity of the finding
   */
  Severity?: SeverityUpdate;
  /**
   * @maxLength `50`
   */
  Types?: string[];
  UserDefinedFields?: map;
  VerificationState?:
    | "UNKNOWN"
    | "TRUE_POSITIVE"
    | "FALSE_POSITIVE"
    | "BENIGN_POSITIVE";
  /**
   * Workflow status set for the finding
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
 * Type definition for `AWS::SecurityHub::AutomationRule.BooleanFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-booleanfilter.html}
 */
export type BooleanFilter = {
  Value: boolean;
};
/**
 * Type definition for `AWS::SecurityHub::AutomationRule.DateFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-datefilter.html}
 */
export type DateFilter = {
  DateRange?: DateRange;
  /**
   * @pattern `^(\d\d\d\d)-([0][1-9]|[1][0-2])-([0][1-9]|[1-2](\d)|[3][0-1])[T](?:([0-1](\d)|[2][0-3]):[0-5](\d):[0-5](\d)|23:59:60)(?:\.(\d)+)?([Z]|[+-](\d\d)(:?(\d\d))?)$`
   */
  End?: string;
  /**
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
  UpdatedBy: string | string;
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
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-relatedfinding.html}
 */
export type RelatedFinding = {
  Id: string | string;
  /**
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
  Comparison: StringFilterComparison;
  Value: string;
};
/**
 * Type definition for `AWS::SecurityHub::AutomationRule.StringFilterComparison`.
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
 * Type definition for `AWS::SecurityHub::AutomationRule.map`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-map.html}
 */
export type map = Record<string, string>;
/**
 * The AWS::SecurityHub::AutomationRule resource represents the Automation Rule in your account. One rule resource is created for each Automation Rule in which you configure rule criteria and actions.


 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html}
 */
export class SecurityHubAutomationRule extends $Resource<
  "AWS::SecurityHub::AutomationRule",
  SecurityHubAutomationRuleProperties,
  SecurityHubAutomationRuleAttributes
> {
  public static readonly Type = "AWS::SecurityHub::AutomationRule";
  public static readonly AttributeNames = [
    "CreatedAt" as const,
    "CreatedBy" as const,
    "RuleArn" as const,
    "UpdatedAt" as const,
  ];
  constructor(
    logicalId: string,
    properties: SecurityHubAutomationRuleProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      SecurityHubAutomationRule.Type,
      properties,
      SecurityHubAutomationRule.AttributeNames,
      options,
    );
  }
}
