import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::AppFlow::Flow.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html}
 */
export type AppFlowFlowProperties = {
  /**
   * Description of the flow.
   * @maxLength `2048`
   * @pattern `[\w!@#\-.?,\s]*`
   */
  Description?: string;
  /**
   * List of Destination connectors of the flow.
   */
  DestinationFlowConfigList: DestinationFlowConfig[];
  /**
   * Name of the flow.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `[a-zA-Z0-9][\w!@#.-]+`
   */
  FlowName: string;
  /**
   * Flow activation status for Scheduled- and Event-triggered flows
   */
  FlowStatus?: "Active" | "Suspended" | "Draft";
  /**
   * The ARN of the AWS Key Management Service (AWS KMS) key that's used to encrypt your function's environment variables. If it's not provided, AWS Lambda uses a default service key.
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `arn:aws:kms:.*:[0-9]+:.*`
   */
  KMSArn?: string;
  /**
   * Configurations of metadata catalog of the flow.
   */
  MetadataCatalogConfig?: MetadataCatalogConfig;
  /**
   * Configurations of Source connector of the flow.
   */
  SourceFlowConfig: SourceFlowConfig;
  /**
   * List of Tags.
   */
  Tags?: Tag[];
  /**
   * List of tasks for the flow.
   */
  Tasks: Task[];
  /**
   * Trigger settings of the flow.
   */
  TriggerConfig: TriggerConfig;
};
/**
 * Attribute type definition for `AWS::AppFlow::Flow`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#aws-resource-appflow-flow-return-values}
 */
export type AppFlowFlowAttributes = {
  /**
   * ARN identifier of the flow.
   * @maxLength `512`
   * @pattern `arn:aws:appflow:.*:[0-9]+:.*`
   */
  FlowArn: string;
};
/**
 * Type definition for `AWS::AppFlow::Flow.AggregationConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-aggregationconfig.html}
 */
export type AggregationConfig = {
  AggregationType?: AggregationType;
  TargetFileSize?: number;
};
/**
 * Type definition for `AWS::AppFlow::Flow.AggregationType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-aggregationtype.html}
 */
export type AggregationType = "None" | "SingleFile";
/**
 * Type definition for `AWS::AppFlow::Flow.AmplitudeConnectorOperator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-amplitudeconnectoroperator.html}
 */
export type AmplitudeConnectorOperator = "BETWEEN";
/**
 * Type definition for `AWS::AppFlow::Flow.AmplitudeSourceProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-amplitudesourceproperties.html}
 */
export type AmplitudeSourceProperties = {
  /**
   * @maxLength `512`
   * @pattern `\S+`
   */
  Object: string;
};
/**
 * Type definition for `AWS::AppFlow::Flow.ConnectorOperator`.
 * Operation to be performed on provided source fields
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-connectoroperator.html}
 */
export type ConnectorOperator = {
  Amplitude?: AmplitudeConnectorOperator;
  CustomConnector?: Operator;
  Datadog?: DatadogConnectorOperator;
  Dynatrace?: DynatraceConnectorOperator;
  GoogleAnalytics?: GoogleAnalyticsConnectorOperator;
  InforNexus?: InforNexusConnectorOperator;
  Marketo?: MarketoConnectorOperator;
  Pardot?: PardotConnectorOperator;
  S3?: S3ConnectorOperator;
  SAPOData?: SAPODataConnectorOperator;
  Salesforce?: SalesforceConnectorOperator;
  ServiceNow?: ServiceNowConnectorOperator;
  Singular?: SingularConnectorOperator;
  Slack?: SlackConnectorOperator;
  Trendmicro?: TrendmicroConnectorOperator;
  Veeva?: VeevaConnectorOperator;
  Zendesk?: ZendeskConnectorOperator;
};
/**
 * Type definition for `AWS::AppFlow::Flow.ConnectorType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-connectortype.html}
 */
export type ConnectorType =
  | "SAPOData"
  | "Salesforce"
  | "Pardot"
  | "Singular"
  | "Slack"
  | "Redshift"
  | "S3"
  | "Marketo"
  | "Googleanalytics"
  | "Zendesk"
  | "Servicenow"
  | "Datadog"
  | "Trendmicro"
  | "Snowflake"
  | "Dynatrace"
  | "Infornexus"
  | "Amplitude"
  | "Veeva"
  | "CustomConnector"
  | "EventBridge"
  | "Upsolver"
  | "LookoutMetrics";
/**
 * Type definition for `AWS::AppFlow::Flow.CustomConnectorDestinationProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-customconnectordestinationproperties.html}
 */
export type CustomConnectorDestinationProperties = {
  /**
   * A map for properties for custom connector.
   */
  CustomProperties?: CustomProperties;
  /**
   * @maxLength `1024`
   * @pattern `\S+`
   */
  EntityName: string;
  ErrorHandlingConfig?: ErrorHandlingConfig;
  /**
   * List of fields used as ID when performing a write operation.
   */
  IdFieldNames?: string[];
  WriteOperationType?: WriteOperationType;
};
/**
 * Type definition for `AWS::AppFlow::Flow.CustomConnectorSourceProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-customconnectorsourceproperties.html}
 */
export type CustomConnectorSourceProperties = {
  /**
   * A map for properties for custom connector.
   */
  CustomProperties?: CustomProperties;
  DataTransferApi?: {
    /**
     * @maxLength `64`
     * @pattern `[\w/-]+`
     */
    Name: string;
    Type: "SYNC" | "ASYNC" | "AUTOMATIC";
  };
  /**
   * @maxLength `1024`
   * @pattern `\S+`
   */
  EntityName: string;
};
/**
 * Type definition for `AWS::AppFlow::Flow.CustomProperties`.
 * A map for properties for custom connector.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-customproperties.html}
 */
export type CustomProperties = Record<string, string>;
/**
 * Type definition for `AWS::AppFlow::Flow.DatadogConnectorOperator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-datadogconnectoroperator.html}
 */
export type DatadogConnectorOperator =
  | "PROJECTION"
  | "BETWEEN"
  | "EQUAL_TO"
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
 * Type definition for `AWS::AppFlow::Flow.DatadogSourceProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-datadogsourceproperties.html}
 */
export type DatadogSourceProperties = {
  /**
   * @maxLength `512`
   * @pattern `\S+`
   */
  Object: string;
};
/**
 * Type definition for `AWS::AppFlow::Flow.DataTransferApi`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-datatransferapi.html}
 */
export type DataTransferApi = "AUTOMATIC" | "BULKV2" | "REST_SYNC";
/**
 * Type definition for `AWS::AppFlow::Flow.DestinationConnectorProperties`.
 * Destination connector details
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-destinationconnectorproperties.html}
 */
export type DestinationConnectorProperties = {
  CustomConnector?: CustomConnectorDestinationProperties;
  EventBridge?: EventBridgeDestinationProperties;
  LookoutMetrics?: LookoutMetricsDestinationProperties;
  Marketo?: MarketoDestinationProperties;
  Redshift?: RedshiftDestinationProperties;
  S3?: S3DestinationProperties;
  SAPOData?: SAPODataDestinationProperties;
  Salesforce?: SalesforceDestinationProperties;
  Snowflake?: SnowflakeDestinationProperties;
  Upsolver?: UpsolverDestinationProperties;
  Zendesk?: ZendeskDestinationProperties;
};
/**
 * Type definition for `AWS::AppFlow::Flow.DestinationFlowConfig`.
 * Configurations of destination connector.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-destinationflowconfig.html}
 */
export type DestinationFlowConfig = {
  /**
   * The API version that the destination connector uses.
   * @maxLength `256`
   * @pattern `\S+`
   */
  ApiVersion?: string;
  /**
   * Name of destination connector profile
   * @maxLength `256`
   * @pattern `[\w/!@#+=.-]+`
   */
  ConnectorProfileName?: string;
  /**
   * Destination connector type
   */
  ConnectorType: ConnectorType;
  /**
   * Destination connector details
   */
  DestinationConnectorProperties: DestinationConnectorProperties;
};
/**
 * Type definition for `AWS::AppFlow::Flow.DynatraceConnectorOperator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-dynatraceconnectoroperator.html}
 */
export type DynatraceConnectorOperator =
  | "PROJECTION"
  | "BETWEEN"
  | "EQUAL_TO"
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
 * Type definition for `AWS::AppFlow::Flow.DynatraceSourceProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-dynatracesourceproperties.html}
 */
export type DynatraceSourceProperties = {
  /**
   * @maxLength `512`
   * @pattern `\S+`
   */
  Object: string;
};
/**
 * Type definition for `AWS::AppFlow::Flow.ErrorHandlingConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-errorhandlingconfig.html}
 */
export type ErrorHandlingConfig = {
  /**
   * @minLength `3`
   * @maxLength `63`
   * @pattern `\S+`
   */
  BucketName?: string;
  /**
   * @maxLength `512`
   */
  BucketPrefix?: string;
  FailOnFirstError?: boolean;
};
/**
 * Type definition for `AWS::AppFlow::Flow.EventBridgeDestinationProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-eventbridgedestinationproperties.html}
 */
export type EventBridgeDestinationProperties = {
  ErrorHandlingConfig?: ErrorHandlingConfig;
  /**
   * @maxLength `512`
   * @pattern `\S+`
   */
  Object: string;
};
/**
 * Type definition for `AWS::AppFlow::Flow.FileType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-filetype.html}
 */
export type FileType = "CSV" | "JSON" | "PARQUET";
/**
 * Type definition for `AWS::AppFlow::Flow.GlueDataCatalog`.
 * Trigger settings of the flow.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-gluedatacatalog.html}
 */
export type GlueDataCatalog = {
  /**
   * A string containing the value for the tag
   * @minLength `0`
   * @maxLength `255`
   * @pattern `[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t]*`
   */
  DatabaseName: string;
  /**
   * A string containing the value for the tag
   * @minLength `0`
   * @maxLength `512`
   * @pattern `arn:aws:iam:.*:[0-9]+:.*`
   */
  RoleArn: string;
  /**
   * A string containing the value for the tag
   * @minLength `0`
   * @maxLength `128`
   * @pattern `[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t]*`
   */
  TablePrefix: string;
};
/**
 * Type definition for `AWS::AppFlow::Flow.GoogleAnalyticsConnectorOperator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-googleanalyticsconnectoroperator.html}
 */
export type GoogleAnalyticsConnectorOperator = "PROJECTION" | "BETWEEN";
/**
 * Type definition for `AWS::AppFlow::Flow.GoogleAnalyticsSourceProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-googleanalyticssourceproperties.html}
 */
export type GoogleAnalyticsSourceProperties = {
  /**
   * @maxLength `512`
   * @pattern `\S+`
   */
  Object: string;
};
/**
 * Type definition for `AWS::AppFlow::Flow.IncrementalPullConfig`.
 * Configuration for scheduled incremental data pull
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-incrementalpullconfig.html}
 */
export type IncrementalPullConfig = {
  /**
   * Name of the datetime/timestamp data type field to be used for importing incremental records from the source
   * @maxLength `256`
   */
  DatetimeTypeFieldName?: string;
};
/**
 * Type definition for `AWS::AppFlow::Flow.InforNexusConnectorOperator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-infornexusconnectoroperator.html}
 */
export type InforNexusConnectorOperator =
  | "PROJECTION"
  | "BETWEEN"
  | "EQUAL_TO"
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
 * Type definition for `AWS::AppFlow::Flow.InforNexusSourceProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-infornexussourceproperties.html}
 */
export type InforNexusSourceProperties = {
  /**
   * @maxLength `512`
   * @pattern `\S+`
   */
  Object: string;
};
/**
 * Type definition for `AWS::AppFlow::Flow.LookoutMetricsDestinationProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-lookoutmetricsdestinationproperties.html}
 */
export type LookoutMetricsDestinationProperties = {
  /**
   * @maxLength `512`
   * @pattern `\S+`
   */
  Object?: string;
};
/**
 * Type definition for `AWS::AppFlow::Flow.MarketoConnectorOperator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-marketoconnectoroperator.html}
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
 * Type definition for `AWS::AppFlow::Flow.MarketoDestinationProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-marketodestinationproperties.html}
 */
export type MarketoDestinationProperties = {
  ErrorHandlingConfig?: ErrorHandlingConfig;
  /**
   * @maxLength `512`
   * @pattern `\S+`
   */
  Object: string;
};
/**
 * Type definition for `AWS::AppFlow::Flow.MarketoSourceProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-marketosourceproperties.html}
 */
export type MarketoSourceProperties = {
  /**
   * @maxLength `512`
   * @pattern `\S+`
   */
  Object: string;
};
/**
 * Type definition for `AWS::AppFlow::Flow.MetadataCatalogConfig`.
 * Configurations of metadata catalog of the flow.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-metadatacatalogconfig.html}
 */
export type MetadataCatalogConfig = {
  /**
   * Configurations of glue data catalog of the flow.
   */
  GlueDataCatalog?: GlueDataCatalog;
};
/**
 * Type definition for `AWS::AppFlow::Flow.Operator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-operator.html}
 */
export type Operator =
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
 * Type definition for `AWS::AppFlow::Flow.OperatorPropertiesKeys`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-operatorpropertieskeys.html}
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
  | "SUBFIELD_CATEGORY_MAP"
  | "EXCLUDE_SOURCE_FIELDS_LIST"
  | "INCLUDE_NEW_FIELDS"
  | "ORDERED_PARTITION_KEYS_LIST";
/**
 * Type definition for `AWS::AppFlow::Flow.PardotConnectorOperator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-pardotconnectoroperator.html}
 */
export type PardotConnectorOperator =
  | "PROJECTION"
  | "EQUAL_TO"
  | "NO_OP"
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
  | "VALIDATE_NUMERIC";
/**
 * Type definition for `AWS::AppFlow::Flow.PardotSourceProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-pardotsourceproperties.html}
 */
export type PardotSourceProperties = {
  /**
   * @maxLength `512`
   * @pattern `\S+`
   */
  Object: string;
};
/**
 * Type definition for `AWS::AppFlow::Flow.PathPrefix`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-pathprefix.html}
 */
export type PathPrefix = "EXECUTION_ID" | "SCHEMA_VERSION";
/**
 * Type definition for `AWS::AppFlow::Flow.PrefixConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-prefixconfig.html}
 */
export type PrefixConfig = {
  PathPrefixHierarchy?: PathPrefix[];
  PrefixFormat?: PrefixFormat;
  PrefixType?: PrefixType;
};
/**
 * Type definition for `AWS::AppFlow::Flow.PrefixFormat`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-prefixformat.html}
 */
export type PrefixFormat = "YEAR" | "MONTH" | "DAY" | "HOUR" | "MINUTE";
/**
 * Type definition for `AWS::AppFlow::Flow.PrefixType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-prefixtype.html}
 */
export type PrefixType = "FILENAME" | "PATH" | "PATH_AND_FILENAME";
/**
 * Type definition for `AWS::AppFlow::Flow.RedshiftDestinationProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-redshiftdestinationproperties.html}
 */
export type RedshiftDestinationProperties = {
  /**
   * @maxLength `512`
   */
  BucketPrefix?: string;
  ErrorHandlingConfig?: ErrorHandlingConfig;
  /**
   * @minLength `3`
   * @maxLength `63`
   * @pattern `\S+`
   */
  IntermediateBucketName: string;
  /**
   * @maxLength `512`
   * @pattern `\S+`
   */
  Object: string;
};
/**
 * Type definition for `AWS::AppFlow::Flow.S3ConnectorOperator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-s3connectoroperator.html}
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
 * Type definition for `AWS::AppFlow::Flow.S3DestinationProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-s3destinationproperties.html}
 */
export type S3DestinationProperties = {
  /**
   * @minLength `3`
   * @maxLength `63`
   * @pattern `\S+`
   */
  BucketName: string;
  /**
   * @maxLength `512`
   */
  BucketPrefix?: string;
  S3OutputFormatConfig?: S3OutputFormatConfig;
};
/**
 * Type definition for `AWS::AppFlow::Flow.S3InputFormatConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-s3inputformatconfig.html}
 */
export type S3InputFormatConfig = {
  S3InputFileType?: "CSV" | "JSON";
};
/**
 * Type definition for `AWS::AppFlow::Flow.S3OutputFormatConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-s3outputformatconfig.html}
 */
export type S3OutputFormatConfig = {
  AggregationConfig?: AggregationConfig;
  FileType?: FileType;
  PrefixConfig?: PrefixConfig;
  PreserveSourceDataTyping?: boolean;
};
/**
 * Type definition for `AWS::AppFlow::Flow.S3SourceProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-s3sourceproperties.html}
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
   */
  BucketPrefix: string;
  S3InputFormatConfig?: S3InputFormatConfig;
};
/**
 * Type definition for `AWS::AppFlow::Flow.SalesforceConnectorOperator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-salesforceconnectoroperator.html}
 */
export type SalesforceConnectorOperator =
  | "PROJECTION"
  | "LESS_THAN"
  | "CONTAINS"
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
 * Type definition for `AWS::AppFlow::Flow.SalesforceDestinationProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-salesforcedestinationproperties.html}
 */
export type SalesforceDestinationProperties = {
  DataTransferApi?: DataTransferApi;
  ErrorHandlingConfig?: ErrorHandlingConfig;
  /**
   * List of fields used as ID when performing a write operation.
   */
  IdFieldNames?: string[];
  /**
   * @maxLength `512`
   * @pattern `\S+`
   */
  Object: string;
  WriteOperationType?: WriteOperationType;
};
/**
 * Type definition for `AWS::AppFlow::Flow.SalesforceSourceProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-salesforcesourceproperties.html}
 */
export type SalesforceSourceProperties = {
  DataTransferApi?: DataTransferApi;
  EnableDynamicFieldUpdate?: boolean;
  IncludeDeletedRecords?: boolean;
  /**
   * @maxLength `512`
   * @pattern `\S+`
   */
  Object: string;
};
/**
 * Type definition for `AWS::AppFlow::Flow.SAPODataConnectorOperator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-sapodataconnectoroperator.html}
 */
export type SAPODataConnectorOperator =
  | "PROJECTION"
  | "LESS_THAN"
  | "CONTAINS"
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
 * Type definition for `AWS::AppFlow::Flow.SAPODataDestinationProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-sapodatadestinationproperties.html}
 */
export type SAPODataDestinationProperties = {
  ErrorHandlingConfig?: ErrorHandlingConfig;
  /**
   * List of fields used as ID when performing a write operation.
   */
  IdFieldNames?: string[];
  /**
   * @maxLength `512`
   * @pattern `\S+`
   */
  ObjectPath: string;
  SuccessResponseHandlingConfig?: SuccessResponseHandlingConfig;
  WriteOperationType?: WriteOperationType;
};
/**
 * Type definition for `AWS::AppFlow::Flow.SAPODataPaginationConfig`.
 * SAP Source connector page size
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-sapodatapaginationconfig.html}
 */
export type SAPODataPaginationConfig = {
  /**
   * @min `1`
   * @max `10000`
   */
  maxPageSize: number;
};
/**
 * Type definition for `AWS::AppFlow::Flow.SAPODataParallelismConfig`.
 * SAP Source connector parallelism factor
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-sapodataparallelismconfig.html}
 */
export type SAPODataParallelismConfig = {
  /**
   * @min `1`
   * @max `10`
   */
  maxParallelism: number;
};
/**
 * Type definition for `AWS::AppFlow::Flow.SAPODataSourceProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-sapodatasourceproperties.html}
 */
export type SAPODataSourceProperties = {
  /**
   * @maxLength `512`
   * @pattern `\S+`
   */
  ObjectPath: string;
  /**
   * SAP Source connector page size
   */
  paginationConfig?: SAPODataPaginationConfig;
  /**
   * SAP Source connector parallelism factor
   */
  parallelismConfig?: SAPODataParallelismConfig;
};
/**
 * Type definition for `AWS::AppFlow::Flow.ScheduledTriggerProperties`.
 * Details required for scheduled trigger type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-scheduledtriggerproperties.html}
 */
export type ScheduledTriggerProperties = {
  DataPullMode?: "Incremental" | "Complete";
  FirstExecutionFrom?: number;
  /**
   * @min `1`
   * @max `100`
   */
  FlowErrorDeactivationThreshold?: number;
  ScheduleEndTime?: number;
  /**
   * @minLength `1`
   * @maxLength `256`
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
   */
  TimeZone?: string;
};
/**
 * Type definition for `AWS::AppFlow::Flow.ServiceNowConnectorOperator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-servicenowconnectoroperator.html}
 */
export type ServiceNowConnectorOperator =
  | "PROJECTION"
  | "LESS_THAN"
  | "CONTAINS"
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
 * Type definition for `AWS::AppFlow::Flow.ServiceNowSourceProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-servicenowsourceproperties.html}
 */
export type ServiceNowSourceProperties = {
  /**
   * @maxLength `512`
   * @pattern `\S+`
   */
  Object: string;
};
/**
 * Type definition for `AWS::AppFlow::Flow.SingularConnectorOperator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-singularconnectoroperator.html}
 */
export type SingularConnectorOperator =
  | "PROJECTION"
  | "EQUAL_TO"
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
 * Type definition for `AWS::AppFlow::Flow.SingularSourceProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-singularsourceproperties.html}
 */
export type SingularSourceProperties = {
  /**
   * @maxLength `512`
   * @pattern `\S+`
   */
  Object: string;
};
/**
 * Type definition for `AWS::AppFlow::Flow.SlackConnectorOperator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-slackconnectoroperator.html}
 */
export type SlackConnectorOperator =
  | "PROJECTION"
  | "BETWEEN"
  | "EQUAL_TO"
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
 * Type definition for `AWS::AppFlow::Flow.SlackSourceProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-slacksourceproperties.html}
 */
export type SlackSourceProperties = {
  /**
   * @maxLength `512`
   * @pattern `\S+`
   */
  Object: string;
};
/**
 * Type definition for `AWS::AppFlow::Flow.SnowflakeDestinationProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-snowflakedestinationproperties.html}
 */
export type SnowflakeDestinationProperties = {
  /**
   * @maxLength `512`
   */
  BucketPrefix?: string;
  ErrorHandlingConfig?: ErrorHandlingConfig;
  /**
   * @minLength `3`
   * @maxLength `63`
   * @pattern `\S+`
   */
  IntermediateBucketName: string;
  /**
   * @maxLength `512`
   * @pattern `\S+`
   */
  Object: string;
};
/**
 * Type definition for `AWS::AppFlow::Flow.SourceConnectorProperties`.
 * Source connector details required to query a connector
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-sourceconnectorproperties.html}
 */
export type SourceConnectorProperties = {
  Amplitude?: AmplitudeSourceProperties;
  CustomConnector?: CustomConnectorSourceProperties;
  Datadog?: DatadogSourceProperties;
  Dynatrace?: DynatraceSourceProperties;
  GoogleAnalytics?: GoogleAnalyticsSourceProperties;
  InforNexus?: InforNexusSourceProperties;
  Marketo?: MarketoSourceProperties;
  Pardot?: PardotSourceProperties;
  S3?: S3SourceProperties;
  SAPOData?: SAPODataSourceProperties;
  Salesforce?: SalesforceSourceProperties;
  ServiceNow?: ServiceNowSourceProperties;
  Singular?: SingularSourceProperties;
  Slack?: SlackSourceProperties;
  Trendmicro?: TrendmicroSourceProperties;
  Veeva?: VeevaSourceProperties;
  Zendesk?: ZendeskSourceProperties;
};
/**
 * Type definition for `AWS::AppFlow::Flow.SourceFlowConfig`.
 * Configurations of Source connector of the flow.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-sourceflowconfig.html}
 */
export type SourceFlowConfig = {
  /**
   * The API version that the destination connector uses.
   * @maxLength `256`
   * @pattern `\S+`
   */
  ApiVersion?: string;
  /**
   * Name of source connector profile
   * @maxLength `256`
   * @pattern `[\w/!@#+=.-]+`
   */
  ConnectorProfileName?: string;
  /**
   * Type of source connector
   */
  ConnectorType: ConnectorType;
  /**
   * Configuration for scheduled incremental data pull
   */
  IncrementalPullConfig?: IncrementalPullConfig;
  /**
   * Source connector details required to query a connector
   */
  SourceConnectorProperties: SourceConnectorProperties;
};
/**
 * Type definition for `AWS::AppFlow::Flow.SuccessResponseHandlingConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-successresponsehandlingconfig.html}
 */
export type SuccessResponseHandlingConfig = {
  /**
   * @minLength `3`
   * @maxLength `63`
   * @pattern `\S+`
   */
  BucketName?: string;
  /**
   * @maxLength `512`
   */
  BucketPrefix?: string;
};
/**
 * Type definition for `AWS::AppFlow::Flow.Tag`.
 * A label for tagging AppFlow resources
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-tag.html}
 */
export type Tag = {
  /**
   * A string used to identify this tag
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * A string containing the value for the tag
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::AppFlow::Flow.Task`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-task.html}
 */
export type Task = {
  /**
   * Operation to be performed on provided source fields
   */
  ConnectorOperator?: ConnectorOperator;
  /**
   * A field value on which source field should be validated
   * @maxLength `256`
   */
  DestinationField?: string;
  /**
   * Source fields on which particular task will be applied
   */
  SourceFields: string[];
  /**
   * A Map used to store task related info
   */
  TaskProperties?: TaskPropertiesObject[];
  /**
   * Type of task
   */
  TaskType: TaskType;
};
/**
 * Type definition for `AWS::AppFlow::Flow.TaskPropertiesObject`.
 * An object used to store task related info
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-taskpropertiesobject.html}
 */
export type TaskPropertiesObject = {
  Key: OperatorPropertiesKeys;
  /**
   * @maxLength `2048`
   * @pattern `.+`
   */
  Value: string;
};
/**
 * Type definition for `AWS::AppFlow::Flow.TaskType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-tasktype.html}
 */
export type TaskType =
  | "Arithmetic"
  | "Filter"
  | "Map"
  | "Map_all"
  | "Mask"
  | "Merge"
  | "Passthrough"
  | "Truncate"
  | "Validate"
  | "Partition";
/**
 * Type definition for `AWS::AppFlow::Flow.TrendmicroConnectorOperator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-trendmicroconnectoroperator.html}
 */
export type TrendmicroConnectorOperator =
  | "PROJECTION"
  | "EQUAL_TO"
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
 * Type definition for `AWS::AppFlow::Flow.TrendmicroSourceProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-trendmicrosourceproperties.html}
 */
export type TrendmicroSourceProperties = {
  /**
   * @maxLength `512`
   * @pattern `\S+`
   */
  Object: string;
};
/**
 * Type definition for `AWS::AppFlow::Flow.TriggerConfig`.
 * Trigger settings of the flow.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-triggerconfig.html}
 */
export type TriggerConfig = {
  /**
   * Details required based on the type of trigger
   */
  TriggerProperties?: ScheduledTriggerProperties;
  /**
   * Trigger type of the flow
   */
  TriggerType: TriggerType;
};
/**
 * Type definition for `AWS::AppFlow::Flow.TriggerType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-triggertype.html}
 */
export type TriggerType = "Scheduled" | "Event" | "OnDemand";
/**
 * Type definition for `AWS::AppFlow::Flow.UpsolverDestinationProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-upsolverdestinationproperties.html}
 */
export type UpsolverDestinationProperties = {
  /**
   * @minLength `16`
   * @maxLength `63`
   * @pattern `^(upsolver-appflow)\S*`
   */
  BucketName: string;
  /**
   * @maxLength `512`
   */
  BucketPrefix?: string;
  S3OutputFormatConfig: UpsolverS3OutputFormatConfig;
};
/**
 * Type definition for `AWS::AppFlow::Flow.UpsolverS3OutputFormatConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-upsolvers3outputformatconfig.html}
 */
export type UpsolverS3OutputFormatConfig = {
  AggregationConfig?: AggregationConfig;
  FileType?: FileType;
  PrefixConfig: PrefixConfig;
};
/**
 * Type definition for `AWS::AppFlow::Flow.VeevaConnectorOperator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-veevaconnectoroperator.html}
 */
export type VeevaConnectorOperator =
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
 * Type definition for `AWS::AppFlow::Flow.VeevaSourceProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-veevasourceproperties.html}
 */
export type VeevaSourceProperties = {
  /**
   * @maxLength `512`
   * @pattern `[\s\w_-]+`
   */
  DocumentType?: string;
  IncludeAllVersions?: boolean;
  IncludeRenditions?: boolean;
  IncludeSourceFiles?: boolean;
  /**
   * @maxLength `512`
   * @pattern `\S+`
   */
  Object: string;
};
/**
 * Type definition for `AWS::AppFlow::Flow.WriteOperationType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-writeoperationtype.html}
 */
export type WriteOperationType = "INSERT" | "UPSERT" | "UPDATE" | "DELETE";
/**
 * Type definition for `AWS::AppFlow::Flow.ZendeskConnectorOperator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-zendeskconnectoroperator.html}
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
 * Type definition for `AWS::AppFlow::Flow.ZendeskDestinationProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-zendeskdestinationproperties.html}
 */
export type ZendeskDestinationProperties = {
  ErrorHandlingConfig?: ErrorHandlingConfig;
  /**
   * List of fields used as ID when performing a write operation.
   */
  IdFieldNames?: string[];
  /**
   * @maxLength `512`
   * @pattern `\S+`
   */
  Object: string;
  WriteOperationType?: WriteOperationType;
};
/**
 * Type definition for `AWS::AppFlow::Flow.ZendeskSourceProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-zendesksourceproperties.html}
 */
export type ZendeskSourceProperties = {
  /**
   * @maxLength `512`
   * @pattern `\S+`
   */
  Object: string;
};
/**
 * Resource schema for AWS::AppFlow::Flow.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html}
 */
export class AppFlowFlow extends $Resource<
  "AWS::AppFlow::Flow",
  AppFlowFlowProperties,
  AppFlowFlowAttributes
> {
  public static readonly Type = "AWS::AppFlow::Flow";
  constructor(
    logicalId: string,
    properties: AppFlowFlowProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AppFlowFlow.Type, properties, options);
  }
}
