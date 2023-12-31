import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for `AWS::Forecast::DatasetGroup`.
 * Represents a dataset group that holds a collection of related datasets
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-forecast-datasetgroup.html}
 */
export type ForecastDatasetGroupProperties = {
  /**
   * An array of Amazon Resource Names (ARNs) of the datasets that you want to include in the dataset group.
   */
  DatasetArns?: string[];
  /**
   * A name for the dataset group.
   * @minLength `1`
   * @maxLength `63`
   * @pattern `^[a-zA-Z][a-zA-Z0-9_]*`
   */
  DatasetGroupName: string;
  /**
   * The domain associated with the dataset group. When you add a dataset to a dataset group, this value and the value specified for the Domain parameter of the CreateDataset operation must match.
   */
  Domain:
    | "RETAIL"
    | "CUSTOM"
    | "INVENTORY_PLANNING"
    | "EC2_CAPACITY"
    | "WORK_FORCE"
    | "WEB_TRAFFIC"
    | "METRICS";
  /**
   * The tags of Application Insights application.
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Forecast::DatasetGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-forecast-datasetgroup.html#aws-resource-forecast-datasetgroup-return-values}
 */
export type ForecastDatasetGroupAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the dataset group to delete.
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9\-\_\.\/\:]+$`
   */
  DatasetGroupArn: string;
};
/**
 * Type definition for `AWS::Forecast::DatasetGroup.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-forecast-datasetgroup-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::Forecast::DatasetGroup`.
 * Represents a dataset group that holds a collection of related datasets
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-forecast-datasetgroup.html}
 */
export class ForecastDatasetGroup extends $Resource<
  "AWS::Forecast::DatasetGroup",
  ForecastDatasetGroupProperties,
  ForecastDatasetGroupAttributes
> {
  public static readonly Type = "AWS::Forecast::DatasetGroup";
  public static readonly AttributeNames = ["DatasetGroupArn" as const];
  constructor(
    logicalId: string,
    properties: ForecastDatasetGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ForecastDatasetGroup.Type,
      properties,
      ForecastDatasetGroup.AttributeNames,
      options,
    );
  }
}
