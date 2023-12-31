import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for `AWS::IoTWireless::WirelessDeviceImportTask`.
 * Wireless Device Import Tasks
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-wirelessdeviceimporttask.html}
 */
export type IoTWirelessWirelessDeviceImportTaskProperties = {
  /**
   * Destination Name for import task
   * @maxLength `128`
   * @pattern `[a-zA-Z0-9-_]+`
   */
  DestinationName: string;
  /**
   * sidewalk contain file for created device and role
   */
  Sidewalk: {
    /**
     * @maxLength `1024`
     */
    DeviceCreationFile?: string;
    /**
     * sidewalk create device's file path
     */
    DeviceCreationFileList?: string[];
    /**
     * sidewalk role
     * @maxLength `2048`
     */
    Role?: string;
    /**
     * @maxLength `64`
     */
    SidewalkManufacturingSn?: string;
  };
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::IoTWireless::WirelessDeviceImportTask`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-wirelessdeviceimporttask.html#aws-resource-iotwireless-wirelessdeviceimporttask-return-values}
 */
export type IoTWirelessWirelessDeviceImportTaskAttributes = {
  /**
   * Arn for Wireless Device Import Task, Returned upon successful start.
   * @maxLength `128`
   */
  Arn: string;
  /**
   * CreationDate for import task
   */
  CreationDate: string;
  /**
   * Failed Imported Devices Count
   */
  FailedImportedDevicesCount: number;
  /**
   * Id for Wireless Device Import Task, Returned upon successful start.
   * @maxLength `256`
   */
  Id: string;
  /**
   * Initialized Imported Devices Count
   */
  InitializedImportedDevicesCount: number;
  /**
   * Onboarded Imported Devices Count
   */
  OnboardedImportedDevicesCount: number;
  /**
   * Pending Imported Devices Count
   */
  PendingImportedDevicesCount: number;
  /**
   * Status for import task
   */
  Status:
    | "INITIALIZING"
    | "INITIALIZED"
    | "PENDING"
    | "COMPLETE"
    | "FAILED"
    | "DELETING";
  /**
   * StatusReason for import task
   */
  StatusReason: string;
};
/**
 * Type definition for `AWS::IoTWireless::WirelessDeviceImportTask.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessdeviceimporttask-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::IoTWireless::WirelessDeviceImportTask`.
 * Wireless Device Import Tasks
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-wirelessdeviceimporttask.html}
 */
export class IoTWirelessWirelessDeviceImportTask extends $Resource<
  "AWS::IoTWireless::WirelessDeviceImportTask",
  IoTWirelessWirelessDeviceImportTaskProperties,
  IoTWirelessWirelessDeviceImportTaskAttributes
> {
  public static readonly Type = "AWS::IoTWireless::WirelessDeviceImportTask";
  public static readonly AttributeNames = [
    "Arn" as const,
    "CreationDate" as const,
    "FailedImportedDevicesCount" as const,
    "Id" as const,
    "InitializedImportedDevicesCount" as const,
    "OnboardedImportedDevicesCount" as const,
    "PendingImportedDevicesCount" as const,
    "Status" as const,
    "StatusReason" as const,
  ];
  constructor(
    logicalId: string,
    properties: IoTWirelessWirelessDeviceImportTaskProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      IoTWirelessWirelessDeviceImportTask.Type,
      properties,
      IoTWirelessWirelessDeviceImportTask.AttributeNames,
      options,
    );
  }
}
