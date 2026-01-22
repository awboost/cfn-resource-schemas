import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::MWAAServerless::Workflow resource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mwaaserverless-workflow.html}
 */
export type MWAAServerlessWorkflowProperties = {
  DefinitionS3Location: S3Location;
  /**
   * @minLength `1`
   * @maxLength `1024`
   * @pattern `^.+$`
   */
  Description?: string;
  EncryptionConfiguration?: EncryptionConfiguration;
  LoggingConfiguration?: LoggingConfiguration;
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[a-zA-Z0-9]+[a-zA-Z0-9\.\-_]*$`
   */
  Name?: string;
  NetworkConfiguration?: NetworkConfiguration;
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^arn:aws(?:-(?:cn|us-gov|iso|iso-b|iso-e|iso-f))?:iam::[0-9]{12}:role(/[a-zA-Z0-9+=,.@_-]{1,512})*?/[a-zA-Z0-9+=,.@_-]{1,64}$`
   */
  RoleArn: string;
  /**
   * A map of key-value pairs to be applied as tags
   */
  Tags?: Tags;
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  TriggerMode?: string;
};
/**
 * Attribute type definition for `AWS::MWAAServerless::Workflow`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mwaaserverless-workflow.html#aws-resource-mwaaserverless-workflow-return-values}
 */
export type MWAAServerlessWorkflowAttributes = {
  CreatedAt: string;
  ModifiedAt: string;
  ScheduleConfiguration: {
    CronExpression: string;
  };
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^arn:aws(?:-(?:cn|us-gov|iso|iso-b|iso-e|iso-f))?:airflow-serverless:([a-z]{2}-[a-z]+-[0-9]{1}):([0-9]{12}):workflow/([a-zA-Z0-9][a-zA-Z0-9\.\-_]{0,254}-[a-zA-z0-9]{10})$`
   */
  WorkflowArn: string;
  WorkflowStatus: WorkflowStatus;
  /**
   * @minLength `32`
   * @maxLength `32`
   * @pattern `^[a-z0-9]{32}$`
   */
  WorkflowVersion: string;
};
/**
 * Type definition for `AWS::MWAAServerless::Workflow.EncryptionConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mwaaserverless-workflow-encryptionconfiguration.html}
 */
export type EncryptionConfiguration = {
  KmsKeyId?: string;
  Type: "AWS_MANAGED_KEY" | "CUSTOMER_MANAGED_KEY";
};
/**
 * Type definition for `AWS::MWAAServerless::Workflow.LoggingConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mwaaserverless-workflow-loggingconfiguration.html}
 */
export type LoggingConfiguration = {
  /**
   * @minLength `1`
   */
  LogGroupName: string;
};
/**
 * Type definition for `AWS::MWAAServerless::Workflow.NetworkConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mwaaserverless-workflow-networkconfiguration.html}
 */
export type NetworkConfiguration = {
  SecurityGroupIds?: string[];
  SubnetIds?: string[];
};
/**
 * Type definition for `AWS::MWAAServerless::Workflow.S3Location`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mwaaserverless-workflow-s3location.html}
 */
export type S3Location = {
  /**
   * @minLength `1`
   */
  Bucket: string;
  /**
   * @minLength `1`
   */
  ObjectKey: string;
  VersionId?: string;
};
/**
 * Type definition for `AWS::MWAAServerless::Workflow.ScheduleConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mwaaserverless-workflow-scheduleconfiguration.html}
 */
export type ScheduleConfiguration = {
  CronExpression?: string;
};
/**
 * Type definition for `AWS::MWAAServerless::Workflow.Tags`.
 * A map of key-value pairs to be applied as tags
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mwaaserverless-workflow-tags.html}
 */
export type Tags = Record<string, string>;
/**
 * Type definition for `AWS::MWAAServerless::Workflow.WorkflowStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mwaaserverless-workflow-workflowstatus.html}
 */
export type WorkflowStatus = "READY" | "DELETING";
/**
 * Resource Type definition for AWS::MWAAServerless::Workflow resource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mwaaserverless-workflow.html}
 */
export class MWAAServerlessWorkflow extends $Resource<
  "AWS::MWAAServerless::Workflow",
  MWAAServerlessWorkflowProperties,
  MWAAServerlessWorkflowAttributes
> {
  public static readonly Type = "AWS::MWAAServerless::Workflow";
  constructor(
    logicalId: string,
    properties: MWAAServerlessWorkflowProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, MWAAServerlessWorkflow.Type, properties, options);
  }
}
