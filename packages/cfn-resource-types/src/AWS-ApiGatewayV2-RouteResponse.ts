import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * The ``AWS::ApiGatewayV2::RouteResponse`` resource creates a route response for a WebSocket API. For more information, see [Set up Route Responses for a WebSocket API in API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-route-response.html) in the *API Gateway Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-routeresponse.html}
 */
export type ApiGatewayV2RouteResponseProperties = {
  /**
   * The API identifier.
   */
  ApiId: string;
  /**
   * The model selection expression for the route response. Supported only for WebSocket APIs.
   */
  ModelSelectionExpression?: string;
  /**
   * The response models for the route response.
   */
  ResponseModels?: Record<string, any>;
  /**
   * The route response parameters.
   */
  ResponseParameters?: RouteParameters;
  /**
   * The route ID.
   */
  RouteId: string;
  /**
   * The route response key.
   */
  RouteResponseKey: string;
};
/**
 * Attribute type definition for `AWS::ApiGatewayV2::RouteResponse`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-routeresponse.html#aws-resource-apigatewayv2-routeresponse-return-values}
 */
export type ApiGatewayV2RouteResponseAttributes = {
  RouteResponseId: string;
};
/**
 * Type definition for `AWS::ApiGatewayV2::RouteResponse.ParameterConstraints`.
 * Specifies whether the parameter is required.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-routeresponse-parameterconstraints.html}
 */
export type ParameterConstraints = {
  /**
   * Specifies whether the parameter is required.
   */
  Required: boolean;
};
/**
 * Type definition for `AWS::ApiGatewayV2::RouteResponse.RouteParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-routeresponse-routeparameters.html}
 */
export type RouteParameters = Record<string, ParameterConstraints>;
/**
 * The ``AWS::ApiGatewayV2::RouteResponse`` resource creates a route response for a WebSocket API. For more information, see [Set up Route Responses for a WebSocket API in API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-route-response.html) in the *API Gateway Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-routeresponse.html}
 */
export class ApiGatewayV2RouteResponse extends $Resource<
  "AWS::ApiGatewayV2::RouteResponse",
  ApiGatewayV2RouteResponseProperties,
  ApiGatewayV2RouteResponseAttributes
> {
  public static readonly Type = "AWS::ApiGatewayV2::RouteResponse";
  public static readonly AttributeNames = ["RouteResponseId" as const];
  constructor(
    logicalId: string,
    properties: ApiGatewayV2RouteResponseProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ApiGatewayV2RouteResponse.Type,
      properties,
      ApiGatewayV2RouteResponse.AttributeNames,
      options,
    );
  }
}
