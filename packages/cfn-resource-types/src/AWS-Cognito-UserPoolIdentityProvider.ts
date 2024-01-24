import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Cognito::UserPoolIdentityProvider
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolidentityprovider.html}
 */
export type CognitoUserPoolIdentityProviderProperties = {
  AttributeMapping?: Record<string, any>;
  IdpIdentifiers?: string[];
  ProviderDetails?: Record<string, any>;
  ProviderName: string;
  ProviderType: string;
  UserPoolId: string;
};
/**
 * Attribute type definition for `AWS::Cognito::UserPoolIdentityProvider`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolidentityprovider.html#aws-resource-cognito-userpoolidentityprovider-return-values}
 */
export type CognitoUserPoolIdentityProviderAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::Cognito::UserPoolIdentityProvider
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolidentityprovider.html}
 */
export class CognitoUserPoolIdentityProvider extends $Resource<
  "AWS::Cognito::UserPoolIdentityProvider",
  CognitoUserPoolIdentityProviderProperties,
  CognitoUserPoolIdentityProviderAttributes
> {
  public static readonly Type = "AWS::Cognito::UserPoolIdentityProvider";
  constructor(
    logicalId: string,
    properties: CognitoUserPoolIdentityProviderProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CognitoUserPoolIdentityProvider.Type, properties, options);
  }
}
