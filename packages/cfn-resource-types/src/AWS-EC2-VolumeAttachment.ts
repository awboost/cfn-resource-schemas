import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::EC2::VolumeAttachment`.
 * Attaches an Amazon EBS volume to a running instance and exposes it to the instance with the specified device name.
 Before this resource can be deleted (and therefore the volume detached), you must first unmount the volume in the instance. Failure to do so results in the volume being stuck in the busy state while it is trying to detach, which could possibly damage the file system or the data it contains.
 If an Amazon EBS volume is the root device of an instance, it cannot be detached while the instance is in the "running" state. To detach the root volume, stop the instance first.
 If the root volume is detached from an instance with an MKT product code, then the product codes from that volume are no longer associated with the instance.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-volumeattachment.html}
 */
export type EC2VolumeAttachmentProperties = {
  /**
   * The device name (for example, ``/dev/sdh`` or ``xvdh``).
   */
  Device?: string;
  /**
   * The ID of the instance to which the volume attaches. This value can be a reference to an [AWS::EC2::Instance](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance.html) resource, or it can be the physical ID of an existing EC2 instance.
   */
  InstanceId: string;
  /**
   * The ID of the Amazon EBS volume. The volume and instance must be within the same Availability Zone. This value can be a reference to an [AWS::EC2::Volume](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ebs-volume.html) resource, or it can be the volume ID of an existing Amazon EBS volume.
   */
  VolumeId: string;
};
/**
 * Resource type definition for `AWS::EC2::VolumeAttachment`.
 * Attaches an Amazon EBS volume to a running instance and exposes it to the instance with the specified device name.
 Before this resource can be deleted (and therefore the volume detached), you must first unmount the volume in the instance. Failure to do so results in the volume being stuck in the busy state while it is trying to detach, which could possibly damage the file system or the data it contains.
 If an Amazon EBS volume is the root device of an instance, it cannot be detached while the instance is in the "running" state. To detach the root volume, stop the instance first.
 If the root volume is detached from an instance with an MKT product code, then the product codes from that volume are no longer associated with the instance.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-volumeattachment.html}
 */
export class EC2VolumeAttachment extends $Resource<
  "AWS::EC2::VolumeAttachment",
  EC2VolumeAttachmentProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::EC2::VolumeAttachment";
  constructor(
    logicalId: string,
    properties: EC2VolumeAttachmentProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2VolumeAttachment.Type, properties, options);
  }
}
