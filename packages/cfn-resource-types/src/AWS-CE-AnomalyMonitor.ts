import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::CE::AnomalyMonitor`.
 * AWS Cost Anomaly Detection leverages advanced Machine Learning technologies to identify anomalous spend and root causes, so you can quickly take action. You can use Cost Anomaly Detection by creating monitor.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalymonitor.html}
 */
export type CEAnomalyMonitorProperties = {
  /**
   * The dimensions to evaluate
   */
  MonitorDimension?: "SERVICE";
  /**
   * The name of the monitor.
   * @minLength `0`
   * @maxLength `1024`
   * @pattern `[\S\s]*`
   */
  MonitorName: string;
  MonitorSpecification?: string;
  MonitorType: "DIMENSIONAL" | "CUSTOM";
  /**
   * Tags to assign to monitor.
   * @minLength `0`
   * @maxLength `200`
   */
  ResourceTags?: ResourceTag[];
};
/**
 * Attribute type definition for `AWS::CE::AnomalyMonitor`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalymonitor.html#aws-resource-ce-anomalymonitor-return-values}
 */
export type CEAnomalyMonitorAttributes = {
  /**
   * The date when the monitor was created.
   * @minLength `0`
   * @maxLength `40`
   * @pattern `(\d{4}-\d{2}-\d{2})(T\d{2}:\d{2}:\d{2}Z)?`
   */
  CreationDate: string;
  /**
   * The value for evaluated dimensions.
   * @min `0`
   */
  DimensionalValueCount: number;
  /**
   * The date when the monitor last evaluated for anomalies.
   * @minLength `0`
   * @maxLength `40`
   * @pattern `(\d{4}-\d{2}-\d{2})(T\d{2}:\d{2}:\d{2}Z)?|(NOT_EVALUATED_YET)`
   */
  LastEvaluatedDate: string;
  /**
   * The date when the monitor was last updated.
   * @minLength `0`
   * @maxLength `40`
   * @pattern `(\d{4}-\d{2}-\d{2})(T\d{2}:\d{2}:\d{2}Z)?`
   */
  LastUpdatedDate: string;
  /**
   * Monitor ARN
   * @pattern `^arn:aws[-a-z0-9]*:[a-z0-9]+:[-a-z0-9]*:[0-9]{12}:[-a-zA-Z0-9/:_]+$`
   */
  MonitorArn: string;
};
/**
 * Type definition for `AWS::CE::AnomalyMonitor.ResourceTag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ce-anomalymonitor-resourcetag.html}
 */
export type ResourceTag = {
  /**
   * The key name for the tag.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!aws:).*$`
   */
  Key: string;
  /**
   * The value for the tag.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::CE::AnomalyMonitor`.
 * AWS Cost Anomaly Detection leverages advanced Machine Learning technologies to identify anomalous spend and root causes, so you can quickly take action. You can use Cost Anomaly Detection by creating monitor.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalymonitor.html}
 */
export class CEAnomalyMonitor extends $Resource<
  "AWS::CE::AnomalyMonitor",
  CEAnomalyMonitorProperties,
  CEAnomalyMonitorAttributes
> {
  public static readonly Type = "AWS::CE::AnomalyMonitor";
  constructor(
    logicalId: string,
    properties: CEAnomalyMonitorProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CEAnomalyMonitor.Type, properties, options);
  }
}
