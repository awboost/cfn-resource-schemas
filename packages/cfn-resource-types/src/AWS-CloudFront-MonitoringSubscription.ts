import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::CloudFront::MonitoringSubscription`.
 * A monitoring subscription. This structure contains information about whether additional CloudWatch metrics are enabled for a given CloudFront distribution.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-monitoringsubscription.html}
 */
export type CloudFrontMonitoringSubscriptionProperties = {
  /**
   * The ID of the distribution that you are enabling metrics for.
   */
  DistributionId: string;
  /**
   * A subscription configuration for additional CloudWatch metrics.
   */
  MonitoringSubscription: MonitoringSubscription;
};
/**
 * Type definition for `AWS::CloudFront::MonitoringSubscription.MonitoringSubscription`.
 * A monitoring subscription. This structure contains information about whether additional CloudWatch metrics are enabled for a given CloudFront distribution.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-monitoringsubscription-monitoringsubscription.html}
 */
export type MonitoringSubscription = {
  /**
   * A subscription configuration for additional CloudWatch metrics.
   */
  RealtimeMetricsSubscriptionConfig?: RealtimeMetricsSubscriptionConfig;
};
/**
 * Type definition for `AWS::CloudFront::MonitoringSubscription.RealtimeMetricsSubscriptionConfig`.
 * A subscription configuration for additional CloudWatch metrics.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-monitoringsubscription-realtimemetricssubscriptionconfig.html}
 */
export type RealtimeMetricsSubscriptionConfig = {
  /**
   * A flag that indicates whether additional CloudWatch metrics are enabled for a given CloudFront distribution.
   */
  RealtimeMetricsSubscriptionStatus: "Enabled" | "Disabled";
};
/**
 * Resource type definition for `AWS::CloudFront::MonitoringSubscription`.
 * A monitoring subscription. This structure contains information about whether additional CloudWatch metrics are enabled for a given CloudFront distribution.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-monitoringsubscription.html}
 */
export class CloudFrontMonitoringSubscription extends $Resource<
  "AWS::CloudFront::MonitoringSubscription",
  CloudFrontMonitoringSubscriptionProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::CloudFront::MonitoringSubscription";
  constructor(
    logicalId: string,
    properties: CloudFrontMonitoringSubscriptionProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      CloudFrontMonitoringSubscription.Type,
      properties,
      options,
    );
  }
}
