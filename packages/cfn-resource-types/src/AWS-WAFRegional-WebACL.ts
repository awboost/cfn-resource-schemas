import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::WAFRegional::WebACL
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-webacl.html}
 */
export type WAFRegionalWebACLProperties = {
  DefaultAction: Action;
  MetricName: string;
  Name: string;
  Rules?: Rule[];
};
/**
 * Attribute type definition for `AWS::WAFRegional::WebACL`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-webacl.html#aws-resource-wafregional-webacl-return-values}
 */
export type WAFRegionalWebACLAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::WAFRegional::WebACL.Action`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafregional-webacl-action.html}
 */
export type Action = {
  Type: string;
};
/**
 * Type definition for `AWS::WAFRegional::WebACL.Rule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafregional-webacl-rule.html}
 */
export type Rule = {
  Action: Action;
  Priority: number;
  RuleId: string;
};
/**
 * Resource Type definition for AWS::WAFRegional::WebACL
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-webacl.html}
 */
export class WAFRegionalWebACL extends $Resource<
  "AWS::WAFRegional::WebACL",
  WAFRegionalWebACLProperties,
  WAFRegionalWebACLAttributes
> {
  public static readonly Type = "AWS::WAFRegional::WebACL";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: WAFRegionalWebACLProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      WAFRegionalWebACL.Type,
      properties,
      WAFRegionalWebACL.AttributeNames,
      options,
    );
  }
}
