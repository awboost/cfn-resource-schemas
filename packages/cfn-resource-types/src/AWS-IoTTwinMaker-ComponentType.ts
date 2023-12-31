import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource schema for AWS::IoTTwinMaker::ComponentType
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-componenttype.html}
 */
export type IoTTwinMakerComponentTypeProperties = {
  /**
   * The ID of the component type.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `[a-zA-Z_\.\-0-9:]+`
   */
  ComponentTypeId: string;
  /**
   * An map of the composite component types in the component type. Each composite component type's key must be unique to this map.
   */
  CompositeComponentTypes?: Record<string, CompositeComponentType>;
  /**
   * The description of the component type.
   * @maxLength `512`
   */
  Description?: string;
  /**
   * Specifies the parent component type to extend.
   * @minLength `1`
   * @maxLength `256`
   */
  ExtendsFrom?: string[];
  /**
   * a Map of functions in the component type. Each function's key must be unique to this map.
   */
  Functions?: Record<string, Function>;
  /**
   * A Boolean value that specifies whether an entity can have more than one component of this type.
   */
  IsSingleton?: boolean;
  /**
   * An map of the property definitions in the component type. Each property definition's key must be unique to this map.
   */
  PropertyDefinitions?: Record<string, PropertyDefinition>;
  /**
   * An map of the property groups in the component type. Each property group's key must be unique to this map.
   */
  PropertyGroups?: Record<string, PropertyGroup>;
  /**
   * A map of key-value pairs to associate with a resource.
   */
  Tags?: Record<string, string>;
  /**
   * The ID of the workspace that contains the component type.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `[a-zA-Z_0-9][a-zA-Z_\-0-9]*[a-zA-Z0-9]+`
   */
  WorkspaceId: string;
};
/**
 * Attribute type definition for `AWS::IoTTwinMaker::ComponentType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-componenttype.html#aws-resource-iottwinmaker-componenttype-return-values}
 */
export type IoTTwinMakerComponentTypeAttributes = {
  /**
   * The ARN of the component type.
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `arn:((aws)|(aws-cn)|(aws-us-gov)):iottwinmaker:[a-z0-9-]+:[0-9]{12}:[\/a-zA-Z0-9_\-\.:]+`
   */
  Arn: string;
  /**
   * The date and time when the component type was created.
   */
  CreationDateTime: string;
  /**
   * A Boolean value that specifies whether the component type is abstract.
   */
  IsAbstract: boolean;
  /**
   * A Boolean value that specifies whether the component type has a schema initializer and that the schema initializer has run.
   */
  IsSchemaInitialized: boolean;
  /**
   * The current status of the component type.
   */
  Status: Status;
  /**
   * The last date and time when the component type was updated.
   */
  UpdateDateTime: string;
};
/**
 * Type definition for `AWS::IoTTwinMaker::ComponentType.CompositeComponentType`.
 * An object that sets information about a composite component type.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-compositecomponenttype.html}
 */
export type CompositeComponentType = {
  /**
   * The id of the composite component type.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `[a-zA-Z_\.\-0-9:]+`
   */
  ComponentTypeId?: string;
};
/**
 * Type definition for `AWS::IoTTwinMaker::ComponentType.DataConnector`.
 * The data connector.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-dataconnector.html}
 */
export type DataConnector = {
  /**
   * A Boolean value that specifies whether the data connector is native to IoT TwinMaker.
   */
  IsNative?: boolean;
  /**
   * The Lambda function associated with this data connector.
   */
  Lambda?: LambdaFunction;
};
/**
 * Type definition for `AWS::IoTTwinMaker::ComponentType.DataType`.
 * An object that specifies the data type of a property.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-datatype.html}
 */
export type DataType = {
  /**
   * The allowed values for this data type.
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
  Type:
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
 * Type definition for `AWS::IoTTwinMaker::ComponentType.DataValue`.
 * An object that specifies a value for a property.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-datavalue.html}
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
 * Type definition for `AWS::IoTTwinMaker::ComponentType.Function`.
 * The function of component type.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-function.html}
 */
export type Function = {
  /**
   * The data connector.
   */
  ImplementedBy?: DataConnector;
  /**
   * The required properties of the function.
   * @minLength `1`
   * @maxLength `256`
   */
  RequiredProperties?: string[];
  /**
   * The scope of the function.
   */
  Scope?: "ENTITY" | "WORKSPACE";
};
/**
 * Type definition for `AWS::IoTTwinMaker::ComponentType.LambdaFunction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-lambdafunction.html}
 */
export type LambdaFunction = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `arn:((aws)|(aws-cn)|(aws-us-gov)):lambda:[a-z0-9-]+:[0-9]{12}:function:[\/a-zA-Z0-9_-]+`
   */
  Arn: string;
};
/**
 * Type definition for `AWS::IoTTwinMaker::ComponentType.PropertyDefinition`.
 * An object that sets information about a property.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-propertydefinition.html}
 */
export type PropertyDefinition = {
  /**
   * An object that specifies information about a property.
   */
  Configurations?: Record<string, string>;
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
 * Type definition for `AWS::IoTTwinMaker::ComponentType.PropertyGroup`.
 * An object that sets information about a property group.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-propertygroup.html}
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
 * Type definition for `AWS::IoTTwinMaker::ComponentType.Relationship`.
 * The type of the relationship.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-relationship.html}
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
 * Type definition for `AWS::IoTTwinMaker::ComponentType.Status`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-status.html}
 */
export type Status = {
  Error?:
    | Record<string, any>
    | {
        Code?: "VALIDATION_ERROR" | "INTERNAL_FAILURE";
        /**
         * @maxLength `2048`
         */
        Message?: string;
      };
  State?: "CREATING" | "UPDATING" | "DELETING" | "ACTIVE" | "ERROR";
};
/**
 * Resource schema for AWS::IoTTwinMaker::ComponentType
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-componenttype.html}
 */
export class IoTTwinMakerComponentType extends $Resource<
  "AWS::IoTTwinMaker::ComponentType",
  IoTTwinMakerComponentTypeProperties,
  IoTTwinMakerComponentTypeAttributes
> {
  public static readonly Type = "AWS::IoTTwinMaker::ComponentType";
  public static readonly AttributeNames = [
    "Arn" as const,
    "CreationDateTime" as const,
    "IsAbstract" as const,
    "IsSchemaInitialized" as const,
    "Status" as const,
    "UpdateDateTime" as const,
  ];
  constructor(
    logicalId: string,
    properties: IoTTwinMakerComponentTypeProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      IoTTwinMakerComponentType.Type,
      properties,
      IoTTwinMakerComponentType.AttributeNames,
      options,
    );
  }
}
