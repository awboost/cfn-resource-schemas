import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Cognito::IdentityPoolRoleAttachment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypoolroleattachment.html}
 */
export type CognitoIdentityPoolRoleAttachmentProperties = {
  IdentityPoolId: string;
  RoleMappings?: Record<string, RoleMapping>;
  Roles?: Record<string, string>;
};
/**
 * Attribute type definition for `AWS::Cognito::IdentityPoolRoleAttachment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypoolroleattachment.html#aws-resource-cognito-identitypoolroleattachment-return-values}
 */
export type CognitoIdentityPoolRoleAttachmentAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::Cognito::IdentityPoolRoleAttachment.MappingRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-identitypoolroleattachment-mappingrule.html}
 */
export type MappingRule = {
  Claim: string;
  MatchType: string;
  RoleARN: string;
  Value: string;
};
/**
 * Type definition for `AWS::Cognito::IdentityPoolRoleAttachment.RoleMapping`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-identitypoolroleattachment-rolemapping.html}
 */
export type RoleMapping = {
  AmbiguousRoleResolution?: string;
  IdentityProvider?: string;
  RulesConfiguration?: RulesConfigurationType;
  Type: string;
};
/**
 * Type definition for `AWS::Cognito::IdentityPoolRoleAttachment.RulesConfigurationType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-identitypoolroleattachment-rulesconfigurationtype.html}
 */
export type RulesConfigurationType = {
  Rules: MappingRule[];
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
