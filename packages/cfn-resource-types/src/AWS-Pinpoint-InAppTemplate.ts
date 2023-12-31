import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::Pinpoint::InAppTemplate
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-inapptemplate.html}
 */
export type PinpointInAppTemplateProperties = {
  Content?: InAppMessageContent[];
  CustomConfig?: Record<string, any>;
  Layout?:
    | "BOTTOM_BANNER"
    | "TOP_BANNER"
    | "OVERLAYS"
    | "MOBILE_FEED"
    | "MIDDLE_BANNER"
    | "CAROUSEL";
  Tags?: Record<string, any>;
  TemplateDescription?: string;
  TemplateName: string;
};
/**
 * Attribute type definition for `AWS::Pinpoint::InAppTemplate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-inapptemplate.html#aws-resource-pinpoint-inapptemplate-return-values}
 */
export type PinpointInAppTemplateAttributes = {
  Arn: string;
};
/**
 * Type definition for `AWS::Pinpoint::InAppTemplate.Alignment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-inapptemplate-alignment.html}
 */
export type Alignment = "LEFT" | "CENTER" | "RIGHT";
/**
 * Type definition for `AWS::Pinpoint::InAppTemplate.BodyConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-inapptemplate-bodyconfig.html}
 */
export type BodyConfig = {
  Alignment?: Alignment;
  Body?: string;
  TextColor?: string;
};
/**
 * Type definition for `AWS::Pinpoint::InAppTemplate.ButtonAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-inapptemplate-buttonaction.html}
 */
export type ButtonAction = "LINK" | "DEEP_LINK" | "CLOSE";
/**
 * Type definition for `AWS::Pinpoint::InAppTemplate.ButtonConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-inapptemplate-buttonconfig.html}
 */
export type ButtonConfig = {
  Android?: OverrideButtonConfiguration;
  DefaultConfig?: DefaultButtonConfiguration;
  IOS?: OverrideButtonConfiguration;
  Web?: OverrideButtonConfiguration;
};
/**
 * Type definition for `AWS::Pinpoint::InAppTemplate.DefaultButtonConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-inapptemplate-defaultbuttonconfiguration.html}
 */
export type DefaultButtonConfiguration = {
  BackgroundColor?: string;
  BorderRadius?: number;
  ButtonAction?: ButtonAction;
  Link?: string;
  Text?: string;
  TextColor?: string;
};
/**
 * Type definition for `AWS::Pinpoint::InAppTemplate.HeaderConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-inapptemplate-headerconfig.html}
 */
export type HeaderConfig = {
  Alignment?: Alignment;
  Header?: string;
  TextColor?: string;
};
/**
 * Type definition for `AWS::Pinpoint::InAppTemplate.InAppMessageContent`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-inapptemplate-inappmessagecontent.html}
 */
export type InAppMessageContent = {
  BackgroundColor?: string;
  BodyConfig?: BodyConfig;
  HeaderConfig?: HeaderConfig;
  ImageUrl?: string;
  PrimaryBtn?: ButtonConfig;
  SecondaryBtn?: ButtonConfig;
};
/**
 * Type definition for `AWS::Pinpoint::InAppTemplate.OverrideButtonConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-inapptemplate-overridebuttonconfiguration.html}
 */
export type OverrideButtonConfiguration = {
  ButtonAction?: ButtonAction;
  Link?: string;
};
/**
 * Resource Type definition for AWS::Pinpoint::InAppTemplate
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-inapptemplate.html}
 */
export class PinpointInAppTemplate extends $Resource<
  "AWS::Pinpoint::InAppTemplate",
  PinpointInAppTemplateProperties,
  PinpointInAppTemplateAttributes
> {
  public static readonly Type = "AWS::Pinpoint::InAppTemplate";
  public static readonly AttributeNames = ["Arn" as const];
  constructor(
    logicalId: string,
    properties: PinpointInAppTemplateProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      PinpointInAppTemplate.Type,
      properties,
      PinpointInAppTemplate.AttributeNames,
      options,
    );
  }
}
