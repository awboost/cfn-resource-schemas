import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::CodeBuild::Build`.
 * Represents an AWS CodeBuild build, which is a single execution of a build project.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-build.html}
 */
export type CodeBuildBuildProperties = {
  /**
   * The name of the CodeBuild build project.
   * @minLength `1`
   */
  ProjectName?: string;
};
/**
 * Attribute type definition for `AWS::CodeBuild::Build`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-build.html#aws-resource-codebuild-build-return-values}
 */
export type CodeBuildBuildAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the build.
   * @minLength `1`
   */
  Arn: string;
  /**
   * Whether the build is complete.
   */
  BuildComplete: boolean;
  /**
   * The number of the build.
   */
  BuildNumber: number;
  /**
   * The current status of the build.
   */
  BuildStatus:
    | "SUCCEEDED"
    | "FAILED"
    | "FAULT"
    | "TIMED_OUT"
    | "IN_PROGRESS"
    | "STOPPED";
  /**
   * The current build phase.
   */
  CurrentPhase: string;
  /**
   * The KMS key used to encrypt the build output artifacts.
   * @minLength `1`
   */
  EncryptionKey: string;
  /**
   * When the build process ended, in ISO 8601 format.
   */
  EndTime: string;
  /**
   * The unique ID for the build (format: projectName:buildId).
   * @minLength `1`
   */
  Id: string;
  /**
   * The entity that started the build.
   */
  Initiator: string;
  /**
   * The number of minutes a build is allowed to be queued before it times out.
   */
  QueuedTimeoutInMinutes: number;
  /**
   * The name of a service role used for this build.
   * @minLength `1`
   */
  ServiceRole: string;
  /**
   * When the build process started, in ISO 8601 format.
   */
  StartTime: string;
  /**
   * How long, in minutes, from 5 to 2160 (36 hours), for CodeBuild to wait before timing out the build.
   */
  TimeoutInMinutes: number;
};
/**
 * Resource type definition for `AWS::CodeBuild::Build`.
 * Represents an AWS CodeBuild build, which is a single execution of a build project.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-build.html}
 */
export class CodeBuildBuild extends $Resource<
  "AWS::CodeBuild::Build",
  CodeBuildBuildProperties,
  CodeBuildBuildAttributes
> {
  public static readonly Type = "AWS::CodeBuild::Build";
  constructor(
    logicalId: string,
    properties: CodeBuildBuildProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CodeBuildBuild.Type, properties, options);
  }
}
