import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::CloudFormation::HookVersion`.
 * Publishes new or first hook version to AWS CloudFormation Registry.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hookversion.html}
 */
export type CloudFormationHookVersionProperties = {
  /**
   * The Amazon Resource Name (ARN) of the IAM execution role to use to register the type. If your resource type calls AWS APIs in any of its handlers, you must create an IAM execution role that includes the necessary permissions to call those AWS APIs, and provision that execution role in your account. CloudFormation then assumes that execution role to provide your resource type with the appropriate credentials.
   * @maxLength `256`
   * @pattern `arn:.+:iam::[0-9]{12}:role/.+`
   */
  ExecutionRoleArn?: string;
  /**
   * Specifies logging configuration information for a type.
   */
  LoggingConfig?: LoggingConfig;
  /**
     * A url to the S3 bucket containing the schema handler package that contains the schema, event handlers, and associated files for the type you want to register.
    
    For information on generating a schema handler package for the type you want to register, see submit in the CloudFormation CLI User Guide.
     * @maxLength `4096`
     */
  SchemaHandlerPackage: string;
  /**
     * The name of the type being registered.
    
    We recommend that type names adhere to the following pattern: company_or_organization::service::type.
     * @pattern `^[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}$`
     */
  TypeName: string;
};
/**
 * Attribute type definition for `AWS::CloudFormation::HookVersion`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hookversion.html#aws-resource-cloudformation-hookversion-return-values}
 */
export type CloudFormationHookVersionAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the type, here the HookVersion. This is used to uniquely identify a HookVersion resource
   * @pattern `^arn:aws[A-Za-z0-9-]{0,64}:cloudformation:[A-Za-z0-9-]{1,64}:([0-9]{12})?:type/hook/.+$`
   */
  Arn: string;
  /**
   * Indicates if this type version is the current default version
   */
  IsDefaultVersion: boolean;
  /**
   * The Amazon Resource Name (ARN) of the type without the versionID.
   * @pattern `^arn:aws[A-Za-z0-9-]{0,64}:cloudformation:[A-Za-z0-9-]{1,64}:([0-9]{12})?:type/hook/.+$`
   */
  TypeArn: string;
  /**
   * The ID of the version of the type represented by this hook instance.
   * @pattern `^[A-Za-z0-9-]{1,128}$`
   */
  VersionId: string;
  /**
     * The scope at which the type is visible and usable in CloudFormation operations.
    
    Valid values include:
    
    PRIVATE: The type is only visible and usable within the account in which it is registered. Currently, AWS CloudFormation marks any types you register as PRIVATE.
    
    PUBLIC: The type is publically visible and usable within any Amazon account.
     */
  Visibility: "PUBLIC" | "PRIVATE";
};
/**
 * Type definition for `AWS::CloudFormation::HookVersion.LoggingConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-hookversion-loggingconfig.html}
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
 * Resource type definition for `AWS::CloudFormation::HookVersion`.
 * Publishes new or first hook version to AWS CloudFormation Registry.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hookversion.html}
 */
export class CloudFormationHookVersion extends $Resource<
  "AWS::CloudFormation::HookVersion",
  CloudFormationHookVersionProperties,
  CloudFormationHookVersionAttributes
> {
  public static readonly Type = "AWS::CloudFormation::HookVersion";
  constructor(
    logicalId: string,
    properties: CloudFormationHookVersionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CloudFormationHookVersion.Type, properties, options);
  }
}
