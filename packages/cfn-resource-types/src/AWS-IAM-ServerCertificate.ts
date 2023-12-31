import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::IAM::ServerCertificate
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-servercertificate.html}
 */
export type IAMServerCertificateProperties = {
  /**
   * @minLength `1`
   * @maxLength `16384`
   * @pattern `[\u0009\u000A\u000D\u0020-\u00FF]+`
   */
  CertificateBody?: string;
  /**
   * @minLength `1`
   * @maxLength `2097152`
   * @pattern `[\u0009\u000A\u000D\u0020-\u00FF]+`
   */
  CertificateChain?: string;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `(\u002F)|(\u002F[\u0021-\u007F]+\u002F)`
   */
  Path?: string;
  /**
   * @minLength `1`
   * @maxLength `16384`
   * @pattern `[\u0009\u000A\u000D\u0020-\u00FF]+`
   */
  PrivateKey?: string;
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `[\w+=,.@-]+`
   */
  ServerCertificateName?: string;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::IAM::ServerCertificate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-servercertificate.html#aws-resource-iam-servercertificate-return-values}
 */
export type IAMServerCertificateAttributes = {
  /**
   * Amazon Resource Name (ARN) of the server certificate
   * @minLength `1`
   * @maxLength `1600`
   */
  Arn: string;
};
/**
 * Type definition for `AWS::IAM::ServerCertificate.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-servercertificate-tag.html}
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
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::IAM::ServerCertificate
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-servercertificate.html}
 */
export class IAMServerCertificate extends $Resource<
  "AWS::IAM::ServerCertificate",
  IAMServerCertificateProperties,
  IAMServerCertificateAttributes
> {
  public static readonly Type = "AWS::IAM::ServerCertificate";
  public static readonly AttributeNames = ["Arn" as const];
  constructor(
    logicalId: string,
    properties: IAMServerCertificateProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      IAMServerCertificate.Type,
      properties,
      IAMServerCertificate.AttributeNames,
      options,
    );
  }
}
