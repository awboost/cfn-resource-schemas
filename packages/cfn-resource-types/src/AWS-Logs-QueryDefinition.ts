import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Logs::QueryDefinition`.
 * The resource schema for AWSLogs QueryDefinition
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-querydefinition.html}
 */
export type LogsQueryDefinitionProperties = {
  /**
   * Optionally define specific log groups as part of your query definition
   */
  LogGroupNames?: string[];
  /**
   * A name for the saved query definition
   * @minLength `1`
   * @maxLength `255`
   */
  Name: string;
  /**
   * Use this parameter to include specific query parameters as part of your query definition. Query parameters are supported only for Logs Insights QL queries. Query parameters allow you to use placeholder variables in your query string that are substituted with values at execution time. Use the {{parameterName}} syntax in your query string to reference a parameter.
   * @maxLength `20`
   */
  Parameters?: QueryParameter[];
  /**
   * Query language of the query string. Possible values are CWLI, SQL, PPL, with CWLI being the default.
   */
  QueryLanguage?: "CWLI" | "SQL" | "PPL";
  /**
   * The query string to use for this definition
   * @minLength `1`
   * @maxLength `10000`
   */
  QueryString: string;
};
/**
 * Attribute type definition for `AWS::Logs::QueryDefinition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-querydefinition.html#aws-resource-logs-querydefinition-return-values}
 */
export type LogsQueryDefinitionAttributes = {
  /**
   * Unique identifier of a query definition
   * @minLength `0`
   * @maxLength `256`
   */
  QueryDefinitionId: string;
};
/**
 * Type definition for `AWS::Logs::QueryDefinition.QueryParameter`.
 * This structure defines a query parameter for a saved CloudWatch Logs Insights query definition. Query parameters are supported only for Logs Insights QL queries. They are placeholder variables that you can reference in a query string using the {{parameterName}} syntax. Each parameter can include a default value and a description.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-logs-querydefinition-queryparameter.html}
 */
export type QueryParameter = {
  /**
   * The default value to use for this query parameter if no value is supplied at execution time.
   * @maxLength `1024`
   */
  DefaultValue?: string;
  /**
   * A description of the query parameter that explains its purpose or expected values.
   * @maxLength `512`
   */
  Description?: string;
  /**
   * The name of the query parameter. A query parameter name must start with a letter or underscore, and contain only letters, digits, and underscores.
   * @maxLength `128`
   * @pattern `^[a-zA-Z_][a-zA-Z0-9_]*$`
   */
  Name: string;
};
/**
 * Resource type definition for `AWS::Logs::QueryDefinition`.
 * The resource schema for AWSLogs QueryDefinition
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-querydefinition.html}
 */
export class LogsQueryDefinition extends $Resource<
  "AWS::Logs::QueryDefinition",
  LogsQueryDefinitionProperties,
  LogsQueryDefinitionAttributes
> {
  public static readonly Type = "AWS::Logs::QueryDefinition";
  constructor(
    logicalId: string,
    properties: LogsQueryDefinitionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, LogsQueryDefinition.Type, properties, options);
  }
}
