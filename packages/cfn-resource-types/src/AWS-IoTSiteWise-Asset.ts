import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::IoTSiteWise::Asset
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-asset.html}
 */
export type IoTSiteWiseAssetProperties = {
  /**
   * A description for the asset
   */
  AssetDescription?: string;
  /**
   * The External ID of the asset
   * @minLength `2`
   * @maxLength `128`
   * @pattern `[a-zA-Z0-9_][a-zA-Z_\-0-9.:]*[a-zA-Z0-9_]+`
   */
  AssetExternalId?: string;
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
  AssetHierarchies: {
    /**
     * Customer provided actual UUID for property
     * @minLength `36`
     * @maxLength `36`
     * @pattern `^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$`
     */
    Id: string;
  }[];
  /**
   * The ID of the asset
   * @minLength `36`
   * @maxLength `36`
   * @pattern `^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$`
   */
  AssetId: string;
  AssetProperties: {
    /**
     * Customer provided actual UUID for property
     * @minLength `36`
     * @maxLength `36`
     * @pattern `^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$`
     */
    Id: string;
  }[];
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
   * String-friendly customer provided external ID
   * @minLength `2`
   * @maxLength `128`
   * @pattern `[a-zA-Z0-9_][a-zA-Z_\-0-9.:]*[a-zA-Z0-9_]+`
   */
  ExternalId?: string;
  /**
   * The LogicalID of a hierarchy in the parent asset's model.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `[^\u0000-\u001F\u007F]+`
   */
  LogicalId?: string;
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
   * String-friendly customer provided external ID
   * @minLength `2`
   * @maxLength `128`
   * @pattern `[a-zA-Z0-9_][a-zA-Z_\-0-9.:]*[a-zA-Z0-9_]+`
   */
  ExternalId?: string;
  /**
   * Customer provided ID for property.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `[^\u0000-\u001F\u007F]+`
   */
  LogicalId?: string;
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
  constructor(
    logicalId: string,
    properties: IoTSiteWiseAssetProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IoTSiteWiseAsset.Type, properties, options);
  }
}
