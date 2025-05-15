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
