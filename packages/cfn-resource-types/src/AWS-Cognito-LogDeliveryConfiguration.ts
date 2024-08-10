import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Cognito::LogDeliveryConfiguration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-logdeliveryconfiguration.html}
 */
export type CognitoLogDeliveryConfigurationProperties = {
  LogConfigurations?: LogConfiguration[];
  UserPoolId: string;
};
/**
 * Attribute type definition for `AWS::Cognito::LogDeliveryConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-logdeliveryconfiguration.html#aws-resource-cognito-logdeliveryconfiguration-return-values}
 */
export type CognitoLogDeliveryConfigurationAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::Cognito::LogDeliveryConfiguration.CloudWatchLogsConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-logdeliveryconfiguration-cloudwatchlogsconfiguration.html}
 */
export type CloudWatchLogsConfiguration = {
  LogGroupArn?: string;
};
/**
 * Type definition for `AWS::Cognito::LogDeliveryConfiguration.FirehoseConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-logdeliveryconfiguration-firehoseconfiguration.html}
 */
export type FirehoseConfiguration = {
  StreamArn?: string;
};
/**
 * Type definition for `AWS::Cognito::LogDeliveryConfiguration.LogConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-logdeliveryconfiguration-logconfiguration.html}
 */
export type LogConfiguration = {
  CloudWatchLogsConfiguration?: CloudWatchLogsConfiguration;
  EventSource?: string;
  FirehoseConfiguration?: FirehoseConfiguration;
  LogLevel?: string;
  S3Configuration?: S3Configuration;
};
/**
 * Type definition for `AWS::Cognito::LogDeliveryConfiguration.S3Configuration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-logdeliveryconfiguration-s3configuration.html}
 */
export type S3Configuration = {
  BucketArn?: string;
};
/**
 * Resource Type definition for AWS::Cognito::LogDeliveryConfiguration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-logdeliveryconfiguration.html}
 */
export class CognitoLogDeliveryConfiguration extends $Resource<
  "AWS::Cognito::LogDeliveryConfiguration",
  CognitoLogDeliveryConfigurationProperties,
  CognitoLogDeliveryConfigurationAttributes
> {
  public static readonly Type = "AWS::Cognito::LogDeliveryConfiguration";
  constructor(
    logicalId: string,
    properties: CognitoLogDeliveryConfigurationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CognitoLogDeliveryConfiguration.Type, properties, options);
  }
}
