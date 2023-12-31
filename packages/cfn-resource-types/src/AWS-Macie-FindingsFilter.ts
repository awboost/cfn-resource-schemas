import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Macie::FindingsFilter`.
 * Macie FindingsFilter resource schema.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-findingsfilter.html}
 */
export type MacieFindingsFilterProperties = {
  /**
   * Findings filter action.
   */
  Action?: FindingFilterAction;
  /**
   * Findings filter description
   */
  Description?: string;
  /**
   * Findings filter criteria.
   */
  FindingCriteria: FindingCriteria;
  /**
   * Findings filter name
   */
  Name: string;
  /**
   * Findings filter position.
   */
  Position?: number;
  /**
   * A collection of tags associated with a resource
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Macie::FindingsFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-findingsfilter.html#aws-resource-macie-findingsfilter-return-values}
 */
export type MacieFindingsFilterAttributes = {
  /**
   * Findings filter ARN.
   */
  Arn: string;
  /**
   * Findings filter ID.
   */
  Id: string;
};
/**
 * Type definition for `AWS::Macie::FindingsFilter.Criterion`.
 * Map of filter criteria.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-macie-findingsfilter-criterion.html}
 */
export type Criterion = Record<string, CriterionAdditionalProperties>;
/**
 * Type definition for `AWS::Macie::FindingsFilter.CriterionAdditionalProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-macie-findingsfilter-criterionadditionalproperties.html}
 */
export type CriterionAdditionalProperties = {
  eq?: string[];
  gt?: number;
  gte?: number;
  lt?: number;
  lte?: number;
  neq?: string[];
};
/**
 * Type definition for `AWS::Macie::FindingsFilter.FindingCriteria`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-macie-findingsfilter-findingcriteria.html}
 */
export type FindingCriteria = {
  /**
   * Map of filter criteria.
   */
  Criterion?: Criterion;
};
/**
 * Type definition for `AWS::Macie::FindingsFilter.FindingFilterAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-macie-findingsfilter-findingfilteraction.html}
 */
export type FindingFilterAction = "ARCHIVE" | "NOOP";
/**
 * Type definition for `AWS::Macie::FindingsFilter.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-macie-findingsfilter-tag.html}
 */
export type Tag = {
  /**
   * The tag's key.
   */
  Key: string;
  /**
   * The tag's value.
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::Macie::FindingsFilter`.
 * Macie FindingsFilter resource schema.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-findingsfilter.html}
 */
export class MacieFindingsFilter extends $Resource<
  "AWS::Macie::FindingsFilter",
  MacieFindingsFilterProperties,
  MacieFindingsFilterAttributes
> {
  public static readonly Type = "AWS::Macie::FindingsFilter";
  constructor(
    logicalId: string,
    properties: MacieFindingsFilterProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, MacieFindingsFilter.Type, properties, options);
  }
}
