import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::CloudFront::MonitoringSubscription
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-monitoringsubscription.html}
 */
export type CloudFrontMonitoringSubscriptionProperties = {
  DistributionId: string;
  MonitoringSubscription: MonitoringSubscription;
};
/**
 * Type definition for `AWS::CloudFront::MonitoringSubscription.MonitoringSubscription`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-monitoringsubscription-monitoringsubscription.html}
 */
export type MonitoringSubscription = {
  RealtimeMetricsSubscriptionConfig?: RealtimeMetricsSubscriptionConfig;
};
/**
 * Type definition for `AWS::CloudFront::MonitoringSubscription.RealtimeMetricsSubscriptionConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-monitoringsubscription-realtimemetricssubscriptionconfig.html}
 */
export type RealtimeMetricsSubscriptionConfig = {
  RealtimeMetricsSubscriptionStatus: "Enabled" | "Disabled";
};
/**
 * Resource Type definition for AWS::CloudFront::MonitoringSubscription
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
