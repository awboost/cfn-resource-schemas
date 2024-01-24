import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::WAF::SizeConstraintSet
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-sizeconstraintset.html}
 */
export type WAFSizeConstraintSetProperties = {
  Name: string;
  SizeConstraints: SizeConstraint[];
};
/**
 * Attribute type definition for `AWS::WAF::SizeConstraintSet`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-sizeconstraintset.html#aws-resource-waf-sizeconstraintset-return-values}
 */
export type WAFSizeConstraintSetAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::WAF::SizeConstraintSet.FieldToMatch`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-sizeconstraintset-fieldtomatch.html}
 */
export type FieldToMatch = {
  Data?: string;
  Type: string;
};
/**
 * Type definition for `AWS::WAF::SizeConstraintSet.SizeConstraint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-sizeconstraintset-sizeconstraint.html}
 */
export type SizeConstraint = {
  ComparisonOperator: string;
  FieldToMatch: FieldToMatch;
  Size: number;
  TextTransformation: string;
};
/**
 * Resource Type definition for AWS::WAF::SizeConstraintSet
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-sizeconstraintset.html}
 */
export class WAFSizeConstraintSet extends $Resource<
  "AWS::WAF::SizeConstraintSet",
  WAFSizeConstraintSetProperties,
  WAFSizeConstraintSetAttributes
> {
  public static readonly Type = "AWS::WAF::SizeConstraintSet";
  constructor(
    logicalId: string,
    properties: WAFSizeConstraintSetProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, WAFSizeConstraintSet.Type, properties, options);
  }
}
