import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
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
  constructor(
    logicalId: string,
    properties: IoTThingPrincipalAttachmentProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IoTThingPrincipalAttachment.Type, properties, options);
  }
}
