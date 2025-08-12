import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::ObservabilityAdmin::TelemetryRule resource defines a CloudWatch Observability Admin Telemetry Rule.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-observabilityadmin-telemetryrule.html}
 */
export type ObservabilityAdminTelemetryRuleProperties = {
  /**
   * The telemetry rule
   */
  Rule: TelemetryRule;
  /**
   * The name of the telemetry rule
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
 * Attribute type definition for `AWS::ObservabilityAdmin::TelemetryRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-observabilityadmin-telemetryrule.html#aws-resource-observabilityadmin-telemetryrule-return-values}
 */
export type ObservabilityAdminTelemetryRuleAttributes = {
  /**
   * The arn of the telemetry rule
   * @minLength `1`
   * @maxLength `1011`
   * @pattern `^arn:aws([a-z0-9\-]+)?:([a-zA-Z0-9\-]+):([a-z0-9\-]+)?:([0-9]{12})?:(.+)$`
   */
  RuleArn: string;
};
/**
 * Type definition for `AWS::ObservabilityAdmin::TelemetryRule.DestinationType`.
 * Type of telemetry destination
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-observabilityadmin-telemetryrule-destinationtype.html}
 */
export type DestinationType = "cloud-watch-logs";
/**
 * Type definition for `AWS::ObservabilityAdmin::TelemetryRule.ResourceType`.
 * Resource Type associated with the Telemetry Rule
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-observabilityadmin-telemetryrule-resourcetype.html}
 */
export type ResourceType = "AWS::EC2::VPC";
/**
 * Type definition for `AWS::ObservabilityAdmin::TelemetryRule.Tag`.
 * A key-value pair to associate with a resource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-observabilityadmin-telemetryrule-tag.html}
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
 * Type definition for `AWS::ObservabilityAdmin::TelemetryRule.TelemetryDestinationConfiguration`.
 * The destination configuration for telemetry data
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-observabilityadmin-telemetryrule-telemetrydestinationconfiguration.html}
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
 * Type definition for `AWS::ObservabilityAdmin::TelemetryRule.TelemetryRule`.
 * The telemetry rule
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-observabilityadmin-telemetryrule-telemetryrule.html}
 */
export type TelemetryRule = {
  /**
   * The destination configuration for telemetry data
   */
  DestinationConfiguration?: TelemetryDestinationConfiguration;
  /**
   * Resource Type associated with the Telemetry Rule
   */
  ResourceType: ResourceType;
  /**
   * Selection Criteria on resource level for rule application
   */
  SelectionCriteria?: string;
  /**
   * Telemetry Type associated with the Telemetry Rule
   */
  TelemetryType: TelemetryType;
};
/**
 * Type definition for `AWS::ObservabilityAdmin::TelemetryRule.TelemetryType`.
 * Telemetry Type associated with the Telemetry Rule
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-observabilityadmin-telemetryrule-telemetrytype.html}
 */
export type TelemetryType = "Logs";
/**
 * Type definition for `AWS::ObservabilityAdmin::TelemetryRule.VPCFlowLogParameters`.
 * Telemetry parameters for VPC Flow logs
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-observabilityadmin-telemetryrule-vpcflowlogparameters.html}
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
 * The AWS::ObservabilityAdmin::TelemetryRule resource defines a CloudWatch Observability Admin Telemetry Rule.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-observabilityadmin-telemetryrule.html}
 */
export class ObservabilityAdminTelemetryRule extends $Resource<
  "AWS::ObservabilityAdmin::TelemetryRule",
  ObservabilityAdminTelemetryRuleProperties,
  ObservabilityAdminTelemetryRuleAttributes
> {
  public static readonly Type = "AWS::ObservabilityAdmin::TelemetryRule";
  constructor(
    logicalId: string,
    properties: ObservabilityAdminTelemetryRuleProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ObservabilityAdminTelemetryRule.Type, properties, options);
  }
}
