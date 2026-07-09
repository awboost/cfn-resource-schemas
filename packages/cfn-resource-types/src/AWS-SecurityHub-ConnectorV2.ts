import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::SecurityHub::ConnectorV2
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-connectorv2.html}
 */
export type SecurityHubConnectorV2Properties = {
  /**
   * A description of the connector
   * @minLength `0`
   * @maxLength `256`
   * @pattern `.*\S.*`
   */
  Description?: string;
  /**
   * The ARN of KMS key used for the connector
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `.*\S.*`
   */
  KmsKeyArn?: string;
  /**
   * The name of the connector
   * @minLength `1`
   * @maxLength `64`
   * @pattern `.*\S.*`
   */
  Name: string;
  /**
   * The third-party provider configuration for the connector
   */
  Provider: Provider;
  /**
   * A key-value pair to associate with a resource.
   */
  Tags?: Tags;
};
/**
 * Attribute type definition for `AWS::SecurityHub::ConnectorV2`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-connectorv2.html#aws-resource-securityhub-connectorv2-return-values}
 */
export type SecurityHubConnectorV2Attributes = {
  /**
   * The ARN of the connector
   * @pattern `^arn:aws\S*:securityhub:[a-z0-9-]+:[0-9]{12}:connectorv2/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$`
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
   * The timestamp formatted in ISO8601
   * @pattern `^(\d\d\d\d)-([0][1-9]|[1][0-2])-([0][1-9]|[1-2](\d)|[3][0-1])[T](?:([0-1](\d)|[2][0-3]):[0-5](\d):[0-5](\d)|23:59:60)(?:\.(\d)+)?([Z]|[+-](\d\d)(:?(\d\d))?)$`
   */
  CreatedAt: string;
  /**
   * The enablement status of the connector
   */
  EnablementStatus: string;
  /**
   * The reason for the enablement status of the connector
   */
  EnablementStatusReason: string;
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
   * The timestamp formatted in ISO8601
   * @pattern `^(\d\d\d\d)-([0][1-9]|[1][0-2])-([0][1-9]|[1-2](\d)|[3][0-1])[T](?:([0-1](\d)|[2][0-3]):[0-5](\d):[0-5](\d)|23:59:60)(?:\.(\d)+)?([Z]|[+-](\d\d)(:?(\d\d))?)$`
   */
  LastCheckedAt: string;
  /**
   * The timestamp formatted in ISO8601
   * @pattern `^(\d\d\d\d)-([0][1-9]|[1][0-2])-([0][1-9]|[1-2](\d)|[3][0-1])[T](?:([0-1](\d)|[2][0-3]):[0-5](\d):[0-5](\d)|23:59:60)(?:\.(\d)+)?([Z]|[+-](\d\d)(:?(\d\d))?)$`
   */
  LastUpdatedAt: string;
  /**
   * The message of the connector status change
   */
  Message: string;
};
/**
 * Type definition for `AWS::SecurityHub::ConnectorV2.AzureProviderConfiguration`.
 * The configuration settings required to establish an integration between AWS Security Hub and Azure
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-connectorv2-azureproviderconfiguration.html}
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
 * Type definition for `AWS::SecurityHub::ConnectorV2.AzureScopeConfiguration`.
 * The scope configuration for an Azure connector
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-connectorv2-azurescopeconfiguration.html}
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
 * Type definition for `AWS::SecurityHub::ConnectorV2.HealthIssue`.
 * A health issue associated with the connector
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-connectorv2-healthissue.html}
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
 * Type definition for `AWS::SecurityHub::ConnectorV2.JiraCloudProviderConfiguration`.
 * The initial configuration settings required to establish an integration between Security Hub and Jira Cloud
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-connectorv2-jiracloudproviderconfiguration.html}
 */
export type JiraCloudProviderConfiguration = {
  /**
   * The project key for a Jira Cloud instance
   * @minLength `2`
   * @maxLength `10`
   */
  ProjectKey: string;
};
/**
 * Type definition for `AWS::SecurityHub::ConnectorV2.Provider`.
 * The third-party provider configuration for the connector
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-connectorv2-provider.html}
 */
export type Provider =
  | {
      /**
       * The initial configuration settings required to establish an integration between Security Hub and Jira Cloud
       */
      JiraCloud: JiraCloudProviderConfiguration;
    }
  | {
      /**
       * The initial configuration settings required to establish an integration between Security Hub and ServiceNow ITSM
       */
      ServiceNow: ServiceNowProviderConfiguration;
    }
  | {
      /**
       * The configuration settings required to establish an integration between AWS Security Hub and Azure
       */
      Azure: AzureProviderConfiguration;
    };
/**
 * Type definition for `AWS::SecurityHub::ConnectorV2.ServiceNowProviderConfiguration`.
 * The initial configuration settings required to establish an integration between Security Hub and ServiceNow ITSM
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-connectorv2-servicenowproviderconfiguration.html}
 */
export type ServiceNowProviderConfiguration = {
  /**
   * The instance name of ServiceNow ITSM
   * @minLength `1`
   * @maxLength `128`
   */
  InstanceName: string;
  /**
   * The Amazon Resource Name (ARN) of the AWS Secrets Manager secret that contains the ServiceNow credentials
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `.*\S.*`
   */
  SecretArn: string;
};
/**
 * Type definition for `AWS::SecurityHub::ConnectorV2.Tags`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-connectorv2-tags.html}
 */
export type Tags = Record<string, string>;
/**
 * Resource schema for AWS::SecurityHub::ConnectorV2
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-connectorv2.html}
 */
export class SecurityHubConnectorV2 extends $Resource<
  "AWS::SecurityHub::ConnectorV2",
  SecurityHubConnectorV2Properties,
  SecurityHubConnectorV2Attributes
> {
  public static readonly Type = "AWS::SecurityHub::ConnectorV2";
  constructor(
    logicalId: string,
    properties: SecurityHubConnectorV2Properties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SecurityHubConnectorV2.Type, properties, options);
  }
}
