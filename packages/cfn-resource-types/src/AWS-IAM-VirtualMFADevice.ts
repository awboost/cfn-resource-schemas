import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::IAM::VirtualMFADevice
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-virtualmfadevice.html}
 */
export type IAMVirtualMFADeviceProperties = {
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `(\u002F)|(\u002F[\u0021-\u007F]+\u002F)`
   */
  Path?: string;
  Tags?: Tag[];
  Users: string[];
  /**
   * @minLength `1`
   * @maxLength `226`
   * @pattern `[\w+=,.@-]+`
   */
  VirtualMfaDeviceName?: string;
};
/**
 * Attribute type definition for `AWS::IAM::VirtualMFADevice`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-virtualmfadevice.html#aws-resource-iam-virtualmfadevice-return-values}
 */
export type IAMVirtualMFADeviceAttributes = {
  /**
   * @minLength `9`
   * @maxLength `256`
   * @pattern `[\w+=/:,.@-]+`
   */
  SerialNumber: string;
};
/**
 * Type definition for `AWS::IAM::VirtualMFADevice.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-virtualmfadevice-tag.html}
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
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::IAM::VirtualMFADevice
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-virtualmfadevice.html}
 */
export class IAMVirtualMFADevice extends $Resource<
  "AWS::IAM::VirtualMFADevice",
  IAMVirtualMFADeviceProperties,
  IAMVirtualMFADeviceAttributes
> {
  public static readonly Type = "AWS::IAM::VirtualMFADevice";
  public static readonly AttributeNames = ["SerialNumber" as const];
  constructor(
    logicalId: string,
    properties: IAMVirtualMFADeviceProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      IAMVirtualMFADevice.Type,
      properties,
      IAMVirtualMFADevice.AttributeNames,
      options,
    );
  }
}
