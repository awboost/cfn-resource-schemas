import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: WAFRegionalXssMatchSetProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      WAFRegionalXssMatchSet.Type,
      properties,
      WAFRegionalXssMatchSet.AttributeNames,
      options,
    );
  }
}
