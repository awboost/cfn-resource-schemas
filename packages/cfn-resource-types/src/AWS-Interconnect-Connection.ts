import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Interconnect::Connection. Creates a managed network connection between AWS and a partner cloud service provider.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-interconnect-connection.html}
 */
export type InterconnectConnectionProperties = {
  /**
   * The activation key for accepting a connection proposal from a partner CSP. Mutually exclusive with EnvironmentId.
   */
  ActivationKey?: string;
  /**
   * The logical attachment point in your AWS network where the managed connection will be connected.
   */
  AttachPoint: AttachPoint;
  /**
   * The bandwidth of the connection (e.g., 50Mbps, 1Gbps). Required when creating a connection through AWS.
   * @pattern `^\d+[MG]bps$`
   */
  Bandwidth?: string;
  /**
   * A description of the connection.
   * @maxLength `255`
   * @pattern `^[-a-zA-Z0-9_ ]+$`
   */
  Description?: string;
  /**
   * The ID of the environment for the connection. Required when creating a connection through AWS. Mutually exclusive with ActivationKey.
   * @minLength `1`
   * @maxLength `32`
   */
  EnvironmentId?: string;
  /**
   * The account ID of the remote owner. Required when creating a connection through AWS.
   * @maxLength `255`
   * @pattern `^[-a-zA-Z0-9_@\.]+$`
   */
  RemoteOwnerAccount?: string;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Interconnect::Connection`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-interconnect-connection.html#aws-resource-interconnect-connection-return-values}
 */
export type InterconnectConnectionAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the connection.
   * @pattern `^arn:aws[a-z-]*:interconnect:[^:]+:[0-9]{12}:connection/mcc-[a-z0-9]{8}$`
   */
  Arn: string;
  /**
   * The billing tier for the connection.
   * @min `0`
   * @max `8`
   */
  BillingTier: number;
  /**
   * The unique identifier for the connection.
   * @pattern `^mcc-[a-z0-9]{8}$`
   */
  ConnectionId: string;
  /**
   * The AWS account ID of the connection owner.
   */
  OwnerAccount: string;
  /**
   * The partner cloud service provider.
   */
  Provider: {
    /**
     * The name of the cloud service provider.
     * @maxLength `32`
     */
    CloudServiceProvider: string;
    /**
     * The name of the last mile provider.
     * @maxLength `32`
     */
    LastMileProvider: string;
  };
  /**
   * The shared identifier for the connection pairing.
   * @pattern `^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$`
   */
  SharedId: string;
  /**
   * The current state of the connection.
   */
  State:
    | "available"
    | "requested"
    | "pending"
    | "down"
    | "deleting"
    | "deleted"
    | "failed";
  /**
   * The type of managed connection.
   * @minLength `5`
   * @maxLength `32`
   */
  Type: string;
};
/**
 * Type definition for `AWS::Interconnect::Connection.AttachPoint`.
 * The logical attachment point in your AWS network where the managed connection will be connected.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-interconnect-connection-attachpoint.html}
 */
export type AttachPoint = {
  /**
   * The ARN of the resource to attach to.
   */
  Arn?: string;
  /**
   * The ID of the Direct Connect Gateway to attach to.
   * @pattern `^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$`
   */
  DirectConnectGateway?: string;
};
/**
 * Type definition for `AWS::Interconnect::Connection.Provider`.
 * The partner cloud service provider.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-interconnect-connection-provider.html}
 */
export type Provider = {
  /**
   * The name of the cloud service provider.
   * @maxLength `32`
   */
  CloudServiceProvider?: string;
  /**
   * The name of the last mile provider.
   * @maxLength `32`
   */
  LastMileProvider?: string;
};
/**
 * Type definition for `AWS::Interconnect::Connection.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-interconnect-connection-tag.html}
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
 * Resource Type definition for AWS::Interconnect::Connection. Creates a managed network connection between AWS and a partner cloud service provider.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-interconnect-connection.html}
 */
export class InterconnectConnection extends $Resource<
  "AWS::Interconnect::Connection",
  InterconnectConnectionProperties,
  InterconnectConnectionAttributes
> {
  public static readonly Type = "AWS::Interconnect::Connection";
  constructor(
    logicalId: string,
    properties: InterconnectConnectionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, InterconnectConnection.Type, properties, options);
  }
}
