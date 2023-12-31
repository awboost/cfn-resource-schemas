import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::SSM::Association resource associates an SSM document in AWS Systems Manager with EC2 instances that contain a configuration agent to process the document.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-association.html}
 */
export type SSMAssociationProperties = {
  ApplyOnlyAtCronInterval?: boolean;
  /**
   * The name of the association.
   * @pattern `^[a-zA-Z0-9_\-.]{3,128}$`
   */
  AssociationName?: string;
  /**
   * @minLength `1`
   * @maxLength `50`
   */
  AutomationTargetParameterName?: string;
  CalendarNames?: string[];
  ComplianceSeverity?: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW" | "UNSPECIFIED";
  /**
   * The version of the SSM document to associate with the target.
   * @pattern `([$]LATEST|[$]DEFAULT|^[1-9][0-9]*$)`
   */
  DocumentVersion?: string;
  /**
   * The ID of the instance that the SSM document is associated with.
   * @pattern `(^i-(\w{8}|\w{17})$)|(^mi-\w{17}$)`
   */
  InstanceId?: string;
  /**
   * @pattern `^([1-9][0-9]{0,6}|[1-9][0-9]%|[1-9]%|100%)$`
   */
  MaxConcurrency?: string;
  /**
   * @pattern `^([1-9][0-9]{0,6}|[0]|[1-9][0-9]%|[0-9]%|100%)$`
   */
  MaxErrors?: string;
  /**
   * The name of the SSM document.
   * @pattern `^[a-zA-Z0-9_\-.:/]{3,200}$`
   */
  Name: string;
  OutputLocation?: InstanceAssociationOutputLocation;
  /**
   * Parameter values that the SSM document uses at runtime.
   */
  Parameters?: Record<string, string[]>;
  /**
   * A Cron or Rate expression that specifies when the association is applied to the target.
   * @minLength `1`
   * @maxLength `256`
   */
  ScheduleExpression?: string;
  /**
   * @min `1`
   * @max `6`
   */
  ScheduleOffset?: number;
  SyncCompliance?: "AUTO" | "MANUAL";
  /**
   * The targets that the SSM document sends commands to.
   * @minLength `0`
   * @maxLength `5`
   */
  Targets?: Target[];
  /**
   * @min `15`
   * @max `172800`
   */
  WaitForSuccessTimeoutSeconds?: number;
};
/**
 * Attribute type definition for `AWS::SSM::Association`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-association.html#aws-resource-ssm-association-return-values}
 */
export type SSMAssociationAttributes = {
  /**
   * Unique identifier of the association.
   * @pattern `[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}`
   */
  AssociationId: string;
};
/**
 * Type definition for `AWS::SSM::Association.InstanceAssociationOutputLocation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-association-instanceassociationoutputlocation.html}
 */
export type InstanceAssociationOutputLocation = {
  S3Location?: S3OutputLocation;
};
/**
 * Type definition for `AWS::SSM::Association.S3OutputLocation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-association-s3outputlocation.html}
 */
export type S3OutputLocation = {
  /**
   * @minLength `3`
   * @maxLength `63`
   */
  OutputS3BucketName?: string;
  /**
   * @maxLength `1024`
   */
  OutputS3KeyPrefix?: string;
  /**
   * @minLength `3`
   * @maxLength `20`
   */
  OutputS3Region?: string;
};
/**
 * Type definition for `AWS::SSM::Association.Target`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-association-target.html}
 */
export type Target = {
  /**
   * @pattern `^[\p{L}\p{Z}\p{N}_.:/=+\-@]{1,128}$|resource-groups:Name`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `50`
   */
  Values: string[];
};
/**
 * The AWS::SSM::Association resource associates an SSM document in AWS Systems Manager with EC2 instances that contain a configuration agent to process the document.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-association.html}
 */
export class SSMAssociation extends $Resource<
  "AWS::SSM::Association",
  SSMAssociationProperties,
  SSMAssociationAttributes
> {
  public static readonly Type = "AWS::SSM::Association";
  constructor(
    logicalId: string,
    properties: SSMAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SSMAssociation.Type, properties, options);
  }
}
