import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for `AWS::Panorama::PackageVersion`.
 * Schema for PackageVersion Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-panorama-packageversion.html}
 */
export type PanoramaPackageVersionProperties = {
  MarkLatest?: boolean;
  /**
   * @minLength `1`
   * @maxLength `12`
   * @pattern `^[0-9a-z\_]+$`
   */
  OwnerAccount?: string;
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[a-zA-Z0-9\-\_\/]+$`
   */
  PackageId: string;
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^([0-9]+)\.([0-9]+)$`
   */
  PackageVersion: string;
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[a-z0-9]+$`
   */
  PatchVersion: string;
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[a-z0-9]+$`
   */
  UpdatedLatestPatchVersion?: string;
};
/**
 * Attribute type definition for `AWS::Panorama::PackageVersion`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-panorama-packageversion.html#aws-resource-panorama-packageversion-return-values}
 */
export type PanoramaPackageVersionAttributes = {
  IsLatestPatch: boolean;
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  PackageArn: string;
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9\-\_]+$`
   */
  PackageName: string;
  RegisteredTime: number;
  Status: PackageVersionStatus;
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  StatusDescription: string;
};
/**
 * Type definition for `AWS::Panorama::PackageVersion.PackageVersionStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-panorama-packageversion-packageversionstatus.html}
 */
export type PackageVersionStatus =
  | "REGISTER_PENDING"
  | "REGISTER_COMPLETED"
  | "FAILED"
  | "DELETING";
/**
 * Resource type definition for `AWS::Panorama::PackageVersion`.
 * Schema for PackageVersion Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-panorama-packageversion.html}
 */
export class PanoramaPackageVersion extends $Resource<
  "AWS::Panorama::PackageVersion",
  PanoramaPackageVersionProperties,
  PanoramaPackageVersionAttributes
> {
  public static readonly Type = "AWS::Panorama::PackageVersion";
  public static readonly AttributeNames = [
    "IsLatestPatch" as const,
    "PackageArn" as const,
    "PackageName" as const,
    "RegisteredTime" as const,
    "Status" as const,
    "StatusDescription" as const,
  ];
  constructor(
    logicalId: string,
    properties: PanoramaPackageVersionProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      PanoramaPackageVersion.Type,
      properties,
      PanoramaPackageVersion.AttributeNames,
      options,
    );
  }
}
