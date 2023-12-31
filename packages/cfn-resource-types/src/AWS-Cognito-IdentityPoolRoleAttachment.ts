import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: CognitoIdentityPoolRoleAttachmentProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      CognitoIdentityPoolRoleAttachment.Type,
      properties,
      CognitoIdentityPoolRoleAttachment.AttributeNames,
      options,
    );
  }
}
