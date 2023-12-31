import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Cognito::IdentityPoolRoleAttachment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypoolroleattachment.html}
 */
export type CognitoIdentityPoolRoleAttachmentProperties = {
  IdentityPoolId: string;
  RoleMappings?: Record<string, any>;
  Roles?: Record<string, any>;
};
/**
 * Attribute type definition for `AWS::Cognito::IdentityPoolRoleAttachment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypoolroleattachment.html#aws-resource-cognito-identitypoolroleattachment-return-values}
 */
export type CognitoIdentityPoolRoleAttachmentAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::Cognito::IdentityPoolRoleAttachment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypoolroleattachment.html}
 */
export class CognitoIdentityPoolRoleAttachment extends $Resource<
  "AWS::Cognito::IdentityPoolRoleAttachment",
  CognitoIdentityPoolRoleAttachmentProperties,
  CognitoIdentityPoolRoleAttachmentAttributes
> {
  public static readonly Type = "AWS::Cognito::IdentityPoolRoleAttachment";
  constructor(
    logicalId: string,
    properties: CognitoIdentityPoolRoleAttachmentProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      CognitoIdentityPoolRoleAttachment.Type,
      properties,
      options,
    );
  }
}
