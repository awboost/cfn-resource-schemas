import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Config::Connector
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-connector.html}
 */
export type ConfigConnectorProperties = {
  /**
   * The configuration for the connector that specifies the third-party cloud provider connection details.
   */
  ConnectorConfiguration: ConnectorConfiguration;
  /**
   * The tags for the connector.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Config::Connector`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-connector.html#aws-resource-config-connector-return-values}
 */
export type ConfigConnectorAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the connector.
   */
  Arn: string;
  /**
   * The time at which the connector was created.
   */
  CreatedTime: string;
  /**
   * The name of the connector. AWS Config automatically assigns the name when creating the Connector.
   * @minLength `1`
   * @maxLength `256`
   */
  Name: string;
};
/**
 * Type definition for `AWS::Config::Connector.AzureConnectorConfiguration`.
 * Configuration for connecting to Microsoft Azure.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-connector-azureconnectorconfiguration.html}
 */
export type AzureConnectorConfiguration = {
  /**
   * The Azure client (application) identifier.
   * @minLength `1`
   * @maxLength `128`
   */
  ClientIdentifier: string;
  /**
   * The Azure tenant identifier.
   * @minLength `1`
   * @maxLength `128`
   */
  TenantIdentifier: string;
};
/**
 * Type definition for `AWS::Config::Connector.ConnectorConfiguration`.
 * The configuration for the connector. Specify the third-party cloud provider configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-connector-connectorconfiguration.html}
 */
export type ConnectorConfiguration = {
  /**
   * The configuration for connecting to Microsoft Azure.
   */
  Azure?: AzureConnectorConfiguration;
};
/**
 * Type definition for `AWS::Config::Connector.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-connector-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::Config::Connector
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-connector.html}
 */
export class ConfigConnector extends $Resource<
  "AWS::Config::Connector",
  ConfigConnectorProperties,
  ConfigConnectorAttributes
> {
  public static readonly Type = "AWS::Config::Connector";
  constructor(
    logicalId: string,
    properties: ConfigConnectorProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ConfigConnector.Type, properties, options);
  }
}
