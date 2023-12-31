import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::IoT::ThingGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thinggroup.html}
 */
export type IoTThingGroupProperties = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `[a-zA-Z0-9:_-]+`
   */
  ParentGroupName?: string;
  /**
   * @minLength `1`
   * @maxLength `1000`
   */
  QueryString?: string;
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
  ThingGroupName?: string;
  ThingGroupProperties?: {
    AttributePayload?: AttributePayload;
    /**
     * @maxLength `2028`
     * @pattern `[\p{Graph}\x20]*`
     */
    ThingGroupDescription?: string;
  };
};
/**
 * Attribute type definition for `AWS::IoT::ThingGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thinggroup.html#aws-resource-iot-thinggroup-return-values}
 */
export type IoTThingGroupAttributes = {
  Arn: string;
  Id: string;
};
/**
 * Type definition for `AWS::IoT::ThingGroup.AttributePayload`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-thinggroup-attributepayload.html}
 */
export type AttributePayload = {
  Attributes?: Record<string, string>;
};
/**
 * Type definition for `AWS::IoT::ThingGroup.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-thinggroup-tag.html}
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
 * Resource Type definition for AWS::IoT::ThingGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thinggroup.html}
 */
export class IoTThingGroup extends $Resource<
  "AWS::IoT::ThingGroup",
  IoTThingGroupProperties,
  IoTThingGroupAttributes
> {
  public static readonly Type = "AWS::IoT::ThingGroup";
  constructor(
    logicalId: string,
    properties: IoTThingGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IoTThingGroup.Type, properties, options);
  }
}
