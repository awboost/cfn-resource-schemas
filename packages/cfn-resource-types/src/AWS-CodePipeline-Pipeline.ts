import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::CodePipeline::Pipeline resource creates a CodePipeline pipeline that describes how software changes go through a release process.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html}
 */
export type CodePipelinePipelineProperties = {
  /**
   * The S3 bucket where artifacts for the pipeline are stored.
   */
  ArtifactStore?: ArtifactStore;
  /**
   * A mapping of artifactStore objects and their corresponding AWS Regions. There must be an artifact store for the pipeline Region and for each cross-region action in the pipeline.
   */
  ArtifactStores?: ArtifactStoreMap[];
  /**
   * Represents the input of a DisableStageTransition action.
   */
  DisableInboundStageTransitions?: StageTransition[];
  /**
   * The method that the pipeline will use to handle multiple executions. The default mode is SUPERSEDED.
   */
  ExecutionMode?: "QUEUED" | "SUPERSEDED" | "PARALLEL";
  /**
   * The name of the pipeline.
   */
  Name?: string;
  /**
   * CodePipeline provides the following pipeline types, which differ in characteristics and price, so that you can tailor your pipeline features and cost to the needs of your applications.
   */
  PipelineType?: "V1" | "V2";
  /**
   * Indicates whether to rerun the CodePipeline pipeline after you update it.
   */
  RestartExecutionOnUpdate?: boolean;
  /**
   * The Amazon Resource Name (ARN) for CodePipeline to use to either perform actions with no actionRoleArn, or to use to assume roles for actions with an actionRoleArn
   * @pattern `arn:aws(-[\w]+)*:iam::[0-9]{12}:role/.*`
   */
  RoleArn: string;
  /**
   * Represents information about a stage and its definition.
   */
  Stages: StageDeclaration[];
  /**
   * Specifies the tags applied to the pipeline.
   */
  Tags?: Tag[];
  /**
   * The trigger configuration specifying a type of event, such as Git tags, that starts the pipeline.
   */
  Triggers?: PipelineTriggerDeclaration[];
  /**
   * A list that defines the pipeline variables for a pipeline resource. Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9@\-_]+.
   */
  Variables?: VariableDeclaration[];
};
/**
 * Attribute type definition for `AWS::CodePipeline::Pipeline`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#aws-resource-codepipeline-pipeline-return-values}
 */
export type CodePipelinePipelineAttributes = {
  /**
   * The version of the pipeline.
   */
  Version: string;
};
/**
 * Type definition for `AWS::CodePipeline::Pipeline.ActionDeclaration`.
 * Represents information about an action declaration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-actiondeclaration.html}
 */
export type ActionDeclaration = {
  /**
   * Represents information about an action type.
   */
  ActionTypeId: ActionTypeId;
  /**
   * The shell commands to run with your compute action in CodePipeline.
   */
  Commands?: string[];
  /**
   * The action's configuration. These are key-value pairs that specify input values for an action.
   */
  Configuration?: Record<string, any>;
  /**
   * The list of environment variables that are input to a compute based action.
   */
  EnvironmentVariables?: EnvironmentVariable[];
  InputArtifacts?: InputArtifact[];
  /**
   * The action declaration's name.
   */
  Name: string;
  /**
   * The variable namespace associated with the action. All variables produced as output by this action fall under this namespace.
   */
  Namespace?: string;
  OutputArtifacts?: OutputArtifact[];
  /**
   * The list of variables that are to be exported from the compute action.
   */
  OutputVariables?: string[];
  /**
   * The action declaration's AWS Region, such as us-east-1.
   */
  Region?: string;
  /**
   * The ARN of the IAM service role that performs the declared action. This is assumed through the roleArn for the pipeline.
   * @pattern `arn:aws(-[\w]+)*:iam::[0-9]{12}:role/.*`
   */
  RoleArn?: string;
  /**
   * The order in which actions are run.
   */
  RunOrder?: number;
  /**
   * A timeout duration in minutes that can be applied against the ActionType’s default timeout value specified in Quotas for AWS CodePipeline. This attribute is available only to the manual approval ActionType.
   */
  TimeoutInMinutes?: number;
};
/**
 * Type definition for `AWS::CodePipeline::Pipeline.ActionTypeId`.
 * Represents information about an action type.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-actiontypeid.html}
 */
export type ActionTypeId = {
  /**
   * A category defines what kind of action can be taken in the stage, and constrains the provider type for the action. Valid categories are limited to one of the values below.
   */
  Category:
    | "Source"
    | "Build"
    | "Test"
    | "Deploy"
    | "Invoke"
    | "Approval"
    | "Compute";
  /**
   * The creator of the action being called. There are three valid values for the Owner field in the action category section within your pipeline structure: AWS, ThirdParty, and Custom.
   */
  Owner: string;
  /**
   * The provider of the service being called by the action. Valid providers are determined by the action category. For example, an action in the Deploy category type might have a provider of CodeDeploy, which would be specified as CodeDeploy.
   */
  Provider: string;
  /**
   * A string that describes the action version.
   */
  Version: string;
};
/**
 * Type definition for `AWS::CodePipeline::Pipeline.ArtifactStore`.
 * The S3 bucket where artifacts for the pipeline are stored.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-artifactstore.html}
 */
export type ArtifactStore = {
  /**
   * Represents information about the key used to encrypt data in the artifact store, such as an AWS Key Management Service (AWS KMS) key
   */
  EncryptionKey?: EncryptionKey;
  /**
   * The S3 bucket used for storing the artifacts for a pipeline. You can specify the name of an S3 bucket but not a folder in the bucket. A folder to contain the pipeline artifacts is created for you based on the name of the pipeline. You can use any S3 bucket in the same AWS Region as the pipeline to store your pipeline artifacts.
   */
  Location: string;
  /**
   * The type of the artifact store, such as S3.
   */
  Type: "S3";
};
/**
 * Type definition for `AWS::CodePipeline::Pipeline.ArtifactStoreMap`.
 * A mapping of artifactStore objects and their corresponding AWS Regions. There must be an artifact store for the pipeline Region and for each cross-region action in the pipeline.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-artifactstoremap.html}
 */
export type ArtifactStoreMap = {
  /**
   * The S3 bucket where artifacts for the pipeline are stored.
   */
  ArtifactStore: ArtifactStore;
  /**
   * The action declaration's AWS Region, such as us-east-1.
   */
  Region: string;
};
/**
 * Type definition for `AWS::CodePipeline::Pipeline.BeforeEntryConditions`.
 * The configuration that specifies the rules to run before stage starts.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-beforeentryconditions.html}
 */
export type BeforeEntryConditions = {
  Conditions?: Condition[];
};
/**
 * Type definition for `AWS::CodePipeline::Pipeline.BlockerDeclaration`.
 * Reserved for future use.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-blockerdeclaration.html}
 */
export type BlockerDeclaration = {
  /**
   * Reserved for future use.
   */
  Name: string;
  /**
   * Reserved for future use.
   */
  Type: "Schedule";
};
/**
 * Type definition for `AWS::CodePipeline::Pipeline.Condition`.
 * Represents information about condition.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-condition.html}
 */
export type Condition = {
  /**
   * The specified result for when the failure conditions are met, such as rolling back the stage
   */
  Result?: string;
  Rules?: RuleDeclaration[];
};
/**
 * Type definition for `AWS::CodePipeline::Pipeline.EncryptionKey`.
 * Represents information about the key used to encrypt data in the artifact store, such as an AWS Key Management Service (AWS KMS) key
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-encryptionkey.html}
 */
export type EncryptionKey = {
  /**
   * The ID used to identify the key. For an AWS KMS key, you can use the key ID, the key ARN, or the alias ARN.
   */
  Id: string;
  /**
   * The type of encryption key, such as an AWS KMS key. When creating or updating a pipeline, the value must be set to 'KMS'.
   */
  Type: string;
};
/**
 * Type definition for `AWS::CodePipeline::Pipeline.EnvironmentVariable`.
 * Represents information about the environment variable of an action.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-environmentvariable.html}
 */
export type EnvironmentVariable = {
  /**
   * The name of the environment variable.
   */
  Name: string;
  /**
   * The type of the environment variable.
   */
  Type?: "PLAINTEXT" | "SECRETS_MANAGER";
  /**
   * The value of the environment variable.
   */
  Value: string;
};
/**
 * Type definition for `AWS::CodePipeline::Pipeline.FailureConditions`.
 * The configuration that specifies the result, such as rollback, to occur upon stage failure
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-failureconditions.html}
 */
export type FailureConditions = {
  Conditions?: Condition[];
  /**
   * The specified result for when the failure conditions are met, such as rolling back the stage
   */
  Result?: "ROLLBACK" | "RETRY";
  /**
   * The configuration that specifies the retry configuration for a stage
   */
  RetryConfiguration?: {
    /**
     * The specified retry mode type for the given stage. FAILED_ACTIONS will retry only the failed actions. ALL_ACTIONS will retry both failed and successful
     */
    RetryMode?: "ALL_ACTIONS" | "FAILED_ACTIONS";
  };
};
/**
 * Type definition for `AWS::CodePipeline::Pipeline.GitBranchFilterCriteria`.
 * The Git repository branches specified as filter criteria to start the pipeline.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-gitbranchfiltercriteria.html}
 */
export type GitBranchFilterCriteria = {
  /**
   * The list of patterns of Git branches that, when a commit is pushed, are to be excluded from starting the pipeline.
   */
  Excludes?: string[];
  /**
   * The list of patterns of Git branches that, when a commit is pushed, are to be included as criteria that starts the pipeline.
   */
  Includes?: string[];
};
/**
 * Type definition for `AWS::CodePipeline::Pipeline.GitConfiguration`.
 * A type of trigger configuration for Git-based source actions.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-gitconfiguration.html}
 */
export type GitConfiguration = {
  /**
   * The field where the repository event that will start the pipeline is specified as pull requests.
   */
  PullRequest?: GitPullRequestFilter[];
  /**
   * The field where the repository event that will start the pipeline, such as pushing Git tags, is specified with details.
   */
  Push?: GitPushFilter[];
  /**
   * The name of the pipeline source action where the trigger configuration, such as Git tags, is specified. The trigger configuration will start the pipeline upon the specified change only.
   */
  SourceActionName: string;
};
/**
 * Type definition for `AWS::CodePipeline::Pipeline.GitFilePathFilterCriteria`.
 * The Git repository file paths specified as filter criteria to start the pipeline.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-gitfilepathfiltercriteria.html}
 */
export type GitFilePathFilterCriteria = {
  /**
   * The list of patterns of Git repository file paths that, when a commit is pushed, are to be excluded from starting the pipeline.
   */
  Excludes?: string[];
  /**
   * The list of patterns of Git repository file paths that, when a commit is pushed, are to be included as criteria that starts the pipeline.
   */
  Includes?: string[];
};
/**
 * Type definition for `AWS::CodePipeline::Pipeline.GitPullRequestFilter`.
 * The event criteria for the pull request trigger configuration, such as the lists of branches or file paths to include and exclude.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-gitpullrequestfilter.html}
 */
export type GitPullRequestFilter = {
  /**
   * The Git repository branches specified as filter criteria to start the pipeline.
   */
  Branches?: GitBranchFilterCriteria;
  /**
   * The field that specifies which pull request events to filter on (opened, updated, closed) for the trigger configuration.
   */
  Events?: string[];
  /**
   * The Git repository file paths specified as filter criteria to start the pipeline.
   */
  FilePaths?: GitFilePathFilterCriteria;
};
/**
 * Type definition for `AWS::CodePipeline::Pipeline.GitPushFilter`.
 * The event criteria that specify when a specified repository event will start the pipeline for the specified trigger configuration, such as the lists of Git tags to include and exclude.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-gitpushfilter.html}
 */
export type GitPushFilter = {
  /**
   * The Git repository branches specified as filter criteria to start the pipeline.
   */
  Branches?: GitBranchFilterCriteria;
  /**
   * The Git repository file paths specified as filter criteria to start the pipeline.
   */
  FilePaths?: GitFilePathFilterCriteria;
  /**
   * The Git tags specified as filter criteria for whether a Git tag repository event will start the pipeline.
   */
  Tags?: GitTagFilterCriteria;
};
/**
 * Type definition for `AWS::CodePipeline::Pipeline.GitTagFilterCriteria`.
 * The Git tags specified as filter criteria for whether a Git tag repository event will start the pipeline.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-gittagfiltercriteria.html}
 */
export type GitTagFilterCriteria = {
  /**
   * The list of patterns of Git tags that, when pushed, are to be excluded from starting the pipeline.
   */
  Excludes?: string[];
  /**
   * The list of patterns of Git tags that, when pushed, are to be included as criteria that starts the pipeline.
   */
  Includes?: string[];
};
/**
 * Type definition for `AWS::CodePipeline::Pipeline.InputArtifact`.
 * Represents information about an artifact to be worked on, such as a test or build artifact.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-inputartifact.html}
 */
export type InputArtifact = {
  /**
   * The name of the artifact to be worked on (for example, "My App").
   */
  Name: string;
};
/**
 * Type definition for `AWS::CodePipeline::Pipeline.OutputArtifact`.
 * Represents information about the output of an action.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-outputartifact.html}
 */
export type OutputArtifact = {
  /**
   * The files that you want to associate with the output artifact that will be exported from the compute action.
   */
  Files?: string[];
  /**
   * The name of the output of an artifact, such as "My App".
   */
  Name: string;
};
/**
 * Type definition for `AWS::CodePipeline::Pipeline.PipelineTriggerDeclaration`.
 * Represents information about the specified trigger configuration, such as the filter criteria and the source stage for the action that contains the trigger.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-pipelinetriggerdeclaration.html}
 */
export type PipelineTriggerDeclaration = {
  /**
   * A type of trigger configuration for Git-based source actions.
   */
  GitConfiguration?: GitConfiguration;
  /**
   * The source provider for the event, such as connections configured for a repository with Git tags, for the specified trigger configuration.
   */
  ProviderType: "CodeStarSourceConnection";
};
/**
 * Type definition for `AWS::CodePipeline::Pipeline.RuleDeclaration`.
 * Represents information about condition.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-ruledeclaration.html}
 */
export type RuleDeclaration = {
  /**
   * The shell commands to run with your compute action in CodePipeline.
   */
  Commands?: string[];
  /**
   * The rule's configuration. These are key-value pairs that specify input values for a rule.
   */
  Configuration?: Record<string, any>;
  InputArtifacts?: InputArtifact[];
  /**
   * The rule declaration's name.
   */
  Name?: string;
  /**
   * The rule declaration's AWS Region, such as us-east-1.
   */
  Region?: string;
  /**
   * The ARN of the IAM service role that performs the declared rule. This is assumed through the roleArn for the pipeline.
   * @pattern `arn:aws(-[\w]+)*:iam::[0-9]{12}:role/.*`
   */
  RoleArn?: string;
  /**
   * Represents information about a rule type.
   */
  RuleTypeId?: RuleTypeId;
};
/**
 * Type definition for `AWS::CodePipeline::Pipeline.RuleTypeId`.
 * Represents information about a rule type.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-ruletypeid.html}
 */
export type RuleTypeId = {
  /**
   * A category for the provider type for the rule.
   */
  Category?: string;
  /**
   * The creator of the rule being called. Only AWS is supported.
   */
  Owner?: string;
  /**
   * The provider of the service being called by the rule.
   */
  Provider?: string;
  /**
   * A string that describes the rule version.
   */
  Version?: string;
};
/**
 * Type definition for `AWS::CodePipeline::Pipeline.StageDeclaration`.
 * Represents information about a stage and its definition.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-stagedeclaration.html}
 */
export type StageDeclaration = {
  Actions: ActionDeclaration[];
  /**
   * The method to use before stage runs.
   */
  BeforeEntry?: BeforeEntryConditions;
  Blockers?: BlockerDeclaration[];
  /**
   * The name of the stage.
   */
  Name: string;
  /**
   * The method to use when a stage has not completed successfully
   */
  OnFailure?: FailureConditions;
  /**
   * The method to use when a stage has completed successfully
   */
  OnSuccess?: SuccessConditions;
};
/**
 * Type definition for `AWS::CodePipeline::Pipeline.StageTransition`.
 * The name of the pipeline in which you want to disable the flow of artifacts from one stage to another.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-stagetransition.html}
 */
export type StageTransition = {
  /**
   * The reason given to the user that a stage is disabled, such as waiting for manual approval or manual tests. This message is displayed in the pipeline console UI.
   */
  Reason: string;
  /**
   * The name of the stage where you want to disable the inbound or outbound transition of artifacts.
   */
  StageName: string;
};
/**
 * Type definition for `AWS::CodePipeline::Pipeline.SuccessConditions`.
 * The configuration that specifies the result, such as rollback, to occur upon stage failure
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-successconditions.html}
 */
export type SuccessConditions = {
  Conditions?: Condition[];
};
/**
 * Type definition for `AWS::CodePipeline::Pipeline.Tag`.
 * A tag is a key-value pair that is used to manage the resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-tag.html}
 */
export type Tag = {
  /**
   * The tag's key.
   */
  Key: string;
  /**
   * The tag's value.
   */
  Value: string;
};
/**
 * Type definition for `AWS::CodePipeline::Pipeline.VariableDeclaration`.
 * A variable declared at the pipeline level.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-variabledeclaration.html}
 */
export type VariableDeclaration = {
  /**
   * The value of a pipeline-level variable.
   */
  DefaultValue?: string;
  /**
   * The description of a pipeline-level variable. It's used to add additional context about the variable, and not being used at time when pipeline executes.
   */
  Description?: string;
  /**
   * The name of a pipeline-level variable.
   */
  Name: string;
};
/**
 * The AWS::CodePipeline::Pipeline resource creates a CodePipeline pipeline that describes how software changes go through a release process.
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
