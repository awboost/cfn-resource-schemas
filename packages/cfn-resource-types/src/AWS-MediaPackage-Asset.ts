import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource schema for AWS::MediaPackage::Asset
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-asset.html}
 */
export type MediaPackageAssetProperties = {
  /**
   * The list of egress endpoints available for the Asset.
   */
  EgressEndpoints?: EgressEndpoint[];
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
};
/**
 * Type definition for `AWS::MediaPackage::Asset.EgressEndpoint`.
 * The endpoint URL used to access an Asset using one PackagingConfiguration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-asset-egressendpoint.html}
 */
export type EgressEndpoint = {
  /**
   * The ID of the PackagingConfiguration being applied to the Asset.
   */
  PackagingConfigurationId: string;
  /**
   * The URL of the parent manifest for the repackaged Asset.
   */
  Url: string;
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
  public static readonly AttributeNames = [
    "Arn" as const,
    "CreatedAt" as const,
  ];
  constructor(
    logicalId: string,
    properties: MediaPackageAssetProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      MediaPackageAsset.Type,
      properties,
      MediaPackageAsset.AttributeNames,
      options,
    );
  }
}
