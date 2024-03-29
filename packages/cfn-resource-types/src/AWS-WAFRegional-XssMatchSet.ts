import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::WAFRegional::XssMatchSet
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-xssmatchset.html}
 */
export type WAFRegionalXssMatchSetProperties = {
  Name: string;
  XssMatchTuples?: XssMatchTuple[];
};
/**
 * Attribute type definition for `AWS::WAFRegional::XssMatchSet`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-xssmatchset.html#aws-resource-wafregional-xssmatchset-return-values}
 */
export type WAFRegionalXssMatchSetAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::WAFRegional::XssMatchSet.FieldToMatch`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafregional-xssmatchset-fieldtomatch.html}
 */
export type FieldToMatch = {
  Data?: string;
  Type: string;
};
/**
 * Type definition for `AWS::WAFRegional::XssMatchSet.XssMatchTuple`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafregional-xssmatchset-xssmatchtuple.html}
 */
export type XssMatchTuple = {
  FieldToMatch: FieldToMatch;
  TextTransformation: string;
};
/**
 * Resource Type definition for AWS::WAFRegional::XssMatchSet
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-xssmatchset.html}
 */
export class WAFRegionalXssMatchSet extends $Resource<
  "AWS::WAFRegional::XssMatchSet",
  WAFRegionalXssMatchSetProperties,
  WAFRegionalXssMatchSetAttributes
> {
  public static readonly Type = "AWS::WAFRegional::XssMatchSet";
  constructor(
    logicalId: string,
    properties: WAFRegionalXssMatchSetProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, WAFRegionalXssMatchSet.Type, properties, options);
  }
}
