import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::WAFRegional::ByteMatchSet
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-bytematchset.html}
 */
export type WAFRegionalByteMatchSetProperties = {
  ByteMatchTuples?: ByteMatchTuple[];
  Name: string;
};
/**
 * Attribute type definition for `AWS::WAFRegional::ByteMatchSet`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-bytematchset.html#aws-resource-wafregional-bytematchset-return-values}
 */
export type WAFRegionalByteMatchSetAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::WAFRegional::ByteMatchSet.ByteMatchTuple`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafregional-bytematchset-bytematchtuple.html}
 */
export type ByteMatchTuple = {
  FieldToMatch: FieldToMatch;
  PositionalConstraint: string;
  TargetString?: string;
  TargetStringBase64?: string;
  TextTransformation: string;
};
/**
 * Type definition for `AWS::WAFRegional::ByteMatchSet.FieldToMatch`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafregional-bytematchset-fieldtomatch.html}
 */
export type FieldToMatch = {
  Data?: string;
  Type: string;
};
/**
 * Resource Type definition for AWS::WAFRegional::ByteMatchSet
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-bytematchset.html}
 */
export class WAFRegionalByteMatchSet extends $Resource<
  "AWS::WAFRegional::ByteMatchSet",
  WAFRegionalByteMatchSetProperties,
  WAFRegionalByteMatchSetAttributes
> {
  public static readonly Type = "AWS::WAFRegional::ByteMatchSet";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: WAFRegionalByteMatchSetProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      WAFRegionalByteMatchSet.Type,
      properties,
      WAFRegionalByteMatchSet.AttributeNames,
      options,
    );
  }
}
