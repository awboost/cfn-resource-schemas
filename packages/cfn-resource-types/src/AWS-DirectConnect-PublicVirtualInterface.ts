import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::DirectConnect::PublicVirtualInterface
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directconnect-publicvirtualinterface.html}
 */
export type DirectConnectPublicVirtualInterfaceProperties = {
  /**
   * The Amazon Resource Name (ARN) of the role to allocate the public virtual interface. Needs directconnect:AllocatePublicVirtualInterface permissions and tag permissions if applicable.
   * @pattern `^arn:aws[a-z-]*:iam::[0-9]{12}:role/.+$`
   */
  AllocatePublicVirtualInterfaceRoleArn?: string;
  /**
   * The BGP peers configured on this virtual interface.
   * @minLength `1`
   * @maxLength `2`
   */
  BgpPeers: BgpPeer[];
  /**
   * The ID or ARN of the connection or LAG.
   * @pattern `^((arn:aws[a-z-]*:directconnect:[a-z0-9-]+:[0-9]{12}:(dxcon/dxcon|dxlag/dxlag))|dx(con|lag))-[a-z0-9A-Z]{8,21}$`
   */
  ConnectionId: string;
  /**
   * The routes to be advertised to the AWS network in this region.
   * @minLength `1`
   */
  RouteFilterPrefixes?: string[];
  /**
   * The tags associated with the public virtual interface.
   * @minLength `1`
   */
  Tags?: Tag[];
  /**
   * The name of the virtual interface assigned by the customer network. The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).
   * @pattern `^[\w \-_,\/]{1,100}$`
   */
  VirtualInterfaceName: string;
  /**
   * The ID of the VLAN.
   * @min `0`
   * @max `4095`
   */
  Vlan: number;
};
/**
 * Attribute type definition for `AWS::DirectConnect::PublicVirtualInterface`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directconnect-publicvirtualinterface.html#aws-resource-directconnect-publicvirtualinterface-return-values}
 */
export type DirectConnectPublicVirtualInterfaceAttributes = {
  /**
   * The BGP peers configured on this virtual interface.
   * @minLength `1`
   * @maxLength `2`
   */
  BgpPeers: {
    /**
     * @pattern `^dxpeer-[a-z0-9]{8}$`
     */
    BgpPeerId: string;
  }[];
  /**
   * The ARN of the virtual interface.
   * @pattern `^arn:aws[a-z-]*:directconnect:[a-z0-9-]+:[0-9]{12}:dxvif/dxvif-[a-z0-9]{8}$`
   */
  VirtualInterfaceArn: string;
  /**
   * The ID of the virtual interface.
   * @pattern `^dxvif-[a-z0-9]{8}$`
   */
  VirtualInterfaceId: string;
};
/**
 * Type definition for `AWS::DirectConnect::PublicVirtualInterface.BgpPeer`.
 * Information about a BGP peer.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-directconnect-publicvirtualinterface-bgppeer.html}
 */
export type BgpPeer = {
  /**
   * The address family for the BGP peer.
   * @pattern `^(ipv4)|(ipv6)$`
   */
  AddressFamily: string;
  /**
   * The IP address assigned to the Amazon interface.
   * @pattern `^[0-9a-fA-F:.]+/[0-9]+$`
   */
  AmazonAddress?: string;
  /**
   * The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.
   * @pattern `^[1-9][0-9]*$`
   */
  Asn: string;
  /**
   * The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximum length of 80 characters.
   * @pattern `^[A-Za-z0-9\\!"#$%&'()*+,\-./:;<=>?@\[\]\^_`{|}~]{6,80}$`
   */
  AuthKey?: string;
  /**
   * The IP address assigned to the customer interface.
   * @pattern `^[0-9a-fA-F:.]+/[0-9]+$`
   */
  CustomerAddress?: string;
};
/**
 * Type definition for `AWS::DirectConnect::PublicVirtualInterface.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-directconnect-publicvirtualinterface-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::DirectConnect::PublicVirtualInterface
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directconnect-publicvirtualinterface.html}
 */
export class DirectConnectPublicVirtualInterface extends $Resource<
  "AWS::DirectConnect::PublicVirtualInterface",
  DirectConnectPublicVirtualInterfaceProperties,
  DirectConnectPublicVirtualInterfaceAttributes
> {
  public static readonly Type = "AWS::DirectConnect::PublicVirtualInterface";
  constructor(
    logicalId: string,
    properties: DirectConnectPublicVirtualInterfaceProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      DirectConnectPublicVirtualInterface.Type,
      properties,
      options,
    );
  }
}
