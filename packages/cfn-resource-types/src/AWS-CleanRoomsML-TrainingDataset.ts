import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::CleanRoomsML::TrainingDataset Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanroomsml-trainingdataset.html}
 */
export type CleanRoomsMLTrainingDatasetProperties = {
  /**
   * @maxLength `255`
   * @pattern `^[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n]*$`
   */
  Description?: string;
  /**
   * @minLength `1`
   * @maxLength `63`
   * @pattern `^(?!\s*$)[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t]*$`
   */
  Name: string;
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:aws[-a-z]*:iam::[0-9]{12}:role/.+$`
   */
  RoleArn: string;
  /**
   * An arbitrary set of tags (key-value pairs) for this cleanrooms-ml training dataset.
   */
  Tags?: Tag[];
  /**
   * @minLength `1`
   * @maxLength `1`
   */
  TrainingData: Dataset[];
};
/**
 * Attribute type definition for `AWS::CleanRoomsML::TrainingDataset`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanroomsml-trainingdataset.html#aws-resource-cleanroomsml-trainingdataset-return-values}
 */
export type CleanRoomsMLTrainingDatasetAttributes = {
  Status: TrainingDatasetStatus;
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:aws[-a-z]*:cleanrooms-ml:[-a-z0-9]+:[0-9]{12}:training-dataset/[-a-zA-Z0-9_/.]+$`
   */
  TrainingDatasetArn: string;
};
/**
 * Type definition for `AWS::CleanRoomsML::TrainingDataset.ColumnSchema`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanroomsml-trainingdataset-columnschema.html}
 */
export type ColumnSchema = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9_](([a-zA-Z0-9_ ]+-)*([a-zA-Z0-9_ ]+))?$`
   */
  ColumnName: string;
  /**
   * @minLength `1`
   * @maxLength `1`
   */
  ColumnTypes: ColumnType[];
};
/**
 * Type definition for `AWS::CleanRoomsML::TrainingDataset.ColumnType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanroomsml-trainingdataset-columntype.html}
 */
export type ColumnType =
  | "USER_ID"
  | "ITEM_ID"
  | "TIMESTAMP"
  | "CATEGORICAL_FEATURE"
  | "NUMERICAL_FEATURE";
/**
 * Type definition for `AWS::CleanRoomsML::TrainingDataset.Dataset`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanroomsml-trainingdataset-dataset.html}
 */
export type Dataset = {
  InputConfig: DatasetInputConfig;
  Type: DatasetType;
};
/**
 * Type definition for `AWS::CleanRoomsML::TrainingDataset.DatasetInputConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanroomsml-trainingdataset-datasetinputconfig.html}
 */
export type DatasetInputConfig = {
  DataSource: DataSource;
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  Schema: ColumnSchema[];
};
/**
 * Type definition for `AWS::CleanRoomsML::TrainingDataset.DatasetType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanroomsml-trainingdataset-datasettype.html}
 */
export type DatasetType = "INTERACTIONS";
/**
 * Type definition for `AWS::CleanRoomsML::TrainingDataset.DataSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanroomsml-trainingdataset-datasource.html}
 */
export type DataSource = {
  GlueDataSource: GlueDataSource;
};
/**
 * Type definition for `AWS::CleanRoomsML::TrainingDataset.GlueDataSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanroomsml-trainingdataset-gluedatasource.html}
 */
export type GlueDataSource = {
  /**
   * @minLength `12`
   * @maxLength `12`
   * @pattern `^[0-9]{12}$`
   */
  CatalogId?: string;
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9_](([a-zA-Z0-9_]+-)*([a-zA-Z0-9_]+))?$`
   */
  DatabaseName: string;
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9_](([a-zA-Z0-9_ ]+-)*([a-zA-Z0-9_ ]+))?$`
   */
  TableName: string;
};
/**
 * Type definition for `AWS::CleanRoomsML::TrainingDataset.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanroomsml-trainingdataset-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::CleanRoomsML::TrainingDataset.TrainingDatasetStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanroomsml-trainingdataset-trainingdatasetstatus.html}
 */
export type TrainingDatasetStatus = "ACTIVE";
/**
 * Definition of AWS::CleanRoomsML::TrainingDataset Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanroomsml-trainingdataset.html}
 */
export class CleanRoomsMLTrainingDataset extends $Resource<
  "AWS::CleanRoomsML::TrainingDataset",
  CleanRoomsMLTrainingDatasetProperties,
  CleanRoomsMLTrainingDatasetAttributes
> {
  public static readonly Type = "AWS::CleanRoomsML::TrainingDataset";
  constructor(
    logicalId: string,
    properties: CleanRoomsMLTrainingDatasetProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CleanRoomsMLTrainingDataset.Type, properties, options);
  }
}
