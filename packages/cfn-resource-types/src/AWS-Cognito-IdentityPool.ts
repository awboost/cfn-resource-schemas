import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
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
  /**
   * An array of key-value pairs to apply to this resource.
   */
  IdentityPoolTags?: Tag[];
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
 * Type definition for `AWS::Cognito::IdentityPool.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-identitypool-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
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
