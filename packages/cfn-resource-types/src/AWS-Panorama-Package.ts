import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Panorama::Package`.
 * Creates a package and storage location in an Amazon S3 access point.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-panorama-package.html}
 */
export type PanoramaPackageProperties = {
  /**
   * A name for the package.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9\-\_]+$`
   */
  PackageName: string;
  /**
   * Tags for the package.
   */
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
  /**
   * A storage location.
   */
  StorageLocation: {
    /**
     * The location's binary prefix.
     */
    BinaryPrefixLocation: string;
    /**
     * The location's bucket.
     */
    Bucket: string;
    /**
     * The location's generated prefix.
     */
    GeneratedPrefixLocation: string;
    /**
     * The location's manifest prefix.
     */
    ManifestPrefixLocation: string;
    /**
     * The location's repo prefix.
     */
    RepoPrefixLocation: string;
  };
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
   * @minLength `0`
   * @maxLength `256`
   * @pattern `^.+$`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::Panorama::Package`.
 * Creates a package and storage location in an Amazon S3 access point.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-panorama-package.html}
 */
export class PanoramaPackage extends $Resource<
  "AWS::Panorama::Package",
  PanoramaPackageProperties,
  PanoramaPackageAttributes
> {
  public static readonly Type = "AWS::Panorama::Package";
  constructor(
    logicalId: string,
    properties: PanoramaPackageProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, PanoramaPackage.Type, properties, options);
  }
}
