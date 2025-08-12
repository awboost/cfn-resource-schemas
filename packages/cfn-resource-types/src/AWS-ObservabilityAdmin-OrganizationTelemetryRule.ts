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
 * Type definition for `AWS::ObservabilityAdmin::OrganizationTelemetryRule.DestinationType`.
 * Type of telemetry destination
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-observabilityadmin-organizationtelemetryrule-destinationtype.html}
 */
export type DestinationType = "cloud-watch-logs";
/**
 * Type definition for `AWS::ObservabilityAdmin::OrganizationTelemetryRule.ResourceType`.
 * Resource Type associated with the Organization Telemetry Rule
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-observabilityadmin-organizationtelemetryrule-resourcetype.html}
 */
export type ResourceType = "AWS::EC2::VPC";
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
   * Pattern for telemetry data destination
   */
  DestinationPattern?: string;
  /**
   * Type of telemetry destination
   */
  DestinationType?: DestinationType;
  /**
   * Number of days to retain the telemetry data in the specified destination
   */
  RetentionInDays?: number;
  /**
   * Telemetry parameters for VPC Flow logs
   */
  VPCFlowLogParameters?: VPCFlowLogParameters;
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
   * Telemetry Type associated with the Organization Telemetry Rule
   */
  TelemetryType: TelemetryType;
};
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
