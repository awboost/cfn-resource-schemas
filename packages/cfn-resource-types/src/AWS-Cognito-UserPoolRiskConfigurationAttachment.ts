import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Cognito::UserPoolRiskConfigurationAttachment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolriskconfigurationattachment.html}
 */
export type CognitoUserPoolRiskConfigurationAttachmentProperties = {
  AccountTakeoverRiskConfiguration?: AccountTakeoverRiskConfigurationType;
  ClientId: string;
  CompromisedCredentialsRiskConfiguration?: CompromisedCredentialsRiskConfigurationType;
  RiskExceptionConfiguration?: RiskExceptionConfigurationType;
  UserPoolId: string;
};
/**
 * Attribute type definition for `AWS::Cognito::UserPoolRiskConfigurationAttachment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolriskconfigurationattachment.html#aws-resource-cognito-userpoolriskconfigurationattachment-return-values}
 */
export type CognitoUserPoolRiskConfigurationAttachmentAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::Cognito::UserPoolRiskConfigurationAttachment.AccountTakeoverActionsType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolriskconfigurationattachment-accounttakeoveractionstype.html}
 */
export type AccountTakeoverActionsType = {
  HighAction?: AccountTakeoverActionType;
  LowAction?: AccountTakeoverActionType;
  MediumAction?: AccountTakeoverActionType;
};
/**
 * Type definition for `AWS::Cognito::UserPoolRiskConfigurationAttachment.AccountTakeoverActionType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolriskconfigurationattachment-accounttakeoveractiontype.html}
 */
export type AccountTakeoverActionType = {
  EventAction: string;
  Notify: boolean;
};
/**
 * Type definition for `AWS::Cognito::UserPoolRiskConfigurationAttachment.AccountTakeoverRiskConfigurationType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolriskconfigurationattachment-accounttakeoverriskconfigurationtype.html}
 */
export type AccountTakeoverRiskConfigurationType = {
  Actions: AccountTakeoverActionsType;
  NotifyConfiguration?: NotifyConfigurationType;
};
/**
 * Type definition for `AWS::Cognito::UserPoolRiskConfigurationAttachment.CompromisedCredentialsActionsType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolriskconfigurationattachment-compromisedcredentialsactionstype.html}
 */
export type CompromisedCredentialsActionsType = {
  EventAction: string;
};
/**
 * Type definition for `AWS::Cognito::UserPoolRiskConfigurationAttachment.CompromisedCredentialsRiskConfigurationType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolriskconfigurationattachment-compromisedcredentialsriskconfigurationtype.html}
 */
export type CompromisedCredentialsRiskConfigurationType = {
  Actions: CompromisedCredentialsActionsType;
  EventFilter?: string[];
};
/**
 * Type definition for `AWS::Cognito::UserPoolRiskConfigurationAttachment.NotifyConfigurationType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolriskconfigurationattachment-notifyconfigurationtype.html}
 */
export type NotifyConfigurationType = {
  BlockEmail?: NotifyEmailType;
  From?: string;
  MfaEmail?: NotifyEmailType;
  NoActionEmail?: NotifyEmailType;
  ReplyTo?: string;
  SourceArn: string;
};
/**
 * Type definition for `AWS::Cognito::UserPoolRiskConfigurationAttachment.NotifyEmailType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolriskconfigurationattachment-notifyemailtype.html}
 */
export type NotifyEmailType = {
  HtmlBody?: string;
  Subject: string;
  TextBody?: string;
};
/**
 * Type definition for `AWS::Cognito::UserPoolRiskConfigurationAttachment.RiskExceptionConfigurationType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolriskconfigurationattachment-riskexceptionconfigurationtype.html}
 */
export type RiskExceptionConfigurationType = {
  BlockedIPRangeList?: string[];
  SkippedIPRangeList?: string[];
};
/**
 * Resource Type definition for AWS::Cognito::UserPoolRiskConfigurationAttachment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolriskconfigurationattachment.html}
 */
export class CognitoUserPoolRiskConfigurationAttachment extends $Resource<
  "AWS::Cognito::UserPoolRiskConfigurationAttachment",
  CognitoUserPoolRiskConfigurationAttachmentProperties,
  CognitoUserPoolRiskConfigurationAttachmentAttributes
> {
  public static readonly Type =
    "AWS::Cognito::UserPoolRiskConfigurationAttachment";
  constructor(
    logicalId: string,
    properties: CognitoUserPoolRiskConfigurationAttachmentProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      CognitoUserPoolRiskConfigurationAttachment.Type,
      properties,
      options,
    );
  }
}
