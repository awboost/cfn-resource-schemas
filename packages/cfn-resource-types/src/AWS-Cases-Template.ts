import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Cases::Template`.
 * A template in the Cases domain. This template is used to define the case object model (that is, to define what data can be captured on cases) in a Cases domain. A template must have a unique name within a domain, and it must reference existing field IDs and layout IDs.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cases-template.html}
 */
export type CasesTemplateProperties = {
  /**
   * A description explaining the purpose and use case for this template. Should indicate what types of cases this template is designed for and any specific workflow it supports.
   * @maxLength `255`
   */
  Description?: string;
  /**
   * The unique identifier of the Cases domain.
   * @minLength `1`
   * @maxLength `500`
   */
  DomainId?: string;
  /**
   * Specifies the default layout to use when displaying cases created from this template. The layout determines which fields are visible and their arrangement in the agent interface.
   */
  LayoutConfiguration?: LayoutConfiguration;
  /**
   * A name for the template. It must be unique per domain.
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^.*[\S]$`
   */
  Name: string;
  /**
   * A list of fields that must contain a value for a case to be successfully created with this template.
   * @maxLength `100`
   */
  RequiredFields?: RequiredField[];
  /**
   * A list of case rules (also known as case field conditions) on a template.
   * @maxLength `50`
   */
  Rules?: TemplateRule[];
  /**
   * The current status of the template. Active templates can be used to create new cases, while Inactive templates are disabled but preserved for existing cases.
   */
  Status?: TemplateStatus;
  /**
   * The tags that you attach to this template.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Cases::Template`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cases-template.html#aws-resource-cases-template-return-values}
 */
export type CasesTemplateAttributes = {
  /**
   * The time at which the template was created.
   */
  CreatedTime: string;
  /**
   * The time at which the template was created or last modified.
   */
  LastModifiedTime: string;
  /**
   * The Amazon Resource Name (ARN) of the template.
   * @minLength `1`
   * @maxLength `500`
   */
  TemplateArn: string;
  /**
   * The unique identifier of a template.
   * @minLength `1`
   * @maxLength `500`
   */
  TemplateId: string;
};
/**
 * Type definition for `AWS::Cases::Template.LayoutConfiguration`.
 * Specifies the default layout to use when displaying cases created from this template. The layout determines which fields are visible and their arrangement in the agent interface.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cases-template-layoutconfiguration.html}
 */
export type LayoutConfiguration = {
  /**
   * The unique identifier of a layout.
   * @minLength `1`
   * @maxLength `500`
   */
  DefaultLayout?: string;
};
/**
 * Type definition for `AWS::Cases::Template.RequiredField`.
 * Wrapper object containing a field identifier
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cases-template-requiredfield.html}
 */
export type RequiredField = {
  /**
   * The unique identifier of a field.
   * @minLength `1`
   * @maxLength `500`
   */
  FieldId: string;
};
/**
 * Type definition for `AWS::Cases::Template.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cases-template-tag.html}
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
 * Type definition for `AWS::Cases::Template.TemplateRule`.
 * Links a case rule to a specific field within this template. When specified, the rule's conditions will be evaluated for the associated field, controlling behavior like required status, visibility, or available options.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cases-template-templaterule.html}
 */
export type TemplateRule = {
  /**
   * The unique identifier of a case rule.
   * @minLength `1`
   * @maxLength `500`
   */
  CaseRuleId: string;
  /**
   * The ID of the field that this rule applies to.
   * @minLength `1`
   * @maxLength `500`
   */
  FieldId?: string;
};
/**
 * Type definition for `AWS::Cases::Template.TemplateStatus`.
 * The current status of the template. Active templates can be used to create new cases, while Inactive templates are disabled but preserved for existing cases.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cases-template-templatestatus.html}
 */
export type TemplateStatus = "Active" | "Inactive";
/**
 * Resource type definition for `AWS::Cases::Template`.
 * A template in the Cases domain. This template is used to define the case object model (that is, to define what data can be captured on cases) in a Cases domain. A template must have a unique name within a domain, and it must reference existing field IDs and layout IDs.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cases-template.html}
 */
export class CasesTemplate extends $Resource<
  "AWS::Cases::Template",
  CasesTemplateProperties,
  CasesTemplateAttributes
> {
  public static readonly Type = "AWS::Cases::Template";
  constructor(
    logicalId: string,
    properties: CasesTemplateProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CasesTemplate.Type, properties, options);
  }
}
