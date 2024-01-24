import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The ``AWS::ApiGatewayV2::IntegrationResponse`` resource updates an integration response for an WebSocket API. For more information, see [Set up WebSocket API Integration Responses in API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-integration-responses.html) in the *API Gateway Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-integrationresponse.html}
 */
export type ApiGatewayV2IntegrationResponseProperties = {
  /**
   * The API identifier.
   */
  ApiId: string;
  /**
     * Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are ``CONVERT_TO_BINARY`` and ``CONVERT_TO_TEXT``, with the following behaviors:
      ``CONVERT_TO_BINARY``: Converts a response payload from a Base64-encoded string to the corresponding binary blob.
      ``CONVERT_TO_TEXT``: Converts a response payload from a binary blob to a Base64-encoded string.
     If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.
     */
  ContentHandlingStrategy?: string;
  /**
   * The integration ID.
   */
  IntegrationId: string;
  /**
   * The integration response key.
   */
  IntegrationResponseKey: string;
  /**
   * A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of ``method.response.header.{name}``, where name is a valid and unique header name. The mapped non-static value must match the pattern of ``integration.response.header.{name}`` or ``integration.response.body.{JSON-expression}``, where ``{name}`` is a valid and unique response header name and ``{JSON-expression}`` is a valid JSON expression without the ``$`` prefix.
   */
  ResponseParameters?: Record<string, any>;
  /**
   * The collection of response templates for the integration response as a string-to-string map of key-value pairs. Response templates are represented as a key/value map, with a content-type as the key and a template as the value.
   */
  ResponseTemplates?: Record<string, any>;
  /**
   * The template selection expression for the integration response. Supported only for WebSocket APIs.
   */
  TemplateSelectionExpression?: string;
};
/**
 * Attribute type definition for `AWS::ApiGatewayV2::IntegrationResponse`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-integrationresponse.html#aws-resource-apigatewayv2-integrationresponse-return-values}
 */
export type ApiGatewayV2IntegrationResponseAttributes = {
  IntegrationResponseId: string;
};
/**
 * The ``AWS::ApiGatewayV2::IntegrationResponse`` resource updates an integration response for an WebSocket API. For more information, see [Set up WebSocket API Integration Responses in API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-integration-responses.html) in the *API Gateway Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-integrationresponse.html}
 */
export class ApiGatewayV2IntegrationResponse extends $Resource<
  "AWS::ApiGatewayV2::IntegrationResponse",
  ApiGatewayV2IntegrationResponseProperties,
  ApiGatewayV2IntegrationResponseAttributes
> {
  public static readonly Type = "AWS::ApiGatewayV2::IntegrationResponse";
  constructor(
    logicalId: string,
    properties: ApiGatewayV2IntegrationResponseProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ApiGatewayV2IntegrationResponse.Type, properties, options);
  }
}
