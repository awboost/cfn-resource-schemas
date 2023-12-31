import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: CognitoUserPoolUserToGroupAttachmentProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      CognitoUserPoolUserToGroupAttachment.Type,
      properties,
      CognitoUserPoolUserToGroupAttachment.AttributeNames,
      options,
    );
  }
}
