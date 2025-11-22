import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * AWS::EC2::TransitGatewayMeteringPolicy Resource Definition
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymeteringpolicy.html}
 */
export type EC2TransitGatewayMeteringPolicyProperties = {
  /**
   * Middle box attachment Ids
   */
  MiddleboxAttachmentIds?: string[];
  Tags?: Tag[];
  /**
   * The Id of transit gateway
   */
  TransitGatewayId: string;
};
/**
 * Attribute type definition for `AWS::EC2::TransitGatewayMeteringPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymeteringpolicy.html#aws-resource-ec2-transitgatewaymeteringpolicy-return-values}
 */
export type EC2TransitGatewayMeteringPolicyAttributes = {
  /**
   * State of the transit gateway metering policy
   */
  State: string;
  /**
   * The Id of the transit gateway metering policy
   */
  TransitGatewayMeteringPolicyId: string;
  /**
   * The timestamp at which the latest action performed on the metering policy will become effective
   */
  UpdateEffectiveAt: string;
};
/**
 * Type definition for `AWS::EC2::TransitGatewayMeteringPolicy.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-transitgatewaymeteringpolicy-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * AWS::EC2::TransitGatewayMeteringPolicy Resource Definition
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymeteringpolicy.html}
 */
export class EC2TransitGatewayMeteringPolicy extends $Resource<
  "AWS::EC2::TransitGatewayMeteringPolicy",
  EC2TransitGatewayMeteringPolicyProperties,
  EC2TransitGatewayMeteringPolicyAttributes
> {
  public static readonly Type = "AWS::EC2::TransitGatewayMeteringPolicy";
  constructor(
    logicalId: string,
    properties: EC2TransitGatewayMeteringPolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2TransitGatewayMeteringPolicy.Type, properties, options);
  }
}
