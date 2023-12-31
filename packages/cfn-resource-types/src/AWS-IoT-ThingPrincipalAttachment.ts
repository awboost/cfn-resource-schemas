import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::IoT::ThingPrincipalAttachment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thingprincipalattachment.html}
 */
export type IoTThingPrincipalAttachmentProperties = {
  Principal: string;
  ThingName: string;
};
/**
 * Attribute type definition for `AWS::IoT::ThingPrincipalAttachment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thingprincipalattachment.html#aws-resource-iot-thingprincipalattachment-return-values}
 */
export type IoTThingPrincipalAttachmentAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::IoT::ThingPrincipalAttachment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thingprincipalattachment.html}
 */
export class IoTThingPrincipalAttachment extends $Resource<
  "AWS::IoT::ThingPrincipalAttachment",
  IoTThingPrincipalAttachmentProperties,
  IoTThingPrincipalAttachmentAttributes
> {
  public static readonly Type = "AWS::IoT::ThingPrincipalAttachment";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: IoTThingPrincipalAttachmentProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      IoTThingPrincipalAttachment.Type,
      properties,
      IoTThingPrincipalAttachment.AttributeNames,
      options,
    );
  }
}
