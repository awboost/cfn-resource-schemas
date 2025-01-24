import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
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
   * Tag key (1-128 chars). No 'aws:' prefix. Allows: [A-Za-z0-9 _.:/=+-]
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
   */
  Key: string;
  /**
   * Tag value (1-256 chars). No 'aws:' prefix. Allows: [A-Za-z0-9 _.:/=+-]
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
