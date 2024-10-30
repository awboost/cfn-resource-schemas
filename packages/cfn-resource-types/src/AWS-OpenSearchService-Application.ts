import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::OpenSearchService::Application`.
 * Amazon OpenSearchService application resource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-application.html}
 */
export type OpenSearchServiceApplicationProperties = {
  /**
   * List of application configurations.
   */
  AppConfigs?: AppConfig[];
  /**
   * List of data sources.
   */
  DataSources?: DataSource[];
  /**
   * The endpoint for the application.
   */
  Endpoint?: string;
  /**
   * Options for configuring IAM Identity Center
   */
  IamIdentityCenterOptions?: {
    /**
     * Whether IAM Identity Center is enabled.
     */
    Enabled?: boolean;
    /**
     * The ARN of the IAM Identity Center instance.
     */
    IamIdentityCenterInstanceArn?: unknown;
    /**
     * The ARN of the IAM role for Identity Center application.
     */
    IamRoleForIdentityCenterApplicationArn?: string;
  };
  /**
   * The name of the application.
   * @minLength `3`
   * @maxLength `40`
   * @pattern `[a-z][a-z0-9\-]+`
   */
  Name: string;
  /**
   * An arbitrary set of tags (key-value pairs) for this application.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::OpenSearchService::Application`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-application.html#aws-resource-opensearchservice-application-return-values}
 */
export type OpenSearchServiceApplicationAttributes = {
  /**
   * Amazon Resource Name (ARN) format.
   */
  Arn: string;
  /**
   * The identifier of the application.
   * @minLength `3`
   * @maxLength `40`
   */
  Id: string;
};
/**
 * Type definition for `AWS::OpenSearchService::Application.AppConfig`.
 * A key-value pair of AppConfig
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-application-appconfig.html}
 */
export type AppConfig = {
  /**
   * The configuration key
   */
  Key: AppConfigType;
  /**
   * The configuration value.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::OpenSearchService::Application.AppConfigType`.
 * AppConfig type values.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-application-appconfigtype.html}
 */
export type AppConfigType =
  | "opensearchDashboards.dashboardAdmin.users"
  | "opensearchDashboards.dashboardAdmin.groups";
/**
 * Type definition for `AWS::OpenSearchService::Application.DataSource`.
 * Datasource arn and description
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-application-datasource.html}
 */
export type DataSource = {
  /**
   * The ARN of the data source.
   */
  DataSourceArn: unknown;
  /**
   * Description of the data source.
   */
  DataSourceDescription?: string;
};
/**
 * Type definition for `AWS::OpenSearchService::Application.Tag`.
 * A key-value pair metadata associated with resource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-application-tag.html}
 */
export type Tag = {
  /**
   * The key in the key-value pair
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value in the key-value pair
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::OpenSearchService::Application`.
 * Amazon OpenSearchService application resource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-application.html}
 */
export class OpenSearchServiceApplication extends $Resource<
  "AWS::OpenSearchService::Application",
  OpenSearchServiceApplicationProperties,
  OpenSearchServiceApplicationAttributes
> {
  public static readonly Type = "AWS::OpenSearchService::Application";
  constructor(
    logicalId: string,
    properties: OpenSearchServiceApplicationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, OpenSearchServiceApplication.Type, properties, options);
  }
}
