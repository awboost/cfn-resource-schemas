import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::DevOpsAgent::PrivateConnection
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devopsagent-privateconnection.html}
 */
export type DevOpsAgentPrivateConnectionProperties = {
  /**
   * Certificate for the Private Connection.
   * @minLength `1`
   * @maxLength `32768`
   */
  Certificate?: string;
  /**
   * The connection configuration for the Private Connection.
   */
  ConnectionConfiguration: ConnectionConfiguration;
  /**
   * Unique name for this Private Connection within the account.
   * @minLength `3`
   * @maxLength `30`
   * @pattern `^[a-z0-9]([a-z0-9-]*[a-z0-9])?$`
   */
  Name: string;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::DevOpsAgent::PrivateConnection`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devopsagent-privateconnection.html#aws-resource-devopsagent-privateconnection-return-values}
 */
export type DevOpsAgentPrivateConnectionAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the Private Connection.
   */
  Arn: string;
  /**
   * The expiry time of the certificate associated with the Private Connection.
   */
  CertificateExpiryTime: string;
  /**
   * The status of the Private Connection.
   */
  Status:
    | "ACTIVE"
    | "CREATE_IN_PROGRESS"
    | "CREATE_FAILED"
    | "DELETE_IN_PROGRESS"
    | "DELETE_FAILED";
};
/**
 * Type definition for `AWS::DevOpsAgent::PrivateConnection.ConnectionConfiguration`.
 * The connection configuration, either SelfManaged or ServiceManaged.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsagent-privateconnection-connectionconfiguration.html}
 */
export type ConnectionConfiguration =
  | {
      /**
       * Configuration for a self-managed Private Connection.
       */
      SelfManaged: SelfManagedMode;
    }
  | {
      /**
       * Configuration for a service-managed Private Connection.
       */
      ServiceManaged: ServiceManagedMode;
    };
/**
 * Type definition for `AWS::DevOpsAgent::PrivateConnection.SelfManagedMode`.
 * Configuration for a self-managed Private Connection.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsagent-privateconnection-selfmanagedmode.html}
 */
export type SelfManagedMode = {
  /**
   * The ARN of the Resource Configuration.
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:[a-z0-9\-]+:vpc-lattice:[a-zA-Z0-9\-]+:\d{12}:resourceconfiguration/rcfg-[0-9a-z]{17}$`
   */
  ResourceConfigurationId: string;
};
/**
 * Type definition for `AWS::DevOpsAgent::PrivateConnection.ServiceManagedMode`.
 * Configuration for a service-managed Private Connection.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsagent-privateconnection-servicemanagedmode.html}
 */
export type ServiceManagedMode = {
  /**
   * IP address or DNS name of the target resource.
   * @minLength `3`
   * @maxLength `255`
   * @pattern `^[a-zA-Z0-9.:\-]+$`
   */
  HostAddress: string;
  /**
   * IP address type of the service-managed Resource Gateway.
   */
  IpAddressType?: "IPV4" | "IPV6" | "DUAL_STACK";
  /**
   * Number of IPv4 addresses in each ENI for the service-managed Resource Gateway.
   * @min `1`
   * @max `62`
   */
  Ipv4AddressesPerEni?: number;
  /**
   * TCP port ranges that a consumer can use to access the resource.
   * @minLength `1`
   * @maxLength `11`
   */
  PortRanges?: string[];
  /**
   * Security groups to attach to the service-managed Resource Gateway.
   * @minLength `1`
   * @maxLength `5`
   */
  SecurityGroupIds?: string[];
  /**
   * Subnets that the service-managed Resource Gateway will span.
   * @minLength `1`
   * @maxLength `20`
   */
  SubnetIds?: string[];
  /**
   * VPC to create the service-managed Resource Gateway in.
   * @minLength `5`
   * @maxLength `50`
   * @pattern `^vpc-(([0-9a-z]{8})|([0-9a-z]{17}))$`
   */
  VpcId: string;
};
/**
 * Type definition for `AWS::DevOpsAgent::PrivateConnection.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsagent-privateconnection-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::DevOpsAgent::PrivateConnection
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devopsagent-privateconnection.html}
 */
export class DevOpsAgentPrivateConnection extends $Resource<
  "AWS::DevOpsAgent::PrivateConnection",
  DevOpsAgentPrivateConnectionProperties,
  DevOpsAgentPrivateConnectionAttributes
> {
  public static readonly Type = "AWS::DevOpsAgent::PrivateConnection";
  constructor(
    logicalId: string,
    properties: DevOpsAgentPrivateConnectionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DevOpsAgentPrivateConnection.Type, properties, options);
  }
}
