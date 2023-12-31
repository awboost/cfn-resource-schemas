import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::IoTTwinMaker::Entity
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html}
 */
export type IoTTwinMakerEntityProperties = {
  /**
   * A map that sets information about a component type.
   */
  Components?: Record<string, Component>;
  /**
   * A map that sets information about a composite component.
   */
  CompositeComponents?: Record<string, CompositeComponent>;
  /**
   * The description of the entity.
   * @minLength `0`
   * @maxLength `512`
   */
  Description?: string;
  /**
   * The ID of the entity.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}|^[a-zA-Z0-9][a-zA-Z_\-0-9.:]*[a-zA-Z0-9]+`
   */
  EntityId?: string;
  /**
   * The name of the entity.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `[a-zA-Z_0-9-.][a-zA-Z_0-9-. ]*[a-zA-Z0-9]+`
   */
  EntityName: string;
  /**
   * The ID of the parent entity.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `\$ROOT|^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}|^[a-zA-Z0-9][a-zA-Z_\-0-9.:]*[a-zA-Z0-9]+`
   */
  ParentEntityId?: string;
  /**
   * A key-value pair to associate with a resource.
   */
  Tags?: Record<string, string>;
  /**
   * The ID of the workspace.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `[a-zA-Z_0-9][a-zA-Z_\-0-9]*[a-zA-Z0-9]+`
   */
  WorkspaceId: string;
};
/**
 * Attribute type definition for `AWS::IoTTwinMaker::Entity`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#aws-resource-iottwinmaker-entity-return-values}
 */
export type IoTTwinMakerEntityAttributes = {
  /**
   * The ARN of the entity.
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `arn:((aws)|(aws-cn)|(aws-us-gov)):iottwinmaker:[a-z0-9-]+:[0-9]{12}:[\/a-zA-Z0-9_\-\.:]+`
   */
  Arn: string;
  /**
   * The date and time when the entity was created.
   */
  CreationDateTime: string;
  /**
   * A Boolean value that specifies whether the entity has child entities or not.
   */
  HasChildEntities: boolean;
  /**
   * The current status of the entity.
   */
  Status: {};
  /**
   * The last date and time when the entity was updated.
   */
  UpdateDateTime: string;
};
/**
 * Type definition for `AWS::IoTTwinMaker::Entity.Component`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-component.html}
 */
export type Component = {
  /**
   * The name of the component.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `[a-zA-Z_\-0-9]+`
   */
  ComponentName?: string;
  /**
   * The ID of the component type.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `[a-zA-Z_\-0-9]+`
   */
  ComponentTypeId?: string;
  /**
   * The name of the property definition set in the component.
   * @minLength `1`
   * @maxLength `256`
   */
  DefinedIn?: string;
  /**
   * The description of the component.
   * @minLength `0`
   * @maxLength `512`
   */
  Description?: string;
  /**
   * An object that maps strings to the properties to set in the component type. Each string in the mapping must be unique to this object.
   */
  Properties?: Record<string, Property>;
  /**
   * An object that maps strings to the property groups to set in the component type. Each string in the mapping must be unique to this object.
   */
  PropertyGroups?: Record<string, PropertyGroup>;
  /**
   * The current status of the entity.
   */
  Status?: Status;
};
/**
 * Type definition for `AWS::IoTTwinMaker::Entity.CompositeComponent`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-compositecomponent.html}
 */
export type CompositeComponent = {
  /**
   * The name of the component.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `[a-zA-Z_\-0-9]+`
   */
  ComponentName?: string;
  /**
   * The path of the component.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `[a-zA-Z_\-0-9/]+`
   */
  ComponentPath?: string;
  /**
   * The ID of the component type.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `[a-zA-Z_\-0-9]+`
   */
  ComponentTypeId?: string;
  /**
   * The description of the component.
   * @minLength `0`
   * @maxLength `512`
   */
  Description?: string;
  /**
   * An object that maps strings to the properties to set in the component type. Each string in the mapping must be unique to this object.
   */
  Properties?: Record<string, Property>;
  /**
   * An object that maps strings to the property groups to set in the component type. Each string in the mapping must be unique to this object.
   */
  PropertyGroups?: Record<string, PropertyGroup>;
  /**
   * The current status of the component.
   */
  Status?: Status;
};
/**
 * Type definition for `AWS::IoTTwinMaker::Entity.DataType`.
 * An object that specifies the data type of a property.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-datatype.html}
 */
export type DataType = {
  /**
   * The allowed values for this data type.
   * @minLength `0`
   * @maxLength `50`
   */
  AllowedValues?: DataValue[];
  /**
   * The nested type in the data type.
   */
  NestedType?: DataType;
  /**
   * A relationship that associates a component with another component.
   */
  Relationship?: Relationship;
  /**
   * The underlying type of the data type.
   */
  Type?:
    | "RELATIONSHIP"
    | "STRING"
    | "LONG"
    | "BOOLEAN"
    | "INTEGER"
    | "DOUBLE"
    | "LIST"
    | "MAP";
  /**
   * The unit of measure used in this data type.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `.*`
   */
  UnitOfMeasure?: string;
};
/**
 * Type definition for `AWS::IoTTwinMaker::Entity.DataValue`.
 * An object that specifies a value for a property.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-datavalue.html}
 */
export type DataValue = {
  /**
   * A Boolean value.
   */
  BooleanValue?: boolean;
  /**
   * A double value.
   */
  DoubleValue?: number;
  /**
   * An expression that produces the value.
   * @minLength `1`
   * @maxLength `316`
   * @pattern `(^\$\{Parameters\.[a-zA-z]+([a-zA-z_0-9]*)}$)`
   */
  Expression?: string;
  /**
   * An integer value.
   */
  IntegerValue?: number;
  /**
   * A list of multiple values.
   * @minLength `0`
   * @maxLength `50`
   */
  ListValue?: DataValue[];
  /**
   * A long value.
   */
  LongValue?: number;
  /**
   * An object that maps strings to multiple DataValue objects.
   */
  MapValue?: Record<string, DataValue>;
  /**
   * A value that relates a component to another component.
   */
  RelationshipValue?: {
    /**
     * @minLength `1`
     * @maxLength `256`
     * @pattern `[a-zA-Z_\-0-9]+`
     */
    TargetComponentName?: string;
    /**
     * @minLength `1`
     * @maxLength `128`
     * @pattern `[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}|^[a-zA-Z0-9][a-zA-Z_\-0-9.:]*[a-zA-Z0-9]+`
     */
    TargetEntityId?: string;
  };
  /**
   * A string value.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `.*`
   */
  StringValue?: string;
};
/**
 * Type definition for `AWS::IoTTwinMaker::Entity.Property`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-property.html}
 */
export type Property = {
  /**
   * An object that specifies information about a property.
   */
  Definition?: {
    /**
     * An object that specifies information about a property.
     */
    Configuration?: PropertyDefinitionConfiguration;
    /**
     * An object that contains information about the data type.
     */
    DataType?: DataType;
    /**
     * An object that contains the default value.
     */
    DefaultValue?: DataValue;
    /**
     * A Boolean value that specifies whether the property ID comes from an external data store.
     */
    IsExternalId?: boolean;
    /**
     * A Boolean value that specifies whether the property definition can be updated.
     */
    IsFinal?: boolean;
    /**
     * A Boolean value that specifies whether the property definition is imported from an external data store.
     */
    IsImported?: boolean;
    /**
     * A Boolean value that specifies whether the property definition is inherited from a parent entity.
     */
    IsInherited?: boolean;
    /**
     * A Boolean value that specifies whether the property is required.
     */
    IsRequiredInEntity?: boolean;
    /**
     * A Boolean value that specifies whether the property is stored externally.
     */
    IsStoredExternally?: boolean;
    /**
     * A Boolean value that specifies whether the property consists of time series data.
     */
    IsTimeSeries?: boolean;
  };
  /**
   * The value of the property.
   */
  Value?: DataValue;
};
/**
 * Type definition for `AWS::IoTTwinMaker::Entity.PropertyDefinitionConfiguration`.
 * An object that specifies information about a property.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-propertydefinitionconfiguration.html}
 */
export type PropertyDefinitionConfiguration = Record<string, string>;
/**
 * Type definition for `AWS::IoTTwinMaker::Entity.PropertyGroup`.
 * An object that specifies information about a property group.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-propertygroup.html}
 */
export type PropertyGroup = {
  /**
   * The type of property group.
   */
  GroupType?: "TABULAR";
  /**
   * The list of property names in the property group.
   * @minLength `1`
   * @maxLength `256`
   */
  PropertyNames?: string[];
};
/**
 * Type definition for `AWS::IoTTwinMaker::Entity.Relationship`.
 * The type of the relationship.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-relationship.html}
 */
export type Relationship = {
  /**
   * The type of the relationship.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `.*`
   */
  RelationshipType?: string;
  /**
   * The ID of the target component type associated with this relationship.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `[a-zA-Z_\.\-0-9:]+`
   */
  TargetComponentTypeId?: string;
};
/**
 * Type definition for `AWS::IoTTwinMaker::Entity.Status`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-status.html}
 */
export type Status = {
  Error?:
    | Record<string, any>
    | {
        Code?: "VALIDATION_ERROR" | "INTERNAL_FAILURE";
        /**
         * @minLength `0`
         * @maxLength `2048`
         */
        Message?: string;
      };
  State?: "CREATING" | "UPDATING" | "DELETING" | "ACTIVE" | "ERROR";
};
/**
 * Resource schema for AWS::IoTTwinMaker::Entity
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html}
 */
export class IoTTwinMakerEntity extends $Resource<
  "AWS::IoTTwinMaker::Entity",
  IoTTwinMakerEntityProperties,
  IoTTwinMakerEntityAttributes
> {
  public static readonly Type = "AWS::IoTTwinMaker::Entity";
  constructor(
    logicalId: string,
    properties: IoTTwinMakerEntityProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IoTTwinMakerEntity.Type, properties, options);
  }
}
