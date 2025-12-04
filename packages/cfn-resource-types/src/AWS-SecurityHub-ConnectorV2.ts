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
   * The provider configuration of the connector
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
  ConnectorStatus:
    | "CONNECTED"
    | "FAILED_TO_CONNECT"
    | "PENDING_AUTHORIZATION"
    | "PENDING_CONFIGURATION";
  /**
   * The timestamp formatted in ISO8601
   * @pattern `^(\d\d\d\d)-([0][1-9]|[1][0-2])-([0][1-9]|[1-2](\d)|[3][0-1])[T](?:([0-1](\d)|[2][0-3]):[0-5](\d):[0-5](\d)|23:59:60)(?:\.(\d)+)?([Z]|[+-](\d\d)(:?(\d\d))?)$`
   */
  CreatedAt: string;
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
 * Type definition for `AWS::SecurityHub::ConnectorV2.AuthStatus`.
 * The auth status of the connector
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-connectorv2-authstatus.html}
 */
export type AuthStatus = "ACTIVE" | "FAILED";
/**
 * Type definition for `AWS::SecurityHub::ConnectorV2.Provider`.
 * The provider configuration of the connector
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-connectorv2-provider.html}
 */
export type Provider =
  | {
      JiraCloud: {
        /**
         * The auth status of the connector
         */
        AuthStatus?: AuthStatus;
        /**
         * The authUrl of the JiraCloud connector
         * @pattern `.*\S.*`
         */
        AuthUrl?: string;
        CloudId?: string;
        Domain?: string;
        /**
         * @minLength `2`
         * @maxLength `10`
         */
        ProjectKey: string;
      };
    }
  | {
      ServiceNow: {
        /**
         * The auth status of the connector
         */
        AuthStatus?: AuthStatus;
        /**
         * @minLength `1`
         * @maxLength `128`
         */
        InstanceName: string;
        /**
         * The ARN of secrets manager containing ClientId and ClientSecret
         * @minLength `20`
         * @maxLength `2048`
         * @pattern `.*\S.*`
         */
        SecretArn: string;
      };
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
