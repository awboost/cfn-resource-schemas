import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::Logs::LogAnomalyDetector resource specifies a CloudWatch Logs LogAnomalyDetector.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loganomalydetector.html}
 */
export type LogsLogAnomalyDetectorProperties = {
  /**
   * Account ID for owner of detector
   */
  AccountId?: string;
  AnomalyVisibilityTime?: number;
  /**
   * Name of detector
   */
  DetectorName?: string;
  /**
   * How often log group is evaluated
   */
  EvaluationFrequency?:
    | "FIVE_MIN"
    | "TEN_MIN"
    | "FIFTEEN_MIN"
    | "THIRTY_MIN"
    | "ONE_HOUR";
  /**
   * @pattern ``
   */
  FilterPattern?: string;
  /**
   * The Amazon Resource Name (ARN) of the CMK to use when encrypting log data.
   * @maxLength `256`
   */
  KmsKeyId?: string;
  /**
   * List of Arns for the given log group
   */
  LogGroupArnList?: string[];
};
/**
 * Attribute type definition for `AWS::Logs::LogAnomalyDetector`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loganomalydetector.html#aws-resource-logs-loganomalydetector-return-values}
 */
export type LogsLogAnomalyDetectorAttributes = {
  /**
   * ARN of LogAnomalyDetector
   */
  AnomalyDetectorArn: string;
  /**
   * Current status of detector.
   */
  AnomalyDetectorStatus: string;
  /**
   * When detector was created.
   */
  CreationTimeStamp: number;
  /**
   * When detector was lsat modified.
   */
  LastModifiedTimeStamp: number;
};
/**
 * The AWS::Logs::LogAnomalyDetector resource specifies a CloudWatch Logs LogAnomalyDetector.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loganomalydetector.html}
 */
export class LogsLogAnomalyDetector extends $Resource<
  "AWS::Logs::LogAnomalyDetector",
  LogsLogAnomalyDetectorProperties,
  LogsLogAnomalyDetectorAttributes
> {
  public static readonly Type = "AWS::Logs::LogAnomalyDetector";
  constructor(
    logicalId: string,
    properties: LogsLogAnomalyDetectorProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, LogsLogAnomalyDetector.Type, properties, options);
  }
}
