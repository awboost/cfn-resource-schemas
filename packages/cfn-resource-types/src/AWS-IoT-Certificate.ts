import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = ["Arn" as const, "Id" as const];
  constructor(
    logicalId: string,
    properties: IoTCertificateProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      IoTCertificate.Type,
      properties,
      IoTCertificate.AttributeNames,
      options,
    );
  }
}
