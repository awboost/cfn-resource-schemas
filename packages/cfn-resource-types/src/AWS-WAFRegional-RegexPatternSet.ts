import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::WAFRegional::RegexPatternSet
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-regexpatternset.html}
 */
export type WAFRegionalRegexPatternSetProperties = {
  Name: string;
  RegexPatternStrings: string[];
};
/**
 * Attribute type definition for `AWS::WAFRegional::RegexPatternSet`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-regexpatternset.html#aws-resource-wafregional-regexpatternset-return-values}
 */
export type WAFRegionalRegexPatternSetAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::WAFRegional::RegexPatternSet
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-regexpatternset.html}
 */
export class WAFRegionalRegexPatternSet extends $Resource<
  "AWS::WAFRegional::RegexPatternSet",
  WAFRegionalRegexPatternSetProperties,
  WAFRegionalRegexPatternSetAttributes
> {
  public static readonly Type = "AWS::WAFRegional::RegexPatternSet";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: WAFRegionalRegexPatternSetProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      WAFRegionalRegexPatternSet.Type,
      properties,
      WAFRegionalRegexPatternSet.AttributeNames,
      options,
    );
  }
}
