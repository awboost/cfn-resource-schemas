import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::SageMaker::Device
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-device.html}
 */
export type SageMakerDeviceProperties = {
  /**
   * The Edge Device you want to register against a device fleet
   */
  Device?: Device;
  /**
   * The name of the edge device fleet
   * @minLength `1`
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9](-*_*[a-zA-Z0-9])*$`
   */
  DeviceFleetName: string;
  /**
   * Associate tags with the resource
   */
  Tags?: Tag[];
};
/**
 * Type definition for `AWS::SageMaker::Device.Device`.
 * Edge device you want to create
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-device-device.html}
 */
export type Device = {
  /**
   * Description of the device
   * @minLength `1`
   * @maxLength `40`
   * @pattern `[\S\s]+`
   */
  Description?: string;
  /**
   * The name of the device
   * @minLength `1`
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9](-*[a-zA-Z0-9])*$`
   */
  DeviceName: string;
  /**
   * AWS Internet of Things (IoT) object name.
   * @maxLength `128`
   * @pattern `[a-zA-Z0-9:_-]+`
   */
  IotThingName?: string;
};
/**
 * Type definition for `AWS::SageMaker::Device.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-device-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^((?!aws:)[\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
   */
  Key: string;
  /**
   * The key value of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   * @pattern `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
   */
  Value: string;
};
/**
 * Resource schema for AWS::SageMaker::Device
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-device.html}
 */
export class SageMakerDevice extends $Resource<
  "AWS::SageMaker::Device",
  SageMakerDeviceProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::SageMaker::Device";
  constructor(
    logicalId: string,
    properties: SageMakerDeviceProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SageMakerDevice.Type, properties, options);
  }
}
