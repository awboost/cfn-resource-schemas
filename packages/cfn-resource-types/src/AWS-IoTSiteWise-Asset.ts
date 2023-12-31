import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource schema for AWS::IoTSiteWise::Asset
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-asset.html}
 */
export type IoTSiteWiseAssetProperties = {
  /**
   * A description for the asset
   */
  AssetDescription?: string;
  AssetHierarchies?: AssetHierarchy[];
  /**
   * The ID of the asset model from which to create the asset.
   */
  AssetModelId: string;
  /**
   * A unique, friendly name for the asset.
   */
  AssetName: string;
  AssetProperties?: AssetProperty[];
  /**
   * A list of key-value pairs that contain metadata for the asset.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::IoTSiteWise::Asset`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-asset.html#aws-resource-iotsitewise-asset-return-values}
 */
export type IoTSiteWiseAssetAttributes = {
  /**
   * The ARN of the asset
   */
  AssetArn: string;
  /**
   * The ID of the asset
   */
  AssetId: string;
};
/**
 * Type definition for `AWS::IoTSiteWise::Asset.AssetHierarchy`.
 * A hierarchy specifies allowed parent/child asset relationships.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-asset-assethierarchy.html}
 */
export type AssetHierarchy = {
  /**
   * The ID of the child asset to be associated.
   */
  ChildAssetId: string;
  /**
   * The LogicalID of a hierarchy in the parent asset's model.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `[^\u0000-\u001F\u007F]+`
   */
  LogicalId: string;
};
/**
 * Type definition for `AWS::IoTSiteWise::Asset.AssetProperty`.
 * The asset property's definition, alias, unit, and notification state.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-asset-assetproperty.html}
 */
export type AssetProperty = {
  /**
   * The property alias that identifies the property.
   */
  Alias?: string;
  /**
   * Customer provided ID for property.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `[^\u0000-\u001F\u007F]+`
   */
  LogicalId: string;
  /**
   * The MQTT notification state (ENABLED or DISABLED) for this asset property.
   */
  NotificationState?: "ENABLED" | "DISABLED";
  /**
   * The unit of measure (such as Newtons or RPM) of the asset property. If you don't specify a value for this parameter, the service uses the value of the assetModelProperty in the asset model.
   */
  Unit?: string;
};
/**
 * Type definition for `AWS::IoTSiteWise::Asset.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-asset-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource schema for AWS::IoTSiteWise::Asset
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-asset.html}
 */
export class IoTSiteWiseAsset extends $Resource<
  "AWS::IoTSiteWise::Asset",
  IoTSiteWiseAssetProperties,
  IoTSiteWiseAssetAttributes
> {
  public static readonly Type = "AWS::IoTSiteWise::Asset";
  public static readonly AttributeNames = [
    "AssetArn" as const,
    "AssetId" as const,
  ];
  constructor(
    logicalId: string,
    properties: IoTSiteWiseAssetProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      IoTSiteWiseAsset.Type,
      properties,
      IoTSiteWiseAsset.AttributeNames,
      options,
    );
  }
}
