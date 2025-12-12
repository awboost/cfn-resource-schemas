import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::ObservabilityAdmin::OrganizationTelemetryRule resource defines a CloudWatch Observability Admin Organization Telemetry Rule.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-observabilityadmin-organizationtelemetryrule.html}
 */
export type ObservabilityAdminOrganizationTelemetryRuleProperties = {
  /**
   * The telemetry rule
   */
  Rule: TelemetryRule;
  /**
   * The name of the organization telemetry rule
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^[0-9A-Za-z-]+$`
   */
  RuleName: string;
  /**
   * An array of key-value pairs to apply to this resource
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::ObservabilityAdmin::OrganizationTelemetryRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-observabilityadmin-organizationtelemetryrule.html#aws-resource-observabilityadmin-organizationtelemetryrule-return-values}
 */
export type ObservabilityAdminOrganizationTelemetryRuleAttributes = {
  /**
   * The arn of the organization telemetry rule
   * @minLength `1`
   * @maxLength `1011`
   * @pattern `^arn:aws([a-z0-9\-]+)?:([a-zA-Z0-9\-]+):([a-z0-9\-]+)?:([0-9]{12})?:(.+)$`
   */
  RuleArn: string;
};
/**
 * Type definition for `AWS::ObservabilityAdmin::OrganizationTelemetryRule.Action`.
 * The enumerated action to take.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-observabilityadmin-organizationtelemetryrule-action.html}
 */
export type Action =
  | "ALLOW"
  | "BLOCK"
  | "COUNT"
  | "CAPTCHA"
  | "CHALLENGE"
  | "EXCLUDED_AS_COUNT";
/**
 * Type definition for `AWS::ObservabilityAdmin::OrganizationTelemetryRule.ActionCondition`.
 * The condition of the action desired in the filter.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-observabilityadmin-organizationtelemetryrule-actioncondition.html}
 */
export type ActionCondition = {
  /**
   * The enumerated action to take.
   */
  Action?: Action;
};
/**
 * Type definition for `AWS::ObservabilityAdmin::OrganizationTelemetryRule.AdvancedEventSelector`.
 * An advanced event selector that includes optional name and field selectors
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-observabilityadmin-organizationtelemetryrule-advancedeventselector.html}
 */
export type AdvancedEventSelector = {
  /**
   * Contains all selector statements in an advanced event selector.
   */
  FieldSelectors: AdvancedFieldSelector[];
  /**
   * An optional descriptive name for the advanced event selector
   */
  Name?: string;
};
/**
 * Type definition for `AWS::ObservabilityAdmin::OrganizationTelemetryRule.AdvancedFieldSelector`.
 * A single selector statement in an advanced event selector.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-observabilityadmin-organizationtelemetryrule-advancedfieldselector.html}
 */
export type AdvancedFieldSelector = {
  /**
   * An operator that includes events that match the last few characters of the event record field specified as the value of Field.
   */
  EndsWith?: string[];
  /**
   * An operator that includes events that match the exact value of the event record field specified as the value of Field.
   */
  Equals?: string[];
  /**
   * A field in a CloudTrail event record on which to filter events to be logged
   * @minLength `1`
   * @maxLength `1000`
   */
  Field?: string;
  /**
   * An operator that excludes events that match the last few characters of the event record field specified as the value of Field.
   */
  NotEndsWith?: string[];
  /**
   * An operator that excludes events that match the exact value of the event record field specified as the value of Field.
   */
  NotEquals?: string[];
  /**
   * An operator that excludes events that match the first few characters of the event record field specified as the value of Field.
   */
  NotStartsWith?: string[];
  /**
   * An operator that includes events that match the first few characters of the event record field specified as the value of Field.
   */
  StartsWith?: string[];
};
/**
 * Type definition for `AWS::ObservabilityAdmin::OrganizationTelemetryRule.CloudtrailParameters`.
 * Telemetry parameters for Cloudtrail
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-observabilityadmin-organizationtelemetryrule-cloudtrailparameters.html}
 */
export type CloudtrailParameters = {
  /**
   * Create fine-grained selectors for AWS CloudTrail management and data.
   */
  AdvancedEventSelectors: AdvancedEventSelector[];
};
/**
 * Type definition for `AWS::ObservabilityAdmin::OrganizationTelemetryRule.Condition`.
 * A condition for a filter.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-observabilityadmin-organizationtelemetryrule-condition.html}
 */
export type Condition = {
  /**
   * The condition of the action desired in the filter.
   */
  ActionCondition?: ActionCondition;
  /**
   * The label name of the condition.
   */
  LabelNameCondition?: LabelNameCondition;
};
/**
 * Type definition for `AWS::ObservabilityAdmin::OrganizationTelemetryRule.DestinationType`.
 * Type of telemetry destination
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-observabilityadmin-organizationtelemetryrule-destinationtype.html}
 */
export type DestinationType = "cloud-watch-logs";
/**
 * Type definition for `AWS::ObservabilityAdmin::OrganizationTelemetryRule.ELBLoadBalancerLoggingParameters`.
 * Telemetry parameters for ELB/NLB Load Balancer Logs
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-observabilityadmin-organizationtelemetryrule-elbloadbalancerloggingparameters.html}
 */
export type ELBLoadBalancerLoggingParameters = {
  /**
   * A delimiter to delineate log fields
   */
  FieldDelimiter?: string;
  OutputFormat?: "plain" | "json";
};
/**
 * Type definition for `AWS::ObservabilityAdmin::OrganizationTelemetryRule.FieldToMatch`.
 * The field that we want to match this rule to.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-observabilityadmin-organizationtelemetryrule-fieldtomatch.html}
 */
export type FieldToMatch = {
  /**
   * The method with which to match this rule.
   */
  Method?: string;
  /**
   * The query string to find the resource to match this field to.
   */
  QueryString?: string;
  /**
   * Header for the field to match.
   */
  SingleHeader?: SingleHeader;
  /**
   * This is the URI path to match this rule to.
   */
  UriPath?: string;
};
/**
 * Type definition for `AWS::ObservabilityAdmin::OrganizationTelemetryRule.Filter`.
 * A filter to be applied
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-observabilityadmin-organizationtelemetryrule-filter.html}
 */
export type Filter = {
  /**
   * The behavior required of the filter.
   */
  Behavior?: FilterBehavior;
  /**
   * A list of conditions for a filter.
   */
  Conditions?: Condition[];
  /**
   * The requirement portion of the filter.
   */
  Requirement?: FilterRequirement;
};
/**
 * Type definition for `AWS::ObservabilityAdmin::OrganizationTelemetryRule.FilterBehavior`.
 * The behavior required of the filter.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-observabilityadmin-organizationtelemetryrule-filterbehavior.html}
 */
export type FilterBehavior = "KEEP" | "DROP";
/**
 * Type definition for `AWS::ObservabilityAdmin::OrganizationTelemetryRule.FilterRequirement`.
 * The requirement portion of the filter.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-observabilityadmin-organizationtelemetryrule-filterrequirement.html}
 */
export type FilterRequirement = "MEETS_ALL" | "MEETS_ANY";
/**
 * Type definition for `AWS::ObservabilityAdmin::OrganizationTelemetryRule.LabelNameCondition`.
 * The label name of the condition.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-observabilityadmin-organizationtelemetryrule-labelnamecondition.html}
 */
export type LabelNameCondition = {
  /**
   * The label name of the condition.
   * @minLength `1`
   * @maxLength `1024`
   * @pattern `^[0-9A-Za-z_\-:]+$`
   */
  LabelName?: string;
};
/**
 * Type definition for `AWS::ObservabilityAdmin::OrganizationTelemetryRule.LoggingFilter`.
 * Default handling for logs that don't match any of the specified filtering conditions.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-observabilityadmin-organizationtelemetryrule-loggingfilter.html}
 */
export type LoggingFilter = {
  /**
   * The behavior required of the filter.
   */
  DefaultBehavior?: FilterBehavior;
  /**
   * A list of filters to be applied.
   */
  Filters?: Filter[];
};
/**
 * Type definition for `AWS::ObservabilityAdmin::OrganizationTelemetryRule.ResourceType`.
 * Resource Type associated with the Organization Telemetry Rule
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-observabilityadmin-organizationtelemetryrule-resourcetype.html}
 */
export type ResourceType =
  | "AWS::EC2::VPC"
  | "AWS::WAFv2::WebACL"
  | "AWS::CloudTrail"
  | "AWS::EKS::Cluster"
  | "AWS::ElasticLoadBalancingV2::LoadBalancer";
/**
 * Type definition for `AWS::ObservabilityAdmin::OrganizationTelemetryRule.SingleHeader`.
 * Header for the field to match.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-observabilityadmin-organizationtelemetryrule-singleheader.html}
 */
export type SingleHeader = {
  /**
   * The name of the header
   * @minLength `1`
   * @maxLength `64`
   */
  Name: string;
};
/**
 * Type definition for `AWS::ObservabilityAdmin::OrganizationTelemetryRule.Tag`.
 * A key-value pair to associate with a resource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-observabilityadmin-organizationtelemetryrule-tag.html}
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
 * Type definition for `AWS::ObservabilityAdmin::OrganizationTelemetryRule.TelemetryDestinationConfiguration`.
 * The destination configuration for telemetry data
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-observabilityadmin-organizationtelemetryrule-telemetrydestinationconfiguration.html}
 */
export type TelemetryDestinationConfiguration = {
  /**
   * Telemetry parameters for Cloudtrail
   */
  CloudtrailParameters?: CloudtrailParameters;
  /**
   * Pattern for telemetry data destination
   */
  DestinationPattern?: string;
  /**
   * Type of telemetry destination
   */
  DestinationType?: DestinationType;
  /**
   * Telemetry parameters for ELB/NLB Load Balancer Logs
   */
  ELBLoadBalancerLoggingParameters?: ELBLoadBalancerLoggingParameters;
  /**
   * Number of days to retain the telemetry data in the specified destination
   */
  RetentionInDays?: number;
  /**
   * Telemetry parameters for VPC Flow logs
   */
  VPCFlowLogParameters?: VPCFlowLogParameters;
  /**
   * Telemetry parameters for WAF v2 Web ACL
   */
  WAFLoggingParameters?: WAFLoggingParameters;
};
/**
 * Type definition for `AWS::ObservabilityAdmin::OrganizationTelemetryRule.TelemetryRule`.
 * The telemetry rule
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-observabilityadmin-organizationtelemetryrule-telemetryrule.html}
 */
export type TelemetryRule = {
  /**
   * The destination configuration for telemetry data
   */
  DestinationConfiguration?: TelemetryDestinationConfiguration;
  /**
   * Resource Type associated with the Organization Telemetry Rule
   */
  ResourceType: ResourceType;
  /**
   * Selection Criteria on scope level for rule application
   */
  Scope?: string;
  /**
   * Selection Criteria on resource level for rule application
   */
  SelectionCriteria?: string;
  /**
   * The telemetry source types for a telemetry rule.
   */
  TelemetrySourceTypes?: TelemetrySourceType[];
  /**
   * Telemetry Type associated with the Organization Telemetry Rule
   */
  TelemetryType: TelemetryType;
};
/**
 * Type definition for `AWS::ObservabilityAdmin::OrganizationTelemetryRule.TelemetrySourceType`.
 * The telemetry source type that goes into the array.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-observabilityadmin-organizationtelemetryrule-telemetrysourcetype.html}
 */
export type TelemetrySourceType =
  | "VPC_FLOW_LOGS"
  | "ROUTE53_RESOLVER_QUERY_LOGS"
  | "EKS_AUDIT_LOGS"
  | "EKS_AUTHENTICATOR_LOGS"
  | "EKS_CONTROLLER_MANAGER_LOGS"
  | "EKS_SCHEDULER_LOGS"
  | "EKS_API_LOGS";
/**
 * Type definition for `AWS::ObservabilityAdmin::OrganizationTelemetryRule.TelemetryType`.
 * Telemetry Type associated with the Organization Telemetry Rule
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-observabilityadmin-organizationtelemetryrule-telemetrytype.html}
 */
export type TelemetryType = "Logs";
/**
 * Type definition for `AWS::ObservabilityAdmin::OrganizationTelemetryRule.VPCFlowLogParameters`.
 * Telemetry parameters for VPC Flow logs
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-observabilityadmin-organizationtelemetryrule-vpcflowlogparameters.html}
 */
export type VPCFlowLogParameters = {
  /**
   * The fields to include in the flow log record. If you omit this parameter, the flow log is created using the default format.
   */
  LogFormat?: string;
  /**
   * The maximum interval of time, in seconds, during which a flow of packets is captured and aggregated into a flow log record. Default is 600s.
   */
  MaxAggregationInterval?: number;
  /**
   * The type of traffic captured for the flow log. Default is ALL
   */
  TrafficType?: string;
};
/**
 * Type definition for `AWS::ObservabilityAdmin::OrganizationTelemetryRule.WAFLoggingParameters`.
 * Telemetry parameters for WAF v2 Web ACL
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-observabilityadmin-organizationtelemetryrule-wafloggingparameters.html}
 */
export type WAFLoggingParameters = {
  /**
   * The type of logs to generate for WAF.
   */
  LogType?: WAFLogType;
  /**
   * Default handling for logs that don't match any of the specified filtering conditions.
   */
  LoggingFilter?: LoggingFilter;
  /**
   * Fields not to be included in the logs.
   * @maxLength `100`
   */
  RedactedFields?: FieldToMatch[];
};
/**
 * Type definition for `AWS::ObservabilityAdmin::OrganizationTelemetryRule.WAFLogType`.
 * The type of logs to generate for WAF.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-observabilityadmin-organizationtelemetryrule-waflogtype.html}
 */
export type WAFLogType = "WAF_LOGS";
/**
 * The AWS::ObservabilityAdmin::OrganizationTelemetryRule resource defines a CloudWatch Observability Admin Organization Telemetry Rule.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-observabilityadmin-organizationtelemetryrule.html}
 */
export class ObservabilityAdminOrganizationTelemetryRule extends $Resource<
  "AWS::ObservabilityAdmin::OrganizationTelemetryRule",
  ObservabilityAdminOrganizationTelemetryRuleProperties,
  ObservabilityAdminOrganizationTelemetryRuleAttributes
> {
  public static readonly Type =
    "AWS::ObservabilityAdmin::OrganizationTelemetryRule";
  constructor(
    logicalId: string,
    properties: ObservabilityAdminOrganizationTelemetryRuleProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ObservabilityAdminOrganizationTelemetryRule.Type,
      properties,
      options,
    );
  }
}
