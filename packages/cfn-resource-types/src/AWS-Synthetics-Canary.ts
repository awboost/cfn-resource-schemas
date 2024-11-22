import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Synthetics::Canary
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-synthetics-canary.html}
 */
export type SyntheticsCanaryProperties = {
  /**
   * Provide artifact configuration
   */
  ArtifactConfig?: ArtifactConfig;
  /**
   * Provide the s3 bucket output location for test results
   * @pattern `^(s3|S3)://`
   */
  ArtifactS3Location: string;
  /**
   * Provide the canary script source
   */
  Code: Code;
  /**
   * Deletes associated lambda resources created by Synthetics if set to True. Default is False
   */
  DeleteLambdaResourcesOnCanaryDeletion?: boolean;
  /**
   * Lambda Execution role used to run your canaries
   */
  ExecutionRoleArn: string;
  /**
   * Retention period of failed canary runs represented in number of days
   */
  FailureRetentionPeriod?: number;
  /**
   * Name of the canary.
   * @pattern `^[0-9a-z_\-]{1,255}$`
   */
  Name: string;
  /**
   * Setting to control if provisioned resources created by Synthetics are deleted alongside the canary. Default is AUTOMATIC.
   */
  ProvisionedResourceCleanup?: "AUTOMATIC" | "OFF";
  /**
   * List of resources which canary tags should be replicated to.
   */
  ResourcesToReplicateTags?: ResourceToTag[];
  /**
   * Provide canary run configuration
   */
  RunConfig?: RunConfig;
  /**
   * Runtime version of Synthetics Library
   */
  RuntimeVersion: string;
  /**
   * Frequency to run your canaries
   */
  Schedule: Schedule;
  /**
   * Runs canary if set to True. Default is False
   */
  StartCanaryAfterCreation?: boolean;
  /**
   * Retention period of successful canary runs represented in number of days
   */
  SuccessRetentionPeriod?: number;
  Tags?: Tag[];
  /**
   * Provide VPC Configuration if enabled.
   */
  VPCConfig?: VPCConfig;
  /**
   * Visual reference configuration for visual testing
   */
  VisualReference?: VisualReference;
};
/**
 * Attribute type definition for `AWS::Synthetics::Canary`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-synthetics-canary.html#aws-resource-synthetics-canary-return-values}
 */
export type SyntheticsCanaryAttributes = {
  /**
   * Provide the canary script source
   */
  Code: {
    SourceLocationArn: string;
  };
  /**
   * Id of the canary
   */
  Id: string;
  /**
   * State of the canary
   */
  State: string;
};
/**
 * Type definition for `AWS::Synthetics::Canary.ArtifactConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-synthetics-canary-artifactconfig.html}
 */
export type ArtifactConfig = {
  /**
   * Encryption configuration for uploading artifacts to S3
   */
  S3Encryption?: S3Encryption;
};
/**
 * Type definition for `AWS::Synthetics::Canary.BaseScreenshot`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-synthetics-canary-basescreenshot.html}
 */
export type BaseScreenshot = {
  /**
   * List of coordinates of rectangles to be ignored during visual testing
   */
  IgnoreCoordinates?: string[];
  /**
   * Name of the screenshot to be used as base reference for visual testing
   */
  ScreenshotName: string;
};
/**
 * Type definition for `AWS::Synthetics::Canary.Code`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-synthetics-canary-code.html}
 */
export type Code = {
  Handler: string;
  S3Bucket?: string;
  S3Key?: string;
  S3ObjectVersion?: string;
  Script?: string;
};
/**
 * Type definition for `AWS::Synthetics::Canary.ResourceToTag`.
 * Specifies which resources canary tags should be replicated to.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-synthetics-canary-resourcetotag.html}
 */
export type ResourceToTag = "lambda-function";
/**
 * Type definition for `AWS::Synthetics::Canary.RunConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-synthetics-canary-runconfig.html}
 */
export type RunConfig = {
  /**
   * Enable active tracing if set to true
   */
  ActiveTracing?: boolean;
  /**
   * Environment variable key-value pairs.
   */
  EnvironmentVariables?: Record<string, string>;
  /**
   * Provide maximum memory available for canary in MB
   */
  MemoryInMB?: number;
  /**
   * Provide maximum canary timeout per run in seconds
   */
  TimeoutInSeconds?: number;
};
/**
 * Type definition for `AWS::Synthetics::Canary.S3Encryption`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-synthetics-canary-s3encryption.html}
 */
export type S3Encryption = {
  /**
   * Encryption mode for encrypting artifacts when uploading to S3. Valid values: SSE_S3 and SSE_KMS.
   */
  EncryptionMode?: string;
  /**
   * KMS key Arn for encrypting artifacts when uploading to S3. You must specify KMS key Arn for SSE_KMS encryption mode only.
   */
  KmsKeyArn?: string;
};
/**
 * Type definition for `AWS::Synthetics::Canary.Schedule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-synthetics-canary-schedule.html}
 */
export type Schedule = {
  DurationInSeconds?: string;
  Expression: string;
};
/**
 * Type definition for `AWS::Synthetics::Canary.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-synthetics-canary-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::Synthetics::Canary.VisualReference`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-synthetics-canary-visualreference.html}
 */
export type VisualReference = {
  /**
   * Canary run id to be used as base reference for visual testing
   */
  BaseCanaryRunId: string;
  /**
   * List of screenshots used as base reference for visual testing
   */
  BaseScreenshots?: BaseScreenshot[];
};
/**
 * Type definition for `AWS::Synthetics::Canary.VPCConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-synthetics-canary-vpcconfig.html}
 */
export type VPCConfig = {
  SecurityGroupIds: string[];
  SubnetIds: string[];
  VpcId?: string;
};
/**
 * Resource Type definition for AWS::Synthetics::Canary
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-synthetics-canary.html}
 */
export class SyntheticsCanary extends $Resource<
  "AWS::Synthetics::Canary",
  SyntheticsCanaryProperties,
  SyntheticsCanaryAttributes
> {
  public static readonly Type = "AWS::Synthetics::Canary";
  constructor(
    logicalId: string,
    properties: SyntheticsCanaryProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SyntheticsCanary.Type, properties, options);
  }
}
