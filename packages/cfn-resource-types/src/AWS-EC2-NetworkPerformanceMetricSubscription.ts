import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::EC2::NetworkPerformanceMetricSubscription
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkperformancemetricsubscription.html}
 */
export type EC2NetworkPerformanceMetricSubscriptionProperties = {
  /**
   * The target Region or Availability Zone for the metric to subscribe to.
   */
  Destination: string;
  /**
   * The metric type to subscribe to.
   */
  Metric: string;
  /**
   * The starting Region or Availability Zone for metric to subscribe to.
   */
  Source: string;
  /**
   * The statistic to subscribe to.
   */
  Statistic: string;
};
/**
 * Resource Type definition for AWS::EC2::NetworkPerformanceMetricSubscription
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkperformancemetricsubscription.html}
 */
export class EC2NetworkPerformanceMetricSubscription extends $Resource<
  "AWS::EC2::NetworkPerformanceMetricSubscription",
  EC2NetworkPerformanceMetricSubscriptionProperties,
  Record<string, never>
> {
  public static readonly Type =
    "AWS::EC2::NetworkPerformanceMetricSubscription";
  constructor(
    logicalId: string,
    properties: EC2NetworkPerformanceMetricSubscriptionProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      EC2NetworkPerformanceMetricSubscription.Type,
      properties,
      options,
    );
  }
}
