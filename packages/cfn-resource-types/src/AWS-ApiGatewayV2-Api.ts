import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The ``AWS::ApiGatewayV2::Api`` resource creates an API. WebSocket APIs and HTTP APIs are supported. For more information about WebSocket APIs, see [About WebSocket APIs in API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-overview.html) in the *API Gateway Developer Guide*. For more information about HTTP APIs, see [HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api.html) in the *API Gateway Developer Guide.*
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-api.html}
 */
export type ApiGatewayV2ApiProperties = {
  /**
   * An API key selection expression. Supported only for WebSocket APIs. See [API Key Selection Expressions](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions).
   */
  ApiKeySelectionExpression?: string;
  /**
   * Specifies how to interpret the base path of the API during import. Valid values are ``ignore``, ``prepend``, and ``split``. The default value is ``ignore``. To learn more, see [Set the OpenAPI basePath Property](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-import-api-basePath.html). Supported only for HTTP APIs.
   */
  BasePath?: string;
  /**
   * The OpenAPI definition. Supported only for HTTP APIs. To import an HTTP API, you must specify a ``Body`` or ``BodyS3Location``. If you specify a ``Body`` or ``BodyS3Location``, don't specify CloudFormation resources such as ``AWS::ApiGatewayV2::Authorizer`` or ``AWS::ApiGatewayV2::Route``. API Gateway doesn't support the combination of OpenAPI and CloudFormation resources.
   */
  Body?: Record<string, any>;
  /**
   * The S3 location of an OpenAPI definition. Supported only for HTTP APIs. To import an HTTP API, you must specify a ``Body`` or ``BodyS3Location``. If you specify a ``Body`` or ``BodyS3Location``, don't specify CloudFormation resources such as ``AWS::ApiGatewayV2::Authorizer`` or ``AWS::ApiGatewayV2::Route``. API Gateway doesn't support the combination of OpenAPI and CloudFormation resources.
   */
  BodyS3Location?: BodyS3Location;
  /**
   * A CORS configuration. Supported only for HTTP APIs. See [Configuring CORS](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html) for more information.
   */
  CorsConfiguration?: Cors;
  /**
   * This property is part of quick create. It specifies the credentials required for the integration, if any. For a Lambda integration, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify ``arn:aws:iam::*:user/*``. To use resource-based permissions on supported AWS services, specify ``null``. Currently, this property is not used for HTTP integrations. Supported only for HTTP APIs.
   */
  CredentialsArn?: string;
  /**
   * The description of the API.
   */
  Description?: string;
  /**
   * Specifies whether clients can invoke your API by using the default ``execute-api`` endpoint. By default, clients can invoke your API with the default https://{api_id}.execute-api.{region}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.
   */
  DisableExecuteApiEndpoint?: boolean;
  /**
   * Avoid validating models when creating a deployment. Supported only for WebSocket APIs.
   */
  DisableSchemaValidation?: boolean;
  /**
   * Specifies whether to rollback the API creation when a warning is encountered. By default, API creation continues if a warning is encountered.
   */
  FailOnWarnings?: boolean;
  /**
   * The name of the API. Required unless you specify an OpenAPI definition for ``Body`` or ``S3BodyLocation``.
   */
  Name?: string;
  /**
   * The API protocol. Valid values are ``WEBSOCKET`` or ``HTTP``. Required unless you specify an OpenAPI definition for ``Body`` or ``S3BodyLocation``.
   */
  ProtocolType?: string;
  /**
   * This property is part of quick create. If you don't specify a ``routeKey``, a default route of ``$default`` is created. The ``$default`` route acts as a catch-all for any request made to your API, for a particular stage. The ``$default`` route key can't be modified. You can add routes after creating the API, and you can update the route keys of additional routes. Supported only for HTTP APIs.
   */
  RouteKey?: string;
  /**
   * The route selection expression for the API. For HTTP APIs, the ``routeSelectionExpression`` must be ``${request.method} ${request.path}``. If not provided, this will be the default for HTTP APIs. This property is required for WebSocket APIs.
   */
  RouteSelectionExpression?: string;
  /**
   * The collection of tags. Each tag element is associated with a given resource.
   */
  Tags?: Record<string, string>;
  /**
   * This property is part of quick create. Quick create produces an API with an integration, a default catch-all route, and a default stage which is configured to automatically deploy changes. For HTTP integrations, specify a fully qualified URL. For Lambda integrations, specify a function ARN. The type of the integration will be HTTP_PROXY or AWS_PROXY, respectively. Supported only for HTTP APIs.
   */
  Target?: string;
  /**
   * A version identifier for the API.
   */
  Version?: string;
};
/**
 * Attribute type definition for `AWS::ApiGatewayV2::Api`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-api.html#aws-resource-apigatewayv2-api-return-values}
 */
export type ApiGatewayV2ApiAttributes = {
  ApiEndpoint: string;
  ApiId: string;
};
/**
 * Type definition for `AWS::ApiGatewayV2::Api.BodyS3Location`.
 * The ``BodyS3Location`` property specifies an S3 location from which to import an OpenAPI definition. Supported only for HTTP APIs.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-api-bodys3location.html}
 */
export type BodyS3Location = {
  /**
   * The S3 bucket that contains the OpenAPI definition to import. Required if you specify a ``BodyS3Location`` for an API.
   */
  Bucket?: string;
  /**
   * The Etag of the S3 object.
   */
  Etag?: string;
  /**
   * The key of the S3 object. Required if you specify a ``BodyS3Location`` for an API.
   */
  Key?: string;
  /**
   * The version of the S3 object.
   */
  Version?: string;
};
/**
 * Type definition for `AWS::ApiGatewayV2::Api.Cors`.
 * The ``Cors`` property specifies a CORS configuration for an API. Supported only for HTTP APIs. See [Configuring CORS](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html) for more information.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-api-cors.html}
 */
export type Cors = {
  /**
   * Specifies whether credentials are included in the CORS request. Supported only for HTTP APIs.
   */
  AllowCredentials?: boolean;
  /**
   * Represents a collection of allowed headers. Supported only for HTTP APIs.
   */
  AllowHeaders?: string[];
  /**
   * Represents a collection of allowed HTTP methods. Supported only for HTTP APIs.
   */
  AllowMethods?: string[];
  /**
   * Represents a collection of allowed origins. Supported only for HTTP APIs.
   */
  AllowOrigins?: string[];
  /**
   * Represents a collection of exposed headers. Supported only for HTTP APIs.
   */
  ExposeHeaders?: string[];
  /**
   * The number of seconds that the browser should cache preflight request results. Supported only for HTTP APIs.
   */
  MaxAge?: number;
};
/**
 * The ``AWS::ApiGatewayV2::Api`` resource creates an API. WebSocket APIs and HTTP APIs are supported. For more information about WebSocket APIs, see [About WebSocket APIs in API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-overview.html) in the *API Gateway Developer Guide*. For more information about HTTP APIs, see [HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api.html) in the *API Gateway Developer Guide.*
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-api.html}
 */
export class ApiGatewayV2Api extends $Resource<
  "AWS::ApiGatewayV2::Api",
  ApiGatewayV2ApiProperties,
  ApiGatewayV2ApiAttributes
> {
  public static readonly Type = "AWS::ApiGatewayV2::Api";
  constructor(
    logicalId: string,
    properties: ApiGatewayV2ApiProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ApiGatewayV2Api.Type, properties, options);
  }
}
