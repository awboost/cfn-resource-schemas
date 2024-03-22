import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::IoTSiteWise::Gateway
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-gateway.html}
 */
export type IoTSiteWiseGatewayProperties = {
  /**
   * A list of gateway capability summaries that each contain a namespace and status.
   */
  GatewayCapabilitySummaries?: GatewayCapabilitySummary[];
  /**
   * A unique, friendly name for the gateway.
   */
  GatewayName: string;
  /**
   * The gateway's platform. You can only specify one platform in a gateway.
   */
  GatewayPlatform: GatewayPlatform;
  /**
   * A list of key-value pairs that contain metadata for the gateway.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::IoTSiteWise::Gateway`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-gateway.html#aws-resource-iotsitewise-gateway-return-values}
 */
export type IoTSiteWiseGatewayAttributes = {
  /**
   * The ID of the gateway device.
   */
  GatewayId: string;
};
/**
 * Type definition for `AWS::IoTSiteWise::Gateway.GatewayCapabilitySummary`.
 * Contains a summary of a gateway capability configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-gateway-gatewaycapabilitysummary.html}
 */
export type GatewayCapabilitySummary = {
  /**
   * The JSON document that defines the gateway capability's configuration.
   */
  CapabilityConfiguration?: string;
  /**
   * The namespace of the capability configuration.
   */
  CapabilityNamespace: string;
};
/**
 * Type definition for `AWS::IoTSiteWise::Gateway.GatewayPlatform`.
 * Contains a gateway's platform information.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-gateway-gatewayplatform.html}
 */
export type GatewayPlatform = {
  /**
   * A gateway that runs on AWS IoT Greengrass V1.
   */
  Greengrass?: Greengrass;
  /**
   * A gateway that runs on AWS IoT Greengrass V2.
   */
  GreengrassV2?: GreengrassV2;
  /**
   * A gateway that runs on Siemens Industrial Edge.
   */
  SiemensIE?: SiemensIE;
};
/**
 * Type definition for `AWS::IoTSiteWise::Gateway.Greengrass`.
 * Contains the ARN of AWS IoT Greengrass Group V1 that the gateway runs on.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-gateway-greengrass.html}
 */
export type Greengrass = {
  /**
   * The ARN of the Greengrass group.
   */
  GroupArn: string;
};
/**
 * Type definition for `AWS::IoTSiteWise::Gateway.GreengrassV2`.
 * Contains the CoreDeviceThingName of AWS IoT Greengrass Group V2 that the gateway runs on.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-gateway-greengrassv2.html}
 */
export type GreengrassV2 = {
  /**
   * The name of the CoreDevice in GreenGrass V2.
   */
  CoreDeviceThingName: string;
};
/**
 * Type definition for `AWS::IoTSiteWise::Gateway.SiemensIE`.
 * Contains the IotCoreThingName of AWS IoT Thing that the gateway runs on.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-gateway-siemensie.html}
 */
export type SiemensIE = {
  /**
   * The name of the IoT Core Thing.
   */
  IotCoreThingName: string;
};
/**
 * Type definition for `AWS::IoTSiteWise::Gateway.Tag`.
 * To add or update tag, provide both key and value. To delete tag, provide only tag key to be deleted
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-gateway-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource schema for AWS::IoTSiteWise::Gateway
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-gateway.html}
 */
export class IoTSiteWiseGateway extends $Resource<
  "AWS::IoTSiteWise::Gateway",
  IoTSiteWiseGatewayProperties,
  IoTSiteWiseGatewayAttributes
> {
  public static readonly Type = "AWS::IoTSiteWise::Gateway";
  constructor(
    logicalId: string,
    properties: IoTSiteWiseGatewayProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IoTSiteWiseGateway.Type, properties, options);
  }
}
