import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for `AWS::IoT::CustomMetric`.
 * A custom metric published by your devices to Device Defender.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-custommetric.html}
 */
export type IoTCustomMetricProperties = {
  /**
   * Field represents a friendly name in the console for the custom metric; it doesn't have to be unique. Don't use this name as the metric identifier in the device metric report. Can be updated once defined.
   * @maxLength `128`
   */
  DisplayName?: string;
  /**
   * The name of the custom metric. This will be used in the metric report submitted from the device/thing. Shouldn't begin with aws: . Cannot be updated once defined.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `[a-zA-Z0-9:_-]+`
   */
  MetricName?: string;
  /**
   * The type of the custom metric. Types include string-list, ip-address-list, number-list, and number.
   */
  MetricType: "string-list" | "ip-address-list" | "number-list" | "number";
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::IoT::CustomMetric`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-custommetric.html#aws-resource-iot-custommetric-return-values}
 */
export type IoTCustomMetricAttributes = {
  /**
   * The Amazon Resource Number (ARN) of the custom metric.
   * @minLength `20`
   * @maxLength `2048`
   */
  MetricArn: string;
};
/**
 * Type definition for `AWS::IoT::CustomMetric.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-custommetric-tag.html}
 */
export type Tag = {
  /**
   * The tag's key.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The tag's value.
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::IoT::CustomMetric`.
 * A custom metric published by your devices to Device Defender.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-custommetric.html}
 */
export class IoTCustomMetric extends $Resource<
  "AWS::IoT::CustomMetric",
  IoTCustomMetricProperties,
  IoTCustomMetricAttributes
> {
  public static readonly Type = "AWS::IoT::CustomMetric";
  public static readonly AttributeNames = ["MetricArn" as const];
  constructor(
    logicalId: string,
    properties: IoTCustomMetricProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      IoTCustomMetric.Type,
      properties,
      IoTCustomMetric.AttributeNames,
      options,
    );
  }
}
