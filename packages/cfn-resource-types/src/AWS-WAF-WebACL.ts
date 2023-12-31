import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
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
  constructor(
    logicalId: string,
    properties: WAFWebACLProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, WAFWebACL.Type, properties, options);
  }
}
