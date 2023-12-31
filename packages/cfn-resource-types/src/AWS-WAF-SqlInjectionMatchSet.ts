import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::WAF::SqlInjectionMatchSet
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-sqlinjectionmatchset.html}
 */
export type WAFSqlInjectionMatchSetProperties = {
  Name: string;
  SqlInjectionMatchTuples?: SqlInjectionMatchTuple[];
};
/**
 * Attribute type definition for `AWS::WAF::SqlInjectionMatchSet`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-sqlinjectionmatchset.html#aws-resource-waf-sqlinjectionmatchset-return-values}
 */
export type WAFSqlInjectionMatchSetAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::WAF::SqlInjectionMatchSet.FieldToMatch`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-sqlinjectionmatchset-fieldtomatch.html}
 */
export type FieldToMatch = {
  Data?: string;
  Type: string;
};
/**
 * Type definition for `AWS::WAF::SqlInjectionMatchSet.SqlInjectionMatchTuple`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-sqlinjectionmatchset-sqlinjectionmatchtuple.html}
 */
export type SqlInjectionMatchTuple = {
  FieldToMatch: FieldToMatch;
  TextTransformation: string;
};
/**
 * Resource Type definition for AWS::WAF::SqlInjectionMatchSet
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-sqlinjectionmatchset.html}
 */
export class WAFSqlInjectionMatchSet extends $Resource<
  "AWS::WAF::SqlInjectionMatchSet",
  WAFSqlInjectionMatchSetProperties,
  WAFSqlInjectionMatchSetAttributes
> {
  public static readonly Type = "AWS::WAF::SqlInjectionMatchSet";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: WAFSqlInjectionMatchSetProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      WAFSqlInjectionMatchSet.Type,
      properties,
      WAFSqlInjectionMatchSet.AttributeNames,
      options,
    );
  }
}
