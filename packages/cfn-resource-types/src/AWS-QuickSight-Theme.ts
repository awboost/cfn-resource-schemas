import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
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
   * @pattern `^[\w\-]+$`
   */
  BaseThemeId: string;
  /**
     * <p>The theme configuration. This configuration contains all of the display properties for
                a theme.</p>
     */
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
   * @pattern `^[\w\-]+$`
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
  /**
   * <p>The Amazon Resource Name (ARN) of the theme.</p>
   */
  Arn: string;
  /**
   * <p>The date and time that the theme was created.</p>
   */
  CreatedTime: string;
  /**
   * <p>The date and time that the theme was last updated.</p>
   */
  LastUpdatedTime: string;
  Type: ThemeType;
  /**
   * <p>A version of a theme.</p>
   */
  Version: {
    /**
     * <p>The Amazon Resource Name (ARN) of the resource.</p>
     */
    Arn: string;
    /**
         * <p>The Amazon QuickSight-defined ID of the theme that a custom theme inherits from. All
                    themes initially inherit from a default Amazon QuickSight theme.</p>
         * @minLength `1`
         * @maxLength `512`
         * @pattern `^[\w\-]+$`
         */
    BaseThemeId: string;
    /**
         * <p>The theme configuration. This configuration contains all of the display properties for
                    a theme.</p>
         */
    Configuration: {
      /**
             * <p>The theme colors that are used for data colors in charts. The colors description is a
                        hexadecimal color code that consists of six alphanumerical characters, prefixed with
                            <code>#</code>, for example #37BFF5. </p>
             */
      DataColorPalette: {
        /**
         * <p>The hexadecimal codes for the colors.</p>
         * @minLength `0`
         * @maxLength `100`
         */
        Colors: string[];
        /**
                 * <p>The hexadecimal code of a color that applies to charts where a lack of data is
                            highlighted.</p>
                 * @pattern `^#[A-F0-9]{6}$`
                 */
        EmptyFillColor: string;
        /**
         * <p>The minimum and maximum hexadecimal codes that describe a color gradient. </p>
         * @minLength `0`
         * @maxLength `100`
         */
        MinMaxGradient: string[];
      };
      /**
       * <p>The theme display options for sheets. </p>
       */
      Sheet: {
        /**
         * <p>Display options related to tiles on a sheet.</p>
         */
        Tile: {
          /**
           * <p>The display options for tile borders for visuals.</p>
           */
          Border: {
            /**
             * <p>The option to enable display of borders for visuals.</p>
             */
            Show: boolean;
          };
        };
        /**
         * <p>The display options for the layout of tiles on a sheet.</p>
         */
        TileLayout: {
          /**
           * <p>The display options for gutter spacing between tiles on a sheet.</p>
           */
          Gutter: {
            /**
                         * <p>This Boolean value controls whether to display a gutter space between sheet tiles.
                                </p>
                         */
            Show: boolean;
          };
          /**
           * <p>The display options for margins around the outside edge of sheets.</p>
           */
          Margin: {
            /**
             * <p>This Boolean value controls whether to display sheet margins.</p>
             */
            Show: boolean;
          };
        };
      };
      Typography: {
        /**
         * @minLength `0`
         * @maxLength `5`
         */
        FontFamilies: {
          FontFamily: string;
        }[];
      };
      /**
             * <p>The theme colors that apply to UI and to charts, excluding data colors. The colors
                        description is a hexadecimal color code that consists of six alphanumerical characters,
                        prefixed with <code>#</code>, for example #37BFF5. For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/themes-in-quicksight.html">Using Themes in Amazon QuickSight</a> in the <i>Amazon QuickSight User
                            Guide.</i>
                     </p>
             */
      UIColorPalette: {
        /**
         * <p>This color is that applies to selected states and buttons.</p>
         * @pattern `^#[A-F0-9]{6}$`
         */
        Accent: string;
        /**
                 * <p>The foreground color that applies to any text or other elements that appear over the
                            accent color.</p>
                 * @pattern `^#[A-F0-9]{6}$`
                 */
        AccentForeground: string;
        /**
         * <p>The color that applies to error messages.</p>
         * @pattern `^#[A-F0-9]{6}$`
         */
        Danger: string;
        /**
                 * <p>The foreground color that applies to any text or other elements that appear over the
                            error color.</p>
                 * @pattern `^#[A-F0-9]{6}$`
                 */
        DangerForeground: string;
        /**
                 * <p>The color that applies to the names of fields that are identified as
                            dimensions.</p>
                 * @pattern `^#[A-F0-9]{6}$`
                 */
        Dimension: string;
        /**
                 * <p>The foreground color that applies to any text or other elements that appear over the
                            dimension color.</p>
                 * @pattern `^#[A-F0-9]{6}$`
                 */
        DimensionForeground: string;
        /**
         * <p>The color that applies to the names of fields that are identified as measures.</p>
         * @pattern `^#[A-F0-9]{6}$`
         */
        Measure: string;
        /**
                 * <p>The foreground color that applies to any text or other elements that appear over the
                            measure color.</p>
                 * @pattern `^#[A-F0-9]{6}$`
                 */
        MeasureForeground: string;
        /**
         * <p>The background color that applies to visuals and other high emphasis UI.</p>
         * @pattern `^#[A-F0-9]{6}$`
         */
        PrimaryBackground: string;
        /**
                 * <p>The color of text and other foreground elements that appear over the primary
                            background regions, such as grid lines, borders, table banding, icons, and so on.</p>
                 * @pattern `^#[A-F0-9]{6}$`
                 */
        PrimaryForeground: string;
        /**
         * <p>The background color that applies to the sheet background and sheet controls.</p>
         * @pattern `^#[A-F0-9]{6}$`
         */
        SecondaryBackground: string;
        /**
                 * <p>The foreground color that applies to any sheet title, sheet control text, or UI that
                            appears over the secondary background.</p>
                 * @pattern `^#[A-F0-9]{6}$`
                 */
        SecondaryForeground: string;
        /**
                 * <p>The color that applies to success messages, for example the check mark for a
                            successful download.</p>
                 * @pattern `^#[A-F0-9]{6}$`
                 */
        Success: string;
        /**
                 * <p>The foreground color that applies to any text or other elements that appear over the
                            success color.</p>
                 * @pattern `^#[A-F0-9]{6}$`
                 */
        SuccessForeground: string;
        /**
         * <p>This color that applies to warning and informational messages.</p>
         * @pattern `^#[A-F0-9]{6}$`
         */
        Warning: string;
        /**
                 * <p>The foreground color that applies to any text or other elements that appear over the
                            warning color.</p>
                 * @pattern `^#[A-F0-9]{6}$`
                 */
        WarningForeground: string;
      };
    };
    /**
     * <p>The date and time that this theme version was created.</p>
     */
    CreatedTime: string;
    /**
     * <p>The description of the theme.</p>
     * @minLength `1`
     * @maxLength `512`
     */
    Description: string;
    /**
     * <p>Errors associated with the theme.</p>
     * @minLength `1`
     */
    Errors: {
      /**
       * <p>The error message.</p>
       * @pattern `\S`
       */
      Message: string;
      Type: ThemeErrorType;
    }[];
    Status: ResourceStatus;
    /**
     * <p>The version number of the theme.</p>
     * @min `1`
     */
    VersionNumber: number;
  };
};
/**
 * Type definition for `AWS::QuickSight::Theme.BorderStyle`.
 * <p>The display options for tile borders for visuals.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-theme-borderstyle.html}
 */
export type BorderStyle = {
  /**
   * <p>The option to enable display of borders for visuals.</p>
   */
  Show?: boolean;
};
/**
 * Type definition for `AWS::QuickSight::Theme.DataColorPalette`.
 * <p>The theme colors that are used for data colors in charts. The colors description is a
            hexadecimal color code that consists of six alphanumerical characters, prefixed with
                <code>#</code>, for example #37BFF5. </p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-theme-datacolorpalette.html}
 */
export type DataColorPalette = {
  /**
   * <p>The hexadecimal codes for the colors.</p>
   * @minLength `0`
   * @maxLength `100`
   */
  Colors?: string[];
  /**
     * <p>The hexadecimal code of a color that applies to charts where a lack of data is
                highlighted.</p>
     * @pattern `^#[A-F0-9]{6}$`
     */
  EmptyFillColor?: string;
  /**
   * <p>The minimum and maximum hexadecimal codes that describe a color gradient. </p>
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
 * <p>The display options for gutter spacing between tiles on a sheet.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-theme-gutterstyle.html}
 */
export type GutterStyle = {
  /**
     * <p>This Boolean value controls whether to display a gutter space between sheet tiles.
            </p>
     */
  Show?: boolean;
};
/**
 * Type definition for `AWS::QuickSight::Theme.MarginStyle`.
 * <p>The display options for margins around the outside edge of sheets.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-theme-marginstyle.html}
 */
export type MarginStyle = {
  /**
   * <p>This Boolean value controls whether to display sheet margins.</p>
   */
  Show?: boolean;
};
/**
 * Type definition for `AWS::QuickSight::Theme.ResourcePermission`.
 * <p>Permission for the resource.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-theme-resourcepermission.html}
 */
export type ResourcePermission = {
  /**
   * <p>The IAM action to grant or revoke permissions on.</p>
   * @minLength `1`
   * @maxLength `20`
   */
  Actions: string[];
  /**
     * <p>The Amazon Resource Name (ARN) of the principal. This can be one of the
                following:</p>
             <ul>
                <li>
                   <p>The ARN of an Amazon QuickSight user or group associated with a data source or dataset. (This is common.)</p>
                </li>
                <li>
                   <p>The ARN of an Amazon QuickSight user, group, or namespace associated with an analysis, dashboard, template, or theme. (This is common.)</p>
                </li>
                <li>
                   <p>The ARN of an Amazon Web Services account root: This is an IAM ARN rather than a QuickSight
                        ARN. Use this option only to share resources (templates) across Amazon Web Services accounts.
                        (This is less common.) </p>
                </li>
             </ul>
     * @minLength `1`
     * @maxLength `256`
     */
  Principal: string;
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
  | "PENDING_UPDATE"
  | "DELETED";
/**
 * Type definition for `AWS::QuickSight::Theme.SheetStyle`.
 * <p>The theme display options for sheets. </p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-theme-sheetstyle.html}
 */
export type SheetStyle = {
  /**
   * <p>Display options related to tiles on a sheet.</p>
   */
  Tile?: TileStyle;
  /**
   * <p>The display options for the layout of tiles on a sheet.</p>
   */
  TileLayout?: TileLayoutStyle;
};
/**
 * Type definition for `AWS::QuickSight::Theme.Tag`.
 * <p>The key or keys of the key-value pairs for the resource tag or tags assigned to the
            resource.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-theme-tag.html}
 */
export type Tag = {
  /**
   * <p>Tag key.</p>
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * <p>Tag value.</p>
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::QuickSight::Theme.ThemeConfiguration`.
 * <p>The theme configuration. This configuration contains all of the display properties for
            a theme.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-theme-themeconfiguration.html}
 */
export type ThemeConfiguration = {
  /**
     * <p>The theme colors that are used for data colors in charts. The colors description is a
                hexadecimal color code that consists of six alphanumerical characters, prefixed with
                    <code>#</code>, for example #37BFF5. </p>
     */
  DataColorPalette?: DataColorPalette;
  /**
   * <p>The theme display options for sheets. </p>
   */
  Sheet?: SheetStyle;
  Typography?: Typography;
  /**
     * <p>The theme colors that apply to UI and to charts, excluding data colors. The colors
                description is a hexadecimal color code that consists of six alphanumerical characters,
                prefixed with <code>#</code>, for example #37BFF5. For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/themes-in-quicksight.html">Using Themes in Amazon QuickSight</a> in the <i>Amazon QuickSight User
                    Guide.</i>
             </p>
     */
  UIColorPalette?: UIColorPalette;
};
/**
 * Type definition for `AWS::QuickSight::Theme.ThemeError`.
 * <p>Theme error.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-theme-themeerror.html}
 */
export type ThemeError = {
  /**
   * <p>The error message.</p>
   * @pattern `\S`
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
 * <p>A version of a theme.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-theme-themeversion.html}
 */
export type ThemeVersion = {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;
  /**
     * <p>The Amazon QuickSight-defined ID of the theme that a custom theme inherits from. All
                themes initially inherit from a default Amazon QuickSight theme.</p>
     * @minLength `1`
     * @maxLength `512`
     * @pattern `^[\w\-]+$`
     */
  BaseThemeId?: string;
  /**
     * <p>The theme configuration. This configuration contains all of the display properties for
                a theme.</p>
     */
  Configuration?: ThemeConfiguration;
  /**
   * <p>The date and time that this theme version was created.</p>
   */
  CreatedTime?: string;
  /**
   * <p>The description of the theme.</p>
   * @minLength `1`
   * @maxLength `512`
   */
  Description?: string;
  /**
   * <p>Errors associated with the theme.</p>
   * @minLength `1`
   */
  Errors?: ThemeError[];
  Status?: ResourceStatus;
  /**
   * <p>The version number of the theme.</p>
   * @min `1`
   */
  VersionNumber?: number;
};
/**
 * Type definition for `AWS::QuickSight::Theme.TileLayoutStyle`.
 * <p>The display options for the layout of tiles on a sheet.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-theme-tilelayoutstyle.html}
 */
export type TileLayoutStyle = {
  /**
   * <p>The display options for gutter spacing between tiles on a sheet.</p>
   */
  Gutter?: GutterStyle;
  /**
   * <p>The display options for margins around the outside edge of sheets.</p>
   */
  Margin?: MarginStyle;
};
/**
 * Type definition for `AWS::QuickSight::Theme.TileStyle`.
 * <p>Display options related to tiles on a sheet.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-theme-tilestyle.html}
 */
export type TileStyle = {
  /**
   * <p>The display options for tile borders for visuals.</p>
   */
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
 * <p>The theme colors that apply to UI and to charts, excluding data colors. The colors
            description is a hexadecimal color code that consists of six alphanumerical characters,
            prefixed with <code>#</code>, for example #37BFF5. For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/themes-in-quicksight.html">Using Themes in Amazon QuickSight</a> in the <i>Amazon QuickSight User
                Guide.</i>
         </p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-theme-uicolorpalette.html}
 */
export type UIColorPalette = {
  /**
   * <p>This color is that applies to selected states and buttons.</p>
   * @pattern `^#[A-F0-9]{6}$`
   */
  Accent?: string;
  /**
     * <p>The foreground color that applies to any text or other elements that appear over the
                accent color.</p>
     * @pattern `^#[A-F0-9]{6}$`
     */
  AccentForeground?: string;
  /**
   * <p>The color that applies to error messages.</p>
   * @pattern `^#[A-F0-9]{6}$`
   */
  Danger?: string;
  /**
     * <p>The foreground color that applies to any text or other elements that appear over the
                error color.</p>
     * @pattern `^#[A-F0-9]{6}$`
     */
  DangerForeground?: string;
  /**
     * <p>The color that applies to the names of fields that are identified as
                dimensions.</p>
     * @pattern `^#[A-F0-9]{6}$`
     */
  Dimension?: string;
  /**
     * <p>The foreground color that applies to any text or other elements that appear over the
                dimension color.</p>
     * @pattern `^#[A-F0-9]{6}$`
     */
  DimensionForeground?: string;
  /**
   * <p>The color that applies to the names of fields that are identified as measures.</p>
   * @pattern `^#[A-F0-9]{6}$`
   */
  Measure?: string;
  /**
     * <p>The foreground color that applies to any text or other elements that appear over the
                measure color.</p>
     * @pattern `^#[A-F0-9]{6}$`
     */
  MeasureForeground?: string;
  /**
   * <p>The background color that applies to visuals and other high emphasis UI.</p>
   * @pattern `^#[A-F0-9]{6}$`
   */
  PrimaryBackground?: string;
  /**
     * <p>The color of text and other foreground elements that appear over the primary
                background regions, such as grid lines, borders, table banding, icons, and so on.</p>
     * @pattern `^#[A-F0-9]{6}$`
     */
  PrimaryForeground?: string;
  /**
   * <p>The background color that applies to the sheet background and sheet controls.</p>
   * @pattern `^#[A-F0-9]{6}$`
   */
  SecondaryBackground?: string;
  /**
     * <p>The foreground color that applies to any sheet title, sheet control text, or UI that
                appears over the secondary background.</p>
     * @pattern `^#[A-F0-9]{6}$`
     */
  SecondaryForeground?: string;
  /**
     * <p>The color that applies to success messages, for example the check mark for a
                successful download.</p>
     * @pattern `^#[A-F0-9]{6}$`
     */
  Success?: string;
  /**
     * <p>The foreground color that applies to any text or other elements that appear over the
                success color.</p>
     * @pattern `^#[A-F0-9]{6}$`
     */
  SuccessForeground?: string;
  /**
   * <p>This color that applies to warning and informational messages.</p>
   * @pattern `^#[A-F0-9]{6}$`
   */
  Warning?: string;
  /**
     * <p>The foreground color that applies to any text or other elements that appear over the
                warning color.</p>
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
