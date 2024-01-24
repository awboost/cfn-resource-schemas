import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Pinpoint::SmsTemplate
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-smstemplate.html}
 */
export type PinpointSmsTemplateProperties = {
  Body: string;
  DefaultSubstitutions?: string;
  Tags?: Record<string, any>;
  TemplateDescription?: string;
  TemplateName: string;
};
/**
 * Attribute type definition for `AWS::Pinpoint::SmsTemplate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-smstemplate.html#aws-resource-pinpoint-smstemplate-return-values}
 */
export type PinpointSmsTemplateAttributes = {
  Arn: string;
  Id: string;
};
/**
 * Resource Type definition for AWS::Pinpoint::SmsTemplate
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-smstemplate.html}
 */
export class PinpointSmsTemplate extends $Resource<
  "AWS::Pinpoint::SmsTemplate",
  PinpointSmsTemplateProperties,
  PinpointSmsTemplateAttributes
> {
  public static readonly Type = "AWS::Pinpoint::SmsTemplate";
  constructor(
    logicalId: string,
    properties: PinpointSmsTemplateProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, PinpointSmsTemplate.Type, properties, options);
  }
}
