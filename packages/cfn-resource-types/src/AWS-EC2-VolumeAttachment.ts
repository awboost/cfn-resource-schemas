import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::EC2::VolumeAttachment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-volumeattachment.html}
 */
export type EC2VolumeAttachmentProperties = {
  /**
   * The device name
   */
  Device?: string;
  /**
   * The ID of the instance to which the volume attaches
   */
  InstanceId: string;
  /**
   * The ID of the Amazon EBS volume
   */
  VolumeId: string;
};
/**
 * Resource Type definition for AWS::EC2::VolumeAttachment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-volumeattachment.html}
 */
export class EC2VolumeAttachment extends $Resource<
  "AWS::EC2::VolumeAttachment",
  EC2VolumeAttachmentProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::EC2::VolumeAttachment";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: EC2VolumeAttachmentProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      EC2VolumeAttachment.Type,
      properties,
      EC2VolumeAttachment.AttributeNames,
      options,
    );
  }
}
