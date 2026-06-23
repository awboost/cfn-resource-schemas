import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Lambda::MicrovmImage
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-microvmimage.html}
 */
export type LambdaMicrovmImageProperties = {
  AdditionalOsCapabilities: "ALL"[];
  /**
   * ARN of the base MicroVM image.
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^[^\s]+$`
   */
  BaseImageArn: string;
  /**
   * Specific version of the base MicroVM image to use.
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^[^\s]+$`
   */
  BaseImageVersion: string;
  /**
   * ARN of the IAM build role.
   * @pattern `^arn:aws[a-zA-Z-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$`
   */
  BuildRoleArn: string;
  /**
   * Code artifact for the active MicroVM image.
   */
  CodeArtifact: CodeArtifact;
  CpuConfigurations: CpuConfiguration[];
  /**
   * Human-readable description of the MicroVM image and its purpose.
   */
  Description: string;
  /**
   * @maxLength `10`
   */
  EgressNetworkConnectors: string[];
  /**
   * Environment variables to set in the container during the snapshot build.
   * @maxLength `50`
   */
  EnvironmentVariables: EnvironmentVariable[];
  Hooks: Hooks;
  /**
   * Configuration for MicroVM image logging.
   */
  Logging: Logging;
  /**
   * Unique name for the MicroVM image within the account.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[a-zA-Z0-9-_]+$`
   */
  Name: string;
  /**
   * @maxLength `1`
   */
  Resources: Resources[];
  /**
   * Key-value pairs to associate with the MicroVM image for organization and management.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Lambda::MicrovmImage`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-microvmimage.html#aws-resource-lambda-microvmimage-return-values}
 */
export type LambdaMicrovmImageAttributes = {
  /**
   * Timestamp when the MicroVM image was created.
   */
  CreatedAt: string;
  /**
   * ARN of the MicroVM image.
   */
  ImageArn: string;
  /**
   * The latest active version of the MicroVM image.
   */
  LatestActiveImageVersion: string;
  /**
   * The latest failed version of the MicroVM image.
   */
  LatestFailedImageVersion: string;
  /**
   * Current state of the MicroVM image.
   */
  State: MicrovmImageState;
  /**
   * Timestamp when the MicroVM image was updated.
   */
  UpdatedAt: string;
};
/**
 * Type definition for `AWS::Lambda::MicrovmImage.CloudWatchLogging`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-microvmimage-cloudwatchlogging.html}
 */
export type CloudWatchLogging = {
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[a-zA-Z0-9_\-/.#]+$`
   */
  LogGroup?: string;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[^:*]*$`
   */
  LogStream?: string;
};
/**
 * Type definition for `AWS::Lambda::MicrovmImage.CodeArtifact`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-microvmimage-codeartifact.html}
 */
export type CodeArtifact = {
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^[^\s]+$`
   */
  Uri: string;
};
/**
 * Type definition for `AWS::Lambda::MicrovmImage.CpuConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-microvmimage-cpuconfiguration.html}
 */
export type CpuConfiguration = {
  Architecture: "ARM_64";
};
/**
 * Type definition for `AWS::Lambda::MicrovmImage.EnvironmentVariable`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-microvmimage-environmentvariable.html}
 */
export type EnvironmentVariable = {
  /**
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[^\s]+$`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `4096`
   */
  Value: string;
};
/**
 * Type definition for `AWS::Lambda::MicrovmImage.Hooks`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-microvmimage-hooks.html}
 */
export type Hooks = {
  MicrovmHooks?: MicrovmHooks;
  MicrovmImageHooks?: MicrovmImageHooks;
  /**
   * @min `1`
   * @max `65535`
   */
  Port?: number;
};
/**
 * Type definition for `AWS::Lambda::MicrovmImage.HookState`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-microvmimage-hookstate.html}
 */
export type HookState = "DISABLED" | "ENABLED";
/**
 * Type definition for `AWS::Lambda::MicrovmImage.Logging`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-microvmimage-logging.html}
 */
export type Logging = {
  CloudWatch?: CloudWatchLogging;
  Disabled?: boolean;
};
/**
 * Type definition for `AWS::Lambda::MicrovmImage.MicrovmHooks`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-microvmimage-microvmhooks.html}
 */
export type MicrovmHooks = {
  Resume?: HookState;
  /**
   * @min `1`
   * @max `60`
   */
  ResumeTimeoutInSeconds?: number;
  Run?: HookState;
  /**
   * @min `1`
   * @max `60`
   */
  RunTimeoutInSeconds?: number;
  Suspend?: HookState;
  /**
   * @min `1`
   * @max `60`
   */
  SuspendTimeoutInSeconds?: number;
  Terminate?: HookState;
  /**
   * @min `1`
   * @max `60`
   */
  TerminateTimeoutInSeconds?: number;
};
/**
 * Type definition for `AWS::Lambda::MicrovmImage.MicrovmImageHooks`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-microvmimage-microvmimagehooks.html}
 */
export type MicrovmImageHooks = {
  Ready?: HookState;
  /**
   * @min `1`
   * @max `3600`
   */
  ReadyTimeoutInSeconds?: number;
  Validate?: HookState;
  /**
   * @min `1`
   * @max `3600`
   */
  ValidateTimeoutInSeconds?: number;
};
/**
 * Type definition for `AWS::Lambda::MicrovmImage.MicrovmImageState`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-microvmimage-microvmimagestate.html}
 */
export type MicrovmImageState =
  | "CREATING"
  | "CREATED"
  | "CREATE_FAILED"
  | "UPDATING"
  | "UPDATED"
  | "UPDATE_FAILED"
  | "DELETING"
  | "DELETE_FAILED"
  | "DELETED";
/**
 * Type definition for `AWS::Lambda::MicrovmImage.Resources`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-microvmimage-resources.html}
 */
export type Resources = {
  MinimumMemoryInMiB: number;
};
/**
 * Type definition for `AWS::Lambda::MicrovmImage.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-microvmimage-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag.
   * @minLength `0`
   * @maxLength `256`
   */
  Value?: string;
};
/**
 * Resource Type definition for AWS::Lambda::MicrovmImage
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-microvmimage.html}
 */
export class LambdaMicrovmImage extends $Resource<
  "AWS::Lambda::MicrovmImage",
  LambdaMicrovmImageProperties,
  LambdaMicrovmImageAttributes
> {
  public static readonly Type = "AWS::Lambda::MicrovmImage";
  constructor(
    logicalId: string,
    properties: LambdaMicrovmImageProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, LambdaMicrovmImage.Type, properties, options);
  }
}
