import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for `AWS::WAFv2::WebACLAssociation`.
 * Associates WebACL to Application Load Balancer, CloudFront or API Gateway.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webaclassociation.html}
 */
export type WAFv2WebACLAssociationProperties = {
  /**
   * @minLength `20`
   * @maxLength `2048`
   */
  ResourceArn: string;
  /**
   * @minLength `20`
   * @maxLength `2048`
   */
  WebACLArn: string;
};
/**
 * Resource type definition for `AWS::WAFv2::WebACLAssociation`.
 * Associates WebACL to Application Load Balancer, CloudFront or API Gateway.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webaclassociation.html}
 */
export class WAFv2WebACLAssociation extends $Resource<
  "AWS::WAFv2::WebACLAssociation",
  WAFv2WebACLAssociationProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::WAFv2::WebACLAssociation";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: WAFv2WebACLAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      WAFv2WebACLAssociation.Type,
      properties,
      WAFv2WebACLAssociation.AttributeNames,
      options,
    );
  }
}
