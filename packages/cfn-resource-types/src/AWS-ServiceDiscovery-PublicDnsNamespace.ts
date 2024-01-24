import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::ServiceDiscovery::PublicDnsNamespace
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-publicdnsnamespace.html}
 */
export type ServiceDiscoveryPublicDnsNamespaceProperties = {
  Description?: string;
  Name: string;
  Properties?: Properties;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::ServiceDiscovery::PublicDnsNamespace`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-publicdnsnamespace.html#aws-resource-servicediscovery-publicdnsnamespace-return-values}
 */
export type ServiceDiscoveryPublicDnsNamespaceAttributes = {
  Arn: string;
  HostedZoneId: string;
  Id: string;
};
/**
 * Type definition for `AWS::ServiceDiscovery::PublicDnsNamespace.Properties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicediscovery-publicdnsnamespace-properties.html}
 */
export type Properties = {
  DnsProperties?: PublicDnsPropertiesMutable;
};
/**
 * Type definition for `AWS::ServiceDiscovery::PublicDnsNamespace.PublicDnsPropertiesMutable`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicediscovery-publicdnsnamespace-publicdnspropertiesmutable.html}
 */
export type PublicDnsPropertiesMutable = {
  SOA?: SOA;
};
/**
 * Type definition for `AWS::ServiceDiscovery::PublicDnsNamespace.SOA`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicediscovery-publicdnsnamespace-soa.html}
 */
export type SOA = {
  TTL?: number;
};
/**
 * Type definition for `AWS::ServiceDiscovery::PublicDnsNamespace.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicediscovery-publicdnsnamespace-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::ServiceDiscovery::PublicDnsNamespace
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-publicdnsnamespace.html}
 */
export class ServiceDiscoveryPublicDnsNamespace extends $Resource<
  "AWS::ServiceDiscovery::PublicDnsNamespace",
  ServiceDiscoveryPublicDnsNamespaceProperties,
  ServiceDiscoveryPublicDnsNamespaceAttributes
> {
  public static readonly Type = "AWS::ServiceDiscovery::PublicDnsNamespace";
  constructor(
    logicalId: string,
    properties: ServiceDiscoveryPublicDnsNamespaceProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ServiceDiscoveryPublicDnsNamespace.Type,
      properties,
      options,
    );
  }
}
