import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
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
  constructor(
    logicalId: string,
    properties: NetworkManagerLinkAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, NetworkManagerLinkAssociation.Type, properties, options);
  }
}
