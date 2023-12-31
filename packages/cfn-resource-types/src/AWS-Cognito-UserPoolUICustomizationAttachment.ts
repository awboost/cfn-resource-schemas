import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Cognito::UserPoolUICustomizationAttachment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooluicustomizationattachment.html}
 */
export type CognitoUserPoolUICustomizationAttachmentProperties = {
  CSS?: string;
  ClientId: string;
  UserPoolId: string;
};
/**
 * Attribute type definition for `AWS::Cognito::UserPoolUICustomizationAttachment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooluicustomizationattachment.html#aws-resource-cognito-userpooluicustomizationattachment-return-values}
 */
export type CognitoUserPoolUICustomizationAttachmentAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::Cognito::UserPoolUICustomizationAttachment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooluicustomizationattachment.html}
 */
export class CognitoUserPoolUICustomizationAttachment extends $Resource<
  "AWS::Cognito::UserPoolUICustomizationAttachment",
  CognitoUserPoolUICustomizationAttachmentProperties,
  CognitoUserPoolUICustomizationAttachmentAttributes
> {
  public static readonly Type =
    "AWS::Cognito::UserPoolUICustomizationAttachment";
  constructor(
    logicalId: string,
    properties: CognitoUserPoolUICustomizationAttachmentProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      CognitoUserPoolUICustomizationAttachment.Type,
      properties,
      options,
    );
  }
}
