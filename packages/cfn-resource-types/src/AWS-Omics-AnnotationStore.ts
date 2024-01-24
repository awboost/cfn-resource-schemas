import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::Omics::AnnotationStore Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-annotationstore.html}
 */
export type OmicsAnnotationStoreProperties = {
  /**
   * @minLength `0`
   * @maxLength `500`
   */
  Description?: string;
  /**
   * @pattern `^([a-z]){1}([a-z0-9_]){2,254}`
   */
  Name: string;
  Reference?: ReferenceItem;
  SseConfig?: SseConfig;
  StoreFormat: StoreFormat;
  StoreOptions?: StoreOptions;
  Tags?: TagMap;
};
/**
 * Attribute type definition for `AWS::Omics::AnnotationStore`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-annotationstore.html#aws-resource-omics-annotationstore-return-values}
 */
export type OmicsAnnotationStoreAttributes = {
  CreationTime: string;
  /**
   * @pattern `^[a-f0-9]{12}$`
   */
  Id: string;
  Status: StoreStatus;
  /**
   * @minLength `0`
   * @maxLength `1000`
   */
  StatusMessage: string;
  /**
     * @minLength `20`
     * @maxLength `2048`
     * @pattern `^arn:([^:
    ]*):([^:
    ]*):([^:
    ]*):([0-9]{12}):([^:
    ]*)$`
     */
  StoreArn: string;
  StoreSizeBytes: number;
  UpdateTime: string;
};
/**
 * Type definition for `AWS::Omics::AnnotationStore.AnnotationType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-annotationstore-annotationtype.html}
 */
export type AnnotationType =
  | "GENERIC"
  | "CHR_POS"
  | "CHR_POS_REF_ALT"
  | "CHR_START_END_ONE_BASE"
  | "CHR_START_END_REF_ALT_ONE_BASE"
  | "CHR_START_END_ZERO_BASE"
  | "CHR_START_END_REF_ALT_ZERO_BASE";
/**
 * Type definition for `AWS::Omics::AnnotationStore.EncryptionType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-annotationstore-encryptiontype.html}
 */
export type EncryptionType = "KMS";
/**
 * Type definition for `AWS::Omics::AnnotationStore.FormatToHeader`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-annotationstore-formattoheader.html}
 */
export type FormatToHeader = Record<string, string>;
/**
 * Type definition for `AWS::Omics::AnnotationStore.ReferenceItem`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-annotationstore-referenceitem.html}
 */
export type ReferenceItem = {
  /**
   * @minLength `1`
   * @maxLength `127`
   * @pattern `^arn:.+$`
   */
  ReferenceArn: string;
};
/**
 * Type definition for `AWS::Omics::AnnotationStore.SchemaItem`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-annotationstore-schemaitem.html}
 */
export type SchemaItem = Record<string, SchemaValueType>;
/**
 * Type definition for `AWS::Omics::AnnotationStore.SchemaValueType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-annotationstore-schemavaluetype.html}
 */
export type SchemaValueType =
  | "LONG"
  | "INT"
  | "STRING"
  | "FLOAT"
  | "DOUBLE"
  | "BOOLEAN";
/**
 * Type definition for `AWS::Omics::AnnotationStore.SseConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-annotationstore-sseconfig.html}
 */
export type SseConfig = {
  /**
     * @minLength `20`
     * @maxLength `2048`
     * @pattern `arn:([^:
    ]*):([^:
    ]*):([^:
    ]*):([0-9]{12}):([^:
    ]*)`
     */
  KeyArn?: string;
  Type: EncryptionType;
};
/**
 * Type definition for `AWS::Omics::AnnotationStore.StoreFormat`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-annotationstore-storeformat.html}
 */
export type StoreFormat = "GFF" | "TSV" | "VCF";
/**
 * Type definition for `AWS::Omics::AnnotationStore.StoreOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-annotationstore-storeoptions.html}
 */
export type StoreOptions = {
  TsvStoreOptions: TsvStoreOptions;
};
/**
 * Type definition for `AWS::Omics::AnnotationStore.StoreStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-annotationstore-storestatus.html}
 */
export type StoreStatus =
  | "CREATING"
  | "UPDATING"
  | "DELETING"
  | "ACTIVE"
  | "FAILED";
/**
 * Type definition for `AWS::Omics::AnnotationStore.TagMap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-annotationstore-tagmap.html}
 */
export type TagMap = Record<string, string>;
/**
 * Type definition for `AWS::Omics::AnnotationStore.TsvStoreOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-annotationstore-tsvstoreoptions.html}
 */
export type TsvStoreOptions = {
  AnnotationType?: AnnotationType;
  FormatToHeader?: FormatToHeader;
  /**
   * @minLength `1`
   * @maxLength `5000`
   */
  Schema?: SchemaItem[];
};
/**
 * Definition of AWS::Omics::AnnotationStore Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-annotationstore.html}
 */
export class OmicsAnnotationStore extends $Resource<
  "AWS::Omics::AnnotationStore",
  OmicsAnnotationStoreProperties,
  OmicsAnnotationStoreAttributes
> {
  public static readonly Type = "AWS::Omics::AnnotationStore";
  constructor(
    logicalId: string,
    properties: OmicsAnnotationStoreProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, OmicsAnnotationStore.Type, properties, options);
  }
}
