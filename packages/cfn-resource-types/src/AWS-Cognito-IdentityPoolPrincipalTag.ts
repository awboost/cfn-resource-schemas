import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Cognito::IdentityPoolPrincipalTag
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypoolprincipaltag.html}
 */
export type CognitoIdentityPoolPrincipalTagProperties = {
  IdentityPoolId: string;
  IdentityProviderName: string;
  PrincipalTags?: Record<string, any>;
  UseDefaults?: boolean;
};
/**
 * Resource Type definition for AWS::Cognito::IdentityPoolPrincipalTag
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypoolprincipaltag.html}
 */
export class CognitoIdentityPoolPrincipalTag extends $Resource<
  "AWS::Cognito::IdentityPoolPrincipalTag",
  CognitoIdentityPoolPrincipalTagProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::Cognito::IdentityPoolPrincipalTag";
  constructor(
    logicalId: string,
    properties: CognitoIdentityPoolPrincipalTagProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CognitoIdentityPoolPrincipalTag.Type, properties, options);
  }
}
