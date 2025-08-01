import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::IoTSiteWise::ComputationModel.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-computationmodel.html}
 */
export type IoTSiteWiseComputationModelProperties = {
  /**
   * The configuration for the computation model.
   */
  ComputationModelConfiguration: ComputationModelConfiguration;
  /**
   * The data binding for the computation model.
   */
  ComputationModelDataBinding: ComputationModelDataBinding;
  /**
   * A description about the computation model.
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^[a-zA-Z0-9 _\-#$*!@]+$`
   */
  ComputationModelDescription?: string;
  /**
   * The name of the computation model.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9 _\-#$*!@]+$`
   */
  ComputationModelName: string;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::IoTSiteWise::ComputationModel`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-computationmodel.html#aws-resource-iotsitewise-computationmodel-return-values}
 */
export type IoTSiteWiseComputationModelAttributes = {
  /**
   * The ARN of the computation model.
   * @minLength `1`
   * @maxLength `1600`
   * @pattern `^arn:aws(-cn|-us-gov)?:[a-zA-Z0-9-:/_\.]+$`
   */
  ComputationModelArn: string;
  /**
   * The ID of the computation model.
   * @minLength `36`
   * @maxLength `36`
   * @pattern `^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$`
   */
  ComputationModelId: string;
};
/**
 * Type definition for `AWS::IoTSiteWise::ComputationModel.AnomalyDetectionComputationModelConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-computationmodel-anomalydetectioncomputationmodelconfiguration.html}
 */
export type AnomalyDetectionComputationModelConfiguration = {
  /**
   * Input properties for anomaly detection.
   * @minLength `4`
   * @maxLength `67`
   * @pattern `^\$\{[a-z][a-z0-9_]*\}$`
   */
  InputProperties: string;
  /**
   * Result property for anomaly detection.
   * @minLength `4`
   * @maxLength `67`
   * @pattern `^\$\{[a-z][a-z0-9_]*\}$`
   */
  ResultProperty: string;
};
/**
 * Type definition for `AWS::IoTSiteWise::ComputationModel.AssetModelPropertyBindingValue`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-computationmodel-assetmodelpropertybindingvalue.html}
 */
export type AssetModelPropertyBindingValue = {
  /**
   * The ID of the asset model.
   * @minLength `36`
   * @maxLength `36`
   * @pattern `^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$`
   */
  AssetModelId: string;
  /**
   * The ID of the asset model property.
   * @minLength `36`
   * @maxLength `36`
   * @pattern `^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$`
   */
  PropertyId: string;
};
/**
 * Type definition for `AWS::IoTSiteWise::ComputationModel.AssetPropertyBindingValue`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-computationmodel-assetpropertybindingvalue.html}
 */
export type AssetPropertyBindingValue = {
  /**
   * The ID of the asset.
   * @minLength `36`
   * @maxLength `36`
   * @pattern `^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$`
   */
  AssetId: string;
  /**
   * The ID of the asset property.
   * @minLength `36`
   * @maxLength `36`
   * @pattern `^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$`
   */
  PropertyId: string;
};
/**
 * Type definition for `AWS::IoTSiteWise::ComputationModel.ComputationModelConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-computationmodel-computationmodelconfiguration.html}
 */
export type ComputationModelConfiguration = {
  /**
   * Contains configuration for anomaly detection computation model.
   */
  AnomalyDetection?: AnomalyDetectionComputationModelConfiguration;
};
/**
 * Type definition for `AWS::IoTSiteWise::ComputationModel.ComputationModelDataBinding`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-computationmodel-computationmodeldatabinding.html}
 */
export type ComputationModelDataBinding = Record<
  string,
  ComputationModelDataBindingValue
>;
/**
 * Type definition for `AWS::IoTSiteWise::ComputationModel.ComputationModelDataBindingValue`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-computationmodel-computationmodeldatabindingvalue.html}
 */
export type ComputationModelDataBindingValue = {
  /**
   * Defines an asset model property binding.
   */
  AssetModelProperty?: AssetModelPropertyBindingValue;
  /**
   * Defines an asset property binding.
   */
  AssetProperty?: AssetPropertyBindingValue;
  /**
   * Defines a list of computation model binding values.
   */
  List?: ComputationModelDataBindingValue[];
};
/**
 * Type definition for `AWS::IoTSiteWise::ComputationModel.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-computationmodel-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource schema for AWS::IoTSiteWise::ComputationModel.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-computationmodel.html}
 */
export class IoTSiteWiseComputationModel extends $Resource<
  "AWS::IoTSiteWise::ComputationModel",
  IoTSiteWiseComputationModelProperties,
  IoTSiteWiseComputationModelAttributes
> {
  public static readonly Type = "AWS::IoTSiteWise::ComputationModel";
  constructor(
    logicalId: string,
    properties: IoTSiteWiseComputationModelProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IoTSiteWiseComputationModel.Type, properties, options);
  }
}
