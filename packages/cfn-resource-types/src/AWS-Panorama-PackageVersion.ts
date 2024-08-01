import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Panorama::PackageVersion`.
 * Registers a package version.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-panorama-packageversion.html}
 */
export type PanoramaPackageVersionProperties = {
  /**
   * Whether to mark the new version as the latest version.
   */
  MarkLatest?: boolean;
  /**
   * An owner account.
   * @minLength `1`
   * @maxLength `12`
   * @pattern `^[0-9a-z\_]+$`
   */
  OwnerAccount?: string;
  /**
   * A package ID.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[a-zA-Z0-9\-\_\/]+$`
   */
  PackageId: string;
  /**
   * A package version.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^([0-9]+)\.([0-9]+)$`
   */
  PackageVersion: string;
  /**
   * A patch version.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[a-z0-9]+$`
   */
  PatchVersion: string;
  /**
   * If the version was marked latest, the new version to maker as latest.
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
 * Registers a package version.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-panorama-packageversion.html}
 */
export class PanoramaPackageVersion extends $Resource<
  "AWS::Panorama::PackageVersion",
  PanoramaPackageVersionProperties,
  PanoramaPackageVersionAttributes
> {
  public static readonly Type = "AWS::Panorama::PackageVersion";
  constructor(
    logicalId: string,
    properties: PanoramaPackageVersionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, PanoramaPackageVersion.Type, properties, options);
  }
}
