import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The ``AWS::ApiGateway::Method`` resource creates API Gateway methods that define the parameters and body that clients must send in their requests.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-method.html}
 */
export type ApiGatewayMethodProperties = {
  ApiKeyRequired?: boolean;
  AuthorizationScopes?: string[];
  /**
     * The method's authorization type. This parameter is required. For valid values, see [Method](https://docs.aws.amazon.com/apigateway/latest/api/API_Method.html) in the *API Gateway API Reference*.
      If you specify the ``AuthorizerId`` property, specify ``CUSTOM`` or ``COGNITO_USER_POOLS`` for this property.
     */
  AuthorizationType?: string;
  AuthorizerId?: string;
  HttpMethod: string;
  /**
   * ``Integration`` is a property of the [AWS::ApiGateway::Method](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-method.html) resource that specifies information about the target backend that a method calls.
   */
  Integration?: Integration;
  MethodResponses?: MethodResponse[];
  OperationName?: string;
  RequestModels?: Record<string, string>;
  RequestParameters?: Record<string, boolean | string>;
  RequestValidatorId?: string;
  ResourceId: string;
  RestApiId: string;
};
/**
 * Type definition for `AWS::ApiGateway::Method.Integration`.
 * ``Integration`` is a property of the [AWS::ApiGateway::Method](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-method.html) resource that specifies information about the target backend that a method calls.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-method-integration.html}
 */
export type Integration = {
  CacheKeyParameters?: string[];
  CacheNamespace?: string;
  ConnectionId?: string;
  ConnectionType?: "INTERNET" | "VPC_LINK";
  ContentHandling?: "CONVERT_TO_BINARY" | "CONVERT_TO_TEXT";
  Credentials?: string;
  IntegrationHttpMethod?: string;
  IntegrationResponses?: IntegrationResponse[];
  IntegrationTarget?: string;
  PassthroughBehavior?: "WHEN_NO_MATCH" | "WHEN_NO_TEMPLATES" | "NEVER";
  RequestParameters?: Record<string, string>;
  RequestTemplates?: Record<string, string>;
  ResponseTransferMode?: "BUFFERED" | "STREAM";
  /**
   * @min `50`
   */
  TimeoutInMillis?: number;
  Type: "AWS" | "AWS_PROXY" | "HTTP" | "HTTP_PROXY" | "MOCK";
  Uri?: string;
};
/**
 * Type definition for `AWS::ApiGateway::Method.IntegrationResponse`.
 * ``IntegrationResponse`` is a property of the [Amazon API Gateway Method Integration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apitgateway-method-integration.html) property type that specifies the response that API Gateway sends after a method's backend finishes processing a request.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-method-integrationresponse.html}
 */
export type IntegrationResponse = {
  ContentHandling?: "CONVERT_TO_BINARY" | "CONVERT_TO_TEXT";
  ResponseParameters?: Record<string, string>;
  ResponseTemplates?: Record<string, string>;
  SelectionPattern?: string;
  StatusCode: string;
};
/**
 * Type definition for `AWS::ApiGateway::Method.MethodResponse`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-method-methodresponse.html}
 */
export type MethodResponse = {
  ResponseModels?: Record<string, string>;
  ResponseParameters?: Record<string, boolean | string>;
  StatusCode: string;
};
/**
 * The ``AWS::ApiGateway::Method`` resource creates API Gateway methods that define the parameters and body that clients must send in their requests.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-method.html}
 */
export class ApiGatewayMethod extends $Resource<
  "AWS::ApiGateway::Method",
  ApiGatewayMethodProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::ApiGateway::Method";
  constructor(
    logicalId: string,
    properties: ApiGatewayMethodProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ApiGatewayMethod.Type, properties, options);
  }
}
