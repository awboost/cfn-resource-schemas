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
