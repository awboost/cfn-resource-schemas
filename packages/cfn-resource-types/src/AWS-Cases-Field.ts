import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Cases::Field`.
 * A field in the Cases domain. This field is used to define the case object model (that is, defines what data can be captured on cases) in a Cases domain.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cases-field.html}
 */
export type CasesFieldProperties = {
  /**
   * A description explaining the purpose and usage of this field in cases. Helps agents and administrators understand what information should be captured in this field.
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
   * The display name of the field as it appears to agents in the case interface. Should be descriptive and user-friendly (e.g., 'Customer Priority Level', 'Issue Category').
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^.*[\S]$`
   */
  Name: string;
  /**
   * The tags that you attach to this field.
   */
  Tags?: Tag[];
  /**
   * The data type of the field, which determines validation rules, input constraints, and display format. Each type has specific constraints: Text (string input), Number (numeric values), Boolean (true/false), DateTime (date/time picker), SingleSelect (dropdown options), Url (URL validation), User (Amazon Connect user selection).
   */
  Type: FieldType;
};
/**
 * Attribute type definition for `AWS::Cases::Field`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cases-field.html#aws-resource-cases-field-return-values}
 */
export type CasesFieldAttributes = {
  /**
   * The time at which the field was created.
   */
  CreatedTime: string;
  /**
   * The Amazon Resource Name (ARN) of the field.
   * @minLength `1`
   * @maxLength `500`
   */
  FieldArn: string;
  /**
   * The unique identifier of a field.
   * @minLength `1`
   * @maxLength `500`
   */
  FieldId: string;
  /**
   * The time at which the field was created or last modified.
   */
  LastModifiedTime: string;
  /**
   * Indicates whether this is a System field (predefined by AWS) or a Custom field (created by your organization). System fields cannot be modified or deleted.
   */
  Namespace: "System" | "Custom";
};
/**
 * Type definition for `AWS::Cases::Field.FieldType`.
 * The data type of the field, which determines validation rules, input constraints, and display format. Each type has specific constraints: Text (string input), Number (numeric values), Boolean (true/false), DateTime (date/time picker), SingleSelect (dropdown options), Url (URL validation), User (Amazon Connect user selection).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cases-field-fieldtype.html}
 */
export type FieldType =
  | "Text"
  | "Number"
  | "Boolean"
  | "DateTime"
  | "SingleSelect"
  | "Url"
  | "User";
/**
 * Type definition for `AWS::Cases::Field.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cases-field-tag.html}
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
 * Resource type definition for `AWS::Cases::Field`.
 * A field in the Cases domain. This field is used to define the case object model (that is, defines what data can be captured on cases) in a Cases domain.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cases-field.html}
 */
export class CasesField extends $Resource<
  "AWS::Cases::Field",
  CasesFieldProperties,
  CasesFieldAttributes
> {
  public static readonly Type = "AWS::Cases::Field";
  constructor(
    logicalId: string,
    properties: CasesFieldProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CasesField.Type, properties, options);
  }
}
