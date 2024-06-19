import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Cognito::UserPoolResourceServer
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolresourceserver.html}
 */
export type CognitoUserPoolResourceServerProperties = {
  Identifier: string;
  Name: string;
  Scopes?: ResourceServerScopeType[];
  UserPoolId: string;
};
/**
 * Type definition for `AWS::Cognito::UserPoolResourceServer.ResourceServerScopeType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolresourceserver-resourceserverscopetype.html}
 */
export type ResourceServerScopeType = {
  ScopeDescription: string;
  ScopeName: string;
};
/**
 * Resource Type definition for AWS::Cognito::UserPoolResourceServer
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolresourceserver.html}
 */
export class CognitoUserPoolResourceServer extends $Resource<
  "AWS::Cognito::UserPoolResourceServer",
  CognitoUserPoolResourceServerProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::Cognito::UserPoolResourceServer";
  constructor(
    logicalId: string,
    properties: CognitoUserPoolResourceServerProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CognitoUserPoolResourceServer.Type, properties, options);
  }
}
