import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::SES::Template
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-template.html}
 */
export type SESTemplateProperties = {
  /**
   * The content of the email, composed of a subject line, an HTML part, and a text-only part
   */
  Template?: Template;
};
/**
 * Attribute type definition for `AWS::SES::Template`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-template.html#aws-resource-ses-template-return-values}
 */
export type SESTemplateAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::SES::Template.Template`.
 * The content of the email, composed of a subject line, an HTML part, and a text-only part
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-template-template.html}
 */
export type Template = {
  /**
   * The HTML body of the email.
   */
  HtmlPart?: string;
  /**
   * The subject line of the email.
   */
  SubjectPart: string;
  /**
   * The name of the template.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[a-zA-Z0-9_-]{1,64}$`
   */
  TemplateName?: string;
  /**
   * The email body that is visible to recipients whose email clients do not display HTML content.
   */
  TextPart?: string;
};
/**
 * Resource Type definition for AWS::SES::Template
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-template.html}
 */
export class SESTemplate extends $Resource<
  "AWS::SES::Template",
  SESTemplateProperties,
  SESTemplateAttributes
> {
  public static readonly Type = "AWS::SES::Template";
  constructor(
    logicalId: string,
    properties: SESTemplateProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SESTemplate.Type, properties, options);
  }
}
