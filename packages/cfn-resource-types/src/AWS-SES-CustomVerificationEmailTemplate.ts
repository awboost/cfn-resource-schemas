import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::SES::CustomVerificationEmailTemplate.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-customverificationemailtemplate.html}
 */
export type SESCustomVerificationEmailTemplateProperties = {
  /**
   * The URL that the recipient of the verification email is sent to if his or her address is not successfully verified.
   */
  FailureRedirectionURL: string;
  /**
   * The email address that the custom verification email is sent from.
   */
  FromEmailAddress: string;
  /**
   * The URL that the recipient of the verification email is sent to if his or her address is successfully verified.
   */
  SuccessRedirectionURL: string;
  /**
   * The tags (keys and values) associated with the tenant.
   * @minLength `0`
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * The content of the custom verification email. The total size of the email must be less than 10 MB. The message body may contain HTML, with some limitations.
   */
  TemplateContent: string;
  /**
   * The name of the custom verification email template.
   * @minLength `1`
   * @maxLength `64`
   */
  TemplateName: string;
  /**
   * The subject line of the custom verification email.
   */
  TemplateSubject: string;
};
/**
 * Type definition for `AWS::SES::CustomVerificationEmailTemplate.Tag`.
 * An object that defines the tags (keys and values) that you want to associate with the tenant.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-customverificationemailtemplate-tag.html}
 */
export type Tag = {
  /**
   * The key of the key-value tag.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value of the key-value tag.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::SES::CustomVerificationEmailTemplate.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-customverificationemailtemplate.html}
 */
export class SESCustomVerificationEmailTemplate extends $Resource<
  "AWS::SES::CustomVerificationEmailTemplate",
  SESCustomVerificationEmailTemplateProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::SES::CustomVerificationEmailTemplate";
  constructor(
    logicalId: string,
    properties: SESCustomVerificationEmailTemplateProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      SESCustomVerificationEmailTemplate.Type,
      properties,
      options,
    );
  }
}
