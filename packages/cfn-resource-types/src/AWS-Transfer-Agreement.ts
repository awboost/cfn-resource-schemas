import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Transfer::Agreement
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-agreement.html}
 */
export type TransferAgreementProperties = {
  /**
   * Specifies the access role for the agreement.
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `arn:.*role/.*`
   */
  AccessRole: string;
  /**
   * Specifies the base directory for the agreement.
   * @maxLength `1024`
   * @pattern `^(|/.*)$`
   */
  BaseDirectory?: string;
  /**
   * Specifies a separate directory for each type of file to store for an AS2 message.
   */
  CustomDirectories?: {
    /**
     * Specifies a location to store the failed files for an AS2 message.
     * @pattern `(|/.*)`
     */
    FailedFilesDirectory: string;
    /**
     * Specifies a location to store the MDN file for an AS2 message.
     * @pattern `(|/.*)`
     */
    MdnFilesDirectory: string;
    /**
     * Specifies a location to store the payload file for an AS2 message.
     * @pattern `(|/.*)`
     */
    PayloadFilesDirectory: string;
    /**
     * Specifies a location to store the status file for an AS2 message.
     * @pattern `(|/.*)`
     */
    StatusFilesDirectory: string;
    /**
     * Specifies a location to store the temporary processing file for an AS2 message.
     * @pattern `(|/.*)`
     */
    TemporaryFilesDirectory: string;
  };
  /**
   * A textual description for the agreement.
   * @minLength `1`
   * @maxLength `200`
   * @pattern `^[\u0021-\u007E]+$`
   */
  Description?: string;
  /**
   * Specifies whether to enforce an AS2 message is signed for this agreement.
   */
  EnforceMessageSigning?: "ENABLED" | "DISABLED";
  /**
   * A unique identifier for the local profile.
   * @minLength `19`
   * @maxLength `19`
   * @pattern `^p-([0-9a-f]{17})$`
   */
  LocalProfileId: string;
  /**
   * A unique identifier for the partner profile.
   * @minLength `19`
   * @maxLength `19`
   * @pattern `^p-([0-9a-f]{17})$`
   */
  PartnerProfileId: string;
  /**
   * Specifies whether to preserve the filename received for this agreement.
   */
  PreserveFilename?: "ENABLED" | "DISABLED";
  /**
   * A unique identifier for the server.
   * @minLength `19`
   * @maxLength `19`
   * @pattern `^s-([0-9a-f]{17})$`
   */
  ServerId: string;
  /**
   * Specifies the status of the agreement.
   */
  Status?: "ACTIVE" | "INACTIVE";
  /**
   * Key-value pairs that can be used to group and search for agreements. Tags are metadata attached to agreements for any purpose.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Transfer::Agreement`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-agreement.html#aws-resource-transfer-agreement-return-values}
 */
export type TransferAgreementAttributes = {
  /**
   * A unique identifier for the agreement.
   * @minLength `19`
   * @maxLength `19`
   * @pattern `^a-([0-9a-f]{17})$`
   */
  AgreementId: string;
  /**
   * Specifies the unique Amazon Resource Name (ARN) for the agreement.
   * @minLength `20`
   * @maxLength `1600`
   * @pattern `arn:.*`
   */
  Arn: string;
};
/**
 * Type definition for `AWS::Transfer::Agreement.Tag`.
 * Creates a key-value pair for a specific resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-agreement-tag.html}
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
 * Resource Type definition for AWS::Transfer::Agreement
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-agreement.html}
 */
export class TransferAgreement extends $Resource<
  "AWS::Transfer::Agreement",
  TransferAgreementProperties,
  TransferAgreementAttributes
> {
  public static readonly Type = "AWS::Transfer::Agreement";
  constructor(
    logicalId: string,
    properties: TransferAgreementProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, TransferAgreement.Type, properties, options);
  }
}
