import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::DirectConnect::Lag
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directconnect-lag.html}
 */
export type DirectConnectLagProperties = {
  /**
   * The bandwidth of the individual physical dedicated connections bundled by the LAG.
   * @pattern `^[1-9][0-9]*(M|G)bps$`
   */
  ConnectionsBandwidth: string;
  /**
   * The name of the LAG.
   * @pattern `^[\w \-_,\/]{1,200}$`
   */
  LagName: string;
  /**
   * The location for the LAG.
   * @pattern `^[a-zA-Z0-9-]+$`
   */
  Location: string;
  /**
   * The minimum number of physical dedicated connections that must be operational for the LAG itself to be operational.
   */
  MinimumLinks?: number;
  /**
   * The name of the service provider associated with the requested LAG.
   */
  ProviderName?: string;
  /**
   * Indicates whether you want the LAG to support MAC Security (MACsec).
   */
  RequestMACSec?: boolean;
  /**
   * The tags associated with the LAG.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::DirectConnect::Lag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directconnect-lag.html#aws-resource-directconnect-lag-return-values}
 */
export type DirectConnectLagAttributes = {
  /**
   * The ARN of the LAG.
   * @pattern `^arn:aws[a-z-]*:directconnect:[a-z0-9-]+:[0-9]{12}:dxlag/dxlag-[a-z0-9]{8,21}$`
   */
  LagArn: string;
  /**
   * The ID of the LAG.
   * @pattern `^dxlag-[a-z0-9]{8,21}$`
   */
  LagId: string;
  /**
   * The state of the LAG.
   * @pattern `^(requested|pending|available|down|deleting|deleted|unknown)$`
   */
  LagState: string;
};
/**
 * Type definition for `AWS::DirectConnect::Lag.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-directconnect-lag-tag.html}
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
 * Resource Type definition for AWS::DirectConnect::Lag
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directconnect-lag.html}
 */
export class DirectConnectLag extends $Resource<
  "AWS::DirectConnect::Lag",
  DirectConnectLagProperties,
  DirectConnectLagAttributes
> {
  public static readonly Type = "AWS::DirectConnect::Lag";
  constructor(
    logicalId: string,
    properties: DirectConnectLagProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DirectConnectLag.Type, properties, options);
  }
}
