import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::WAF::XssMatchSet
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-xssmatchset.html}
 */
export type WAFXssMatchSetProperties = {
  Name: string;
  XssMatchTuples: XssMatchTuple[];
};
/**
 * Attribute type definition for `AWS::WAF::XssMatchSet`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-xssmatchset.html#aws-resource-waf-xssmatchset-return-values}
 */
export type WAFXssMatchSetAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::WAF::XssMatchSet.FieldToMatch`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-xssmatchset-fieldtomatch.html}
 */
export type FieldToMatch = {
  Data?: string;
  Type: string;
};
/**
 * Type definition for `AWS::WAF::XssMatchSet.XssMatchTuple`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-xssmatchset-xssmatchtuple.html}
 */
export type XssMatchTuple = {
  FieldToMatch: FieldToMatch;
  TextTransformation: string;
};
/**
 * Resource Type definition for AWS::WAF::XssMatchSet
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-xssmatchset.html}
 */
export class WAFXssMatchSet extends $Resource<
  "AWS::WAF::XssMatchSet",
  WAFXssMatchSetProperties,
  WAFXssMatchSetAttributes
> {
  public static readonly Type = "AWS::WAF::XssMatchSet";
  constructor(
    logicalId: string,
    properties: WAFXssMatchSetProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, WAFXssMatchSet.Type, properties, options);
  }
}
