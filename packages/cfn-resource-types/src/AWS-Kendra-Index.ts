import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Kendra::Index`.
 * A Kendra index
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-index.html}
 */
export type KendraIndexProperties = {
  /**
   * Capacity units
   */
  CapacityUnits?: CapacityUnitsConfiguration;
  /**
   * A description for the index
   * @maxLength `1000`
   */
  Description?: string;
  /**
   * Document metadata configurations
   * @maxLength `500`
   */
  DocumentMetadataConfigurations?: DocumentMetadataConfiguration[];
  /**
   * Edition of index
   */
  Edition: Edition;
  /**
   * Name of index
   * @minLength `1`
   * @maxLength `1000`
   */
  Name: string;
  /**
   * Role Arn
   * @minLength `1`
   * @maxLength `1284`
   * @pattern `arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}`
   */
  RoleArn: string;
  /**
   * Server side encryption configuration
   */
  ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
  /**
   * Tags for labeling the index
   * @maxLength `200`
   */
  Tags?: Tag[];
  UserContextPolicy?: UserContextPolicy;
  /**
   * @maxLength `1`
   */
  UserTokenConfigurations?: UserTokenConfiguration[];
};
/**
 * Attribute type definition for `AWS::Kendra::Index`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-index.html#aws-resource-kendra-index-return-values}
 */
export type KendraIndexAttributes = {
  /**
   * @maxLength `1000`
   */
  Arn: string;
  /**
   * Unique ID of index
   * @minLength `36`
   * @maxLength `36`
   */
  Id: string;
};
/**
 * Type definition for `AWS::Kendra::Index.CapacityUnitsConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-capacityunitsconfiguration.html}
 */
export type CapacityUnitsConfiguration = {
  /**
   * @min `0`
   */
  QueryCapacityUnits: number;
  /**
   * @min `0`
   */
  StorageCapacityUnits: number;
};
/**
 * Type definition for `AWS::Kendra::Index.DocumentAttributeValueType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-documentattributevaluetype.html}
 */
export type DocumentAttributeValueType =
  | "STRING_VALUE"
  | "STRING_LIST_VALUE"
  | "LONG_VALUE"
  | "DATE_VALUE";
/**
 * Type definition for `AWS::Kendra::Index.DocumentMetadataConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-documentmetadataconfiguration.html}
 */
export type DocumentMetadataConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `30`
   */
  Name: string;
  Relevance?: Relevance;
  Search?: Search;
  Type: DocumentAttributeValueType;
};
/**
 * Type definition for `AWS::Kendra::Index.Edition`.
 * Edition of index
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-edition.html}
 */
export type Edition =
  | "DEVELOPER_EDITION"
  | "ENTERPRISE_EDITION"
  | "GEN_AI_ENTERPRISE_EDITION";
/**
 * Type definition for `AWS::Kendra::Index.JsonTokenTypeConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-jsontokentypeconfiguration.html}
 */
export type JsonTokenTypeConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  GroupAttributeField: string;
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  UserNameAttributeField: string;
};
/**
 * Type definition for `AWS::Kendra::Index.JwtTokenTypeConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-jwttokentypeconfiguration.html}
 */
export type JwtTokenTypeConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  ClaimRegex?: string;
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  GroupAttributeField?: string;
  /**
   * @minLength `1`
   * @maxLength `65`
   */
  Issuer?: string;
  KeyLocation: KeyLocation;
  /**
   * Role Arn
   * @minLength `1`
   * @maxLength `1284`
   * @pattern `arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}`
   */
  SecretManagerArn?: string;
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^(https?|ftp|file):\/\/([^\s]*)`
   */
  URL?: string;
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  UserNameAttributeField?: string;
};
/**
 * Type definition for `AWS::Kendra::Index.KeyLocation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-keylocation.html}
 */
export type KeyLocation = "URL" | "SECRET_MANAGER";
/**
 * Type definition for `AWS::Kendra::Index.Order`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-order.html}
 */
export type Order = "ASCENDING" | "DESCENDING";
/**
 * Type definition for `AWS::Kendra::Index.Relevance`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-relevance.html}
 */
export type Relevance = {
  /**
   * @minLength `1`
   * @maxLength `10`
   * @pattern `[0-9]+[s]`
   */
  Duration?: string;
  Freshness?: boolean;
  /**
   * @min `1`
   * @max `10`
   */
  Importance?: number;
  RankOrder?: Order;
  ValueImportanceItems?: ValueImportanceItem[];
};
/**
 * Type definition for `AWS::Kendra::Index.Search`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-search.html}
 */
export type Search = {
  Displayable?: boolean;
  Facetable?: boolean;
  Searchable?: boolean;
  Sortable?: boolean;
};
/**
 * Type definition for `AWS::Kendra::Index.ServerSideEncryptionConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-serversideencryptionconfiguration.html}
 */
export type ServerSideEncryptionConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  KmsKeyId?: string;
};
/**
 * Type definition for `AWS::Kendra::Index.Tag`.
 * A label for tagging Kendra resources
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-tag.html}
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
 * Type definition for `AWS::Kendra::Index.UserContextPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-usercontextpolicy.html}
 */
export type UserContextPolicy = "ATTRIBUTE_FILTER" | "USER_TOKEN";
/**
 * Type definition for `AWS::Kendra::Index.UserTokenConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-usertokenconfiguration.html}
 */
export type UserTokenConfiguration = {
  JsonTokenTypeConfiguration?: JsonTokenTypeConfiguration;
  JwtTokenTypeConfiguration?: JwtTokenTypeConfiguration;
};
/**
 * Type definition for `AWS::Kendra::Index.ValueImportanceItem`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-valueimportanceitem.html}
 */
export type ValueImportanceItem = {
  /**
   * @minLength `1`
   * @maxLength `50`
   */
  Key?: string;
  /**
   * @min `1`
   * @max `10`
   */
  Value?: number;
};
/**
 * Resource type definition for `AWS::Kendra::Index`.
 * A Kendra index
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-index.html}
 */
export class KendraIndex extends $Resource<
  "AWS::Kendra::Index",
  KendraIndexProperties,
  KendraIndexAttributes
> {
  public static readonly Type = "AWS::Kendra::Index";
  constructor(
    logicalId: string,
    properties: KendraIndexProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, KendraIndex.Type, properties, options);
  }
}
