import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: WAFRegionalWebACLAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      WAFRegionalWebACLAssociation.Type,
      properties,
      WAFRegionalWebACLAssociation.AttributeNames,
      options,
    );
  }
}
