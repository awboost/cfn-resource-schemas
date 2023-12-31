import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * The AWS::NetworkManager::Device type describes a device.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-device.html}
 */
export type NetworkManagerDeviceProperties = {
  /**
   * The Amazon Web Services location of the device, if applicable.
   */
  AWSLocation?: AWSLocation;
  /**
   * The description of the device.
   */
  Description?: string;
  /**
   * The ID of the global network.
   */
  GlobalNetworkId: string;
  /**
   * The site location.
   */
  Location?: Location;
  /**
   * The device model
   */
  Model?: string;
  /**
   * The device serial number.
   */
  SerialNumber?: string;
  /**
   * The site ID.
   */
  SiteId?: string;
  /**
   * The tags for the device.
   */
  Tags?: Tag[];
  /**
   * The device type.
   */
  Type?: string;
  /**
   * The device vendor.
   */
  Vendor?: string;
};
/**
 * Attribute type definition for `AWS::NetworkManager::Device`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-device.html#aws-resource-networkmanager-device-return-values}
 */
export type NetworkManagerDeviceAttributes = {
  /**
   * The date and time that the device was created.
   */
  CreatedAt: string;
  /**
   * The Amazon Resource Name (ARN) of the device.
   */
  DeviceArn: string;
  /**
   * The ID of the device.
   */
  DeviceId: string;
  /**
   * The state of the device.
   */
  State: string;
};
/**
 * Type definition for `AWS::NetworkManager::Device.AWSLocation`.
 * The Amazon Web Services location of the device, if applicable.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-device-awslocation.html}
 */
export type AWSLocation = {
  /**
   * The Amazon Resource Name (ARN) of the subnet that the device is located in.
   */
  SubnetArn?: string;
  /**
   * The Zone that the device is located in. Specify the ID of an Availability Zone, Local Zone, Wavelength Zone, or an Outpost.
   */
  Zone?: string;
};
/**
 * Type definition for `AWS::NetworkManager::Device.Location`.
 * The site location.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-device-location.html}
 */
export type Location = {
  /**
   * The physical address.
   */
  Address?: string;
  /**
   * The latitude.
   */
  Latitude?: string;
  /**
   * The longitude.
   */
  Longitude?: string;
};
/**
 * Type definition for `AWS::NetworkManager::Device.Tag`.
 * A key-value pair to associate with a device resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-device-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Value: string;
};
/**
 * The AWS::NetworkManager::Device type describes a device.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-device.html}
 */
export class NetworkManagerDevice extends $Resource<
  "AWS::NetworkManager::Device",
  NetworkManagerDeviceProperties,
  NetworkManagerDeviceAttributes
> {
  public static readonly Type = "AWS::NetworkManager::Device";
  public static readonly AttributeNames = [
    "CreatedAt" as const,
    "DeviceArn" as const,
    "DeviceId" as const,
    "State" as const,
  ];
  constructor(
    logicalId: string,
    properties: NetworkManagerDeviceProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      NetworkManagerDevice.Type,
      properties,
      NetworkManagerDevice.AttributeNames,
      options,
    );
  }
}
