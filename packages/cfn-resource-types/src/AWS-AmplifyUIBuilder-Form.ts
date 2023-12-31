import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::AmplifyUIBuilder::Form Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-form.html}
 */
export type AmplifyUIBuilderFormProperties = {
  AppId?: string;
  Cta?: FormCTA;
  DataType: FormDataTypeConfig;
  EnvironmentName?: string;
  Fields: FieldsMap;
  FormActionType: FormActionType;
  LabelDecorator?: LabelDecorator;
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  Name: string;
  SchemaVersion: string;
  SectionalElements: SectionalElementMap;
  Style: FormStyle;
  Tags?: Tags;
};
/**
 * Attribute type definition for `AWS::AmplifyUIBuilder::Form`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-form.html#aws-resource-amplifyuibuilder-form-return-values}
 */
export type AmplifyUIBuilderFormAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::AmplifyUIBuilder::Form.FieldConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-fieldconfig.html}
 */
export type FieldConfig = {
  Excluded?: boolean;
  InputType?: FieldInputConfig;
  Label?: string;
  Position?: FieldPosition;
  Validations?: FieldValidationConfiguration[];
};
/**
 * Type definition for `AWS::AmplifyUIBuilder::Form.FieldInputConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-fieldinputconfig.html}
 */
export type FieldInputConfig = {
  DefaultChecked?: boolean;
  DefaultCountryCode?: string;
  DefaultValue?: string;
  DescriptiveText?: string;
  FileUploaderConfig?: FileUploaderFieldConfig;
  IsArray?: boolean;
  MaxValue?: number;
  MinValue?: number;
  Name?: string;
  Placeholder?: string;
  ReadOnly?: boolean;
  Required?: boolean;
  Step?: number;
  Type: string;
  Value?: string;
  ValueMappings?: ValueMappings;
};
/**
 * Type definition for `AWS::AmplifyUIBuilder::Form.FieldPosition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-fieldposition.html}
 */
export type FieldPosition =
  | {
      Fixed: FixedPosition;
    }
  | {
      RightOf: string;
    }
  | {
      Below: string;
    };
/**
 * Type definition for `AWS::AmplifyUIBuilder::Form.FieldsMap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-fieldsmap.html}
 */
export type FieldsMap = Record<string, FieldConfig>;
/**
 * Type definition for `AWS::AmplifyUIBuilder::Form.FieldValidationConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-fieldvalidationconfiguration.html}
 */
export type FieldValidationConfiguration = {
  NumValues?: number[];
  StrValues?: string[];
  Type: string;
  ValidationMessage?: string;
};
/**
 * Type definition for `AWS::AmplifyUIBuilder::Form.FileUploaderFieldConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-fileuploaderfieldconfig.html}
 */
export type FileUploaderFieldConfig = {
  AcceptedFileTypes: string[];
  AccessLevel: StorageAccessLevel;
  IsResumable?: boolean;
  MaxFileCount?: number;
  MaxSize?: number;
  ShowThumbnails?: boolean;
};
/**
 * Type definition for `AWS::AmplifyUIBuilder::Form.FixedPosition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-fixedposition.html}
 */
export type FixedPosition = "first";
/**
 * Type definition for `AWS::AmplifyUIBuilder::Form.FormActionType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-formactiontype.html}
 */
export type FormActionType = "create" | "update";
/**
 * Type definition for `AWS::AmplifyUIBuilder::Form.FormButton`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-formbutton.html}
 */
export type FormButton = {
  Children?: string;
  Excluded?: boolean;
  Position?: FieldPosition;
};
/**
 * Type definition for `AWS::AmplifyUIBuilder::Form.FormButtonsPosition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-formbuttonsposition.html}
 */
export type FormButtonsPosition = "top" | "bottom" | "top_and_bottom";
/**
 * Type definition for `AWS::AmplifyUIBuilder::Form.FormCTA`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-formcta.html}
 */
export type FormCTA = {
  Cancel?: FormButton;
  Clear?: FormButton;
  Position?: FormButtonsPosition;
  Submit?: FormButton;
};
/**
 * Type definition for `AWS::AmplifyUIBuilder::Form.FormDataSourceType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-formdatasourcetype.html}
 */
export type FormDataSourceType = "DataStore" | "Custom";
/**
 * Type definition for `AWS::AmplifyUIBuilder::Form.FormDataTypeConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-formdatatypeconfig.html}
 */
export type FormDataTypeConfig = {
  DataSourceType: FormDataSourceType;
  DataTypeName: string;
};
/**
 * Type definition for `AWS::AmplifyUIBuilder::Form.FormInputValueProperty`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-forminputvalueproperty.html}
 */
export type FormInputValueProperty = {
  Value?: string;
};
/**
 * Type definition for `AWS::AmplifyUIBuilder::Form.FormStyle`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-formstyle.html}
 */
export type FormStyle = {
  HorizontalGap?: FormStyleConfig;
  OuterPadding?: FormStyleConfig;
  VerticalGap?: FormStyleConfig;
};
/**
 * Type definition for `AWS::AmplifyUIBuilder::Form.FormStyleConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-formstyleconfig.html}
 */
export type FormStyleConfig =
  | {
      TokenReference: string;
    }
  | {
      Value: string;
    };
/**
 * Type definition for `AWS::AmplifyUIBuilder::Form.LabelDecorator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-labeldecorator.html}
 */
export type LabelDecorator = "required" | "optional" | "none";
/**
 * Type definition for `AWS::AmplifyUIBuilder::Form.SectionalElement`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-sectionalelement.html}
 */
export type SectionalElement = {
  Excluded?: boolean;
  Level?: number;
  Orientation?: string;
  Position?: FieldPosition;
  Text?: string;
  Type: string;
};
/**
 * Type definition for `AWS::AmplifyUIBuilder::Form.SectionalElementMap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-sectionalelementmap.html}
 */
export type SectionalElementMap = Record<string, SectionalElement>;
/**
 * Type definition for `AWS::AmplifyUIBuilder::Form.StorageAccessLevel`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-storageaccesslevel.html}
 */
export type StorageAccessLevel = "public" | "protected" | "private";
/**
 * Type definition for `AWS::AmplifyUIBuilder::Form.Tags`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-tags.html}
 */
export type Tags = Record<string, string>;
/**
 * Type definition for `AWS::AmplifyUIBuilder::Form.ValueMapping`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-valuemapping.html}
 */
export type ValueMapping = {
  DisplayValue?: FormInputValueProperty;
  Value: FormInputValueProperty;
};
/**
 * Type definition for `AWS::AmplifyUIBuilder::Form.ValueMappings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-valuemappings.html}
 */
export type ValueMappings = {
  Values: ValueMapping[];
};
/**
 * Definition of AWS::AmplifyUIBuilder::Form Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-form.html}
 */
export class AmplifyUIBuilderForm extends $Resource<
  "AWS::AmplifyUIBuilder::Form",
  AmplifyUIBuilderFormProperties,
  AmplifyUIBuilderFormAttributes
> {
  public static readonly Type = "AWS::AmplifyUIBuilder::Form";
  constructor(
    logicalId: string,
    properties: AmplifyUIBuilderFormProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AmplifyUIBuilderForm.Type, properties, options);
  }
}
