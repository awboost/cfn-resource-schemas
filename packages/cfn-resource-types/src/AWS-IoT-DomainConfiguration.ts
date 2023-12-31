import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::IoT::DomainConfiguration`.
 * Create and manage a Domain Configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-domainconfiguration.html}
 */
export type IoTDomainConfigurationProperties = {
  AuthorizerConfig?: AuthorizerConfig;
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[\w.-]+$`
   */
  DomainConfigurationName?: string;
  DomainConfigurationStatus?: "ENABLED" | "DISABLED";
  /**
   * @minLength `1`
   * @maxLength `253`
   */
  DomainName?: string;
  /**
   * @minLength `0`
   * @maxLength `1`
   */
  ServerCertificateArns?: string[];
  ServiceType?: "DATA" | "CREDENTIAL_PROVIDER" | "JOBS";
  Tags?: Tag[];
  TlsConfig?: TlsConfig;
  /**
   * @pattern `^arn:aws(-cn|-us-gov|-iso-b|-iso)?:acm:[a-z]{2}-(gov-|iso-|isob-)?[a-z]{4,9}-\d{1}:\d{12}:certificate/[a-zA-Z0-9/-]+$`
   */
  ValidationCertificateArn?: string;
};
/**
 * Attribute type definition for `AWS::IoT::DomainConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-domainconfiguration.html#aws-resource-iot-domainconfiguration-return-values}
 */
export type IoTDomainConfigurationAttributes = {
  Arn: string;
  DomainType: "ENDPOINT" | "AWS_MANAGED" | "CUSTOMER_MANAGED";
  ServerCertificates: {}[];
};
/**
 * Type definition for `AWS::IoT::DomainConfiguration.AuthorizerConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-domainconfiguration-authorizerconfig.html}
 */
export type AuthorizerConfig = {
  AllowAuthorizerOverride?: boolean;
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[\w=,@-]+$`
   */
  DefaultAuthorizerName?: string;
};
/**
 * Type definition for `AWS::IoT::DomainConfiguration.ServerCertificateSummary`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-domainconfiguration-servercertificatesummary.html}
 */
export type ServerCertificateSummary = {
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^arn:aws(-cn|-us-gov|-iso-b|-iso)?:acm:[a-z]{2}-(gov-|iso-|isob-)?[a-z]{4,9}-\d{1}:\d{12}:certificate/[a-zA-Z0-9/-]+$`
   */
  ServerCertificateArn?: string;
  ServerCertificateStatus?: "INVALID" | "VALID";
  ServerCertificateStatusDetail?: string;
};
/**
 * Type definition for `AWS::IoT::DomainConfiguration.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-domainconfiguration-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Type definition for `AWS::IoT::DomainConfiguration.TlsConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-domainconfiguration-tlsconfig.html}
 */
export type TlsConfig = {
  /**
   * @maxLength `128`
   */
  SecurityPolicy?: string;
};
/**
 * Resource type definition for `AWS::IoT::DomainConfiguration`.
 * Create and manage a Domain Configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-domainconfiguration.html}
 */
export class IoTDomainConfiguration extends $Resource<
  "AWS::IoT::DomainConfiguration",
  IoTDomainConfigurationProperties,
  IoTDomainConfigurationAttributes
> {
  public static readonly Type = "AWS::IoT::DomainConfiguration";
  constructor(
    logicalId: string,
    properties: IoTDomainConfigurationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IoTDomainConfiguration.Type, properties, options);
  }
}
