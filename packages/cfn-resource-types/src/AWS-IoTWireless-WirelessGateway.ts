import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::IoTWireless::WirelessGateway`.
 * Create and manage wireless gateways, including LoRa gateways.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-wirelessgateway.html}
 */
export type IoTWirelessWirelessGatewayProperties = {
  /**
   * Description of Wireless Gateway.
   * @maxLength `2048`
   */
  Description?: string;
  /**
   * The date and time when the most recent uplink was received.
   */
  LastUplinkReceivedAt?: string;
  /**
   * The combination of Package, Station and Model which represents the version of the LoRaWAN Wireless Gateway.
   */
  LoRaWAN: LoRaWANGateway;
  /**
   * Name of Wireless Gateway.
   * @maxLength `256`
   */
  Name?: string;
  /**
   * A list of key-value pairs that contain metadata for the gateway.
   * @maxLength `200`
   */
  Tags?: Tag[];
  /**
   * Thing Arn. Passed into Update to associate a Thing with the Wireless Gateway.
   */
  ThingArn?: string;
  /**
   * Thing Name. If there is a Thing created, this can be returned with a Get call.
   */
  ThingName?: string;
};
/**
 * Attribute type definition for `AWS::IoTWireless::WirelessGateway`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-wirelessgateway.html#aws-resource-iotwireless-wirelessgateway-return-values}
 */
export type IoTWirelessWirelessGatewayAttributes = {
  /**
   * Arn for Wireless Gateway. Returned upon successful create.
   */
  Arn: string;
  /**
   * Id for Wireless Gateway. Returned upon successful create.
   * @maxLength `256`
   */
  Id: string;
};
/**
 * Type definition for `AWS::IoTWireless::WirelessGateway.LoRaWANGateway`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessgateway-lorawangateway.html}
 */
export type LoRaWANGateway = {
  /**
   * @pattern `^(([0-9A-Fa-f]{2}-){7}|([0-9A-Fa-f]{2}:){7}|([0-9A-Fa-f]{2}\s){7}|([0-9A-Fa-f]{2}){7})([0-9A-Fa-f]{2})$`
   */
  GatewayEui: string;
  /**
   * @maxLength `64`
   */
  RfRegion: string;
};
/**
 * Type definition for `AWS::IoTWireless::WirelessGateway.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessgateway-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key?: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  Value?: string;
};
/**
 * Resource type definition for `AWS::IoTWireless::WirelessGateway`.
 * Create and manage wireless gateways, including LoRa gateways.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-wirelessgateway.html}
 */
export class IoTWirelessWirelessGateway extends $Resource<
  "AWS::IoTWireless::WirelessGateway",
  IoTWirelessWirelessGatewayProperties,
  IoTWirelessWirelessGatewayAttributes
> {
  public static readonly Type = "AWS::IoTWireless::WirelessGateway";
  constructor(
    logicalId: string,
    properties: IoTWirelessWirelessGatewayProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IoTWirelessWirelessGateway.Type, properties, options);
  }
}
