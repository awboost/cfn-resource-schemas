import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * AWS::NetworkManager::TransitGatewayPeering Resoruce Type.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewaypeering.html}
 */
export type NetworkManagerTransitGatewayPeeringProperties = {
  /**
   * The Id of the core network that you want to peer a transit gateway to.
   */
  CoreNetworkId: string;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
  /**
   * The ARN (Amazon Resource Name) of the transit gateway that you will peer to a core network
   */
  TransitGatewayArn: string;
};
/**
 * Attribute type definition for `AWS::NetworkManager::TransitGatewayPeering`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewaypeering.html#aws-resource-networkmanager-transitgatewaypeering-return-values}
 */
export type NetworkManagerTransitGatewayPeeringAttributes = {
  /**
   * The ARN (Amazon Resource Name) of the core network that you want to peer a transit gateway to.
   */
  CoreNetworkArn: string;
  /**
   * The creation time of the transit gateway peering
   */
  CreatedAt: string;
  /**
   * The location of the transit gateway peering
   */
  EdgeLocation: string;
  /**
   * Peering owner account Id
   */
  OwnerAccountId: string;
  /**
   * The Id of the transit gateway peering
   */
  PeeringId: string;
  /**
   * Peering type (TransitGatewayPeering)
   */
  PeeringType: string;
  /**
   * The ARN (Amazon Resource Name) of the resource that you will peer to a core network
   */
  ResourceArn: string;
  /**
   * The state of the transit gateway peering
   */
  State: string;
  /**
   * The ID of the TransitGatewayPeeringAttachment
   */
  TransitGatewayPeeringAttachmentId: string;
};
/**
 * Type definition for `AWS::NetworkManager::TransitGatewayPeering.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-transitgatewaypeering-tag.html}
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
   * @maxLength `256`
   */
  Value: string;
};
/**
 * AWS::NetworkManager::TransitGatewayPeering Resoruce Type.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewaypeering.html}
 */
export class NetworkManagerTransitGatewayPeering extends $Resource<
  "AWS::NetworkManager::TransitGatewayPeering",
  NetworkManagerTransitGatewayPeeringProperties,
  NetworkManagerTransitGatewayPeeringAttributes
> {
  public static readonly Type = "AWS::NetworkManager::TransitGatewayPeering";
  public static readonly AttributeNames = [
    "CoreNetworkArn" as const,
    "CreatedAt" as const,
    "EdgeLocation" as const,
    "OwnerAccountId" as const,
    "PeeringId" as const,
    "PeeringType" as const,
    "ResourceArn" as const,
    "State" as const,
    "TransitGatewayPeeringAttachmentId" as const,
  ];
  constructor(
    logicalId: string,
    properties: NetworkManagerTransitGatewayPeeringProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      NetworkManagerTransitGatewayPeering.Type,
      properties,
      NetworkManagerTransitGatewayPeering.AttributeNames,
      options,
    );
  }
}
