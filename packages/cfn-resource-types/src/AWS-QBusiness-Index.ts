import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::QBusiness::Index Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-index.html}
 */
export type QBusinessIndexProperties = {
  /**
   * @minLength `36`
   * @maxLength `36`
   * @pattern `^[a-zA-Z0-9][a-zA-Z0-9-]{35}$`
   */
  ApplicationId: string;
  CapacityConfiguration?: IndexCapacityConfiguration;
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
  /**
   * @minLength `1`
   * @maxLength `500`
   */
  DocumentAttributeConfigurations?: DocumentAttributeConfiguration[];
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Tags?: Tag[];
  Type?: IndexType;
};
/**
 * Attribute type definition for `AWS::QBusiness::Index`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-index.html#aws-resource-qbusiness-index-return-values}
 */
export type QBusinessIndexAttributes = {
  CreatedAt: string;
  /**
   * @minLength `0`
   * @maxLength `1284`
   * @pattern `^arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}$`
   */
  IndexArn: string;
  /**
   * @minLength `36`
   * @maxLength `36`
   * @pattern `^[a-zA-Z0-9][a-zA-Z0-9-]{35}$`
   */
  IndexId: string;
  IndexStatistics: {
    TextDocumentStatistics: {
      /**
       * @min `0`
       */
      IndexedTextBytes: number;
      /**
       * @min `0`
       */
      IndexedTextDocumentCount: number;
    };
  };
  Status: IndexStatus;
  UpdatedAt: string;
};
/**
 * Type definition for `AWS::QBusiness::Index.AttributeType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-index-attributetype.html}
 */
export type AttributeType = "STRING" | "STRING_LIST" | "NUMBER" | "DATE";
/**
 * Type definition for `AWS::QBusiness::Index.DocumentAttributeConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-index-documentattributeconfiguration.html}
 */
export type DocumentAttributeConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `30`
   * @pattern `^[a-zA-Z0-9_][a-zA-Z0-9_-]*$`
   */
  Name?: string;
  Search?: Status;
  Type?: AttributeType;
};
/**
 * Type definition for `AWS::QBusiness::Index.IndexCapacityConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-index-indexcapacityconfiguration.html}
 */
export type IndexCapacityConfiguration = {
  /**
   * @min `1`
   */
  Units?: number;
};
/**
 * Type definition for `AWS::QBusiness::Index.IndexStatistics`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-index-indexstatistics.html}
 */
export type IndexStatistics = {
  TextDocumentStatistics?: TextDocumentStatistics;
};
/**
 * Type definition for `AWS::QBusiness::Index.IndexStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-index-indexstatus.html}
 */
export type IndexStatus =
  | "CREATING"
  | "ACTIVE"
  | "DELETING"
  | "FAILED"
  | "UPDATING";
/**
 * Type definition for `AWS::QBusiness::Index.IndexType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-index-indextype.html}
 */
export type IndexType = "ENTERPRISE" | "STARTER";
/**
 * Type definition for `AWS::QBusiness::Index.Status`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-index-status.html}
 */
export type Status = "ENABLED" | "DISABLED";
/**
 * Type definition for `AWS::QBusiness::Index.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-index-tag.html}
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
 * Type definition for `AWS::QBusiness::Index.TextDocumentStatistics`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-index-textdocumentstatistics.html}
 */
export type TextDocumentStatistics = {
  /**
   * @min `0`
   */
  IndexedTextBytes?: number;
  /**
   * @min `0`
   */
  IndexedTextDocumentCount?: number;
};
/**
 * Definition of AWS::QBusiness::Index Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-index.html}
 */
export class QBusinessIndex extends $Resource<
  "AWS::QBusiness::Index",
  QBusinessIndexProperties,
  QBusinessIndexAttributes
> {
  public static readonly Type = "AWS::QBusiness::Index";
  constructor(
    logicalId: string,
    properties: QBusinessIndexProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, QBusinessIndex.Type, properties, options);
  }
}
