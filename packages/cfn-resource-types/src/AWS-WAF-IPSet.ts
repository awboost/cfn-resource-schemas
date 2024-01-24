import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::WAF::IPSet
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-ipset.html}
 */
export type WAFIPSetProperties = {
  IPSetDescriptors?: IPSetDescriptor[];
  Name: string;
};
/**
 * Attribute type definition for `AWS::WAF::IPSet`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-ipset.html#aws-resource-waf-ipset-return-values}
 */
export type WAFIPSetAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::WAF::IPSet.IPSetDescriptor`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-ipset-ipsetdescriptor.html}
 */
export type IPSetDescriptor = {
  Type: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::WAF::IPSet
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-ipset.html}
 */
export class WAFIPSet extends $Resource<
  "AWS::WAF::IPSet",
  WAFIPSetProperties,
  WAFIPSetAttributes
> {
  public static readonly Type = "AWS::WAF::IPSet";
  constructor(
    logicalId: string,
    properties: WAFIPSetProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, WAFIPSet.Type, properties, options);
  }
}
