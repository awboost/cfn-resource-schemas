import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::AppConfig::ConfigurationProfile`.
 * An example resource schema demonstrating some basic constructs and validation rules.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-configurationprofile.html}
 */
export type AppConfigConfigurationProfileProperties = {
  /**
   * The application ID.
   * @pattern `[a-z0-9]{4,7}`
   */
  ApplicationId: string;
  /**
   * On resource deletion this controls whether the Deletion Protection check should be applied, bypassed, or (the default) whether the behavior should be controlled by the account-level Deletion Protection setting. See https://docs.aws.amazon.com/appconfig/latest/userguide/deletion-protection.html
   */
  DeletionProtectionCheck?: "ACCOUNT_DEFAULT" | "APPLY" | "BYPASS";
  /**
   * A description of the configuration profile.
   * @minLength `0`
   * @maxLength `1024`
   */
  Description?: string;
  /**
   * The AWS Key Management Service key identifier (key ID, key alias, or key ARN) provided when the resource was created or updated.
   * @pattern `^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}|alias/[a-zA-Z0-9/_-]{1,250}|arn:aws[a-zA-Z-]*:kms:((eusc-)?[a-z]{2}((-gov)|(-iso([a-z]?)))?-[a-z]+-\d{1})?:(key/[0-9a-f-]{36}|alias/[a-zA-Z0-9/_-]{1,250})$`
   */
  KmsKeyIdentifier?: string;
  /**
   * A URI to locate the configuration. You can specify the AWS AppConfig hosted configuration store, Systems Manager (SSM) document, an SSM Parameter Store parameter, or an Amazon S3 object.
   * @minLength `1`
   * @maxLength `2048`
   */
  LocationUri: string;
  /**
   * A name for the configuration profile.
   * @minLength `1`
   * @maxLength `128`
   */
  Name: string;
  /**
   * The ARN of an IAM role with permission to access the configuration at the specified LocationUri.
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^((arn):(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov|aws-eusc):(iam)::\d{12}:role[/].*)$`
   */
  RetrievalRoleArn?: string;
  /**
   * Metadata to assign to the configuration profile. Tags help organize and categorize your AWS AppConfig resources. Each tag consists of a key and an optional value, both of which you define.
   */
  Tags?: Tags[];
  /**
   * The type of configurations contained in the profile. When calling this API, enter one of the following values for Type: AWS.AppConfig.FeatureFlags, AWS.Freeform
   * @pattern `^[a-zA-Z\.]+`
   */
  Type?: string;
  /**
   * A list of methods for validating the configuration.
   * @maxLength `2`
   */
  Validators?: Validators[];
};
/**
 * Attribute type definition for `AWS::AppConfig::ConfigurationProfile`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-configurationprofile.html#aws-resource-appconfig-configurationprofile-return-values}
 */
export type AppConfigConfigurationProfileAttributes = {
  /**
   * The configuration profile ID
   */
  ConfigurationProfileId: string;
  /**
   * The Amazon Resource Name of the AWS Key Management Service key to encrypt new configuration data versions in the AWS AppConfig hosted configuration store. This attribute is only used for hosted configuration types. To encrypt data managed in other configuration stores, see the documentation for how to specify an AWS KMS key for that particular service.
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `arn:(aws[a-zA-Z-]*)?:[a-z]+:((eusc-)?[a-z]{2}((-gov)|(-iso([a-z]?)))?-[a-z]+-\d{1})?:(\d{12})?:[a-zA-Z0-9-_/:.]+`
   */
  KmsKeyArn: string;
};
/**
 * Type definition for `AWS::AppConfig::ConfigurationProfile.Tags`.
 * Metadata to assign to the configuration profile. Tags help organize and categorize your AWS AppConfig resources. Each tag consists of a key and an optional value, both of which you define.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appconfig-configurationprofile-tags.html}
 */
export type Tags = {
  /**
   * The key-value string map. The tag key can be up to 128 characters and must not start with aws:.
   * @minLength `1`
   * @maxLength `128`
   */
  Key?: string;
  /**
   * The tag value can be up to 256 characters.
   * @minLength `0`
   * @maxLength `256`
   */
  Value?: string;
};
/**
 * Type definition for `AWS::AppConfig::ConfigurationProfile.Validators`.
 * A list of methods for validating the configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appconfig-configurationprofile-validators.html}
 */
export type Validators = {
  /**
   * Either the JSON Schema content or the Amazon Resource Name (ARN) of an Lambda function.
   * @minLength `0`
   * @maxLength `32768`
   */
  Content?: string;
  /**
   * AWS AppConfig supports validators of type JSON_SCHEMA and LAMBDA.
   */
  Type?: string;
};
/**
 * Resource type definition for `AWS::AppConfig::ConfigurationProfile`.
 * An example resource schema demonstrating some basic constructs and validation rules.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-configurationprofile.html}
 */
export class AppConfigConfigurationProfile extends $Resource<
  "AWS::AppConfig::ConfigurationProfile",
  AppConfigConfigurationProfileProperties,
  AppConfigConfigurationProfileAttributes
> {
  public static readonly Type = "AWS::AppConfig::ConfigurationProfile";
  constructor(
    logicalId: string,
    properties: AppConfigConfigurationProfileProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AppConfigConfigurationProfile.Type, properties, options);
  }
}
