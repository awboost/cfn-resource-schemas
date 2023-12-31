import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for `AWS::IoTWireless::FuotaTask`.
 * Create and manage FUOTA tasks.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-fuotatask.html}
 */
export type IoTWirelessFuotaTaskProperties = {
  /**
   * Multicast group to associate. Only for update request.
   * @maxLength `256`
   */
  AssociateMulticastGroup?: string;
  /**
   * Wireless device to associate. Only for update request.
   * @maxLength `256`
   */
  AssociateWirelessDevice?: string;
  /**
   * FUOTA task description
   * @maxLength `2048`
   */
  Description?: string;
  /**
   * Multicast group to disassociate. Only for update request.
   * @maxLength `256`
   */
  DisassociateMulticastGroup?: string;
  /**
   * Wireless device to disassociate. Only for update request.
   * @maxLength `256`
   */
  DisassociateWirelessDevice?: string;
  /**
   * FUOTA task firmware update image binary S3 link
   * @minLength `1`
   * @maxLength `2048`
   */
  FirmwareUpdateImage: string;
  /**
   * FUOTA task firmware IAM role for reading S3
   * @minLength `1`
   * @maxLength `256`
   */
  FirmwareUpdateRole: string;
  /**
   * FUOTA task LoRaWAN
   */
  LoRaWAN: LoRaWAN;
  /**
   * Name of FUOTA task
   * @maxLength `256`
   */
  Name?: string;
  /**
   * A list of key-value pairs that contain metadata for the FUOTA task.
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::IoTWireless::FuotaTask`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-fuotatask.html#aws-resource-iotwireless-fuotatask-return-values}
 */
export type IoTWirelessFuotaTaskAttributes = {
  /**
   * FUOTA task arn. Returned after successful create.
   */
  Arn: string;
  /**
   * FUOTA task status. Returned after successful read.
   */
  FuotaTaskStatus: string;
  /**
   * FUOTA task id. Returned after successful create.
   * @maxLength `256`
   */
  Id: string;
};
/**
 * Type definition for `AWS::IoTWireless::FuotaTask.LoRaWAN`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-fuotatask-lorawan.html}
 */
export type LoRaWAN = {
  /**
   * FUOTA task LoRaWAN RF region
   * @minLength `1`
   * @maxLength `64`
   */
  RfRegion: string;
  /**
   * FUOTA task LoRaWAN start time
   * @maxLength `64`
   */
  StartTime?: string;
};
/**
 * Type definition for `AWS::IoTWireless::FuotaTask.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-fuotatask-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key?: string;
  /**
   * @maxLength `256`
   */
  Value?: string;
};
/**
 * Resource type definition for `AWS::IoTWireless::FuotaTask`.
 * Create and manage FUOTA tasks.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-fuotatask.html}
 */
export class IoTWirelessFuotaTask extends $Resource<
  "AWS::IoTWireless::FuotaTask",
  IoTWirelessFuotaTaskProperties,
  IoTWirelessFuotaTaskAttributes
> {
  public static readonly Type = "AWS::IoTWireless::FuotaTask";
  public static readonly AttributeNames = [
    "Arn" as const,
    "FuotaTaskStatus" as const,
    "Id" as const,
  ];
  constructor(
    logicalId: string,
    properties: IoTWirelessFuotaTaskProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      IoTWirelessFuotaTask.Type,
      properties,
      IoTWirelessFuotaTask.AttributeNames,
      options,
    );
  }
}
