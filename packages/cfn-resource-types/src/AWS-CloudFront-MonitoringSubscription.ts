import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: CloudFrontMonitoringSubscriptionProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      CloudFrontMonitoringSubscription.Type,
      properties,
      CloudFrontMonitoringSubscription.AttributeNames,
      options,
    );
  }
}
