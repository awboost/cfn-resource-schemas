import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for `AWS::Lightsail::Certificate`.
 * An example resource schema demonstrating some basic constructs and validation rules.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-certificate.html}
 */
export type LightsailCertificateProperties = {
  /**
   * The name for the certificate.
   */
  CertificateName: string;
  /**
   * The domain name (e.g., example.com ) for the certificate.
   */
  DomainName: string;
  /**
   * An array of strings that specify the alternate domains (e.g., example2.com) and subdomains (e.g., blog.example.com) for the certificate.
   */
  SubjectAlternativeNames?: string[];
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Lightsail::Certificate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-certificate.html#aws-resource-lightsail-certificate-return-values}
 */
export type LightsailCertificateAttributes = {
  CertificateArn: string;
  /**
   * The validation status of the certificate.
   */
  Status: string;
};
/**
 * Type definition for `AWS::Lightsail::Certificate.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-certificate-tag.html}
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
   * @maxLength `256`
   */
  Value?: string;
};
/**
 * Resource type definition for `AWS::Lightsail::Certificate`.
 * An example resource schema demonstrating some basic constructs and validation rules.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-certificate.html}
 */
export class LightsailCertificate extends $Resource<
  "AWS::Lightsail::Certificate",
  LightsailCertificateProperties,
  LightsailCertificateAttributes
> {
  public static readonly Type = "AWS::Lightsail::Certificate";
  public static readonly AttributeNames = [
    "CertificateArn" as const,
    "Status" as const,
  ];
  constructor(
    logicalId: string,
    properties: LightsailCertificateProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      LightsailCertificate.Type,
      properties,
      LightsailCertificate.AttributeNames,
      options,
    );
  }
}
