import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Connect::Workspace
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-workspace.html}
 */
export type ConnectWorkspaceProperties = {
  /**
   * The resource ARNs associated with the workspace
   */
  Associations?: string[];
  /**
     * The description of the workspace
     * @minLength `0`
     * @maxLength `500`
     * @pattern `^[\P{C}
        ]*$`
     */
  Description?: string;
  /**
   * The identifier of the Amazon Connect instance.
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*$`
   */
  InstanceArn: string;
  /**
   * The media items for the workspace
   * @maxLength `4`
   */
  Media?: MediaItem[];
  /**
   * The name of the workspace.
   * @minLength `1`
   * @maxLength `127`
   * @pattern `.*\S.*`
   */
  Name: string;
  /**
   * The pages associated with the workspace
   */
  Pages?: WorkspacePage[];
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * The theme configuration for the workspace
   */
  Theme?: WorkspaceTheme;
  /**
   * The title of the workspace
   * @minLength `0`
   * @maxLength `127`
   * @pattern `^[\P{C}]*$`
   */
  Title?: string;
  /**
   * The visibility of the workspace. Will always be set to ASSIGNED oninitial creation.
   */
  Visibility?: Visibility;
};
/**
 * Attribute type definition for `AWS::Connect::Workspace`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-workspace.html#aws-resource-connect-workspace-return-values}
 */
export type ConnectWorkspaceAttributes = {
  /**
   * The Amazon Resource Name (ARN) for the workspace.
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]/‍*workspace/[-a-zA-Z0-9]*$`
   */
  Arn: string;
  /**
   * The identifier of the workspace.
   * @pattern `^.{0,256}$`
   */
  Id: string;
};
/**
 * Type definition for `AWS::Connect::Workspace.FontFamily`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-workspace-fontfamily.html}
 */
export type FontFamily = {
  Default?: WorkspaceFontFamily;
};
/**
 * Type definition for `AWS::Connect::Workspace.MediaItem`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-workspace-mediaitem.html}
 */
export type MediaItem = {
  /**
   * @minLength `1`
   * @maxLength `533333`
   * @pattern `.*\S.*`
   */
  Source?: string;
  /**
   * The type of media
   */
  Type: MediaType;
};
/**
 * Type definition for `AWS::Connect::Workspace.MediaType`.
 * The type of media
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-workspace-mediatype.html}
 */
export type MediaType =
  | "IMAGE_LOGO_LIGHT_FAVICON"
  | "IMAGE_LOGO_DARK_FAVICON"
  | "IMAGE_LOGO_LIGHT_HORIZONTAL"
  | "IMAGE_LOGO_DARK_HORIZONTAL";
/**
 * Type definition for `AWS::Connect::Workspace.PaletteCanvas`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-workspace-palettecanvas.html}
 */
export type PaletteCanvas = {
  /**
   * @minLength `1`
   * @maxLength `127`
   * @pattern `.*\S.*`
   */
  ActiveBackground?: string;
  /**
   * @minLength `1`
   * @maxLength `127`
   * @pattern `.*\S.*`
   */
  ContainerBackground?: string;
  /**
   * @minLength `1`
   * @maxLength `127`
   * @pattern `.*\S.*`
   */
  PageBackground?: string;
};
/**
 * Type definition for `AWS::Connect::Workspace.PaletteHeader`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-workspace-paletteheader.html}
 */
export type PaletteHeader = {
  /**
   * @minLength `1`
   * @maxLength `127`
   * @pattern `.*\S.*`
   */
  Background?: string;
  InvertActionsColors?: boolean;
  /**
   * @minLength `1`
   * @maxLength `127`
   * @pattern `.*\S.*`
   */
  Text?: string;
  /**
   * @minLength `1`
   * @maxLength `127`
   * @pattern `.*\S.*`
   */
  TextHover?: string;
};
/**
 * Type definition for `AWS::Connect::Workspace.PaletteNavigation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-workspace-palettenavigation.html}
 */
export type PaletteNavigation = {
  /**
   * @minLength `1`
   * @maxLength `127`
   * @pattern `.*\S.*`
   */
  Background?: string;
  InvertActionsColors?: boolean;
  /**
   * @minLength `1`
   * @maxLength `127`
   * @pattern `.*\S.*`
   */
  Text?: string;
  /**
   * @minLength `1`
   * @maxLength `127`
   * @pattern `.*\S.*`
   */
  TextActive?: string;
  /**
   * @minLength `1`
   * @maxLength `127`
   * @pattern `.*\S.*`
   */
  TextBackgroundActive?: string;
  /**
   * @minLength `1`
   * @maxLength `127`
   * @pattern `.*\S.*`
   */
  TextBackgroundHover?: string;
  /**
   * @minLength `1`
   * @maxLength `127`
   * @pattern `.*\S.*`
   */
  TextHover?: string;
};
/**
 * Type definition for `AWS::Connect::Workspace.PalettePrimary`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-workspace-paletteprimary.html}
 */
export type PalettePrimary = {
  /**
   * @minLength `1`
   * @maxLength `127`
   * @pattern `.*\S.*`
   */
  Active?: string;
  /**
   * @minLength `1`
   * @maxLength `127`
   * @pattern `.*\S.*`
   */
  ContrastText?: string;
  /**
   * @minLength `1`
   * @maxLength `127`
   * @pattern `.*\S.*`
   */
  Default?: string;
};
/**
 * Type definition for `AWS::Connect::Workspace.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-workspace-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::Connect::Workspace.Visibility`.
 * The visibility of the Connect workspace
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-workspace-visibility.html}
 */
export type Visibility = "ALL" | "ASSIGNED" | "NONE";
/**
 * Type definition for `AWS::Connect::Workspace.WorkspaceFontFamily`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-workspace-workspacefontfamily.html}
 */
export type WorkspaceFontFamily =
  | "ARIAL"
  | "COURIER_NEW"
  | "GEORGIA"
  | "TIMES_NEW_ROMAN"
  | "TREBUCHET"
  | "VERDANA";
/**
 * Type definition for `AWS::Connect::Workspace.WorkspacePage`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-workspace-workspacepage.html}
 */
export type WorkspacePage = {
  /**
   * The input data for the page.
   * @minLength `0`
   * @maxLength `4096`
   */
  InputData?: string;
  /**
   * The page identifier.
   * @minLength `1`
   * @maxLength `25`
   * @pattern `^(?!\.$)(?!\.\.$)[\p{L}\p{Z}\p{N}\-_.:=@'|]+$`
   */
  Page: string;
  /**
   * The Amazon Resource Name (ARN) of the resource associated with the page.
   * @maxLength `2048`
   */
  ResourceArn: string;
  /**
   * The slug for the page.
   * @minLength `0`
   * @maxLength `63`
   * @pattern `^$|^[\p{L}\p{Z}\p{N}\-_.:=@'|]{3,}$`
   */
  Slug?: string;
};
/**
 * Type definition for `AWS::Connect::Workspace.WorkspaceTheme`.
 * The theme configuration for the Connect workspace
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-workspace-workspacetheme.html}
 */
export type WorkspaceTheme = {
  Dark?: WorkspaceThemeConfig;
  Light?: WorkspaceThemeConfig;
};
/**
 * Type definition for `AWS::Connect::Workspace.WorkspaceThemeConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-workspace-workspacethemeconfig.html}
 */
export type WorkspaceThemeConfig = {
  Palette?: WorkspaceThemePalette;
  Typography?: WorkspaceThemeTypography;
};
/**
 * Type definition for `AWS::Connect::Workspace.WorkspaceThemePalette`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-workspace-workspacethemepalette.html}
 */
export type WorkspaceThemePalette = {
  Canvas?: PaletteCanvas;
  Header?: PaletteHeader;
  Navigation?: PaletteNavigation;
  Primary?: PalettePrimary;
};
/**
 * Type definition for `AWS::Connect::Workspace.WorkspaceThemeTypography`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-workspace-workspacethemetypography.html}
 */
export type WorkspaceThemeTypography = {
  FontFamily?: FontFamily;
};
/**
 * Resource Type definition for AWS::Connect::Workspace
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-workspace.html}
 */
export class ConnectWorkspace extends $Resource<
  "AWS::Connect::Workspace",
  ConnectWorkspaceProperties,
  ConnectWorkspaceAttributes
> {
  public static readonly Type = "AWS::Connect::Workspace";
  constructor(
    logicalId: string,
    properties: ConnectWorkspaceProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ConnectWorkspace.Type, properties, options);
  }
}
