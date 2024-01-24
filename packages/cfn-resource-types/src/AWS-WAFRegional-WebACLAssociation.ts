import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::WAFRegional::WebACLAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-webaclassociation.html}
 */
export type WAFRegionalWebACLAssociationProperties = {
  ResourceArn: string;
  WebACLId: string;
};
/**
 * Attribute type definition for `AWS::WAFRegional::WebACLAssociation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-webaclassociation.html#aws-resource-wafregional-webaclassociation-return-values}
 */
export type WAFRegionalWebACLAssociationAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::WAFRegional::WebACLAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-webaclassociation.html}
 */
export class WAFRegionalWebACLAssociation extends $Resource<
  "AWS::WAFRegional::WebACLAssociation",
  WAFRegionalWebACLAssociationProperties,
  WAFRegionalWebACLAssociationAttributes
> {
  public static readonly Type = "AWS::WAFRegional::WebACLAssociation";
  constructor(
    logicalId: string,
    properties: WAFRegionalWebACLAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, WAFRegionalWebACLAssociation.Type, properties, options);
  }
}
