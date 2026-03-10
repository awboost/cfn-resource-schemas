import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::Route53GlobalResolver::AccessSource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53globalresolver-accesssource.html}
 */
export type Route53GlobalResolverAccessSourceProperties = {
  /**
   * @minLength `1`
   * @maxLength `42`
   */
  Cidr: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  ClientToken?: string;
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  DnsViewId: string;
  IpAddressType?: IpAddressType;
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `(?!^[0-9]+$)([a-zA-Z0-9-_' ']+)`
   */
  Name?: string;
  Protocol: DnsProtocol;
  /**
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Route53GlobalResolver::AccessSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53globalresolver-accesssource.html#aws-resource-route53globalresolver-accesssource-return-values}
 */
export type Route53GlobalResolverAccessSourceAttributes = {
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  AccessSourceId: string;
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  Arn: string;
  CreatedAt: string;
  Status: CRResourceStatus;
  UpdatedAt: string;
};
/**
 * Type definition for `AWS::Route53GlobalResolver::AccessSource.CRResourceStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53globalresolver-accesssource-crresourcestatus.html}
 */
export type CRResourceStatus =
  | "CREATING"
  | "OPERATIONAL"
  | "UPDATING"
  | "DELETING";
/**
 * Type definition for `AWS::Route53GlobalResolver::AccessSource.DnsProtocol`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53globalresolver-accesssource-dnsprotocol.html}
 */
export type DnsProtocol = "DO53" | "DOH" | "DOT";
/**
 * Type definition for `AWS::Route53GlobalResolver::AccessSource.IpAddressType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53globalresolver-accesssource-ipaddresstype.html}
 */
export type IpAddressType = "IPV4" | "IPV6";
/**
 * Type definition for `AWS::Route53GlobalResolver::AccessSource.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53globalresolver-accesssource-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource schema for AWS::Route53GlobalResolver::AccessSource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53globalresolver-accesssource.html}
 */
export class Route53GlobalResolverAccessSource extends $Resource<
  "AWS::Route53GlobalResolver::AccessSource",
  Route53GlobalResolverAccessSourceProperties,
  Route53GlobalResolverAccessSourceAttributes
> {
  public static readonly Type = "AWS::Route53GlobalResolver::AccessSource";
  constructor(
    logicalId: string,
    properties: Route53GlobalResolverAccessSourceProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      Route53GlobalResolverAccessSource.Type,
      properties,
      options,
    );
  }
}
