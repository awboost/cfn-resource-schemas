import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::EC2::LocalGatewayVirtualInterface`.
 * Resource Type definition for Local Gateway Virtual Interface which describes a virtual interface for AWS Outposts local gateways.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-localgatewayvirtualinterface.html}
 */
export type EC2LocalGatewayVirtualInterfaceProperties = {
  /**
   * The local address.
   */
  LocalAddress: string;
  /**
   * The ID of the virtual interface group
   */
  LocalGatewayVirtualInterfaceGroupId: string;
  /**
   * The Outpost LAG ID.
   */
  OutpostLagId: string;
  /**
   * The peer address.
   */
  PeerAddress: string;
  /**
   * The peer BGP ASN.
   */
  PeerBgpAsn?: number;
  /**
   * The extended 32-bit ASN of the BGP peer for use with larger ASN values.
   */
  PeerBgpAsnExtended?: number;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
  /**
   * The ID of the VLAN.
   */
  Vlan: number;
};
/**
 * Attribute type definition for `AWS::EC2::LocalGatewayVirtualInterface`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-localgatewayvirtualinterface.html#aws-resource-ec2-localgatewayvirtualinterface-return-values}
 */
export type EC2LocalGatewayVirtualInterfaceAttributes = {
  /**
   * The current state of the local gateway virtual interface
   */
  ConfigurationState: string;
  /**
   * The Autonomous System Number(ASN) for the local Border Gateway Protocol (BGP)
   */
  LocalBgpAsn: number;
  /**
   * The ID of the local gateway
   */
  LocalGatewayId: string;
  /**
   * The ID of the virtual interface
   */
  LocalGatewayVirtualInterfaceId: string;
  /**
   * The ID of the Amazon Web Services account that owns the local gateway virtual interface group
   */
  OwnerId: string;
};
/**
 * Type definition for `AWS::EC2::LocalGatewayVirtualInterface.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-localgatewayvirtualinterface-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `127`
   * @pattern `^(?!aws:.*)`
   */
  Key?: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^(?!aws:.*)`
   */
  Value?: string;
};
/**
 * Resource type definition for `AWS::EC2::LocalGatewayVirtualInterface`.
 * Resource Type definition for Local Gateway Virtual Interface which describes a virtual interface for AWS Outposts local gateways.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-localgatewayvirtualinterface.html}
 */
export class EC2LocalGatewayVirtualInterface extends $Resource<
  "AWS::EC2::LocalGatewayVirtualInterface",
  EC2LocalGatewayVirtualInterfaceProperties,
  EC2LocalGatewayVirtualInterfaceAttributes
> {
  public static readonly Type = "AWS::EC2::LocalGatewayVirtualInterface";
  constructor(
    logicalId: string,
    properties: EC2LocalGatewayVirtualInterfaceProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2LocalGatewayVirtualInterface.Type, properties, options);
  }
}
