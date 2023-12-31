import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Cognito::UserPoolUserToGroupAttachment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolusertogroupattachment.html}
 */
export type CognitoUserPoolUserToGroupAttachmentProperties = {
  GroupName: string;
  UserPoolId: string;
  Username: string;
};
/**
 * Resource Type definition for AWS::Cognito::UserPoolUserToGroupAttachment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolusertogroupattachment.html}
 */
export class CognitoUserPoolUserToGroupAttachment extends $Resource<
  "AWS::Cognito::UserPoolUserToGroupAttachment",
  CognitoUserPoolUserToGroupAttachmentProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::Cognito::UserPoolUserToGroupAttachment";
  constructor(
    logicalId: string,
    properties: CognitoUserPoolUserToGroupAttachmentProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      CognitoUserPoolUserToGroupAttachment.Type,
      properties,
      options,
    );
  }
}
