import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: CognitoIdentityPoolPrincipalTagProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      CognitoIdentityPoolPrincipalTag.Type,
      properties,
      CognitoIdentityPoolPrincipalTag.AttributeNames,
      options,
    );
  }
}
