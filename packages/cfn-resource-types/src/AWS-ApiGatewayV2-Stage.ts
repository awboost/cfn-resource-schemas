import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::ApiGatewayV2::Stage
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-stage.html}
 */
export type ApiGatewayV2StageProperties = {
  /**
   * Settings for logging access in this stage.
   */
  AccessLogSettings?: AccessLogSettings;
  /**
   * The API identifier.
   */
  ApiId: string;
  /**
   * Specifies whether updates to an API automatically trigger a new deployment. The default value is false.
   */
  AutoDeploy?: boolean;
  /**
   * The identifier of a client certificate for a Stage. Supported only for WebSocket APIs.
   */
  ClientCertificateId?: string;
  /**
   * The default route settings for the stage.
   */
  DefaultRouteSettings?: RouteSettings;
  /**
   * The deployment identifier for the API stage. Can't be updated if autoDeploy is enabled.
   */
  DeploymentId?: string;
  /**
   * The description for the API stage.
   */
  Description?: string;
  /**
   * Route settings for the stage.
   */
  RouteSettings?: Record<string, any>;
  /**
   * The stage name. Stage names can contain only alphanumeric characters, hyphens, and underscores, or be $default. Maximum length is 128 characters.
   */
  StageName: string;
  /**
   * A map that defines the stage variables for a Stage. Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9-._~:/?#&=,]+.
   */
  StageVariables?: Record<string, any>;
  /**
   * The collection of tags. Each tag element is associated with a given resource.
   */
  Tags?: Record<string, any>;
};
/**
 * Type definition for `AWS::ApiGatewayV2::Stage.AccessLogSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-stage-accesslogsettings.html}
 */
export type AccessLogSettings = {
  DestinationArn?: string;
  Format?: string;
};
/**
 * Type definition for `AWS::ApiGatewayV2::Stage.RouteSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-stage-routesettings.html}
 */
export type RouteSettings = {
  DataTraceEnabled?: boolean;
  DetailedMetricsEnabled?: boolean;
  LoggingLevel?: string;
  ThrottlingBurstLimit?: number;
  ThrottlingRateLimit?: number;
};
/**
 * Resource Type definition for AWS::ApiGatewayV2::Stage
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-stage.html}
 */
export class ApiGatewayV2Stage extends $Resource<
  "AWS::ApiGatewayV2::Stage",
  ApiGatewayV2StageProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::ApiGatewayV2::Stage";
  constructor(
    logicalId: string,
    properties: ApiGatewayV2StageProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ApiGatewayV2Stage.Type, properties, options);
  }
}
