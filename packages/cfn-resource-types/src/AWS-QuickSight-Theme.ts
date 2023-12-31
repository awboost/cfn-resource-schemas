import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of the AWS::QuickSight::Theme Resource Type.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html}
 */
export type QuickSightThemeProperties = {
  /**
   * @minLength `12`
   * @maxLength `12`
   * @pattern `^[0-9]{12}$`
   */
  AwsAccountId: string;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `[\w\-]+`
   */
  BaseThemeId: string;
  Configuration: ThemeConfiguration;
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  Name: string;
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  Permissions?: ResourcePermission[];
  /**
   * @minLength `1`
   * @maxLength `200`
   */
  Tags?: Tag[];
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `[\w\-]+`
   */
  ThemeId: string;
  /**
   * @minLength `1`
   * @maxLength `512`
   */
  VersionDescription?: string;
};
/**
 * Attribute type definition for `AWS::QuickSight::Theme`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html#aws-resource-quicksight-theme-return-values}
 */
export type QuickSightThemeAttributes = {
  Arn: string;
  CreatedTime: string;
  LastUpdatedTime: string;
  Type: ThemeType;
  Version: {};
};
/**
 * Type definition for `AWS::QuickSight::Theme.BorderStyle`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-theme-borderstyle.html}
 */
export type BorderStyle = {
  Show?: boolean;
};
/**
 * Type definition for `AWS::QuickSight::Theme.DataColorPalette`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-theme-datacolorpalette.html}
 */
export type DataColorPalette = {
  /**
   * @minLength `0`
   * @maxLength `100`
   */
  Colors?: string[];
  /**
   * @pattern `^#[A-F0-9]{6}$`
   */
  EmptyFillColor?: string;
  /**
   * @minLength `0`
   * @maxLength `100`
   */
  MinMaxGradient?: string[];
};
/**
 * Type definition for `AWS::QuickSight::Theme.Font`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-theme-font.html}
 */
export type Font = {
  FontFamily?: string;
};
/**
 * Type definition for `AWS::QuickSight::Theme.GutterStyle`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-theme-gutterstyle.html}
 */
export type GutterStyle = {
  Show?: boolean;
};
/**
 * Type definition for `AWS::QuickSight::Theme.MarginStyle`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-theme-marginstyle.html}
 */
export type MarginStyle = {
  Show?: boolean;
};
/**
 * Type definition for `AWS::QuickSight::Theme.ResourcePermission`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-theme-resourcepermission.html}
 */
export type ResourcePermission = {
  /**
   * @minLength `1`
   * @maxLength `20`
   */
  Actions: string[];
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  Principal: string;
  Resource?: string;
};
/**
 * Type definition for `AWS::QuickSight::Theme.ResourceStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-theme-resourcestatus.html}
 */
export type ResourceStatus =
  | "CREATION_IN_PROGRESS"
  | "CREATION_SUCCESSFUL"
  | "CREATION_FAILED"
  | "UPDATE_IN_PROGRESS"
  | "UPDATE_SUCCESSFUL"
  | "UPDATE_FAILED"
  | "DELETED";
/**
 * Type definition for `AWS::QuickSight::Theme.SheetStyle`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-theme-sheetstyle.html}
 */
export type SheetStyle = {
  Tile?: TileStyle;
  TileLayout?: TileLayoutStyle;
};
/**
 * Type definition for `AWS::QuickSight::Theme.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-theme-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::QuickSight::Theme.ThemeConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-theme-themeconfiguration.html}
 */
export type ThemeConfiguration = {
  DataColorPalette?: DataColorPalette;
  Sheet?: SheetStyle;
  Typography?: Typography;
  UIColorPalette?: UIColorPalette;
};
/**
 * Type definition for `AWS::QuickSight::Theme.ThemeError`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-theme-themeerror.html}
 */
export type ThemeError = {
  /**
   * @pattern `.*\S.*`
   */
  Message?: string;
  Type?: ThemeErrorType;
};
/**
 * Type definition for `AWS::QuickSight::Theme.ThemeErrorType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-theme-themeerrortype.html}
 */
export type ThemeErrorType = "INTERNAL_FAILURE";
/**
 * Type definition for `AWS::QuickSight::Theme.ThemeType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-theme-themetype.html}
 */
export type ThemeType = "QUICKSIGHT" | "CUSTOM" | "ALL";
/**
 * Type definition for `AWS::QuickSight::Theme.ThemeVersion`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-theme-themeversion.html}
 */
export type ThemeVersion = {
  Arn?: string;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `[\w\-]+`
   */
  BaseThemeId?: string;
  Configuration?: ThemeConfiguration;
  CreatedTime?: string;
  /**
   * @minLength `1`
   * @maxLength `512`
   */
  Description?: string;
  /**
   * @minLength `1`
   */
  Errors?: ThemeError[];
  Status?: ResourceStatus;
  /**
   * @min `1`
   */
  VersionNumber?: number;
};
/**
 * Type definition for `AWS::QuickSight::Theme.TileLayoutStyle`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-theme-tilelayoutstyle.html}
 */
export type TileLayoutStyle = {
  Gutter?: GutterStyle;
  Margin?: MarginStyle;
};
/**
 * Type definition for `AWS::QuickSight::Theme.TileStyle`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-theme-tilestyle.html}
 */
export type TileStyle = {
  Border?: BorderStyle;
};
/**
 * Type definition for `AWS::QuickSight::Theme.Typography`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-theme-typography.html}
 */
export type Typography = {
  /**
   * @minLength `0`
   * @maxLength `5`
   */
  FontFamilies?: Font[];
};
/**
 * Type definition for `AWS::QuickSight::Theme.UIColorPalette`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-theme-uicolorpalette.html}
 */
export type UIColorPalette = {
  /**
   * @pattern `^#[A-F0-9]{6}$`
   */
  Accent?: string;
  /**
   * @pattern `^#[A-F0-9]{6}$`
   */
  AccentForeground?: string;
  /**
   * @pattern `^#[A-F0-9]{6}$`
   */
  Danger?: string;
  /**
   * @pattern `^#[A-F0-9]{6}$`
   */
  DangerForeground?: string;
  /**
   * @pattern `^#[A-F0-9]{6}$`
   */
  Dimension?: string;
  /**
   * @pattern `^#[A-F0-9]{6}$`
   */
  DimensionForeground?: string;
  /**
   * @pattern `^#[A-F0-9]{6}$`
   */
  Measure?: string;
  /**
   * @pattern `^#[A-F0-9]{6}$`
   */
  MeasureForeground?: string;
  /**
   * @pattern `^#[A-F0-9]{6}$`
   */
  PrimaryBackground?: string;
  /**
   * @pattern `^#[A-F0-9]{6}$`
   */
  PrimaryForeground?: string;
  /**
   * @pattern `^#[A-F0-9]{6}$`
   */
  SecondaryBackground?: string;
  /**
   * @pattern `^#[A-F0-9]{6}$`
   */
  SecondaryForeground?: string;
  /**
   * @pattern `^#[A-F0-9]{6}$`
   */
  Success?: string;
  /**
   * @pattern `^#[A-F0-9]{6}$`
   */
  SuccessForeground?: string;
  /**
   * @pattern `^#[A-F0-9]{6}$`
   */
  Warning?: string;
  /**
   * @pattern `^#[A-F0-9]{6}$`
   */
  WarningForeground?: string;
};
/**
 * Definition of the AWS::QuickSight::Theme Resource Type.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html}
 */
export class QuickSightTheme extends $Resource<
  "AWS::QuickSight::Theme",
  QuickSightThemeProperties,
  QuickSightThemeAttributes
> {
  public static readonly Type = "AWS::QuickSight::Theme";
  constructor(
    logicalId: string,
    properties: QuickSightThemeProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, QuickSightTheme.Type, properties, options);
  }
}
