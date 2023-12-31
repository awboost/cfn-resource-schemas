import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::EC2::Host
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-host.html}
 */
export type EC2HostProperties = {
  /**
   * The ID of the Outpost hardware asset.
   */
  AssetId?: string;
  /**
   * Indicates whether the host accepts any untargeted instance launches that match its instance type configuration, or if it only accepts Host tenancy instance launches that specify its unique host ID.
   */
  AutoPlacement?: string;
  /**
   * The Availability Zone in which to allocate the Dedicated Host.
   */
  AvailabilityZone: string;
  /**
   * Automatically allocates a new dedicated host and moves your instances on to it if a degradation is detected on your current host.
   */
  HostMaintenance?: string;
  /**
   * Indicates whether to enable or disable host recovery for the Dedicated Host. Host recovery is disabled by default.
   */
  HostRecovery?: string;
  /**
   * Specifies the instance family to be supported by the Dedicated Hosts. If you specify an instance family, the Dedicated Hosts support multiple instance types within that instance family.
   */
  InstanceFamily?: string;
  /**
   * Specifies the instance type to be supported by the Dedicated Hosts. If you specify an instance type, the Dedicated Hosts support instances of the specified instance type only.
   */
  InstanceType?: string;
  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services Outpost on which to allocate the Dedicated Host.
   */
  OutpostArn?: string;
};
/**
 * Attribute type definition for `AWS::EC2::Host`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-host.html#aws-resource-ec2-host-return-values}
 */
export type EC2HostAttributes = {
  /**
   * ID of the host created.
   */
  HostId: string;
};
/**
 * Resource Type definition for AWS::EC2::Host
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-host.html}
 */
export class EC2Host extends $Resource<
  "AWS::EC2::Host",
  EC2HostProperties,
  EC2HostAttributes
> {
  public static readonly Type = "AWS::EC2::Host";
  constructor(
    logicalId: string,
    properties: EC2HostProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2Host.Type, properties, options);
  }
}
