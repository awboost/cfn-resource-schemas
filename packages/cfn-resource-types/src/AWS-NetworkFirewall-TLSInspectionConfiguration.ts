import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for AWS::NetworkFirewall::TLSInspectionConfiguration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-tlsinspectionconfiguration.html}
 */
export type NetworkFirewallTLSInspectionConfigurationProperties = {
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^.*$`
   */
  Description?: string;
  TLSInspectionConfiguration: TLSInspectionConfiguration;
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9-]+$`
   */
  TLSInspectionConfigurationName: string;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::NetworkFirewall::TLSInspectionConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-tlsinspectionconfiguration.html#aws-resource-networkfirewall-tlsinspectionconfiguration-return-values}
 */
export type NetworkFirewallTLSInspectionConfigurationAttributes = {
  /**
   * A resource ARN.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^(arn:aws.*)$`
   */
  TLSInspectionConfigurationArn: string;
  /**
   * @minLength `36`
   * @maxLength `36`
   * @pattern `^([0-9a-f]{8})-([0-9a-f]{4}-){3}([0-9a-f]{12})$`
   */
  TLSInspectionConfigurationId: string;
};
/**
 * Type definition for `AWS::NetworkFirewall::TLSInspectionConfiguration.Address`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-tlsinspectionconfiguration-address.html}
 */
export type Address = {
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^([a-fA-F\d:\.]+/\d{1,3})$`
   */
  AddressDefinition: string;
};
/**
 * Type definition for `AWS::NetworkFirewall::TLSInspectionConfiguration.PortRange`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-tlsinspectionconfiguration-portrange.html}
 */
export type PortRange = {
  /**
   * @min `0`
   * @max `65535`
   */
  FromPort: number;
  /**
   * @min `0`
   * @max `65535`
   */
  ToPort: number;
};
/**
 * Type definition for `AWS::NetworkFirewall::TLSInspectionConfiguration.RevokedStatusAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-tlsinspectionconfiguration-revokedstatusaction.html}
 */
export type RevokedStatusAction = "PASS" | "DROP" | "REJECT";
/**
 * Type definition for `AWS::NetworkFirewall::TLSInspectionConfiguration.ServerCertificate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-tlsinspectionconfiguration-servercertificate.html}
 */
export type ServerCertificate = {
  /**
   * A resource ARN.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^(arn:aws.*)$`
   */
  ResourceArn?: string;
};
/**
 * Type definition for `AWS::NetworkFirewall::TLSInspectionConfiguration.ServerCertificateConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-tlsinspectionconfiguration-servercertificateconfiguration.html}
 */
export type ServerCertificateConfiguration = {
  /**
   * A resource ARN.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^(arn:aws.*)$`
   */
  CertificateAuthorityArn?: string;
  CheckCertificateRevocationStatus?: {
    RevokedStatusAction?: RevokedStatusAction;
    UnknownStatusAction?: UnknownStatusAction;
  };
  Scopes?: ServerCertificateScope[];
  ServerCertificates?: ServerCertificate[];
};
/**
 * Type definition for `AWS::NetworkFirewall::TLSInspectionConfiguration.ServerCertificateScope`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-tlsinspectionconfiguration-servercertificatescope.html}
 */
export type ServerCertificateScope = {
  DestinationPorts?: PortRange[];
  Destinations?: Address[];
  Protocols?: number[];
  SourcePorts?: PortRange[];
  Sources?: Address[];
};
/**
 * Type definition for `AWS::NetworkFirewall::TLSInspectionConfiguration.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-tlsinspectionconfiguration-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^.*$`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `255`
   * @pattern `^.*$`
   */
  Value: string;
};
/**
 * Type definition for `AWS::NetworkFirewall::TLSInspectionConfiguration.TLSInspectionConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-tlsinspectionconfiguration-tlsinspectionconfiguration.html}
 */
export type TLSInspectionConfiguration = {
  ServerCertificateConfigurations?: ServerCertificateConfiguration[];
};
/**
 * Type definition for `AWS::NetworkFirewall::TLSInspectionConfiguration.UnknownStatusAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-tlsinspectionconfiguration-unknownstatusaction.html}
 */
export type UnknownStatusAction = "PASS" | "DROP" | "REJECT";
/**
 * Resource type definition for AWS::NetworkFirewall::TLSInspectionConfiguration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-tlsinspectionconfiguration.html}
 */
export class NetworkFirewallTLSInspectionConfiguration extends $Resource<
  "AWS::NetworkFirewall::TLSInspectionConfiguration",
  NetworkFirewallTLSInspectionConfigurationProperties,
  NetworkFirewallTLSInspectionConfigurationAttributes
> {
  public static readonly Type =
    "AWS::NetworkFirewall::TLSInspectionConfiguration";
  constructor(
    logicalId: string,
    properties: NetworkFirewallTLSInspectionConfigurationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      NetworkFirewallTLSInspectionConfiguration.Type,
      properties,
      options,
    );
  }
}
