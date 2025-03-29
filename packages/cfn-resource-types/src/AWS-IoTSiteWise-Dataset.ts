import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::IoTSiteWise::Dataset.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-dataset.html}
 */
export type IoTSiteWiseDatasetProperties = {
  /**
   * A description about the dataset, and its functionality.
   */
  DatasetDescription?: string;
  /**
   * The name of the dataset.
   */
  DatasetName: string;
  /**
   * The data source for the dataset.
   */
  DatasetSource: DatasetSource;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::IoTSiteWise::Dataset`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-dataset.html#aws-resource-iotsitewise-dataset-return-values}
 */
export type IoTSiteWiseDatasetAttributes = {
  /**
   * The ARN of the dataset.
   */
  DatasetArn: string;
  /**
   * The ID of the dataset.
   * @minLength `36`
   * @maxLength `36`
   * @pattern `^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$`
   */
  DatasetId: string;
};
/**
 * Type definition for `AWS::IoTSiteWise::Dataset.DatasetSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-dataset-datasetsource.html}
 */
export type DatasetSource = {
  /**
   * The details of the dataset source associated with the dataset.
   */
  SourceDetail?: SourceDetail;
  /**
   * The format of the dataset source associated with the dataset.
   */
  SourceFormat: "KNOWLEDGE_BASE";
  /**
   * The type of data source for the dataset.
   */
  SourceType: "KENDRA";
};
/**
 * Type definition for `AWS::IoTSiteWise::Dataset.KendraSourceDetail`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-dataset-kendrasourcedetail.html}
 */
export type KendraSourceDetail = {
  /**
   * The knowledgeBaseArn details for the Kendra dataset source.
   */
  KnowledgeBaseArn: string;
  /**
   * The roleARN details for the Kendra dataset source.
   */
  RoleArn: string;
};
/**
 * Type definition for `AWS::IoTSiteWise::Dataset.SourceDetail`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-dataset-sourcedetail.html}
 */
export type SourceDetail = {
  /**
   * Contains details about the Kendra dataset source.
   */
  Kendra?: KendraSourceDetail;
};
/**
 * Type definition for `AWS::IoTSiteWise::Dataset.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-dataset-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource schema for AWS::IoTSiteWise::Dataset.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-dataset.html}
 */
export class IoTSiteWiseDataset extends $Resource<
  "AWS::IoTSiteWise::Dataset",
  IoTSiteWiseDatasetProperties,
  IoTSiteWiseDatasetAttributes
> {
  public static readonly Type = "AWS::IoTSiteWise::Dataset";
  constructor(
    logicalId: string,
    properties: IoTSiteWiseDatasetProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IoTSiteWiseDataset.Type, properties, options);
  }
}
