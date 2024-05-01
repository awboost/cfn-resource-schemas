import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::QBusiness::Retriever Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-retriever.html}
 */
export type QBusinessRetrieverProperties = {
  /**
   * @minLength `36`
   * @maxLength `36`
   * @pattern `^[a-zA-Z0-9][a-zA-Z0-9-]{35}$`
   */
  ApplicationId: string;
  Configuration: RetrieverConfiguration;
  /**
   * @minLength `1`
   * @maxLength `1000`
   * @pattern `^[a-zA-Z0-9][a-zA-Z0-9_-]*$`
   */
  DisplayName: string;
  /**
   * @minLength `0`
   * @maxLength `1284`
   * @pattern `^arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}$`
   */
  RoleArn?: string;
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Tags?: Tag[];
  Type: RetrieverType;
};
/**
 * Attribute type definition for `AWS::QBusiness::Retriever`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-retriever.html#aws-resource-qbusiness-retriever-return-values}
 */
export type QBusinessRetrieverAttributes = {
  CreatedAt: string;
  /**
   * @minLength `0`
   * @maxLength `1284`
   * @pattern `^arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}$`
   */
  RetrieverArn: string;
  /**
   * @minLength `36`
   * @maxLength `36`
   * @pattern `^[a-zA-Z0-9][a-zA-Z0-9-]{35}$`
   */
  RetrieverId: string;
  Status: RetrieverStatus;
  UpdatedAt: string;
};
/**
 * Type definition for `AWS::QBusiness::Retriever.KendraIndexConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-retriever-kendraindexconfiguration.html}
 */
export type KendraIndexConfiguration = {
  /**
   * @minLength `36`
   * @maxLength `36`
   * @pattern `^[a-zA-Z0-9][a-zA-Z0-9-]{35}$`
   */
  IndexId: string;
};
/**
 * Type definition for `AWS::QBusiness::Retriever.NativeIndexConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-retriever-nativeindexconfiguration.html}
 */
export type NativeIndexConfiguration = {
  /**
   * @minLength `36`
   * @maxLength `36`
   * @pattern `^[a-zA-Z0-9][a-zA-Z0-9-]{35}$`
   */
  IndexId: string;
};
/**
 * Type definition for `AWS::QBusiness::Retriever.RetrieverConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-retriever-retrieverconfiguration.html}
 */
export type RetrieverConfiguration =
  | {
      NativeIndexConfiguration: NativeIndexConfiguration;
    }
  | {
      KendraIndexConfiguration: KendraIndexConfiguration;
    };
/**
 * Type definition for `AWS::QBusiness::Retriever.RetrieverStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-retriever-retrieverstatus.html}
 */
export type RetrieverStatus = "CREATING" | "ACTIVE" | "FAILED";
/**
 * Type definition for `AWS::QBusiness::Retriever.RetrieverType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-retriever-retrievertype.html}
 */
export type RetrieverType = "NATIVE_INDEX" | "KENDRA_INDEX";
/**
 * Type definition for `AWS::QBusiness::Retriever.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-retriever-tag.html}
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
 * Definition of AWS::QBusiness::Retriever Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-retriever.html}
 */
export class QBusinessRetriever extends $Resource<
  "AWS::QBusiness::Retriever",
  QBusinessRetrieverProperties,
  QBusinessRetrieverAttributes
> {
  public static readonly Type = "AWS::QBusiness::Retriever";
  constructor(
    logicalId: string,
    properties: QBusinessRetrieverProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, QBusinessRetriever.Type, properties, options);
  }
}
