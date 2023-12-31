import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: WAFIPSetProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      WAFIPSet.Type,
      properties,
      WAFIPSet.AttributeNames,
      options,
    );
  }
}
