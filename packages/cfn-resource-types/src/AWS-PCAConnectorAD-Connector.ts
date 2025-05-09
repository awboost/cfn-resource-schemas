import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::PCAConnectorAD::Connector`.
 * Represents a Connector that connects AWS PrivateCA and your directory
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-connector.html}
 */
export type PCAConnectorADConnectorProperties = {
  /**
   * @minLength `5`
   * @maxLength `200`
   * @pattern `^arn:[\w-]+:acm-pca:[\w-]+:[0-9]+:certificate-authority\/[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}$`
   */
  CertificateAuthorityArn: string;
  /**
   * @pattern `^d-[0-9a-f]{10}$`
   */
  DirectoryId: string;
  Tags?: Tags;
  VpcInformation: VpcInformation;
};
/**
 * Attribute type definition for `AWS::PCAConnectorAD::Connector`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-connector.html#aws-resource-pcaconnectorad-connector-return-values}
 */
export type PCAConnectorADConnectorAttributes = {
  /**
   * @minLength `5`
   * @maxLength `200`
   * @pattern `^arn:[\w-]+:pca-connector-ad:[\w-]+:[0-9]+:connector\/[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}$`
   */
  ConnectorArn: string;
};
/**
 * Type definition for `AWS::PCAConnectorAD::Connector.Tags`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-connector-tags.html}
 */
export type Tags = Record<string, string>;
/**
 * Type definition for `AWS::PCAConnectorAD::Connector.VpcInformation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-connector-vpcinformation.html}
 */
export type VpcInformation = {
  IpAddressType?: "IPV4" | "DUALSTACK";
  /**
   * @minLength `1`
   * @maxLength `5`
   */
  SecurityGroupIds: string[];
};
/**
 * Resource type definition for `AWS::PCAConnectorAD::Connector`.
 * Represents a Connector that connects AWS PrivateCA and your directory
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-connector.html}
 */
export class PCAConnectorADConnector extends $Resource<
  "AWS::PCAConnectorAD::Connector",
  PCAConnectorADConnectorProperties,
  PCAConnectorADConnectorAttributes
> {
  public static readonly Type = "AWS::PCAConnectorAD::Connector";
  constructor(
    logicalId: string,
    properties: PCAConnectorADConnectorProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, PCAConnectorADConnector.Type, properties, options);
  }
}
