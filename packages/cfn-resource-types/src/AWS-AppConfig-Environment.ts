import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::AppConfig::Environment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-environment.html}
 */
export type AppConfigEnvironmentProperties = {
  /**
   * The application ID.
   * @pattern `[a-z0-9]{4,7}`
   */
  ApplicationId: string;
  /**
   * A description of the environment.
   * @minLength `0`
   * @maxLength `1024`
   */
  Description?: string;
  /**
   * Amazon CloudWatch alarms to monitor during the deployment process.
   * @minLength `0`
   * @maxLength `5`
   */
  Monitors?: Monitor[];
  /**
   * A name for the environment.
   * @minLength `1`
   * @maxLength `64`
   */
  Name: string;
  /**
   * Metadata to assign to the environment. Tags help organize and categorize your AWS AppConfig resources. Each tag consists of a key and an optional value, both of which you define.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::AppConfig::Environment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-environment.html#aws-resource-appconfig-environment-return-values}
 */
export type AppConfigEnvironmentAttributes = {
  /**
   * The environment ID.
   * @pattern `[a-z0-9]{4,7}`
   */
  EnvironmentId: string;
};
/**
 * Type definition for `AWS::AppConfig::Environment.Monitor`.
 * Amazon CloudWatch alarm to monitor during the deployment process.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appconfig-environment-monitor.html}
 */
export type Monitor = {
  /**
   * Amazon Resource Name (ARN) of the Amazon CloudWatch alarm.
   * @minLength `1`
   * @maxLength `2048`
   */
  AlarmArn: string;
  /**
   * ARN of an AWS Identity and Access Management (IAM) role for AWS AppConfig to monitor AlarmArn.
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^((arn):(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):(iam)::\d{12}:role[/].*)$`
   */
  AlarmRoleArn?: string;
};
/**
 * Type definition for `AWS::AppConfig::Environment.Tag`.
 * Metadata to assign to the environment. Tags help organize and categorize your AWS AppConfig resources. Each tag consists of a key and an optional value, both of which you define.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appconfig-environment-tag.html}
 */
export type Tag = {
  /**
   * The key-value string map. The valid character set is [a-zA-Z1-9+-=._:/]. The tag key can be up to 128 characters and must not start with aws:.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The tag value can be up to 256 characters.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::AppConfig::Environment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-environment.html}
 */
export class AppConfigEnvironment extends $Resource<
  "AWS::AppConfig::Environment",
  AppConfigEnvironmentProperties,
  AppConfigEnvironmentAttributes
> {
  public static readonly Type = "AWS::AppConfig::Environment";
  constructor(
    logicalId: string,
    properties: AppConfigEnvironmentProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AppConfigEnvironment.Type, properties, options);
  }
}
