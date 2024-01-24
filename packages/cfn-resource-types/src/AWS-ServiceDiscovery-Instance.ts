import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::ServiceDiscovery::Instance
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-instance.html}
 */
export type ServiceDiscoveryInstanceProperties = {
  InstanceAttributes: Record<string, any>;
  ServiceId: string;
};
/**
 * Attribute type definition for `AWS::ServiceDiscovery::Instance`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-instance.html#aws-resource-servicediscovery-instance-return-values}
 */
export type ServiceDiscoveryInstanceAttributes = {
  InstanceId: string;
};
/**
 * Resource Type definition for AWS::ServiceDiscovery::Instance
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-instance.html}
 */
export class ServiceDiscoveryInstance extends $Resource<
  "AWS::ServiceDiscovery::Instance",
  ServiceDiscoveryInstanceProperties,
  ServiceDiscoveryInstanceAttributes
> {
  public static readonly Type = "AWS::ServiceDiscovery::Instance";
  constructor(
    logicalId: string,
    properties: ServiceDiscoveryInstanceProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ServiceDiscoveryInstance.Type, properties, options);
  }
}
