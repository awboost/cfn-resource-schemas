import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The ``AWS::ApiGateway::Method`` resource creates API Gateway methods that define the parameters and body that clients must send in their requests.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-method.html}
 */
export type ApiGatewayMethodProperties = {
  /**
   * A boolean flag specifying whether a valid ApiKey is required to invoke this method.
   */
  ApiKeyRequired?: boolean;
  /**
   * A list of authorization scopes configured on the method. The scopes are used with a ``COGNITO_USER_POOLS`` authorizer to authorize the method invocation. The authorization works by matching the method scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any method scopes matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the method scope is configured, the client must provide an access token instead of an identity token for authorization purposes.
   */
  AuthorizationScopes?: string[];
  /**
     * The method's authorization type. This parameter is required. For valid values, see [Method](https://docs.aws.amazon.com/apigateway/latest/api/API_Method.html) in the *API Gateway API Reference*.
      If you specify the ``AuthorizerId`` property, specify ``CUSTOM`` or ``COGNITO_USER_POOLS`` for this property.
     */
  AuthorizationType?: "NONE" | "AWS_IAM" | "CUSTOM" | "COGNITO_USER_POOLS";
  /**
   * The identifier of an authorizer to use on this method. The method's authorization type must be ``CUSTOM`` or ``COGNITO_USER_POOLS``.
   */
  AuthorizerId?: string;
  /**
   * The method's HTTP verb.
   */
  HttpMethod: string;
  /**
   * Represents an ``HTTP``, ``HTTP_PROXY``, ``AWS``, ``AWS_PROXY``, or Mock integration.
   */
  Integration?: Integration;
  /**
   * Gets a method response associated with a given HTTP status code.
   */
  MethodResponses?: MethodResponse[];
  /**
   * A human-friendly operation identifier for the method. For example, you can assign the ``operationName`` of ``ListPets`` for the ``GET /pets`` method in the ``PetStore`` example.
   */
  OperationName?: string;
  /**
   * A key-value map specifying data schemas, represented by Model resources, (as the mapped value) of the request payloads of given content types (as the mapping key).
   */
  RequestModels?: Record<string, string>;
  /**
   * A key-value map defining required or optional method request parameters that can be accepted by API Gateway. A key is a method request parameter name matching the pattern of ``method.request.{location}.{name}``, where ``location`` is ``querystring``, ``path``, or ``header`` and ``name`` is a valid and unique parameter name. The value associated with the key is a Boolean flag indicating whether the parameter is required (``true``) or optional (``false``). The method request parameter names defined here are available in Integration to be mapped to integration request parameters or templates.
   */
  RequestParameters?: Record<string, boolean | string>;
  /**
   * The identifier of a RequestValidator for request validation.
   */
  RequestValidatorId?: string;
  /**
   * The Resource identifier for the MethodResponse resource.
   */
  ResourceId: string;
  /**
   * The string identifier of the associated RestApi.
   */
  RestApiId: string;
};
/**
 * Type definition for `AWS::ApiGateway::Method.Integration`.
 * ``Integration`` is a property of the [AWS::ApiGateway::Method](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-method.html) resource that specifies information about the target backend that a method calls.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-method-integration.html}
 */
export type Integration = {
  /**
   * A list of request parameters whose values API Gateway caches. To be valid values for ``cacheKeyParameters``, these parameters must also be specified for Method ``requestParameters``.
   */
  CacheKeyParameters?: string[];
  /**
   * Specifies a group of related cached parameters. By default, API Gateway uses the resource ID as the ``cacheNamespace``. You can specify the same ``cacheNamespace`` across resources to return the same cached data for requests to different resources.
   */
  CacheNamespace?: string;
  /**
   * The ID of the VpcLink used for the integration when ``connectionType=VPC_LINK`` and undefined, otherwise.
   */
  ConnectionId?: string;
  /**
   * The type of the network connection to the integration endpoint. The valid value is ``INTERNET`` for connections through the public routable internet or ``VPC_LINK`` for private connections between API Gateway and a network load balancer in a VPC. The default value is ``INTERNET``.
   */
  ConnectionType?: "INTERNET" | "VPC_LINK";
  /**
     * Specifies how to handle request payload content type conversions. Supported values are ``CONVERT_TO_BINARY`` and ``CONVERT_TO_TEXT``, with the following behaviors:
     If this property is not defined, the request payload will be passed through from the method request to integration request without modification, provided that the ``passthroughBehavior`` is configured to support payload pass-through.
     */
  ContentHandling?: "CONVERT_TO_BINARY" | "CONVERT_TO_TEXT";
  /**
   * Specifies the credentials required for the integration, if any. For AWS integrations, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify the string ``arn:aws:iam::\*:user/\*``. To use resource-based permissions on supported AWS services, specify null.
   */
  Credentials?: string;
  /**
   * Specifies the integration's HTTP method type. For the Type property, if you specify ``MOCK``, this property is optional. For Lambda integrations, you must set the integration method to ``POST``. For all other types, you must specify this property.
   */
  IntegrationHttpMethod?: string;
  /**
   * Specifies the integration's responses.
   */
  IntegrationResponses?: IntegrationResponse[];
  /**
   * Specifies how the method request body of an unmapped content type will be passed through the integration request to the back end without transformation. A content type is unmapped if no mapping template is defined in the integration or the content type does not match any of the mapped content types, as specified in ``requestTemplates``. The valid value is one of the following: ``WHEN_NO_MATCH``: passes the method request body through the integration request to the back end without transformation when the method request content type does not match any content type associated with the mapping templates defined in the integration request. ``WHEN_NO_TEMPLATES``: passes the method request body through the integration request to the back end without transformation when no mapping template is defined in the integration request. If a template is defined when this option is selected, the method request of an unmapped content-type will be rejected with an HTTP 415 Unsupported Media Type response. ``NEVER``: rejects the method request with an HTTP 415 Unsupported Media Type response when either the method request content type does not match any content type associated with the mapping templates defined in the integration request or no mapping template is defined in the integration request.
   */
  PassthroughBehavior?: "WHEN_NO_MATCH" | "WHEN_NO_TEMPLATES" | "NEVER";
  /**
   * A key-value map specifying request parameters that are passed from the method request to the back end. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the back end. The method request parameter value must match the pattern of ``method.request.{location}.{name}``, where ``location`` is ``querystring``, ``path``, or ``header`` and ``name`` must be a valid and unique method request parameter name.
   */
  RequestParameters?: Record<string, string>;
  /**
   * Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value.
   */
  RequestTemplates?: Record<string, string>;
  /**
   * Custom timeout between 50 and 29,000 milliseconds. The default value is 29,000 milliseconds or 29 seconds.
   * @min `50`
   */
  TimeoutInMillis?: number;
  /**
     * Specifies an API method integration type. The valid value is one of the following:
     For the HTTP and HTTP proxy integrations, each integration can specify a protocol (``http/https``), port and path. Standard 80 and 443 ports are supported as well as custom ports above 1024. An HTTP or HTTP proxy integration with a ``connectionType`` of ``VPC_LINK`` is referred to as a private integration and uses a VpcLink to connect API Gateway to a network load balancer of a VPC.
     */
  Type: "AWS" | "AWS_PROXY" | "HTTP" | "HTTP_PROXY" | "MOCK";
  /**
     * Specifies Uniform Resource Identifier (URI) of the integration endpoint.
     For ``HTTP`` or ``HTTP_PROXY`` integrations, the URI must be a fully formed, encoded HTTP(S) URL according to the RFC-3986 specification for standard integrations. If ``connectionType`` is ``VPC_LINK`` specify the Network Load Balancer DNS name. For ``AWS`` or ``AWS_PROXY`` integrations, the URI is of the form ``arn:aws:apigateway:{region}:{subdomain.service|service}:path|action/{service_api}``. Here, {Region} is the API Gateway region (e.g., us-east-1); {service} is the name of the integrated AWS service (e.g., s3); and {subdomain} is a designated subdomain supported by certain AWS service for fast host-name lookup. action can be used for an AWS service action-based API, using an Action={name}&{p1}={v1}&p2={v2}... query string. The ensuing {service_api} refers to a supported action {name} plus any required input parameters. Alternatively, path can be used for an AWS service path-based API. The ensuing service_api refers to the path to an AWS service resource, including the region of the integrated AWS service, if applicable. For example, for integration with the S3 API of GetObject, the uri can be either ``arn:aws:apigateway:us-west-2:s3:action/GetObject&Bucket={bucket}&Key={key}`` or ``arn:aws:apigateway:us-west-2:s3:path/{bucket}/{key}``
     */
  Uri?: string;
};
/**
 * Type definition for `AWS::ApiGateway::Method.IntegrationResponse`.
 * ``IntegrationResponse`` is a property of the [Amazon API Gateway Method Integration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apitgateway-method-integration.html) property type that specifies the response that API Gateway sends after a method's backend finishes processing a request.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-method-integrationresponse.html}
 */
export type IntegrationResponse = {
  /**
     * Specifies how to handle response payload content type conversions. Supported values are ``CONVERT_TO_BINARY`` and ``CONVERT_TO_TEXT``, with the following behaviors:
     If this property is not defined, the response payload will be passed through from the integration response to the method response without modification.
     */
  ContentHandling?: "CONVERT_TO_BINARY" | "CONVERT_TO_TEXT";
  /**
   * A key-value map specifying response parameters that are passed to the method response from the back end. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of ``method.response.header.{name}``, where ``name`` is a valid and unique header name. The mapped non-static value must match the pattern of ``integration.response.header.{name}`` or ``integration.response.body.{JSON-expression}``, where ``name`` is a valid and unique response header name and ``JSON-expression`` is a valid JSON expression without the ``$`` prefix.
   */
  ResponseParameters?: Record<string, string>;
  /**
   * Specifies the templates used to transform the integration response body. Response templates are represented as a key/value map, with a content-type as the key and a template as the value.
   */
  ResponseTemplates?: Record<string, string>;
  /**
   * Specifies the regular expression (regex) pattern used to choose an integration response based on the response from the back end. For example, if the success response returns nothing and the error response returns some string, you could use the ``.+`` regex to match error response. However, make sure that the error response does not contain any newline (``\n``) character in such cases. If the back end is an LAMlong function, the LAMlong function error header is matched. For all other HTTP and AWS back ends, the HTTP status code is matched.
   */
  SelectionPattern?: string;
  /**
   * Specifies the status code that is used to map the integration response to an existing MethodResponse.
   */
  StatusCode: string;
};
/**
 * Type definition for `AWS::ApiGateway::Method.MethodResponse`.
 * Represents a method response of a given HTTP status code returned to the client. The method response is passed from the back end through the associated integration response that can be transformed using a mapping template.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-method-methodresponse.html}
 */
export type MethodResponse = {
  /**
   * Specifies the Model resources used for the response's content-type. Response models are represented as a key/value map, with a content-type as the key and a Model name as the value.
   */
  ResponseModels?: Record<string, string>;
  /**
   * A key-value map specifying required or optional response parameters that API Gateway can send back to the caller. A key defines a method response header and the value specifies whether the associated method response header is required or not. The expression of the key must match the pattern ``method.response.header.{name}``, where ``name`` is a valid and unique header name. API Gateway passes certain integration response data to the method response headers specified here according to the mapping you prescribe in the API's IntegrationResponse. The integration response data that can be mapped include an integration response header expressed in ``integration.response.header.{name}``, a static value enclosed within a pair of single quotes (e.g., ``'application/json'``), or a JSON expression from the back-end response payload in the form of ``integration.response.body.{JSON-expression}``, where ``JSON-expression`` is a valid JSON expression without the ``$`` prefix.)
   */
  ResponseParameters?: Record<string, boolean | string>;
  /**
   * The method response's status code.
   */
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