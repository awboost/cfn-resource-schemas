import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Pinpoint::PushTemplate
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-pushtemplate.html}
 */
export type PinpointPushTemplateProperties = {
  ADM?: AndroidPushNotificationTemplate;
  APNS?: APNSPushNotificationTemplate;
  Baidu?: AndroidPushNotificationTemplate;
  Default?: DefaultPushNotificationTemplate;
  DefaultSubstitutions?: string;
  GCM?: AndroidPushNotificationTemplate;
  Tags?: Record<string, any>;
  TemplateDescription?: string;
  TemplateName: string;
};
/**
 * Attribute type definition for `AWS::Pinpoint::PushTemplate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-pushtemplate.html#aws-resource-pinpoint-pushtemplate-return-values}
 */
export type PinpointPushTemplateAttributes = {
  Arn: string;
  Id: string;
};
/**
 * Type definition for `AWS::Pinpoint::PushTemplate.AndroidPushNotificationTemplate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-pushtemplate-androidpushnotificationtemplate.html}
 */
export type AndroidPushNotificationTemplate = {
  Action?: string;
  Body?: string;
  ImageIconUrl?: string;
  ImageUrl?: string;
  SmallImageIconUrl?: string;
  Sound?: string;
  Title?: string;
  Url?: string;
};
/**
 * Type definition for `AWS::Pinpoint::PushTemplate.APNSPushNotificationTemplate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-pushtemplate-apnspushnotificationtemplate.html}
 */
export type APNSPushNotificationTemplate = {
  Action?: string;
  Body?: string;
  MediaUrl?: string;
  Sound?: string;
  Title?: string;
  Url?: string;
};
/**
 * Type definition for `AWS::Pinpoint::PushTemplate.DefaultPushNotificationTemplate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-pushtemplate-defaultpushnotificationtemplate.html}
 */
export type DefaultPushNotificationTemplate = {
  Action?: string;
  Body?: string;
  Sound?: string;
  Title?: string;
  Url?: string;
};
/**
 * Resource Type definition for AWS::Pinpoint::PushTemplate
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-pushtemplate.html}
 */
export class PinpointPushTemplate extends $Resource<
  "AWS::Pinpoint::PushTemplate",
  PinpointPushTemplateProperties,
  PinpointPushTemplateAttributes
> {
  public static readonly Type = "AWS::Pinpoint::PushTemplate";
  constructor(
    logicalId: string,
    properties: PinpointPushTemplateProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, PinpointPushTemplate.Type, properties, options);
  }
}
