import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::CodeBuild::BuildBatch`.
 * Represents an AWS CodeBuild build batch, which is a single execution of a batch build for a project.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-buildbatch.html}
 */
export type CodeBuildBuildBatchProperties = {
  /**
   * The name of the CodeBuild build project.
   * @minLength `1`
   */
  ProjectName?: string;
};
/**
 * Attribute type definition for `AWS::CodeBuild::BuildBatch`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-buildbatch.html#aws-resource-codebuild-buildbatch-return-values}
 */
export type CodeBuildBuildBatchAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the batch build.
   * @minLength `1`
   */
  Arn: string;
  /**
   * The number of the batch build.
   */
  BuildBatchNumber: number;
  /**
   * The current status of the batch build.
   */
  BuildBatchStatus:
    | "SUCCEEDED"
    | "FAILED"
    | "FAULT"
    | "TIMED_OUT"
    | "IN_PROGRESS"
    | "STOPPED";
  /**
   * How long, in minutes, for CodeBuild to wait before timing out the batch build.
   */
  BuildTimeoutInMinutes: number;
  /**
   * Whether the batch build is complete.
   */
  Complete: boolean;
  /**
   * The current build phase of the batch build.
   */
  CurrentPhase: string;
  /**
   * The KMS key used to encrypt the batch build output artifacts.
   * @minLength `1`
   */
  EncryptionKey: string;
  /**
   * The unique ID for the batch build.
   * @minLength `1`
   */
  Id: string;
  /**
   * The entity that started the batch build.
   */
  Initiator: string;
  /**
   * The number of minutes a batch build is allowed to be queued before it times out.
   */
  QueuedTimeoutInMinutes: number;
  /**
   * When the batch build started, in ISO 8601 format.
   */
  StartTime: string;
};
/**
 * Resource type definition for `AWS::CodeBuild::BuildBatch`.
 * Represents an AWS CodeBuild build batch, which is a single execution of a batch build for a project.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-buildbatch.html}
 */
export class CodeBuildBuildBatch extends $Resource<
  "AWS::CodeBuild::BuildBatch",
  CodeBuildBuildBatchProperties,
  CodeBuildBuildBatchAttributes
> {
  public static readonly Type = "AWS::CodeBuild::BuildBatch";
  constructor(
    logicalId: string,
    properties: CodeBuildBuildBatchProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CodeBuildBuildBatch.Type, properties, options);
  }
}
