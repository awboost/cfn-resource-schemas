import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Transfer::Certificate
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-certificate.html}
 */
export type TransferCertificateProperties = {
  /**
   * Specifies the active date for the certificate.
   */
  ActiveDate?: string;
  /**
     * Specifies the certificate body to be imported.
     * @minLength `1`
     * @maxLength `16384`
     * @pattern `^[
    
     -ÿ]*`
     */
  Certificate: string;
  /**
     * Specifies the certificate chain to be imported.
     * @minLength `1`
     * @maxLength `2097152`
     * @pattern `^[
    
     -ÿ]*`
     */
  CertificateChain?: string;
  /**
   * A textual description for the certificate.
   * @minLength `1`
   * @maxLength `200`
   * @pattern `^[\w\- ]*$`
   */
  Description?: string;
  /**
   * Specifies the inactive date for the certificate.
   */
  InactiveDate?: string;
  /**
     * Specifies the private key for the certificate.
     * @minLength `1`
     * @maxLength `16384`
     * @pattern `^[
    
     -ÿ]*`
     */
  PrivateKey?: string;
  /**
   * Key-value pairs that can be used to group and search for certificates. Tags are metadata attached to certificates for any purpose.
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * Specifies the usage type for the certificate.
   */
  Usage: "SIGNING" | "ENCRYPTION";
};
/**
 * Attribute type definition for `AWS::Transfer::Certificate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-certificate.html#aws-resource-transfer-certificate-return-values}
 */
export type TransferCertificateAttributes = {
  /**
   * Specifies the unique Amazon Resource Name (ARN) for the agreement.
   * @minLength `20`
   * @maxLength `1600`
   * @pattern `arn:.*`
   */
  Arn: string;
  /**
   * A unique identifier for the certificate.
   * @minLength `22`
   * @maxLength `22`
   * @pattern `^cert-([0-9a-f]{17})$`
   */
  CertificateId: string;
  /**
   * Specifies the not after date for the certificate.
   */
  NotAfterDate: string;
  /**
   * Specifies the not before date for the certificate.
   */
  NotBeforeDate: string;
  /**
   * Specifies Certificate's serial.
   * @minLength `0`
   * @maxLength `48`
   * @pattern `^[\p{XDigit}{2}:?]*`
   */
  Serial: string;
  /**
   * A status description for the certificate.
   */
  Status: "ACTIVE" | "PENDING" | "INACTIVE";
  /**
   * Describing the type of certificate. With or without a private key.
   */
  Type: "CERTIFICATE" | "CERTIFICATE_WITH_PRIVATE_KEY";
};
/**
 * Type definition for `AWS::Transfer::Certificate.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-certificate-tag.html}
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
 * Resource Type definition for AWS::Transfer::Certificate
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-certificate.html}
 */
export class TransferCertificate extends $Resource<
  "AWS::Transfer::Certificate",
  TransferCertificateProperties,
  TransferCertificateAttributes
> {
  public static readonly Type = "AWS::Transfer::Certificate";
  constructor(
    logicalId: string,
    properties: TransferCertificateProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, TransferCertificate.Type, properties, options);
  }
}
