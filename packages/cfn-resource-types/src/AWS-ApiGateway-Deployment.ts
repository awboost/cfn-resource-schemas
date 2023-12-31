import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * The ``AWS::ApiGateway::Deployment`` resource deploys an API Gateway ``RestApi`` resource to a stage so that clients can call the API over the internet. The stage acts as an environment.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-deployment.html}
 */
export type ApiGatewayDeploymentProperties = {
  /**
   * The input configuration for a canary deployment.
   */
  DeploymentCanarySettings?: DeploymentCanarySettings;
  /**
   * The description for the Deployment resource to create.
   */
  Description?: string;
  /**
   * The string identifier of the associated RestApi.
   */
  RestApiId: string;
  /**
   * The description of the Stage resource for the Deployment resource to create. To specify a stage description, you must also provide a stage name.
   */
  StageDescription?: StageDescription;
  /**
   * The name of the Stage resource for the Deployment resource to create.
   */
  StageName?: string;
};
/**
 * Attribute type definition for `AWS::ApiGateway::Deployment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-deployment.html#aws-resource-apigateway-deployment-return-values}
 */
export type ApiGatewayDeploymentAttributes = {
  DeploymentId: string;
};
/**
 * Type definition for `AWS::ApiGateway::Deployment.AccessLogSetting`.
 * The ``AccessLogSetting`` property type specifies settings for logging access in this stage.
  ``AccessLogSetting`` is a property of the [StageDescription](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-deployment-stagedescription.html) property type.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-deployment-accesslogsetting.html}
 */
export type AccessLogSetting = {
  /**
   * The Amazon Resource Name (ARN) of the CloudWatch Logs log group or Kinesis Data Firehose delivery stream to receive access logs. If you specify a Kinesis Data Firehose delivery stream, the stream name must begin with ``amazon-apigateway-``.
   */
  DestinationArn?: string;
  /**
   * A single line format of the access logs of data, as specified by selected $context variables. The format must include at least ``$context.requestId``.
   */
  Format?: string;
};
/**
 * Type definition for `AWS::ApiGateway::Deployment.CanarySetting`.
 * The ``CanarySetting`` property type specifies settings for the canary deployment in this stage.
 ``CanarySetting`` is a property of the [StageDescription](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-deployment-stagedescription.html) property type.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-deployment-canarysetting.html}
 */
export type CanarySetting = {
  /**
   * The percent (0-100) of traffic diverted to a canary deployment.
   */
  PercentTraffic?: number;
  /**
   * Stage variables overridden for a canary release deployment, including new stage variables introduced in the canary. These stage variables are represented as a string-to-string map between stage variable names and their values.
   */
  StageVariableOverrides?: Record<string, string>;
  /**
   * A Boolean flag to indicate whether the canary deployment uses the stage cache or not.
   */
  UseStageCache?: boolean;
};
/**
 * Type definition for `AWS::ApiGateway::Deployment.DeploymentCanarySettings`.
 * The ``DeploymentCanarySettings`` property type specifies settings for the canary deployment.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-deployment-deploymentcanarysettings.html}
 */
export type DeploymentCanarySettings = {
  /**
   * The percentage (0.0-100.0) of traffic routed to the canary deployment.
   */
  PercentTraffic?: number;
  /**
   * A stage variable overrides used for the canary release deployment. They can override existing stage variables or add new stage variables for the canary release deployment. These stage variables are represented as a string-to-string map between stage variable names and their values.
   */
  StageVariableOverrides?: Record<string, string>;
  /**
   * A Boolean flag to indicate whether the canary release deployment uses the stage cache or not.
   */
  UseStageCache?: boolean;
};
/**
 * Type definition for `AWS::ApiGateway::Deployment.MethodSetting`.
 * The ``MethodSetting`` property type configures settings for all methods in a stage.
 The ``MethodSettings`` property of the [Amazon API Gateway Deployment StageDescription](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-deployment-stagedescription.html) property type contains a list of ``MethodSetting`` property types.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-deployment-methodsetting.html}
 */
export type MethodSetting = {
  /**
   * Specifies whether the cached responses are encrypted.
   */
  CacheDataEncrypted?: boolean;
  /**
   * Specifies the time to live (TTL), in seconds, for cached responses. The higher the TTL, the longer the response will be cached.
   */
  CacheTtlInSeconds?: number;
  /**
   * Specifies whether responses should be cached and returned for requests. A cache cluster must be enabled on the stage for responses to be cached.
   */
  CachingEnabled?: boolean;
  /**
   * Specifies whether data trace logging is enabled for this method, which affects the log entries pushed to Amazon CloudWatch Logs. This can be useful to troubleshoot APIs, but can result in logging sensitive data. We recommend that you don't enable this option for production APIs.
   */
  DataTraceEnabled?: boolean;
  /**
   * The HTTP method.
   */
  HttpMethod?: string;
  /**
   * Specifies the logging level for this method, which affects the log entries pushed to Amazon CloudWatch Logs. Valid values are ``OFF``, ``ERROR``, and ``INFO``. Choose ``ERROR`` to write only error-level entries to CloudWatch Logs, or choose ``INFO`` to include all ``ERROR`` events as well as extra informational events.
   */
  LoggingLevel?: string;
  /**
   * Specifies whether Amazon CloudWatch metrics are enabled for this method.
   */
  MetricsEnabled?: boolean;
  /**
   * The resource path for this method. Forward slashes (``/``) are encoded as ``~1`` and the initial slash must include a forward slash. For example, the path value ``/resource/subresource`` must be encoded as ``/~1resource~1subresource``. To specify the root path, use only a slash (``/``).
   */
  ResourcePath?: string;
  /**
   * Specifies the throttling burst limit.
   */
  ThrottlingBurstLimit?: number;
  /**
   * Specifies the throttling rate limit.
   */
  ThrottlingRateLimit?: number;
};
/**
 * Type definition for `AWS::ApiGateway::Deployment.StageDescription`.
 * ``StageDescription`` is a property of the [AWS::ApiGateway::Deployment](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-deployment.html) resource that configures a deployment stage.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-deployment-stagedescription.html}
 */
export type StageDescription = {
  /**
   * Specifies settings for logging access in this stage.
   */
  AccessLogSetting?: AccessLogSetting;
  /**
   * Specifies whether a cache cluster is enabled for the stage.
   */
  CacheClusterEnabled?: boolean;
  /**
   * The size of the stage's cache cluster. For more information, see [cacheClusterSize](https://docs.aws.amazon.com/apigateway/latest/api/API_CreateStage.html#apigw-CreateStage-request-cacheClusterSize) in the *API Gateway API Reference*.
   */
  CacheClusterSize?: string;
  /**
   * Indicates whether the cached responses are encrypted.
   */
  CacheDataEncrypted?: boolean;
  /**
   * The time-to-live (TTL) period, in seconds, that specifies how long API Gateway caches responses.
   */
  CacheTtlInSeconds?: number;
  /**
   * Indicates whether responses are cached and returned for requests. You must enable a cache cluster on the stage to cache responses. For more information, see [Enable API Gateway Caching in a Stage to Enhance API Performance](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-caching.html) in the *API Gateway Developer Guide*.
   */
  CachingEnabled?: boolean;
  /**
   * Specifies settings for the canary deployment in this stage.
   */
  CanarySetting?: CanarySetting;
  /**
   * The identifier of the client certificate that API Gateway uses to call your integration endpoints in the stage.
   */
  ClientCertificateId?: string;
  /**
   * Indicates whether data trace logging is enabled for methods in the stage. API Gateway pushes these logs to Amazon CloudWatch Logs.
   */
  DataTraceEnabled?: boolean;
  /**
   * A description of the purpose of the stage.
   */
  Description?: string;
  /**
   * The version identifier of the API documentation snapshot.
   */
  DocumentationVersion?: string;
  /**
   * The logging level for this method. For valid values, see the ``loggingLevel`` property of the [MethodSetting](https://docs.aws.amazon.com/apigateway/latest/api/API_MethodSetting.html) resource in the *Amazon API Gateway API Reference*.
   */
  LoggingLevel?: string;
  /**
   * Configures settings for all of the stage's methods.
   */
  MethodSettings?: MethodSetting[];
  /**
   * Indicates whether Amazon CloudWatch metrics are enabled for methods in the stage.
   */
  MetricsEnabled?: boolean;
  /**
   * An array of arbitrary tags (key-value pairs) to associate with the stage.
   */
  Tags?: Tag[];
  /**
   * The target request burst rate limit. This allows more requests through for a period of time than the target rate limit. For more information, see [Manage API Request Throttling](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.html) in the *API Gateway Developer Guide*.
   */
  ThrottlingBurstLimit?: number;
  /**
   * The target request steady-state rate limit. For more information, see [Manage API Request Throttling](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.html) in the *API Gateway Developer Guide*.
   */
  ThrottlingRateLimit?: number;
  /**
     * Specifies whether active tracing with X-ray is enabled for this stage.
     For more information, see [Trace API Gateway API Execution with X-Ray](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-xray.html) in the *API Gateway Developer Guide*.
     */
  TracingEnabled?: boolean;
  /**
   * A map that defines the stage variables. Variable names must consist of alphanumeric characters, and the values must match the following regular expression: ``[A-Za-z0-9-._~:/?#&=,]+``.
   */
  Variables?: Record<string, string>;
};
/**
 * Type definition for `AWS::ApiGateway::Deployment.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-deployment-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag
   */
  Key: string;
  /**
   * The value for the tag
   */
  Value: string;
};
/**
 * The ``AWS::ApiGateway::Deployment`` resource deploys an API Gateway ``RestApi`` resource to a stage so that clients can call the API over the internet. The stage acts as an environment.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-deployment.html}
 */
export class ApiGatewayDeployment extends $Resource<
  "AWS::ApiGateway::Deployment",
  ApiGatewayDeploymentProperties,
  ApiGatewayDeploymentAttributes
> {
  public static readonly Type = "AWS::ApiGateway::Deployment";
  public static readonly AttributeNames = ["DeploymentId" as const];
  constructor(
    logicalId: string,
    properties: ApiGatewayDeploymentProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ApiGatewayDeployment.Type,
      properties,
      ApiGatewayDeployment.AttributeNames,
      options,
    );
  }
}
