import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::IoTWireless::Destination`.
 * Destination's resource schema demonstrating some basic constructs and validation rules.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-destination.html}
 */
export type IoTWirelessDestinationProperties = {
  /**
   * Destination description
   * @maxLength `2048`
   */
  Description?: string;
  /**
   * Destination expression
   */
  Expression: string;
  /**
   * Must be RuleName
   */
  ExpressionType: "RuleName" | "MqttTopic" | "SnsTopic";
  /**
   * Unique name of destination
   * @maxLength `128`
   * @pattern `[a-zA-Z0-9:_-]+`
   */
  Name: string;
  /**
   * AWS role ARN that grants access
   * @minLength `20`
   * @maxLength `2048`
   */
  RoleArn?: string;
  /**
   * A list of key-value pairs that contain metadata for the destination.
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::IoTWireless::Destination`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-destination.html#aws-resource-iotwireless-destination-return-values}
 */
export type IoTWirelessDestinationAttributes = {
  /**
   * Destination arn. Returned after successful create.
   */
  Arn: string;
};
/**
 * Type definition for `AWS::IoTWireless::Destination.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-destination-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `127`
   */
  Key?: string;
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  Value?: string;
};
/**
 * Resource type definition for `AWS::IoTWireless::Destination`.
 * Destination's resource schema demonstrating some basic constructs and validation rules.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-destination.html}
 */
export class IoTWirelessDestination extends $Resource<
  "AWS::IoTWireless::Destination",
  IoTWirelessDestinationProperties,
  IoTWirelessDestinationAttributes
> {
  public static readonly Type = "AWS::IoTWireless::Destination";
  constructor(
    logicalId: string,
    properties: IoTWirelessDestinationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IoTWirelessDestination.Type, properties, options);
  }
}
