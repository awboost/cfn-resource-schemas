import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::IoT::SoftwarePackageVersion`.
 * resource definition
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-softwarepackageversion.html}
 */
export type IoTSoftwarePackageVersionProperties = {
  /**
   * The artifact location of the package version
   */
  Artifact?: PackageVersionArtifact;
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
   * The inline json job document associated with a software package version
   */
  Recipe?: string;
  /**
   * The sbom zip archive location of the package version
   */
  Sbom?: Sbom;
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
  /**
   * @pattern `^arn:[!-~]+$`
   */
  PackageVersionArn: string;
  /**
   * The validation status of the Sbom file
   */
  SbomValidationStatus: SbomValidationStatus;
  Status: PackageVersionStatus;
};
/**
 * Type definition for `AWS::IoT::SoftwarePackageVersion.PackageVersionArtifact`.
 * The artifact location of the package version
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-softwarepackageversion-packageversionartifact.html}
 */
export type PackageVersionArtifact = {
  /**
   * The Amazon S3 location
   */
  S3Location: S3Location;
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
 * Type definition for `AWS::IoT::SoftwarePackageVersion.S3Location`.
 * The Amazon S3 location
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-softwarepackageversion-s3location.html}
 */
export type S3Location = {
  /**
   * The S3 bucket
   * @minLength `1`
   */
  Bucket: string;
  /**
   * The S3 key
   * @minLength `1`
   */
  Key: string;
  /**
   * The S3 version
   */
  Version: string;
};
/**
 * Type definition for `AWS::IoT::SoftwarePackageVersion.Sbom`.
 * The sbom zip archive location of the package version
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-softwarepackageversion-sbom.html}
 */
export type Sbom = {
  /**
   * The Amazon S3 location
   */
  S3Location: S3Location;
};
/**
 * Type definition for `AWS::IoT::SoftwarePackageVersion.SbomValidationStatus`.
 * The validation status of the Sbom file
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-softwarepackageversion-sbomvalidationstatus.html}
 */
export type SbomValidationStatus = "IN_PROGRESS" | "FAILED" | "SUCCEEDED" | "";
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
