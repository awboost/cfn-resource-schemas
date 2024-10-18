import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::AppConfig::Application
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-application.html}
 */
export type AppConfigApplicationProperties = {
  /**
   * A description of the application.
   */
  Description?: string;
  /**
   * A name for the application.
   */
  Name: string;
  /**
   * Metadata to assign to the application. Tags help organize and categorize your AWS AppConfig resources. Each tag consists of a key and an optional value, both of which you define.
   */
  Tags?: Tags[];
};
/**
 * Attribute type definition for `AWS::AppConfig::Application`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-application.html#aws-resource-appconfig-application-return-values}
 */
export type AppConfigApplicationAttributes = {
  /**
   * The application Id
   */
  ApplicationId: string;
};
/**
 * Type definition for `AWS::AppConfig::Application.Tags`.
 * Metadata to assign to the application. Tags help organize and categorize your AWS AppConfig resources. Each tag consists of a key and an optional value, both of which you define.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appconfig-application-tags.html}
 */
export type Tags = {
  /**
   * The key-value string map. The valid character set is [a-zA-Z1-9 +-=._:/-]. The tag key can be up to 128 characters and must not start with aws:.
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
 * Resource Type definition for AWS::AppConfig::Application
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-application.html}
 */
export class AppConfigApplication extends $Resource<
  "AWS::AppConfig::Application",
  AppConfigApplicationProperties,
  AppConfigApplicationAttributes
> {
  public static readonly Type = "AWS::AppConfig::Application";
  constructor(
    logicalId: string,
    properties: AppConfigApplicationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AppConfigApplication.Type, properties, options);
  }
}
