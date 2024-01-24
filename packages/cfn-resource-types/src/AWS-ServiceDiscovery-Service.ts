import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::ServiceDiscovery::Service
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-service.html}
 */
export type ServiceDiscoveryServiceProperties = {
  Description?: string;
  DnsConfig?: DnsConfig;
  HealthCheckConfig?: HealthCheckConfig;
  HealthCheckCustomConfig?: HealthCheckCustomConfig;
  Name?: string;
  NamespaceId?: string;
  Tags?: Tag[];
  Type?: string;
};
/**
 * Attribute type definition for `AWS::ServiceDiscovery::Service`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-service.html#aws-resource-servicediscovery-service-return-values}
 */
export type ServiceDiscoveryServiceAttributes = {
  Arn: string;
  Id: string;
};
/**
 * Type definition for `AWS::ServiceDiscovery::Service.DnsConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicediscovery-service-dnsconfig.html}
 */
export type DnsConfig = {
  DnsRecords: DnsRecord[];
  NamespaceId?: string;
  RoutingPolicy?: string;
};
/**
 * Type definition for `AWS::ServiceDiscovery::Service.DnsRecord`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicediscovery-service-dnsrecord.html}
 */
export type DnsRecord = {
  TTL: number;
  Type: string;
};
/**
 * Type definition for `AWS::ServiceDiscovery::Service.HealthCheckConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicediscovery-service-healthcheckconfig.html}
 */
export type HealthCheckConfig = {
  FailureThreshold?: number;
  ResourcePath?: string;
  Type: string;
};
/**
 * Type definition for `AWS::ServiceDiscovery::Service.HealthCheckCustomConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicediscovery-service-healthcheckcustomconfig.html}
 */
export type HealthCheckCustomConfig = {
  FailureThreshold?: number;
};
/**
 * Type definition for `AWS::ServiceDiscovery::Service.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicediscovery-service-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::ServiceDiscovery::Service
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-service.html}
 */
export class ServiceDiscoveryService extends $Resource<
  "AWS::ServiceDiscovery::Service",
  ServiceDiscoveryServiceProperties,
  ServiceDiscoveryServiceAttributes
> {
  public static readonly Type = "AWS::ServiceDiscovery::Service";
  constructor(
    logicalId: string,
    properties: ServiceDiscoveryServiceProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ServiceDiscoveryService.Type, properties, options);
  }
}
