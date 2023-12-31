import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::ApiGatewayV2::Stage
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-stage.html}
 */
export type ApiGatewayV2StageProperties = {
  AccessLogSettings?: AccessLogSettings;
  AccessPolicyId?: string;
  ApiId: string;
  AutoDeploy?: boolean;
  ClientCertificateId?: string;
  DefaultRouteSettings?: RouteSettings;
  DeploymentId?: string;
  Description?: string;
  RouteSettings?: Record<string, any>;
  StageName: string;
  StageVariables?: Record<string, any>;
  Tags?: Record<string, any>;
};
/**
 * Attribute type definition for `AWS::ApiGatewayV2::Stage`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-stage.html#aws-resource-apigatewayv2-stage-return-values}
 */
export type ApiGatewayV2StageAttributes = {
  Id: string;
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
  ApiGatewayV2StageAttributes
> {
  public static readonly Type = "AWS::ApiGatewayV2::Stage";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: ApiGatewayV2StageProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ApiGatewayV2Stage.Type,
      properties,
      ApiGatewayV2Stage.AttributeNames,
      options,
    );
  }
}
