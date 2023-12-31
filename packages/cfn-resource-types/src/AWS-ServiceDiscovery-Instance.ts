import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = ["InstanceId" as const];
  constructor(
    logicalId: string,
    properties: ServiceDiscoveryInstanceProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ServiceDiscoveryInstance.Type,
      properties,
      ServiceDiscoveryInstance.AttributeNames,
      options,
    );
  }
}
