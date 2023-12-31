import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Glue::Classifier
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-classifier.html}
 */
export type GlueClassifierProperties = {
  CsvClassifier?: CsvClassifier;
  GrokClassifier?: GrokClassifier;
  JsonClassifier?: JsonClassifier;
  XMLClassifier?: XMLClassifier;
};
/**
 * Attribute type definition for `AWS::Glue::Classifier`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-classifier.html#aws-resource-glue-classifier-return-values}
 */
export type GlueClassifierAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::Glue::Classifier.CsvClassifier`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-classifier-csvclassifier.html}
 */
export type CsvClassifier = {
  AllowSingleColumn?: boolean;
  ContainsCustomDatatype?: string[];
  ContainsHeader?: string;
  CustomDatatypeConfigured?: boolean;
  Delimiter?: string;
  DisableValueTrimming?: boolean;
  Header?: string[];
  Name?: string;
  QuoteSymbol?: string;
};
/**
 * Type definition for `AWS::Glue::Classifier.GrokClassifier`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-classifier-grokclassifier.html}
 */
export type GrokClassifier = {
  Classification: string;
  CustomPatterns?: string;
  GrokPattern: string;
  Name?: string;
};
/**
 * Type definition for `AWS::Glue::Classifier.JsonClassifier`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-classifier-jsonclassifier.html}
 */
export type JsonClassifier = {
  JsonPath: string;
  Name?: string;
};
/**
 * Type definition for `AWS::Glue::Classifier.XMLClassifier`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-classifier-xmlclassifier.html}
 */
export type XMLClassifier = {
  Classification: string;
  Name?: string;
  RowTag: string;
};
/**
 * Resource Type definition for AWS::Glue::Classifier
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-classifier.html}
 */
export class GlueClassifier extends $Resource<
  "AWS::Glue::Classifier",
  GlueClassifierProperties,
  GlueClassifierAttributes
> {
  public static readonly Type = "AWS::Glue::Classifier";
  constructor(
    logicalId: string,
    properties: GlueClassifierProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, GlueClassifier.Type, properties, options);
  }
}
