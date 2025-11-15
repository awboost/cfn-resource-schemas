import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The ``AWS::ApiGateway::Stage`` resource creates a stage for a deployment.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-stage.html}
 */
export type ApiGatewayStageProperties = {
  /**
     * The ``AccessLogSetting`` property type specifies settings for logging access in this stage.
     ``AccessLogSetting`` is a property of the [AWS::ApiGateway::Stage](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-stage.html) resource.
     */
  AccessLogSetting?: AccessLogSetting;
  CacheClusterEnabled?: boolean;
  CacheClusterSize?: string;
  CanarySetting?: CanarySetting;
  ClientCertificateId?: string;
  DeploymentId?: string;
  Description?: string;
  DocumentationVersion?: string;
  MethodSettings?: MethodSetting[];
  RestApiId: string;
  StageName?: string;
  Tags?: Tag[];
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
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-stage-canarysetting.html}
 */
export type CanarySetting = {
  DeploymentId?: string;
  /**
   * @min `0`
   * @max `100`
   */
  PercentTraffic?: number;
  StageVariableOverrides?: Record<string, string>;
  UseStageCache?: boolean;
};
/**
 * Type definition for `AWS::ApiGateway::Stage.MethodSetting`.
 * The ``MethodSetting`` property type configures settings for all methods in a stage.
 The ``MethodSettings`` property of the ``AWS::ApiGateway::Stage`` resource contains a list of ``MethodSetting`` property types.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-stage-methodsetting.html}
 */
export type MethodSetting = {
  CacheDataEncrypted?: boolean;
  CacheTtlInSeconds?: number;
  CachingEnabled?: boolean;
  DataTraceEnabled?: boolean;
  /**
   * The HTTP method. To apply settings to multiple resources and methods, specify an asterisk (``*``) for the ``HttpMethod`` and ``/*`` for the ``ResourcePath``. This parameter is required when you specify a ``MethodSetting``.
   */
  HttpMethod?: string;
  LoggingLevel?: string;
  MetricsEnabled?: boolean;
  /**
   * The resource path for this method. Forward slashes (``/``) are encoded as ``~1`` and the initial slash must include a forward slash. For example, the path value ``/resource/subresource`` must be encoded as ``/~1resource~1subresource``. To specify the root path, use only a slash (``/``). To apply settings to multiple resources and methods, specify an asterisk (``*``) for the ``HttpMethod`` and ``/*`` for the ``ResourcePath``. This parameter is required when you specify a ``MethodSetting``.
   */
  ResourcePath?: string;
  /**
   * @min `0`
   */
  ThrottlingBurstLimit?: number;
  /**
   * @min `0`
   */
  ThrottlingRateLimit?: number;
};
/**
 * Type definition for `AWS::ApiGateway::Stage.Tag`.
 * An array of key-value pairs to apply to this resource.
 For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-stage-tag.html}
 */
export type Tag = {
  /**
   * A string you can use to assign a value. The combination of tag keys and values can help you organize and categorize your resources.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the specified tag key.
   * @minLength `0`
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
  constructor(
    logicalId: string,
    properties: ApiGatewayStageProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ApiGatewayStage.Type, properties, options);
  }
}
