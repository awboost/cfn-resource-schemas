import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Glue::Crawler
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-crawler.html}
 */
export type GlueCrawlerProperties = {
  Classifiers?: string[];
  Configuration?: string;
  CrawlerSecurityConfiguration?: string;
  DatabaseName?: string;
  Description?: string;
  LakeFormationConfiguration?: LakeFormationConfiguration;
  Name?: string;
  RecrawlPolicy?: RecrawlPolicy;
  Role: string;
  Schedule?: Schedule;
  SchemaChangePolicy?: SchemaChangePolicy;
  TablePrefix?: string;
  Tags?: Record<string, any>;
  Targets: Targets;
};
/**
 * Attribute type definition for `AWS::Glue::Crawler`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-crawler.html#aws-resource-glue-crawler-return-values}
 */
export type GlueCrawlerAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::Glue::Crawler.CatalogTarget`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-catalogtarget.html}
 */
export type CatalogTarget = {
  ConnectionName?: string;
  DatabaseName?: string;
  DlqEventQueueArn?: string;
  EventQueueArn?: string;
  Tables?: string[];
};
/**
 * Type definition for `AWS::Glue::Crawler.DeltaTarget`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-deltatarget.html}
 */
export type DeltaTarget = {
  ConnectionName?: string;
  CreateNativeDeltaTable?: boolean;
  DeltaTables?: string[];
  WriteManifest?: boolean;
};
/**
 * Type definition for `AWS::Glue::Crawler.DynamoDBTarget`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-dynamodbtarget.html}
 */
export type DynamoDBTarget = {
  Path?: string;
};
/**
 * Type definition for `AWS::Glue::Crawler.IcebergTarget`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-icebergtarget.html}
 */
export type IcebergTarget = {
  ConnectionName?: string;
  Exclusions?: string[];
  MaximumTraversalDepth?: number;
  Paths?: string[];
};
/**
 * Type definition for `AWS::Glue::Crawler.JdbcTarget`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-jdbctarget.html}
 */
export type JdbcTarget = {
  ConnectionName?: string;
  Exclusions?: string[];
  Path?: string;
};
/**
 * Type definition for `AWS::Glue::Crawler.LakeFormationConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-lakeformationconfiguration.html}
 */
export type LakeFormationConfiguration = {
  AccountId?: string;
  UseLakeFormationCredentials?: boolean;
};
/**
 * Type definition for `AWS::Glue::Crawler.MongoDBTarget`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-mongodbtarget.html}
 */
export type MongoDBTarget = {
  ConnectionName?: string;
  Path?: string;
};
/**
 * Type definition for `AWS::Glue::Crawler.RecrawlPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-recrawlpolicy.html}
 */
export type RecrawlPolicy = {
  RecrawlBehavior?: string;
};
/**
 * Type definition for `AWS::Glue::Crawler.S3Target`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-s3target.html}
 */
export type S3Target = {
  ConnectionName?: string;
  DlqEventQueueArn?: string;
  EventQueueArn?: string;
  Exclusions?: string[];
  Path?: string;
  SampleSize?: number;
};
/**
 * Type definition for `AWS::Glue::Crawler.Schedule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-schedule.html}
 */
export type Schedule = {
  ScheduleExpression?: string;
};
/**
 * Type definition for `AWS::Glue::Crawler.SchemaChangePolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-schemachangepolicy.html}
 */
export type SchemaChangePolicy = {
  DeleteBehavior?: string;
  UpdateBehavior?: string;
};
/**
 * Type definition for `AWS::Glue::Crawler.Targets`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-targets.html}
 */
export type Targets = {
  CatalogTargets?: CatalogTarget[];
  DeltaTargets?: DeltaTarget[];
  DynamoDBTargets?: DynamoDBTarget[];
  IcebergTargets?: IcebergTarget[];
  JdbcTargets?: JdbcTarget[];
  MongoDBTargets?: MongoDBTarget[];
  S3Targets?: S3Target[];
};
/**
 * Resource Type definition for AWS::Glue::Crawler
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-crawler.html}
 */
export class GlueCrawler extends $Resource<
  "AWS::Glue::Crawler",
  GlueCrawlerProperties,
  GlueCrawlerAttributes
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
