import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::EC2::NetworkInterfaceAttachment`.
 * Attaches an elastic network interface (ENI) to an Amazon EC2 instance. You can use this resource type to attach additional network interfaces to an instance without interruption.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterfaceattachment.html}
 */
export type EC2NetworkInterfaceAttachmentProperties = {
  /**
   * Whether to delete the network interface when the instance terminates. By default, this value is set to ``true``.
   */
  DeleteOnTermination?: boolean;
  /**
   * The network interface's position in the attachment order. For example, the first attached network interface has a ``DeviceIndex`` of 0.
   */
  DeviceIndex: string;
  /**
   * The number of ENA queues created with the instance.
   */
  EnaQueueCount?: number;
  /**
   * Configures ENA Express for the network interface that this action attaches to the instance.
   */
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
  AttachmentId: string;
};
/**
 * Type definition for `AWS::EC2::NetworkInterfaceAttachment.EnaSrdSpecification`.
 * ENA Express uses AWS Scalable Reliable Datagram (SRD) technology to increase the maximum bandwidth used per stream and minimize tail latency of network traffic between EC2 instances. With ENA Express, you can communicate between two EC2 instances in the same subnet within the same account, or in different accounts. Both sending and receiving instances must have ENA Express enabled.
 To improve the reliability of network packet delivery, ENA Express reorders network packets on the receiving end by default. However, some UDP-based applications are designed to handle network packets that are out of order to reduce the overhead for packet delivery at the network layer. When ENA Express is enabled, you can specify whether UDP network traffic uses it.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinterfaceattachment-enasrdspecification.html}
 */
export type EnaSrdSpecification = {
  /**
   * Indicates whether ENA Express is enabled for the network interface.
   */
  EnaSrdEnabled?: boolean;
  /**
   * Configures ENA Express for UDP network traffic.
   */
  EnaSrdUdpSpecification?: {
    EnaSrdUdpEnabled?: boolean;
  };
};
/**
 * Resource type definition for `AWS::EC2::NetworkInterfaceAttachment`.
 * Attaches an elastic network interface (ENI) to an Amazon EC2 instance. You can use this resource type to attach additional network interfaces to an instance without interruption.
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
