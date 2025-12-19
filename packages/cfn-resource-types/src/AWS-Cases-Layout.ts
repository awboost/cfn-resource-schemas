import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Cases::Layout`.
 * A layout in the Cases domain. Layouts define the following configuration in the top section and More Info tab of the Cases user interface: Fields to display to the users and Field ordering.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cases-layout.html}
 */
export type CasesLayoutProperties = {
  Content: LayoutContent;
  /**
   * The unique identifier of the Cases domain.
   * @minLength `1`
   * @maxLength `500`
   */
  DomainId?: string;
  /**
   * A descriptive name for the layout. Must be unique within the Cases domain and should clearly indicate the layout's purpose and field organization.
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^.*[\S]$`
   */
  Name: string;
  /**
   * The tags that you attach to this layout.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Cases::Layout`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cases-layout.html#aws-resource-cases-layout-return-values}
 */
export type CasesLayoutAttributes = {
  /**
   * The time at which the layout was created.
   */
  CreatedTime: string;
  /**
   * The time at which the layout was created or last modified.
   */
  LastModifiedTime: string;
  /**
   * The Amazon Resource Name (ARN) of the layout.
   * @minLength `1`
   * @maxLength `500`
   */
  LayoutArn: string;
  /**
   * The unique identifier of the layout.
   * @minLength `1`
   * @maxLength `500`
   */
  LayoutId: string;
};
/**
 * Type definition for `AWS::Cases::Layout.BasicLayout`.
 * Defines the field layout for the agent's case interface. Configures which fields appear in the top panel (immediately visible) and More Info tab (expandable section) of the case view, allowing customization of the agent experience.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cases-layout-basiclayout.html}
 */
export type BasicLayout = {
  /**
   * Sections within a panel or tab of the page layout.
   */
  MoreInfo?: LayoutSections;
  /**
   * Sections within a panel or tab of the page layout.
   */
  TopPanel?: LayoutSections;
};
/**
 * Type definition for `AWS::Cases::Layout.FieldGroup`.
 * Consists of a group of fields and associated properties.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cases-layout-fieldgroup.html}
 */
export type FieldGroup = {
  /**
   * An ordered list of fields to display in this group. The order determines the sequence in which fields appear in the agent interface. Each field is referenced by its unique field ID.
   * @maxLength `220`
   */
  Fields: FieldItem[];
  /**
   * A descriptive name for the field group. Helps organize related fields together in the layout interface.
   * @maxLength `100`
   */
  Name?: string;
};
/**
 * Type definition for `AWS::Cases::Layout.FieldItem`.
 * Field specific properties.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cases-layout-fielditem.html}
 */
export type FieldItem = {
  /**
   * The unique identifier of a field.
   * @minLength `1`
   * @maxLength `500`
   */
  Id: string;
};
/**
 * Type definition for `AWS::Cases::Layout.LayoutContent`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cases-layout-layoutcontent.html}
 */
export type LayoutContent = {
  /**
   * Defines the field layout for the agent's case interface. Configures which fields appear in the top panel (immediately visible) and More Info tab (expandable section) of the case view, allowing customization of the agent experience.
   */
  Basic: BasicLayout;
};
/**
 * Type definition for `AWS::Cases::Layout.LayoutSections`.
 * Sections within a panel or tab of the page layout.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cases-layout-layoutsections.html}
 */
export type LayoutSections = {
  /**
   * Defines the sections within a panel or tab. Contains field groups that organize related fields together.
   * @maxLength `1`
   */
  Sections?: Section[];
};
/**
 * Type definition for `AWS::Cases::Layout.Section`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cases-layout-section.html}
 */
export type Section = {
  /**
   * Consists of a group of fields and associated properties.
   */
  FieldGroup: FieldGroup;
};
/**
 * Type definition for `AWS::Cases::Layout.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cases-layout-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!aws:)[a-zA-Z+-=._:/]+$`
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
 * Resource type definition for `AWS::Cases::Layout`.
 * A layout in the Cases domain. Layouts define the following configuration in the top section and More Info tab of the Cases user interface: Fields to display to the users and Field ordering.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cases-layout.html}
 */
export class CasesLayout extends $Resource<
  "AWS::Cases::Layout",
  CasesLayoutProperties,
  CasesLayoutAttributes
> {
  public static readonly Type = "AWS::Cases::Layout";
  constructor(
    logicalId: string,
    properties: CasesLayoutProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CasesLayout.Type, properties, options);
  }
}
