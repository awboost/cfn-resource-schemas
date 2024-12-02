import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Logs::Integration`.
 * Resource Schema for Logs Integration Resource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-integration.html}
 */
export type LogsIntegrationProperties = {
  /**
   * User provided identifier for integration, unique to the user account.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `[\.\-_/#A-Za-z0-9]+`
   */
  IntegrationName: string;
  /**
   * The type of the Integration.
   */
  IntegrationType: "OPENSEARCH";
  /**
   * OpenSearchResourceConfig for the given Integration
   */
  ResourceConfig: {
    OpenSearchResourceConfig?: OpenSearchResourceConfig;
  };
};
/**
 * Attribute type definition for `AWS::Logs::Integration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-integration.html#aws-resource-logs-integration-return-values}
 */
export type LogsIntegrationAttributes = {
  /**
   * Status of creation for the Integration and its resources
   */
  IntegrationStatus: "PROVISIONING" | "ACTIVE" | "FAILED";
};
/**
 * Type definition for `AWS::Logs::Integration.OpenSearchResourceConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-logs-integration-opensearchresourceconfig.html}
 */
export type OpenSearchResourceConfig = {
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `[\w#+=/:,.@-]*\*?`
   */
  ApplicationARN?: string;
  DashboardViewerPrincipals: string[];
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `[\w#+=/:,.@-]*\*?`
   */
  DataSourceRoleArn: string;
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `[\w#+=/:,.@-]*\*?`
   */
  KmsKeyArn?: string;
  /**
   * @min `1`
   * @max `3650`
   */
  RetentionDays?: number;
};
/**
 * Resource type definition for `AWS::Logs::Integration`.
 * Resource Schema for Logs Integration Resource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-integration.html}
 */
export class LogsIntegration extends $Resource<
  "AWS::Logs::Integration",
  LogsIntegrationProperties,
  LogsIntegrationAttributes
> {
  public static readonly Type = "AWS::Logs::Integration";
  constructor(
    logicalId: string,
    properties: LogsIntegrationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, LogsIntegration.Type, properties, options);
  }
}
