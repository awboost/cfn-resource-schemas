import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::Omics::WorkflowVersion Resource Type.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-workflowversion.html}
 */
export type OmicsWorkflowVersionProperties = {
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
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[A-Za-z0-9][A-Za-z0-9\-\._]*$`
   */
  VersionName: string;
  /**
   * @minLength `1`
   * @maxLength `12`
   * @pattern `^[0-9]{12}$`
   */
  WorkflowBucketOwnerId?: string;
  /**
   * @minLength `1`
   * @maxLength `18`
   * @pattern `^[0-9]+$`
   */
  WorkflowId: string;
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
 * Attribute type definition for `AWS::Omics::WorkflowVersion`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-workflowversion.html#aws-resource-omics-workflowversion-return-values}
 */
export type OmicsWorkflowVersionAttributes = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^arn:.+$`
   */
  Arn: string;
  CreationTime: string;
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
   * @minLength `1`
   * @maxLength `36`
   * @pattern `^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$`
   */
  Uuid: string;
};
/**
 * Type definition for `AWS::Omics::WorkflowVersion.Accelerators`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-workflowversion-accelerators.html}
 */
export type Accelerators = "GPU";
/**
 * Type definition for `AWS::Omics::WorkflowVersion.ContainerRegistryMap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-workflowversion-containerregistrymap.html}
 */
export type ContainerRegistryMap = {
  ImageMappings?: ImageMapping[];
  RegistryMappings?: RegistryMapping[];
};
/**
 * Type definition for `AWS::Omics::WorkflowVersion.DefinitionRepository`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-workflowversion-definitionrepository.html}
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
 * Type definition for `AWS::Omics::WorkflowVersion.ImageMapping`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-workflowversion-imagemapping.html}
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
 * Type definition for `AWS::Omics::WorkflowVersion.RegistryMapping`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-workflowversion-registrymapping.html}
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
 * Type definition for `AWS::Omics::WorkflowVersion.SourceReference`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-workflowversion-sourcereference.html}
 */
export type SourceReference = {
  type?: "BRANCH" | "TAG" | "COMMIT";
  value?: string;
};
/**
 * Type definition for `AWS::Omics::WorkflowVersion.StorageType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-workflowversion-storagetype.html}
 */
export type StorageType = "STATIC" | "DYNAMIC";
/**
 * Type definition for `AWS::Omics::WorkflowVersion.TagMap`.
 * A map of resource tags
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-workflowversion-tagmap.html}
 */
export type TagMap = Record<string, string>;
/**
 * Type definition for `AWS::Omics::WorkflowVersion.WorkflowEngine`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-workflowversion-workflowengine.html}
 */
export type WorkflowEngine = "WDL" | "NEXTFLOW" | "CWL";
/**
 * Type definition for `AWS::Omics::WorkflowVersion.WorkflowParameter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-workflowversion-workflowparameter.html}
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
 * Type definition for `AWS::Omics::WorkflowVersion.WorkflowParameterTemplate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-workflowversion-workflowparametertemplate.html}
 */
export type WorkflowParameterTemplate = Record<string, WorkflowParameter>;
/**
 * Type definition for `AWS::Omics::WorkflowVersion.WorkflowStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-workflowversion-workflowstatus.html}
 */
export type WorkflowStatus =
  | "CREATING"
  | "ACTIVE"
  | "UPDATING"
  | "DELETED"
  | "FAILED"
  | "INACTIVE";
/**
 * Type definition for `AWS::Omics::WorkflowVersion.WorkflowType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-workflowversion-workflowtype.html}
 */
export type WorkflowType = "PRIVATE" | "READY2RUN";
/**
 * Definition of AWS::Omics::WorkflowVersion Resource Type.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-workflowversion.html}
 */
export class OmicsWorkflowVersion extends $Resource<
  "AWS::Omics::WorkflowVersion",
  OmicsWorkflowVersionProperties,
  OmicsWorkflowVersionAttributes
> {
  public static readonly Type = "AWS::Omics::WorkflowVersion";
  constructor(
    logicalId: string,
    properties: OmicsWorkflowVersionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, OmicsWorkflowVersion.Type, properties, options);
  }
}
