import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::CustomerProfiles::Integration`.
 * The resource schema for creating an Amazon Connect Customer Profiles Integration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html}
 */
export type CustomerProfilesIntegrationProperties = {
  /**
   * The unique name of the domain.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[a-zA-Z0-9_-]+$`
   */
  DomainName: string;
  /**
   * A list of unique names for active event triggers associated with the integration.
   * @minLength `1`
   * @maxLength `1`
   */
  EventTriggerNames?: string[];
  FlowDefinition?: FlowDefinition;
  /**
   * The name of the ObjectType defined for the 3rd party data in Profile Service
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[a-zA-Z_][a-zA-Z_0-9-]*$`
   */
  ObjectTypeName?: string;
  /**
   * The mapping between 3rd party event types and ObjectType names
   */
  ObjectTypeNames?: ObjectTypeMapping[];
  /**
   * Scope of the integration, such as 'PROFILE' or 'DOMAIN'
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[a-zA-Z_][a-zA-Z_0-9-]*$`
   */
  Scope?: "PROFILE" | "DOMAIN";
  /**
   * The tags (keys and values) associated with the integration
   * @minLength `0`
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * The URI of the S3 bucket or any other type of data source.
   * @minLength `1`
   * @maxLength `255`
   */
  Uri?: string;
};
/**
 * Attribute type definition for `AWS::CustomerProfiles::Integration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#aws-resource-customerprofiles-integration-return-values}
 */
export type CustomerProfilesIntegrationAttributes = {
  /**
   * The time of this integration got created
   */
  CreatedAt: string;
  /**
   * The time of this integration got last updated at
   */
  LastUpdatedAt: string;
};
/**
 * Type definition for `AWS::CustomerProfiles::Integration.ConnectorOperator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-connectoroperator.html}
 */
export type ConnectorOperator = {
  Marketo?: MarketoConnectorOperator;
  S3?: S3ConnectorOperator;
  Salesforce?: SalesforceConnectorOperator;
  ServiceNow?: ServiceNowConnectorOperator;
  Zendesk?: ZendeskConnectorOperator;
};
/**
 * Type definition for `AWS::CustomerProfiles::Integration.ConnectorType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-connectortype.html}
 */
export type ConnectorType =
  | "Salesforce"
  | "Marketo"
  | "ServiceNow"
  | "Zendesk"
  | "S3";
/**
 * Type definition for `AWS::CustomerProfiles::Integration.FlowDefinition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-flowdefinition.html}
 */
export type FlowDefinition = {
  /**
   * @maxLength `2048`
   * @pattern `[\w!@#\-.?,\s]*`
   */
  Description?: string;
  /**
   * @maxLength `256`
   * @pattern `[a-zA-Z0-9][\w!@#.-]+`
   */
  FlowName: string;
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `arn:aws:kms:.*:[0-9]+:.*`
   */
  KmsArn: string;
  SourceFlowConfig: SourceFlowConfig;
  Tasks: Task[];
  TriggerConfig: TriggerConfig;
};
/**
 * Type definition for `AWS::CustomerProfiles::Integration.IncrementalPullConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-incrementalpullconfig.html}
 */
export type IncrementalPullConfig = {
  /**
   * @maxLength `256`
   */
  DatetimeTypeFieldName?: string;
};
/**
 * Type definition for `AWS::CustomerProfiles::Integration.MarketoConnectorOperator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-marketoconnectoroperator.html}
 */
export type MarketoConnectorOperator =
  | "PROJECTION"
  | "LESS_THAN"
  | "GREATER_THAN"
  | "BETWEEN"
  | "ADDITION"
  | "MULTIPLICATION"
  | "DIVISION"
  | "SUBTRACTION"
  | "MASK_ALL"
  | "MASK_FIRST_N"
  | "MASK_LAST_N"
  | "VALIDATE_NON_NULL"
  | "VALIDATE_NON_ZERO"
  | "VALIDATE_NON_NEGATIVE"
  | "VALIDATE_NUMERIC"
  | "NO_OP";
/**
 * Type definition for `AWS::CustomerProfiles::Integration.MarketoSourceProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-marketosourceproperties.html}
 */
export type MarketoSourceProperties = {
  /**
   * @maxLength `512`
   * @pattern `\S+`
   */
  Object: string;
};
/**
 * Type definition for `AWS::CustomerProfiles::Integration.ObjectTypeMapping`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-objecttypemapping.html}
 */
export type ObjectTypeMapping = {
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  Key: string;
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[a-zA-Z_][a-zA-Z_0-9-]*$`
   */
  Value: string;
};
/**
 * Type definition for `AWS::CustomerProfiles::Integration.OperatorPropertiesKeys`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-operatorpropertieskeys.html}
 */
export type OperatorPropertiesKeys =
  | "VALUE"
  | "VALUES"
  | "DATA_TYPE"
  | "UPPER_BOUND"
  | "LOWER_BOUND"
  | "SOURCE_DATA_TYPE"
  | "DESTINATION_DATA_TYPE"
  | "VALIDATION_ACTION"
  | "MASK_VALUE"
  | "MASK_LENGTH"
  | "TRUNCATE_LENGTH"
  | "MATH_OPERATION_FIELDS_ORDER"
  | "CONCAT_FORMAT"
  | "SUBFIELD_CATEGORY_MAP";
/**
 * Type definition for `AWS::CustomerProfiles::Integration.S3ConnectorOperator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-s3connectoroperator.html}
 */
export type S3ConnectorOperator =
  | "PROJECTION"
  | "LESS_THAN"
  | "GREATER_THAN"
  | "BETWEEN"
  | "LESS_THAN_OR_EQUAL_TO"
  | "GREATER_THAN_OR_EQUAL_TO"
  | "EQUAL_TO"
  | "NOT_EQUAL_TO"
  | "ADDITION"
  | "MULTIPLICATION"
  | "DIVISION"
  | "SUBTRACTION"
  | "MASK_ALL"
  | "MASK_FIRST_N"
  | "MASK_LAST_N"
  | "VALIDATE_NON_NULL"
  | "VALIDATE_NON_ZERO"
  | "VALIDATE_NON_NEGATIVE"
  | "VALIDATE_NUMERIC"
  | "NO_OP";
/**
 * Type definition for `AWS::CustomerProfiles::Integration.S3SourceProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-s3sourceproperties.html}
 */
export type S3SourceProperties = {
  /**
   * @minLength `3`
   * @maxLength `63`
   * @pattern `\S+`
   */
  BucketName: string;
  /**
   * @maxLength `512`
   * @pattern `.*`
   */
  BucketPrefix?: string;
};
/**
 * Type definition for `AWS::CustomerProfiles::Integration.SalesforceConnectorOperator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-salesforceconnectoroperator.html}
 */
export type SalesforceConnectorOperator =
  | "PROJECTION"
  | "LESS_THAN"
  | "GREATER_THAN"
  | "CONTAINS"
  | "BETWEEN"
  | "LESS_THAN_OR_EQUAL_TO"
  | "GREATER_THAN_OR_EQUAL_TO"
  | "EQUAL_TO"
  | "NOT_EQUAL_TO"
  | "ADDITION"
  | "MULTIPLICATION"
  | "DIVISION"
  | "SUBTRACTION"
  | "MASK_ALL"
  | "MASK_FIRST_N"
  | "MASK_LAST_N"
  | "VALIDATE_NON_NULL"
  | "VALIDATE_NON_ZERO"
  | "VALIDATE_NON_NEGATIVE"
  | "VALIDATE_NUMERIC"
  | "NO_OP";
/**
 * Type definition for `AWS::CustomerProfiles::Integration.SalesforceSourceProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-salesforcesourceproperties.html}
 */
export type SalesforceSourceProperties = {
  EnableDynamicFieldUpdate?: boolean;
  IncludeDeletedRecords?: boolean;
  /**
   * @maxLength `512`
   * @pattern `\S+`
   */
  Object: string;
};
/**
 * Type definition for `AWS::CustomerProfiles::Integration.ScheduledTriggerProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-scheduledtriggerproperties.html}
 */
export type ScheduledTriggerProperties = {
  DataPullMode?: "Incremental" | "Complete";
  FirstExecutionFrom?: number;
  ScheduleEndTime?: number;
  /**
   * @maxLength `256`
   * @pattern `.*`
   */
  ScheduleExpression: string;
  /**
   * @min `0`
   * @max `36000`
   */
  ScheduleOffset?: number;
  ScheduleStartTime?: number;
  /**
   * @maxLength `256`
   * @pattern `.*`
   */
  Timezone?: string;
};
/**
 * Type definition for `AWS::CustomerProfiles::Integration.ServiceNowConnectorOperator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-servicenowconnectoroperator.html}
 */
export type ServiceNowConnectorOperator =
  | "PROJECTION"
  | "LESS_THAN"
  | "GREATER_THAN"
  | "CONTAINS"
  | "BETWEEN"
  | "LESS_THAN_OR_EQUAL_TO"
  | "GREATER_THAN_OR_EQUAL_TO"
  | "EQUAL_TO"
  | "NOT_EQUAL_TO"
  | "ADDITION"
  | "MULTIPLICATION"
  | "DIVISION"
  | "SUBTRACTION"
  | "MASK_ALL"
  | "MASK_FIRST_N"
  | "MASK_LAST_N"
  | "VALIDATE_NON_NULL"
  | "VALIDATE_NON_ZERO"
  | "VALIDATE_NON_NEGATIVE"
  | "VALIDATE_NUMERIC"
  | "NO_OP";
/**
 * Type definition for `AWS::CustomerProfiles::Integration.ServiceNowSourceProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-servicenowsourceproperties.html}
 */
export type ServiceNowSourceProperties = {
  /**
   * @maxLength `512`
   * @pattern `\S+`
   */
  Object: string;
};
/**
 * Type definition for `AWS::CustomerProfiles::Integration.SourceConnectorProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-sourceconnectorproperties.html}
 */
export type SourceConnectorProperties = {
  Marketo?: MarketoSourceProperties;
  S3?: S3SourceProperties;
  Salesforce?: SalesforceSourceProperties;
  ServiceNow?: ServiceNowSourceProperties;
  Zendesk?: ZendeskSourceProperties;
};
/**
 * Type definition for `AWS::CustomerProfiles::Integration.SourceFlowConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-sourceflowconfig.html}
 */
export type SourceFlowConfig = {
  /**
   * @maxLength `256`
   * @pattern `[\w/!@#+=.-]+`
   */
  ConnectorProfileName?: string;
  ConnectorType: ConnectorType;
  IncrementalPullConfig?: IncrementalPullConfig;
  SourceConnectorProperties: SourceConnectorProperties;
};
/**
 * Type definition for `AWS::CustomerProfiles::Integration.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!aws:)[a-zA-Z+-=._:/]+$`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::CustomerProfiles::Integration.Task`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-task.html}
 */
export type Task = {
  ConnectorOperator?: ConnectorOperator;
  /**
   * @maxLength `256`
   * @pattern `.*`
   */
  DestinationField?: string;
  SourceFields: string[];
  TaskProperties?: TaskPropertiesMap[];
  TaskType: TaskType;
};
/**
 * Type definition for `AWS::CustomerProfiles::Integration.TaskPropertiesMap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-taskpropertiesmap.html}
 */
export type TaskPropertiesMap = {
  OperatorPropertyKey: OperatorPropertiesKeys;
  /**
   * @maxLength `2048`
   * @pattern `.+`
   */
  Property: string;
};
/**
 * Type definition for `AWS::CustomerProfiles::Integration.TaskType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-tasktype.html}
 */
export type TaskType =
  | "Arithmetic"
  | "Filter"
  | "Map"
  | "Mask"
  | "Merge"
  | "Truncate"
  | "Validate";
/**
 * Type definition for `AWS::CustomerProfiles::Integration.TriggerConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-triggerconfig.html}
 */
export type TriggerConfig = {
  TriggerProperties?: TriggerProperties;
  TriggerType: TriggerType;
};
/**
 * Type definition for `AWS::CustomerProfiles::Integration.TriggerProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-triggerproperties.html}
 */
export type TriggerProperties = {
  Scheduled?: ScheduledTriggerProperties;
};
/**
 * Type definition for `AWS::CustomerProfiles::Integration.TriggerType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-triggertype.html}
 */
export type TriggerType = "Scheduled" | "Event" | "OnDemand";
/**
 * Type definition for `AWS::CustomerProfiles::Integration.ZendeskConnectorOperator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-zendeskconnectoroperator.html}
 */
export type ZendeskConnectorOperator =
  | "PROJECTION"
  | "GREATER_THAN"
  | "ADDITION"
  | "MULTIPLICATION"
  | "DIVISION"
  | "SUBTRACTION"
  | "MASK_ALL"
  | "MASK_FIRST_N"
  | "MASK_LAST_N"
  | "VALIDATE_NON_NULL"
  | "VALIDATE_NON_ZERO"
  | "VALIDATE_NON_NEGATIVE"
  | "VALIDATE_NUMERIC"
  | "NO_OP";
/**
 * Type definition for `AWS::CustomerProfiles::Integration.ZendeskSourceProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-zendesksourceproperties.html}
 */
export type ZendeskSourceProperties = {
  /**
   * @maxLength `512`
   * @pattern `\S+`
   */
  Object: string;
};
/**
 * Resource type definition for `AWS::CustomerProfiles::Integration`.
 * The resource schema for creating an Amazon Connect Customer Profiles Integration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html}
 */
export class CustomerProfilesIntegration extends $Resource<
  "AWS::CustomerProfiles::Integration",
  CustomerProfilesIntegrationProperties,
  CustomerProfilesIntegrationAttributes
> {
  public static readonly Type = "AWS::CustomerProfiles::Integration";
  constructor(
    logicalId: string,
    properties: CustomerProfilesIntegrationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CustomerProfilesIntegration.Type, properties, options);
  }
}
