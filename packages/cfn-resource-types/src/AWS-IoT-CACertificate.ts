import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::IoT::CACertificate`.
 * Registers a CA Certificate in IoT.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-cacertificate.html}
 */
export type IoTCACertificateProperties = {
  AutoRegistrationStatus?: "ENABLE" | "DISABLE";
  /**
   * @minLength `1`
   * @maxLength `65536`
   * @pattern `[\s\S]*`
   */
  CACertificatePem: string;
  CertificateMode?: "DEFAULT" | "SNI_ONLY";
  RegistrationConfig?: RegistrationConfig;
  RemoveAutoRegistration?: boolean;
  Status: "ACTIVE" | "INACTIVE";
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
  /**
   * The private key verification certificate.
   * @minLength `1`
   * @maxLength `65536`
   * @pattern `[\s\S]*`
   */
  VerificationCertificatePem?: string;
};
/**
 * Attribute type definition for `AWS::IoT::CACertificate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-cacertificate.html#aws-resource-iot-cacertificate-return-values}
 */
export type IoTCACertificateAttributes = {
  Arn: string;
  Id: string;
};
/**
 * Type definition for `AWS::IoT::CACertificate.RegistrationConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-cacertificate-registrationconfig.html}
 */
export type RegistrationConfig = {
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `arn:(aws[a-zA-Z-]*)?:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+`
   */
  RoleArn?: string;
  /**
   * @minLength `0`
   * @maxLength `10240`
   * @pattern `[\s\S]*`
   */
  TemplateBody?: string;
  /**
   * @minLength `1`
   * @maxLength `36`
   * @pattern `^[0-9A-Za-z_-]+$`
   */
  TemplateName?: string;
};
/**
 * Type definition for `AWS::IoT::CACertificate.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-cacertificate-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `127`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `255`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::IoT::CACertificate`.
 * Registers a CA Certificate in IoT.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-cacertificate.html}
 */
export class IoTCACertificate extends $Resource<
  "AWS::IoT::CACertificate",
  IoTCACertificateProperties,
  IoTCACertificateAttributes
> {
  public static readonly Type = "AWS::IoT::CACertificate";
  constructor(
    logicalId: string,
    properties: IoTCACertificateProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IoTCACertificate.Type, properties, options);
  }
}
