import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Glue::Crawler
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-crawler.html}
 */
export type GlueCrawlerProperties = {
  /**
   * A list of UTF-8 strings that specify the names of custom classifiers that are associated with the crawler.
   */
  Classifiers?: string[];
  /**
   * Crawler configuration information. This versioned JSON string allows users to specify aspects of a crawler's behavior.
   */
  Configuration?: string;
  /**
   * The name of the SecurityConfiguration structure to be used by this crawler.
   */
  CrawlerSecurityConfiguration?: string;
  /**
   * The name of the database in which the crawler's output is stored.
   */
  DatabaseName?: string;
  /**
   * A description of the crawler.
   */
  Description?: string;
  /**
   * Specifies AWS Lake Formation configuration settings for the crawler
   */
  LakeFormationConfiguration?: LakeFormationConfiguration;
  /**
   * The name of the crawler.
   */
  Name?: string;
  /**
   * When crawling an Amazon S3 data source after the first crawl is complete, specifies whether to crawl the entire dataset again or to crawl only folders that were added since the last crawler run. For more information, see Incremental Crawls in AWS Glue in the developer guide.
   */
  RecrawlPolicy?: RecrawlPolicy;
  /**
   * The Amazon Resource Name (ARN) of an IAM role that's used to access customer resources, such as Amazon Simple Storage Service (Amazon S3) data.
   */
  Role: string;
  /**
   * A scheduling object using a cron statement to schedule an event.
   */
  Schedule?: Schedule;
  /**
   * The policy that specifies update and delete behaviors for the crawler. The policy tells the crawler what to do in the event that it detects a change in a table that already exists in the customer's database at the time of the crawl. The SchemaChangePolicy does not affect whether or how new tables and partitions are added. New tables and partitions are always created regardless of the SchemaChangePolicy on a crawler. The SchemaChangePolicy consists of two components, UpdateBehavior and DeleteBehavior.
   */
  SchemaChangePolicy?: SchemaChangePolicy;
  /**
   * The prefix added to the names of tables that are created.
   */
  TablePrefix?: string;
  /**
   * The tags to use with this crawler.
   */
  Tags?: Record<string, any>;
  /**
   * Specifies data stores to crawl.
   */
  Targets: Targets;
};
/**
 * Type definition for `AWS::Glue::Crawler.CatalogTarget`.
 * Specifies an AWS Glue Data Catalog target.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-catalogtarget.html}
 */
export type CatalogTarget = {
  /**
   * The name of the connection for an Amazon S3-backed Data Catalog table to be a target of the crawl when using a Catalog connection type paired with a NETWORK Connection type.
   */
  ConnectionName?: string;
  /**
   * The name of the database to be synchronized.
   */
  DatabaseName?: string;
  /**
   * A valid Amazon dead-letter SQS ARN. For example, arn:aws:sqs:region:account:deadLetterQueue.
   */
  DlqEventQueueArn?: string;
  /**
   * A valid Amazon SQS ARN. For example, arn:aws:sqs:region:account:sqs.
   */
  EventQueueArn?: string;
  /**
   * A list of the tables to be synchronized.
   */
  Tables?: string[];
};
/**
 * Type definition for `AWS::Glue::Crawler.DeltaTarget`.
 * Specifies a Delta data store to crawl one or more Delta tables.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-deltatarget.html}
 */
export type DeltaTarget = {
  /**
   * The name of the connection to use to connect to the Delta table target.
   */
  ConnectionName?: string;
  /**
   * Specifies whether the crawler will create native tables, to allow integration with query engines that support querying of the Delta transaction log directly.
   */
  CreateNativeDeltaTable?: boolean;
  DeltaTables?: string[];
  /**
   * Specifies whether to write the manifest files to the Delta table path.
   */
  WriteManifest?: boolean;
};
/**
 * Type definition for `AWS::Glue::Crawler.DynamoDBTarget`.
 * Specifies an Amazon DynamoDB table to crawl.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-dynamodbtarget.html}
 */
export type DynamoDBTarget = {
  /**
   * The name of the DynamoDB table to crawl.
   */
  Path?: string;
  /**
   * Indicates whether to scan all the records, or to sample rows from the table. Scanning all the records can take a long time when the table is not a high throughput table. A value of true means to scan all records, while a value of false means to sample the records. If no value is specified, the value defaults to true.
   */
  ScanAll?: boolean;
  /**
     * The percentage of the configured read capacity units to use by the AWS Glue crawler. Read capacity units is a term defined by DynamoDB, and is a numeric value that acts as rate limiter for the number of reads that can be performed on that table per second.
    
    The valid values are null or a value between 0.1 to 1.5. A null value is used when user does not provide a value, and defaults to 0.5 of the configured Read Capacity Unit (for provisioned tables), or 0.25 of the max configured Read Capacity Unit (for tables using on-demand mode).
     */
  ScanRate?: number;
};
/**
 * Type definition for `AWS::Glue::Crawler.HudiTarget`.
 * Specifies Apache Hudi data store targets.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-huditarget.html}
 */
export type HudiTarget = {
  /**
   * The name of the connection to use to connect to the Hudi target.
   */
  ConnectionName?: string;
  /**
   * A list of global patterns used to exclude from the crawl.
   */
  Exclusions?: string[];
  /**
   * The maximum depth of Amazon S3 paths that the crawler can traverse to discover the Hudi metadata folder in your Amazon S3 path. Used to limit the crawler run time.
   */
  MaximumTraversalDepth?: number;
  /**
   * One or more Amazon S3 paths that contains Hudi metadata folders as s3://bucket/prefix .
   */
  Paths?: string[];
};
/**
 * Type definition for `AWS::Glue::Crawler.IcebergTarget`.
 * Specifies Apache Iceberg data store targets.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-icebergtarget.html}
 */
export type IcebergTarget = {
  /**
   * The name of the connection to use to connect to the Iceberg target.
   */
  ConnectionName?: string;
  /**
   * A list of global patterns used to exclude from the crawl.
   */
  Exclusions?: string[];
  /**
   * The maximum depth of Amazon S3 paths that the crawler can traverse to discover the Iceberg metadata folder in your Amazon S3 path. Used to limit the crawler run time.
   */
  MaximumTraversalDepth?: number;
  /**
   * One or more Amazon S3 paths that contains Iceberg metadata folders as s3://bucket/prefix .
   */
  Paths?: string[];
};
/**
 * Type definition for `AWS::Glue::Crawler.JdbcTarget`.
 * Specifies a JDBC data store to crawl.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-jdbctarget.html}
 */
export type JdbcTarget = {
  /**
   * The name of the connection to use to connect to the JDBC target.
   */
  ConnectionName?: string;
  /**
     * Specify a value of RAWTYPES or COMMENTS to enable additional metadata in table responses. RAWTYPES provides the native-level datatype. COMMENTS provides comments associated with a column or table in the database.
    
    If you do not need additional metadata, keep the field empty.
     */
  EnableAdditionalMetadata?: string[];
  /**
   * A list of glob patterns used to exclude from the crawl. For more information, see Catalog Tables with a Crawler.
   */
  Exclusions?: string[];
  /**
   * The path of the JDBC target.
   */
  Path?: string;
};
/**
 * Type definition for `AWS::Glue::Crawler.LakeFormationConfiguration`.
 * Specifies AWS Lake Formation configuration settings for the crawler
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-lakeformationconfiguration.html}
 */
export type LakeFormationConfiguration = {
  /**
   * Required for cross account crawls. For same account crawls as the target data, this can be left as null.
   */
  AccountId?: string;
  /**
   * Specifies whether to use AWS Lake Formation credentials for the crawler instead of the IAM role credentials.
   */
  UseLakeFormationCredentials?: boolean;
};
/**
 * Type definition for `AWS::Glue::Crawler.MongoDBTarget`.
 * Specifies an Amazon DocumentDB or MongoDB data store to crawl.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-mongodbtarget.html}
 */
export type MongoDBTarget = {
  /**
   * The name of the connection to use to connect to the Amazon DocumentDB or MongoDB target.
   */
  ConnectionName?: string;
  /**
   * The path of the Amazon DocumentDB or MongoDB target (database/collection).
   */
  Path?: string;
};
/**
 * Type definition for `AWS::Glue::Crawler.RecrawlPolicy`.
 * When crawling an Amazon S3 data source after the first crawl is complete, specifies whether to crawl the entire dataset again or to crawl only folders that were added since the last crawler run. For more information, see Incremental Crawls in AWS Glue in the developer guide.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-recrawlpolicy.html}
 */
export type RecrawlPolicy = {
  /**
   * Specifies whether to crawl the entire dataset again or to crawl only folders that were added since the last crawler run. A value of CRAWL_EVERYTHING specifies crawling the entire dataset again. A value of CRAWL_NEW_FOLDERS_ONLY specifies crawling only folders that were added since the last crawler run. A value of CRAWL_EVENT_MODE specifies crawling only the changes identified by Amazon S3 events.
   */
  RecrawlBehavior?: string;
};
/**
 * Type definition for `AWS::Glue::Crawler.S3Target`.
 * Specifies a data store in Amazon Simple Storage Service (Amazon S3).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-s3target.html}
 */
export type S3Target = {
  /**
   * The name of a connection which allows a job or crawler to access data in Amazon S3 within an Amazon Virtual Private Cloud environment (Amazon VPC).
   */
  ConnectionName?: string;
  /**
   * A valid Amazon dead-letter SQS ARN. For example, arn:aws:sqs:region:account:deadLetterQueue.
   */
  DlqEventQueueArn?: string;
  /**
   * A valid Amazon SQS ARN. For example, arn:aws:sqs:region:account:sqs.
   */
  EventQueueArn?: string;
  /**
   * A list of glob patterns used to exclude from the crawl.
   */
  Exclusions?: string[];
  /**
   * The path to the Amazon S3 target.
   */
  Path?: string;
  /**
   * Sets the number of files in each leaf folder to be crawled when crawling sample files in a dataset. If not set, all the files are crawled. A valid value is an integer between 1 and 249.
   */
  SampleSize?: number;
};
/**
 * Type definition for `AWS::Glue::Crawler.Schedule`.
 * A scheduling object using a cron statement to schedule an event.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-schedule.html}
 */
export type Schedule = {
  /**
   * A cron expression used to specify the schedule. For more information, see Time-Based Schedules for Jobs and Crawlers. For example, to run something every day at 12:15 UTC, specify cron(15 12 * * ? *).
   */
  ScheduleExpression?: string;
};
/**
 * Type definition for `AWS::Glue::Crawler.SchemaChangePolicy`.
 * The policy that specifies update and delete behaviors for the crawler. The policy tells the crawler what to do in the event that it detects a change in a table that already exists in the customer's database at the time of the crawl. The SchemaChangePolicy does not affect whether or how new tables and partitions are added. New tables and partitions are always created regardless of the SchemaChangePolicy on a crawler. The SchemaChangePolicy consists of two components, UpdateBehavior and DeleteBehavior.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-schemachangepolicy.html}
 */
export type SchemaChangePolicy = {
  /**
   * The deletion behavior when the crawler finds a deleted object. A value of LOG specifies that if a table or partition is found to no longer exist, do not delete it, only log that it was found to no longer exist. A value of DELETE_FROM_DATABASE specifies that if a table or partition is found to have been removed, delete it from the database. A value of DEPRECATE_IN_DATABASE specifies that if a table has been found to no longer exist, to add a property to the table that says 'DEPRECATED' and includes a timestamp with the time of deprecation.
   */
  DeleteBehavior?: string;
  /**
   * The update behavior when the crawler finds a changed schema. A value of LOG specifies that if a table or a partition already exists, and a change is detected, do not update it, only log that a change was detected. Add new tables and new partitions (including on existing tables). A value of UPDATE_IN_DATABASE specifies that if a table or partition already exists, and a change is detected, update it. Add new tables and partitions.
   */
  UpdateBehavior?: string;
};
/**
 * Type definition for `AWS::Glue::Crawler.Targets`.
 * Specifies data stores to crawl.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-targets.html}
 */
export type Targets = {
  /**
   * Specifies AWS Glue Data Catalog targets.
   */
  CatalogTargets?: CatalogTarget[];
  /**
   * Specifies an array of Delta data store targets.
   */
  DeltaTargets?: DeltaTarget[];
  /**
   * Specifies Amazon DynamoDB targets.
   */
  DynamoDBTargets?: DynamoDBTarget[];
  /**
   * Specifies Apache Hudi data store targets.
   */
  HudiTargets?: HudiTarget[];
  /**
   * Specifies Apache Iceberg data store targets.
   */
  IcebergTargets?: IcebergTarget[];
  /**
   * Specifies JDBC targets.
   */
  JdbcTargets?: JdbcTarget[];
  /**
   * A list of Mongo DB targets.
   */
  MongoDBTargets?: MongoDBTarget[];
  /**
   * Specifies Amazon Simple Storage Service (Amazon S3) targets.
   */
  S3Targets?: S3Target[];
};
/**
 * Resource Type definition for AWS::Glue::Crawler
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-crawler.html}
 */
export class GlueCrawler extends $Resource<
  "AWS::Glue::Crawler",
  GlueCrawlerProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::Glue::Crawler";
  constructor(
    logicalId: string,
    properties: GlueCrawlerProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, GlueCrawler.Type, properties, options);
  }
}
