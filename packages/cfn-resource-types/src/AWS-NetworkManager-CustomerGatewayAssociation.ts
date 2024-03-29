import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::NetworkManager::CustomerGatewayAssociation type associates a customer gateway with a device and optionally, with a link.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-customergatewayassociation.html}
 */
export type NetworkManagerCustomerGatewayAssociationProperties = {
  /**
   * The Amazon Resource Name (ARN) of the customer gateway.
   */
  CustomerGatewayArn: string;
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
  LinkId?: string;
};
/**
 * The AWS::NetworkManager::CustomerGatewayAssociation type associates a customer gateway with a device and optionally, with a link.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-customergatewayassociation.html}
 */
export class NetworkManagerCustomerGatewayAssociation extends $Resource<
  "AWS::NetworkManager::CustomerGatewayAssociation",
  NetworkManagerCustomerGatewayAssociationProperties,
  Record<string, never>
> {
  public static readonly Type =
    "AWS::NetworkManager::CustomerGatewayAssociation";
  constructor(
    logicalId: string,
    properties: NetworkManagerCustomerGatewayAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      NetworkManagerCustomerGatewayAssociation.Type,
      properties,
      options,
    );
  }
}
