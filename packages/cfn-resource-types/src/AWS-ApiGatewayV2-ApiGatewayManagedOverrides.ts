import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::ApiGatewayV2::ApiGatewayManagedOverrides
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-apigatewaymanagedoverrides.html}
 */
export type ApiGatewayV2ApiGatewayManagedOverridesProperties = {
  ApiId: string;
  Integration?: IntegrationOverrides;
  Route?: RouteOverrides;
  Stage?: StageOverrides;
};
/**
 * Attribute type definition for `AWS::ApiGatewayV2::ApiGatewayManagedOverrides`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-apigatewaymanagedoverrides.html#aws-resource-apigatewayv2-apigatewaymanagedoverrides-return-values}
 */
export type ApiGatewayV2ApiGatewayManagedOverridesAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::ApiGatewayV2::ApiGatewayManagedOverrides.AccessLogSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-apigatewaymanagedoverrides-accesslogsettings.html}
 */
export type AccessLogSettings = {
  DestinationArn?: string;
  Format?: string;
};
/**
 * Type definition for `AWS::ApiGatewayV2::ApiGatewayManagedOverrides.IntegrationOverrides`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-apigatewaymanagedoverrides-integrationoverrides.html}
 */
export type IntegrationOverrides = {
  Description?: string;
  IntegrationMethod?: string;
  PayloadFormatVersion?: string;
  TimeoutInMillis?: number;
};
/**
 * Type definition for `AWS::ApiGatewayV2::ApiGatewayManagedOverrides.RouteOverrides`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-apigatewaymanagedoverrides-routeoverrides.html}
 */
export type RouteOverrides = {
  AuthorizationScopes?: string[];
  AuthorizationType?: string;
  AuthorizerId?: string;
  OperationName?: string;
  Target?: string;
};
/**
 * Type definition for `AWS::ApiGatewayV2::ApiGatewayManagedOverrides.RouteSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-apigatewaymanagedoverrides-routesettings.html}
 */
export type RouteSettings = {
  DataTraceEnabled?: boolean;
  DetailedMetricsEnabled?: boolean;
  LoggingLevel?: string;
  ThrottlingBurstLimit?: number;
  ThrottlingRateLimit?: number;
};
/**
 * Type definition for `AWS::ApiGatewayV2::ApiGatewayManagedOverrides.StageOverrides`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-apigatewaymanagedoverrides-stageoverrides.html}
 */
export type StageOverrides = {
  AccessLogSettings?: AccessLogSettings;
  AutoDeploy?: boolean;
  DefaultRouteSettings?: RouteSettings;
  Description?: string;
  RouteSettings?: Record<string, any>;
  StageVariables?: Record<string, any>;
};
/**
 * Resource Type definition for AWS::ApiGatewayV2::ApiGatewayManagedOverrides
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-apigatewaymanagedoverrides.html}
 */
export class ApiGatewayV2ApiGatewayManagedOverrides extends $Resource<
  "AWS::ApiGatewayV2::ApiGatewayManagedOverrides",
  ApiGatewayV2ApiGatewayManagedOverridesProperties,
  ApiGatewayV2ApiGatewayManagedOverridesAttributes
> {
  public static readonly Type = "AWS::ApiGatewayV2::ApiGatewayManagedOverrides";
  constructor(
    logicalId: string,
    properties: ApiGatewayV2ApiGatewayManagedOverridesProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ApiGatewayV2ApiGatewayManagedOverrides.Type,
      properties,
      options,
    );
  }
}
