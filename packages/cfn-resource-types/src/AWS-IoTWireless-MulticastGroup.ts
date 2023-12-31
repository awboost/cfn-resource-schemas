import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::IoTWireless::MulticastGroup`.
 * Create and manage Multicast groups.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-multicastgroup.html}
 */
export type IoTWirelessMulticastGroupProperties = {
  /**
   * Wireless device to associate. Only for update request.
   * @maxLength `256`
   */
  AssociateWirelessDevice?: string;
  /**
   * Multicast group description
   * @maxLength `2048`
   */
  Description?: string;
  /**
   * Wireless device to disassociate. Only for update request.
   * @maxLength `256`
   */
  DisassociateWirelessDevice?: string;
  /**
   * Multicast group LoRaWAN
   */
  LoRaWAN: LoRaWAN;
  /**
   * Name of Multicast group
   * @maxLength `256`
   */
  Name?: string;
  /**
   * A list of key-value pairs that contain metadata for the Multicast group.
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::IoTWireless::MulticastGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-multicastgroup.html#aws-resource-iotwireless-multicastgroup-return-values}
 */
export type IoTWirelessMulticastGroupAttributes = {
  /**
   * Multicast group arn. Returned after successful create.
   */
  Arn: string;
  /**
   * Multicast group id. Returned after successful create.
   * @maxLength `256`
   */
  Id: string;
  /**
   * Multicast group status. Returned after successful read.
   */
  Status: string;
};
/**
 * Type definition for `AWS::IoTWireless::MulticastGroup.LoRaWAN`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-multicastgroup-lorawan.html}
 */
export type LoRaWAN = {
  /**
   * Multicast group LoRaWAN DL Class
   * @minLength `1`
   * @maxLength `64`
   */
  DlClass: string;
  /**
   * Multicast group LoRaWAN RF region
   * @minLength `1`
   * @maxLength `64`
   */
  RfRegion: string;
};
/**
 * Type definition for `AWS::IoTWireless::MulticastGroup.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-multicastgroup-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key?: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  Value?: string;
};
/**
 * Resource type definition for `AWS::IoTWireless::MulticastGroup`.
 * Create and manage Multicast groups.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-multicastgroup.html}
 */
export class IoTWirelessMulticastGroup extends $Resource<
  "AWS::IoTWireless::MulticastGroup",
  IoTWirelessMulticastGroupProperties,
  IoTWirelessMulticastGroupAttributes
> {
  public static readonly Type = "AWS::IoTWireless::MulticastGroup";
  constructor(
    logicalId: string,
    properties: IoTWirelessMulticastGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IoTWirelessMulticastGroup.Type, properties, options);
  }
}
