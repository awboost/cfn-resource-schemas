import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::IoT::PolicyPrincipalAttachment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-policyprincipalattachment.html}
 */
export type IoTPolicyPrincipalAttachmentProperties = {
  PolicyName: string;
  Principal: string;
};
/**
 * Attribute type definition for `AWS::IoT::PolicyPrincipalAttachment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-policyprincipalattachment.html#aws-resource-iot-policyprincipalattachment-return-values}
 */
export type IoTPolicyPrincipalAttachmentAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::IoT::PolicyPrincipalAttachment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-policyprincipalattachment.html}
 */
export class IoTPolicyPrincipalAttachment extends $Resource<
  "AWS::IoT::PolicyPrincipalAttachment",
  IoTPolicyPrincipalAttachmentProperties,
  IoTPolicyPrincipalAttachmentAttributes
> {
  public static readonly Type = "AWS::IoT::PolicyPrincipalAttachment";
  constructor(
    logicalId: string,
    properties: IoTPolicyPrincipalAttachmentProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IoTPolicyPrincipalAttachment.Type, properties, options);
  }
}
