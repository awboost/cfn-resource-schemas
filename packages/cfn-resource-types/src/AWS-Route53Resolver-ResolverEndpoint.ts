import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::Route53Resolver::ResolverEndpoint
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverendpoint.html}
 */
export type Route53ResolverResolverEndpointProperties = {
  Direction: string;
  IpAddresses: IpAddressRequest[];
  Name?: string;
  OutpostArn?: string;
  PreferredInstanceType?: string;
  ResolverEndpointType?: string;
  SecurityGroupIds: string[];
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Route53Resolver::ResolverEndpoint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverendpoint.html#aws-resource-route53resolver-resolverendpoint-return-values}
 */
export type Route53ResolverResolverEndpointAttributes = {
  Arn: string;
  HostVPCId: string;
  IpAddressCount: string;
  ResolverEndpointId: string;
};
/**
 * Type definition for `AWS::Route53Resolver::ResolverEndpoint.IpAddressRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53resolver-resolverendpoint-ipaddressrequest.html}
 */
export type IpAddressRequest = {
  Ip?: string;
  Ipv6?: string;
  SubnetId: string;
};
/**
 * Type definition for `AWS::Route53Resolver::ResolverEndpoint.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53resolver-resolverendpoint-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::Route53Resolver::ResolverEndpoint
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverendpoint.html}
 */
export class Route53ResolverResolverEndpoint extends $Resource<
  "AWS::Route53Resolver::ResolverEndpoint",
  Route53ResolverResolverEndpointProperties,
  Route53ResolverResolverEndpointAttributes
> {
  public static readonly Type = "AWS::Route53Resolver::ResolverEndpoint";
  public static readonly AttributeNames = [
    "Arn" as const,
    "HostVPCId" as const,
    "IpAddressCount" as const,
    "ResolverEndpointId" as const,
  ];
  constructor(
    logicalId: string,
    properties: Route53ResolverResolverEndpointProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      Route53ResolverResolverEndpoint.Type,
      properties,
      Route53ResolverResolverEndpoint.AttributeNames,
      options,
    );
  }
}
