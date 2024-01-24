import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type Definition for AWS::Forecast::Dataset
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-forecast-dataset.html}
 */
export type ForecastDatasetProperties = {
  /**
   * Frequency of data collection. This parameter is required for RELATED_TIME_SERIES
   * @pattern `^Y|M|W|D|H|30min|15min|10min|5min|1min$`
   */
  DataFrequency?: string;
  /**
   * A name for the dataset
   * @minLength `1`
   * @maxLength `63`
   * @pattern `^[a-zA-Z][a-zA-Z0-9_]*`
   */
  DatasetName: string;
  /**
   * The dataset type
   */
  DatasetType: "TARGET_TIME_SERIES" | "RELATED_TIME_SERIES" | "ITEM_METADATA";
  /**
   * The domain associated with the dataset
   */
  Domain:
    | "RETAIL"
    | "CUSTOM"
    | "INVENTORY_PLANNING"
    | "EC2_CAPACITY"
    | "WORK_FORCE"
    | "WEB_TRAFFIC"
    | "METRICS";
  EncryptionConfig?: {
    /**
     * KMS key used to encrypt the Dataset data
     * @maxLength `256`
     * @pattern `arn:aws[-a-z]*:kms:.*:key/.*`
     */
    KmsKeyArn?: string;
    /**
     * The ARN of the IAM role that Amazon Forecast can assume to access the AWS KMS key.
     * @maxLength `256`
     * @pattern `^[a-zA-Z0-9\-\_\.\/\:]+$`
     */
    RoleArn?: string;
  };
  Schema: {
    /**
     * @minLength `1`
     * @maxLength `100`
     */
    Attributes?: {
      /**
       * Name of the dataset field
       * @pattern `^[a-zA-Z][a-zA-Z0-9_]*`
       */
      AttributeName?: string;
      /**
       * Data type of the field
       */
      AttributeType?:
        | "string"
        | "integer"
        | "float"
        | "timestamp"
        | "geolocation";
    }[];
  };
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Tags?: {
    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     * @minLength `1`
     * @maxLength `128`
     */
    Key: string;
    /**
     * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     * @minLength `0`
     * @maxLength `256`
     */
    Value: string;
  }[];
};
/**
 * Attribute type definition for `AWS::Forecast::Dataset`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-forecast-dataset.html#aws-resource-forecast-dataset-return-values}
 */
export type ForecastDatasetAttributes = {
  /**
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9\-\_\.\/\:]+$`
   */
  Arn: string;
};
/**
 * Resource Type Definition for AWS::Forecast::Dataset
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-forecast-dataset.html}
 */
export class ForecastDataset extends $Resource<
  "AWS::Forecast::Dataset",
  ForecastDatasetProperties,
  ForecastDatasetAttributes
> {
  public static readonly Type = "AWS::Forecast::Dataset";
  constructor(
    logicalId: string,
    properties: ForecastDatasetProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ForecastDataset.Type, properties, options);
  }
}
