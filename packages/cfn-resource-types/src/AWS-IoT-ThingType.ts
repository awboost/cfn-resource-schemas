import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::IoT::ThingType
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thingtype.html}
 */
export type IoTThingTypeProperties = {
  DeprecateThingType?: boolean;
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `[a-zA-Z0-9:_-]+`
   */
  ThingTypeName?: string;
  ThingTypeProperties?: {
    Mqtt5Configuration?: {
      PropagatingAttributes?: PropagatingAttribute[];
    };
    /**
     * @maxLength `3`
     */
    SearchableAttributes?: string[];
    /**
     * @maxLength `2028`
     * @pattern `[\p{Graph}\x20]*`
     */
    ThingTypeDescription?: string;
  };
};
/**
 * Attribute type definition for `AWS::IoT::ThingType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thingtype.html#aws-resource-iot-thingtype-return-values}
 */
export type IoTThingTypeAttributes = {
  Arn: string;
  Id: string;
};
/**
 * Type definition for `AWS::IoT::ThingType.PropagatingAttribute`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-thingtype-propagatingattribute.html}
 */
export type PropagatingAttribute = {
  ConnectionAttribute?: "iot:ClientId" | "iot:Thing.ThingName";
  /**
   * @maxLength `128`
   * @pattern `[a-zA-Z0-9_.,@/:#-]+`
   */
  ThingAttribute?: string;
  /**
   * @maxLength `128`
   * @pattern `[a-zA-Z0-9:$.]+`
   */
  UserPropertyKey: string;
};
/**
 * Type definition for `AWS::IoT::ThingType.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-thingtype-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 1 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::IoT::ThingType
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thingtype.html}
 */
export class IoTThingType extends $Resource<
  "AWS::IoT::ThingType",
  IoTThingTypeProperties,
  IoTThingTypeAttributes
> {
  public static readonly Type = "AWS::IoT::ThingType";
  constructor(
    logicalId: string,
    properties: IoTThingTypeProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IoTThingType.Type, properties, options);
  }
}
