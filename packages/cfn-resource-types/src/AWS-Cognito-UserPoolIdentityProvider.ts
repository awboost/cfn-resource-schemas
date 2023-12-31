import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: CognitoUserPoolIdentityProviderProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      CognitoUserPoolIdentityProvider.Type,
      properties,
      CognitoUserPoolIdentityProvider.AttributeNames,
      options,
    );
  }
}
