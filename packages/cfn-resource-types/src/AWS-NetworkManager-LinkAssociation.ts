import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * The AWS::NetworkManager::LinkAssociation type associates a link to a device. The device and link must be in the same global network and the same site.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-linkassociation.html}
 */
export type NetworkManagerLinkAssociationProperties = {
  /**
   * The ID of the device
   */
  DeviceId: string;
  /**
   * The ID of the global network.
   */
  GlobalNetworkId: string;
  /**
   * The ID of the link
   */
  LinkId: string;
};
/**
 * The AWS::NetworkManager::LinkAssociation type associates a link to a device. The device and link must be in the same global network and the same site.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-linkassociation.html}
 */
export class NetworkManagerLinkAssociation extends $Resource<
  "AWS::NetworkManager::LinkAssociation",
  NetworkManagerLinkAssociationProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::NetworkManager::LinkAssociation";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: NetworkManagerLinkAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      NetworkManagerLinkAssociation.Type,
      properties,
      NetworkManagerLinkAssociation.AttributeNames,
      options,
    );
  }
}
