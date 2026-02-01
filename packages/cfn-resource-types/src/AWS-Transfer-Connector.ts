import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Transfer::Connector
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-connector.html}
 */
export type TransferConnectorProperties = {
  /**
   * Specifies the access role for the connector.
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `arn:.*role/.*`
   */
  AccessRole: string;
  /**
   * Configuration for an AS2 connector.
   */
  As2Config?: {
    /**
     * Configuration for an AS2 connector with ASYNC MDN Response
     */
    AsyncMdnConfig?: ConnectorAsyncMdnConfig;
    /**
     * ARN or name of the secret in AWS Secrets Manager which contains the credentials for Basic authentication. If empty, Basic authentication is disabled for the AS2 connector
     * @minLength `0`
     * @maxLength `2048`
     */
    BasicAuthSecretId?: string;
    /**
     * Compression setting for this AS2 connector configuration.
     */
    Compression?: "ZLIB" | "DISABLED";
    /**
     * Encryption algorithm for this AS2 connector configuration.
     */
    EncryptionAlgorithm?:
      | "AES128_CBC"
      | "AES192_CBC"
      | "AES256_CBC"
      | "NONE"
      | "DES_EDE3_CBC";
    /**
     * A unique identifier for the local profile.
     * @minLength `19`
     * @maxLength `19`
     * @pattern `^p-([0-9a-f]{17})$`
     */
    LocalProfileId?: string;
    /**
     * MDN Response setting for this AS2 connector configuration.
     */
    MdnResponse?: "SYNC" | "ASYNC" | "NONE";
    /**
     * MDN Signing algorithm for this AS2 connector configuration.
     */
    MdnSigningAlgorithm?:
      | "SHA256"
      | "SHA384"
      | "SHA512"
      | "SHA1"
      | "NONE"
      | "DEFAULT";
    /**
     * The message subject for this AS2 connector configuration.
     * @minLength `1`
     * @maxLength `1024`
     * @pattern `^[\u0020-\u007E\t]+$`
     */
    MessageSubject?: string;
    /**
     * A unique identifier for the partner profile.
     * @minLength `19`
     * @maxLength `19`
     * @pattern `^p-([0-9a-f]{17})$`
     */
    PartnerProfileId?: string;
    /**
     * Specifies whether to use the AWS S3 object content-type as the content-type for the AS2 message.
     */
    PreserveContentType?: "ENABLED" | "DISABLED";
    /**
     * Signing algorithm for this AS2 connector configuration.
     */
    SigningAlgorithm?: "SHA256" | "SHA384" | "SHA512" | "SHA1" | "NONE";
  };
  /**
   * Egress configuration for the connector.
   */
  EgressConfig?: ConnectorEgressConfig;
  /**
   * Specifies the egress type for the connector.
   */
  EgressType?: ConnectorEgressType;
  /**
   * Specifies the logging role for the connector.
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `arn:.*role/.*`
   */
  LoggingRole?: string;
  /**
   * Security policy for SFTP Connector
   * @maxLength `50`
   * @pattern `TransferSFTPConnectorSecurityPolicy-[A-Za-z0-9-]+`
   */
  SecurityPolicyName?: string;
  /**
   * Configuration for an SFTP connector.
   */
  SftpConfig?: {
    /**
     * Specifies the number of active connections that your connector can establish with the remote server at the same time.
     * @min `1`
     * @max `5`
     */
    MaxConcurrentConnections?: number;
    /**
     * List of public host keys, for the external server to which you are connecting.
     * @maxLength `10`
     */
    TrustedHostKeys?: string[];
    /**
     * ARN or name of the secret in AWS Secrets Manager which contains the SFTP user's private keys or passwords.
     * @minLength `1`
     * @maxLength `2048`
     */
    UserSecretId?: string;
  };
  /**
   * Key-value pairs that can be used to group and search for connectors. Tags are metadata attached to connectors for any purpose.
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * URL for Connector
   * @maxLength `255`
   */
  Url?: string;
};
/**
 * Attribute type definition for `AWS::Transfer::Connector`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-connector.html#aws-resource-transfer-connector-return-values}
 */
export type TransferConnectorAttributes = {
  /**
   * Specifies the unique Amazon Resource Name (ARN) for the connector.
   * @minLength `20`
   * @maxLength `1600`
   * @pattern `arn:.*`
   */
  Arn: string;
  /**
   * A unique identifier for the connector.
   * @minLength `19`
   * @maxLength `19`
   * @pattern `^c-([0-9a-f]{17})$`
   */
  ConnectorId: string;
  /**
   * Detailed error message when Connector in ERRORED status
   * @maxLength `2048`
   */
  ErrorMessage: string;
  /**
   * The list of egress IP addresses of this connector. These IP addresses are assigned automatically when you create the connector.
   */
  ServiceManagedEgressIpAddresses: string[];
  Status: ConnectorStatus;
};
/**
 * Type definition for `AWS::Transfer::Connector.ConnectorAsyncMdnConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-connector-connectorasyncmdnconfig.html}
 */
export type ConnectorAsyncMdnConfig = {
  /**
   * @minLength `1`
   * @maxLength `10`
   */
  ServerIds: string[];
  /**
   * URL of the server to receive the MDN response on
   */
  Url: string;
};
/**
 * Type definition for `AWS::Transfer::Connector.ConnectorEgressConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-connector-connectoregressconfig.html}
 */
export type ConnectorEgressConfig = {
  VpcLattice: ConnectorVpcLatticeEgressConfig;
};
/**
 * Type definition for `AWS::Transfer::Connector.ConnectorEgressType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-connector-connectoregresstype.html}
 */
export type ConnectorEgressType = "SERVICE_MANAGED" | "VPC_LATTICE";
/**
 * Type definition for `AWS::Transfer::Connector.ConnectorStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-connector-connectorstatus.html}
 */
export type ConnectorStatus = "ACTIVE" | "PENDING" | "ERRORED";
/**
 * Type definition for `AWS::Transfer::Connector.ConnectorVpcLatticeEgressConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-connector-connectorvpclatticeegressconfig.html}
 */
export type ConnectorVpcLatticeEgressConfig = {
  /**
   * Port to connect to on the target VPC Lattice resource
   * @min `1`
   * @max `65535`
   */
  PortNumber?: number;
  /**
   * ARN of the VPC Lattice resource configuration
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^arn:[a-z0-9\-]+:vpc-lattice:[a-zA-Z0-9\-]+:\d{12}:resourceconfiguration/rcfg-[0-9a-z]{17}$`
   */
  ResourceConfigurationArn: string;
};
/**
 * Type definition for `AWS::Transfer::Connector.Tag`.
 * Creates a key-value pair for a specific resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-connector-tag.html}
 */
export type Tag = {
  /**
   * The name assigned to the tag that you create.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * Contains one or more values that you assigned to the key name you create.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::Transfer::Connector
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-connector.html}
 */
export class TransferConnector extends $Resource<
  "AWS::Transfer::Connector",
  TransferConnectorProperties,
  TransferConnectorAttributes
> {
  public static readonly Type = "AWS::Transfer::Connector";
  constructor(
    logicalId: string,
    properties: TransferConnectorProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, TransferConnector.Type, properties, options);
  }
}
