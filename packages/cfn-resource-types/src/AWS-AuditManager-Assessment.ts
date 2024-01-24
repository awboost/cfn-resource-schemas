import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::AuditManager::Assessment`.
 * An entity that defines the scope of audit evidence collected by AWS Audit Manager.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html}
 */
export type AuditManagerAssessmentProperties = {
  /**
   * The destination in which evidence reports are stored for the specified assessment.
   */
  AssessmentReportsDestination?: AssessmentReportsDestination;
  /**
   * The AWS account associated with the assessment.
   */
  AwsAccount?: AWSAccount;
  /**
   * The list of delegations.
   */
  Delegations?: Delegation[];
  /**
   * The description of the specified assessment.
   */
  Description?: string;
  /**
   * The identifier for the specified framework.
   * @minLength `32`
   * @maxLength `36`
   * @pattern `^([a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}|.*\S.*)$`
   */
  FrameworkId?: string;
  /**
   * The name of the related assessment.
   * @minLength `1`
   * @maxLength `127`
   * @pattern `^[a-zA-Z0-9-_\.]+$`
   */
  Name?: string;
  /**
   * The list of roles for the specified assessment.
   */
  Roles?: Role[];
  /**
   * The wrapper that contains the AWS accounts and AWS services in scope for the assessment.
   */
  Scope?: Scope;
  /**
   * The status of the specified assessment.
   */
  Status?: AssessmentStatus;
  /**
   * The tags associated with the assessment.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::AuditManager::Assessment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html#aws-resource-auditmanager-assessment-return-values}
 */
export type AuditManagerAssessmentAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the assessment.
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:.*:auditmanager:.*`
   */
  Arn: string;
  /**
   * @minLength `36`
   * @maxLength `36`
   * @pattern `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$`
   */
  AssessmentId: string;
  /**
   * The sequence of characters that identifies when the event occurred.
   */
  CreationTime: number;
};
/**
 * Type definition for `AWS::AuditManager::Assessment.AssessmentReportDestinationType`.
 * The destination type, such as Amazon S3.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-assessmentreportdestinationtype.html}
 */
export type AssessmentReportDestinationType = "S3";
/**
 * Type definition for `AWS::AuditManager::Assessment.AssessmentReportsDestination`.
 * The destination in which evidence reports are stored for the specified assessment.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-assessmentreportsdestination.html}
 */
export type AssessmentReportsDestination = {
  /**
   * The URL of the specified Amazon S3 bucket.
   */
  Destination?: string;
  /**
   * The destination type, such as Amazon S3.
   */
  DestinationType?: AssessmentReportDestinationType;
};
/**
 * Type definition for `AWS::AuditManager::Assessment.AssessmentStatus`.
 * The status of the specified assessment.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-assessmentstatus.html}
 */
export type AssessmentStatus = "ACTIVE" | "INACTIVE";
/**
 * Type definition for `AWS::AuditManager::Assessment.AWSAccount`.
 * The AWS account associated with the assessment.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-awsaccount.html}
 */
export type AWSAccount = {
  /**
   * The unique identifier for the email account.
   * @minLength `1`
   * @maxLength `320`
   * @pattern `^.*@.*$`
   */
  EmailAddress?: string;
  /**
   * The identifier for the specified AWS account.
   * @minLength `12`
   * @maxLength `12`
   * @pattern `^[0-9]{12}$`
   */
  Id?: string;
  /**
   * The name of the specified AWS account.
   * @minLength `1`
   * @maxLength `50`
   * @pattern `^[\u0020-\u007E]+$`
   */
  Name?: string;
};
/**
 * Type definition for `AWS::AuditManager::Assessment.AWSService`.
 * An AWS service such as Amazon S3, AWS CloudTrail, and so on.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-awsservice.html}
 */
export type AWSService = {
  /**
   * The name of the AWS service.
   */
  ServiceName?: string;
};
/**
 * Type definition for `AWS::AuditManager::Assessment.Delegation`.
 * The assignment of a control set to a delegate for review.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-delegation.html}
 */
export type Delegation = {
  /**
   * @minLength `36`
   * @maxLength `36`
   * @pattern `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$`
   */
  AssessmentId?: string;
  /**
   * The name of the related assessment.
   * @minLength `1`
   * @maxLength `127`
   * @pattern `^[a-zA-Z0-9-_\.]+$`
   */
  AssessmentName?: string;
  /**
   * The comment related to the delegation.
   * @maxLength `350`
   * @pattern `^[\w\W\s\S]*$`
   */
  Comment?: string;
  /**
   * The identifier for the specified control set.
   * @minLength `1`
   * @maxLength `300`
   * @pattern `^[\w\W\s\S]*$`
   */
  ControlSetId?: string;
  /**
   * The IAM user or role that performed the action.
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:.*:*:.*`
   */
  CreatedBy?: string;
  /**
   * The sequence of characters that identifies when the event occurred.
   */
  CreationTime?: number;
  /**
   * @minLength `36`
   * @maxLength `36`
   * @pattern `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$`
   */
  Id?: string;
  /**
   * The sequence of characters that identifies when the event occurred.
   */
  LastUpdated?: number;
  /**
   * The Amazon Resource Name (ARN) of the IAM user or role.
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:.*:iam:.*`
   */
  RoleArn?: string;
  /**
   *  The IAM role type.
   */
  RoleType?: RoleType;
  /**
   * The status of the delegation.
   */
  Status?: DelegationStatus;
};
/**
 * Type definition for `AWS::AuditManager::Assessment.DelegationStatus`.
 * The status of the delegation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-delegationstatus.html}
 */
export type DelegationStatus = "IN_PROGRESS" | "UNDER_REVIEW" | "COMPLETE";
/**
 * Type definition for `AWS::AuditManager::Assessment.Role`.
 * The wrapper that contains AWS Audit Manager role information, such as the role type and IAM ARN.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-role.html}
 */
export type Role = {
  /**
   * The Amazon Resource Name (ARN) of the IAM user or role.
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:.*:iam:.*`
   */
  RoleArn?: string;
  /**
   *  The IAM role type.
   */
  RoleType?: RoleType;
};
/**
 * Type definition for `AWS::AuditManager::Assessment.RoleType`.
 *  The IAM role type.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-roletype.html}
 */
export type RoleType = "PROCESS_OWNER" | "RESOURCE_OWNER";
/**
 * Type definition for `AWS::AuditManager::Assessment.Scope`.
 * The wrapper that contains the AWS accounts and AWS services in scope for the assessment.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-scope.html}
 */
export type Scope = {
  /**
   * The AWS accounts included in scope.
   */
  AwsAccounts?: AWSAccount[];
  /**
   * The AWS services included in scope.
   */
  AwsServices?: AWSService[];
};
/**
 * Type definition for `AWS::AuditManager::Assessment.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::AuditManager::Assessment`.
 * An entity that defines the scope of audit evidence collected by AWS Audit Manager.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html}
 */
export class AuditManagerAssessment extends $Resource<
  "AWS::AuditManager::Assessment",
  AuditManagerAssessmentProperties,
  AuditManagerAssessmentAttributes
> {
  public static readonly Type = "AWS::AuditManager::Assessment";
  constructor(
    logicalId: string,
    properties: AuditManagerAssessmentProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AuditManagerAssessment.Type, properties, options);
  }
}
