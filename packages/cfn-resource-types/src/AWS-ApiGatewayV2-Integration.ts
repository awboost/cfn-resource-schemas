import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::ApiGatewayV2::Integration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-integration.html}
 */
export type ApiGatewayV2IntegrationProperties = {
  ApiId: string;
  ConnectionId?: string;
  ConnectionType?: string;
  ContentHandlingStrategy?: string;
  CredentialsArn?: string;
  Description?: string;
  IntegrationMethod?: string;
  IntegrationSubtype?: string;
  IntegrationType: string;
  IntegrationUri?: string;
  PassthroughBehavior?: string;
  PayloadFormatVersion?: string;
  RequestParameters?: Record<string, any>;
  RequestTemplates?: Record<string, any>;
  ResponseParameters?: Record<string, any>;
  TemplateSelectionExpression?: string;
  TimeoutInMillis?: number;
  TlsConfig?: TlsConfig;
};
/**
 * Attribute type definition for `AWS::ApiGatewayV2::Integration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-integration.html#aws-resource-apigatewayv2-integration-return-values}
 */
export type ApiGatewayV2IntegrationAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::ApiGatewayV2::Integration.TlsConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-integration-tlsconfig.html}
 */
export type TlsConfig = {
  ServerNameToVerify?: string;
};
/**
 * Resource Type definition for AWS::ApiGatewayV2::Integration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-integration.html}
 */
export class ApiGatewayV2Integration extends $Resource<
  "AWS::ApiGatewayV2::Integration",
  ApiGatewayV2IntegrationProperties,
  ApiGatewayV2IntegrationAttributes
> {
  public static readonly Type = "AWS::ApiGatewayV2::Integration";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: ApiGatewayV2IntegrationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ApiGatewayV2Integration.Type,
      properties,
      ApiGatewayV2Integration.AttributeNames,
      options,
    );
  }
}
