import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * AWS::EC2::TransitGatewayMeteringPolicyEntry Resource Definition
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymeteringpolicyentry.html}
 */
export type EC2TransitGatewayMeteringPolicyEntryProperties = {
  /**
   * The list of IP addresses of the instances receiving traffic from the transit gateway
   */
  DestinationCidrBlock?: string;
  /**
   * The list of ports on destination instances receiving traffic from the transit gateway
   */
  DestinationPortRange?: string;
  /**
   * The ID of the source attachment through which traffic leaves a transit gateway
   */
  DestinationTransitGatewayAttachmentId?: string;
  /**
   * The type of the attachment through which traffic leaves a transit gateway
   */
  DestinationTransitGatewayAttachmentType?: TransitGatewayAttachmentResourceType;
  /**
   * The resource owner information responsible for paying default billable charges for the traffic flow
   */
  MeteredAccount: TransitGatewayMeteringPayerType;
  /**
   * The rule number of the metering policy entry
   */
  PolicyRuleNumber: number;
  /**
   * The protocol of the traffic
   */
  Protocol?: string;
  /**
   * The list of IP addresses of the instances sending traffic to the transit gateway for which the metering policy entry is applicable
   */
  SourceCidrBlock?: string;
  /**
   * The list of ports on source instances sending traffic to the transit gateway
   */
  SourcePortRange?: string;
  /**
   * The ID of the source attachment through which traffic enters a transit gateway
   */
  SourceTransitGatewayAttachmentId?: string;
  /**
   * The type of the attachment through which traffic enters a  transit gateway
   */
  SourceTransitGatewayAttachmentType?: TransitGatewayAttachmentResourceType;
  /**
   * The ID of the transit gateway metering policy for which the entry is being created
   */
  TransitGatewayMeteringPolicyId: string;
};
/**
 * Attribute type definition for `AWS::EC2::TransitGatewayMeteringPolicyEntry`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymeteringpolicyentry.html#aws-resource-ec2-transitgatewaymeteringpolicyentry-return-values}
 */
export type EC2TransitGatewayMeteringPolicyEntryAttributes = {
  /**
   * State of the transit gateway metering policy
   */
  State: string;
  /**
   * The timestamp at which the latest action performed on the metering policy entry will become effective
   */
  UpdateEffectiveAt: string;
};
/**
 * Type definition for `AWS::EC2::TransitGatewayMeteringPolicyEntry.TransitGatewayAttachmentResourceType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-transitgatewaymeteringpolicyentry-transitgatewayattachmentresourcetype.html}
 */
export type TransitGatewayAttachmentResourceType =
  | "vpc"
  | "vpn"
  | "direct-connect-gateway"
  | "peering"
  | "network-function"
  | "vpn-concentrator";
/**
 * Type definition for `AWS::EC2::TransitGatewayMeteringPolicyEntry.TransitGatewayMeteringPayerType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-transitgatewaymeteringpolicyentry-transitgatewaymeteringpayertype.html}
 */
export type TransitGatewayMeteringPayerType =
  | "source-attachment-owner"
  | "destination-attachment-owner"
  | "transit-gateway-owner";
/**
 * AWS::EC2::TransitGatewayMeteringPolicyEntry Resource Definition
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymeteringpolicyentry.html}
 */
export class EC2TransitGatewayMeteringPolicyEntry extends $Resource<
  "AWS::EC2::TransitGatewayMeteringPolicyEntry",
  EC2TransitGatewayMeteringPolicyEntryProperties,
  EC2TransitGatewayMeteringPolicyEntryAttributes
> {
  public static readonly Type = "AWS::EC2::TransitGatewayMeteringPolicyEntry";
  constructor(
    logicalId: string,
    properties: EC2TransitGatewayMeteringPolicyEntryProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      EC2TransitGatewayMeteringPolicyEntry.Type,
      properties,
      options,
    );
  }
}
