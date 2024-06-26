import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::CodePipeline::Pipeline
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html}
 */
export type CodePipelinePipelineProperties = {
  ArtifactStore?: ArtifactStore;
  ArtifactStores?: ArtifactStoreMap[];
  DisableInboundStageTransitions?: StageTransition[];
  ExecutionMode?: string;
  Name?: string;
  PipelineType?: string;
  RestartExecutionOnUpdate?: boolean;
  RoleArn: string;
  Stages: StageDeclaration[];
  Tags?: Tag[];
  Triggers?: PipelineTriggerDeclaration[];
  Variables?: VariableDeclaration[];
};
/**
 * Attribute type definition for `AWS::CodePipeline::Pipeline`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#aws-resource-codepipeline-pipeline-return-values}
 */
export type CodePipelinePipelineAttributes = {
  Id: string;
  Version: string;
};
/**
 * Type definition for `AWS::CodePipeline::Pipeline.ActionDeclaration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-actiondeclaration.html}
 */
export type ActionDeclaration = {
  ActionTypeId: ActionTypeId;
  Configuration?: Record<string, any>;
  InputArtifacts?: InputArtifact[];
  Name: string;
  Namespace?: string;
  OutputArtifacts?: OutputArtifact[];
  Region?: string;
  RoleArn?: string;
  RunOrder?: number;
  TimeoutInMinutes?: number;
};
/**
 * Type definition for `AWS::CodePipeline::Pipeline.ActionTypeId`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-actiontypeid.html}
 */
export type ActionTypeId = {
  Category: string;
  Owner: string;
  Provider: string;
  Version: string;
};
/**
 * Type definition for `AWS::CodePipeline::Pipeline.ArtifactStore`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-artifactstore.html}
 */
export type ArtifactStore = {
  EncryptionKey?: EncryptionKey;
  Location: string;
  Type: string;
};
/**
 * Type definition for `AWS::CodePipeline::Pipeline.ArtifactStoreMap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-artifactstoremap.html}
 */
export type ArtifactStoreMap = {
  ArtifactStore: ArtifactStore;
  Region: string;
};
/**
 * Type definition for `AWS::CodePipeline::Pipeline.BlockerDeclaration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-blockerdeclaration.html}
 */
export type BlockerDeclaration = {
  Name: string;
  Type: string;
};
/**
 * Type definition for `AWS::CodePipeline::Pipeline.EncryptionKey`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-encryptionkey.html}
 */
export type EncryptionKey = {
  Id: string;
  Type: string;
};
/**
 * Type definition for `AWS::CodePipeline::Pipeline.FailureConditions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-failureconditions.html}
 */
export type FailureConditions = {
  Result: string;
};
/**
 * Type definition for `AWS::CodePipeline::Pipeline.GitBranchFilterCriteria`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-gitbranchfiltercriteria.html}
 */
export type GitBranchFilterCriteria = {
  Excludes?: string[];
  Includes?: string[];
};
/**
 * Type definition for `AWS::CodePipeline::Pipeline.GitConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-gitconfiguration.html}
 */
export type GitConfiguration = {
  PullRequest?: GitPullRequestFilter[];
  Push?: GitPushFilter[];
  SourceActionName: string;
};
/**
 * Type definition for `AWS::CodePipeline::Pipeline.GitFilePathFilterCriteria`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-gitfilepathfiltercriteria.html}
 */
export type GitFilePathFilterCriteria = {
  Excludes?: string[];
  Includes?: string[];
};
/**
 * Type definition for `AWS::CodePipeline::Pipeline.GitPullRequestFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-gitpullrequestfilter.html}
 */
export type GitPullRequestFilter = {
  Branches?: GitBranchFilterCriteria;
  Events?: string[];
  FilePaths?: GitFilePathFilterCriteria;
};
/**
 * Type definition for `AWS::CodePipeline::Pipeline.GitPushFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-gitpushfilter.html}
 */
export type GitPushFilter = {
  Branches?: GitBranchFilterCriteria;
  FilePaths?: GitFilePathFilterCriteria;
  Tags?: GitTagFilterCriteria;
};
/**
 * Type definition for `AWS::CodePipeline::Pipeline.GitTagFilterCriteria`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-gittagfiltercriteria.html}
 */
export type GitTagFilterCriteria = {
  Excludes?: string[];
  Includes?: string[];
};
/**
 * Type definition for `AWS::CodePipeline::Pipeline.InputArtifact`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-inputartifact.html}
 */
export type InputArtifact = {
  Name: string;
};
/**
 * Type definition for `AWS::CodePipeline::Pipeline.OutputArtifact`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-outputartifact.html}
 */
export type OutputArtifact = {
  Name: string;
};
/**
 * Type definition for `AWS::CodePipeline::Pipeline.PipelineTriggerDeclaration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-pipelinetriggerdeclaration.html}
 */
export type PipelineTriggerDeclaration = {
  GitConfiguration?: GitConfiguration;
  ProviderType: string;
};
/**
 * Type definition for `AWS::CodePipeline::Pipeline.StageDeclaration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-stagedeclaration.html}
 */
export type StageDeclaration = {
  Actions: ActionDeclaration[];
  Blockers?: BlockerDeclaration[];
  Name: string;
  OnFailure?: FailureConditions;
};
/**
 * Type definition for `AWS::CodePipeline::Pipeline.StageTransition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-stagetransition.html}
 */
export type StageTransition = {
  Reason: string;
  StageName: string;
};
/**
 * Type definition for `AWS::CodePipeline::Pipeline.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Type definition for `AWS::CodePipeline::Pipeline.VariableDeclaration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-variabledeclaration.html}
 */
export type VariableDeclaration = {
  DefaultValue?: string;
  Description?: string;
  Name: string;
};
/**
 * Resource Type definition for AWS::CodePipeline::Pipeline
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html}
 */
export class CodePipelinePipeline extends $Resource<
  "AWS::CodePipeline::Pipeline",
  CodePipelinePipelineProperties,
  CodePipelinePipelineAttributes
> {
  public static readonly Type = "AWS::CodePipeline::Pipeline";
  constructor(
    logicalId: string,
    properties: CodePipelinePipelineProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CodePipelinePipeline.Type, properties, options);
  }
}
