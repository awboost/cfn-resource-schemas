import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The ``AWS::Lambda::Function`` resource creates a Lambda function. To create a function, you need a [deployment package](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html) and an [execution role](https://docs.aws.amazon.com/lambda/latest/dg/lambda-intro-execution-role.html). The deployment package is a .zip file archive or container image that contains your function code. The execution role grants the function permission to use AWS services, such as Amazon CloudWatch Logs for log streaming and AWS X-Ray for request tracing.
 You set the package type to ``Image`` if the deployment package is a [container image](https://docs.aws.amazon.com/lambda/latest/dg/lambda-images.html). For these functions, include the URI of the container image in the ECR registry in the [ImageUri property of the Code property](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-code.html#cfn-lambda-function-code-imageuri). You do not need to specify the handler and runtime properties.
 You set the package type to ``Zip`` if the deployment package is a [.zip file archive](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html#gettingstarted-package-zip). For these functions, specify the S3 location of your .zip file in the ``Code`` property. Alternatively, for Node.js and Python functions, you can define your function inline in the [ZipFile property of the Code property](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-code.html#cfn-lambda-function-code-zipfile). In both cases, you must also specify the handler and runtime properties.
 You can use [code signing](https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html) if your deployment package is a .zip file archive. To enable code signing for this function, specify the ARN of a code-signing configuration. When a user attempts to deploy a code package with ``UpdateFunctionCode``, Lambda checks that the code package has a valid signature from a trusted publisher. The code-signing configuration includes a set of signing profiles, which define the trusted publishers for this function.
 When you update a ``AWS::Lambda::Function`` resource, CFNshort calls the [UpdateFunctionConfiguration](https://docs.aws.amazon.com/lambda/latest/api/API_UpdateFunctionConfiguration.html) and [UpdateFunctionCode](https://docs.aws.amazon.com/lambda/latest/api/API_UpdateFunctionCode.html) LAM APIs under the hood. Because these calls happen sequentially, and invocations can happen between these calls, your function may encounter errors in the time between the calls. For example, if you remove an environment variable, and the code that references that environment variable in the same CFNshort update, you may see invocation errors related to a missing environment variable. To work around this, you can invoke your function against a version or alias by default, rather than the ``$LATEST`` version.
 Note that you configure [provisioned concurrency](https://docs.aws.amazon.com/lambda/latest/dg/provisioned-concurrency.html) on a ``AWS::Lambda::Version`` or a ``AWS::Lambda::Alias``.
 For a complete introduction to Lambda functions, see [What is Lambda?](https://docs.aws.amazon.com/lambda/latest/dg/lambda-welcome.html) in the *Lambda developer guide.*
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-function.html}
 */
export type LambdaFunctionProperties = {
  /**
   * The instruction set architecture that the function supports. Enter a string array with one of the valid values (arm64 or x86_64). The default value is ``x86_64``.
   * @minLength `1`
   * @maxLength `1`
   */
  Architectures?: ("x86_64" | "arm64")[];
  /**
     * The code for the function. You can define your function code in multiple ways:
      +  For .zip deployment packages, you can specify the S3 location of the .zip file in the ``S3Bucket``, ``S3Key``, and ``S3ObjectVersion`` properties.
      +  For .zip deployment packages, you can alternatively define the function code inline in the ``ZipFile`` property. This method works only for Node.js and Python functions.
      +  For container images, specify the URI of your container image in the ECR registry in the ``ImageUri`` property.
     */
  Code: Code;
  /**
   * To enable code signing for this function, specify the ARN of a code-signing configuration. A code-signing configuration includes a set of signing profiles, which define the trusted publishers for this function.
   * @pattern `arn:(aws[a-zA-Z-]*)?:lambda:[a-z]{2}((-gov)|(-iso([a-z]?)))?-[a-z]+-\d{1}:\d{12}:code-signing-config:csc-[a-z0-9]{17}`
   */
  CodeSigningConfigArn?: string;
  /**
   * A dead-letter queue configuration that specifies the queue or topic where Lambda sends asynchronous events when they fail processing. For more information, see [Dead-letter queues](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-dlq).
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
   * The size of the function's ``/tmp`` directory in MB. The default value is 512, but it can be any whole number between 512 and 10,240 MB.
   */
  EphemeralStorage?: EphemeralStorage;
  /**
     * Connection settings for an Amazon EFS file system. To connect a function to a file system, a mount target must be available in every Availability Zone that your function connects to. If your template contains an [AWS::EFS::MountTarget](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-mounttarget.html) resource, you must also specify a ``DependsOn`` attribute to ensure that the mount target is created or updated before the function.
     For more information about using the ``DependsOn`` attribute, see [DependsOn Attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html).
     * @maxLength `1`
     */
  FileSystemConfigs?: FileSystemConfig[];
  /**
     * The name of the Lambda function, up to 64 characters in length. If you don't specify a name, CFN generates one.
     If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
     * @minLength `1`
     */
  FunctionName?: string;
  /**
   * The name of the method within your code that Lambda calls to run your function. Handler is required if the deployment package is a .zip file archive. The format includes the file name. It can also include namespaces and other qualifiers, depending on the runtime. For more information, see [Lambda programming model](https://docs.aws.amazon.com/lambda/latest/dg/foundation-progmodel.html).
   * @maxLength `128`
   * @pattern `^[^\s]+$`
   */
  Handler?: string;
  /**
   * Configuration values that override the container image Dockerfile settings. For more information, see [Container image settings](https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-parms).
   */
  ImageConfig?: ImageConfig;
  /**
   * The ARN of the KMSlong (KMS) customer managed key that's used to encrypt your function's [environment variables](https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-encryption). When [SnapStart](https://docs.aws.amazon.com/lambda/latest/dg/snapstart-security.html) is activated, LAM also uses this key is to encrypt your function's snapshot. If you deploy your function using a container image, LAM also uses this key to encrypt your function when it's deployed. Note that this is not the same key that's used to protect your container image in the ECRlong (ECR). If you don't provide a customer managed key, LAM uses a default service key.
   * @pattern `^(arn:(aws[a-zA-Z-]*)?:[a-z0-9-.]+:.*)|()$`
   */
  KmsKeyArn?: string;
  /**
   * A list of [function layers](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html) to add to the function's execution environment. Specify each layer by its ARN, including the version.
   */
  Layers?: string[];
  /**
   * The function's Amazon CloudWatch Logs configuration settings.
   */
  LoggingConfig?: LoggingConfig;
  /**
   * The amount of [memory available to the function](https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html#configuration-memory-console) at runtime. Increasing the function memory also increases its CPU allocation. The default value is 128 MB. The value can be any multiple of 1 MB. Note that new AWS accounts have reduced concurrency and memory quotas. AWS raises these quotas automatically based on your usage. You can also request a quota increase.
   */
  MemorySize?: number;
  /**
   * The type of deployment package. Set to ``Image`` for container image and set ``Zip`` for .zip file archive.
   */
  PackageType?: "Image" | "Zip";
  /**
     * The status of your function's recursive loop detection configuration.
     When this value is set to ``Allow``and Lambda detects your function being invoked as part of a recursive loop, it doesn't take any action.
     When this value is set to ``Terminate`` and Lambda detects your function being invoked as part of a recursive loop, it stops your function being invoked and notifies you.
     */
  RecursiveLoop?: RecursiveLoop;
  /**
   * The number of simultaneous executions to reserve for the function.
   * @min `0`
   */
  ReservedConcurrentExecutions?: number;
  /**
   * The Amazon Resource Name (ARN) of the function's execution role.
   * @pattern `^arn:(aws[a-zA-Z-]*)?:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$`
   */
  Role: string;
  /**
     * The identifier of the function's [runtime](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html). Runtime is required if the deployment package is a .zip file archive. Specifying a runtime results in an error if you're deploying a function using a container image.
     The following list includes deprecated runtimes. Lambda blocks creating new functions and updating existing functions shortly after each runtime is deprecated. For more information, see [Runtime use after deprecation](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-deprecation-levels).
     For a list of all currently supported runtimes, see [Supported runtimes](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtimes-supported).
     */
  Runtime?: string;
  /**
   * Sets the runtime management configuration for a function's version. For more information, see [Runtime updates](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html).
   */
  RuntimeManagementConfig?: RuntimeManagementConfig;
  /**
   * The function's [SnapStart](https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html) setting.
   */
  SnapStart?: SnapStart;
  /**
     * A list of [tags](https://docs.aws.amazon.com/lambda/latest/dg/tagging.html) to apply to the function.
      You must have the ``lambda:TagResource``, ``lambda:UntagResource``, and ``lambda:ListTags`` permissions for your [principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html) to manage the CFN stack. If you don't have these permissions, there might be unexpected behavior with stack-level tags propagating to the resource during resource creation and update.
     */
  Tags?: Tag[];
  /**
   * The amount of time (in seconds) that Lambda allows a function to run before stopping it. The default is 3 seconds. The maximum allowed value is 900 seconds. For more information, see [Lambda execution environment](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-context.html).
   * @min `1`
   */
  Timeout?: number;
  /**
   * Set ``Mode`` to ``Active`` to sample and trace a subset of incoming requests with [X-Ray](https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html).
   */
  TracingConfig?: TracingConfig;
  /**
   * For network connectivity to AWS resources in a VPC, specify a list of security groups and subnets in the VPC. When you connect a function to a VPC, it can access resources and the internet only through that VPC. For more information, see [Configuring a Lambda function to access resources in a VPC](https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html).
   */
  VpcConfig?: VpcConfig;
};
/**
 * Attribute type definition for `AWS::Lambda::Function`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-function.html#aws-resource-lambda-function-return-values}
 */
export type LambdaFunctionAttributes = {
  Arn: string;
  /**
   * The function's [SnapStart](https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html) setting.
   */
  SnapStartResponse: {
    /**
     * When set to ``PublishedVersions``, Lambda creates a snapshot of the execution environment when you publish a function version.
     */
    ApplyOn: "PublishedVersions" | "None";
    /**
     * When you provide a [qualified Amazon Resource Name (ARN)](https://docs.aws.amazon.com/lambda/latest/dg/configuration-versions.html#versioning-versions-using), this response element indicates whether SnapStart is activated for the specified function version.
     */
    OptimizationStatus: "On" | "Off";
  };
};
/**
 * Type definition for `AWS::Lambda::Function.Code`.
 * The [deployment package](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html) for a Lambda function. To deploy a function defined as a container image, you specify the location of a container image in the Amazon ECR registry. For a .zip file deployment package, you can specify the location of an object in Amazon S3. For Node.js and Python functions, you can specify the function code inline in the template.
 Changes to a deployment package in Amazon S3 or a container image in ECR are not detected automatically during stack updates. To update the function code, change the object key or version in the template.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-code.html}
 */
export type Code = {
  /**
   * URI of a [container image](https://docs.aws.amazon.com/lambda/latest/dg/lambda-images.html) in the Amazon ECR registry.
   */
  ImageUri?: string;
  /**
   * An Amazon S3 bucket in the same AWS-Region as your function. The bucket can be in a different AWS-account.
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
   * @pattern `^(arn:(aws[a-zA-Z-]*)?:[a-z0-9-.]+:.*)|()$`
   */
  SourceKMSKeyArn?: string;
  /**
     * (Node.js and Python) The source code of your Lambda function. If you include your function source inline with this parameter, CFN places it in a file named ``index`` and zips it to create a [deployment package](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html). This zip file cannot exceed 4MB. For the ``Handler`` property, the first part of the handler identifier must be ``index``. For example, ``index.handler``.
      For JSON, you must escape quotes and special characters such as newline (``\n``) with a backslash.
     If you specify a function that interacts with an AWS CloudFormation custom resource, you don't have to write your own functions to send responses to the custom resource that invoked the function. AWS CloudFormation provides a response module ([cfn-response](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-lambda-function-code-cfnresponsemodule.html)) that simplifies sending responses. See [Using Lambda with CloudFormation](https://docs.aws.amazon.com/lambda/latest/dg/services-cloudformation.html) for details.
     */
  ZipFile?: string;
};
/**
 * Type definition for `AWS::Lambda::Function.DeadLetterConfig`.
 * The [dead-letter queue](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#dlq) for failed asynchronous invocations.
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
 * A function's environment variable settings. You can use environment variables to adjust your function's behavior without updating code. An environment variable is a pair of strings that are stored in a function's version-specific configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-environment.html}
 */
export type Environment = {
  /**
     * Environment variable key-value pairs. For more information, see [Using Lambda environment variables](https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html).
     If the value of the environment variable is a time or a duration, enclose the value in quotes.
     */
  Variables?: Record<string, string>;
};
/**
 * Type definition for `AWS::Lambda::Function.EphemeralStorage`.
 * The size of the function's ``/tmp`` directory in MB. The default value is 512, but it can be any whole number between 512 and 10,240 MB.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-ephemeralstorage.html}
 */
export type EphemeralStorage = {
  /**
   * The size of the function's ``/tmp`` directory.
   * @min `512`
   * @max `10240`
   */
  Size: number;
};
/**
 * Type definition for `AWS::Lambda::Function.FileSystemConfig`.
 * Details about the connection between a Lambda function and an [Amazon EFS file system](https://docs.aws.amazon.com/lambda/latest/dg/configuration-filesystem.html).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-filesystemconfig.html}
 */
export type FileSystemConfig = {
  /**
   * The Amazon Resource Name (ARN) of the Amazon EFS access point that provides access to the file system.
   * @maxLength `200`
   * @pattern `^arn:aws[a-zA-Z-]*:elasticfilesystem:[a-z]{2}((-gov)|(-iso([a-z]?)))?-[a-z]+-\d{1}:\d{12}:access-point/fsap-[a-f0-9]{17}$`
   */
  Arn: string;
  /**
   * The path where the function can access the file system, starting with ``/mnt/``.
   * @maxLength `160`
   * @pattern `^/mnt/[a-zA-Z0-9-_.]+$`
   */
  LocalMountPath: string;
};
/**
 * Type definition for `AWS::Lambda::Function.ImageConfig`.
 * Configuration values that override the container image Dockerfile settings. For more information, see [Container image settings](https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-parms).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-imageconfig.html}
 */
export type ImageConfig = {
  /**
   * Specifies parameters that you want to pass in with ENTRYPOINT. You can specify a maximum of 1,500 parameters in the list.
   * @maxLength `1500`
   */
  Command?: string[];
  /**
   * Specifies the entry point to their application, which is typically the location of the runtime executable. You can specify a maximum of 1,500 string entries in the list.
   * @maxLength `1500`
   */
  EntryPoint?: string[];
  /**
   * Specifies the working directory. The length of the directory string cannot exceed 1,000 characters.
   */
  WorkingDirectory?: string;
};
/**
 * Type definition for `AWS::Lambda::Function.LoggingConfig`.
 * The function's Amazon CloudWatch Logs configuration settings.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-loggingconfig.html}
 */
export type LoggingConfig = {
  /**
   * Set this property to filter the application logs for your function that Lambda sends to CloudWatch. Lambda only sends application logs at the selected level of detail and lower, where ``TRACE`` is the highest level and ``FATAL`` is the lowest.
   */
  ApplicationLogLevel?: "TRACE" | "DEBUG" | "INFO" | "WARN" | "ERROR" | "FATAL";
  /**
   * The format in which Lambda sends your function's application and system logs to CloudWatch. Select between plain text and structured JSON.
   */
  LogFormat?: "Text" | "JSON";
  /**
   * The name of the Amazon CloudWatch log group the function sends logs to. By default, Lambda functions send logs to a default log group named ``/aws/lambda/<function name>``. To use a different log group, enter an existing log group or enter a new log group name.
   * @minLength `1`
   * @maxLength `512`
   * @pattern `[\.\-_/#A-Za-z0-9]+`
   */
  LogGroup?: string;
  /**
   * Set this property to filter the system logs for your function that Lambda sends to CloudWatch. Lambda only sends system logs at the selected level of detail and lower, where ``DEBUG`` is the highest level and ``WARN`` is the lowest.
   */
  SystemLogLevel?: "DEBUG" | "INFO" | "WARN";
};
/**
 * Type definition for `AWS::Lambda::Function.RecursiveLoop`.
 * The function recursion configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-recursiveloop.html}
 */
export type RecursiveLoop = "Allow" | "Terminate";
/**
 * Type definition for `AWS::Lambda::Function.RuntimeManagementConfig`.
 * Sets the runtime management configuration for a function's version. For more information, see [Runtime updates](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-runtimemanagementconfig.html}
 */
export type RuntimeManagementConfig = {
  /**
     * The ARN of the runtime version you want the function to use.
      This is only required if you're using the *Manual* runtime update mode.
     */
  RuntimeVersionArn?: string;
  /**
     * Specify the runtime update mode.
      +   *Auto (default)* - Automatically update to the most recent and secure runtime version using a [Two-phase runtime version rollout](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html#runtime-management-two-phase). This is the best choice for most customers to ensure they always benefit from runtime updates.
      +   *FunctionUpdate* - LAM updates the runtime of you function to the most recent and secure runtime version when you update your function. This approach synchronizes runtime updates with function deployments, giving you control over when runtime updates are applied and allowing you to detect and mitigate rare runtime update incompatibilities early. When using this setting, you need to regularly update your functions to keep their runtime up-to-date.
      +   *Manual* - You specify a runtime version in your function configuration. The function will use this runtime version indefinitely. In the rare case where a new runtime version is incompatible with an existing function, this allows you to roll back your function to an earlier runtime version. For more information, see [Roll back a runtime version](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html#runtime-management-rollback).
      
      *Valid Values*: ``Auto`` | ``FunctionUpdate`` | ``Manual``
     */
  UpdateRuntimeOn: "Auto" | "FunctionUpdate" | "Manual";
};
/**
 * Type definition for `AWS::Lambda::Function.SnapStart`.
 * The function's [SnapStart](https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html) setting.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-snapstart.html}
 */
export type SnapStart = {
  /**
   * Set ``ApplyOn`` to ``PublishedVersions`` to create a snapshot of the initialized execution environment when you publish a function version.
   */
  ApplyOn: "PublishedVersions" | "None";
};
/**
 * Type definition for `AWS::Lambda::Function.Tag`.
 * A [tag](https://docs.aws.amazon.com/lambda/latest/dg/tagging.html) to apply to the function.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-tag.html}
 */
export type Tag = {
  /**
   * The key for this tag.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for this tag.
   * @minLength `0`
   * @maxLength `256`
   */
  Value?: string;
};
/**
 * Type definition for `AWS::Lambda::Function.TracingConfig`.
 * The function's [](https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html) tracing configuration. To sample and record incoming requests, set ``Mode`` to ``Active``.
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
 * The VPC security groups and subnets that are attached to a Lambda function. When you connect a function to a VPC, Lambda creates an elastic network interface for each combination of security group and subnet in the function's VPC configuration. The function can only access resources and the internet through that VPC. For more information, see [VPC Settings](https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html).
  When you delete a function, CFN monitors the state of its network interfaces and waits for Lambda to delete them before proceeding. If the VPC is defined in the same stack, the network interfaces need to be deleted by Lambda before CFN can delete the VPC's resources.
 To monitor network interfaces, CFN needs the ``ec2:DescribeNetworkInterfaces`` permission. It obtains this from the user or role that modifies the stack. If you don't provide this permission, CFN does not wait for network interfaces to be deleted.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-vpcconfig.html}
 */
export type VpcConfig = {
  /**
   * Allows outbound IPv6 traffic on VPC functions that are connected to dual-stack subnets.
   */
  Ipv6AllowedForDualStack?: boolean;
  /**
   * A list of VPC security group IDs.
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
 * The ``AWS::Lambda::Function`` resource creates a Lambda function. To create a function, you need a [deployment package](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html) and an [execution role](https://docs.aws.amazon.com/lambda/latest/dg/lambda-intro-execution-role.html). The deployment package is a .zip file archive or container image that contains your function code. The execution role grants the function permission to use AWS services, such as Amazon CloudWatch Logs for log streaming and AWS X-Ray for request tracing.
 You set the package type to ``Image`` if the deployment package is a [container image](https://docs.aws.amazon.com/lambda/latest/dg/lambda-images.html). For these functions, include the URI of the container image in the ECR registry in the [ImageUri property of the Code property](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-code.html#cfn-lambda-function-code-imageuri). You do not need to specify the handler and runtime properties.
 You set the package type to ``Zip`` if the deployment package is a [.zip file archive](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html#gettingstarted-package-zip). For these functions, specify the S3 location of your .zip file in the ``Code`` property. Alternatively, for Node.js and Python functions, you can define your function inline in the [ZipFile property of the Code property](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-code.html#cfn-lambda-function-code-zipfile). In both cases, you must also specify the handler and runtime properties.
 You can use [code signing](https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html) if your deployment package is a .zip file archive. To enable code signing for this function, specify the ARN of a code-signing configuration. When a user attempts to deploy a code package with ``UpdateFunctionCode``, Lambda checks that the code package has a valid signature from a trusted publisher. The code-signing configuration includes a set of signing profiles, which define the trusted publishers for this function.
 When you update a ``AWS::Lambda::Function`` resource, CFNshort calls the [UpdateFunctionConfiguration](https://docs.aws.amazon.com/lambda/latest/api/API_UpdateFunctionConfiguration.html) and [UpdateFunctionCode](https://docs.aws.amazon.com/lambda/latest/api/API_UpdateFunctionCode.html) LAM APIs under the hood. Because these calls happen sequentially, and invocations can happen between these calls, your function may encounter errors in the time between the calls. For example, if you remove an environment variable, and the code that references that environment variable in the same CFNshort update, you may see invocation errors related to a missing environment variable. To work around this, you can invoke your function against a version or alias by default, rather than the ``$LATEST`` version.
 Note that you configure [provisioned concurrency](https://docs.aws.amazon.com/lambda/latest/dg/provisioned-concurrency.html) on a ``AWS::Lambda::Version`` or a ``AWS::Lambda::Alias``.
 For a complete introduction to Lambda functions, see [What is Lambda?](https://docs.aws.amazon.com/lambda/latest/dg/lambda-welcome.html) in the *Lambda developer guide.*
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-function.html}
 */
export class LambdaFunction extends $Resource<
  "AWS::Lambda::Function",
  LambdaFunctionProperties,
  LambdaFunctionAttributes
> {
  public static readonly Type = "AWS::Lambda::Function";
  constructor(
    logicalId: string,
    properties: LambdaFunctionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, LambdaFunction.Type, properties, options);
  }
}
