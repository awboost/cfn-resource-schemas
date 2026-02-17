import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The ``AWS::SecurityHub::AutomationRule`` resource specifies an automation rule based on input parameters. For more information, see [Automation rules](https://docs.aws.amazon.com/securityhub/latest/userguide/automation-rules.html) in the *User Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html}
 */
export type SecurityHubAutomationRuleProperties = {
  /**
   * One or more actions to update finding fields if a finding matches the conditions specified in ``Criteria``.
   * @minLength `1`
   * @maxLength `1`
   */
  Actions: AutomationRulesAction[];
  /**
   * A set of [Security Finding Format (ASFF)](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-findings-format.html) finding field attributes and corresponding expected values that ASH uses to filter findings. If a rule is enabled and a finding matches the criteria specified in this parameter, ASH applies the rule action to the finding.
   */
  Criteria: AutomationRulesFindingFilters;
  /**
   * A description of the rule.
   * @minLength `1`
   * @maxLength `1024`
   */
  Description: string;
  /**
   * Specifies whether a rule is the last to be applied with respect to a finding that matches the rule criteria. This is useful when a finding matches the criteria for multiple rules, and each rule has different actions. If a rule is terminal, Security Hub CSPM applies the rule action to a finding that matches the rule criteria and doesn't evaluate other rules for the finding. By default, a rule isn't terminal.
   */
  IsTerminal?: boolean;
  /**
   * The name of the rule.
   * @minLength `1`
   * @maxLength `256`
   */
  RuleName: string;
  /**
   * An integer ranging from 1 to 1000 that represents the order in which the rule action is applied to findings. Security Hub CSPM applies rules with lower values for this parameter first.
   * @min `1`
   * @max `1000`
   */
  RuleOrder: number;
  /**
   * Whether the rule is active after it is created. If this parameter is equal to ``ENABLED``, ASH applies the rule to findings and finding updates after the rule is created.
   */
  RuleStatus?: "ENABLED" | "DISABLED";
  /**
   * User-defined tags associated with an automation rule.
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
 * One or more actions that ASHlong takes when a finding matches the defined criteria of a rule.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-automationrulesaction.html}
 */
export type AutomationRulesAction = {
  /**
   * Specifies that the automation rule action is an update to a finding field.
   */
  FindingFieldsUpdate: AutomationRulesFindingFieldsUpdate;
  /**
   * Specifies the type of action that Security Hub CSPM takes when a finding matches the defined criteria of a rule.
   */
  Type: "FINDING_FIELDS_UPDATE";
};
/**
 * Type definition for `AWS::SecurityHub::AutomationRule.AutomationRulesFindingFieldsUpdate`.
 * Identifies the finding fields that the automation rule action updates when a finding matches the defined criteria.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-automationrulesfindingfieldsupdate.html}
 */
export type AutomationRulesFindingFieldsUpdate = {
  /**
   * The rule action updates the ``Confidence`` field of a finding.
   * @min `0`
   * @max `100`
   */
  Confidence?: number;
  /**
   * The rule action updates the ``Criticality`` field of a finding.
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
   * The rule action updates the ``Types`` field of a finding.
   * @maxLength `50`
   */
  Types?: string[];
  /**
   * The rule action updates the ``UserDefinedFields`` field of a finding.
   */
  UserDefinedFields?: map;
  /**
   * The rule action updates the ``VerificationState`` field of a finding.
   */
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
 * The criteria that determine which findings a rule applies to.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-automationrulesfindingfilters.html}
 */
export type AutomationRulesFindingFilters = {
  /**
     * The AWS-account ID in which a finding was generated.
      Array Members: Minimum number of 1 item. Maximum number of 100 items.
     * @maxLength `100`
     */
  AwsAccountId?: StringFilter[];
  /**
     * The name of the company for the product that generated the finding. For control-based findings, the company is AWS.
      Array Members: Minimum number of 1 item. Maximum number of 20 items.
     * @maxLength `20`
     */
  CompanyName?: StringFilter[];
  /**
     * The unique identifier of a standard in which a control is enabled. This field consists of the resource portion of the Amazon Resource Name (ARN) returned for a standard in the [DescribeStandards](https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeStandards.html) API response.
      Array Members: Minimum number of 1 item. Maximum number of 20 items.
     * @maxLength `20`
     */
  ComplianceAssociatedStandardsId?: StringFilter[];
  /**
     * The security control ID for which a finding was generated. Security control IDs are the same across standards.
      Array Members: Minimum number of 1 item. Maximum number of 20 items.
     * @maxLength `20`
     */
  ComplianceSecurityControlId?: StringFilter[];
  /**
     * The result of a security check. This field is only used for findings generated from controls.
      Array Members: Minimum number of 1 item. Maximum number of 20 items.
     * @maxLength `20`
     */
  ComplianceStatus?: StringFilter[];
  /**
     * The likelihood that a finding accurately identifies the behavior or issue that it was intended to identify. ``Confidence`` is scored on a 0–100 basis using a ratio scale. A value of ``0`` means 0 percent confidence, and a value of ``100`` means 100 percent confidence. For example, a data exfiltration detection based on a statistical deviation of network traffic has low confidence because an actual exfiltration hasn't been verified. For more information, see [Confidence](https://docs.aws.amazon.com/securityhub/latest/userguide/asff-top-level-attributes.html#asff-confidence) in the *User Guide*.
      Array Members: Minimum number of 1 item. Maximum number of 20 items.
     * @maxLength `20`
     */
  Confidence?: NumberFilter[];
  /**
     * A timestamp that indicates when this finding record was created.
     For more information about the validation and formatting of timestamp fields in ASHlong, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
      Array Members: Minimum number of 1 item. Maximum number of 20 items.
     * @maxLength `20`
     */
  CreatedAt?: DateFilter[];
  /**
     * The level of importance that is assigned to the resources that are associated with a finding. ``Criticality`` is scored on a 0–100 basis, using a ratio scale that supports only full integers. A score of ``0`` means that the underlying resources have no criticality, and a score of ``100`` is reserved for the most critical resources. For more information, see [Criticality](https://docs.aws.amazon.com/securityhub/latest/userguide/asff-top-level-attributes.html#asff-criticality) in the *User Guide*.
      Array Members: Minimum number of 1 item. Maximum number of 20 items.
     * @maxLength `20`
     */
  Criticality?: NumberFilter[];
  /**
     * A finding's description.
      Array Members: Minimum number of 1 item. Maximum number of 20 items.
     * @maxLength `20`
     */
  Description?: StringFilter[];
  /**
     * A timestamp that indicates when the potential security issue captured by a finding was first observed by the security findings product.
     For more information about the validation and formatting of timestamp fields in ASHlong, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
      Array Members: Minimum number of 1 item. Maximum number of 20 items.
     * @maxLength `20`
     */
  FirstObservedAt?: DateFilter[];
  /**
     * The identifier for the solution-specific component that generated a finding.
      Array Members: Minimum number of 1 item. Maximum number of 100 items.
     * @maxLength `100`
     */
  GeneratorId?: StringFilter[];
  /**
     * The product-specific identifier for a finding.
      Array Members: Minimum number of 1 item. Maximum number of 20 items.
     * @maxLength `20`
     */
  Id?: StringFilter[];
  /**
     * A timestamp that indicates when the security findings provider most recently observed a change in the resource that is involved in the finding.
     For more information about the validation and formatting of timestamp fields in ASHlong, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
      Array Members: Minimum number of 1 item. Maximum number of 20 items.
     * @maxLength `20`
     */
  LastObservedAt?: DateFilter[];
  /**
     * The text of a user-defined note that's added to a finding.
      Array Members: Minimum number of 1 item. Maximum number of 20 items.
     * @maxLength `20`
     */
  NoteText?: StringFilter[];
  /**
     * The timestamp of when the note was updated.
     For more information about the validation and formatting of timestamp fields in ASHlong, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
      Array Members: Minimum number of 1 item. Maximum number of 20 items.
     * @maxLength `20`
     */
  NoteUpdatedAt?: DateFilter[];
  /**
     * The principal that created a note.
      Array Members: Minimum number of 1 item. Maximum number of 20 items.
     * @maxLength `20`
     */
  NoteUpdatedBy?: StringFilter[];
  /**
     * The Amazon Resource Name (ARN) for a third-party product that generated a finding in Security Hub CSPM.
      Array Members: Minimum number of 1 item. Maximum number of 20 items.
     * @maxLength `20`
     */
  ProductArn?: StringFilter[];
  /**
     * Provides the name of the product that generated the finding. For control-based findings, the product name is Security Hub CSPM.
      Array Members: Minimum number of 1 item. Maximum number of 20 items.
     * @maxLength `20`
     */
  ProductName?: StringFilter[];
  /**
     * Provides the current state of a finding.
      Array Members: Minimum number of 1 item. Maximum number of 20 items.
     * @maxLength `20`
     */
  RecordState?: StringFilter[];
  /**
     * The product-generated identifier for a related finding.
      Array Members: Minimum number of 1 item. Maximum number of 20 items.
     * @maxLength `20`
     */
  RelatedFindingsId?: StringFilter[];
  /**
     * The ARN for the product that generated a related finding.
      Array Members: Minimum number of 1 item. Maximum number of 20 items.
     * @maxLength `20`
     */
  RelatedFindingsProductArn?: StringFilter[];
  /**
     * Custom fields and values about the resource that a finding pertains to.
      Array Members: Minimum number of 1 item. Maximum number of 20 items.
     * @maxLength `20`
     */
  ResourceDetailsOther?: MapFilter[];
  /**
     * The identifier for the given resource type. For AWS resources that are identified by Amazon Resource Names (ARNs), this is the ARN. For AWS resources that lack ARNs, this is the identifier as defined by the AWS-service that created the resource. For non-AWS resources, this is a unique identifier that is associated with the resource.
      Array Members: Minimum number of 1 item. Maximum number of 100 items.
     * @maxLength `100`
     */
  ResourceId?: StringFilter[];
  /**
     * The partition in which the resource that the finding pertains to is located. A partition is a group of AWS-Regions. Each AWS-account is scoped to one partition.
      Array Members: Minimum number of 1 item. Maximum number of 20 items.
     * @maxLength `20`
     */
  ResourcePartition?: StringFilter[];
  /**
     * The AWS-Region where the resource that a finding pertains to is located.
      Array Members: Minimum number of 1 item. Maximum number of 20 items.
     * @maxLength `20`
     */
  ResourceRegion?: StringFilter[];
  /**
     * A list of AWS tags associated with a resource at the time the finding was processed.
      Array Members: Minimum number of 1 item. Maximum number of 20 items.
     * @maxLength `20`
     */
  ResourceTags?: MapFilter[];
  /**
     * A finding's title.
      Array Members: Minimum number of 1 item. Maximum number of 100 items.
     * @maxLength `20`
     */
  ResourceType?: StringFilter[];
  /**
     * The severity value of the finding.
      Array Members: Minimum number of 1 item. Maximum number of 20 items.
     * @maxLength `20`
     */
  SeverityLabel?: StringFilter[];
  /**
     * Provides a URL that links to a page about the current finding in the finding product.
      Array Members: Minimum number of 1 item. Maximum number of 20 items.
     * @maxLength `20`
     */
  SourceUrl?: StringFilter[];
  /**
     * A finding's title.
      Array Members: Minimum number of 1 item. Maximum number of 100 items.
     * @maxLength `100`
     */
  Title?: StringFilter[];
  /**
     * One or more finding types in the format of namespace/category/classifier that classify a finding. For a list of namespaces, classifiers, and categories, see [Types taxonomy for ASFF](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-findings-format-type-taxonomy.html) in the *User Guide*.
      Array Members: Minimum number of 1 item. Maximum number of 20 items.
     * @maxLength `20`
     */
  Type?: StringFilter[];
  /**
     * A timestamp that indicates when the finding record was most recently updated.
     For more information about the validation and formatting of timestamp fields in ASHlong, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
      Array Members: Minimum number of 1 item. Maximum number of 20 items.
     * @maxLength `20`
     */
  UpdatedAt?: DateFilter[];
  /**
     * A list of user-defined name and value string pairs added to a finding.
      Array Members: Minimum number of 1 item. Maximum number of 20 items.
     * @maxLength `20`
     */
  UserDefinedFields?: MapFilter[];
  /**
     * Provides the veracity of a finding.
      Array Members: Minimum number of 1 item. Maximum number of 20 items.
     * @maxLength `20`
     */
  VerificationState?: StringFilter[];
  /**
     * Provides information about the status of the investigation into a finding.
      Array Members: Minimum number of 1 item. Maximum number of 20 items.
     * @maxLength `20`
     */
  WorkflowStatus?: StringFilter[];
};
/**
 * Type definition for `AWS::SecurityHub::AutomationRule.DateFilter`.
 * A date filter for querying findings.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-datefilter.html}
 */
export type DateFilter = {
  /**
   * A date range for the date filter.
   */
  DateRange?: DateRange;
  /**
     * A timestamp that provides the end date for the date filter.
     For more information about the validation and formatting of timestamp fields in ASHlong, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
     * @pattern `^(\d\d\d\d)-([0][1-9]|[1][0-2])-([0][1-9]|[1-2](\d)|[3][0-1])[T](?:([0-1](\d)|[2][0-3]):[0-5](\d):[0-5](\d)|23:59:60)(?:\.(\d)+)?([Z]|[+-](\d\d)(:?(\d\d))?)$`
     */
  End?: string;
  /**
     * A timestamp that provides the start date for the date filter.
     For more information about the validation and formatting of timestamp fields in ASHlong, see [Timestamps](https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).
     * @pattern `^(\d\d\d\d)-([0][1-9]|[1][0-2])-([0][1-9]|[1-2](\d)|[3][0-1])[T](?:([0-1](\d)|[2][0-3]):[0-5](\d):[0-5](\d)|23:59:60)(?:\.(\d)+)?([Z]|[+-](\d\d)(:?(\d\d))?)$`
     */
  Start?: string;
};
/**
 * Type definition for `AWS::SecurityHub::AutomationRule.DateRange`.
 * A date range for the date filter.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-daterange.html}
 */
export type DateRange = {
  /**
   * A date range unit for the date filter.
   */
  Unit: "DAYS";
  /**
   * A date range value for the date filter.
   */
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
 * A map filter for filtering ASHlong findings. Each map filter provides the field to check for, the value to check for, and the comparison operator.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-mapfilter.html}
 */
export type MapFilter = {
  /**
     * The condition to apply to the key value when filtering Security Hub CSPM findings with a map filter.
     To search for values that have the filter value, use one of the following comparison operators:
      +  To search for values that include the filter value, use ``CONTAINS``. For example, for the ``ResourceTags`` field, the filter ``Department CONTAINS Security`` matches findings that include the value ``Security`` for the ``Department`` tag. In the same example, a finding with a value of ``Security team`` for the ``Department`` tag is a match.
      +  To search for values that exactly match the filter value, use ``EQUALS``. For example, for the ``ResourceTags`` field, the filter ``Department EQUALS Security`` matches findings that have the value ``Security`` for the ``Department`` tag.
      
     ``CONTAINS`` and ``EQUALS`` filters on the same field are joined by ``OR``. A finding matches if it matches any one of those filters. For example, the filters ``Department CONTAINS Security OR Department CONTAINS Finance`` match a finding that includes either ``Security``, ``Finance``, or both values.
     To search for values that don't have the filter value, use one of the following comparison operators:
      +  To search for values that exclude the filter value, use ``NOT_CONTAINS``. For example, for the ``ResourceTags`` field, the filter ``Department NOT_CONTAINS Finance`` matches findings that exclude the value ``Finance`` for the ``Department`` tag.
      +  To search for values other than the filter value, use ``NOT_EQUALS``. For example, for the ``ResourceTags`` field, the filter ``Department NOT_EQUALS Finance`` matches findings that don’t have the value ``Finance`` for the ``Department`` tag.
      
     ``NOT_CONTAINS`` and ``NOT_EQUALS`` filters on the same field are joined by ``AND``. A finding matches only if it matches all of those filters. For example, the filters ``Department NOT_CONTAINS Security AND Department NOT_CONTAINS Finance`` match a finding that excludes both the ``Security`` and ``Finance`` values.
     ``CONTAINS`` filters can only be used with other ``CONTAINS`` filters. ``NOT_CONTAINS`` filters can only be used with other ``NOT_CONTAINS`` filters.
     You can’t have both a ``CONTAINS`` filter and a ``NOT_CONTAINS`` filter on the same field. Similarly, you can’t have both an ``EQUALS`` filter and a ``NOT_EQUALS`` filter on the same field. Combining filters in this way returns an error.
     ``CONTAINS`` and ``NOT_CONTAINS`` operators can be used only with automation rules. For more information, see [Automation rules](https://docs.aws.amazon.com/securityhub/latest/userguide/automation-rules.html) in the *User Guide*.
     */
  Comparison: "EQUALS" | "NOT_EQUALS" | "CONTAINS" | "NOT_CONTAINS";
  /**
   * The key of the map filter. For example, for ``ResourceTags``, ``Key`` identifies the name of the tag. For ``UserDefinedFields``, ``Key`` is the name of the field.
   */
  Key: string;
  /**
   * The value for the key in the map filter. Filter values are case sensitive. For example, one of the values for a tag called ``Department`` might be ``Security``. If you provide ``security`` as the filter value, then there's no match.
   */
  Value: string;
};
/**
 * Type definition for `AWS::SecurityHub::AutomationRule.NoteUpdate`.
 * The updated note.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-noteupdate.html}
 */
export type NoteUpdate = {
  /**
   * The updated note text.
   * @minLength `1`
   * @maxLength `512`
   */
  Text: string;
  /**
   * The principal that updated the note.
   */
  UpdatedBy: arnOrId;
};
/**
 * Type definition for `AWS::SecurityHub::AutomationRule.NumberFilter`.
 * A number filter for querying findings.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-numberfilter.html}
 */
export type NumberFilter = {
  /**
   * The equal-to condition to be applied to a single field when querying for findings.
   */
  Eq?: number;
  /**
   * The greater-than-equal condition to be applied to a single field when querying for findings.
   */
  Gte?: number;
  /**
   * The less-than-equal condition to be applied to a single field when querying for findings.
   */
  Lte?: number;
};
/**
 * Type definition for `AWS::SecurityHub::AutomationRule.RelatedFinding`.
 * Provides details about a list of findings that the current finding relates to.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-relatedfinding.html}
 */
export type RelatedFinding = {
  /**
     * The product-generated identifier for a related finding.
      Array Members: Minimum number of 1 item. Maximum number of 20 items.
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
 * Updates to the severity information for a finding.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-severityupdate.html}
 */
export type SeverityUpdate = {
  /**
     * The severity value of the finding. The allowed values are the following.
      +  ``INFORMATIONAL`` - No issue was found.
      +  ``LOW`` - The issue does not require action on its own.
      +  ``MEDIUM`` - The issue must be addressed but not urgently.
      +  ``HIGH`` - The issue must be addressed as a priority.
      +  ``CRITICAL`` - The issue must be remediated immediately to avoid it escalating.
     */
  Label?: "INFORMATIONAL" | "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
  /**
     * The normalized severity for the finding. This attribute is to be deprecated in favor of ``Label``.
     If you provide ``Normalized`` and don't provide ``Label``, ``Label`` is set automatically as follows.
      +  0 - ``INFORMATIONAL``
      +  1–39 - ``LOW``
      +  40–69 - ``MEDIUM``
      +  70–89 - ``HIGH``
      +  90–100 - ``CRITICAL``
     * @min `0`
     * @max `100`
     */
  Normalized?: number;
  /**
   * The native severity as defined by the AWS service or integrated partner product that generated the finding.
   */
  Product?: number;
};
/**
 * Type definition for `AWS::SecurityHub::AutomationRule.StringFilter`.
 * A string filter for filtering ASHlong findings.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-stringfilter.html}
 */
export type StringFilter = {
  /**
     * The condition to apply to a string value when filtering Security Hub CSPM findings.
     To search for values that have the filter value, use one of the following comparison operators:
      +  To search for values that include the filter value, use ``CONTAINS``. For example, the filter ``Title CONTAINS CloudFront`` matches findings that have a ``Title`` that includes the string CloudFront.
      +  To search for values that exactly match the filter value, use ``EQUALS``. For example, the filter ``AwsAccountId EQUALS 123456789012`` only matches findings that have an account ID of ``123456789012``.
      +  To search for values that start with the filter value, use ``PREFIX``. For example, the filter ``ResourceRegion PREFIX us`` matches findings that have a ``ResourceRegion`` that starts with ``us``. A ``ResourceRegion`` that starts with a different value, such as ``af``, ``ap``, or ``ca``, doesn't match.
      
     ``CONTAINS``, ``EQUALS``, and ``PREFIX`` filters on the same field are joined by ``OR``. A finding matches if it matches any one of those filters. For example, the filters ``Title CONTAINS CloudFront OR Title CONTAINS CloudWatch`` match a finding that includes either ``CloudFront``, ``CloudWatch``, or both strings in the title.
     To search for values that don’t have the filter value, use one of the following comparison operators:
      +  To search for values that exclude the filter value, use ``NOT_CONTAINS``. For example, the filter ``Title NOT_CONTAINS CloudFront`` matches findings that have a ``Title`` that excludes the string CloudFront.
      +  To search for values other than the filter value, use ``NOT_EQUALS``. For example, the filter ``AwsAccountId NOT_EQUALS 123456789012`` only matches findings that have an account ID other than ``123456789012``.
      +  To search for values that don't start with the filter value, use ``PREFIX_NOT_EQUALS``. For example, the filter ``ResourceRegion PREFIX_NOT_EQUALS us`` matches findings with a ``ResourceRegion`` that starts with a value other than ``us``.
      
     ``NOT_CONTAINS``, ``NOT_EQUALS``, and ``PREFIX_NOT_EQUALS`` filters on the same field are joined by ``AND``. A finding matches only if it matches all of those filters. For example, the filters ``Title NOT_CONTAINS CloudFront AND Title NOT_CONTAINS CloudWatch`` match a finding that excludes both ``CloudFront`` and ``CloudWatch`` in the title.
     You can’t have both a ``CONTAINS`` filter and a ``NOT_CONTAINS`` filter on the same field. Similarly, you can't provide both an ``EQUALS`` filter and a ``NOT_EQUALS`` or ``PREFIX_NOT_EQUALS`` filter on the same field. Combining filters in this way returns an error. ``CONTAINS`` filters can only be used with other ``CONTAINS`` filters. ``NOT_CONTAINS`` filters can only be used with other ``NOT_CONTAINS`` filters.
     You can combine ``PREFIX`` filters with ``NOT_EQUALS`` or ``PREFIX_NOT_EQUALS`` filters for the same field. Security Hub CSPM first processes the ``PREFIX`` filters, and then the ``NOT_EQUALS`` or ``PREFIX_NOT_EQUALS`` filters.
     For example, for the following filters, Security Hub CSPM first identifies findings that have resource types that start with either ``AwsIam`` or ``AwsEc2``. It then excludes findings that have a resource type of ``AwsIamPolicy`` and findings that have a resource type of ``AwsEc2NetworkInterface``.
      +   ``ResourceType PREFIX AwsIam``
      +   ``ResourceType PREFIX AwsEc2``
      +   ``ResourceType NOT_EQUALS AwsIamPolicy``
      +   ``ResourceType NOT_EQUALS AwsEc2NetworkInterface``
      
     ``CONTAINS`` and ``NOT_CONTAINS`` operators can be used only with automation rules V1. ``CONTAINS_WORD`` operator is only supported in ``GetFindingsV2``, ``GetFindingStatisticsV2``, ``GetResourcesV2``, and ``GetResourceStatisticsV2`` APIs. For more information, see [Automation rules](https://docs.aws.amazon.com/securityhub/latest/userguide/automation-rules.html) in the *User Guide*.
     */
  Comparison: StringFilterComparison;
  /**
   * The string filter value. Filter values are case sensitive. For example, the product name for control-based findings is ``Security Hub CSPM``. If you provide ``security hub`` as the filter value, there's no match.
   */
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
 * Used to update information about the investigation into the finding.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-workflowupdate.html}
 */
export type WorkflowUpdate = {
  /**
     * The status of the investigation into the finding. The workflow status is specific to an individual finding. It does not affect the generation of new findings. For example, setting the workflow status to ``SUPPRESSED`` or ``RESOLVED`` does not prevent a new finding for the same issue.
     The allowed values are the following.
      +  ``NEW`` - The initial state of a finding, before it is reviewed.
     Security Hub CSPM also resets ``WorkFlowStatus`` from ``NOTIFIED`` or ``RESOLVED`` to ``NEW`` in the following cases:
      +  The record state changes from ``ARCHIVED`` to ``ACTIVE``.
      +  The compliance status changes from ``PASSED`` to either ``WARNING``, ``FAILED``, or ``NOT_AVAILABLE``.
      
      +  ``NOTIFIED`` - Indicates that you notified the resource owner about the security issue. Used when the initial reviewer is not the resource owner, and needs intervention from the resource owner.
      +  ``RESOLVED`` - The finding was reviewed and remediated and is now considered resolved.
      +  ``SUPPRESSED`` - Indicates that you reviewed the finding and don't believe that any action is needed. The finding is no longer updated.
     */
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
