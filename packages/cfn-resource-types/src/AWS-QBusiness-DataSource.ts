import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::QBusiness::DataSource Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-datasource.html}
 */
export type QBusinessDataSourceProperties = {
  /**
   * @minLength `36`
   * @maxLength `36`
   * @pattern `^[a-zA-Z0-9][a-zA-Z0-9-]{35}$`
   */
  ApplicationId: string;
  Configuration: any;
  /**
   * @minLength `0`
   * @maxLength `1000`
   * @pattern `^[\s\S]*$`
   */
  Description?: string;
  /**
   * @minLength `1`
   * @maxLength `1000`
   * @pattern `^[a-zA-Z0-9][a-zA-Z0-9_-]*$`
   */
  DisplayName: string;
  DocumentEnrichmentConfiguration?: DocumentEnrichmentConfiguration;
  /**
   * @minLength `36`
   * @maxLength `36`
   * @pattern `^[a-zA-Z0-9][a-zA-Z0-9-]{35}$`
   */
  IndexId: string;
  MediaExtractionConfiguration?: MediaExtractionConfiguration;
  /**
   * @minLength `0`
   * @maxLength `1284`
   * @pattern `^arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}$`
   */
  RoleArn?: string;
  /**
   * @maxLength `998`
   * @pattern `^[\s\S]*$`
   */
  SyncSchedule?: string;
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Tags?: Tag[];
  VpcConfiguration?: DataSourceVpcConfiguration;
};
/**
 * Attribute type definition for `AWS::QBusiness::DataSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-datasource.html#aws-resource-qbusiness-datasource-return-values}
 */
export type QBusinessDataSourceAttributes = {
  CreatedAt: string;
  /**
   * @minLength `0`
   * @maxLength `1284`
   * @pattern `^arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}$`
   */
  DataSourceArn: string;
  /**
   * @minLength `36`
   * @maxLength `36`
   * @pattern `^[a-zA-Z0-9][a-zA-Z0-9-]{35}$`
   */
  DataSourceId: string;
  Status: DataSourceStatus;
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  Type: string;
  UpdatedAt: string;
};
/**
 * Type definition for `AWS::QBusiness::DataSource.AttributeValueOperator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-datasource-attributevalueoperator.html}
 */
export type AttributeValueOperator = "DELETE";
/**
 * Type definition for `AWS::QBusiness::DataSource.AudioExtractionConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-datasource-audioextractionconfiguration.html}
 */
export type AudioExtractionConfiguration = {
  AudioExtractionStatus: AudioExtractionStatus;
};
/**
 * Type definition for `AWS::QBusiness::DataSource.AudioExtractionStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-datasource-audioextractionstatus.html}
 */
export type AudioExtractionStatus = "ENABLED" | "DISABLED";
/**
 * Type definition for `AWS::QBusiness::DataSource.DataSourceStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-datasource-datasourcestatus.html}
 */
export type DataSourceStatus =
  | "PENDING_CREATION"
  | "CREATING"
  | "ACTIVE"
  | "DELETING"
  | "FAILED"
  | "UPDATING";
/**
 * Type definition for `AWS::QBusiness::DataSource.DataSourceVpcConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-datasource-datasourcevpcconfiguration.html}
 */
export type DataSourceVpcConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `10`
   */
  SecurityGroupIds: string[];
  SubnetIds: string[];
};
/**
 * Type definition for `AWS::QBusiness::DataSource.DocumentAttributeCondition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-datasource-documentattributecondition.html}
 */
export type DocumentAttributeCondition = {
  /**
   * @minLength `1`
   * @maxLength `200`
   * @pattern `^[a-zA-Z0-9_][a-zA-Z0-9_-]*$`
   */
  Key: string;
  Operator: DocumentEnrichmentConditionOperator;
  Value?: DocumentAttributeValue;
};
/**
 * Type definition for `AWS::QBusiness::DataSource.DocumentAttributeTarget`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-datasource-documentattributetarget.html}
 */
export type DocumentAttributeTarget = {
  AttributeValueOperator?: AttributeValueOperator;
  /**
   * @minLength `1`
   * @maxLength `200`
   * @pattern `^[a-zA-Z0-9_][a-zA-Z0-9_-]*$`
   */
  Key: string;
  Value?: DocumentAttributeValue;
};
/**
 * Type definition for `AWS::QBusiness::DataSource.DocumentAttributeValue`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-datasource-documentattributevalue.html}
 */
export type DocumentAttributeValue =
  | {
      /**
       * @maxLength `2048`
       */
      StringValue: string;
    }
  | {
      StringListValue: string[];
    }
  | {
      LongValue: number;
    }
  | {
      DateValue: string;
    };
/**
 * Type definition for `AWS::QBusiness::DataSource.DocumentContentOperator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-datasource-documentcontentoperator.html}
 */
export type DocumentContentOperator = "DELETE";
/**
 * Type definition for `AWS::QBusiness::DataSource.DocumentEnrichmentConditionOperator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-datasource-documentenrichmentconditionoperator.html}
 */
export type DocumentEnrichmentConditionOperator =
  | "GREATER_THAN"
  | "GREATER_THAN_OR_EQUALS"
  | "LESS_THAN"
  | "LESS_THAN_OR_EQUALS"
  | "EQUALS"
  | "NOT_EQUALS"
  | "CONTAINS"
  | "NOT_CONTAINS"
  | "EXISTS"
  | "NOT_EXISTS"
  | "BEGINS_WITH";
/**
 * Type definition for `AWS::QBusiness::DataSource.DocumentEnrichmentConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-datasource-documentenrichmentconfiguration.html}
 */
export type DocumentEnrichmentConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  InlineConfigurations?: InlineDocumentEnrichmentConfiguration[];
  PostExtractionHookConfiguration?: HookConfiguration;
  PreExtractionHookConfiguration?: HookConfiguration;
};
/**
 * Type definition for `AWS::QBusiness::DataSource.HookConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-datasource-hookconfiguration.html}
 */
export type HookConfiguration = {
  InvocationCondition?: DocumentAttributeCondition;
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^arn:aws[a-zA-Z-]*:lambda:[a-z-]*-[0-9]:[0-9]{12}:function:[a-zA-Z0-9-_]+(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})?(:[a-zA-Z0-9-_]+)?$`
   */
  LambdaArn?: string;
  /**
   * @minLength `0`
   * @maxLength `1284`
   * @pattern `^arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}$`
   */
  RoleArn?: string;
  /**
   * @minLength `1`
   * @maxLength `63`
   * @pattern `^[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9]$`
   */
  S3BucketName?: string;
};
/**
 * Type definition for `AWS::QBusiness::DataSource.ImageExtractionConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-datasource-imageextractionconfiguration.html}
 */
export type ImageExtractionConfiguration = {
  ImageExtractionStatus: ImageExtractionStatus;
};
/**
 * Type definition for `AWS::QBusiness::DataSource.ImageExtractionStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-datasource-imageextractionstatus.html}
 */
export type ImageExtractionStatus = "ENABLED" | "DISABLED";
/**
 * Type definition for `AWS::QBusiness::DataSource.InlineDocumentEnrichmentConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-datasource-inlinedocumentenrichmentconfiguration.html}
 */
export type InlineDocumentEnrichmentConfiguration = {
  Condition?: DocumentAttributeCondition;
  DocumentContentOperator?: DocumentContentOperator;
  Target?: DocumentAttributeTarget;
};
/**
 * Type definition for `AWS::QBusiness::DataSource.MediaExtractionConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-datasource-mediaextractionconfiguration.html}
 */
export type MediaExtractionConfiguration = {
  AudioExtractionConfiguration?: AudioExtractionConfiguration;
  ImageExtractionConfiguration?: ImageExtractionConfiguration;
  VideoExtractionConfiguration?: VideoExtractionConfiguration;
};
/**
 * Type definition for `AWS::QBusiness::DataSource.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-datasource-tag.html}
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
 * Type definition for `AWS::QBusiness::DataSource.VideoExtractionConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-datasource-videoextractionconfiguration.html}
 */
export type VideoExtractionConfiguration = {
  VideoExtractionStatus: VideoExtractionStatus;
};
/**
 * Type definition for `AWS::QBusiness::DataSource.VideoExtractionStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-datasource-videoextractionstatus.html}
 */
export type VideoExtractionStatus = "ENABLED" | "DISABLED";
/**
 * Definition of AWS::QBusiness::DataSource Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-datasource.html}
 */
export class QBusinessDataSource extends $Resource<
  "AWS::QBusiness::DataSource",
  QBusinessDataSourceProperties,
  QBusinessDataSourceAttributes
> {
  public static readonly Type = "AWS::QBusiness::DataSource";
  constructor(
    logicalId: string,
    properties: QBusinessDataSourceProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, QBusinessDataSource.Type, properties, options);
  }
}
