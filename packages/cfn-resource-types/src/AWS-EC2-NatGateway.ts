import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::EC2::NatGateway
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-natgateway.html}
 */
export type EC2NatGatewayProperties = {
  AllocationId?: string;
  ConnectivityType?: string;
  MaxDrainDurationSeconds?: number;
  PrivateIpAddress?: string;
  SecondaryAllocationIds?: string[];
  /**
   * @min `1`
   */
  SecondaryPrivateIpAddressCount?: number;
  SecondaryPrivateIpAddresses?: string[];
  SubnetId: string;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::EC2::NatGateway`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-natgateway.html#aws-resource-ec2-natgateway-return-values}
 */
export type EC2NatGatewayAttributes = {
  NatGatewayId: string;
};
/**
 * Type definition for `AWS::EC2::NatGateway.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-natgateway-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::EC2::NatGateway
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-natgateway.html}
 */
export class EC2NatGateway extends $Resource<
  "AWS::EC2::NatGateway",
  EC2NatGatewayProperties,
  EC2NatGatewayAttributes
> {
  public static readonly Type = "AWS::EC2::NatGateway";
  constructor(
    logicalId: string,
    properties: EC2NatGatewayProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2NatGateway.Type, properties, options);
  }
}
