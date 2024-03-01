import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::EC2::NetworkInterfaceAttachment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterfaceattachment.html}
 */
export type EC2NetworkInterfaceAttachmentProperties = {
  /**
   * Whether to delete the network interface when the instance terminates. By default, this value is set to true.
   */
  DeleteOnTermination?: boolean;
  /**
   * The network interface's position in the attachment order. For example, the first attached network interface has a DeviceIndex of 0.
   */
  DeviceIndex: string;
  EnaSrdSpecification?: EnaSrdSpecification;
  /**
   * The ID of the instance to which you will attach the ENI.
   */
  InstanceId: string;
  /**
   * The ID of the ENI that you want to attach.
   */
  NetworkInterfaceId: string;
};
/**
 * Attribute type definition for `AWS::EC2::NetworkInterfaceAttachment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterfaceattachment.html#aws-resource-ec2-networkinterfaceattachment-return-values}
 */
export type EC2NetworkInterfaceAttachmentAttributes = {
  /**
   * The ID of the network interface attachment.
   */
  AttachmentId: string;
};
/**
 * Type definition for `AWS::EC2::NetworkInterfaceAttachment.EnaSrdSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinterfaceattachment-enasrdspecification.html}
 */
export type EnaSrdSpecification = {
  EnaSrdEnabled?: boolean;
  EnaSrdUdpSpecification?: {
    EnaSrdUdpEnabled?: boolean;
  };
};
/**
 * Resource Type definition for AWS::EC2::NetworkInterfaceAttachment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterfaceattachment.html}
 */
export class EC2NetworkInterfaceAttachment extends $Resource<
  "AWS::EC2::NetworkInterfaceAttachment",
  EC2NetworkInterfaceAttachmentProperties,
  EC2NetworkInterfaceAttachmentAttributes
> {
  public static readonly Type = "AWS::EC2::NetworkInterfaceAttachment";
  constructor(
    logicalId: string,
    properties: EC2NetworkInterfaceAttachmentProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2NetworkInterfaceAttachment.Type, properties, options);
  }
}
