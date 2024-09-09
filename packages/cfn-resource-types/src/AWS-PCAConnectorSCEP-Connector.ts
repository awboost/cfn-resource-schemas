import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::PCAConnectorSCEP::Connector`.
 * Represents a Connector that allows certificate issuance through Simple Certificate Enrollment Protocol (SCEP)
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorscep-connector.html}
 */
export type PCAConnectorSCEPConnectorProperties = {
  /**
   * @minLength `5`
   * @maxLength `200`
   * @pattern `^arn:aws(-[a-z]+)*:acm-pca:[a-z]+(-[a-z]+)+-[1-9]\d*:\d{12}:certificate-authority\/[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}$`
   */
  CertificateAuthorityArn: string;
  MobileDeviceManagement?: MobileDeviceManagement;
  Tags?: Tags;
};
/**
 * Attribute type definition for `AWS::PCAConnectorSCEP::Connector`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorscep-connector.html#aws-resource-pcaconnectorscep-connector-return-values}
 */
export type PCAConnectorSCEPConnectorAttributes = {
  /**
   * @minLength `5`
   * @maxLength `200`
   * @pattern `^arn:aws(-[a-z]+)*:pca-connector-scep:[a-z]+(-[a-z]+)+-[1-9]\d*:\d{12}:connector\/[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}$`
   */
  ConnectorArn: string;
  /**
   * @minLength `5`
   * @maxLength `200`
   */
  Endpoint: string;
  OpenIdConfiguration: {
    Audience: string;
    Issuer: string;
    Subject: string;
  };
  Type: ConnectorType;
};
/**
 * Type definition for `AWS::PCAConnectorSCEP::Connector.ConnectorType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorscep-connector-connectortype.html}
 */
export type ConnectorType = "GENERAL_PURPOSE" | "INTUNE";
/**
 * Type definition for `AWS::PCAConnectorSCEP::Connector.IntuneConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorscep-connector-intuneconfiguration.html}
 */
export type IntuneConfiguration = {
  /**
   * @minLength `15`
   * @maxLength `100`
   * @pattern `^[a-zA-Z0-9]{2,15}-[a-zA-Z0-9]{2,15}-[a-zA-Z0-9]{2,15}-[a-zA-Z0-9]{2,15}-[a-zA-Z0-9]{2,15}$`
   */
  AzureApplicationId: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9._-]+$`
   */
  Domain: string;
};
/**
 * Type definition for `AWS::PCAConnectorSCEP::Connector.MobileDeviceManagement`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorscep-connector-mobiledevicemanagement.html}
 */
export type MobileDeviceManagement = {
  Intune: IntuneConfiguration;
};
/**
 * Type definition for `AWS::PCAConnectorSCEP::Connector.OpenIdConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorscep-connector-openidconfiguration.html}
 */
export type OpenIdConfiguration = {
  Audience?: string;
  Issuer?: string;
  Subject?: string;
};
/**
 * Type definition for `AWS::PCAConnectorSCEP::Connector.Tags`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorscep-connector-tags.html}
 */
export type Tags = Record<string, string>;
/**
 * Resource type definition for `AWS::PCAConnectorSCEP::Connector`.
 * Represents a Connector that allows certificate issuance through Simple Certificate Enrollment Protocol (SCEP)
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorscep-connector.html}
 */
export class PCAConnectorSCEPConnector extends $Resource<
  "AWS::PCAConnectorSCEP::Connector",
  PCAConnectorSCEPConnectorProperties,
  PCAConnectorSCEPConnectorAttributes
> {
  public static readonly Type = "AWS::PCAConnectorSCEP::Connector";
  constructor(
    logicalId: string,
    properties: PCAConnectorSCEPConnectorProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, PCAConnectorSCEPConnector.Type, properties, options);
  }
}
