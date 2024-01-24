import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::ServiceDiscovery::PrivateDnsNamespace
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-privatednsnamespace.html}
 */
export type ServiceDiscoveryPrivateDnsNamespaceProperties = {
  Description?: string;
  Name: string;
  Properties?: Properties;
  Tags?: Tag[];
  Vpc: string;
};
/**
 * Attribute type definition for `AWS::ServiceDiscovery::PrivateDnsNamespace`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-privatednsnamespace.html#aws-resource-servicediscovery-privatednsnamespace-return-values}
 */
export type ServiceDiscoveryPrivateDnsNamespaceAttributes = {
  Arn: string;
  HostedZoneId: string;
  Id: string;
};
/**
 * Type definition for `AWS::ServiceDiscovery::PrivateDnsNamespace.PrivateDnsPropertiesMutable`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicediscovery-privatednsnamespace-privatednspropertiesmutable.html}
 */
export type PrivateDnsPropertiesMutable = {
  SOA?: SOA;
};
/**
 * Type definition for `AWS::ServiceDiscovery::PrivateDnsNamespace.Properties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicediscovery-privatednsnamespace-properties.html}
 */
export type Properties = {
  DnsProperties?: PrivateDnsPropertiesMutable;
};
/**
 * Type definition for `AWS::ServiceDiscovery::PrivateDnsNamespace.SOA`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicediscovery-privatednsnamespace-soa.html}
 */
export type SOA = {
  TTL?: number;
};
/**
 * Type definition for `AWS::ServiceDiscovery::PrivateDnsNamespace.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicediscovery-privatednsnamespace-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::ServiceDiscovery::PrivateDnsNamespace
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-privatednsnamespace.html}
 */
export class ServiceDiscoveryPrivateDnsNamespace extends $Resource<
  "AWS::ServiceDiscovery::PrivateDnsNamespace",
  ServiceDiscoveryPrivateDnsNamespaceProperties,
  ServiceDiscoveryPrivateDnsNamespaceAttributes
> {
  public static readonly Type = "AWS::ServiceDiscovery::PrivateDnsNamespace";
  constructor(
    logicalId: string,
    properties: ServiceDiscoveryPrivateDnsNamespaceProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ServiceDiscoveryPrivateDnsNamespace.Type,
      properties,
      options,
    );
  }
}
