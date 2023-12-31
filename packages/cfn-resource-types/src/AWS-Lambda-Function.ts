import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::Lambda::Function in region
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-function.html}
 */
export type LambdaFunctionProperties = {
  /**
   * @minLength `1`
   * @maxLength `1`
   */
  Architectures?: ("x86_64" | "arm64")[];
  /**
   * The code for the function.
   */
  Code: Code;
  /**
   * A unique Arn for CodeSigningConfig resource
   * @pattern `arn:(aws[a-zA-Z-]*)?:lambda:[a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1}:\d{12}:code-signing-config:csc-[a-z0-9]{17}`
   */
  CodeSigningConfigArn?: string;
  /**
   * A dead letter queue configuration that specifies the queue or topic where Lambda sends asynchronous events when they fail processing.
   */
  DeadLetterConfig?: DeadLetterConfig;
  /**
   * A description of the function.
   * @maxLength `256`
   */
  Description?: string;
  /**
   * Environment variables that are accessible from function code during execution.
   */
  Environment?: Environment;
  /**
   * A function's ephemeral storage settings.
   */
  EphemeralStorage?: EphemeralStorage;
  /**
   * Connection settings for an Amazon EFS file system. To connect a function to a file system, a mount target must be available in every Availability Zone that your function connects to. If your template contains an AWS::EFS::MountTarget resource, you must also specify a DependsOn attribute to ensure that the mount target is created or updated before the function.
   * @maxLength `1`
   */
  FileSystemConfigs?: FileSystemConfig[];
  /**
   * The name of the Lambda function, up to 64 characters in length. If you don't specify a name, AWS CloudFormation generates one.
   * @minLength `1`
   */
  FunctionName?: string;
  /**
   * The name of the method within your code that Lambda calls to execute your function. The format includes the file name. It can also include namespaces and other qualifiers, depending on the runtime
   * @maxLength `128`
   * @pattern `^[^\s]+$`
   */
  Handler?: string;
  /**
   * ImageConfig
   */
  ImageConfig?: ImageConfig;
  /**
   * The ARN of the AWS Key Management Service (AWS KMS) key that's used to encrypt your function's environment variables. If it's not provided, AWS Lambda uses a default service key.
   * @pattern `^(arn:(aws[a-zA-Z-]*)?:[a-z0-9-.]+:.*)|()$`
   */
  KmsKeyArn?: string;
  /**
   * A list of function layers to add to the function's execution environment. Specify each layer by its ARN, including the version.
   */
  Layers?: string[];
  /**
   * The logging configuration of your function
   */
  LoggingConfig?: LoggingConfig;
  /**
   * The amount of memory that your function has access to. Increasing the function's memory also increases its CPU allocation. The default value is 128 MB. The value must be a multiple of 64 MB.
   */
  MemorySize?: number;
  /**
   * PackageType.
   */
  PackageType?: "Image" | "Zip";
  /**
   * The resource policy of your function
   */
  Policy?: Record<string, any>;
  /**
   * The number of simultaneous executions to reserve for the function.
   */
  ReservedConcurrentExecutions?: number;
  /**
   * The Amazon Resource Name (ARN) of the function's execution role.
   * @pattern `^arn:(aws[a-zA-Z-]*)?:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$`
   */
  Role: string;
  /**
   * The identifier of the function's runtime.
   */
  Runtime?: string;
  /**
   * RuntimeManagementConfig
   */
  RuntimeManagementConfig?: RuntimeManagementConfig;
  /**
   * The SnapStart setting of your function
   */
  SnapStart?: SnapStart;
  /**
   * A list of tags to apply to the function.
   */
  Tags?: Tag[];
  /**
   * The amount of time that Lambda allows a function to run before stopping it. The default is 3 seconds. The maximum allowed value is 900 seconds.
   * @min `1`
   */
  Timeout?: number;
  /**
   * Set Mode to Active to sample and trace a subset of incoming requests with AWS X-Ray.
   */
  TracingConfig?: TracingConfig;
  /**
   * For network connectivity to AWS resources in a VPC, specify a list of security groups and subnets in the VPC.
   */
  VpcConfig?: VpcConfig;
};
/**
 * Attribute type definition for `AWS::Lambda::Function`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-function.html#aws-resource-lambda-function-return-values}
 */
export type LambdaFunctionAttributes = {
  /**
   * Unique identifier for function resources
   */
  Arn: string;
  /**
   * The SnapStart response of your function
   */
  SnapStartResponse: SnapStartResponse;
};
/**
 * Type definition for `AWS::Lambda::Function.Code`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-code.html}
 */
export type Code = {
  /**
   * ImageUri.
   */
  ImageUri?: string;
  /**
   * An Amazon S3 bucket in the same AWS Region as your function. The bucket can be in a different AWS account.
   * @minLength `3`
   * @maxLength `63`
   * @pattern `^[0-9A-Za-z\.\-_]*(?<!\.)$`
   */
  S3Bucket?: string;
  /**
   * The Amazon S3 key of the deployment package.
   * @minLength `1`
   * @maxLength `1024`
   */
  S3Key?: string;
  /**
   * For versioned objects, the version of the deployment package object to use.
   * @minLength `1`
   * @maxLength `1024`
   */
  S3ObjectVersion?: string;
  /**
   * The source code of your Lambda function. If you include your function source inline with this parameter, AWS CloudFormation places it in a file named index and zips it to create a deployment package..
   */
  ZipFile?: string;
};
/**
 * Type definition for `AWS::Lambda::Function.DeadLetterConfig`.
 * The dead-letter queue for failed asynchronous invocations.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-deadletterconfig.html}
 */
export type DeadLetterConfig = {
  /**
   * The Amazon Resource Name (ARN) of an Amazon SQS queue or Amazon SNS topic.
   * @pattern `^(arn:(aws[a-zA-Z-]*)?:[a-z0-9-.]+:.*)|()$`
   */
  TargetArn?: string;
};
/**
 * Type definition for `AWS::Lambda::Function.Environment`.
 * A function's environment variable settings.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-environment.html}
 */
export type Environment = {
  /**
   * Environment variable key-value pairs.
   */
  Variables?: Record<string, string>;
};
/**
 * Type definition for `AWS::Lambda::Function.EphemeralStorage`.
 * A function's ephemeral storage settings.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-ephemeralstorage.html}
 */
export type EphemeralStorage = {
  /**
   * The amount of ephemeral storage that your function has access to.
   * @min `512`
   * @max `10240`
   */
  Size: number;
};
/**
 * Type definition for `AWS::Lambda::Function.FileSystemConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-filesystemconfig.html}
 */
export type FileSystemConfig = {
  /**
   * The Amazon Resource Name (ARN) of the Amazon EFS access point that provides access to the file system.
   * @maxLength `200`
   * @pattern `^arn:aws[a-zA-Z-]*:elasticfilesystem:[a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1}:\d{12}:access-point/fsap-[a-f0-9]{17}$`
   */
  Arn: string;
  /**
   * The path where the function can access the file system, starting with /mnt/.
   * @maxLength `160`
   * @pattern `^/mnt/[a-zA-Z0-9-_.]+$`
   */
  LocalMountPath: string;
};
/**
 * Type definition for `AWS::Lambda::Function.ImageConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-imageconfig.html}
 */
export type ImageConfig = {
  /**
   * Command.
   * @maxLength `1500`
   */
  Command?: string[];
  /**
   * EntryPoint.
   * @maxLength `1500`
   */
  EntryPoint?: string[];
  /**
   * WorkingDirectory.
   */
  WorkingDirectory?: string;
};
/**
 * Type definition for `AWS::Lambda::Function.LoggingConfig`.
 * The function's logging configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-loggingconfig.html}
 */
export type LoggingConfig = {
  /**
   * Application log granularity level, can only be used when LogFormat is set to JSON
   */
  ApplicationLogLevel?: "TRACE" | "DEBUG" | "INFO" | "WARN" | "ERROR" | "FATAL";
  /**
   * Log delivery format for the lambda function
   */
  LogFormat?: "Text" | "JSON";
  /**
   * The log group name.
   * @minLength `1`
   * @maxLength `512`
   * @pattern `[\.\-_/#A-Za-z0-9]+`
   */
  LogGroup?: string;
  /**
   * System log granularity level, can only be used when LogFormat is set to JSON
   */
  SystemLogLevel?: "DEBUG" | "INFO" | "WARN";
};
/**
 * Type definition for `AWS::Lambda::Function.RuntimeManagementConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-runtimemanagementconfig.html}
 */
export type RuntimeManagementConfig = {
  /**
   * Unique identifier for a runtime version arn
   */
  RuntimeVersionArn?: string;
  /**
   * Trigger for runtime update
   */
  UpdateRuntimeOn: "Auto" | "FunctionUpdate" | "Manual";
};
/**
 * Type definition for `AWS::Lambda::Function.SnapStart`.
 * The function's SnapStart setting. When set to PublishedVersions, Lambda creates a snapshot of the execution environment when you publish a function version.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-snapstart.html}
 */
export type SnapStart = {
  /**
   * Applying SnapStart setting on function resource type.
   */
  ApplyOn: "PublishedVersions" | "None";
};
/**
 * Type definition for `AWS::Lambda::Function.SnapStartResponse`.
 * The function's SnapStart Response. When set to PublishedVersions, Lambda creates a snapshot of the execution environment when you publish a function version.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-snapstartresponse.html}
 */
export type SnapStartResponse = {
  /**
   * Applying SnapStart setting on function resource type.
   */
  ApplyOn?: "PublishedVersions" | "None";
  /**
   * Indicates whether SnapStart is activated for the specified function version.
   */
  OptimizationStatus?: "On" | "Off";
};
/**
 * Type definition for `AWS::Lambda::Function.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @maxLength `256`
   */
  Value?: string;
};
/**
 * Type definition for `AWS::Lambda::Function.TracingConfig`.
 * The function's AWS X-Ray tracing configuration. To sample and record incoming requests, set Mode to Active.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-tracingconfig.html}
 */
export type TracingConfig = {
  /**
   * The tracing mode.
   */
  Mode?: "Active" | "PassThrough";
};
/**
 * Type definition for `AWS::Lambda::Function.VpcConfig`.
 * The VPC security groups and subnets that are attached to a Lambda function. When you connect a function to a VPC, Lambda creates an elastic network interface for each combination of security group and subnet in the function's VPC configuration. The function can only access resources and the internet through that VPC.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-vpcconfig.html}
 */
export type VpcConfig = {
  /**
   * A boolean indicating whether IPv6 protocols will be allowed for dual stack subnets
   */
  Ipv6AllowedForDualStack?: boolean;
  /**
   * A list of VPC security groups IDs.
   * @maxLength `5`
   */
  SecurityGroupIds?: string[];
  /**
   * A list of VPC subnet IDs.
   * @maxLength `16`
   */
  SubnetIds?: string[];
};
/**
 * Resource Type definition for AWS::Lambda::Function in region
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-function.html}
 */
export class LambdaFunction extends $Resource<
  "AWS::Lambda::Function",
  LambdaFunctionProperties,
  LambdaFunctionAttributes
> {
  public static readonly Type = "AWS::Lambda::Function";
  public static readonly AttributeNames = [
    "Arn" as const,
    "SnapStartResponse" as const,
  ];
  constructor(
    logicalId: string,
    properties: LambdaFunctionProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      LambdaFunction.Type,
      properties,
      LambdaFunction.AttributeNames,
      options,
    );
  }
}
