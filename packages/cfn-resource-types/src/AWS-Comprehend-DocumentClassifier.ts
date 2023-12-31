import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for `AWS::Comprehend::DocumentClassifier`.
 * Document Classifier enables training document classifier models.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html}
 */
export type ComprehendDocumentClassifierProperties = {
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `arn:aws(-[^:]+)?:iam::[0-9]{12}:role/.+`
   */
  DataAccessRoleArn: string;
  /**
   * @minLength `1`
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9](-*[a-zA-Z0-9])*$`
   */
  DocumentClassifierName: string;
  InputDataConfig: DocumentClassifierInputDataConfig;
  LanguageCode: "en" | "es" | "fr" | "it" | "de" | "pt";
  Mode?: "MULTI_CLASS" | "MULTI_LABEL";
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  ModelKmsKeyId?: string;
  /**
   * @minLength `1`
   * @maxLength `20000`
   * @pattern `[\u0009\u000A\u000D\u0020-\u00FF]+`
   */
  ModelPolicy?: string;
  OutputDataConfig?: DocumentClassifierOutputDataConfig;
  Tags?: Tag[];
  /**
   * @minLength `1`
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9](-*[a-zA-Z0-9])*$`
   */
  VersionName?: string;
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  VolumeKmsKeyId?: string;
  VpcConfig?: VpcConfig;
};
/**
 * Attribute type definition for `AWS::Comprehend::DocumentClassifier`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html#aws-resource-comprehend-documentclassifier-return-values}
 */
export type ComprehendDocumentClassifierAttributes = {
  /**
   * @minLength `1`
   * @maxLength `256`
   * @pattern `arn:aws(-[^:]+)?:comprehend:[a-zA-Z0-9-]*:[0-9]{12}:document-classifier/[a-zA-Z0-9](-*[a-zA-Z0-9])*(/version/[a-zA-Z0-9](-*[a-zA-Z0-9])*)?`
   */
  Arn: string;
};
/**
 * Type definition for `AWS::Comprehend::DocumentClassifier.AugmentedManifestsListItem`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-documentclassifier-augmentedmanifestslistitem.html}
 */
export type AugmentedManifestsListItem = {
  /**
   * @minLength `1`
   * @maxLength `63`
   */
  AttributeNames: string[];
  /**
   * @maxLength `1024`
   * @pattern `s3://[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9](/.*)?`
   */
  S3Uri: string;
  Split?: "TRAIN" | "TEST";
};
/**
 * Type definition for `AWS::Comprehend::DocumentClassifier.DocumentClassifierDocuments`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-documentclassifier-documentclassifierdocuments.html}
 */
export type DocumentClassifierDocuments = {
  /**
   * @maxLength `1024`
   * @pattern `s3://[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9](/.*)?`
   */
  S3Uri: string;
  /**
   * @maxLength `1024`
   * @pattern `s3://[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9](/.*)?`
   */
  TestS3Uri?: string;
};
/**
 * Type definition for `AWS::Comprehend::DocumentClassifier.DocumentClassifierInputDataConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-documentclassifier-documentclassifierinputdataconfig.html}
 */
export type DocumentClassifierInputDataConfig = {
  AugmentedManifests?: AugmentedManifestsListItem[];
  DataFormat?: "COMPREHEND_CSV" | "AUGMENTED_MANIFEST";
  DocumentReaderConfig?: DocumentReaderConfig;
  DocumentType?: "PLAIN_TEXT_DOCUMENT" | "SEMI_STRUCTURED_DOCUMENT";
  Documents?: DocumentClassifierDocuments;
  /**
   * @minLength `1`
   * @maxLength `1`
   * @pattern `^[ ~!@#$%^*\-_+=|\\:;\t>?/]$`
   */
  LabelDelimiter?: string;
  /**
   * @maxLength `1024`
   * @pattern `s3://[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9](/.*)?`
   */
  S3Uri?: string;
  /**
   * @maxLength `1024`
   * @pattern `s3://[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9](/.*)?`
   */
  TestS3Uri?: string;
};
/**
 * Type definition for `AWS::Comprehend::DocumentClassifier.DocumentClassifierOutputDataConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-documentclassifier-documentclassifieroutputdataconfig.html}
 */
export type DocumentClassifierOutputDataConfig = {
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  KmsKeyId?: string;
  /**
   * @maxLength `1024`
   * @pattern `s3://[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9](/.*)?`
   */
  S3Uri?: string;
};
/**
 * Type definition for `AWS::Comprehend::DocumentClassifier.DocumentReaderConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-documentclassifier-documentreaderconfig.html}
 */
export type DocumentReaderConfig = {
  DocumentReadAction:
    | "TEXTRACT_DETECT_DOCUMENT_TEXT"
    | "TEXTRACT_ANALYZE_DOCUMENT";
  DocumentReadMode?: "SERVICE_DEFAULT" | "FORCE_DOCUMENT_READ_ACTION";
  /**
   * @minLength `1`
   * @maxLength `2`
   */
  FeatureTypes?: ("TABLES" | "FORMS")[];
};
/**
 * Type definition for `AWS::Comprehend::DocumentClassifier.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-documentclassifier-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::Comprehend::DocumentClassifier.VpcConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-documentclassifier-vpcconfig.html}
 */
export type VpcConfig = {
  /**
   * @minLength `1`
   * @maxLength `5`
   */
  SecurityGroupIds: string[];
  /**
   * @minLength `1`
   * @maxLength `16`
   */
  Subnets: string[];
};
/**
 * Resource type definition for `AWS::Comprehend::DocumentClassifier`.
 * Document Classifier enables training document classifier models.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html}
 */
export class ComprehendDocumentClassifier extends $Resource<
  "AWS::Comprehend::DocumentClassifier",
  ComprehendDocumentClassifierProperties,
  ComprehendDocumentClassifierAttributes
> {
  public static readonly Type = "AWS::Comprehend::DocumentClassifier";
  public static readonly AttributeNames = ["Arn" as const];
  constructor(
    logicalId: string,
    properties: ComprehendDocumentClassifierProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ComprehendDocumentClassifier.Type,
      properties,
      ComprehendDocumentClassifier.AttributeNames,
      options,
    );
  }
}
