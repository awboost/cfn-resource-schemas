import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::SecurityHub::Connector
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-connector.html}
 */
export type SecurityHubConnectorProperties = {
  /**
   * A description of the connector
   */
  Description?: string;
  /**
   * The name of the connector
   */
  Name: string;
  /**
   * The CSPM provider configuration for the connector
   */
  Provider: Provider;
  /**
   * A key-value pair to associate with a resource.
   */
  Tags?: Tags;
};
/**
 * Attribute type definition for `AWS::SecurityHub::Connector`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-connector.html#aws-resource-securityhub-connector-return-values}
 */
export type SecurityHubConnectorAttributes = {
  /**
   * The ARN of the connector
   * @pattern `^arn:aws\S*:securityhub:[a-z0-9-]+:[0-9]{12}:connector/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$`
   */
  ConnectorArn: string;
  /**
   * The ID of the connector
   * @pattern `^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$`
   */
  ConnectorId: string;
  /**
   * The status of the connector
   */
  ConnectorStatus: string;
  /**
   * The date and time for createdAt in UTC and ISO 8601 format.
   * @pattern `^(\d\d\d\d)-([0][1-9]|[1][0-2])-([0][1-9]|[1-2](\d)|[3][0-1])[T](?:([0-1](\d)|[2][0-3]):[0-5](\d):[0-5](\d)|23:59:60)(?:\.(\d)+)?([Z]|[+-](\d\d)(:?(\d\d))?)$`
   */
  CreatedAt: string;
  /**
   * The principal that created the connector
   */
  CreatedBy: string;
  /**
   * The enablement status of the connector
   */
  EnablementStatus: string;
  /**
   * The list of health issues associated with the connector
   */
  Issues: {
    /**
     * The code identifying the type of health issue
     */
    Code: string;
    /**
     * The message describing the health issue
     */
    Message: string;
  }[];
  /**
   * The date and time for lastCheckedAt in UTC and ISO 8601 format.
   * @pattern `^(\d\d\d\d)-([0][1-9]|[1][0-2])-([0][1-9]|[1-2](\d)|[3][0-1])[T](?:([0-1](\d)|[2][0-3]):[0-5](\d):[0-5](\d)|23:59:60)(?:\.(\d)+)?([Z]|[+-](\d\d)(:?(\d\d))?)$`
   */
  LastCheckedAt: string;
  /**
   * The date and time for lastUpdatedAt in UTC and ISO 8601 format.
   * @pattern `^(\d\d\d\d)-([0][1-9]|[1][0-2])-([0][1-9]|[1-2](\d)|[3][0-1])[T](?:([0-1](\d)|[2][0-3]):[0-5](\d):[0-5](\d)|23:59:60)(?:\.(\d)+)?([Z]|[+-](\d\d)(:?(\d\d))?)$`
   */
  LastUpdatedAt: string;
  /**
   * The message associated with the connector status change
   */
  Message: string;
};
/**
 * Type definition for `AWS::SecurityHub::Connector.AzureProviderConfiguration`.
 * The configuration settings for an Azure CSPM provider
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-connector-azureproviderconfiguration.html}
 */
export type AzureProviderConfiguration = {
  /**
   * The ARN of the AWS Config connector used for the Azure integration
   */
  AWSConfigConnectorArn: string;
  /**
   * The list of Azure regions to include in the connector scope
   * @minLength `1`
   * @maxLength `100`
   */
  AzureRegions: string[];
  /**
   * The scope configuration for an Azure connector
   */
  ScopeConfiguration: AzureScopeConfiguration;
};
/**
 * Type definition for `AWS::SecurityHub::Connector.AzureScopeConfiguration`.
 * The scope configuration for an Azure connector
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-connector-azurescopeconfiguration.html}
 */
export type AzureScopeConfiguration = {
  /**
   * The scope type for the Azure connector
   */
  ScopeType: "TENANT" | "SUBSCRIPTION";
  /**
   * The list of scope values for the Azure connector
   * @minLength `0`
   * @maxLength `100`
   */
  ScopeValues?: string[];
};
/**
 * Type definition for `AWS::SecurityHub::Connector.HealthIssue`.
 * A health issue associated with the connector
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-connector-healthissue.html}
 */
export type HealthIssue = {
  /**
   * The code identifying the type of health issue
   */
  Code: string;
  /**
   * The message describing the health issue
   */
  Message: string;
};
/**
 * Type definition for `AWS::SecurityHub::Connector.Provider`.
 * The CSPM provider configuration for the connector
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-connector-provider.html}
 */
export type Provider = {
  /**
   * The configuration settings for an Azure CSPM provider
   */
  Azure: AzureProviderConfiguration;
};
/**
 * Type definition for `AWS::SecurityHub::Connector.Tags`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-connector-tags.html}
 */
export type Tags = Record<string, string>;
/**
 * Resource schema for AWS::SecurityHub::Connector
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-connector.html}
 */
export class SecurityHubConnector extends $Resource<
  "AWS::SecurityHub::Connector",
  SecurityHubConnectorProperties,
  SecurityHubConnectorAttributes
> {
  public static readonly Type = "AWS::SecurityHub::Connector";
  constructor(
    logicalId: string,
    properties: SecurityHubConnectorProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SecurityHubConnector.Type, properties, options);
  }
}
