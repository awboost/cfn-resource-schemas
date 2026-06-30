import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::QuickSight::OAuthClientApplication Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-oauthclientapplication.html}
 */
export type QuickSightOAuthClientApplicationProperties = {
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  ClientId?: string;
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  ClientSecret?: string;
  DataSourceType?:
    | "ADOBE_ANALYTICS"
    | "AMAZON_ELASTICSEARCH"
    | "AMAZON_OPENSEARCH"
    | "ATHENA"
    | "AURORA"
    | "AURORA_POSTGRESQL"
    | "AWS_IOT_ANALYTICS"
    | "BIGQUERY"
    | "CONFLUENCE"
    | "DATABRICKS"
    | "EXASOL"
    | "GITHUB"
    | "GOOGLESHEETS"
    | "GOOGLE_DRIVE"
    | "JIRA"
    | "MARIADB"
    | "MYSQL"
    | "ONE_DRIVE"
    | "ORACLE"
    | "POSTGRESQL"
    | "PRESTO"
    | "QBUSINESS"
    | "REDSHIFT"
    | "S3"
    | "S3_KNOWLEDGE_BASE"
    | "S3_TABLES"
    | "SALESFORCE"
    | "SERVICENOW"
    | "SHAREPOINT"
    | "SNOWFLAKE"
    | "SPARK"
    | "SQLSERVER"
    | "STARBURST"
    | "TERADATA"
    | "TIMESTREAM"
    | "TRINO"
    | "TWITTER"
    | "WEB_CRAWLER";
  IdentityProviderVpcConnectionProperties?: IdentityProviderVpcConnectionProperties;
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  Name: string;
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  OAuthAuthorizationEndpointUrl?: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   * @pattern `[^/][^\u0000-\u001f]*`
   */
  OAuthClientApplicationId: string;
  OAuthClientAuthenticationType: "TOKEN";
  /**
   * @minLength `1`
   * @maxLength `4096`
   */
  OAuthScopes?: string;
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  OAuthTokenEndpointUrl: string;
  /**
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::QuickSight::OAuthClientApplication`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-oauthclientapplication.html#aws-resource-quicksight-oauthclientapplication-return-values}
 */
export type QuickSightOAuthClientApplicationAttributes = {
  /**
   * @pattern `^arn:[-a-z0-9]*:quicksight:[-a-z0-9]*:[0-9]{12}:oauthclientapplication/.+`
   */
  Arn: string;
  CreatedTime: string;
  LastUpdatedTime: string;
};
/**
 * Type definition for `AWS::QuickSight::OAuthClientApplication.IdentityProviderVpcConnectionProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-oauthclientapplication-identityprovidervpcconnectionproperties.html}
 */
export type IdentityProviderVpcConnectionProperties = {
  VpcConnectionArn: string;
};
/**
 * Type definition for `AWS::QuickSight::OAuthClientApplication.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-oauthclientapplication-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Definition of AWS::QuickSight::OAuthClientApplication Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-oauthclientapplication.html}
 */
export class QuickSightOAuthClientApplication extends $Resource<
  "AWS::QuickSight::OAuthClientApplication",
  QuickSightOAuthClientApplicationProperties,
  QuickSightOAuthClientApplicationAttributes
> {
  public static readonly Type = "AWS::QuickSight::OAuthClientApplication";
  constructor(
    logicalId: string,
    properties: QuickSightOAuthClientApplicationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      QuickSightOAuthClientApplication.Type,
      properties,
      options,
    );
  }
}
