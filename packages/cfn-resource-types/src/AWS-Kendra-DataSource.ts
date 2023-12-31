import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Kendra::DataSource`.
 * Kendra DataSource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html}
 */
export type KendraDataSourceProperties = {
  CustomDocumentEnrichmentConfiguration?: CustomDocumentEnrichmentConfiguration;
  DataSourceConfiguration?: DataSourceConfiguration;
  /**
   * Description of data source
   * @minLength `1`
   * @maxLength `1000`
   */
  Description?: string;
  /**
   * ID of Index
   * @minLength `36`
   * @maxLength `36`
   */
  IndexId: string;
  /**
   * The code for a language.
   * @minLength `2`
   * @maxLength `10`
   * @pattern `[a-zA-Z-]*`
   */
  LanguageCode?: string;
  /**
   * Name of data source
   * @minLength `1`
   * @maxLength `1000`
   */
  Name: string;
  /**
   * Role ARN
   * @minLength `1`
   * @maxLength `1284`
   * @pattern `arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}`
   */
  RoleArn?: string;
  /**
   * Schedule
   * @maxLength `1000`
   */
  Schedule?: string;
  /**
   * Tags for labeling the data source
   * @maxLength `200`
   */
  Tags?: Tag[];
  /**
   * Data source type
   */
  Type: Type;
};
/**
 * Attribute type definition for `AWS::Kendra::DataSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#aws-resource-kendra-datasource-return-values}
 */
export type KendraDataSourceAttributes = {
  /**
   * @maxLength `1000`
   */
  Arn: string;
  /**
   * ID of data source
   * @minLength `1`
   * @maxLength `100`
   */
  Id: string;
};
/**
 * Type definition for `AWS::Kendra::DataSource.AccessControlListConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-accesscontrollistconfiguration.html}
 */
export type AccessControlListConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `1024`
   */
  KeyPath?: string;
};
/**
 * Type definition for `AWS::Kendra::DataSource.AclConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-aclconfiguration.html}
 */
export type AclConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  AllowedGroupsColumnName: string;
};
/**
 * Type definition for `AWS::Kendra::DataSource.ColumnConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-columnconfiguration.html}
 */
export type ColumnConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `5`
   */
  ChangeDetectingColumns: string[];
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  DocumentDataColumnName: string;
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  DocumentIdColumnName: string;
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  DocumentTitleColumnName?: string;
  /**
   * @maxLength `100`
   */
  FieldMappings?: DataSourceToIndexFieldMapping[];
};
/**
 * Type definition for `AWS::Kendra::DataSource.ConditionOperator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-conditionoperator.html}
 */
export type ConditionOperator =
  | "GreaterThan"
  | "GreaterThanOrEquals"
  | "LessThan"
  | "LessThanOrEquals"
  | "Equals"
  | "NotEquals"
  | "Contains"
  | "NotContains"
  | "Exists"
  | "NotExists"
  | "BeginsWith";
/**
 * Type definition for `AWS::Kendra::DataSource.ConfluenceAttachmentConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluenceattachmentconfiguration.html}
 */
export type ConfluenceAttachmentConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `11`
   */
  AttachmentFieldMappings?: ConfluenceAttachmentToIndexFieldMapping[];
  CrawlAttachments?: boolean;
};
/**
 * Type definition for `AWS::Kendra::DataSource.ConfluenceAttachmentFieldName`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluenceattachmentfieldname.html}
 */
export type ConfluenceAttachmentFieldName =
  | "AUTHOR"
  | "CONTENT_TYPE"
  | "CREATED_DATE"
  | "DISPLAY_URL"
  | "FILE_SIZE"
  | "ITEM_TYPE"
  | "PARENT_ID"
  | "SPACE_KEY"
  | "SPACE_NAME"
  | "URL"
  | "VERSION";
/**
 * Type definition for `AWS::Kendra::DataSource.ConfluenceAttachmentToIndexFieldMapping`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluenceattachmenttoindexfieldmapping.html}
 */
export type ConfluenceAttachmentToIndexFieldMapping = {
  DataSourceFieldName: ConfluenceAttachmentFieldName;
  /**
   * @minLength `4`
   * @maxLength `40`
   */
  DateFieldFormat?: string;
  /**
   * @minLength `1`
   * @maxLength `30`
   */
  IndexFieldName: string;
};
/**
 * Type definition for `AWS::Kendra::DataSource.ConfluenceBlogConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluenceblogconfiguration.html}
 */
export type ConfluenceBlogConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `9`
   */
  BlogFieldMappings?: ConfluenceBlogToIndexFieldMapping[];
};
/**
 * Type definition for `AWS::Kendra::DataSource.ConfluenceBlogFieldName`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluenceblogfieldname.html}
 */
export type ConfluenceBlogFieldName =
  | "AUTHOR"
  | "DISPLAY_URL"
  | "ITEM_TYPE"
  | "LABELS"
  | "PUBLISH_DATE"
  | "SPACE_KEY"
  | "SPACE_NAME"
  | "URL"
  | "VERSION";
/**
 * Type definition for `AWS::Kendra::DataSource.ConfluenceBlogToIndexFieldMapping`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluenceblogtoindexfieldmapping.html}
 */
export type ConfluenceBlogToIndexFieldMapping = {
  DataSourceFieldName: ConfluenceBlogFieldName;
  /**
   * @minLength `4`
   * @maxLength `40`
   */
  DateFieldFormat?: string;
  /**
   * @minLength `1`
   * @maxLength `30`
   */
  IndexFieldName: string;
};
/**
 * Type definition for `AWS::Kendra::DataSource.ConfluenceConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluenceconfiguration.html}
 */
export type ConfluenceConfiguration = {
  AttachmentConfiguration?: ConfluenceAttachmentConfiguration;
  BlogConfiguration?: ConfluenceBlogConfiguration;
  /**
   * @maxLength `100`
   */
  ExclusionPatterns?: string[];
  /**
   * @maxLength `100`
   */
  InclusionPatterns?: string[];
  PageConfiguration?: ConfluencePageConfiguration;
  /**
   * @minLength `1`
   * @maxLength `1284`
   * @pattern `arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}`
   */
  SecretArn: string;
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^(https?|ftp|file)://([^\s]*)`
   */
  ServerUrl: string;
  SpaceConfiguration?: ConfluenceSpaceConfiguration;
  Version: ConfluenceVersion;
  VpcConfiguration?: DataSourceVpcConfiguration;
};
/**
 * Type definition for `AWS::Kendra::DataSource.ConfluencePageConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluencepageconfiguration.html}
 */
export type ConfluencePageConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `12`
   */
  PageFieldMappings?: ConfluencePageToIndexFieldMapping[];
};
/**
 * Type definition for `AWS::Kendra::DataSource.ConfluencePageFieldName`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluencepagefieldname.html}
 */
export type ConfluencePageFieldName =
  | "AUTHOR"
  | "CONTENT_STATUS"
  | "CREATED_DATE"
  | "DISPLAY_URL"
  | "ITEM_TYPE"
  | "LABELS"
  | "MODIFIED_DATE"
  | "PARENT_ID"
  | "SPACE_KEY"
  | "SPACE_NAME"
  | "URL"
  | "VERSION";
/**
 * Type definition for `AWS::Kendra::DataSource.ConfluencePageToIndexFieldMapping`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluencepagetoindexfieldmapping.html}
 */
export type ConfluencePageToIndexFieldMapping = {
  DataSourceFieldName: ConfluencePageFieldName;
  /**
   * @minLength `4`
   * @maxLength `40`
   */
  DateFieldFormat?: string;
  /**
   * @minLength `1`
   * @maxLength `30`
   */
  IndexFieldName: string;
};
/**
 * Type definition for `AWS::Kendra::DataSource.ConfluenceSpaceConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluencespaceconfiguration.html}
 */
export type ConfluenceSpaceConfiguration = {
  CrawlArchivedSpaces?: boolean;
  CrawlPersonalSpaces?: boolean;
  /**
   * @minLength `1`
   */
  ExcludeSpaces?: string[];
  /**
   * @minLength `1`
   */
  IncludeSpaces?: string[];
  /**
   * @minLength `1`
   * @maxLength `4`
   */
  SpaceFieldMappings?: ConfluenceSpaceToIndexFieldMapping[];
};
/**
 * Type definition for `AWS::Kendra::DataSource.ConfluenceSpaceFieldName`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluencespacefieldname.html}
 */
export type ConfluenceSpaceFieldName =
  | "DISPLAY_URL"
  | "ITEM_TYPE"
  | "SPACE_KEY"
  | "URL";
/**
 * Type definition for `AWS::Kendra::DataSource.ConfluenceSpaceToIndexFieldMapping`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluencespacetoindexfieldmapping.html}
 */
export type ConfluenceSpaceToIndexFieldMapping = {
  DataSourceFieldName: ConfluenceSpaceFieldName;
  /**
   * @minLength `4`
   * @maxLength `40`
   */
  DateFieldFormat?: string;
  /**
   * @minLength `1`
   * @maxLength `30`
   */
  IndexFieldName: string;
};
/**
 * Type definition for `AWS::Kendra::DataSource.ConfluenceVersion`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluenceversion.html}
 */
export type ConfluenceVersion = "CLOUD" | "SERVER";
/**
 * Type definition for `AWS::Kendra::DataSource.ConnectionConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-connectionconfiguration.html}
 */
export type ConnectionConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `253`
   */
  DatabaseHost: string;
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  DatabaseName: string;
  /**
   * @min `1`
   * @max `65535`
   */
  DatabasePort: number;
  /**
   * @minLength `1`
   * @maxLength `1284`
   * @pattern `arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}`
   */
  SecretArn: string;
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  TableName: string;
};
/**
 * Type definition for `AWS::Kendra::DataSource.CustomDocumentEnrichmentConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-customdocumentenrichmentconfiguration.html}
 */
export type CustomDocumentEnrichmentConfiguration = {
  /**
   * List of InlineCustomDocumentEnrichmentConfigurations
   * @maxLength `100`
   */
  InlineConfigurations?: InlineCustomDocumentEnrichmentConfiguration[];
  PostExtractionHookConfiguration?: HookConfiguration;
  PreExtractionHookConfiguration?: HookConfiguration;
  /**
   * Role ARN
   * @minLength `1`
   * @maxLength `1284`
   * @pattern `arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}`
   */
  RoleArn?: string;
};
/**
 * Type definition for `AWS::Kendra::DataSource.DatabaseConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-databaseconfiguration.html}
 */
export type DatabaseConfiguration = {
  AclConfiguration?: AclConfiguration;
  ColumnConfiguration: ColumnConfiguration;
  ConnectionConfiguration: ConnectionConfiguration;
  DatabaseEngineType: DatabaseEngineType;
  SqlConfiguration?: SqlConfiguration;
  VpcConfiguration?: DataSourceVpcConfiguration;
};
/**
 * Type definition for `AWS::Kendra::DataSource.DatabaseEngineType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-databaseenginetype.html}
 */
export type DatabaseEngineType =
  | "RDS_AURORA_MYSQL"
  | "RDS_AURORA_POSTGRESQL"
  | "RDS_MYSQL"
  | "RDS_POSTGRESQL";
/**
 * Type definition for `AWS::Kendra::DataSource.DataSourceConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-datasourceconfiguration.html}
 */
export type DataSourceConfiguration = {
  ConfluenceConfiguration?: ConfluenceConfiguration;
  DatabaseConfiguration?: DatabaseConfiguration;
  GoogleDriveConfiguration?: GoogleDriveConfiguration;
  OneDriveConfiguration?: OneDriveConfiguration;
  /**
   * S3 data source configuration
   */
  S3Configuration?: S3DataSourceConfiguration;
  SalesforceConfiguration?: SalesforceConfiguration;
  ServiceNowConfiguration?: ServiceNowConfiguration;
  /**
   * SharePoint configuration
   */
  SharePointConfiguration?: SharePointConfiguration;
  WebCrawlerConfiguration?: WebCrawlerConfiguration;
  WorkDocsConfiguration?: WorkDocsConfiguration;
};
/**
 * Type definition for `AWS::Kendra::DataSource.DataSourceToIndexFieldMapping`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-datasourcetoindexfieldmapping.html}
 */
export type DataSourceToIndexFieldMapping = {
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  DataSourceFieldName: string;
  /**
   * @minLength `4`
   * @maxLength `40`
   */
  DateFieldFormat?: string;
  /**
   * @minLength `1`
   * @maxLength `30`
   */
  IndexFieldName: string;
};
/**
 * Type definition for `AWS::Kendra::DataSource.DataSourceVpcConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-datasourcevpcconfiguration.html}
 */
export type DataSourceVpcConfiguration = {
  /**
   * @maxLength `10`
   */
  SecurityGroupIds: string[];
  /**
   * @maxLength `6`
   */
  SubnetIds: string[];
};
/**
 * Type definition for `AWS::Kendra::DataSource.DocumentAttributeCondition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-documentattributecondition.html}
 */
export type DocumentAttributeCondition = {
  /**
   * @minLength `1`
   * @maxLength `200`
   * @pattern `[a-zA-Z0-9_][a-zA-Z0-9_-]*`
   */
  ConditionDocumentAttributeKey: string;
  ConditionOnValue?: DocumentAttributeValue;
  Operator: ConditionOperator;
};
/**
 * Type definition for `AWS::Kendra::DataSource.DocumentAttributeTarget`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-documentattributetarget.html}
 */
export type DocumentAttributeTarget = {
  /**
   * @minLength `1`
   * @maxLength `200`
   * @pattern `[a-zA-Z0-9_][a-zA-Z0-9_-]*`
   */
  TargetDocumentAttributeKey: string;
  TargetDocumentAttributeValue?: DocumentAttributeValue;
  TargetDocumentAttributeValueDeletion?: boolean;
};
/**
 * Type definition for `AWS::Kendra::DataSource.DocumentAttributeValue`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-documentattributevalue.html}
 */
export type DocumentAttributeValue = {
  DateValue?: string;
  LongValue?: number;
  StringListValue?: string[];
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  StringValue?: string;
};
/**
 * Type definition for `AWS::Kendra::DataSource.DocumentsMetadataConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-documentsmetadataconfiguration.html}
 */
export type DocumentsMetadataConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `1024`
   */
  S3Prefix?: string;
};
/**
 * Type definition for `AWS::Kendra::DataSource.GoogleDriveConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-googledriveconfiguration.html}
 */
export type GoogleDriveConfiguration = {
  /**
   * @minLength `0`
   * @maxLength `30`
   */
  ExcludeMimeTypes?: string[];
  /**
   * @minLength `0`
   * @maxLength `100`
   */
  ExcludeSharedDrives?: string[];
  /**
   * @minLength `0`
   * @maxLength `100`
   */
  ExcludeUserAccounts?: string[];
  /**
   * @maxLength `100`
   */
  ExclusionPatterns?: string[];
  /**
   * @maxLength `100`
   */
  FieldMappings?: DataSourceToIndexFieldMapping[];
  /**
   * @maxLength `100`
   */
  InclusionPatterns?: string[];
  /**
   * @minLength `1`
   * @maxLength `1284`
   * @pattern `arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}`
   */
  SecretArn: string;
};
/**
 * Type definition for `AWS::Kendra::DataSource.HookConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-hookconfiguration.html}
 */
export type HookConfiguration = {
  InvocationCondition?: DocumentAttributeCondition;
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  LambdaArn: string;
  /**
   * @minLength `3`
   * @maxLength `63`
   * @pattern `[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9]`
   */
  S3Bucket: string;
};
/**
 * Type definition for `AWS::Kendra::DataSource.InlineCustomDocumentEnrichmentConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-inlinecustomdocumentenrichmentconfiguration.html}
 */
export type InlineCustomDocumentEnrichmentConfiguration = {
  Condition?: DocumentAttributeCondition;
  DocumentContentDeletion?: boolean;
  Target?: DocumentAttributeTarget;
};
/**
 * Type definition for `AWS::Kendra::DataSource.OneDriveConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-onedriveconfiguration.html}
 */
export type OneDriveConfiguration = {
  DisableLocalGroups?: boolean;
  /**
   * @maxLength `100`
   */
  ExclusionPatterns?: string[];
  /**
   * @maxLength `100`
   */
  FieldMappings?: DataSourceToIndexFieldMapping[];
  /**
   * @maxLength `100`
   */
  InclusionPatterns?: string[];
  OneDriveUsers: OneDriveUsers;
  /**
   * @minLength `1`
   * @maxLength `1284`
   * @pattern `arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}`
   */
  SecretArn: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^([a-zA-Z0-9]+(-[a-zA-Z0-9]+)*\.)+[a-z]{2,}$`
   */
  TenantDomain: string;
};
/**
 * Type definition for `AWS::Kendra::DataSource.OneDriveUsers`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-onedriveusers.html}
 */
export type OneDriveUsers = {
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  OneDriveUserList?: string[];
  OneDriveUserS3Path?: S3Path;
};
/**
 * Type definition for `AWS::Kendra::DataSource.ProxyConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-proxyconfiguration.html}
 */
export type ProxyConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `1284`
   * @pattern `arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}`
   */
  Credentials?: string;
  /**
   * @minLength `1`
   * @maxLength `253`
   * @pattern `([^\s]*)`
   */
  Host: string;
  /**
   * @min `1`
   * @max `65535`
   */
  Port: number;
};
/**
 * Type definition for `AWS::Kendra::DataSource.QueryIdentifiersEnclosingOption`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-queryidentifiersenclosingoption.html}
 */
export type QueryIdentifiersEnclosingOption = "DOUBLE_QUOTES" | "NONE";
/**
 * Type definition for `AWS::Kendra::DataSource.S3DataSourceConfiguration`.
 * S3 data source configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-s3datasourceconfiguration.html}
 */
export type S3DataSourceConfiguration = {
  AccessControlListConfiguration?: AccessControlListConfiguration;
  /**
   * @minLength `3`
   * @maxLength `63`
   * @pattern `[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9]`
   */
  BucketName: string;
  DocumentsMetadataConfiguration?: DocumentsMetadataConfiguration;
  /**
   * @maxLength `100`
   */
  ExclusionPatterns?: string[];
  /**
   * @maxLength `100`
   */
  InclusionPatterns?: string[];
  /**
   * @maxLength `100`
   */
  InclusionPrefixes?: string[];
};
/**
 * Type definition for `AWS::Kendra::DataSource.S3Path`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-s3path.html}
 */
export type S3Path = {
  /**
   * @minLength `3`
   * @maxLength `63`
   * @pattern `[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9]`
   */
  Bucket: string;
  /**
   * @minLength `1`
   * @maxLength `1024`
   */
  Key: string;
};
/**
 * Type definition for `AWS::Kendra::DataSource.SalesforceChatterFeedConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-salesforcechatterfeedconfiguration.html}
 */
export type SalesforceChatterFeedConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  DocumentDataFieldName: string;
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  DocumentTitleFieldName?: string;
  /**
   * @maxLength `100`
   */
  FieldMappings?: DataSourceToIndexFieldMapping[];
  /**
   * @minLength `1`
   * @maxLength `2`
   */
  IncludeFilterTypes?: SalesforceChatterFeedIncludeFilterType[];
};
/**
 * Type definition for `AWS::Kendra::DataSource.SalesforceChatterFeedIncludeFilterType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-salesforcechatterfeedincludefiltertype.html}
 */
export type SalesforceChatterFeedIncludeFilterType =
  | "ACTIVE_USER"
  | "STANDARD_USER";
/**
 * Type definition for `AWS::Kendra::DataSource.SalesforceConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-salesforceconfiguration.html}
 */
export type SalesforceConfiguration = {
  ChatterFeedConfiguration?: SalesforceChatterFeedConfiguration;
  CrawlAttachments?: boolean;
  /**
   * @maxLength `100`
   */
  ExcludeAttachmentFilePatterns?: string[];
  /**
   * @maxLength `100`
   */
  IncludeAttachmentFilePatterns?: string[];
  KnowledgeArticleConfiguration?: SalesforceKnowledgeArticleConfiguration;
  /**
   * @minLength `1`
   * @maxLength `1284`
   * @pattern `arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}`
   */
  SecretArn: string;
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^(https?|ftp|file)://([^\s]*)`
   */
  ServerUrl: string;
  StandardObjectAttachmentConfiguration?: SalesforceStandardObjectAttachmentConfiguration;
  /**
   * @minLength `1`
   * @maxLength `17`
   */
  StandardObjectConfigurations?: SalesforceStandardObjectConfiguration[];
};
/**
 * Type definition for `AWS::Kendra::DataSource.SalesforceCustomKnowledgeArticleTypeConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-salesforcecustomknowledgearticletypeconfiguration.html}
 */
export type SalesforceCustomKnowledgeArticleTypeConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  DocumentDataFieldName: string;
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  DocumentTitleFieldName?: string;
  /**
   * @maxLength `100`
   */
  FieldMappings?: DataSourceToIndexFieldMapping[];
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  Name: string;
};
/**
 * Type definition for `AWS::Kendra::DataSource.SalesforceKnowledgeArticleConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-salesforceknowledgearticleconfiguration.html}
 */
export type SalesforceKnowledgeArticleConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `10`
   */
  CustomKnowledgeArticleTypeConfigurations?: SalesforceCustomKnowledgeArticleTypeConfiguration[];
  /**
   * @minLength `1`
   * @maxLength `3`
   */
  IncludedStates: SalesforceKnowledgeArticleState[];
  StandardKnowledgeArticleTypeConfiguration?: SalesforceStandardKnowledgeArticleTypeConfiguration;
};
/**
 * Type definition for `AWS::Kendra::DataSource.SalesforceKnowledgeArticleState`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-salesforceknowledgearticlestate.html}
 */
export type SalesforceKnowledgeArticleState =
  | "DRAFT"
  | "PUBLISHED"
  | "ARCHIVED";
/**
 * Type definition for `AWS::Kendra::DataSource.SalesforceStandardKnowledgeArticleTypeConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-salesforcestandardknowledgearticletypeconfiguration.html}
 */
export type SalesforceStandardKnowledgeArticleTypeConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  DocumentDataFieldName: string;
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  DocumentTitleFieldName?: string;
  /**
   * @maxLength `100`
   */
  FieldMappings?: DataSourceToIndexFieldMapping[];
};
/**
 * Type definition for `AWS::Kendra::DataSource.SalesforceStandardObjectAttachmentConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-salesforcestandardobjectattachmentconfiguration.html}
 */
export type SalesforceStandardObjectAttachmentConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  DocumentTitleFieldName?: string;
  /**
   * @maxLength `100`
   */
  FieldMappings?: DataSourceToIndexFieldMapping[];
};
/**
 * Type definition for `AWS::Kendra::DataSource.SalesforceStandardObjectConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-salesforcestandardobjectconfiguration.html}
 */
export type SalesforceStandardObjectConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  DocumentDataFieldName: string;
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  DocumentTitleFieldName?: string;
  /**
   * @maxLength `100`
   */
  FieldMappings?: DataSourceToIndexFieldMapping[];
  Name: SalesforceStandardObjectName;
};
/**
 * Type definition for `AWS::Kendra::DataSource.SalesforceStandardObjectName`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-salesforcestandardobjectname.html}
 */
export type SalesforceStandardObjectName =
  | "ACCOUNT"
  | "CAMPAIGN"
  | "CASE"
  | "CONTACT"
  | "CONTRACT"
  | "DOCUMENT"
  | "GROUP"
  | "IDEA"
  | "LEAD"
  | "OPPORTUNITY"
  | "PARTNER"
  | "PRICEBOOK"
  | "PRODUCT"
  | "PROFILE"
  | "SOLUTION"
  | "TASK"
  | "USER";
/**
 * Type definition for `AWS::Kendra::DataSource.ServiceNowAuthenticationType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-servicenowauthenticationtype.html}
 */
export type ServiceNowAuthenticationType = "HTTP_BASIC" | "OAUTH2";
/**
 * Type definition for `AWS::Kendra::DataSource.ServiceNowBuildVersionType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-servicenowbuildversiontype.html}
 */
export type ServiceNowBuildVersionType = "LONDON" | "OTHERS";
/**
 * Type definition for `AWS::Kendra::DataSource.ServiceNowConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-servicenowconfiguration.html}
 */
export type ServiceNowConfiguration = {
  AuthenticationType?: ServiceNowAuthenticationType;
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^(?!(^(https?|ftp|file):\/\/))[a-z0-9-]+(\.service-now\.com)$`
   */
  HostUrl: string;
  KnowledgeArticleConfiguration?: ServiceNowKnowledgeArticleConfiguration;
  /**
   * @minLength `1`
   * @maxLength `1284`
   * @pattern `arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}`
   */
  SecretArn: string;
  ServiceCatalogConfiguration?: ServiceNowServiceCatalogConfiguration;
  ServiceNowBuildVersion: ServiceNowBuildVersionType;
};
/**
 * Type definition for `AWS::Kendra::DataSource.ServiceNowKnowledgeArticleConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-servicenowknowledgearticleconfiguration.html}
 */
export type ServiceNowKnowledgeArticleConfiguration = {
  CrawlAttachments?: boolean;
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  DocumentDataFieldName: string;
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  DocumentTitleFieldName?: string;
  /**
   * @maxLength `100`
   */
  ExcludeAttachmentFilePatterns?: string[];
  /**
   * @maxLength `100`
   */
  FieldMappings?: DataSourceToIndexFieldMapping[];
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  FilterQuery?: string;
  /**
   * @maxLength `100`
   */
  IncludeAttachmentFilePatterns?: string[];
};
/**
 * Type definition for `AWS::Kendra::DataSource.ServiceNowServiceCatalogConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-servicenowservicecatalogconfiguration.html}
 */
export type ServiceNowServiceCatalogConfiguration = {
  CrawlAttachments?: boolean;
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  DocumentDataFieldName: string;
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  DocumentTitleFieldName?: string;
  /**
   * @maxLength `100`
   */
  ExcludeAttachmentFilePatterns?: string[];
  /**
   * @maxLength `100`
   */
  FieldMappings?: DataSourceToIndexFieldMapping[];
  /**
   * @maxLength `100`
   */
  IncludeAttachmentFilePatterns?: string[];
};
/**
 * Type definition for `AWS::Kendra::DataSource.SharePointConfiguration`.
 * SharePoint configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-sharepointconfiguration.html}
 */
export type SharePointConfiguration = {
  CrawlAttachments?: boolean;
  DisableLocalGroups?: boolean;
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  DocumentTitleFieldName?: string;
  /**
   * @maxLength `100`
   */
  ExclusionPatterns?: string[];
  /**
   * @maxLength `100`
   */
  FieldMappings?: DataSourceToIndexFieldMapping[];
  /**
   * @maxLength `100`
   */
  InclusionPatterns?: string[];
  /**
   * @minLength `1`
   * @maxLength `1284`
   * @pattern `arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}`
   */
  SecretArn: string;
  SharePointVersion:
    | "SHAREPOINT_ONLINE"
    | "SHAREPOINT_2013"
    | "SHAREPOINT_2016";
  SslCertificateS3Path?: S3Path;
  /**
   * @maxLength `100`
   */
  Urls: string[];
  UseChangeLog?: boolean;
  VpcConfiguration?: DataSourceVpcConfiguration;
};
/**
 * Type definition for `AWS::Kendra::DataSource.SqlConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-sqlconfiguration.html}
 */
export type SqlConfiguration = {
  QueryIdentifiersEnclosingOption?: QueryIdentifiersEnclosingOption;
};
/**
 * Type definition for `AWS::Kendra::DataSource.Tag`.
 * A label for tagging Kendra resources
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-tag.html}
 */
export type Tag = {
  /**
   * A string used to identify this tag
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * A string containing the value for the tag
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::Kendra::DataSource.Type`.
 * Data source type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-type.html}
 */
export type Type =
  | "S3"
  | "SHAREPOINT"
  | "SALESFORCE"
  | "ONEDRIVE"
  | "SERVICENOW"
  | "DATABASE"
  | "CUSTOM"
  | "CONFLUENCE"
  | "GOOGLEDRIVE"
  | "WEBCRAWLER"
  | "WORKDOCS";
/**
 * Type definition for `AWS::Kendra::DataSource.WebCrawlerAuthenticationConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-webcrawlerauthenticationconfiguration.html}
 */
export type WebCrawlerAuthenticationConfiguration = {
  /**
   * @maxLength `10`
   */
  BasicAuthentication?: WebCrawlerBasicAuthentication[];
};
/**
 * Type definition for `AWS::Kendra::DataSource.WebCrawlerBasicAuthentication`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-webcrawlerbasicauthentication.html}
 */
export type WebCrawlerBasicAuthentication = {
  /**
   * @minLength `1`
   * @maxLength `1284`
   * @pattern `arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}`
   */
  Credentials: string;
  /**
   * @minLength `1`
   * @maxLength `253`
   * @pattern `([^\s]*)`
   */
  Host: string;
  /**
   * @min `1`
   * @max `65535`
   */
  Port: number;
};
/**
 * Type definition for `AWS::Kendra::DataSource.WebCrawlerConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-webcrawlerconfiguration.html}
 */
export type WebCrawlerConfiguration = {
  AuthenticationConfiguration?: WebCrawlerAuthenticationConfiguration;
  /**
   * @min `1`
   * @max `10`
   */
  CrawlDepth?: number;
  /**
   * @min `0`
   * @max `50`
   */
  MaxContentSizePerPageInMegaBytes?: number;
  /**
   * @min `1`
   * @max `1000`
   */
  MaxLinksPerPage?: number;
  /**
   * @min `1`
   * @max `300`
   */
  MaxUrlsPerMinuteCrawlRate?: number;
  ProxyConfiguration?: ProxyConfiguration;
  /**
   * @maxLength `100`
   */
  UrlExclusionPatterns?: string[];
  /**
   * @maxLength `100`
   */
  UrlInclusionPatterns?: string[];
  Urls: WebCrawlerUrls;
};
/**
 * Type definition for `AWS::Kendra::DataSource.WebCrawlerSeedUrlConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-webcrawlerseedurlconfiguration.html}
 */
export type WebCrawlerSeedUrlConfiguration = {
  /**
   * @minLength `0`
   * @maxLength `100`
   */
  SeedUrls: string[];
  WebCrawlerMode?: "HOST_ONLY" | "SUBDOMAINS" | "EVERYTHING";
};
/**
 * Type definition for `AWS::Kendra::DataSource.WebCrawlerSiteMapsConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-webcrawlersitemapsconfiguration.html}
 */
export type WebCrawlerSiteMapsConfiguration = {
  /**
   * @minLength `0`
   * @maxLength `3`
   */
  SiteMaps: string[];
};
/**
 * Type definition for `AWS::Kendra::DataSource.WebCrawlerUrls`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-webcrawlerurls.html}
 */
export type WebCrawlerUrls = {
  SeedUrlConfiguration?: WebCrawlerSeedUrlConfiguration;
  SiteMapsConfiguration?: WebCrawlerSiteMapsConfiguration;
};
/**
 * Type definition for `AWS::Kendra::DataSource.WorkDocsConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-workdocsconfiguration.html}
 */
export type WorkDocsConfiguration = {
  CrawlComments?: boolean;
  /**
   * @maxLength `100`
   */
  ExclusionPatterns?: string[];
  /**
   * @maxLength `100`
   */
  FieldMappings?: DataSourceToIndexFieldMapping[];
  /**
   * @maxLength `100`
   */
  InclusionPatterns?: string[];
  /**
   * @minLength `12`
   * @maxLength `12`
   * @pattern `d-[0-9a-fA-F]{10}`
   */
  OrganizationId: string;
  UseChangeLog?: boolean;
};
/**
 * Resource type definition for `AWS::Kendra::DataSource`.
 * Kendra DataSource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html}
 */
export class KendraDataSource extends $Resource<
  "AWS::Kendra::DataSource",
  KendraDataSourceProperties,
  KendraDataSourceAttributes
> {
  public static readonly Type = "AWS::Kendra::DataSource";
  constructor(
    logicalId: string,
    properties: KendraDataSourceProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, KendraDataSource.Type, properties, options);
  }
}
