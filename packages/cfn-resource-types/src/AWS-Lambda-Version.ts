import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Lambda::Version
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-version.html}
 */
export type LambdaVersionProperties = {
  /**
   * Only publish a version if the hash value matches the value that's specified. Use this option to avoid publishing a version if the function code has changed since you last updated it. Updates are not supported for this property.
   */
  CodeSha256?: string;
  /**
   * A description for the version to override the description in the function configuration. Updates are not supported for this property.
   * @minLength `0`
   * @maxLength `256`
   */
  Description?: string;
  /**
   * The name of the Lambda function.
   * @minLength `1`
   * @maxLength `140`
   * @pattern `^(arn:(aws[a-zA-Z-]*)?:lambda:)?((eusc-)?[a-z]{2}((-gov)|(-iso([a-z]?)))?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?$`
   */
  FunctionName: string;
  /**
   * Specifies a provisioned concurrency configuration for a function's version. Updates are not supported for this property.
   */
  ProvisionedConcurrencyConfig?: ProvisionedConcurrencyConfiguration;
  /**
   * Specifies the runtime management configuration of a function. Displays runtimeVersionArn only for Manual.
   */
  RuntimePolicy?: RuntimePolicy;
};
/**
 * Attribute type definition for `AWS::Lambda::Version`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-version.html#aws-resource-lambda-version-return-values}
 */
export type LambdaVersionAttributes = {
  /**
   * The ARN of the version.
   * @pattern `^(arn:(aws[a-zA-Z-]*)?:lambda:)?((eusc-)?[a-z]{2}((-gov)|(-iso([a-z]?)))?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?$`
   */
  FunctionArn: string;
  /**
   * The version number.
   */
  Version: string;
};
/**
 * Type definition for `AWS::Lambda::Version.ProvisionedConcurrencyConfiguration`.
 * A provisioned concurrency configuration for a function's version.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-version-provisionedconcurrencyconfiguration.html}
 */
export type ProvisionedConcurrencyConfiguration = {
  /**
   * The amount of provisioned concurrency to allocate for the version.
   */
  ProvisionedConcurrentExecutions: number;
};
/**
 * Type definition for `AWS::Lambda::Version.RuntimePolicy`.
 * Runtime Management Config of a function.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-version-runtimepolicy.html}
 */
export type RuntimePolicy = {
  /**
   * The ARN of the runtime the function is configured to use. If the runtime update mode is manual, the ARN is returned, otherwise null is returned.
   * @minLength `26`
   * @maxLength `2048`
   * @pattern `^arn:(aws[a-zA-Z-]*):lambda:(eusc-)?[a-z]{2}((-gov)|(-iso([a-z]?)))?-[a-z]+-\d{1}::runtime:.+$`
   */
  RuntimeVersionArn?: string;
  /**
   * The runtime update mode.
   */
  UpdateRuntimeOn: string;
};
/**
 * Resource Type definition for AWS::Lambda::Version
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-version.html}
 */
export class LambdaVersion extends $Resource<
  "AWS::Lambda::Version",
  LambdaVersionProperties,
  LambdaVersionAttributes
> {
  public static readonly Type = "AWS::Lambda::Version";
  constructor(
    logicalId: string,
    properties: LambdaVersionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, LambdaVersion.Type, properties, options);
  }
}
