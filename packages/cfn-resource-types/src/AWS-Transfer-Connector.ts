import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
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
    EncryptionAlgorithm?: "AES128_CBC" | "AES192_CBC" | "AES256_CBC" | "NONE";
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
    MdnResponse?: "SYNC" | "NONE";
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
     * @pattern `^[\p{Print}\p{Blank}]+`
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
     * Signing algorithm for this AS2 connector configuration.
     */
    SigningAlgorithm?: "SHA256" | "SHA384" | "SHA512" | "SHA1" | "NONE";
  };
  /**
   * Specifies the logging role for the connector.
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `arn:.*role/.*`
   */
  LoggingRole?: string;
  /**
   * Configuration for an SFTP connector.
   */
  SftpConfig?: {
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
  Url: string;
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
