import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::WAFRegional::SqlInjectionMatchSet
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-sqlinjectionmatchset.html}
 */
export type WAFRegionalSqlInjectionMatchSetProperties = {
  Name: string;
  SqlInjectionMatchTuples?: SqlInjectionMatchTuple[];
};
/**
 * Attribute type definition for `AWS::WAFRegional::SqlInjectionMatchSet`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-sqlinjectionmatchset.html#aws-resource-wafregional-sqlinjectionmatchset-return-values}
 */
export type WAFRegionalSqlInjectionMatchSetAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::WAFRegional::SqlInjectionMatchSet.FieldToMatch`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafregional-sqlinjectionmatchset-fieldtomatch.html}
 */
export type FieldToMatch = {
  Data?: string;
  Type: string;
};
/**
 * Type definition for `AWS::WAFRegional::SqlInjectionMatchSet.SqlInjectionMatchTuple`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafregional-sqlinjectionmatchset-sqlinjectionmatchtuple.html}
 */
export type SqlInjectionMatchTuple = {
  FieldToMatch: FieldToMatch;
  TextTransformation: string;
};
/**
 * Resource Type definition for AWS::WAFRegional::SqlInjectionMatchSet
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-sqlinjectionmatchset.html}
 */
export class WAFRegionalSqlInjectionMatchSet extends $Resource<
  "AWS::WAFRegional::SqlInjectionMatchSet",
  WAFRegionalSqlInjectionMatchSetProperties,
  WAFRegionalSqlInjectionMatchSetAttributes
> {
  public static readonly Type = "AWS::WAFRegional::SqlInjectionMatchSet";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: WAFRegionalSqlInjectionMatchSetProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      WAFRegionalSqlInjectionMatchSet.Type,
      properties,
      WAFRegionalSqlInjectionMatchSet.AttributeNames,
      options,
    );
  }
}
