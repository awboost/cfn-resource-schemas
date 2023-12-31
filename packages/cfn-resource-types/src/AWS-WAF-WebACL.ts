import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::WAF::WebACL
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-webacl.html}
 */
export type WAFWebACLProperties = {
  DefaultAction: WafAction;
  MetricName: string;
  Name: string;
  Rules?: ActivatedRule[];
};
/**
 * Attribute type definition for `AWS::WAF::WebACL`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-webacl.html#aws-resource-waf-webacl-return-values}
 */
export type WAFWebACLAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::WAF::WebACL.ActivatedRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-webacl-activatedrule.html}
 */
export type ActivatedRule = {
  Action?: WafAction;
  Priority: number;
  RuleId: string;
};
/**
 * Type definition for `AWS::WAF::WebACL.WafAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-webacl-wafaction.html}
 */
export type WafAction = {
  Type: string;
};
/**
 * Resource Type definition for AWS::WAF::WebACL
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-webacl.html}
 */
export class WAFWebACL extends $Resource<
  "AWS::WAF::WebACL",
  WAFWebACLProperties,
  WAFWebACLAttributes
> {
  public static readonly Type = "AWS::WAF::WebACL";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: WAFWebACLProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      WAFWebACL.Type,
      properties,
      WAFWebACL.AttributeNames,
      options,
    );
  }
}
