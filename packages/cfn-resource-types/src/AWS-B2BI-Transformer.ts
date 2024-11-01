import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::B2BI::Transformer Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html}
 */
export type B2BITransformerProperties = {
  EdiType?: EdiType;
  FileFormat?: FileFormat;
  InputConversion?: InputConversion;
  Mapping?: Mapping;
  /**
   * This shape is deprecated: This is a legacy trait. Please use input-conversion or output-conversion.
   * @minLength `0`
   * @maxLength `350000`
   */
  MappingTemplate?: string;
  /**
   * @minLength `1`
   * @maxLength `254`
   * @pattern `^[a-zA-Z0-9_-]{1,512}$`
   */
  Name: string;
  OutputConversion?: OutputConversion;
  /**
   * This shape is deprecated: This is a legacy trait. Please use input-conversion or output-conversion.
   * @minLength `0`
   * @maxLength `1024`
   */
  SampleDocument?: string;
  SampleDocuments?: SampleDocuments;
  Status: TransformerStatus;
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::B2BI::Transformer`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html#aws-resource-b2bi-transformer-return-values}
 */
export type B2BITransformerAttributes = {
  CreatedAt: string;
  ModifiedAt: string;
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  TransformerArn: string;
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[a-zA-Z0-9_-]+$`
   */
  TransformerId: string;
};
/**
 * Type definition for `AWS::B2BI::Transformer.EdiType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-transformer-editype.html}
 */
export type EdiType = {
  X12Details: X12Details;
};
/**
 * Type definition for `AWS::B2BI::Transformer.FileFormat`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-transformer-fileformat.html}
 */
export type FileFormat = "XML" | "JSON" | "NOT_USED";
/**
 * Type definition for `AWS::B2BI::Transformer.FormatOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-transformer-formatoptions.html}
 */
export type FormatOptions = {
  X12: X12Details;
};
/**
 * Type definition for `AWS::B2BI::Transformer.FromFormat`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-transformer-fromformat.html}
 */
export type FromFormat = "X12";
/**
 * Type definition for `AWS::B2BI::Transformer.InputConversion`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-transformer-inputconversion.html}
 */
export type InputConversion = {
  FormatOptions?: FormatOptions;
  FromFormat: FromFormat;
};
/**
 * Type definition for `AWS::B2BI::Transformer.Mapping`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-transformer-mapping.html}
 */
export type Mapping = {
  /**
   * @minLength `0`
   * @maxLength `350000`
   */
  Template?: string;
  TemplateLanguage: MappingTemplateLanguage;
};
/**
 * Type definition for `AWS::B2BI::Transformer.MappingTemplateLanguage`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-transformer-mappingtemplatelanguage.html}
 */
export type MappingTemplateLanguage = "XSLT" | "JSONATA";
/**
 * Type definition for `AWS::B2BI::Transformer.OutputConversion`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-transformer-outputconversion.html}
 */
export type OutputConversion = {
  FormatOptions?: FormatOptions;
  ToFormat: ToFormat;
};
/**
 * Type definition for `AWS::B2BI::Transformer.SampleDocumentKeys`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-transformer-sampledocumentkeys.html}
 */
export type SampleDocumentKeys = {
  /**
   * @minLength `0`
   * @maxLength `1024`
   */
  Input?: string;
  /**
   * @minLength `0`
   * @maxLength `1024`
   */
  Output?: string;
};
/**
 * Type definition for `AWS::B2BI::Transformer.SampleDocuments`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-transformer-sampledocuments.html}
 */
export type SampleDocuments = {
  /**
   * @minLength `3`
   * @maxLength `63`
   */
  BucketName: string;
  Keys: SampleDocumentKeys[];
};
/**
 * Type definition for `AWS::B2BI::Transformer.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-transformer-tag.html}
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
 * Type definition for `AWS::B2BI::Transformer.ToFormat`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-transformer-toformat.html}
 */
export type ToFormat = "X12";
/**
 * Type definition for `AWS::B2BI::Transformer.TransformerStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-transformer-transformerstatus.html}
 */
export type TransformerStatus = "active" | "inactive";
/**
 * Type definition for `AWS::B2BI::Transformer.X12Details`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-transformer-x12details.html}
 */
export type X12Details = {
  TransactionSet?: X12TransactionSet;
  Version?: X12Version;
};
/**
 * Type definition for `AWS::B2BI::Transformer.X12TransactionSet`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-transformer-x12transactionset.html}
 */
export type X12TransactionSet =
  | "X12_110"
  | "X12_180"
  | "X12_204"
  | "X12_210"
  | "X12_211"
  | "X12_214"
  | "X12_215"
  | "X12_259"
  | "X12_260"
  | "X12_266"
  | "X12_269"
  | "X12_270"
  | "X12_271"
  | "X12_274"
  | "X12_275"
  | "X12_276"
  | "X12_277"
  | "X12_278"
  | "X12_310"
  | "X12_315"
  | "X12_322"
  | "X12_404"
  | "X12_410"
  | "X12_417"
  | "X12_421"
  | "X12_426"
  | "X12_810"
  | "X12_820"
  | "X12_824"
  | "X12_830"
  | "X12_832"
  | "X12_834"
  | "X12_835"
  | "X12_837"
  | "X12_844"
  | "X12_846"
  | "X12_849"
  | "X12_850"
  | "X12_852"
  | "X12_855"
  | "X12_856"
  | "X12_860"
  | "X12_861"
  | "X12_864"
  | "X12_865"
  | "X12_869"
  | "X12_870"
  | "X12_940"
  | "X12_945"
  | "X12_990"
  | "X12_997"
  | "X12_999"
  | "X12_270_X279"
  | "X12_271_X279"
  | "X12_275_X210"
  | "X12_275_X211"
  | "X12_276_X212"
  | "X12_277_X212"
  | "X12_277_X214"
  | "X12_277_X364"
  | "X12_278_X217"
  | "X12_820_X218"
  | "X12_820_X306"
  | "X12_824_X186"
  | "X12_834_X220"
  | "X12_834_X307"
  | "X12_834_X318"
  | "X12_835_X221"
  | "X12_837_X222"
  | "X12_837_X223"
  | "X12_837_X224"
  | "X12_837_X291"
  | "X12_837_X292"
  | "X12_837_X298"
  | "X12_999_X231";
/**
 * Type definition for `AWS::B2BI::Transformer.X12Version`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-transformer-x12version.html}
 */
export type X12Version =
  | "VERSION_4010"
  | "VERSION_4030"
  | "VERSION_5010"
  | "VERSION_5010_HIPAA";
/**
 * Definition of AWS::B2BI::Transformer Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html}
 */
export class B2BITransformer extends $Resource<
  "AWS::B2BI::Transformer",
  B2BITransformerProperties,
  B2BITransformerAttributes
> {
  public static readonly Type = "AWS::B2BI::Transformer";
  constructor(
    logicalId: string,
    properties: B2BITransformerProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, B2BITransformer.Type, properties, options);
  }
}
