import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::WAFRegional::IPSet
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-ipset.html}
 */
export type WAFRegionalIPSetProperties = {
  IPSetDescriptors?: IPSetDescriptor[];
  Name: string;
};
/**
 * Attribute type definition for `AWS::WAFRegional::IPSet`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-ipset.html#aws-resource-wafregional-ipset-return-values}
 */
export type WAFRegionalIPSetAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::WAFRegional::IPSet.IPSetDescriptor`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafregional-ipset-ipsetdescriptor.html}
 */
export type IPSetDescriptor = {
  Type: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::WAFRegional::IPSet
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-ipset.html}
 */
export class WAFRegionalIPSet extends $Resource<
  "AWS::WAFRegional::IPSet",
  WAFRegionalIPSetProperties,
  WAFRegionalIPSetAttributes
> {
  public static readonly Type = "AWS::WAFRegional::IPSet";
  constructor(
    logicalId: string,
    properties: WAFRegionalIPSetProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, WAFRegionalIPSet.Type, properties, options);
  }
}
