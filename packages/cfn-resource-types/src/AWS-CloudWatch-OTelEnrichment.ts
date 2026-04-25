import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * AWS::CloudWatch::OTelEnrichment enables OTel metric enrichment in CloudWatch, allowing CloudWatch vended metrics to be available for PromQL querying enriched with AWS resource tags and metadata.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-otelenrichment.html}
 */
export type CloudWatchOTelEnrichmentProperties = Record<string, never>;
/**
 * Attribute type definition for `AWS::CloudWatch::OTelEnrichment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-otelenrichment.html#aws-resource-cloudwatch-otelenrichment-return-values}
 */
export type CloudWatchOTelEnrichmentAttributes = {
  /**
   * The AWS account ID. This is the primary identifier for this singleton resource.
   */
  AccountId: string;
  /**
   * Current status of OTel enrichment (RUNNING or STOPPED).
   */
  Status: Status;
};
/**
 * Type definition for `AWS::CloudWatch::OTelEnrichment.Status`.
 * Current status of OTel enrichment (RUNNING or STOPPED).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-otelenrichment-status.html}
 */
export type Status = "RUNNING" | "STOPPED";
/**
 * AWS::CloudWatch::OTelEnrichment enables OTel metric enrichment in CloudWatch, allowing CloudWatch vended metrics to be available for PromQL querying enriched with AWS resource tags and metadata.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-otelenrichment.html}
 */
export class CloudWatchOTelEnrichment extends $Resource<
  "AWS::CloudWatch::OTelEnrichment",
  CloudWatchOTelEnrichmentProperties,
  CloudWatchOTelEnrichmentAttributes
> {
  public static readonly Type = "AWS::CloudWatch::OTelEnrichment";
  constructor(
    logicalId: string,
    properties: CloudWatchOTelEnrichmentProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CloudWatchOTelEnrichment.Type, properties, options);
  }
}
