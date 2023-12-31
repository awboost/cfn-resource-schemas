import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
 * Type definition for `AWS::Cognito::LogDeliveryConfiguration.LogConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-logdeliveryconfiguration-logconfiguration.html}
 */
export type LogConfiguration = {
  CloudWatchLogsConfiguration?: CloudWatchLogsConfiguration;
  EventSource?: string;
  LogLevel?: string;
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
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: CognitoLogDeliveryConfigurationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      CognitoLogDeliveryConfiguration.Type,
      properties,
      CognitoLogDeliveryConfiguration.AttributeNames,
      options,
    );
  }
}
