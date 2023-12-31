import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for `AWS::WAFv2::IPSet`.
 * Contains a list of IP addresses. This can be either IPV4 or IPV6. The list will be mutually
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-ipset.html}
 */
export type WAFv2IPSetProperties = {
  /**
   * List of IPAddresses.
   */
  Addresses: string[];
  /**
   * Description of the entity.
   * @pattern `^[a-zA-Z0-9=:#@/\-,.][a-zA-Z0-9+=:#@/\-,.\s]+[a-zA-Z0-9+=:#@/\-,.]{1,256}$`
   */
  Description?: string;
  /**
   * Type of addresses in the IPSet, use IPV4 for IPV4 IP addresses, IPV6 for IPV6 address.
   */
  IPAddressVersion: IPAddressVersion;
  /**
   * Name of the IPSet.
   * @pattern `^[0-9A-Za-z_-]{1,128}$`
   */
  Name?: string;
  /**
   * Use CLOUDFRONT for CloudFront IPSet, use REGIONAL for Application Load Balancer and API Gateway.
   */
  Scope: Scope;
  /**
   * @minLength `1`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::WAFv2::IPSet`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-ipset.html#aws-resource-wafv2-ipset-return-values}
 */
export type WAFv2IPSetAttributes = {
  /**
   * ARN of the WAF entity.
   */
  Arn: string;
  /**
   * Id of the IPSet
   * @pattern `^[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$`
   */
  Id: string;
};
/**
 * Type definition for `AWS::WAFv2::IPSet.IPAddressVersion`.
 * Type of addresses in the IPSet, use IPV4 for IPV4 IP addresses, IPV6 for IPV6 address.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-ipset-ipaddressversion.html}
 */
export type IPAddressVersion = "IPV4" | "IPV6";
/**
 * Type definition for `AWS::WAFv2::IPSet.Scope`.
 * Use CLOUDFRONT for CloudFront IPSet, use REGIONAL for Application Load Balancer and API Gateway.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-ipset-scope.html}
 */
export type Scope = "CLOUDFRONT" | "REGIONAL";
/**
 * Type definition for `AWS::WAFv2::IPSet.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-ipset-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key?: string;
  /**
   * @maxLength `256`
   */
  Value?: string;
};
/**
 * Resource type definition for `AWS::WAFv2::IPSet`.
 * Contains a list of IP addresses. This can be either IPV4 or IPV6. The list will be mutually
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-ipset.html}
 */
export class WAFv2IPSet extends $Resource<
  "AWS::WAFv2::IPSet",
  WAFv2IPSetProperties,
  WAFv2IPSetAttributes
> {
  public static readonly Type = "AWS::WAFv2::IPSet";
  public static readonly AttributeNames = ["Arn" as const, "Id" as const];
  constructor(
    logicalId: string,
    properties: WAFv2IPSetProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      WAFv2IPSet.Type,
      properties,
      WAFv2IPSet.AttributeNames,
      options,
    );
  }
}
