import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::DataZone::DataSource Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html}
 */
export type DataZoneDataSourceProperties = {
  /**
   * The metadata forms that are to be attached to the assets that this data source works with.
   * @minLength `0`
   * @maxLength `10`
   */
  AssetFormsInput?: FormInput[];
  /**
   * Configuration of the data source. It can be set to either glueRunConfiguration or redshiftRunConfiguration.
   */
  Configuration?: DataSourceConfigurationInput;
  /**
   * The description of the data source.
   * @maxLength `2048`
   */
  Description?: string;
  /**
   * The ID of the Amazon DataZone domain where the data source is created.
   * @pattern `^dzd[-_][a-zA-Z0-9_-]{1,36}$`
   */
  DomainIdentifier: string;
  /**
   * Specifies whether the data source is enabled.
   */
  EnableSetting?: EnableSetting;
  /**
   * The unique identifier of the Amazon DataZone environment to which the data source publishes assets.
   */
  EnvironmentIdentifier: string;
  /**
   * The name of the data source.
   * @minLength `1`
   * @maxLength `256`
   */
  Name: string;
  /**
   * The identifier of the Amazon DataZone project in which you want to add the data source.
   */
  ProjectIdentifier: string;
  /**
   * Specifies whether the assets that this data source creates in the inventory are to be also automatically published to the catalog.
   */
  PublishOnImport?: boolean;
  /**
   * Specifies whether the business name generation is to be enabled for this data source.
   */
  Recommendation?: RecommendationConfiguration;
  /**
   * The schedule of the data source runs.
   */
  Schedule?: ScheduleConfiguration;
  /**
   * The type of the data source.
   * @minLength `1`
   * @maxLength `256`
   */
  Type: string;
};
/**
 * Attribute type definition for `AWS::DataZone::DataSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html#aws-resource-datazone-datasource-return-values}
 */
export type DataZoneDataSourceAttributes = {
  /**
   * The timestamp of when the data source was created.
   */
  CreatedAt: string;
  /**
   * The ID of the Amazon DataZone domain where the data source is created.
   * @pattern `^dzd[-_][a-zA-Z0-9_-]{1,36}$`
   */
  DomainId: string;
  /**
   * The unique identifier of the Amazon DataZone environment to which the data source publishes assets.
   * @pattern `^[a-zA-Z0-9_-]{1,36}$`
   */
  EnvironmentId: string;
  /**
   * The unique identifier of the data source.
   * @pattern `^[a-zA-Z0-9_-]{1,36}$`
   */
  Id: string;
  /**
   * The number of assets created by the data source during its last run.
   */
  LastRunAssetCount: number;
  /**
   * The timestamp that specifies when the data source was last run.
   */
  LastRunAt: string;
  /**
   * The status of the last run of this data source.
   */
  LastRunStatus: string;
  /**
   * The ID of the Amazon DataZone project to which the data source is added.
   * @pattern `^[a-zA-Z0-9_-]{1,36}$`
   */
  ProjectId: string;
  /**
   * The status of the data source.
   */
  Status: DataSourceStatus;
  /**
   * The timestamp of when this data source was updated.
   */
  UpdatedAt: string;
};
/**
 * Type definition for `AWS::DataZone::DataSource.DataSourceConfigurationInput`.
 * Specifies the configuration of the data source. It can be set to either glueRunConfiguration or redshiftRunConfiguration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-datasource-datasourceconfigurationinput.html}
 */
export type DataSourceConfigurationInput =
  | {
      GlueRunConfiguration?: GlueRunConfigurationInput;
    }
  | {
      /**
       * The configuration details of the Amazon Redshift data source.
       */
      RedshiftRunConfiguration?: RedshiftRunConfigurationInput;
    };
/**
 * Type definition for `AWS::DataZone::DataSource.DataSourceStatus`.
 * The status of the data source.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-datasource-datasourcestatus.html}
 */
export type DataSourceStatus =
  | "CREATING"
  | "FAILED_CREATION"
  | "READY"
  | "UPDATING"
  | "FAILED_UPDATE"
  | "RUNNING"
  | "DELETING"
  | "FAILED_DELETION";
/**
 * Type definition for `AWS::DataZone::DataSource.EnableSetting`.
 * Specifies whether the data source is enabled.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-datasource-enablesetting.html}
 */
export type EnableSetting = "ENABLED" | "DISABLED";
/**
 * Type definition for `AWS::DataZone::DataSource.FilterExpression`.
 * The search filter expression.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-datasource-filterexpression.html}
 */
export type FilterExpression = {
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  Expression: string;
  /**
   * The search filter expression type.
   */
  Type: FilterExpressionType;
};
/**
 * Type definition for `AWS::DataZone::DataSource.FilterExpressionType`.
 * The search filter expression type.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-datasource-filterexpressiontype.html}
 */
export type FilterExpressionType = "INCLUDE" | "EXCLUDE";
/**
 * Type definition for `AWS::DataZone::DataSource.FormInput`.
 * The details of a metadata form.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-datasource-forminput.html}
 */
export type FormInput = {
  /**
   * The content of the metadata form.
   * @maxLength `75000`
   */
  Content?: string;
  /**
   * The name of the metadata form.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?![0-9_])\w+$|^_\w*[a-zA-Z0-9]\w*$`
   */
  FormName: string;
  /**
   * The ID of the metadata form type.
   * @minLength `1`
   * @maxLength `385`
   * @pattern `^(?!\.)[\w\.]*\w$`
   */
  TypeIdentifier?: string;
  /**
   * The revision of the metadata form type.
   * @minLength `1`
   * @maxLength `64`
   */
  TypeRevision?: string;
};
/**
 * Type definition for `AWS::DataZone::DataSource.GlueRunConfigurationInput`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-datasource-gluerunconfigurationinput.html}
 */
export type GlueRunConfigurationInput = {
  /**
   * The data access role included in the configuration details of the AWS Glue data source.
   * @pattern `^arn:aws[^:]*:iam::\d{12}:(role|role/service-role)/[\w+=,.@-]{1,128}$`
   */
  DataAccessRole?: string;
  /**
   * The relational filter configurations included in the configuration details of the AWS Glue data source.
   */
  RelationalFilterConfigurations: RelationalFilterConfiguration[];
};
/**
 * Type definition for `AWS::DataZone::DataSource.RecommendationConfiguration`.
 * The recommendation to be updated as part of the UpdateDataSource action.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-datasource-recommendationconfiguration.html}
 */
export type RecommendationConfiguration = {
  /**
   * Specifies whether automatic business name generation is to be enabled or not as part of the recommendation configuration.
   */
  EnableBusinessNameGeneration?: boolean;
};
/**
 * Type definition for `AWS::DataZone::DataSource.RedshiftClusterStorage`.
 * The name of an Amazon Redshift cluster.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-datasource-redshiftclusterstorage.html}
 */
export type RedshiftClusterStorage = {
  /**
   * The name of an Amazon Redshift cluster.
   * @minLength `1`
   * @maxLength `63`
   * @pattern `^[0-9a-z].[a-z0-9\-]*$`
   */
  ClusterName: string;
};
/**
 * Type definition for `AWS::DataZone::DataSource.RedshiftCredentialConfiguration`.
 * The ARN of a secret manager for an Amazon Redshift cluster.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-datasource-redshiftcredentialconfiguration.html}
 */
export type RedshiftCredentialConfiguration = {
  /**
   * The ARN of a secret manager for an Amazon Redshift cluster.
   * @maxLength `256`
   * @pattern `^arn:aws[^:]*:secretsmanager:[a-z]{2}-?(iso|gov)?-{1}[a-z]*-{1}[0-9]:\d{12}:secret:.*$`
   */
  SecretManagerArn: string;
};
/**
 * Type definition for `AWS::DataZone::DataSource.RedshiftRunConfigurationInput`.
 * The configuration details of the Amazon Redshift data source.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-datasource-redshiftrunconfigurationinput.html}
 */
export type RedshiftRunConfigurationInput = {
  /**
   * The data access role included in the configuration details of the Amazon Redshift data source.
   * @pattern `^arn:aws[^:]*:iam::\d{12}:(role|role/service-role)/[\w+=,.@-]{1,128}$`
   */
  DataAccessRole?: string;
  /**
   * The details of the credentials required to access an Amazon Redshift cluster.
   */
  RedshiftCredentialConfiguration: RedshiftCredentialConfiguration;
  /**
   * The details of the Amazon Redshift storage as part of the configuration of an Amazon Redshift data source run.
   */
  RedshiftStorage: RedshiftStorage;
  /**
   * The relational filter configurations included in the configuration details of the Amazon Redshift data source.
   */
  RelationalFilterConfigurations: RelationalFilterConfiguration[];
};
/**
 * Type definition for `AWS::DataZone::DataSource.RedshiftServerlessStorage`.
 * The details of the Amazon Redshift Serverless workgroup storage.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-datasource-redshiftserverlessstorage.html}
 */
export type RedshiftServerlessStorage = {
  /**
   * The name of the Amazon Redshift Serverless workgroup.
   * @minLength `3`
   * @maxLength `64`
   * @pattern `^[a-z0-9-]+$`
   */
  WorkgroupName: string;
};
/**
 * Type definition for `AWS::DataZone::DataSource.RedshiftStorage`.
 * The details of the Amazon Redshift storage as part of the configuration of an Amazon Redshift data source run.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-datasource-redshiftstorage.html}
 */
export type RedshiftStorage =
  | {
      /**
       * The name of an Amazon Redshift cluster.
       */
      RedshiftClusterSource: RedshiftClusterStorage;
    }
  | {
      /**
       * The details of the Amazon Redshift Serverless workgroup storage.
       */
      RedshiftServerlessSource: RedshiftServerlessStorage;
    };
/**
 * Type definition for `AWS::DataZone::DataSource.RelationalFilterConfiguration`.
 * The relational filter configuration for the data source.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-datasource-relationalfilterconfiguration.html}
 */
export type RelationalFilterConfiguration = {
  /**
   * The database name specified in the relational filter configuration for the data source.
   * @minLength `1`
   * @maxLength `128`
   */
  DatabaseName: string;
  /**
   * The filter expressions specified in the relational filter configuration for the data source.
   */
  FilterExpressions?: FilterExpression[];
  /**
   * The schema name specified in the relational filter configuration for the data source.
   * @minLength `1`
   * @maxLength `128`
   */
  SchemaName?: string;
};
/**
 * Type definition for `AWS::DataZone::DataSource.ScheduleConfiguration`.
 * The schedule of the data source runs.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-datasource-scheduleconfiguration.html}
 */
export type ScheduleConfiguration = {
  /**
   * The schedule of the data source runs.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `cron\((\b[0-5]?[0-9]\b) (\b2[0-3]\b|\b[0-1]?[0-9]\b) (.*){1,5} (.*){1,5} (.*){1,5} (.*){1,5}\)`
   */
  Schedule?: string;
  /**
   * The timezone of the data source run.
   */
  Timezone?: string;
};
/**
 * Definition of AWS::DataZone::DataSource Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html}
 */
export class DataZoneDataSource extends $Resource<
  "AWS::DataZone::DataSource",
  DataZoneDataSourceProperties,
  DataZoneDataSourceAttributes
> {
  public static readonly Type = "AWS::DataZone::DataSource";
  constructor(
    logicalId: string,
    properties: DataZoneDataSourceProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DataZoneDataSource.Type, properties, options);
  }
}
