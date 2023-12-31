import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::LookoutMetrics::Alert
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-alert.html}
 */
export type LookoutMetricsAlertProperties = {
  /**
   * The action to be taken by the alert when an anomaly is detected.
   */
  Action: Action;
  /**
   * A description for the alert.
   * @maxLength `256`
   * @pattern `.*\S.*`
   */
  AlertDescription?: string;
  /**
   * The name of the alert. If not provided, a name is generated automatically.
   * @minLength `1`
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9][a-zA-Z0-9\-_]*`
   */
  AlertName?: string;
  /**
   * A number between 0 and 100 (inclusive) that tunes the sensitivity of the alert.
   * @min `0`
   * @max `100`
   */
  AlertSensitivityThreshold: number;
  /**
   * The Amazon resource name (ARN) of the Anomaly Detector to alert.
   * @maxLength `256`
   * @pattern `arn:([a-z\d-]+):.*:.*:.*:.+`
   */
  AnomalyDetectorArn: string;
};
/**
 * Attribute type definition for `AWS::LookoutMetrics::Alert`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-alert.html#aws-resource-lookoutmetrics-alert-return-values}
 */
export type LookoutMetricsAlertAttributes = {
  /**
   * ARN assigned to the alert.
   * @maxLength `256`
   * @pattern `arn:([a-z\d-]+):.*:.*:.*:.+`
   */
  Arn: string;
};
/**
 * Type definition for `AWS::LookoutMetrics::Alert.Action`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-alert-action.html}
 */
export type Action = {
  /**
   * Configuration options for a Lambda alert action.
   */
  LambdaConfiguration?: LambdaConfiguration;
  /**
   * Configuration options for an SNS alert action.
   */
  SNSConfiguration?: SNSConfiguration;
};
/**
 * Type definition for `AWS::LookoutMetrics::Alert.LambdaConfiguration`.
 * Configuration options for a Lambda alert action.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-alert-lambdaconfiguration.html}
 */
export type LambdaConfiguration = {
  /**
   * ARN of a Lambda to send alert notifications to.
   * @maxLength `256`
   * @pattern `arn:([a-z\d-]+):.*:.*:.*:.+`
   */
  LambdaArn: string;
  /**
   * ARN of an IAM role that LookoutMetrics should assume to access the Lambda function.
   * @maxLength `256`
   * @pattern `arn:([a-z\d-]+):.*:.*:.*:.+`
   */
  RoleArn: string;
};
/**
 * Type definition for `AWS::LookoutMetrics::Alert.SNSConfiguration`.
 * Configuration options for an SNS alert action.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-alert-snsconfiguration.html}
 */
export type SNSConfiguration = {
  /**
   * ARN of an IAM role that LookoutMetrics should assume to access the SNS topic.
   * @maxLength `256`
   * @pattern `arn:([a-z\d-]+):.*:.*:.*:.+`
   */
  RoleArn: string;
  /**
   * ARN of an SNS topic to send alert notifications to.
   * @maxLength `256`
   * @pattern `arn:([a-z\d-]+):.*:.*:.*:.+`
   */
  SnsTopicArn: string;
};
/**
 * Resource Type definition for AWS::LookoutMetrics::Alert
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-alert.html}
 */
export class LookoutMetricsAlert extends $Resource<
  "AWS::LookoutMetrics::Alert",
  LookoutMetricsAlertProperties,
  LookoutMetricsAlertAttributes
> {
  public static readonly Type = "AWS::LookoutMetrics::Alert";
  constructor(
    logicalId: string,
    properties: LookoutMetricsAlertProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, LookoutMetricsAlert.Type, properties, options);
  }
}
