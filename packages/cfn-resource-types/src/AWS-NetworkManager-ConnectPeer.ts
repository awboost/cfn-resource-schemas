import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * AWS::NetworkManager::ConnectPeer Resource Type Definition.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-connectpeer.html}
 */
export type NetworkManagerConnectPeerProperties = {
  /**
   * Bgp options for connect peer.
   */
  BgpOptions?: BgpOptions;
  /**
   * The ID of the attachment to connect.
   */
  ConnectAttachmentId: string;
  /**
   * The IP address of a core network.
   */
  CoreNetworkAddress?: string;
  /**
   * The inside IP addresses used for a Connect peer configuration.
   */
  InsideCidrBlocks?: string[];
  /**
   * The IP address of the Connect peer.
   */
  PeerAddress: string;
  /**
   * The subnet ARN for the connect peer.
   */
  SubnetArn?: string;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::NetworkManager::ConnectPeer`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-connectpeer.html#aws-resource-networkmanager-connectpeer-return-values}
 */
export type NetworkManagerConnectPeerAttributes = {
  /**
   * Configuration of the connect peer.
   */
  Configuration: {
    BgpConfigurations: {
      /**
       * The address of a core network.
       */
      CoreNetworkAddress: string;
      /**
       * The ASN of the Coret Network.
       */
      CoreNetworkAsn: number;
      /**
       * The address of a core network Connect peer.
       */
      PeerAddress: string;
      /**
       * The ASN of the Connect peer.
       */
      PeerAsn: number;
    }[];
    /**
     * The IP address of a core network.
     */
    CoreNetworkAddress: string;
    /**
     * The inside IP addresses used for a Connect peer configuration.
     */
    InsideCidrBlocks: string[];
    /**
     * The IP address of the Connect peer.
     */
    PeerAddress: string;
    /**
     * The protocol used for a Connect peer configuration.
     */
    Protocol: string;
  };
  /**
   * The ID of the Connect peer.
   */
  ConnectPeerId: string;
  /**
   * The ID of the core network.
   */
  CoreNetworkId: string;
  /**
   * Connect peer creation time.
   */
  CreatedAt: string;
  /**
   * The Connect peer Regions where edges are located.
   */
  EdgeLocation: string;
  /**
   * State of the connect peer.
   */
  State: string;
};
/**
 * Type definition for `AWS::NetworkManager::ConnectPeer.BgpOptions`.
 * Bgp options
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-connectpeer-bgpoptions.html}
 */
export type BgpOptions = {
  PeerAsn?: number;
};
/**
 * Type definition for `AWS::NetworkManager::ConnectPeer.ConnectPeerBgpConfiguration`.
 * Bgp configuration for connect peer
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-connectpeer-connectpeerbgpconfiguration.html}
 */
export type ConnectPeerBgpConfiguration = {
  /**
   * The address of a core network.
   */
  CoreNetworkAddress?: string;
  /**
   * The ASN of the Coret Network.
   */
  CoreNetworkAsn?: number;
  /**
   * The address of a core network Connect peer.
   */
  PeerAddress?: string;
  /**
   * The ASN of the Connect peer.
   */
  PeerAsn?: number;
};
/**
 * Type definition for `AWS::NetworkManager::ConnectPeer.ConnectPeerConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-connectpeer-connectpeerconfiguration.html}
 */
export type ConnectPeerConfiguration = {
  BgpConfigurations?: ConnectPeerBgpConfiguration[];
  /**
   * The IP address of a core network.
   */
  CoreNetworkAddress?: string;
  /**
   * The inside IP addresses used for a Connect peer configuration.
   */
  InsideCidrBlocks?: string[];
  /**
   * The IP address of the Connect peer.
   */
  PeerAddress?: string;
  /**
   * The protocol used for a Connect peer configuration.
   */
  Protocol?: string;
};
/**
 * Type definition for `AWS::NetworkManager::ConnectPeer.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-connectpeer-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Value: string;
};
/**
 * AWS::NetworkManager::ConnectPeer Resource Type Definition.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-connectpeer.html}
 */
export class NetworkManagerConnectPeer extends $Resource<
  "AWS::NetworkManager::ConnectPeer",
  NetworkManagerConnectPeerProperties,
  NetworkManagerConnectPeerAttributes
> {
  public static readonly Type = "AWS::NetworkManager::ConnectPeer";
  constructor(
    logicalId: string,
    properties: NetworkManagerConnectPeerProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, NetworkManagerConnectPeer.Type, properties, options);
  }
}
