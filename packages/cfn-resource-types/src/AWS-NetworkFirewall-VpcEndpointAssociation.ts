import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for AWS::NetworkFirewall::VpcEndpointAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-vpcendpointassociation.html}
 */
export type NetworkFirewallVpcEndpointAssociationProperties = {
  /**
   * @maxLength `512`
   * @pattern `^.*$`
   */
  Description?: string;
  /**
   * A resource ARN.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^(arn:aws.*)$`
   */
  FirewallArn: string;
  SubnetMapping: SubnetMapping;
  Tags?: Tag[];
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^vpc-[0-9a-f]+$`
   */
  VpcId: string;
};
/**
 * Attribute type definition for `AWS::NetworkFirewall::VpcEndpointAssociation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-vpcendpointassociation.html#aws-resource-networkfirewall-vpcendpointassociation-return-values}
 */
export type NetworkFirewallVpcEndpointAssociationAttributes = {
  /**
   * An endpoint Id.
   */
  EndpointId: string;
  /**
   * A resource ARN.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^(arn:aws.*)$`
   */
  VpcEndpointAssociationArn: string;
  /**
   * @minLength `36`
   * @maxLength `36`
   * @pattern `^([0-9a-f]{8})-([0-9a-f]{4}-){3}([0-9a-f]{12})$`
   */
  VpcEndpointAssociationId: string;
};
/**
 * Type definition for `AWS::NetworkFirewall::VpcEndpointAssociation.SubnetMapping`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-vpcendpointassociation-subnetmapping.html}
 */
export type SubnetMapping = {
  /**
   * A IPAddressType
   */
  IPAddressType?: string;
  /**
   * A SubnetId.
   */
  SubnetId: string;
};
/**
 * Type definition for `AWS::NetworkFirewall::VpcEndpointAssociation.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-vpcendpointassociation-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^.*$`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `255`
   * @pattern `^.*$`
   */
  Value: string;
};
/**
 * Resource type definition for AWS::NetworkFirewall::VpcEndpointAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-vpcendpointassociation.html}
 */
export class NetworkFirewallVpcEndpointAssociation extends $Resource<
  "AWS::NetworkFirewall::VpcEndpointAssociation",
  NetworkFirewallVpcEndpointAssociationProperties,
  NetworkFirewallVpcEndpointAssociationAttributes
> {
  public static readonly Type = "AWS::NetworkFirewall::VpcEndpointAssociation";
  constructor(
    logicalId: string,
    properties: NetworkFirewallVpcEndpointAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      NetworkFirewallVpcEndpointAssociation.Type,
      properties,
      options,
    );
  }
}
