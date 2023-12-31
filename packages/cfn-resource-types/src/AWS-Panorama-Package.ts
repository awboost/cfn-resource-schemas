import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for `AWS::Panorama::Package`.
 * Schema for Package CloudFormation Resource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-panorama-package.html}
 */
export type PanoramaPackageProperties = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9\-\_]+$`
   */
  PackageName: string;
  StorageLocation?: StorageLocation;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Panorama::Package`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-panorama-package.html#aws-resource-panorama-package-return-values}
 */
export type PanoramaPackageAttributes = {
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  Arn: string;
  CreatedTime: number;
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[a-zA-Z0-9\-\_\/]+$`
   */
  PackageId: string;
};
/**
 * Type definition for `AWS::Panorama::Package.StorageLocation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-panorama-package-storagelocation.html}
 */
export type StorageLocation = {
  BinaryPrefixLocation?: string;
  Bucket?: string;
  GeneratedPrefixLocation?: string;
  ManifestPrefixLocation?: string;
  RepoPrefixLocation?: string;
};
/**
 * Type definition for `AWS::Panorama::Package.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-panorama-package-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^.+$`
   */
  Key: string;
  /**
   * @maxLength `256`
   * @pattern `^.+$`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::Panorama::Package`.
 * Schema for Package CloudFormation Resource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-panorama-package.html}
 */
export class PanoramaPackage extends $Resource<
  "AWS::Panorama::Package",
  PanoramaPackageProperties,
  PanoramaPackageAttributes
> {
  public static readonly Type = "AWS::Panorama::Package";
  public static readonly AttributeNames = [
    "Arn" as const,
    "CreatedTime" as const,
    "PackageId" as const,
  ];
  constructor(
    logicalId: string,
    properties: PanoramaPackageProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      PanoramaPackage.Type,
      properties,
      PanoramaPackage.AttributeNames,
      options,
    );
  }
}
