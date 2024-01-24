import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::DataBrew::Job.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html}
 */
export type DataBrewJobProperties = {
  DataCatalogOutputs?: DataCatalogOutput[];
  DatabaseOutputs?: DatabaseOutput[];
  /**
   * Dataset name
   * @minLength `1`
   * @maxLength `255`
   */
  DatasetName?: string;
  /**
   * Encryption Key Arn
   * @minLength `20`
   * @maxLength `2048`
   */
  EncryptionKeyArn?: string;
  /**
   * Encryption mode
   */
  EncryptionMode?: "SSE-KMS" | "SSE-S3";
  /**
   * Job Sample
   */
  JobSample?: JobSample;
  /**
   * Log subscription
   */
  LogSubscription?: "ENABLE" | "DISABLE";
  /**
   * Max capacity
   */
  MaxCapacity?: number;
  /**
   * Max retries
   */
  MaxRetries?: number;
  /**
   * Job name
   * @minLength `1`
   * @maxLength `255`
   */
  Name: string;
  /**
   * Output location
   */
  OutputLocation?: OutputLocation;
  Outputs?: Output[];
  /**
   * Profile Job configuration
   */
  ProfileConfiguration?: ProfileConfiguration;
  /**
   * Project name
   * @minLength `1`
   * @maxLength `255`
   */
  ProjectName?: string;
  Recipe?: Recipe;
  /**
   * Role arn
   */
  RoleArn: string;
  Tags?: Tag[];
  /**
   * Timeout
   */
  Timeout?: number;
  /**
   * Job type
   */
  Type: "PROFILE" | "RECIPE";
  /**
   * Data quality rules configuration
   */
  ValidationConfigurations?: ValidationConfiguration[];
};
/**
 * Type definition for `AWS::DataBrew::Job.AllowedStatistics`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-allowedstatistics.html}
 */
export type AllowedStatistics = {
  /**
   * @minLength `1`
   */
  Statistics: string[];
};
/**
 * Type definition for `AWS::DataBrew::Job.ColumnSelector`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-columnselector.html}
 */
export type ColumnSelector = {
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  Name?: string;
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  Regex?: string;
};
/**
 * Type definition for `AWS::DataBrew::Job.ColumnStatisticsConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-columnstatisticsconfiguration.html}
 */
export type ColumnStatisticsConfiguration = {
  /**
   * @minLength `1`
   */
  Selectors?: ColumnSelector[];
  Statistics: StatisticsConfiguration;
};
/**
 * Type definition for `AWS::DataBrew::Job.CsvOutputOptions`.
 * Output Csv options
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-csvoutputoptions.html}
 */
export type CsvOutputOptions = {
  /**
   * @minLength `1`
   * @maxLength `1`
   */
  Delimiter?: string;
};
/**
 * Type definition for `AWS::DataBrew::Job.DatabaseOutput`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-databaseoutput.html}
 */
export type DatabaseOutput = {
  DatabaseOptions: DatabaseTableOutputOptions;
  /**
   * Database table name
   */
  DatabaseOutputMode?: "NEW_TABLE";
  /**
   * Glue connection name
   */
  GlueConnectionName: string;
};
/**
 * Type definition for `AWS::DataBrew::Job.DatabaseTableOutputOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-databasetableoutputoptions.html}
 */
export type DatabaseTableOutputOptions = {
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  TableName: string;
  /**
   * S3 Output location
   */
  TempDirectory?: S3Location;
};
/**
 * Type definition for `AWS::DataBrew::Job.DataCatalogOutput`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-datacatalogoutput.html}
 */
export type DataCatalogOutput = {
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  CatalogId?: string;
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  DatabaseName: string;
  DatabaseOptions?: DatabaseTableOutputOptions;
  Overwrite?: boolean;
  S3Options?: S3TableOutputOptions;
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  TableName: string;
};
/**
 * Type definition for `AWS::DataBrew::Job.EntityDetectorConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-entitydetectorconfiguration.html}
 */
export type EntityDetectorConfiguration = {
  AllowedStatistics?: AllowedStatistics;
  /**
   * @minLength `1`
   */
  EntityTypes: string[];
};
/**
 * Type definition for `AWS::DataBrew::Job.JobSample`.
 * Job Sample
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-jobsample.html}
 */
export type JobSample = {
  /**
   * Sample configuration mode for profile jobs.
   */
  Mode?: SampleMode;
  /**
   * Sample configuration size for profile jobs.
   */
  Size?: number;
};
/**
 * Type definition for `AWS::DataBrew::Job.Output`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-output.html}
 */
export type Output = {
  CompressionFormat?:
    | "GZIP"
    | "LZ4"
    | "SNAPPY"
    | "BZIP2"
    | "DEFLATE"
    | "LZO"
    | "BROTLI"
    | "ZSTD"
    | "ZLIB";
  Format?:
    | "CSV"
    | "JSON"
    | "PARQUET"
    | "GLUEPARQUET"
    | "AVRO"
    | "ORC"
    | "XML"
    | "TABLEAUHYPER";
  /**
   * Format options for job Output
   */
  FormatOptions?: OutputFormatOptions;
  /**
   * S3 Output location
   */
  Location: S3Location;
  /**
   * @min `1`
   * @max `999`
   */
  MaxOutputFiles?: number;
  Overwrite?: boolean;
  PartitionColumns?: string[];
};
/**
 * Type definition for `AWS::DataBrew::Job.OutputFormatOptions`.
 * Format options for job Output
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-outputformatoptions.html}
 */
export type OutputFormatOptions = {
  /**
   * Output Csv options
   */
  Csv?: CsvOutputOptions;
};
/**
 * Type definition for `AWS::DataBrew::Job.OutputLocation`.
 * Output location
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-outputlocation.html}
 */
export type OutputLocation = {
  Bucket: string;
  /**
   * @minLength `12`
   * @maxLength `12`
   */
  BucketOwner?: string;
  Key?: string;
};
/**
 * Type definition for `AWS::DataBrew::Job.ParameterMap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-parametermap.html}
 */
export type ParameterMap = Record<string, string>;
/**
 * Type definition for `AWS::DataBrew::Job.ProfileConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-profileconfiguration.html}
 */
export type ProfileConfiguration = {
  /**
   * @minLength `1`
   */
  ColumnStatisticsConfigurations?: ColumnStatisticsConfiguration[];
  DatasetStatisticsConfiguration?: StatisticsConfiguration;
  EntityDetectorConfiguration?: EntityDetectorConfiguration;
  /**
   * @minLength `1`
   */
  ProfileColumns?: ColumnSelector[];
};
/**
 * Type definition for `AWS::DataBrew::Job.Recipe`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-recipe.html}
 */
export type Recipe = {
  /**
   * Recipe name
   */
  Name: string;
  /**
   * Recipe version
   */
  Version?: string;
};
/**
 * Type definition for `AWS::DataBrew::Job.S3Location`.
 * S3 Output location
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-s3location.html}
 */
export type S3Location = {
  Bucket: string;
  /**
   * @minLength `12`
   * @maxLength `12`
   */
  BucketOwner?: string;
  Key?: string;
};
/**
 * Type definition for `AWS::DataBrew::Job.S3TableOutputOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-s3tableoutputoptions.html}
 */
export type S3TableOutputOptions = {
  /**
   * S3 Output location
   */
  Location: S3Location;
};
/**
 * Type definition for `AWS::DataBrew::Job.SampleMode`.
 * Sample configuration mode for profile jobs.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-samplemode.html}
 */
export type SampleMode = "FULL_DATASET" | "CUSTOM_ROWS";
/**
 * Type definition for `AWS::DataBrew::Job.StatisticOverride`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-statisticoverride.html}
 */
export type StatisticOverride = {
  Parameters: ParameterMap;
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[A-Z\_]+$`
   */
  Statistic: string;
};
/**
 * Type definition for `AWS::DataBrew::Job.StatisticsConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-statisticsconfiguration.html}
 */
export type StatisticsConfiguration = {
  /**
   * @minLength `1`
   */
  IncludedStatistics?: string[];
  /**
   * @minLength `1`
   */
  Overrides?: StatisticOverride[];
};
/**
 * Type definition for `AWS::DataBrew::Job.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-tag.html}
 */
export type Tag = {
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
};
/**
 * Type definition for `AWS::DataBrew::Job.ValidationConfiguration`.
 * Configuration to attach Rulesets to the job
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-validationconfiguration.html}
 */
export type ValidationConfiguration = {
  /**
   * Arn of the Ruleset
   * @minLength `20`
   * @maxLength `2048`
   */
  RulesetArn: string;
  ValidationMode?: ValidationMode;
};
/**
 * Type definition for `AWS::DataBrew::Job.ValidationMode`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-validationmode.html}
 */
export type ValidationMode = "CHECK_ALL";
/**
 * Resource schema for AWS::DataBrew::Job.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html}
 */
export class DataBrewJob extends $Resource<
  "AWS::DataBrew::Job",
  DataBrewJobProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::DataBrew::Job";
  constructor(
    logicalId: string,
    properties: DataBrewJobProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DataBrewJob.Type, properties, options);
  }
}
