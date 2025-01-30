import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::CloudFormation::TypeActivation`.
 * Enable a resource that has been published in the CloudFormation Registry.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-typeactivation.html}
 */
export type CloudFormationTypeActivationProperties = {
  /**
   * Whether to automatically update the extension in this account and region when a new minor version is published by the extension publisher. Major versions released by the publisher must be manually updated.
   */
  AutoUpdate?: boolean;
  /**
   * The Amazon Resource Name (ARN) of the IAM execution role to use to register the type. If your resource type calls AWS APIs in any of its handlers, you must create an IAM execution role that includes the necessary permissions to call those AWS APIs, and provision that execution role in your account. CloudFormation then assumes that execution role to provide your resource type with the appropriate credentials.
   */
  ExecutionRoleArn?: string;
  /**
   * Specifies logging configuration information for a type.
   */
  LoggingConfig?: LoggingConfig;
  /**
   * The Major Version of the type you want to enable
   * @minLength `1`
   * @maxLength `100000`
   */
  MajorVersion?: string;
  /**
   * The Amazon Resource Number (ARN) assigned to the public extension upon publication
   * @maxLength `1024`
   * @pattern `arn:aws[A-Za-z0-9-]{0,64}:cloudformation:[A-Za-z0-9-]{1,64}:([0-9]{12})?:type/.+`
   */
  PublicTypeArn?: string;
  /**
   * The reserved publisher id for this type, or the publisher id assigned by CloudFormation for publishing in this region.
   * @minLength `1`
   * @maxLength `40`
   * @pattern `[0-9a-zA-Z-]{1,40}`
   */
  PublisherId?: string;
  /**
   * The kind of extension
   */
  Type?: "RESOURCE" | "MODULE" | "HOOK";
  /**
     * The name of the type being registered.
    
    We recommend that type names adhere to the following pattern: company_or_organization::service::type.
     * @pattern `[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}(::MODULE){0,1}`
     */
  TypeName?: string;
  /**
   * An alias to assign to the public extension in this account and region. If you specify an alias for the extension, you must then use the alias to refer to the extension in your templates.
   * @minLength `10`
   * @maxLength `204`
   * @pattern `[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}(::MODULE){0,1}`
   */
  TypeNameAlias?: string;
  /**
   * Manually updates a previously-enabled type to a new major or minor version, if available. You can also use this parameter to update the value of AutoUpdateEnabled
   */
  VersionBump?: "MAJOR" | "MINOR";
};
/**
 * Attribute type definition for `AWS::CloudFormation::TypeActivation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-typeactivation.html#aws-resource-cloudformation-typeactivation-return-values}
 */
export type CloudFormationTypeActivationAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the extension.
   * @pattern `arn:aws[A-Za-z0-9-]{0,64}:cloudformation:[A-Za-z0-9-]{1,64}:([0-9]{12})?:type/.+`
   */
  Arn: string;
};
/**
 * Type definition for `AWS::CloudFormation::TypeActivation.LoggingConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-typeactivation-loggingconfig.html}
 */
export type LoggingConfig = {
  /**
   * The Amazon CloudWatch log group to which CloudFormation sends error logging information when invoking the type's handlers.
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\.\-_/#A-Za-z0-9]+$`
   */
  LogGroupName?: string;
  /**
   * The ARN of the role that CloudFormation should assume when sending log entries to CloudWatch logs.
   * @minLength `1`
   * @maxLength `256`
   */
  LogRoleArn?: string;
};
/**
 * Resource type definition for `AWS::CloudFormation::TypeActivation`.
 * Enable a resource that has been published in the CloudFormation Registry.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-typeactivation.html}
 */
export class CloudFormationTypeActivation extends $Resource<
  "AWS::CloudFormation::TypeActivation",
  CloudFormationTypeActivationProperties,
  CloudFormationTypeActivationAttributes
> {
  public static readonly Type = "AWS::CloudFormation::TypeActivation";
  constructor(
    logicalId: string,
    properties: CloudFormationTypeActivationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CloudFormationTypeActivation.Type, properties, options);
  }
}
