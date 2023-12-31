import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * AWS::NetworkManager::CoreNetwork Resource Type Definition.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-corenetwork.html}
 */
export type NetworkManagerCoreNetworkProperties = {
  /**
   * The description of core network
   */
  Description?: string;
  /**
   * The ID of the global network that your core network is a part of.
   */
  GlobalNetworkId: string;
  /**
   * Live policy document for the core network, you must provide PolicyDocument in Json Format
   */
  PolicyDocument?: Record<string, any>;
  /**
   * The tags for the global network.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::NetworkManager::CoreNetwork`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-corenetwork.html#aws-resource-networkmanager-corenetwork-return-values}
 */
export type NetworkManagerCoreNetworkAttributes = {
  /**
   * The ARN (Amazon resource name) of core network
   */
  CoreNetworkArn: string;
  /**
   * The Id of core network
   */
  CoreNetworkId: string;
  /**
   * The creation time of core network
   */
  CreatedAt: string;
  /**
   * The edges within a core network.
   */
  Edges: CoreNetworkEdge[];
  /**
   * Owner of the core network
   */
  OwnerAccount: string;
  /**
   * The segments within a core network.
   */
  Segments: CoreNetworkSegment[];
  /**
   * The state of core network
   */
  State: string;
};
/**
 * Type definition for `AWS::NetworkManager::CoreNetwork.CoreNetworkEdge`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-corenetwork-corenetworkedge.html}
 */
export type CoreNetworkEdge = {
  /**
   * The ASN of a core network edge.
   */
  Asn?: number;
  /**
   * The Region where a core network edge is located.
   */
  EdgeLocation?: string;
  InsideCidrBlocks?: string[];
};
/**
 * Type definition for `AWS::NetworkManager::CoreNetwork.CoreNetworkSegment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-corenetwork-corenetworksegment.html}
 */
export type CoreNetworkSegment = {
  EdgeLocations?: string[];
  /**
   * Name of segment
   */
  Name?: string;
  SharedSegments?: string[];
};
/**
 * Type definition for `AWS::NetworkManager::CoreNetwork.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-corenetwork-tag.html}
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
 * AWS::NetworkManager::CoreNetwork Resource Type Definition.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-corenetwork.html}
 */
export class NetworkManagerCoreNetwork extends $Resource<
  "AWS::NetworkManager::CoreNetwork",
  NetworkManagerCoreNetworkProperties,
  NetworkManagerCoreNetworkAttributes
> {
  public static readonly Type = "AWS::NetworkManager::CoreNetwork";
  public static readonly AttributeNames = [
    "CoreNetworkArn" as const,
    "CoreNetworkId" as const,
    "CreatedAt" as const,
    "Edges" as const,
    "OwnerAccount" as const,
    "Segments" as const,
    "State" as const,
  ];
  constructor(
    logicalId: string,
    properties: NetworkManagerCoreNetworkProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      NetworkManagerCoreNetwork.Type,
      properties,
      NetworkManagerCoreNetwork.AttributeNames,
      options,
    );
  }
}
