import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: CognitoUserPoolUICustomizationAttachmentProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      CognitoUserPoolUICustomizationAttachment.Type,
      properties,
      CognitoUserPoolUICustomizationAttachment.AttributeNames,
      options,
    );
  }
}
