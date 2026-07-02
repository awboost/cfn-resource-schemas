import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Cognito::UserPoolRegionalConfigurationAttachment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolregionalconfigurationattachment.html}
 */
export type CognitoUserPoolRegionalConfigurationAttachmentProperties = {
  EmailConfiguration?: EmailConfiguration;
  LambdaConfig?: LambdaConfig;
  SmsConfiguration?: SmsConfiguration;
  /**
   * The status of the replica. Set to ACTIVE or INACTIVE.
   */
  Status?: string;
  UserPoolId: string;
  UserPoolTags?: Record<string, string>;
};
/**
 * Type definition for `AWS::Cognito::UserPoolRegionalConfigurationAttachment.CustomEmailSender`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolregionalconfigurationattachment-customemailsender.html}
 */
export type CustomEmailSender = {
  LambdaArn?: string;
  LambdaVersion?: string;
};
/**
 * Type definition for `AWS::Cognito::UserPoolRegionalConfigurationAttachment.CustomSMSSender`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolregionalconfigurationattachment-customsmssender.html}
 */
export type CustomSMSSender = {
  LambdaArn?: string;
  LambdaVersion?: string;
};
/**
 * Type definition for `AWS::Cognito::UserPoolRegionalConfigurationAttachment.EmailConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolregionalconfigurationattachment-emailconfiguration.html}
 */
export type EmailConfiguration = {
  ConfigurationSet?: string;
  EmailSendingAccount?: string;
  From?: string;
  ReplyToEmailAddress?: string;
  SourceArn?: string;
};
/**
 * Type definition for `AWS::Cognito::UserPoolRegionalConfigurationAttachment.InboundFederation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolregionalconfigurationattachment-inboundfederation.html}
 */
export type InboundFederation = {
  LambdaArn?: string;
  LambdaVersion?: string;
};
/**
 * Type definition for `AWS::Cognito::UserPoolRegionalConfigurationAttachment.LambdaConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolregionalconfigurationattachment-lambdaconfig.html}
 */
export type LambdaConfig = {
  CreateAuthChallenge?: string;
  CustomEmailSender?: CustomEmailSender;
  CustomMessage?: string;
  CustomSMSSender?: CustomSMSSender;
  DefineAuthChallenge?: string;
  InboundFederation?: InboundFederation;
  KMSKeyID?: string;
  PostAuthentication?: string;
  PostConfirmation?: string;
  PreAuthentication?: string;
  PreSignUp?: string;
  PreTokenGeneration?: string;
  PreTokenGenerationConfig?: PreTokenGenerationConfig;
  UserMigration?: string;
  VerifyAuthChallengeResponse?: string;
};
/**
 * Type definition for `AWS::Cognito::UserPoolRegionalConfigurationAttachment.PreTokenGenerationConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolregionalconfigurationattachment-pretokengenerationconfig.html}
 */
export type PreTokenGenerationConfig = {
  LambdaArn?: string;
  LambdaVersion?: string;
};
/**
 * Type definition for `AWS::Cognito::UserPoolRegionalConfigurationAttachment.SmsConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolregionalconfigurationattachment-smsconfiguration.html}
 */
export type SmsConfiguration = {
  ExternalId?: string;
  SnsCallerArn?: string;
  SnsRegion?: string;
};
/**
 * Resource Type definition for AWS::Cognito::UserPoolRegionalConfigurationAttachment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolregionalconfigurationattachment.html}
 */
export class CognitoUserPoolRegionalConfigurationAttachment extends $Resource<
  "AWS::Cognito::UserPoolRegionalConfigurationAttachment",
  CognitoUserPoolRegionalConfigurationAttachmentProperties,
  Record<string, never>
> {
  public static readonly Type =
    "AWS::Cognito::UserPoolRegionalConfigurationAttachment";
  constructor(
    logicalId: string,
    properties: CognitoUserPoolRegionalConfigurationAttachmentProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      CognitoUserPoolRegionalConfigurationAttachment.Type,
      properties,
      options,
    );
  }
}
