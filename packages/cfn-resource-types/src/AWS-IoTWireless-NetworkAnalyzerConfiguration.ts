import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::IoTWireless::NetworkAnalyzerConfiguration`.
 * Create and manage NetworkAnalyzerConfiguration resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-networkanalyzerconfiguration.html}
 */
export type IoTWirelessNetworkAnalyzerConfigurationProperties = {
  /**
   * The description of the new resource
   * @maxLength `2048`
   */
  Description?: string;
  /**
   * Name of the network analyzer configuration
   * @maxLength `1024`
   * @pattern `^[a-zA-Z0-9-_]+$`
   */
  Name: string;
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `200`
   */
  Tags?: Tag[];
  /**
   * Trace content for your wireless gateway and wireless device resources
   */
  TraceContent?: {
    LogLevel?: LogLevel;
    WirelessDeviceFrameInfo?: WirelessDeviceFrameInfo;
  };
  /**
   * List of wireless gateway resources that have been added to the network analyzer configuration
   * @maxLength `250`
   */
  WirelessDevices?: string[];
  /**
   * List of wireless gateway resources that have been added to the network analyzer configuration
   * @maxLength `250`
   */
  WirelessGateways?: string[];
};
/**
 * Attribute type definition for `AWS::IoTWireless::NetworkAnalyzerConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-networkanalyzerconfiguration.html#aws-resource-iotwireless-networkanalyzerconfiguration-return-values}
 */
export type IoTWirelessNetworkAnalyzerConfigurationAttributes = {
  /**
   * Arn for network analyzer configuration, Returned upon successful create.
   */
  Arn: string;
};
/**
 * Type definition for `AWS::IoTWireless::NetworkAnalyzerConfiguration.LogLevel`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-networkanalyzerconfiguration-loglevel.html}
 */
export type LogLevel = "INFO" | "ERROR" | "DISABLED";
/**
 * Type definition for `AWS::IoTWireless::NetworkAnalyzerConfiguration.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-networkanalyzerconfiguration-tag.html}
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
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::IoTWireless::NetworkAnalyzerConfiguration.WirelessDeviceFrameInfo`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-networkanalyzerconfiguration-wirelessdeviceframeinfo.html}
 */
export type WirelessDeviceFrameInfo = "ENABLED" | "DISABLED";
/**
 * Resource type definition for `AWS::IoTWireless::NetworkAnalyzerConfiguration`.
 * Create and manage NetworkAnalyzerConfiguration resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-networkanalyzerconfiguration.html}
 */
export class IoTWirelessNetworkAnalyzerConfiguration extends $Resource<
  "AWS::IoTWireless::NetworkAnalyzerConfiguration",
  IoTWirelessNetworkAnalyzerConfigurationProperties,
  IoTWirelessNetworkAnalyzerConfigurationAttributes
> {
  public static readonly Type =
    "AWS::IoTWireless::NetworkAnalyzerConfiguration";
  constructor(
    logicalId: string,
    properties: IoTWirelessNetworkAnalyzerConfigurationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      IoTWirelessNetworkAnalyzerConfiguration.Type,
      properties,
      options,
    );
  }
}
