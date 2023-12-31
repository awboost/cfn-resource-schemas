import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * The AWS::NetworkManager::TransitGatewayRegistration type registers a transit gateway in your global network. The transit gateway can be in any AWS Region, but it must be owned by the same AWS account that owns the global network. You cannot register a transit gateway in more than one global network.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewayregistration.html}
 */
export type NetworkManagerTransitGatewayRegistrationProperties = {
  /**
   * The ID of the global network.
   */
  GlobalNetworkId: string;
  /**
   * The Amazon Resource Name (ARN) of the transit gateway.
   */
  TransitGatewayArn: string;
};
/**
 * The AWS::NetworkManager::TransitGatewayRegistration type registers a transit gateway in your global network. The transit gateway can be in any AWS Region, but it must be owned by the same AWS account that owns the global network. You cannot register a transit gateway in more than one global network.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewayregistration.html}
 */
export class NetworkManagerTransitGatewayRegistration extends $Resource<
  "AWS::NetworkManager::TransitGatewayRegistration",
  NetworkManagerTransitGatewayRegistrationProperties,
  Record<string, never>
> {
  public static readonly Type =
    "AWS::NetworkManager::TransitGatewayRegistration";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: NetworkManagerTransitGatewayRegistrationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      NetworkManagerTransitGatewayRegistration.Type,
      properties,
      NetworkManagerTransitGatewayRegistration.AttributeNames,
      options,
    );
  }
}
