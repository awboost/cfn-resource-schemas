import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::IoT::Thing
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thing.html}
 */
export type IoTThingProperties = {
  AttributePayload?: AttributePayload;
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `[a-zA-Z0-9:_-]+`
   */
  ThingName?: string;
};
/**
 * Attribute type definition for `AWS::IoT::Thing`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thing.html#aws-resource-iot-thing-return-values}
 */
export type IoTThingAttributes = {
  Arn: string;
  Id: string;
};
/**
 * Type definition for `AWS::IoT::Thing.AttributePayload`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-thing-attributepayload.html}
 */
export type AttributePayload = {
  Attributes?: Record<string, string>;
};
/**
 * Resource Type definition for AWS::IoT::Thing
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thing.html}
 */
export class IoTThing extends $Resource<
  "AWS::IoT::Thing",
  IoTThingProperties,
  IoTThingAttributes
> {
  public static readonly Type = "AWS::IoT::Thing";
  public static readonly AttributeNames = ["Arn" as const, "Id" as const];
  constructor(
    logicalId: string,
    properties: IoTThingProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      IoTThing.Type,
      properties,
      IoTThing.AttributeNames,
      options,
    );
  }
}
