import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Use the AWS::IoT::Certificate resource to declare an AWS IoT X.509 certificate.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-certificate.html}
 */
export type IoTCertificateProperties = {
  /**
   * @minLength `1`
   * @maxLength `65536`
   */
  CACertificatePem?: string;
  CertificateMode?: "DEFAULT" | "SNI_ONLY";
  /**
   * @minLength `1`
   * @maxLength `65536`
   */
  CertificatePem?: string;
  CertificateSigningRequest?: string;
  Status:
    | "ACTIVE"
    | "INACTIVE"
    | "REVOKED"
    | "PENDING_TRANSFER"
    | "PENDING_ACTIVATION";
};
/**
 * Attribute type definition for `AWS::IoT::Certificate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-certificate.html#aws-resource-iot-certificate-return-values}
 */
export type IoTCertificateAttributes = {
  Arn: string;
  Id: string;
};
/**
 * Use the AWS::IoT::Certificate resource to declare an AWS IoT X.509 certificate.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-certificate.html}
 */
export class IoTCertificate extends $Resource<
  "AWS::IoT::Certificate",
  IoTCertificateProperties,
  IoTCertificateAttributes
> {
  public static readonly Type = "AWS::IoT::Certificate";
  constructor(
    logicalId: string,
    properties: IoTCertificateProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IoTCertificate.Type, properties, options);
  }
}
