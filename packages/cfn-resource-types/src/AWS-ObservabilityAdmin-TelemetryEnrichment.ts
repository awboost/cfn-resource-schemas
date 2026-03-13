import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * AWS::ObservabilityAdmin::TelemetryEnrichment cloudformation resource enables the resource tags for telemetry feature in CloudWatch to enrich infrastructure metrics with AWS resource tags. For more details: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/resource-tags-for-telemetry.html
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-observabilityadmin-telemetryenrichment.html}
 */
export type ObservabilityAdminTelemetryEnrichmentProperties = {
  /**
   * Scope of the Telemetry Enrichment
   */
  Scope?: Scope;
};
/**
 * Attribute type definition for `AWS::ObservabilityAdmin::TelemetryEnrichment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-observabilityadmin-telemetryenrichment.html#aws-resource-observabilityadmin-telemetryenrichment-return-values}
 */
export type ObservabilityAdminTelemetryEnrichmentAttributes = {
  /**
   * Current status of the resource tags for telemetry feature (Running, Stopped, or Impaired).
   */
  Status: Status;
};
/**
 * Type definition for `AWS::ObservabilityAdmin::TelemetryEnrichment.Scope`.
 * Scope of the Telemetry Enrichment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-observabilityadmin-telemetryenrichment-scope.html}
 */
export type Scope = "ACCOUNT";
/**
 * Type definition for `AWS::ObservabilityAdmin::TelemetryEnrichment.Status`.
 * Current status of the resource tags for telemetry feature (Running, Stopped, or Impaired).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-observabilityadmin-telemetryenrichment-status.html}
 */
export type Status = "RUNNING" | "STOPPED" | "IMPAIRED";
/**
 * AWS::ObservabilityAdmin::TelemetryEnrichment cloudformation resource enables the resource tags for telemetry feature in CloudWatch to enrich infrastructure metrics with AWS resource tags. For more details: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/resource-tags-for-telemetry.html
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-observabilityadmin-telemetryenrichment.html}
 */
export class ObservabilityAdminTelemetryEnrichment extends $Resource<
  "AWS::ObservabilityAdmin::TelemetryEnrichment",
  ObservabilityAdminTelemetryEnrichmentProperties,
  ObservabilityAdminTelemetryEnrichmentAttributes
> {
  public static readonly Type = "AWS::ObservabilityAdmin::TelemetryEnrichment";
  constructor(
    logicalId: string,
    properties: ObservabilityAdminTelemetryEnrichmentProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ObservabilityAdminTelemetryEnrichment.Type,
      properties,
      options,
    );
  }
}
