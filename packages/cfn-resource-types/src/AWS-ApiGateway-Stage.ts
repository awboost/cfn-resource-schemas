import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * The ``AWS::ApiGateway::Stage`` resource creates a stage for a deployment.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-stage.html}
 */
export type ApiGatewayStageProperties = {
  /**
   * Access log settings, including the access log format and access log destination ARN.
   */
  AccessLogSetting?: AccessLogSetting;
  /**
   * Specifies whether a cache cluster is enabled for the stage.
   */
  CacheClusterEnabled?: boolean;
  /**
   * The stage's cache capacity in GB. For more information about choosing a cache size, see [Enabling API caching to enhance responsiveness](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-caching.html).
   */
  CacheClusterSize?: string;
  /**
   * Settings for the canary deployment in this stage.
   */
  CanarySetting?: CanarySetting;
  /**
   * The identifier of a client certificate for an API stage.
   */
  ClientCertificateId?: string;
  /**
   * The identifier of the Deployment that the stage points to.
   */
  DeploymentId?: string;
  /**
   * The stage's description.
   */
  Description?: string;
  /**
   * The version of the associated API documentation.
   */
  DocumentationVersion?: string;
  /**
   * A map that defines the method settings for a Stage resource. Keys (designated as ``/{method_setting_key`` below) are method paths defined as ``{resource_path}/{http_method}`` for an individual method override, or ``/\/‍*\*`` for overriding all methods in the stage.
   */
  MethodSettings?: MethodSetting[];
  /**
   * The string identifier of the associated RestApi.
   */
  RestApiId: string;
  /**
   * The name of the stage is the first path segment in the Uniform Resource Identifier (URI) of a call to API Gateway. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.
   */
  StageName?: string;
  /**
   * The collection of tags. Each tag element is associated with a given resource.
   */
  Tags?: Tag[];
  /**
   * Specifies whether active tracing with X-ray is enabled for the Stage.
   */
  TracingEnabled?: boolean;
  /**
   * A map (string-to-string map) that defines the stage variables, where the variable name is the key and the variable value is the value. Variable names are limited to alphanumeric characters. Values must match the following regular expression: ``[A-Za-z0-9-._~:/?#&=,]+``.
   */
  Variables?: Record<string, string>;
};
/**
 * Type definition for `AWS::ApiGateway::Stage.AccessLogSetting`.
 * The ``AccessLogSetting`` property type specifies settings for logging access in this stage.
  ``AccessLogSetting`` is a property of the [AWS::ApiGateway::Stage](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-stage.html) resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-stage-accesslogsetting.html}
 */
export type AccessLogSetting = {
  /**
   * The Amazon Resource Name (ARN) of the CloudWatch Logs log group or Kinesis Data Firehose delivery stream to receive access logs. If you specify a Kinesis Data Firehose delivery stream, the stream name must begin with ``amazon-apigateway-``. This parameter is required to enable access logging.
   */
  DestinationArn?: string;
  /**
   * A single line format of the access logs of data, as specified by selected [$context variables](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html#context-variable-reference). The format must include at least ``$context.requestId``. This parameter is required to enable access logging.
   */
  Format?: string;
};
/**
 * Type definition for `AWS::ApiGateway::Stage.CanarySetting`.
 * Configuration settings of a canary deployment.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-stage-canarysetting.html}
 */
export type CanarySetting = {
  /**
   * The ID of the canary deployment.
   */
  DeploymentId?: string;
  /**
   * The percent (0-100) of traffic diverted to a canary deployment.
   * @max `100`
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
 * Type definition for `AWS::ApiGateway::Stage.MethodSetting`.
 * The ``MethodSetting`` property type configures settings for all methods in a stage.
 The ``MethodSettings`` property of the ``AWS::ApiGateway::Stage`` resource contains a list of ``MethodSetting`` property types.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-stage-methodsetting.html}
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
   * The HTTP method. To apply settings to multiple resources and methods, specify an asterisk (``*``) for the ``HttpMethod`` and ``/*`` for the ``ResourcePath``. This parameter is required when you specify a ``MethodSetting``.
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
   * The resource path for this method. Forward slashes (``/``) are encoded as ``~1`` and the initial slash must include a forward slash. For example, the path value ``/resource/subresource`` must be encoded as ``/~1resource~1subresource``. To specify the root path, use only a slash (``/``). To apply settings to multiple resources and methods, specify an asterisk (``*``) for the ``HttpMethod`` and ``/*`` for the ``ResourcePath``. This parameter is required when you specify a ``MethodSetting``.
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
 * Type definition for `AWS::ApiGateway::Stage.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-stage-tag.html}
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
   * @maxLength `256`
   */
  Value: string;
};
/**
 * The ``AWS::ApiGateway::Stage`` resource creates a stage for a deployment.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-stage.html}
 */
export class ApiGatewayStage extends $Resource<
  "AWS::ApiGateway::Stage",
  ApiGatewayStageProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::ApiGateway::Stage";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: ApiGatewayStageProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ApiGatewayStage.Type,
      properties,
      ApiGatewayStage.AttributeNames,
      options,
    );
  }
}
