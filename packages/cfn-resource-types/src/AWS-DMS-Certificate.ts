import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::DMS::Certificate
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-certificate.html}
 */
export type DMSCertificateProperties = {
  CertificateIdentifier?: string;
  CertificatePem?: string;
  CertificateWallet?: string;
};
/**
 * Attribute type definition for `AWS::DMS::Certificate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-certificate.html#aws-resource-dms-certificate-return-values}
 */
export type DMSCertificateAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::DMS::Certificate
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-certificate.html}
 */
export class DMSCertificate extends $Resource<
  "AWS::DMS::Certificate",
  DMSCertificateProperties,
  DMSCertificateAttributes
> {
  public static readonly Type = "AWS::DMS::Certificate";
  constructor(
    logicalId: string,
    properties: DMSCertificateProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DMSCertificate.Type, properties, options);
  }
}
