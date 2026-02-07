import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Logs::ScheduledQuery`.
 * Creates a new Scheduled Query that allows you to define a Logs Insights query that will run on a schedule and configure actions to take with the query results.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-scheduledquery.html}
 */
export type LogsScheduledQueryProperties = {
  /**
   * @maxLength `1024`
   */
  Description?: string;
  DestinationConfiguration?: DestinationConfiguration;
  ExecutionRoleArn: string;
  /**
   * @minLength `1`
   * @maxLength `50`
   */
  LogGroupIdentifiers?: string[];
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[a-zA-Z0-9_\-/.#]+$`
   */
  Name: string;
  QueryLanguage: string;
  /**
   * @minLength `0`
   * @maxLength `10000`
   */
  QueryString: string;
  ScheduleEndTime?: number;
  /**
   * @maxLength `256`
   */
  ScheduleExpression: string;
  ScheduleStartTime?: number;
  StartTimeOffset?: number;
  State?: ScheduledQueryState;
  Tags?: {
    /**
     * @minLength `1`
     * @maxLength `128`
     */
    Key: string;
    /**
     * @minLength `0`
     * @maxLength `256`
     */
    Value: string;
  }[];
  /**
   * @minLength `1`
   */
  Timezone?: string;
};
/**
 * Attribute type definition for `AWS::Logs::ScheduledQuery`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-scheduledquery.html#aws-resource-logs-scheduledquery-return-values}
 */
export type LogsScheduledQueryAttributes = {
  CreationTime: number;
  LastExecutionStatus: "InvalidQuery" | "Complete" | "Failed" | "Timeout";
  LastTriggeredTime: number;
  LastUpdatedTime: number;
  ScheduledQueryArn: string;
};
/**
 * Type definition for `AWS::Logs::ScheduledQuery.DestinationConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-logs-scheduledquery-destinationconfiguration.html}
 */
export type DestinationConfiguration = {
  S3Configuration?: S3Configuration;
};
/**
 * Type definition for `AWS::Logs::ScheduledQuery.S3Configuration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-logs-scheduledquery-s3configuration.html}
 */
export type S3Configuration = {
  /**
   * @pattern `^s3://[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9](/.*)?`
   */
  DestinationIdentifier: string;
  RoleArn: string;
};
/**
 * Type definition for `AWS::Logs::ScheduledQuery.ScheduledQueryState`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-logs-scheduledquery-scheduledquerystate.html}
 */
export type ScheduledQueryState = "ENABLED" | "DISABLED";
/**
 * Resource type definition for `AWS::Logs::ScheduledQuery`.
 * Creates a new Scheduled Query that allows you to define a Logs Insights query that will run on a schedule and configure actions to take with the query results.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-scheduledquery.html}
 */
export class LogsScheduledQuery extends $Resource<
  "AWS::Logs::ScheduledQuery",
  LogsScheduledQueryProperties,
  LogsScheduledQueryAttributes
> {
  public static readonly Type = "AWS::Logs::ScheduledQuery";
  constructor(
    logicalId: string,
    properties: LogsScheduledQueryProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, LogsScheduledQuery.Type, properties, options);
  }
}
