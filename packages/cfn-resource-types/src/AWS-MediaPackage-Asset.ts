import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::MediaPackage::Asset
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-asset.html}
 */
export type MediaPackageAssetProperties = {
  /**
   * The unique identifier for the Asset.
   */
  Id: string;
  /**
   * The ID of the PackagingGroup for the Asset.
   */
  PackagingGroupId: string;
  /**
   * The resource ID to include in SPEKE key requests.
   */
  ResourceId?: string;
  /**
   * ARN of the source object in S3.
   */
  SourceArn: string;
  /**
   * The IAM role_arn used to access the source S3 bucket.
   */
  SourceRoleArn: string;
  /**
   * A collection of tags associated with a resource
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::MediaPackage::Asset`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-asset.html#aws-resource-mediapackage-asset-return-values}
 */
export type MediaPackageAssetAttributes = {
  /**
   * The ARN of the Asset.
   */
  Arn: string;
  /**
   * The time the Asset was initially submitted for Ingest.
   */
  CreatedAt: string;
  /**
   * The list of egress endpoints available for the Asset.
   */
  EgressEndpoints: {
    /**
     * The ID of the PackagingConfiguration being applied to the Asset.
     */
    PackagingConfigurationId: string;
    /**
     * The URL of the parent manifest for the repackaged Asset.
     */
    Url: string;
  }[];
};
/**
 * Type definition for `AWS::MediaPackage::Asset.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-asset-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource schema for AWS::MediaPackage::Asset
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-asset.html}
 */
export class MediaPackageAsset extends $Resource<
  "AWS::MediaPackage::Asset",
  MediaPackageAssetProperties,
  MediaPackageAssetAttributes
> {
  public static readonly Type = "AWS::MediaPackage::Asset";
  constructor(
    logicalId: string,
    properties: MediaPackageAssetProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, MediaPackageAsset.Type, properties, options);
  }
}
