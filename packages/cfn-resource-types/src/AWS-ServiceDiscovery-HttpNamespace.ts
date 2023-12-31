import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::ServiceDiscovery::HttpNamespace
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-httpnamespace.html}
 */
export type ServiceDiscoveryHttpNamespaceProperties = {
  Description?: string;
  Name: string;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::ServiceDiscovery::HttpNamespace`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-httpnamespace.html#aws-resource-servicediscovery-httpnamespace-return-values}
 */
export type ServiceDiscoveryHttpNamespaceAttributes = {
  Arn: string;
  Id: string;
};
/**
 * Type definition for `AWS::ServiceDiscovery::HttpNamespace.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicediscovery-httpnamespace-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::ServiceDiscovery::HttpNamespace
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-httpnamespace.html}
 */
export class ServiceDiscoveryHttpNamespace extends $Resource<
  "AWS::ServiceDiscovery::HttpNamespace",
  ServiceDiscoveryHttpNamespaceProperties,
  ServiceDiscoveryHttpNamespaceAttributes
> {
  public static readonly Type = "AWS::ServiceDiscovery::HttpNamespace";
  public static readonly AttributeNames = ["Arn" as const, "Id" as const];
  constructor(
    logicalId: string,
    properties: ServiceDiscoveryHttpNamespaceProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ServiceDiscoveryHttpNamespace.Type,
      properties,
      ServiceDiscoveryHttpNamespace.AttributeNames,
      options,
    );
  }
}
