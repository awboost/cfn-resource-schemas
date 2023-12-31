import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::Pinpoint::EmailTemplate
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-emailtemplate.html}
 */
export type PinpointEmailTemplateProperties = {
  DefaultSubstitutions?: string;
  HtmlPart?: string;
  Subject: string;
  Tags?: Record<string, any>;
  TemplateDescription?: string;
  TemplateName: string;
  TextPart?: string;
};
/**
 * Attribute type definition for `AWS::Pinpoint::EmailTemplate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-emailtemplate.html#aws-resource-pinpoint-emailtemplate-return-values}
 */
export type PinpointEmailTemplateAttributes = {
  Arn: string;
  Id: string;
};
/**
 * Resource Type definition for AWS::Pinpoint::EmailTemplate
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-emailtemplate.html}
 */
export class PinpointEmailTemplate extends $Resource<
  "AWS::Pinpoint::EmailTemplate",
  PinpointEmailTemplateProperties,
  PinpointEmailTemplateAttributes
> {
  public static readonly Type = "AWS::Pinpoint::EmailTemplate";
  public static readonly AttributeNames = ["Arn" as const, "Id" as const];
  constructor(
    logicalId: string,
    properties: PinpointEmailTemplateProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      PinpointEmailTemplate.Type,
      properties,
      PinpointEmailTemplate.AttributeNames,
      options,
    );
  }
}
