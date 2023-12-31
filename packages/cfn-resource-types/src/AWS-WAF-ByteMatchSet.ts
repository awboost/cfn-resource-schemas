import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::WAF::ByteMatchSet
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-bytematchset.html}
 */
export type WAFByteMatchSetProperties = {
  ByteMatchTuples?: ByteMatchTuple[];
  Name: string;
};
/**
 * Attribute type definition for `AWS::WAF::ByteMatchSet`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-bytematchset.html#aws-resource-waf-bytematchset-return-values}
 */
export type WAFByteMatchSetAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::WAF::ByteMatchSet.ByteMatchTuple`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-bytematchset-bytematchtuple.html}
 */
export type ByteMatchTuple = {
  FieldToMatch: FieldToMatch;
  PositionalConstraint: string;
  TargetString?: string;
  TargetStringBase64?: string;
  TextTransformation: string;
};
/**
 * Type definition for `AWS::WAF::ByteMatchSet.FieldToMatch`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-bytematchset-fieldtomatch.html}
 */
export type FieldToMatch = {
  Data?: string;
  Type: string;
};
/**
 * Resource Type definition for AWS::WAF::ByteMatchSet
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-bytematchset.html}
 */
export class WAFByteMatchSet extends $Resource<
  "AWS::WAF::ByteMatchSet",
  WAFByteMatchSetProperties,
  WAFByteMatchSetAttributes
> {
  public static readonly Type = "AWS::WAF::ByteMatchSet";
  constructor(
    logicalId: string,
    properties: WAFByteMatchSetProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, WAFByteMatchSet.Type, properties, options);
  }
}
