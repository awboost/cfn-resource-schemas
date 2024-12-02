import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::SES::ReceiptRule
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-receiptrule.html}
 */
export type SESReceiptRuleProperties = {
  After?: string;
  Rule: Rule;
  RuleSetName: string;
};
/**
 * Attribute type definition for `AWS::SES::ReceiptRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-receiptrule.html#aws-resource-ses-receiptrule-return-values}
 */
export type SESReceiptRuleAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::SES::ReceiptRule.Action`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-action.html}
 */
export type Action = {
  AddHeaderAction?: AddHeaderAction;
  BounceAction?: BounceAction;
  ConnectAction?: ConnectAction;
  LambdaAction?: LambdaAction;
  S3Action?: S3Action;
  SNSAction?: SNSAction;
  StopAction?: StopAction;
  WorkmailAction?: WorkmailAction;
};
/**
 * Type definition for `AWS::SES::ReceiptRule.AddHeaderAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-addheaderaction.html}
 */
export type AddHeaderAction = {
  HeaderName: string;
  HeaderValue: string;
};
/**
 * Type definition for `AWS::SES::ReceiptRule.BounceAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-bounceaction.html}
 */
export type BounceAction = {
  Message: string;
  Sender: string;
  SmtpReplyCode: string;
  StatusCode?: string;
  TopicArn?: string;
};
/**
 * Type definition for `AWS::SES::ReceiptRule.ConnectAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-connectaction.html}
 */
export type ConnectAction = {
  IAMRoleARN: string;
  InstanceARN: string;
};
/**
 * Type definition for `AWS::SES::ReceiptRule.LambdaAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-lambdaaction.html}
 */
export type LambdaAction = {
  FunctionArn: string;
  InvocationType?: string;
  TopicArn?: string;
};
/**
 * Type definition for `AWS::SES::ReceiptRule.Rule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-rule.html}
 */
export type Rule = {
  Actions?: Action[];
  Enabled?: boolean;
  Name?: string;
  Recipients?: string[];
  ScanEnabled?: boolean;
  TlsPolicy?: string;
};
/**
 * Type definition for `AWS::SES::ReceiptRule.S3Action`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-s3action.html}
 */
export type S3Action = {
  BucketName: string;
  IamRoleArn?: string;
  KmsKeyArn?: string;
  ObjectKeyPrefix?: string;
  TopicArn?: string;
};
/**
 * Type definition for `AWS::SES::ReceiptRule.SNSAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-snsaction.html}
 */
export type SNSAction = {
  Encoding?: string;
  TopicArn?: string;
};
/**
 * Type definition for `AWS::SES::ReceiptRule.StopAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-stopaction.html}
 */
export type StopAction = {
  Scope: string;
  TopicArn?: string;
};
/**
 * Type definition for `AWS::SES::ReceiptRule.WorkmailAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-workmailaction.html}
 */
export type WorkmailAction = {
  OrganizationArn: string;
  TopicArn?: string;
};
/**
 * Resource Type definition for AWS::SES::ReceiptRule
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-receiptrule.html}
 */
export class SESReceiptRule extends $Resource<
  "AWS::SES::ReceiptRule",
  SESReceiptRuleProperties,
  SESReceiptRuleAttributes
> {
  public static readonly Type = "AWS::SES::ReceiptRule";
  constructor(
    logicalId: string,
    properties: SESReceiptRuleProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SESReceiptRule.Type, properties, options);
  }
}
