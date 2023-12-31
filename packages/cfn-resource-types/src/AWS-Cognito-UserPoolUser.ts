import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Cognito::UserPoolUser
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooluser.html}
 */
export type CognitoUserPoolUserProperties = {
  ClientMetadata?: Record<string, string>;
  DesiredDeliveryMediums?: string[];
  ForceAliasCreation?: boolean;
  MessageAction?: string;
  UserAttributes?: AttributeType[];
  UserPoolId: string;
  Username?: string;
  ValidationData?: AttributeType[];
};
/**
 * Type definition for `AWS::Cognito::UserPoolUser.AttributeType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpooluser-attributetype.html}
 */
export type AttributeType = {
  Name?: string;
  Value?: string;
};
/**
 * Resource Type definition for AWS::Cognito::UserPoolUser
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooluser.html}
 */
export class CognitoUserPoolUser extends $Resource<
  "AWS::Cognito::UserPoolUser",
  CognitoUserPoolUserProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::Cognito::UserPoolUser";
  constructor(
    logicalId: string,
    properties: CognitoUserPoolUserProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CognitoUserPoolUser.Type, properties, options);
  }
}
