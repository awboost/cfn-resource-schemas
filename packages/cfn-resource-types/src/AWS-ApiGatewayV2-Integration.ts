import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
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
  constructor(
    logicalId: string,
    properties: ApiGatewayV2IntegrationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ApiGatewayV2Integration.Type, properties, options);
  }
}
