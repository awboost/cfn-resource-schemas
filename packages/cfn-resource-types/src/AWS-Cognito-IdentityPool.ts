import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Cognito::IdentityPool
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypool.html}
 */
export type CognitoIdentityPoolProperties = {
  AllowClassicFlow?: boolean;
  AllowUnauthenticatedIdentities: boolean;
  CognitoEvents?: Record<string, any>;
  CognitoIdentityProviders?: CognitoIdentityProvider[];
  CognitoStreams?: CognitoStreams;
  DeveloperProviderName?: string;
  IdentityPoolName?: string;
  OpenIdConnectProviderARNs?: string[];
  PushSync?: PushSync;
  SamlProviderARNs?: string[];
  SupportedLoginProviders?: Record<string, any>;
};
/**
 * Attribute type definition for `AWS::Cognito::IdentityPool`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypool.html#aws-resource-cognito-identitypool-return-values}
 */
export type CognitoIdentityPoolAttributes = {
  Id: string;
  Name: string;
};
/**
 * Type definition for `AWS::Cognito::IdentityPool.CognitoIdentityProvider`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-identitypool-cognitoidentityprovider.html}
 */
export type CognitoIdentityProvider = {
  ClientId: string;
  ProviderName: string;
  ServerSideTokenCheck?: boolean;
};
/**
 * Type definition for `AWS::Cognito::IdentityPool.CognitoStreams`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-identitypool-cognitostreams.html}
 */
export type CognitoStreams = {
  RoleArn?: string;
  StreamName?: string;
  StreamingStatus?: string;
};
/**
 * Type definition for `AWS::Cognito::IdentityPool.PushSync`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-identitypool-pushsync.html}
 */
export type PushSync = {
  ApplicationArns?: string[];
  RoleArn?: string;
};
/**
 * Resource Type definition for AWS::Cognito::IdentityPool
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypool.html}
 */
export class CognitoIdentityPool extends $Resource<
  "AWS::Cognito::IdentityPool",
  CognitoIdentityPoolProperties,
  CognitoIdentityPoolAttributes
> {
  public static readonly Type = "AWS::Cognito::IdentityPool";
  constructor(
    logicalId: string,
    properties: CognitoIdentityPoolProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CognitoIdentityPool.Type, properties, options);
  }
}
