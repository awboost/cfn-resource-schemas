import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::IoTWireless::DeviceProfile`.
 * Device Profile's resource schema demonstrating some basic constructs and validation rules.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-deviceprofile.html}
 */
export type IoTWirelessDeviceProfileProperties = {
  /**
   * LoRaWANDeviceProfile supports all LoRa specific attributes for service profile for CreateDeviceProfile operation
   */
  LoRaWAN?: LoRaWANDeviceProfile;
  /**
   * Name of service profile
   * @maxLength `256`
   */
  Name?: string;
  /**
   * A list of key-value pairs that contain metadata for the device profile.
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::IoTWireless::DeviceProfile`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-deviceprofile.html#aws-resource-iotwireless-deviceprofile-return-values}
 */
export type IoTWirelessDeviceProfileAttributes = {
  /**
   * Service profile Arn. Returned after successful create.
   */
  Arn: string;
  /**
   * Service profile Id. Returned after successful create.
   * @maxLength `256`
   */
  Id: string;
};
/**
 * Type definition for `AWS::IoTWireless::DeviceProfile.LoRaWANDeviceProfile`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-deviceprofile-lorawandeviceprofile.html}
 */
export type LoRaWANDeviceProfile = {
  /**
   * @min `0`
   * @max `1000`
   */
  ClassBTimeout?: number;
  /**
   * @min `0`
   * @max `1000`
   */
  ClassCTimeout?: number;
  /**
   * @maxLength `20`
   */
  FactoryPresetFreqsList?: number[];
  /**
   * @maxLength `64`
   */
  MacVersion?: string;
  /**
   * @min `0`
   * @max `100`
   */
  MaxDutyCycle?: number;
  /**
   * @min `0`
   * @max `15`
   */
  MaxEirp?: number;
  /**
   * @min `0`
   * @max `15`
   */
  PingSlotDr?: number;
  /**
   * @min `1000000`
   * @max `16700000`
   */
  PingSlotFreq?: number;
  /**
   * @min `128`
   * @max `4096`
   */
  PingSlotPeriod?: number;
  /**
   * @maxLength `64`
   */
  RegParamsRevision?: string;
  /**
   * @maxLength `64`
   */
  RfRegion?: string;
  /**
   * @min `0`
   * @max `15`
   */
  RxDataRate2?: number;
  /**
   * @min `0`
   * @max `15`
   */
  RxDelay1?: number;
  /**
   * @min `0`
   * @max `7`
   */
  RxDrOffset1?: number;
  /**
   * @min `1000000`
   * @max `16700000`
   */
  RxFreq2?: number;
  Supports32BitFCnt?: boolean;
  SupportsClassB?: boolean;
  SupportsClassC?: boolean;
  SupportsJoin?: boolean;
};
/**
 * Type definition for `AWS::IoTWireless::DeviceProfile.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-deviceprofile-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key?: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  Value?: string;
};
/**
 * Resource type definition for `AWS::IoTWireless::DeviceProfile`.
 * Device Profile's resource schema demonstrating some basic constructs and validation rules.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-deviceprofile.html}
 */
export class IoTWirelessDeviceProfile extends $Resource<
  "AWS::IoTWireless::DeviceProfile",
  IoTWirelessDeviceProfileProperties,
  IoTWirelessDeviceProfileAttributes
> {
  public static readonly Type = "AWS::IoTWireless::DeviceProfile";
  constructor(
    logicalId: string,
    properties: IoTWirelessDeviceProfileProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IoTWirelessDeviceProfile.Type, properties, options);
  }
}
