import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Evidently::Feature.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-feature.html}
 */
export type EvidentlyFeatureProperties = {
  /**
   * @minLength `1`
   * @maxLength `127`
   * @pattern `[-a-zA-Z0-9._]*`
   */
  DefaultVariation?: string;
  /**
   * @minLength `0`
   * @maxLength `160`
   */
  Description?: string;
  /**
   * @minLength `0`
   * @maxLength `2500`
   */
  EntityOverrides?: EntityOverride[];
  EvaluationStrategy?: "ALL_RULES" | "DEFAULT_VARIATION";
  /**
   * @minLength `1`
   * @maxLength `127`
   * @pattern `[-a-zA-Z0-9._]*`
   */
  Name: string;
  /**
   * @minLength `0`
   * @maxLength `2048`
   * @pattern `([-a-zA-Z0-9._]*)|(arn:[^:]*:[^:]*:[^:]*:[^:]*:project/[-a-zA-Z0-9._]*)`
   */
  Project: string;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
  /**
   * @minLength `1`
   * @maxLength `5`
   */
  Variations: VariationObject[];
};
/**
 * Attribute type definition for `AWS::Evidently::Feature`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-feature.html#aws-resource-evidently-feature-return-values}
 */
export type EvidentlyFeatureAttributes = {
  /**
   * @minLength `0`
   * @maxLength `2048`
   * @pattern `arn:[^:]*:[^:]*:[^:]*:[^:]*:project/[-a-zA-Z0-9._]/‍*feature/[-a-zA-Z0-9._]*`
   */
  Arn: string;
};
/**
 * Type definition for `AWS::Evidently::Feature.EntityOverride`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-feature-entityoverride.html}
 */
export type EntityOverride = {
  EntityId?: string;
  /**
   * @minLength `1`
   * @maxLength `127`
   * @pattern `[-a-zA-Z0-9._]*`
   */
  Variation?: string;
};
/**
 * Type definition for `AWS::Evidently::Feature.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-feature-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!aws:)[a-zA-Z+-=._:/]+$`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::Evidently::Feature.VariationObject`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-feature-variationobject.html}
 */
export type VariationObject = {
  BooleanValue?: boolean;
  DoubleValue?: number;
  LongValue?: number;
  /**
   * @minLength `0`
   * @maxLength `512`
   */
  StringValue?: string;
  /**
   * @minLength `1`
   * @maxLength `127`
   * @pattern `[-a-zA-Z0-9._]*`
   */
  VariationName?: string;
};
/**
 * Resource Type definition for AWS::Evidently::Feature.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-feature.html}
 */
export class EvidentlyFeature extends $Resource<
  "AWS::Evidently::Feature",
  EvidentlyFeatureProperties,
  EvidentlyFeatureAttributes
> {
  public static readonly Type = "AWS::Evidently::Feature";
  constructor(
    logicalId: string,
    properties: EvidentlyFeatureProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EvidentlyFeature.Type, properties, options);
  }
}
