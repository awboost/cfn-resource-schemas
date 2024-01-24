import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Greengrass::DeviceDefinition
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-devicedefinition.html}
 */
export type GreengrassDeviceDefinitionProperties = {
  InitialVersion?: DeviceDefinitionVersion;
  Name: string;
  Tags?: Record<string, any>;
};
/**
 * Attribute type definition for `AWS::Greengrass::DeviceDefinition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-devicedefinition.html#aws-resource-greengrass-devicedefinition-return-values}
 */
export type GreengrassDeviceDefinitionAttributes = {
  Arn: string;
  Id: string;
  LatestVersionArn: string;
};
/**
 * Type definition for `AWS::Greengrass::DeviceDefinition.Device`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-devicedefinition-device.html}
 */
export type Device = {
  CertificateArn: string;
  Id: string;
  SyncShadow?: boolean;
  ThingArn: string;
};
/**
 * Type definition for `AWS::Greengrass::DeviceDefinition.DeviceDefinitionVersion`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-devicedefinition-devicedefinitionversion.html}
 */
export type DeviceDefinitionVersion = {
  Devices: Device[];
};
/**
 * Resource Type definition for AWS::Greengrass::DeviceDefinition
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-devicedefinition.html}
 */
export class GreengrassDeviceDefinition extends $Resource<
  "AWS::Greengrass::DeviceDefinition",
  GreengrassDeviceDefinitionProperties,
  GreengrassDeviceDefinitionAttributes
> {
  public static readonly Type = "AWS::Greengrass::DeviceDefinition";
  constructor(
    logicalId: string,
    properties: GreengrassDeviceDefinitionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, GreengrassDeviceDefinition.Type, properties, options);
  }
}
