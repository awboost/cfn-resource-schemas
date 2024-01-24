import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::AmplifyUIBuilder::Theme Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-theme.html}
 */
export type AmplifyUIBuilderThemeProperties = {
  AppId?: string;
  EnvironmentName?: string;
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  Name: string;
  Overrides?: ThemeValues[];
  Tags?: Tags;
  Values: ThemeValues[];
};
/**
 * Attribute type definition for `AWS::AmplifyUIBuilder::Theme`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-theme.html#aws-resource-amplifyuibuilder-theme-return-values}
 */
export type AmplifyUIBuilderThemeAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::AmplifyUIBuilder::Theme.Tags`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-theme-tags.html}
 */
export type Tags = Record<string, string>;
/**
 * Type definition for `AWS::AmplifyUIBuilder::Theme.ThemeValue`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-theme-themevalue.html}
 */
export type ThemeValue = {
  Children?: ThemeValues[];
  Value?: string;
};
/**
 * Type definition for `AWS::AmplifyUIBuilder::Theme.ThemeValues`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-theme-themevalues.html}
 */
export type ThemeValues = {
  Key?: string;
  Value?: ThemeValue;
};
/**
 * Definition of AWS::AmplifyUIBuilder::Theme Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-theme.html}
 */
export class AmplifyUIBuilderTheme extends $Resource<
  "AWS::AmplifyUIBuilder::Theme",
  AmplifyUIBuilderThemeProperties,
  AmplifyUIBuilderThemeAttributes
> {
  public static readonly Type = "AWS::AmplifyUIBuilder::Theme";
  constructor(
    logicalId: string,
    properties: AmplifyUIBuilderThemeProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AmplifyUIBuilderTheme.Type, properties, options);
  }
}
