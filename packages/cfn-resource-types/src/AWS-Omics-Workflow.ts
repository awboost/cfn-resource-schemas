import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::Omics::Workflow Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-workflow.html}
 */
export type OmicsWorkflowProperties = {
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  Accelerators?: Accelerators;
  ContainerRegistryMap?: ContainerRegistryMap;
  /**
   * @minLength `1`
   * @maxLength `750`
   * @pattern `^[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+$`
   */
  ContainerRegistryMapUri?: string;
  DefinitionRepository?: DefinitionRepository;
  /**
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+$`
   */
  DefinitionUri?: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+$`
   */
  Description?: string;
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  Engine?: WorkflowEngine;
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+$`
   */
  Main?: string;
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+$`
   */
  Name?: string;
  ParameterTemplate?: WorkflowParameterTemplate;
  /**
   * Path to the primary workflow parameter template JSON file inside the repository
   * @pattern `^[\S]+$`
   */
  ParameterTemplatePath?: string;
  /**
   * @min `0`
   * @max `100000`
   */
  StorageCapacity?: number;
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  StorageType?: StorageType;
  /**
   * A map of resource tags
   */
  Tags?: TagMap;
  /**
   * Optional workflow bucket owner ID to verify the workflow bucket
   * @pattern `^[0-9]{12}$`
   */
  WorkflowBucketOwnerId?: string;
  /**
   * The markdown content for the workflow's README file. This provides documentation and usage information for users of the workflow.
   */
  readmeMarkdown?: string;
  /**
   * The path to the workflow README markdown file within the repository. This file provides documentation and usage information for the workflow. If not specified, the README.md file from the root directory of the repository will be used.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+$`
   */
  readmePath?: string;
  /**
   * The S3 URI of the README file for the workflow. This file provides documentation and usage information for the workflow. The S3 URI must begin with s3://USER-OWNED-BUCKET/. The requester must have access to the S3 bucket and object. The max README content length is 500 KiB.
   * @pattern `^s3://([a-z0-9][a-z0-9-.]{1,61}[a-z0-9])/((.{1,1024}))$`
   */
  readmeUri?: string;
};
/**
 * Attribute type definition for `AWS::Omics::Workflow`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-workflow.html#aws-resource-omics-workflow-return-values}
 */
export type OmicsWorkflowAttributes = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^arn:.+$`
   */
  Arn: string;
  CreationTime: string;
  /**
   * @minLength `1`
   * @maxLength `18`
   * @pattern `^[0-9]+$`
   */
  Id: string;
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  Status: WorkflowStatus;
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  Type: WorkflowType;
  /**
   * @pattern `^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$`
   */
  Uuid: string;
};
/**
 * Type definition for `AWS::Omics::Workflow.Accelerators`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-workflow-accelerators.html}
 */
export type Accelerators = "GPU";
/**
 * Type definition for `AWS::Omics::Workflow.ContainerRegistryMap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-workflow-containerregistrymap.html}
 */
export type ContainerRegistryMap = {
  ImageMappings?: ImageMapping[];
  RegistryMappings?: RegistryMapping[];
};
/**
 * Type definition for `AWS::Omics::Workflow.DefinitionRepository`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-workflow-definitionrepository.html}
 */
export type DefinitionRepository = {
  /**
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^arn:aws(-[\\w]+)*:.+:.+:[0-9]{12}:.+$`
   */
  connectionArn?: string;
  /**
   * @minLength `1`
   * @maxLength `50`
   */
  excludeFilePatterns?: string[];
  /**
   * @pattern `.+/.+`
   */
  fullRepositoryId?: string;
  sourceReference?: SourceReference;
};
/**
 * Type definition for `AWS::Omics::Workflow.ImageMapping`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-workflow-imagemapping.html}
 */
export type ImageMapping = {
  /**
   * @minLength `1`
   * @maxLength `750`
   * @pattern `^[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+$`
   */
  DestinationImage?: string;
  /**
   * @minLength `1`
   * @maxLength `750`
   * @pattern `^[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+$`
   */
  SourceImage?: string;
};
/**
 * Type definition for `AWS::Omics::Workflow.RegistryMapping`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-workflow-registrymapping.html}
 */
export type RegistryMapping = {
  /**
   * @minLength `12`
   * @maxLength `12`
   * @pattern `^[0-9]+$`
   */
  EcrAccountId?: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+$`
   */
  EcrRepositoryPrefix?: string;
  /**
   * @minLength `1`
   * @maxLength `750`
   * @pattern `^[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+$`
   */
  UpstreamRegistryUrl?: string;
  /**
   * @minLength `2`
   * @maxLength `30`
   * @pattern `^[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+$`
   */
  UpstreamRepositoryPrefix?: string;
};
/**
 * Type definition for `AWS::Omics::Workflow.SourceReference`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-workflow-sourcereference.html}
 */
export type SourceReference = {
  type?: "BRANCH" | "TAG" | "COMMIT";
  value?: string;
};
/**
 * Type definition for `AWS::Omics::Workflow.StorageType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-workflow-storagetype.html}
 */
export type StorageType = "STATIC" | "DYNAMIC";
/**
 * Type definition for `AWS::Omics::Workflow.TagMap`.
 * A map of resource tags
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-workflow-tagmap.html}
 */
export type TagMap = Record<string, string>;
/**
 * Type definition for `AWS::Omics::Workflow.WorkflowEngine`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-workflow-workflowengine.html}
 */
export type WorkflowEngine = "WDL" | "NEXTFLOW" | "CWL";
/**
 * Type definition for `AWS::Omics::Workflow.WorkflowParameter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-workflow-workflowparameter.html}
 */
export type WorkflowParameter = {
  /**
   * @minLength `0`
   * @maxLength `256`
   * @pattern `^[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+$`
   */
  Description?: string;
  Optional?: boolean;
};
/**
 * Type definition for `AWS::Omics::Workflow.WorkflowParameterTemplate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-workflow-workflowparametertemplate.html}
 */
export type WorkflowParameterTemplate = Record<string, WorkflowParameter>;
/**
 * Type definition for `AWS::Omics::Workflow.WorkflowStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-workflow-workflowstatus.html}
 */
export type WorkflowStatus =
  | "CREATING"
  | "ACTIVE"
  | "UPDATING"
  | "DELETED"
  | "FAILED";
/**
 * Type definition for `AWS::Omics::Workflow.WorkflowType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-workflow-workflowtype.html}
 */
export type WorkflowType = "PRIVATE";
/**
 * Definition of AWS::Omics::Workflow Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-workflow.html}
 */
export class OmicsWorkflow extends $Resource<
  "AWS::Omics::Workflow",
  OmicsWorkflowProperties,
  OmicsWorkflowAttributes
> {
  public static readonly Type = "AWS::Omics::Workflow";
  constructor(
    logicalId: string,
    properties: OmicsWorkflowProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, OmicsWorkflow.Type, properties, options);
  }
}
