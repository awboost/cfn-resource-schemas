import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::IoT::SoftwarePackageVersion`.
 * resource definition
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-softwarepackageversion.html}
 */
export type IoTSoftwarePackageVersionProperties = {
  Attributes?: ResourceAttributes;
  /**
   * @minLength `0`
   * @maxLength `1024`
   * @pattern `^[^\p{C}]+$`
   */
  Description?: string;
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9-_.]+$`
   */
  PackageName: string;
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[a-zA-Z0-9-_.]+$`
   */
  VersionName?: string;
};
/**
 * Attribute type definition for `AWS::IoT::SoftwarePackageVersion`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-softwarepackageversion.html#aws-resource-iot-softwarepackageversion-return-values}
 */
export type IoTSoftwarePackageVersionAttributes = {
  ErrorReason: string;
  PackageVersionArn: string;
  Status: PackageVersionStatus;
};
/**
 * Type definition for `AWS::IoT::SoftwarePackageVersion.PackageVersionStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-softwarepackageversion-packageversionstatus.html}
 */
export type PackageVersionStatus = "DRAFT" | "PUBLISHED" | "DEPRECATED";
/**
 * Type definition for `AWS::IoT::SoftwarePackageVersion.ResourceAttributes`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-softwarepackageversion-resourceattributes.html}
 */
export type ResourceAttributes = Record<string, string>;
/**
 * Type definition for `AWS::IoT::SoftwarePackageVersion.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-softwarepackageversion-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 1 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::IoT::SoftwarePackageVersion`.
 * resource definition
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-softwarepackageversion.html}
 */
export class IoTSoftwarePackageVersion extends $Resource<
  "AWS::IoT::SoftwarePackageVersion",
  IoTSoftwarePackageVersionProperties,
  IoTSoftwarePackageVersionAttributes
> {
  public static readonly Type = "AWS::IoT::SoftwarePackageVersion";
  constructor(
    logicalId: string,
    properties: IoTSoftwarePackageVersionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IoTSoftwarePackageVersion.Type, properties, options);
  }
}
