import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::IoT::Dimension`.
 * A dimension can be used to limit the scope of a metric used in a security profile for AWS IoT Device Defender.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-dimension.html}
 */
export type IoTDimensionProperties = {
  /**
   * A unique identifier for the dimension.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `[a-zA-Z0-9:_-]+`
   */
  Name?: string;
  /**
   * Specifies the value or list of values for the dimension.
   * @minLength `1`
   * @maxLength `5`
   */
  StringValues: string[];
  /**
   * Metadata that can be used to manage the dimension.
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * Specifies the type of the dimension.
   */
  Type: "TOPIC_FILTER";
};
/**
 * Attribute type definition for `AWS::IoT::Dimension`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-dimension.html#aws-resource-iot-dimension-return-values}
 */
export type IoTDimensionAttributes = {
  /**
   * The ARN (Amazon resource name) of the created dimension.
   */
  Arn: string;
};
/**
 * Type definition for `AWS::IoT::Dimension.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-dimension-tag.html}
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
 * Resource type definition for `AWS::IoT::Dimension`.
 * A dimension can be used to limit the scope of a metric used in a security profile for AWS IoT Device Defender.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-dimension.html}
 */
export class IoTDimension extends $Resource<
  "AWS::IoT::Dimension",
  IoTDimensionProperties,
  IoTDimensionAttributes
> {
  public static readonly Type = "AWS::IoT::Dimension";
  constructor(
    logicalId: string,
    properties: IoTDimensionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IoTDimension.Type, properties, options);
  }
}
