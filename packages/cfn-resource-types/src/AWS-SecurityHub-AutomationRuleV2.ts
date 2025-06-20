import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::SecurityHub::AutomationRuleV2
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrulev2.html}
 */
export type SecurityHubAutomationRuleV2Properties = {
  /**
   * A list of actions to be performed when the rule criteria is met
   * @minLength `1`
   * @maxLength `1`
   */
  Actions: AutomationRulesActionV2[];
  /**
   * Defines the parameters and conditions used to evaluate and filter security findings
   */
  Criteria: Criteria;
  /**
   * A description of the automation rule
   * @minLength `1`
   * @maxLength `256`
   * @pattern `.*\S.*`
   */
  Description: string;
  /**
   * The name of the automation rule
   * @minLength `1`
   * @maxLength `256`
   * @pattern `.*\S.*`
   */
  RuleName: string;
  /**
   * The value for the rule priority
   * @min `1`
   * @max `1000`
   */
  RuleOrder: number;
  /**
   * The status of the automation rule
   */
  RuleStatus?: "ENABLED" | "DISABLED";
  /**
   * A key-value pair to associate with a resource.
   */
  Tags?: Tags;
};
/**
 * Attribute type definition for `AWS::SecurityHub::AutomationRuleV2`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrulev2.html#aws-resource-securityhub-automationrulev2-return-values}
 */
export type SecurityHubAutomationRuleV2Attributes = {
  /**
   * The timestamp formatted in ISO8601
   * @pattern `^(\d\d\d\d)-([0][1-9]|[1][0-2])-([0][1-9]|[1-2](\d)|[3][0-1])[T](?:([0-1](\d)|[2][0-3]):[0-5](\d):[0-5](\d)|23:59:60)(?:\.(\d)+)?([Z]|[+-](\d\d)(:?(\d\d))?)$`
   */
  CreatedAt: string;
  /**
   * The ARN of the automation rule
   * @pattern `^arn:aws\S*:securityhub:[a-z0-9-]+:[0-9]{12}:automation-rulev2/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$`
   */
  RuleArn: string;
  /**
   * The ID of the automation rule
   * @pattern `^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$`
   */
  RuleId: string;
  /**
   * The timestamp formatted in ISO8601
   * @pattern `^(\d\d\d\d)-([0][1-9]|[1][0-2])-([0][1-9]|[1-2](\d)|[3][0-1])[T](?:([0-1](\d)|[2][0-3]):[0-5](\d):[0-5](\d)|23:59:60)(?:\.(\d)+)?([Z]|[+-](\d\d)(:?(\d\d))?)$`
   */
  UpdatedAt: string;
};
/**
 * Type definition for `AWS::SecurityHub::AutomationRuleV2.AllowedOperators`.
 * The logical operator used to combine multiple conditions
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrulev2-allowedoperators.html}
 */
export type AllowedOperators = "AND" | "OR";
/**
 * Type definition for `AWS::SecurityHub::AutomationRuleV2.AutomationRulesActionV2`.
 * Allows you to configure automated responses
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrulev2-automationrulesactionv2.html}
 */
export type AutomationRulesActionV2 = {
  /**
   * The settings for integrating automation rule actions with external systems or service
   */
  ExternalIntegrationConfiguration?: ExternalIntegrationConfiguration;
  /**
   * The changes to be applied to fields in a security finding when an automation rule is triggered
   */
  FindingFieldsUpdate?: AutomationRulesFindingFieldsUpdateV2;
  /**
   * The category of action to be executed by the automation rule
   */
  Type: "FINDING_FIELDS_UPDATE" | "EXTERNAL_INTEGRATION";
};
/**
 * Type definition for `AWS::SecurityHub::AutomationRuleV2.AutomationRulesFindingFieldsUpdateV2`.
 * The changes to be applied to fields in a security finding when an automation rule is triggered
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrulev2-automationrulesfindingfieldsupdatev2.html}
 */
export type AutomationRulesFindingFieldsUpdateV2 = {
  /**
   * Notes or contextual information for findings that are modified by the automation rule
   * @pattern `.*\S.*`
   */
  Comment?: string;
  /**
   * The severity level to be assigned to findings that match the automation rule criteria
   */
  SeverityId?: number;
  /**
   * The status to be applied to findings that match automation rule criteria
   */
  StatusId?: number;
};
/**
 * Type definition for `AWS::SecurityHub::AutomationRuleV2.BooleanFilter`.
 * Boolean filter for querying findings
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrulev2-booleanfilter.html}
 */
export type BooleanFilter = {
  /**
   * The value of the boolean
   */
  Value: boolean;
};
/**
 * Type definition for `AWS::SecurityHub::AutomationRuleV2.CompositeFilter`.
 * Enables the creation of filtering criteria for security findings
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrulev2-compositefilter.html}
 */
export type CompositeFilter = {
  /**
   * Enables filtering based on boolean field values
   * @minLength `1`
   * @maxLength `20`
   */
  BooleanFilters?: OcsfBooleanFilter[];
  /**
   * Enables filtering based on date and timestamp fields
   * @minLength `1`
   * @maxLength `20`
   */
  DateFilters?: OcsfDateFilter[];
  /**
   * Enables filtering based on map field value
   * @minLength `1`
   * @maxLength `20`
   */
  MapFilters?: OcsfMapFilter[];
  /**
   * Enables filtering based on numerical field values
   * @minLength `1`
   * @maxLength `20`
   */
  NumberFilters?: OcsfNumberFilter[];
  /**
   * The logical operator used to combine multiple conditions
   */
  Operator?: AllowedOperators;
  /**
   * Enables filtering based on string field values
   * @minLength `1`
   * @maxLength `20`
   */
  StringFilters?: OcsfStringFilter[];
};
/**
 * Type definition for `AWS::SecurityHub::AutomationRuleV2.Criteria`.
 * Defines the parameters and conditions used to evaluate and filter security findings
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrulev2-criteria.html}
 */
export type Criteria = {
  /**
   * The filtering conditions that align with OCSF standards
   */
  OcsfFindingCriteria?: OcsfFindingFilters;
};
/**
 * Type definition for `AWS::SecurityHub::AutomationRuleV2.DateFilter`.
 * A date filter for querying findings
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrulev2-datefilter.html}
 */
export type DateFilter = {
  /**
   * A date range for the date filter
   */
  DateRange?: DateRange;
  /**
   * The timestamp formatted in ISO8601
   * @pattern `^(\d\d\d\d)-([0][1-9]|[1][0-2])-([0][1-9]|[1-2](\d)|[3][0-1])[T](?:([0-1](\d)|[2][0-3]):[0-5](\d):[0-5](\d)|23:59:60)(?:\.(\d)+)?([Z]|[+-](\d\d)(:?(\d\d))?)$`
   */
  End?: string;
  /**
   * The timestamp formatted in ISO8601
   * @pattern `^(\d\d\d\d)-([0][1-9]|[1][0-2])-([0][1-9]|[1-2](\d)|[3][0-1])[T](?:([0-1](\d)|[2][0-3]):[0-5](\d):[0-5](\d)|23:59:60)(?:\.(\d)+)?([Z]|[+-](\d\d)(:?(\d\d))?)$`
   */
  Start?: string;
};
/**
 * Type definition for `AWS::SecurityHub::AutomationRuleV2.DateRange`.
 * A date range for the date filter
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrulev2-daterange.html}
 */
export type DateRange = {
  /**
   * A date range unit for the date filter
   */
  Unit: "DAYS";
  /**
   * A date range value for the date filter
   */
  Value: number;
};
/**
 * Type definition for `AWS::SecurityHub::AutomationRuleV2.ExternalIntegrationConfiguration`.
 * The settings for integrating automation rule actions with external systems or service
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrulev2-externalintegrationconfiguration.html}
 */
export type ExternalIntegrationConfiguration = {
  /**
   * The ARN of the connector that establishes the integration
   * @pattern `.*\S.*`
   */
  ConnectorArn?: string;
};
/**
 * Type definition for `AWS::SecurityHub::AutomationRuleV2.MapFilter`.
 * A map filter for filtering findings
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrulev2-mapfilter.html}
 */
export type MapFilter = {
  /**
   * The condition to apply to the key value when filtering findings with a map filter
   */
  Comparison: "EQUALS" | "NOT_EQUALS";
  /**
   * The key of the map filter
   * @minLength `1`
   * @maxLength `4096`
   */
  Key: string;
  /**
   * The value for the key in the map filter
   * @minLength `1`
   * @maxLength `4096`
   */
  Value: string;
};
/**
 * Type definition for `AWS::SecurityHub::AutomationRuleV2.NumberFilter`.
 * A number filter for querying findings
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrulev2-numberfilter.html}
 */
export type NumberFilter = {
  /**
   * The equal-to condition to be applied to a single field when querying for findings
   */
  Eq?: number;
  /**
   * The greater-than-equal condition to be applied to a single field when querying for findings
   */
  Gte?: number;
  /**
   * The less-than-equal condition to be applied to a single field when querying for findings
   */
  Lte?: number;
};
/**
 * Type definition for `AWS::SecurityHub::AutomationRuleV2.OcsfBooleanFilter`.
 * Enables filtering of security findings based on boolean field values in OCSF
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrulev2-ocsfbooleanfilter.html}
 */
export type OcsfBooleanFilter = {
  /**
   * The name of the field
   */
  FieldName:
    | "compliance.assessments.meets_criteria"
    | "vulnerabilities.is_exploit_available"
    | "vulnerabilities.is_fix_available";
  /**
   * Boolean filter for querying findings
   */
  Filter: BooleanFilter;
};
/**
 * Type definition for `AWS::SecurityHub::AutomationRuleV2.OcsfDateFilter`.
 * Enables filtering of security findings based on date and timestamp fields in OCSF
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrulev2-ocsfdatefilter.html}
 */
export type OcsfDateFilter = {
  /**
   * The name of the field
   */
  FieldName:
    | "finding_info.created_time_dt"
    | "finding_info.first_seen_time_dt"
    | "finding_info.last_seen_time_dt"
    | "finding_info.modified_time_dt";
  /**
   * A date filter for querying findings
   */
  Filter: DateFilter;
};
/**
 * Type definition for `AWS::SecurityHub::AutomationRuleV2.OcsfFindingFilters`.
 * The filtering conditions that align with OCSF standards
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrulev2-ocsffindingfilters.html}
 */
export type OcsfFindingFilters = {
  /**
   * Enables the creation of complex filtering conditions by combining filter
   */
  CompositeFilters?: CompositeFilter[];
  /**
   * The logical operator used to combine multiple conditions
   */
  CompositeOperator?: AllowedOperators;
};
/**
 * Type definition for `AWS::SecurityHub::AutomationRuleV2.OcsfMapFilter`.
 * Enables filtering of security findings based on map field values in OCSF
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrulev2-ocsfmapfilter.html}
 */
export type OcsfMapFilter = {
  /**
   * The name of the field
   */
  FieldName: "resources.tags";
  /**
   * A map filter for filtering findings
   */
  Filter: MapFilter;
};
/**
 * Type definition for `AWS::SecurityHub::AutomationRuleV2.OcsfNumberFilter`.
 * Enables filtering of security findings based on numerical field values in OCSF
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrulev2-ocsfnumberfilter.html}
 */
export type OcsfNumberFilter = {
  /**
   * The name of the field
   */
  FieldName:
    | "activity_id"
    | "compliance.status_id"
    | "confidence_score"
    | "severity_id"
    | "status_id"
    | "finding_info.related_events_count";
  /**
   * A number filter for querying findings
   */
  Filter: NumberFilter;
};
/**
 * Type definition for `AWS::SecurityHub::AutomationRuleV2.OcsfStringField`.
 * The name of the field
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrulev2-ocsfstringfield.html}
 */
export type OcsfStringField =
  | "metadata.uid"
  | "activity_name"
  | "cloud.account.name"
  | "cloud.account.uid"
  | "cloud.provider"
  | "cloud.region"
  | "compliance.assessments.category"
  | "compliance.assessments.name"
  | "compliance.control"
  | "compliance.status"
  | "compliance.standards"
  | "finding_info.desc"
  | "finding_info.src_url"
  | "finding_info.title"
  | "finding_info.types"
  | "finding_info.uid"
  | "finding_info.related_events.uid"
  | "finding_info.related_events.product.uid"
  | "finding_info.related_events.title"
  | "metadata.product.feature.uid"
  | "metadata.product.name"
  | "metadata.product.uid"
  | "metadata.product.vendor_name"
  | "remediation.desc"
  | "remediation.references"
  | "resources.cloud_partition"
  | "resources.name"
  | "resources.region"
  | "resources.type"
  | "resources.uid"
  | "severity"
  | "status"
  | "comment"
  | "vulnerabilities.fix_coverage"
  | "class_name";
/**
 * Type definition for `AWS::SecurityHub::AutomationRuleV2.OcsfStringFilter`.
 * Enables filtering of security findings based on string field values in OCSF
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrulev2-ocsfstringfilter.html}
 */
export type OcsfStringFilter = {
  /**
   * The name of the field
   */
  FieldName: OcsfStringField;
  /**
   * A string filter for filtering findings
   */
  Filter: StringFilter;
};
/**
 * Type definition for `AWS::SecurityHub::AutomationRuleV2.StringFilter`.
 * A string filter for filtering findings
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrulev2-stringfilter.html}
 */
export type StringFilter = {
  /**
   * The condition to apply to a string value when filtering findings
   */
  Comparison:
    | "EQUALS"
    | "PREFIX"
    | "NOT_EQUALS"
    | "PREFIX_NOT_EQUALS"
    | "CONTAINS";
  /**
   * The string filter value
   * @minLength `1`
   * @maxLength `4096`
   */
  Value: string;
};
/**
 * Type definition for `AWS::SecurityHub::AutomationRuleV2.Tags`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrulev2-tags.html}
 */
export type Tags = Record<string, string>;
/**
 * Resource schema for AWS::SecurityHub::AutomationRuleV2
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrulev2.html}
 */
export class SecurityHubAutomationRuleV2 extends $Resource<
  "AWS::SecurityHub::AutomationRuleV2",
  SecurityHubAutomationRuleV2Properties,
  SecurityHubAutomationRuleV2Attributes
> {
  public static readonly Type = "AWS::SecurityHub::AutomationRuleV2";
  constructor(
    logicalId: string,
    properties: SecurityHubAutomationRuleV2Properties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SecurityHubAutomationRuleV2.Type, properties, options);
  }
}
