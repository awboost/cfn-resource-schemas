import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Connect::TaskTemplate.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-tasktemplate.html}
 */
export type ConnectTaskTemplateProperties = {
  /**
   * the client token string in uuid format
   * @pattern `^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$`
   */
  ClientToken?: string;
  /**
   * The constraints for the task template
   */
  Constraints?: {
    /**
     * The list of the task template's invisible fields
     * @maxLength `50`
     */
    InvisibleFields?: InvisibleFieldInfo[];
    /**
     * The list of the task template's read only fields
     * @maxLength `50`
     */
    ReadOnlyFields?: ReadOnlyFieldInfo[];
    /**
     * The list of the task template's required fields
     * @maxLength `50`
     */
    RequiredFields?: RequiredFieldInfo[];
  };
  /**
   * The identifier of the contact flow.
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]/‍*contact-flow/[-a-zA-Z0-9]*$`
   */
  ContactFlowArn?: string;
  /**
   * @maxLength `50`
   */
  Defaults?: DefaultFieldValue[];
  /**
   * The description of the task template.
   * @minLength `0`
   * @maxLength `255`
   */
  Description?: string;
  /**
   * The list of task template's fields
   * @maxLength `50`
   */
  Fields?: Field[];
  /**
   * The identifier (arn) of the instance.
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*$`
   */
  InstanceArn: string;
  /**
   * The name of the task template.
   * @minLength `1`
   * @maxLength `100`
   */
  Name?: string;
  /**
   * The status of the task template
   */
  Status?: Status;
  /**
   * One or more tags.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Connect::TaskTemplate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-tasktemplate.html#aws-resource-connect-tasktemplate-return-values}
 */
export type ConnectTaskTemplateAttributes = {
  /**
   * The identifier (arn) of the task template.
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]/‍*task-template/[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}$`
   */
  Arn: string;
};
/**
 * Type definition for `AWS::Connect::TaskTemplate.DefaultFieldValue`.
 * the default value for the task template's field
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-tasktemplate-defaultfieldvalue.html}
 */
export type DefaultFieldValue = {
  /**
   * the default value for the task template's field
   * @minLength `1`
   * @maxLength `4096`
   */
  DefaultValue: string;
  /**
   * the identifier (name) for the task template field
   */
  Id: FieldIdentifier;
};
/**
 * Type definition for `AWS::Connect::TaskTemplate.Field`.
 * A task template field object.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-tasktemplate-field.html}
 */
export type Field = {
  /**
   * The description of the task template's field
   * @minLength `0`
   * @maxLength `255`
   */
  Description?: string;
  /**
   * the identifier (name) for the task template field
   */
  Id: FieldIdentifier;
  /**
   * list of field options to be used with single select
   * @maxLength `50`
   */
  SingleSelectOptions?: string[];
  /**
   * The type of the task template's field
   */
  Type: FieldType;
};
/**
 * Type definition for `AWS::Connect::TaskTemplate.FieldIdentifier`.
 * the identifier (name) for the task template field
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-tasktemplate-fieldidentifier.html}
 */
export type FieldIdentifier = {
  /**
   * The name of the task template field
   * @minLength `1`
   * @maxLength `100`
   */
  Name: string;
};
/**
 * Type definition for `AWS::Connect::TaskTemplate.FieldType`.
 * The type of the task template's field
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-tasktemplate-fieldtype.html}
 */
export type FieldType =
  | "NAME"
  | "DESCRIPTION"
  | "SCHEDULED_TIME"
  | "QUICK_CONNECT"
  | "URL"
  | "NUMBER"
  | "TEXT"
  | "TEXT_AREA"
  | "DATE_TIME"
  | "BOOLEAN"
  | "SINGLE_SELECT"
  | "EMAIL";
/**
 * Type definition for `AWS::Connect::TaskTemplate.InvisibleFieldInfo`.
 * Invisible field info
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-tasktemplate-invisiblefieldinfo.html}
 */
export type InvisibleFieldInfo = {
  /**
   * the identifier (name) for the task template field
   */
  Id: FieldIdentifier;
};
/**
 * Type definition for `AWS::Connect::TaskTemplate.ReadOnlyFieldInfo`.
 * ReadOnly field info
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-tasktemplate-readonlyfieldinfo.html}
 */
export type ReadOnlyFieldInfo = {
  /**
   * the identifier (name) for the task template field
   */
  Id: FieldIdentifier;
};
/**
 * Type definition for `AWS::Connect::TaskTemplate.RequiredFieldInfo`.
 * Required field info
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-tasktemplate-requiredfieldinfo.html}
 */
export type RequiredFieldInfo = {
  /**
   * the identifier (name) for the task template field
   */
  Id: FieldIdentifier;
};
/**
 * Type definition for `AWS::Connect::TaskTemplate.Status`.
 * The status of the task template
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-tasktemplate-status.html}
 */
export type Status = "ACTIVE" | "INACTIVE";
/**
 * Type definition for `AWS::Connect::TaskTemplate.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-tasktemplate-tag.html}
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
   * The value for the tag. . You can specify a value that is maximum of 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::Connect::TaskTemplate.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-tasktemplate.html}
 */
export class ConnectTaskTemplate extends $Resource<
  "AWS::Connect::TaskTemplate",
  ConnectTaskTemplateProperties,
  ConnectTaskTemplateAttributes
> {
  public static readonly Type = "AWS::Connect::TaskTemplate";
  constructor(
    logicalId: string,
    properties: ConnectTaskTemplateProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ConnectTaskTemplate.Type, properties, options);
  }
}
