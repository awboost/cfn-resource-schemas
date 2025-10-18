import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::APS::AnomalyDetector`.
 * AnomalyDetector schema for cloudformation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-anomalydetector.html}
 */
export type APSAnomalyDetectorProperties = {
  /**
   * The AnomalyDetector alias.
   * @minLength `1`
   * @maxLength `128`
   */
  Alias: string;
  /**
   * Determines the anomaly detector's algorithm and its configuration.
   */
  Configuration: AnomalyDetectorConfiguration;
  /**
   * The AnomalyDetector period of detection and metric generation.
   */
  EvaluationIntervalInSeconds?: number;
  /**
   * An array of key-value pairs to provide meta-data.
   */
  Labels?: Label[];
  /**
   * The action to perform when running the expression returns no data.
   */
  MissingDataAction?: MissingDataAction;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
  /**
   * Required to identify a specific APS Workspace associated with this Anomaly Detector.
   * @pattern `^arn:(aws|aws-us-gov|aws-cn):aps:[a-z0-9-]+:[0-9]+:workspace/[a-zA-Z0-9-]+$`
   */
  Workspace: string;
};
/**
 * Attribute type definition for `AWS::APS::AnomalyDetector`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-anomalydetector.html#aws-resource-aps-anomalydetector-return-values}
 */
export type APSAnomalyDetectorAttributes = {
  /**
   * The AnomalyDetector ARN.
   * @pattern `^arn:(aws|aws-us-gov|aws-cn):aps:[a-z0-9-]+:[0-9]+:anomalydetector/[a-zA-Z0-9-]+/[0-9A-Za-z][-.0-9A-Z_a-z]*$`
   */
  Arn: string;
};
/**
 * Type definition for `AWS::APS::AnomalyDetector.AnomalyDetectorConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-aps-anomalydetector-anomalydetectorconfiguration.html}
 */
export type AnomalyDetectorConfiguration = {
  RandomCutForest: RandomCutForestConfiguration;
};
/**
 * Type definition for `AWS::APS::AnomalyDetector.IgnoreNearExpected`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-aps-anomalydetector-ignorenearexpected.html}
 */
export type IgnoreNearExpected = {
  Amount?: number;
  Ratio?: number;
};
/**
 * Type definition for `AWS::APS::AnomalyDetector.Label`.
 * A key-value pair to provide meta-data and multi-dimensional data analysis for filtering and aggregation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-aps-anomalydetector-label.html}
 */
export type Label = {
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
};
/**
 * Type definition for `AWS::APS::AnomalyDetector.MissingDataAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-aps-anomalydetector-missingdataaction.html}
 */
export type MissingDataAction = {
  MarkAsAnomaly?: boolean;
  Skip?: boolean;
};
/**
 * Type definition for `AWS::APS::AnomalyDetector.RandomCutForestConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-aps-anomalydetector-randomcutforestconfiguration.html}
 */
export type RandomCutForestConfiguration = {
  IgnoreNearExpectedFromAbove?: IgnoreNearExpected;
  IgnoreNearExpectedFromBelow?: IgnoreNearExpected;
  /**
   * @minLength `1`
   */
  Query: string;
  /**
   * @min `256`
   * @max `1024`
   */
  SampleSize?: number;
  /**
   * @min `2`
   * @max `1024`
   */
  ShingleSize?: number;
};
/**
 * Type definition for `AWS::APS::AnomalyDetector.Tag`.
 * A key-value pair to associate a tag level security for the resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-aps-anomalydetector-tag.html}
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
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::APS::AnomalyDetector`.
 * AnomalyDetector schema for cloudformation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-anomalydetector.html}
 */
export class APSAnomalyDetector extends $Resource<
  "AWS::APS::AnomalyDetector",
  APSAnomalyDetectorProperties,
  APSAnomalyDetectorAttributes
> {
  public static readonly Type = "AWS::APS::AnomalyDetector";
  constructor(
    logicalId: string,
    properties: APSAnomalyDetectorProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, APSAnomalyDetector.Type, properties, options);
  }
}
