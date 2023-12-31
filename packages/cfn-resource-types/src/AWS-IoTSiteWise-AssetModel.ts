import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource schema for AWS::IoTSiteWise::AssetModel
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html}
 */
export type IoTSiteWiseAssetModelProperties = {
  /**
   * The composite asset models that are part of this asset model. Composite asset models are asset models that contain specific properties.
   */
  AssetModelCompositeModels?: AssetModelCompositeModel[];
  /**
   * A description for the asset model.
   */
  AssetModelDescription?: string;
  /**
   * The hierarchy definitions of the asset model. Each hierarchy specifies an asset model whose assets can be children of any other assets created from this asset model. You can specify up to 10 hierarchies per asset model.
   */
  AssetModelHierarchies?: AssetModelHierarchy[];
  /**
   * A unique, friendly name for the asset model.
   */
  AssetModelName: string;
  /**
   * The property definitions of the asset model. You can specify up to 200 properties per asset model.
   */
  AssetModelProperties?: AssetModelProperty[];
  /**
   * A list of key-value pairs that contain metadata for the asset model.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::IoTSiteWise::AssetModel`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#aws-resource-iotsitewise-assetmodel-return-values}
 */
export type IoTSiteWiseAssetModelAttributes = {
  /**
   * The ARN of the asset model, which has the following format.
   */
  AssetModelArn: string;
  /**
   * The ID of the asset model.
   */
  AssetModelId: string;
};
/**
 * Type definition for `AWS::IoTSiteWise::AssetModel.AssetModelCompositeModel`.
 * Contains a composite model definition in an asset model. This composite model definition is applied to all assets created from the asset model.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-assetmodelcompositemodel.html}
 */
export type AssetModelCompositeModel = {
  /**
   * The property definitions of the asset model. You can specify up to 200 properties per asset model.
   */
  CompositeModelProperties?: AssetModelProperty[];
  /**
   * A description for the asset composite model.
   */
  Description?: string;
  /**
   * A unique, friendly name for the asset composite model.
   */
  Name: string;
  /**
   * The type of the composite model. For alarm composite models, this type is AWS/ALARM
   */
  Type: string;
};
/**
 * Type definition for `AWS::IoTSiteWise::AssetModel.AssetModelHierarchy`.
 * Contains information about an asset model hierarchy.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-assetmodelhierarchy.html}
 */
export type AssetModelHierarchy = {
  /**
   * The ID of the asset model. All assets in this hierarchy must be instances of the child AssetModelId asset model.
   */
  ChildAssetModelId: string;
  /**
   * Customer provided ID for hierarchy.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `[^\u0000-\u001F\u007F]+`
   */
  LogicalId: string;
  /**
   * The name of the asset model hierarchy.
   */
  Name: string;
};
/**
 * Type definition for `AWS::IoTSiteWise::AssetModel.AssetModelProperty`.
 * Contains information about an asset model property.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-assetmodelproperty.html}
 */
export type AssetModelProperty = {
  /**
   * The data type of the asset model property.
   */
  DataType: DataType;
  /**
   * The data type of the structure for this property.
   */
  DataTypeSpec?: DataTypeSpec;
  /**
   * Customer provided ID for property.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `[^\u0000-\u001F\u007F]+`
   */
  LogicalId: string;
  /**
   * The name of the asset model property.
   */
  Name: string;
  /**
   * The property type
   */
  Type: PropertyType;
  /**
   * The unit of the asset model property, such as Newtons or RPM.
   */
  Unit?: string;
};
/**
 * Type definition for `AWS::IoTSiteWise::AssetModel.Attribute`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-attribute.html}
 */
export type Attribute = {
  DefaultValue?: string;
};
/**
 * Type definition for `AWS::IoTSiteWise::AssetModel.DataType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-datatype.html}
 */
export type DataType = "STRING" | "INTEGER" | "DOUBLE" | "BOOLEAN" | "STRUCT";
/**
 * Type definition for `AWS::IoTSiteWise::AssetModel.DataTypeSpec`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-datatypespec.html}
 */
export type DataTypeSpec = "AWS/ALARM_STATE";
/**
 * Type definition for `AWS::IoTSiteWise::AssetModel.ExpressionVariable`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-expressionvariable.html}
 */
export type ExpressionVariable = {
  /**
   * The friendly name of the variable to be used in the expression.
   */
  Name: string;
  /**
   * The variable that identifies an asset property from which to use values.
   */
  Value: VariableValue;
};
/**
 * Type definition for `AWS::IoTSiteWise::AssetModel.Metric`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-metric.html}
 */
export type Metric = {
  /**
   * The mathematical expression that defines the metric aggregation function. You can specify up to 10 functions per expression.
   */
  Expression: string;
  /**
   * The list of variables used in the expression.
   */
  Variables: ExpressionVariable[];
  /**
   * The window (time interval) over which AWS IoT SiteWise computes the metric's aggregation expression
   */
  Window: MetricWindow;
};
/**
 * Type definition for `AWS::IoTSiteWise::AssetModel.MetricWindow`.
 * Contains a time interval window used for data aggregate computations (for example, average, sum, count, and so on).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-metricwindow.html}
 */
export type MetricWindow = {
  /**
   * Contains a tumbling window, which is a repeating fixed-sized, non-overlapping, and contiguous time interval. This window is used in metric and aggregation computations.
   */
  Tumbling?: TumblingWindow;
};
/**
 * Type definition for `AWS::IoTSiteWise::AssetModel.PropertyType`.
 * Contains a property type, which can be one of attribute, measurement, metric, or transform.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-propertytype.html}
 */
export type PropertyType = {
  Attribute?: Attribute;
  Metric?: Metric;
  Transform?: Transform;
  TypeName: TypeName;
};
/**
 * Type definition for `AWS::IoTSiteWise::AssetModel.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Type definition for `AWS::IoTSiteWise::AssetModel.Transform`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-transform.html}
 */
export type Transform = {
  /**
   * The mathematical expression that defines the transformation function. You can specify up to 10 functions per expression.
   */
  Expression: string;
  /**
   * The list of variables used in the expression.
   */
  Variables: ExpressionVariable[];
};
/**
 * Type definition for `AWS::IoTSiteWise::AssetModel.TumblingWindow`.
 * Contains a tumbling window, which is a repeating fixed-sized, non-overlapping, and contiguous time interval. This window is used in metric and aggregation computations.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-tumblingwindow.html}
 */
export type TumblingWindow = {
  /**
   * The time interval for the tumbling window.
   */
  Interval: string;
  /**
   * The shift or reference point on timeline for the contiguous time intervals.
   */
  Offset?: string;
};
/**
 * Type definition for `AWS::IoTSiteWise::AssetModel.TypeName`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-typename.html}
 */
export type TypeName = "Measurement" | "Attribute" | "Transform" | "Metric";
/**
 * Type definition for `AWS::IoTSiteWise::AssetModel.VariableValue`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-variablevalue.html}
 */
export type VariableValue = {
  /**
   * @minLength `1`
   * @maxLength `256`
   * @pattern `[^\u0000-\u001F\u007F]+`
   */
  HierarchyLogicalId?: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   * @pattern `[^\u0000-\u001F\u007F]+`
   */
  PropertyLogicalId: string;
};
/**
 * Resource schema for AWS::IoTSiteWise::AssetModel
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html}
 */
export class IoTSiteWiseAssetModel extends $Resource<
  "AWS::IoTSiteWise::AssetModel",
  IoTSiteWiseAssetModelProperties,
  IoTSiteWiseAssetModelAttributes
> {
  public static readonly Type = "AWS::IoTSiteWise::AssetModel";
  public static readonly AttributeNames = [
    "AssetModelArn" as const,
    "AssetModelId" as const,
  ];
  constructor(
    logicalId: string,
    properties: IoTSiteWiseAssetModelProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      IoTSiteWiseAssetModel.Type,
      properties,
      IoTSiteWiseAssetModel.AttributeNames,
      options,
    );
  }
}
