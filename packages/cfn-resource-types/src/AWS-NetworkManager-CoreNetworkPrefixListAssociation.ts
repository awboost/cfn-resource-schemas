import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::NetworkManager::CoreNetworkPrefixListAssociation which associates a prefix list with a core network.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-corenetworkprefixlistassociation.html}
 */
export type NetworkManagerCoreNetworkPrefixListAssociationProperties = {
  /**
   * The ID of the core network.
   */
  CoreNetworkId: string;
  /**
   * The alias of the prefix list
   */
  PrefixListAlias: string;
  /**
   * The Amazon Resource Name (ARN) of the prefix list.
   * @pattern `^arn:[a-z0-9-]+:ec2:[a-z]+-[a-z]+-[0-9]:([0-9]{12}):prefix-list/pl-[a-z0-9]+$`
   */
  PrefixListArn: string;
};
/**
 * Resource Type definition for AWS::NetworkManager::CoreNetworkPrefixListAssociation which associates a prefix list with a core network.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-corenetworkprefixlistassociation.html}
 */
export class NetworkManagerCoreNetworkPrefixListAssociation extends $Resource<
  "AWS::NetworkManager::CoreNetworkPrefixListAssociation",
  NetworkManagerCoreNetworkPrefixListAssociationProperties,
  Record<string, never>
> {
  public static readonly Type =
    "AWS::NetworkManager::CoreNetworkPrefixListAssociation";
  constructor(
    logicalId: string,
    properties: NetworkManagerCoreNetworkPrefixListAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      NetworkManagerCoreNetworkPrefixListAssociation.Type,
      properties,
      options,
    );
  }
}
