import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::AppFlow::Connector
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connector.html}
 */
export type AppFlowConnectorProperties = {
  /**
   *  The name of the connector. The name is unique for each ConnectorRegistration in your AWS account.
   * @maxLength `512`
   * @pattern `[a-zA-Z0-9][\w!@#.-]+`
   */
  ConnectorLabel?: string;
  /**
   * Contains information about the configuration of the connector being registered.
   */
  ConnectorProvisioningConfig: ConnectorProvisioningConfig;
  /**
   * The provisioning type of the connector. Currently the only supported value is LAMBDA.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `[a-zA-Z0-9][\w!@#.-]+`
   */
  ConnectorProvisioningType: string;
  /**
   * A description about the connector that's being registered.
   * @maxLength `2048`
   * @pattern `[\s\w/!@#+=.-]*`
   */
  Description?: string;
};
/**
 * Attribute type definition for `AWS::AppFlow::Connector`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connector.html#aws-resource-appflow-connector-return-values}
 */
export type AppFlowConnectorAttributes = {
  /**
   *  The arn of the connector. The arn is unique for each ConnectorRegistration in your AWS account.
   * @maxLength `512`
   * @pattern `arn:*:appflow:.*:[0-9]+:.*`
   */
  ConnectorArn: string;
};
/**
 * Type definition for `AWS::AppFlow::Connector.ConnectorProvisioningConfig`.
 * Contains information about the configuration of the connector being registered.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connector-connectorprovisioningconfig.html}
 */
export type ConnectorProvisioningConfig = {
  /**
   * Contains information about the configuration of the lambda which is being registered as the connector.
   */
  Lambda?: LambdaConnectorProvisioningConfig;
};
/**
 * Type definition for `AWS::AppFlow::Connector.LambdaConnectorProvisioningConfig`.
 * Contains information about the configuration of the lambda which is being registered as the connector.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connector-lambdaconnectorprovisioningconfig.html}
 */
export type LambdaConnectorProvisioningConfig = {
  /**
   * Lambda ARN of the connector being registered.
   * @maxLength `512`
   * @pattern `arn:*:.*:.*:[0-9]+:.*`
   */
  LambdaArn: string;
};
/**
 * Resource schema for AWS::AppFlow::Connector
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connector.html}
 */
export class AppFlowConnector extends $Resource<
  "AWS::AppFlow::Connector",
  AppFlowConnectorProperties,
  AppFlowConnectorAttributes
> {
  public static readonly Type = "AWS::AppFlow::Connector";
  constructor(
    logicalId: string,
    properties: AppFlowConnectorProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AppFlowConnector.Type, properties, options);
  }
}
