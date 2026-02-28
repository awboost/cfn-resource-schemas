import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::DirectConnect::Connection
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directconnect-connection.html}
 */
export type DirectConnectConnectionProperties = {
  /**
   * The bandwidth of the connection.
   * @pattern `^[1-9][0-9]*(M|G)bps$`
   */
  Bandwidth: string;
  /**
   * The name of the connection.
   * @pattern `^[\w \-_,\/]{1,200}$`
   */
  ConnectionName: string;
  /**
   * The ID or ARN of the LAG to associate the connection with.
   * @pattern `^(arn:aws[a-z-]*:directconnect:[a-z0-9-]+:[0-9]{12}:dxlag/)?dxlag-[a-zA-Z0-9]{8,21}$`
   */
  LagId?: string;
  /**
   * The location of the connection.
   * @pattern `^[a-zA-Z0-9-]+$`
   */
  Location: string;
  /**
   * The name of the service provider associated with the requested connection.
   */
  ProviderName?: string;
  /**
   * Indicates whether you want the connection to support MAC Security (MACsec).
   */
  RequestMACSec?: boolean;
  /**
   * The tags associated with the connection.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::DirectConnect::Connection`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directconnect-connection.html#aws-resource-directconnect-connection-return-values}
 */
export type DirectConnectConnectionAttributes = {
  /**
   * The ARN of the connection.
   * @pattern `^arn:aws[a-z-]*:directconnect:[a-z0-9-]+:[0-9]{12}:dxcon/dxcon-[a-z0-9]{8,21}$`
   */
  ConnectionArn: string;
  /**
   * The ID of the connection.
   * @pattern `^dxcon-[a-z0-9]{8,21}$`
   */
  ConnectionId: string;
  /**
   * The state of the connection.
   * @pattern `^(ordering|requested|pending|available|down|deleting|deleted|rejected|unknown)$`
   */
  ConnectionState: string;
};
/**
 * Type definition for `AWS::DirectConnect::Connection.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-directconnect-connection-tag.html}
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
 * Resource Type definition for AWS::DirectConnect::Connection
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directconnect-connection.html}
 */
export class DirectConnectConnection extends $Resource<
  "AWS::DirectConnect::Connection",
  DirectConnectConnectionProperties,
  DirectConnectConnectionAttributes
> {
  public static readonly Type = "AWS::DirectConnect::Connection";
  constructor(
    logicalId: string,
    properties: DirectConnectConnectionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DirectConnectConnection.Type, properties, options);
  }
}
