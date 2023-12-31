import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::Greengrass::DeviceDefinitionVersion
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-devicedefinitionversion.html}
 */
export type GreengrassDeviceDefinitionVersionProperties = {
  DeviceDefinitionId: string;
  Devices: Device[];
};
/**
 * Attribute type definition for `AWS::Greengrass::DeviceDefinitionVersion`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-devicedefinitionversion.html#aws-resource-greengrass-devicedefinitionversion-return-values}
 */
export type GreengrassDeviceDefinitionVersionAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::Greengrass::DeviceDefinitionVersion.Device`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-devicedefinitionversion-device.html}
 */
export type Device = {
  CertificateArn: string;
  Id: string;
  SyncShadow?: boolean;
  ThingArn: string;
};
/**
 * Resource Type definition for AWS::Greengrass::DeviceDefinitionVersion
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-devicedefinitionversion.html}
 */
export class GreengrassDeviceDefinitionVersion extends $Resource<
  "AWS::Greengrass::DeviceDefinitionVersion",
  GreengrassDeviceDefinitionVersionProperties,
  GreengrassDeviceDefinitionVersionAttributes
> {
  public static readonly Type = "AWS::Greengrass::DeviceDefinitionVersion";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: GreengrassDeviceDefinitionVersionProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      GreengrassDeviceDefinitionVersion.Type,
      properties,
      GreengrassDeviceDefinitionVersion.AttributeNames,
      options,
    );
  }
}
