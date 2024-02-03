import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::AmplifyUIBuilder::Component Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-component.html}
 */
export type AmplifyUIBuilderComponentProperties = {
  AppId?: string;
  BindingProperties?: ComponentBindingProperties;
  Children?: ComponentChild[];
  CollectionProperties?: ComponentCollectionProperties;
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  ComponentType?: string;
  EnvironmentName?: string;
  Events?: ComponentEvents;
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  Name?: string;
  Overrides?: ComponentOverrides;
  Properties?: ComponentProperties;
  SchemaVersion?: string;
  SourceId?: string;
  Tags?: Tags;
  Variants?: ComponentVariant[];
};
/**
 * Attribute type definition for `AWS::AmplifyUIBuilder::Component`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-component.html#aws-resource-amplifyuibuilder-component-return-values}
 */
export type AmplifyUIBuilderComponentAttributes = {
  CreatedAt: string;
  Id: string;
  ModifiedAt: string;
};
/**
 * Type definition for `AWS::AmplifyUIBuilder::Component.ActionParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-actionparameters.html}
 */
export type ActionParameters = {
  Anchor?: ComponentProperty;
  Fields?: ComponentProperties;
  Global?: ComponentProperty;
  Id?: ComponentProperty;
  Model?: string;
  State?: MutationActionSetStateParameter;
  Target?: ComponentProperty;
  Type?: ComponentProperty;
  Url?: ComponentProperty;
};
/**
 * Type definition for `AWS::AmplifyUIBuilder::Component.ComponentBindingProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentbindingproperties.html}
 */
export type ComponentBindingProperties = Record<
  string,
  ComponentBindingPropertiesValue
>;
/**
 * Type definition for `AWS::AmplifyUIBuilder::Component.ComponentBindingPropertiesValue`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentbindingpropertiesvalue.html}
 */
export type ComponentBindingPropertiesValue = {
  BindingProperties?: ComponentBindingPropertiesValueProperties;
  DefaultValue?: string;
  Type?: string;
};
/**
 * Type definition for `AWS::AmplifyUIBuilder::Component.ComponentBindingPropertiesValueProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentbindingpropertiesvalueproperties.html}
 */
export type ComponentBindingPropertiesValueProperties = {
  Bucket?: string;
  DefaultValue?: string;
  Field?: string;
  Key?: string;
  Model?: string;
  Predicates?: Predicate[];
  SlotName?: string;
  UserAttribute?: string;
};
/**
 * Type definition for `AWS::AmplifyUIBuilder::Component.ComponentChild`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentchild.html}
 */
export type ComponentChild = {
  Children?: ComponentChild[];
  ComponentType: string;
  Events?: ComponentEvents;
  Name: string;
  Properties: ComponentProperties;
  SourceId?: string;
};
/**
 * Type definition for `AWS::AmplifyUIBuilder::Component.ComponentCollectionProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentcollectionproperties.html}
 */
export type ComponentCollectionProperties = Record<
  string,
  ComponentDataConfiguration
>;
/**
 * Type definition for `AWS::AmplifyUIBuilder::Component.ComponentConditionProperty`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentconditionproperty.html}
 */
export type ComponentConditionProperty = {
  Else?: ComponentProperty;
  Field?: string;
  Operand?: string;
  OperandType?: string;
  Operator?: string;
  Property?: string;
  Then?: ComponentProperty;
};
/**
 * Type definition for `AWS::AmplifyUIBuilder::Component.ComponentDataConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentdataconfiguration.html}
 */
export type ComponentDataConfiguration = {
  Identifiers?: string[];
  Model: string;
  Predicate?: Predicate;
  Sort?: SortProperty[];
};
/**
 * Type definition for `AWS::AmplifyUIBuilder::Component.ComponentEvent`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentevent.html}
 */
export type ComponentEvent = {
  Action?: string;
  BindingEvent?: string;
  Parameters?: ActionParameters;
};
/**
 * Type definition for `AWS::AmplifyUIBuilder::Component.ComponentEvents`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentevents.html}
 */
export type ComponentEvents = Record<string, ComponentEvent>;
/**
 * Type definition for `AWS::AmplifyUIBuilder::Component.ComponentOverrides`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentoverrides.html}
 */
export type ComponentOverrides = Record<string, ComponentOverridesValue>;
/**
 * Type definition for `AWS::AmplifyUIBuilder::Component.ComponentOverridesValue`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentoverridesvalue.html}
 */
export type ComponentOverridesValue = Record<string, string>;
/**
 * Type definition for `AWS::AmplifyUIBuilder::Component.ComponentProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentproperties.html}
 */
export type ComponentProperties = Record<string, ComponentProperty>;
/**
 * Type definition for `AWS::AmplifyUIBuilder::Component.ComponentProperty`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentproperty.html}
 */
export type ComponentProperty = {
  BindingProperties?: ComponentPropertyBindingProperties;
  Bindings?: FormBindings;
  CollectionBindingProperties?: ComponentPropertyBindingProperties;
  ComponentName?: string;
  Concat?: ComponentProperty[];
  Condition?: ComponentConditionProperty;
  Configured?: boolean;
  DefaultValue?: string;
  Event?: string;
  ImportedValue?: string;
  Model?: string;
  Property?: string;
  Type?: string;
  UserAttribute?: string;
  Value?: string;
};
/**
 * Type definition for `AWS::AmplifyUIBuilder::Component.ComponentPropertyBindingProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentpropertybindingproperties.html}
 */
export type ComponentPropertyBindingProperties = {
  Field?: string;
  Property: string;
};
/**
 * Type definition for `AWS::AmplifyUIBuilder::Component.ComponentVariant`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentvariant.html}
 */
export type ComponentVariant = {
  Overrides?: ComponentOverrides;
  VariantValues?: ComponentVariantValues;
};
/**
 * Type definition for `AWS::AmplifyUIBuilder::Component.ComponentVariantValues`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentvariantvalues.html}
 */
export type ComponentVariantValues = Record<string, string>;
/**
 * Type definition for `AWS::AmplifyUIBuilder::Component.FormBindingElement`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-formbindingelement.html}
 */
export type FormBindingElement = {
  Element: string;
  Property: string;
};
/**
 * Type definition for `AWS::AmplifyUIBuilder::Component.FormBindings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-formbindings.html}
 */
export type FormBindings = Record<string, FormBindingElement>;
/**
 * Type definition for `AWS::AmplifyUIBuilder::Component.MutationActionSetStateParameter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-mutationactionsetstateparameter.html}
 */
export type MutationActionSetStateParameter = {
  ComponentName: string;
  Property: string;
  Set: ComponentProperty;
};
/**
 * Type definition for `AWS::AmplifyUIBuilder::Component.Predicate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-predicate.html}
 */
export type Predicate = {
  And?: Predicate[];
  Field?: string;
  Operand?: string;
  /**
   * @pattern `^boolean|string|number$`
   */
  OperandType?: string;
  Operator?: string;
  Or?: Predicate[];
};
/**
 * Type definition for `AWS::AmplifyUIBuilder::Component.SortDirection`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-sortdirection.html}
 */
export type SortDirection = "ASC" | "DESC";
/**
 * Type definition for `AWS::AmplifyUIBuilder::Component.SortProperty`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-sortproperty.html}
 */
export type SortProperty = {
  Direction: SortDirection;
  Field: string;
};
/**
 * Type definition for `AWS::AmplifyUIBuilder::Component.Tags`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-tags.html}
 */
export type Tags = Record<string, string>;
/**
 * Definition of AWS::AmplifyUIBuilder::Component Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-component.html}
 */
export class AmplifyUIBuilderComponent extends $Resource<
  "AWS::AmplifyUIBuilder::Component",
  AmplifyUIBuilderComponentProperties,
  AmplifyUIBuilderComponentAttributes
> {
  public static readonly Type = "AWS::AmplifyUIBuilder::Component";
  constructor(
    logicalId: string,
    properties: AmplifyUIBuilderComponentProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AmplifyUIBuilderComponent.Type, properties, options);
  }
}
