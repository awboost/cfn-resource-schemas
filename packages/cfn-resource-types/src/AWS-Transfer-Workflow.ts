import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Transfer::Workflow
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html}
 */
export type TransferWorkflowProperties = {
  /**
   * A textual description for the workflow.
   * @minLength `0`
   * @maxLength `256`
   * @pattern `^[\w\- ]*$`
   */
  Description?: string;
  /**
   * Specifies the steps (actions) to take if any errors are encountered during execution of the workflow.
   * @maxLength `8`
   */
  OnExceptionSteps?: WorkflowStep[];
  /**
   * Specifies the details for the steps that are in the specified workflow.
   * @maxLength `8`
   */
  Steps: WorkflowStep[];
  /**
   * Key-value pairs that can be used to group and search for workflows. Tags are metadata attached to workflows for any purpose.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Transfer::Workflow`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html#aws-resource-transfer-workflow-return-values}
 */
export type TransferWorkflowAttributes = {
  /**
   * Specifies the unique Amazon Resource Name (ARN) for the workflow.
   * @minLength `20`
   * @maxLength `1600`
   * @pattern `arn:.*`
   */
  Arn: string;
  /**
   * A unique identifier for the workflow.
   * @minLength `19`
   * @maxLength `19`
   * @pattern `^w-([a-z0-9]{17})$`
   */
  WorkflowId: string;
};
/**
 * Type definition for `AWS::Transfer::Workflow.EfsInputFileLocation`.
 * Specifies the details for an EFS file.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-efsinputfilelocation.html}
 */
export type EfsInputFileLocation = {
  /**
   * Specifies the EFS filesystem that contains the file.
   * @minLength `0`
   * @maxLength `128`
   * @pattern `^(arn:aws[-a-z]*:elasticfilesystem:[0-9a-z-:]+:(access-point/fsap|file-system/fs)-[0-9a-f]{8,40}|fs(ap)?-[0-9a-f]{8,40})$`
   */
  FileSystemId?: string;
  /**
   * The name assigned to the file when it was created in EFS. You use the object path to retrieve the object.
   * @minLength `1`
   * @maxLength `65536`
   * @pattern `^[^\x00]+$`
   */
  Path?: string;
};
/**
 * Type definition for `AWS::Transfer::Workflow.InputFileLocation`.
 * Specifies the location for the file being decrypted. Only applicable for the Decrypt type of workflow steps.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-inputfilelocation.html}
 */
export type InputFileLocation = {
  /**
   * Specifies the details for an EFS file.
   */
  EfsFileLocation?: EfsInputFileLocation;
  /**
   * Specifies the details for a S3 file.
   */
  S3FileLocation?: S3InputFileLocation;
};
/**
 * Type definition for `AWS::Transfer::Workflow.S3FileLocation`.
 * Specifies the location for the file being copied. Only applicable for the Copy type of workflow steps.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-s3filelocation.html}
 */
export type S3FileLocation = {
  /**
   * Specifies the details for a S3 file.
   */
  S3FileLocation?: S3InputFileLocation;
};
/**
 * Type definition for `AWS::Transfer::Workflow.S3InputFileLocation`.
 * Specifies the details for a S3 file.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-s3inputfilelocation.html}
 */
export type S3InputFileLocation = {
  /**
   * Specifies the S3 bucket that contains the file.
   * @minLength `3`
   * @maxLength `63`
   * @pattern `^[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9]$`
   */
  Bucket?: string;
  /**
   * The name assigned to the file when it was created in S3. You use the object key to retrieve the object.
   * @minLength `0`
   * @maxLength `1024`
   * @pattern `.*`
   */
  Key?: string;
};
/**
 * Type definition for `AWS::Transfer::Workflow.S3Tag`.
 * Specifies the key-value pair that are assigned to a file during the execution of a Tagging step.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-s3tag.html}
 */
export type S3Tag = {
  /**
   * The name assigned to the tag that you create.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value that corresponds to the key.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::Transfer::Workflow.Tag`.
 * Creates a key-value pair for a specific resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-tag.html}
 */
export type Tag = {
  /**
   * The name assigned to the tag that you create.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * Contains one or more values that you assigned to the key name you create.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::Transfer::Workflow.WorkflowStep`.
 * The basic building block of a workflow.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-workflowstep.html}
 */
export type WorkflowStep = {
  /**
   * Details for a step that performs a file copy.
   */
  CopyStepDetails?: {
    /**
     * Specifies the location for the file being copied. Only applicable for the Copy type of workflow steps.
     */
    DestinationFileLocation?: S3FileLocation;
    /**
     * The name of the step, used as an identifier.
     * @minLength `0`
     * @maxLength `30`
     * @pattern `^[\w-]*$`
     */
    Name?: string;
    /**
     * A flag that indicates whether or not to overwrite an existing file of the same name. The default is FALSE.
     */
    OverwriteExisting?: "TRUE" | "FALSE";
    /**
     * Specifies which file to use as input to the workflow step.
     * @minLength `0`
     * @maxLength `256`
     * @pattern `^\$\{(\w+.)+\w+\}$`
     */
    SourceFileLocation?: string;
  };
  /**
   * Details for a step that invokes a lambda function.
   */
  CustomStepDetails?: {
    /**
     * The name of the step, used as an identifier.
     * @minLength `0`
     * @maxLength `30`
     * @pattern `^[\w-]*$`
     */
    Name?: string;
    /**
     * Specifies which file to use as input to the workflow step.
     * @minLength `0`
     * @maxLength `256`
     * @pattern `^\$\{(\w+.)+\w+\}$`
     */
    SourceFileLocation?: string;
    /**
     * The ARN for the lambda function that is being called.
     * @minLength `0`
     * @maxLength `170`
     * @pattern `arn:[a-z-]+:lambda:.*$`
     */
    Target?: string;
    /**
     * Timeout, in seconds, for the step.
     * @min `1`
     * @max `1800`
     */
    TimeoutSeconds?: number;
  };
  /**
   * Details for a step that performs a file decryption.
   */
  DecryptStepDetails?: {
    /**
     * Specifies the location for the file being decrypted. Only applicable for the Decrypt type of workflow steps.
     */
    DestinationFileLocation?: InputFileLocation;
    /**
     * The name of the step, used as an identifier.
     * @minLength `0`
     * @maxLength `30`
     * @pattern `^[\w-]*$`
     */
    Name?: string;
    /**
     * A flag that indicates whether or not to overwrite an existing file of the same name. The default is FALSE.
     */
    OverwriteExisting?: "TRUE" | "FALSE";
    /**
     * Specifies which file to use as input to the workflow step.
     * @minLength `0`
     * @maxLength `256`
     * @pattern `^\$\{(\w+.)+\w+\}$`
     */
    SourceFileLocation?: string;
    /**
     * Specifies which encryption method to use.
     */
    Type?: "PGP";
  };
  /**
   * Details for a step that deletes the file.
   */
  DeleteStepDetails?: {
    /**
     * The name of the step, used as an identifier.
     * @minLength `0`
     * @maxLength `30`
     * @pattern `^[\w-]*$`
     */
    Name?: string;
    /**
     * Specifies which file to use as input to the workflow step.
     * @minLength `0`
     * @maxLength `256`
     * @pattern `^\$\{(\w+.)+\w+\}$`
     */
    SourceFileLocation?: string;
  };
  /**
   * Details for a step that creates one or more tags.
   */
  TagStepDetails?: {
    /**
     * The name of the step, used as an identifier.
     * @minLength `0`
     * @maxLength `30`
     * @pattern `^[\w-]*$`
     */
    Name?: string;
    /**
     * Specifies which file to use as input to the workflow step.
     * @minLength `0`
     * @maxLength `256`
     * @pattern `^\$\{(\w+.)+\w+\}$`
     */
    SourceFileLocation?: string;
    /**
     * Array that contains from 1 to 10 key/value pairs.
     * @maxLength `10`
     */
    Tags?: S3Tag[];
  };
  Type?: "COPY" | "CUSTOM" | "DECRYPT" | "DELETE" | "TAG";
};
/**
 * Resource Type definition for AWS::Transfer::Workflow
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html}
 */
export class TransferWorkflow extends $Resource<
  "AWS::Transfer::Workflow",
  TransferWorkflowProperties,
  TransferWorkflowAttributes
> {
  public static readonly Type = "AWS::Transfer::Workflow";
  constructor(
    logicalId: string,
    properties: TransferWorkflowProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, TransferWorkflow.Type, properties, options);
  }
}
