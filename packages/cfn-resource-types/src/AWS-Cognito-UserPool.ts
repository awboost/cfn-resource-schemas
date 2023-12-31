import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::Cognito::UserPool
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpool.html}
 */
export type CognitoUserPoolProperties = {
  AccountRecoverySetting?: AccountRecoverySetting;
  AdminCreateUserConfig?: AdminCreateUserConfig;
  AliasAttributes?: string[];
  AutoVerifiedAttributes?: string[];
  DeletionProtection?: string;
  DeviceConfiguration?: DeviceConfiguration;
  EmailConfiguration?: EmailConfiguration;
  /**
   * @minLength `6`
   * @maxLength `20000`
   */
  EmailVerificationMessage?: string;
  /**
   * @minLength `1`
   * @maxLength `140`
   */
  EmailVerificationSubject?: string;
  EnabledMfas?: string[];
  LambdaConfig?: LambdaConfig;
  MfaConfiguration?: string;
  Policies?: Policies;
  Schema?: SchemaAttribute[];
  /**
   * @minLength `6`
   * @maxLength `140`
   */
  SmsAuthenticationMessage?: string;
  SmsConfiguration?: SmsConfiguration;
  /**
   * @minLength `6`
   * @maxLength `140`
   */
  SmsVerificationMessage?: string;
  UserAttributeUpdateSettings?: UserAttributeUpdateSettings;
  UserPoolAddOns?: UserPoolAddOns;
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  UserPoolName?: string;
  UserPoolTags?: Record<string, string>;
  UsernameAttributes?: string[];
  UsernameConfiguration?: UsernameConfiguration;
  VerificationMessageTemplate?: VerificationMessageTemplate;
};
/**
 * Attribute type definition for `AWS::Cognito::UserPool`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpool.html#aws-resource-cognito-userpool-return-values}
 */
export type CognitoUserPoolAttributes = {
  Arn: string;
  ProviderName: string;
  ProviderURL: string;
  UserPoolId: string;
};
/**
 * Type definition for `AWS::Cognito::UserPool.AccountRecoverySetting`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-accountrecoverysetting.html}
 */
export type AccountRecoverySetting = {
  RecoveryMechanisms?: RecoveryOption[];
};
/**
 * Type definition for `AWS::Cognito::UserPool.AdminCreateUserConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-admincreateuserconfig.html}
 */
export type AdminCreateUserConfig = {
  AllowAdminCreateUserOnly?: boolean;
  InviteMessageTemplate?: InviteMessageTemplate;
  UnusedAccountValidityDays?: number;
};
/**
 * Type definition for `AWS::Cognito::UserPool.CustomEmailSender`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-customemailsender.html}
 */
export type CustomEmailSender = {
  LambdaArn?: string;
  LambdaVersion?: string;
};
/**
 * Type definition for `AWS::Cognito::UserPool.CustomSMSSender`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-customsmssender.html}
 */
export type CustomSMSSender = {
  LambdaArn?: string;
  LambdaVersion?: string;
};
/**
 * Type definition for `AWS::Cognito::UserPool.DeviceConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-deviceconfiguration.html}
 */
export type DeviceConfiguration = {
  ChallengeRequiredOnNewDevice?: boolean;
  DeviceOnlyRememberedOnUserPrompt?: boolean;
};
/**
 * Type definition for `AWS::Cognito::UserPool.EmailConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-emailconfiguration.html}
 */
export type EmailConfiguration = {
  ConfigurationSet?: string;
  EmailSendingAccount?: string;
  From?: string;
  ReplyToEmailAddress?: string;
  SourceArn?: string;
};
/**
 * Type definition for `AWS::Cognito::UserPool.InviteMessageTemplate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-invitemessagetemplate.html}
 */
export type InviteMessageTemplate = {
  EmailMessage?: string;
  EmailSubject?: string;
  SMSMessage?: string;
};
/**
 * Type definition for `AWS::Cognito::UserPool.LambdaConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-lambdaconfig.html}
 */
export type LambdaConfig = {
  CreateAuthChallenge?: string;
  CustomEmailSender?: CustomEmailSender;
  CustomMessage?: string;
  CustomSMSSender?: CustomSMSSender;
  DefineAuthChallenge?: string;
  KMSKeyID?: string;
  PostAuthentication?: string;
  PostConfirmation?: string;
  PreAuthentication?: string;
  PreSignUp?: string;
  PreTokenGeneration?: string;
  UserMigration?: string;
  VerifyAuthChallengeResponse?: string;
};
/**
 * Type definition for `AWS::Cognito::UserPool.NumberAttributeConstraints`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-numberattributeconstraints.html}
 */
export type NumberAttributeConstraints = {
  MaxValue?: string;
  MinValue?: string;
};
/**
 * Type definition for `AWS::Cognito::UserPool.PasswordPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-passwordpolicy.html}
 */
export type PasswordPolicy = {
  MinimumLength?: number;
  RequireLowercase?: boolean;
  RequireNumbers?: boolean;
  RequireSymbols?: boolean;
  RequireUppercase?: boolean;
  TemporaryPasswordValidityDays?: number;
};
/**
 * Type definition for `AWS::Cognito::UserPool.Policies`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-policies.html}
 */
export type Policies = {
  PasswordPolicy?: PasswordPolicy;
};
/**
 * Type definition for `AWS::Cognito::UserPool.RecoveryOption`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-recoveryoption.html}
 */
export type RecoveryOption = {
  Name?: string;
  Priority?: number;
};
/**
 * Type definition for `AWS::Cognito::UserPool.SchemaAttribute`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-schemaattribute.html}
 */
export type SchemaAttribute = {
  AttributeDataType?: string;
  DeveloperOnlyAttribute?: boolean;
  Mutable?: boolean;
  Name?: string;
  NumberAttributeConstraints?: NumberAttributeConstraints;
  Required?: boolean;
  StringAttributeConstraints?: StringAttributeConstraints;
};
/**
 * Type definition for `AWS::Cognito::UserPool.SmsConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-smsconfiguration.html}
 */
export type SmsConfiguration = {
  ExternalId?: string;
  SnsCallerArn?: string;
  SnsRegion?: string;
};
/**
 * Type definition for `AWS::Cognito::UserPool.StringAttributeConstraints`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-stringattributeconstraints.html}
 */
export type StringAttributeConstraints = {
  MaxLength?: string;
  MinLength?: string;
};
/**
 * Type definition for `AWS::Cognito::UserPool.UserAttributeUpdateSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-userattributeupdatesettings.html}
 */
export type UserAttributeUpdateSettings = {
  AttributesRequireVerificationBeforeUpdate: string[];
};
/**
 * Type definition for `AWS::Cognito::UserPool.UserPoolAddOns`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-userpooladdons.html}
 */
export type UserPoolAddOns = {
  AdvancedSecurityMode?: string;
};
/**
 * Type definition for `AWS::Cognito::UserPool.UsernameConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-usernameconfiguration.html}
 */
export type UsernameConfiguration = {
  CaseSensitive?: boolean;
};
/**
 * Type definition for `AWS::Cognito::UserPool.VerificationMessageTemplate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-verificationmessagetemplate.html}
 */
export type VerificationMessageTemplate = {
  DefaultEmailOption?: string;
  EmailMessage?: string;
  EmailMessageByLink?: string;
  EmailSubject?: string;
  EmailSubjectByLink?: string;
  SmsMessage?: string;
};
/**
 * Resource Type definition for AWS::Cognito::UserPool
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpool.html}
 */
export class CognitoUserPool extends $Resource<
  "AWS::Cognito::UserPool",
  CognitoUserPoolProperties,
  CognitoUserPoolAttributes
> {
  public static readonly Type = "AWS::Cognito::UserPool";
  public static readonly AttributeNames = [
    "Arn" as const,
    "ProviderName" as const,
    "ProviderURL" as const,
    "UserPoolId" as const,
  ];
  constructor(
    logicalId: string,
    properties: CognitoUserPoolProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      CognitoUserPool.Type,
      properties,
      CognitoUserPool.AttributeNames,
      options,
    );
  }
}
