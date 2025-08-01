import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::EC2::TransitGatewayConnectPeer
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayconnectpeer.html}
 */
export type EC2TransitGatewayConnectPeerProperties = {
  /**
   * The Connect peer details.
   */
  ConnectPeerConfiguration: TransitGatewayConnectPeerConfiguration;
  /**
   * The tags for the Connect Peer.
   */
  Tags?: Tag[];
  /**
   * The ID of the Connect attachment.
   */
  TransitGatewayAttachmentId: string;
};
/**
 * Attribute type definition for `AWS::EC2::TransitGatewayConnectPeer`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayconnectpeer.html#aws-resource-ec2-transitgatewayconnectpeer-return-values}
 */
export type EC2TransitGatewayConnectPeerAttributes = {
  /**
   * The Connect peer details.
   */
  ConnectPeerConfiguration: {
    /**
     * The BGP configuration details.
     */
    BgpConfigurations: {
      /**
       * The BGP status.
       */
      BgpStatus: string;
      /**
       * The interior BGP peer IP address for the appliance.
       */
      PeerAddress: string;
      /**
       * The peer Autonomous System Number (ASN).
       */
      PeerAsn: number;
      /**
       * The interior BGP peer IP address for the transit gateway.
       */
      TransitGatewayAddress: string;
      /**
       * The transit gateway Autonomous System Number (ASN).
       */
      TransitGatewayAsn: number;
    }[];
    /**
     * The tunnel protocol.
     */
    Protocol: string;
  };
  /**
   * The creation time.
   */
  CreationTime: string;
  /**
   * The state of the Connect peer.
   */
  State: string;
  /**
   * The ID of the Connect peer.
   */
  TransitGatewayConnectPeerId: string;
};
/**
 * Type definition for `AWS::EC2::TransitGatewayConnectPeer.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-transitgatewayconnectpeer-tag.html}
 */
export type Tag = {
  /**
   * The key of the tag. Constraints: Tag keys are case-sensitive and accept a maximum of 127 Unicode characters. May not begin with aws: .
   */
  Key?: string;
  /**
   * The value of the tag. Constraints: Tag values are case-sensitive and accept a maximum of 256 Unicode characters.
   */
  Value?: string;
};
/**
 * Type definition for `AWS::EC2::TransitGatewayConnectPeer.TransitGatewayAttachmentBgpConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-transitgatewayconnectpeer-transitgatewayattachmentbgpconfiguration.html}
 */
export type TransitGatewayAttachmentBgpConfiguration = {
  /**
   * The peer Autonomous System Number (ASN).
   */
  PeerAsn?: number;
};
/**
 * Type definition for `AWS::EC2::TransitGatewayConnectPeer.TransitGatewayConnectPeerConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-transitgatewayconnectpeer-transitgatewayconnectpeerconfiguration.html}
 */
export type TransitGatewayConnectPeerConfiguration = {
  /**
   * The range of interior BGP peer IP addresses.
   */
  InsideCidrBlocks: string[];
  /**
   * The peer IP address (GRE outer IP address) on the appliance side of the Connect peer.
   */
  PeerAddress: string;
  /**
   * The Connect peer IP address on the transit gateway side of the tunnel.
   */
  TransitGatewayAddress?: string;
};
/**
 * Resource Type definition for AWS::EC2::TransitGatewayConnectPeer
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayconnectpeer.html}
 */
export class EC2TransitGatewayConnectPeer extends $Resource<
  "AWS::EC2::TransitGatewayConnectPeer",
  EC2TransitGatewayConnectPeerProperties,
  EC2TransitGatewayConnectPeerAttributes
> {
  public static readonly Type = "AWS::EC2::TransitGatewayConnectPeer";
  constructor(
    logicalId: string,
    properties: EC2TransitGatewayConnectPeerProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2TransitGatewayConnectPeer.Type, properties, options);
  }
}
