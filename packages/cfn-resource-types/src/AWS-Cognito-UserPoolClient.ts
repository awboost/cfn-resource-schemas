import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Cognito::UserPoolClient
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolclient.html}
 */
export type CognitoUserPoolClientProperties = {
  /**
   * @min `1`
   * @max `86400`
   */
  AccessTokenValidity?: number;
  AllowedOAuthFlows?: string[];
  AllowedOAuthFlowsUserPoolClient?: boolean;
  AllowedOAuthScopes?: string[];
  AnalyticsConfiguration?: AnalyticsConfiguration;
  /**
   * @min `3`
   * @max `15`
   */
  AuthSessionValidity?: number;
  CallbackURLs?: string[];
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  ClientName?: string;
  DefaultRedirectURI?: string;
  EnablePropagateAdditionalUserContextData?: boolean;
  EnableTokenRevocation?: boolean;
  ExplicitAuthFlows?: string[];
  GenerateSecret?: boolean;
  /**
   * @min `1`
   * @max `86400`
   */
  IdTokenValidity?: number;
  LogoutURLs?: string[];
  PreventUserExistenceErrors?: string;
  ReadAttributes?: string[];
  RefreshTokenRotation?: RefreshTokenRotation;
  /**
   * @min `1`
   * @max `315360000`
   */
  RefreshTokenValidity?: number;
  SupportedIdentityProviders?: string[];
  TokenValidityUnits?: TokenValidityUnits;
  UserPoolId: string;
  WriteAttributes?: string[];
};
/**
 * Attribute type definition for `AWS::Cognito::UserPoolClient`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolclient.html#aws-resource-cognito-userpoolclient-return-values}
 */
export type CognitoUserPoolClientAttributes = {
  ClientId: string;
  ClientSecret: string;
  Name: string;
};
/**
 * Type definition for `AWS::Cognito::UserPoolClient.AnalyticsConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolclient-analyticsconfiguration.html}
 */
export type AnalyticsConfiguration = {
  ApplicationArn?: string;
  ApplicationId?: string;
  ExternalId?: string;
  RoleArn?: string;
  UserDataShared?: boolean;
};
/**
 * Type definition for `AWS::Cognito::UserPoolClient.RefreshTokenRotation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolclient-refreshtokenrotation.html}
 */
export type RefreshTokenRotation = {
  Feature?: "ENABLED" | "DISABLED";
  /**
   * @min `0`
   * @max `60`
   */
  RetryGracePeriodSeconds?: number;
};
/**
 * Type definition for `AWS::Cognito::UserPoolClient.TokenValidityUnits`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolclient-tokenvalidityunits.html}
 */
export type TokenValidityUnits = {
  AccessToken?: string;
  IdToken?: string;
  RefreshToken?: string;
};
/**
 * Resource Type definition for AWS::Cognito::UserPoolClient
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolclient.html}
 */
export class CognitoUserPoolClient extends $Resource<
  "AWS::Cognito::UserPoolClient",
  CognitoUserPoolClientProperties,
  CognitoUserPoolClientAttributes
> {
  public static readonly Type = "AWS::Cognito::UserPoolClient";
  constructor(
    logicalId: string,
    properties: CognitoUserPoolClientProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CognitoUserPoolClient.Type, properties, options);
  }
}
