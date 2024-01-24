import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::EC2::TransitGatewayMulticastDomain type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastdomain.html}
 */
export type EC2TransitGatewayMulticastDomainProperties = {
  /**
   * The options for the transit gateway multicast domain.
   */
  Options?: {
    /**
     * Indicates whether to automatically cross-account subnet associations that are associated with the transit gateway multicast domain. Valid Values: enable | disable
     */
    AutoAcceptSharedAssociations?: string;
    /**
     * Indicates whether Internet Group Management Protocol (IGMP) version 2 is turned on for the transit gateway multicast domain. Valid Values: enable | disable
     */
    Igmpv2Support?: string;
    /**
     * Indicates whether support for statically configuring transit gateway multicast group sources is turned on. Valid Values: enable | disable
     */
    StaticSourcesSupport?: string;
  };
  /**
   * The tags for the transit gateway multicast domain.
   */
  Tags?: Tag[];
  /**
   * The ID of the transit gateway.
   */
  TransitGatewayId: string;
};
/**
 * Attribute type definition for `AWS::EC2::TransitGatewayMulticastDomain`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastdomain.html#aws-resource-ec2-transitgatewaymulticastdomain-return-values}
 */
export type EC2TransitGatewayMulticastDomainAttributes = {
  /**
   * The time the transit gateway multicast domain was created.
   */
  CreationTime: string;
  /**
   * The state of the transit gateway multicast domain.
   */
  State: string;
  /**
   * The Amazon Resource Name (ARN) of the transit gateway multicast domain.
   */
  TransitGatewayMulticastDomainArn: string;
  /**
   * The ID of the transit gateway multicast domain.
   */
  TransitGatewayMulticastDomainId: string;
};
/**
 * Type definition for `AWS::EC2::TransitGatewayMulticastDomain.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-transitgatewaymulticastdomain-tag.html}
 */
export type Tag = {
  /**
   * The key of the tag. Constraints: Tag keys are case-sensitive and accept a maximum of 127 Unicode characters. May not begin with aws:.
   */
  Key?: string;
  /**
   * The value of the tag. Constraints: Tag values are case-sensitive and accept a maximum of 255 Unicode characters.
   */
  Value?: string;
};
/**
 * The AWS::EC2::TransitGatewayMulticastDomain type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastdomain.html}
 */
export class EC2TransitGatewayMulticastDomain extends $Resource<
  "AWS::EC2::TransitGatewayMulticastDomain",
  EC2TransitGatewayMulticastDomainProperties,
  EC2TransitGatewayMulticastDomainAttributes
> {
  public static readonly Type = "AWS::EC2::TransitGatewayMulticastDomain";
  constructor(
    logicalId: string,
    properties: EC2TransitGatewayMulticastDomainProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      EC2TransitGatewayMulticastDomain.Type,
      properties,
      options,
    );
  }
}
