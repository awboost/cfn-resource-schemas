import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::CleanRooms::AnalysisTemplate`.
 * Represents a stored analysis within a collaboration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-analysistemplate.html}
 */
export type CleanRoomsAnalysisTemplateProperties = {
  /**
   * The member who can query can provide this placeholder for a literal data value in an analysis template
   * @minLength `0`
   * @maxLength `50`
   */
  AnalysisParameters?: AnalysisParameter[];
  /**
   * @maxLength `255`
   * @pattern `^[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n]*$`
   */
  Description?: string;
  ErrorMessageConfiguration?: ErrorMessageConfiguration;
  Format: "SQL" | "PYSPARK_1_0";
  /**
   * @minLength `36`
   * @maxLength `36`
   * @pattern `[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}`
   */
  MembershipIdentifier: string;
  /**
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9_](([a-zA-Z0-9_ ]+-)*([a-zA-Z0-9_ ]+))?$`
   */
  Name: string;
  Schema?: AnalysisSchema;
  Source: AnalysisSource;
  SourceMetadata?: AnalysisSourceMetadata;
  SyntheticDataParameters?: SyntheticDataParameters;
  /**
   * An arbitrary set of tags (key-value pairs) for this cleanrooms analysis template.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::CleanRooms::AnalysisTemplate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-analysistemplate.html#aws-resource-cleanrooms-analysistemplate-return-values}
 */
export type CleanRoomsAnalysisTemplateAttributes = {
  /**
   * @minLength `36`
   * @maxLength `36`
   * @pattern `[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}`
   */
  AnalysisTemplateIdentifier: string;
  /**
   * @maxLength `200`
   */
  Arn: string;
  /**
   * @maxLength `100`
   */
  CollaborationArn: string;
  /**
   * @minLength `36`
   * @maxLength `36`
   * @pattern `[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}`
   */
  CollaborationIdentifier: string;
  /**
   * @maxLength `100`
   */
  MembershipArn: string;
};
/**
 * Type definition for `AWS::CleanRooms::AnalysisTemplate.AnalysisParameter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-analysistemplate-analysisparameter.html}
 */
export type AnalysisParameter = {
  /**
   * @minLength `0`
   * @maxLength `1000`
   */
  DefaultValue?: string;
  /**
   * @minLength `1`
   * @maxLength `100`
   * @pattern `[0-9a-zA-Z_]+`
   */
  Name: string;
  Type:
    | "SMALLINT"
    | "INTEGER"
    | "BIGINT"
    | "DECIMAL"
    | "REAL"
    | "DOUBLE_PRECISION"
    | "BOOLEAN"
    | "CHAR"
    | "VARCHAR"
    | "DATE"
    | "TIMESTAMP"
    | "TIMESTAMPTZ"
    | "TIME"
    | "TIMETZ"
    | "VARBYTE"
    | "BINARY"
    | "BYTE"
    | "CHARACTER"
    | "DOUBLE"
    | "FLOAT"
    | "INT"
    | "LONG"
    | "NUMERIC"
    | "SHORT"
    | "STRING"
    | "TIMESTAMP_LTZ"
    | "TIMESTAMP_NTZ"
    | "TINYINT";
};
/**
 * Type definition for `AWS::CleanRooms::AnalysisTemplate.AnalysisSchema`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-analysistemplate-analysisschema.html}
 */
export type AnalysisSchema = {
  /**
   * @minLength `0`
   */
  ReferencedTables: string[];
};
/**
 * Type definition for `AWS::CleanRooms::AnalysisTemplate.AnalysisSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-analysistemplate-analysissource.html}
 */
export type AnalysisSource =
  | {
      /**
       * @minLength `0`
       * @maxLength `90000`
       */
      Text: string;
    }
  | {
      Artifacts: AnalysisTemplateArtifacts;
    };
/**
 * Type definition for `AWS::CleanRooms::AnalysisTemplate.AnalysisSourceMetadata`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-analysistemplate-analysissourcemetadata.html}
 */
export type AnalysisSourceMetadata = {
  Artifacts: AnalysisTemplateArtifactMetadata;
};
/**
 * Type definition for `AWS::CleanRooms::AnalysisTemplate.AnalysisTemplateArtifact`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-analysistemplate-analysistemplateartifact.html}
 */
export type AnalysisTemplateArtifact = {
  Location: S3Location;
};
/**
 * Type definition for `AWS::CleanRooms::AnalysisTemplate.AnalysisTemplateArtifactMetadata`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-analysistemplate-analysistemplateartifactmetadata.html}
 */
export type AnalysisTemplateArtifactMetadata = {
  AdditionalArtifactHashes?: Hash[];
  EntryPointHash: Hash;
};
/**
 * Type definition for `AWS::CleanRooms::AnalysisTemplate.AnalysisTemplateArtifacts`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-analysistemplate-analysistemplateartifacts.html}
 */
export type AnalysisTemplateArtifacts = {
  /**
   * @minLength `1`
   * @maxLength `1`
   */
  AdditionalArtifacts?: AnalysisTemplateArtifact[];
  EntryPoint: AnalysisTemplateArtifact;
  /**
   * @minLength `32`
   * @maxLength `512`
   */
  RoleArn: string;
};
/**
 * Type definition for `AWS::CleanRooms::AnalysisTemplate.ColumnClassificationDetails`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-analysistemplate-columnclassificationdetails.html}
 */
export type ColumnClassificationDetails = {
  /**
   * @minLength `5`
   * @maxLength `1000`
   */
  ColumnMapping: SyntheticDataColumnProperties[];
};
/**
 * Type definition for `AWS::CleanRooms::AnalysisTemplate.ErrorMessageConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-analysistemplate-errormessageconfiguration.html}
 */
export type ErrorMessageConfiguration = {
  Type: "DETAILED";
};
/**
 * Type definition for `AWS::CleanRooms::AnalysisTemplate.Hash`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-analysistemplate-hash.html}
 */
export type Hash = {
  Sha256?: string;
};
/**
 * Type definition for `AWS::CleanRooms::AnalysisTemplate.MLSyntheticDataParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-analysistemplate-mlsyntheticdataparameters.html}
 */
export type MLSyntheticDataParameters = {
  ColumnClassification: ColumnClassificationDetails;
  /**
   * @min `0.0001`
   * @max `10`
   */
  Epsilon: number;
  /**
   * @min `0.5`
   * @max `1`
   */
  MaxMembershipInferenceAttackScore: number;
};
/**
 * Type definition for `AWS::CleanRooms::AnalysisTemplate.S3Location`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-analysistemplate-s3location.html}
 */
export type S3Location = {
  /**
   * @minLength `3`
   * @maxLength `63`
   */
  Bucket: string;
  Key: string;
};
/**
 * Type definition for `AWS::CleanRooms::AnalysisTemplate.SyntheticDataColumnProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-analysistemplate-syntheticdatacolumnproperties.html}
 */
export type SyntheticDataColumnProperties = {
  /**
   * @maxLength `128`
   * @pattern `^[a-z0-9_](([a-z0-9_]+-)*([a-z0-9_]+))?$`
   */
  ColumnName: string;
  ColumnType: "CATEGORICAL" | "NUMERICAL";
  IsPredictiveValue: boolean;
};
/**
 * Type definition for `AWS::CleanRooms::AnalysisTemplate.SyntheticDataParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-analysistemplate-syntheticdataparameters.html}
 */
export type SyntheticDataParameters = {
  MlSyntheticDataParameters: MLSyntheticDataParameters;
};
/**
 * Type definition for `AWS::CleanRooms::AnalysisTemplate.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-analysistemplate-tag.html}
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
 * Resource type definition for `AWS::CleanRooms::AnalysisTemplate`.
 * Represents a stored analysis within a collaboration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-analysistemplate.html}
 */
export class CleanRoomsAnalysisTemplate extends $Resource<
  "AWS::CleanRooms::AnalysisTemplate",
  CleanRoomsAnalysisTemplateProperties,
  CleanRoomsAnalysisTemplateAttributes
> {
  public static readonly Type = "AWS::CleanRooms::AnalysisTemplate";
  constructor(
    logicalId: string,
    properties: CleanRoomsAnalysisTemplateProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CleanRoomsAnalysisTemplate.Type, properties, options);
  }
}
