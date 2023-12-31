import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
   * @maxLength `1024`
   * @pattern `[\S\s]*`
   */
  MonitorName: string;
  MonitorSpecification?: string;
  MonitorType: "DIMENSIONAL" | "CUSTOM";
  /**
   * Tags to assign to monitor.
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
   * @maxLength `40`
   * @pattern `(\d{4}-\d{2}-\d{2})(T\d{2}:\d{2}:\d{2}Z)?`
   */
  CreationDate: string;
  /**
   * The value for evaluated dimensions.
   */
  DimensionalValueCount: number;
  /**
   * The date when the monitor last evaluated for anomalies.
   * @maxLength `40`
   * @pattern `(\d{4}-\d{2}-\d{2})(T\d{2}:\d{2}:\d{2}Z)?|(NOT_EVALUATED_YET)`
   */
  LastEvaluatedDate: string;
  /**
   * The date when the monitor was last updated.
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
  public static readonly AttributeNames = [
    "CreationDate" as const,
    "DimensionalValueCount" as const,
    "LastEvaluatedDate" as const,
    "LastUpdatedDate" as const,
    "MonitorArn" as const,
  ];
  constructor(
    logicalId: string,
    properties: CEAnomalyMonitorProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      CEAnomalyMonitor.Type,
      properties,
      CEAnomalyMonitor.AttributeNames,
      options,
    );
  }
}
