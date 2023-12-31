import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::IoT::FleetMetric`.
 * An aggregated metric of certain devices in your fleet
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-fleetmetric.html}
 */
export type IoTFleetMetricProperties = {
  /**
   * The aggregation field to perform aggregation and metric emission
   */
  AggregationField?: string;
  /**
   * Aggregation types supported by Fleet Indexing
   */
  AggregationType?: AggregationType;
  /**
   * The description of a fleet metric
   */
  Description?: string;
  /**
   * The index name of a fleet metric
   */
  IndexName?: string;
  /**
   * The name of the fleet metric
   */
  MetricName: string;
  /**
   * The period of metric emission in seconds
   */
  Period?: number;
  /**
   * The Fleet Indexing query used by a fleet metric
   */
  QueryString?: string;
  /**
   * The version of a Fleet Indexing query used by a fleet metric
   */
  QueryVersion?: string;
  /**
   * An array of key-value pairs to apply to this resource
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * The unit of data points emitted by a fleet metric
   */
  Unit?: string;
};
/**
 * Attribute type definition for `AWS::IoT::FleetMetric`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-fleetmetric.html#aws-resource-iot-fleetmetric-return-values}
 */
export type IoTFleetMetricAttributes = {
  /**
   * The creation date of a fleet metric
   */
  CreationDate: number;
  /**
   * The last modified date of a fleet metric
   */
  LastModifiedDate: number;
  /**
   * The Amazon Resource Number (ARN) of a fleet metric metric
   */
  MetricArn: string;
  /**
   * The version of a fleet metric
   */
  Version: number;
};
/**
 * Type definition for `AWS::IoT::FleetMetric.AggregationType`.
 * Aggregation types supported by Fleet Indexing
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-fleetmetric-aggregationtype.html}
 */
export type AggregationType = {
  /**
   * Fleet Indexing aggregation type names such as Statistics, Percentiles and Cardinality
   */
  Name: string;
  /**
   * Fleet Indexing aggregation type values
   */
  Values: string[];
};
/**
 * Type definition for `AWS::IoT::FleetMetric.Tag`.
 * A key-value pair to associate with a resource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-fleetmetric-tag.html}
 */
export type Tag = {
  /**
   * The tag's key
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The tag's value
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::IoT::FleetMetric`.
 * An aggregated metric of certain devices in your fleet
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-fleetmetric.html}
 */
export class IoTFleetMetric extends $Resource<
  "AWS::IoT::FleetMetric",
  IoTFleetMetricProperties,
  IoTFleetMetricAttributes
> {
  public static readonly Type = "AWS::IoT::FleetMetric";
  constructor(
    logicalId: string,
    properties: IoTFleetMetricProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IoTFleetMetric.Type, properties, options);
  }
}
