import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The ``AWS::ApiGateway::GatewayResponse`` resource creates a gateway response for your API. When you delete a stack containing this resource, your custom gateway responses are reset. For more information, see [API Gateway Responses](https://docs.aws.amazon.com/apigateway/latest/developerguide/customize-gateway-responses.html#api-gateway-gatewayResponse-definition) in the *API Gateway Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-gatewayresponse.html}
 */
export type ApiGatewayGatewayResponseProperties = {
  ResponseParameters?: Record<string, string>;
  ResponseTemplates?: Record<string, string>;
  ResponseType: string;
  RestApiId: string;
  StatusCode?: string;
};
/**
 * Attribute type definition for `AWS::ApiGateway::GatewayResponse`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-gatewayresponse.html#aws-resource-apigateway-gatewayresponse-return-values}
 */
export type ApiGatewayGatewayResponseAttributes = {
  Id: string;
};
/**
 * The ``AWS::ApiGateway::GatewayResponse`` resource creates a gateway response for your API. When you delete a stack containing this resource, your custom gateway responses are reset. For more information, see [API Gateway Responses](https://docs.aws.amazon.com/apigateway/latest/developerguide/customize-gateway-responses.html#api-gateway-gatewayResponse-definition) in the *API Gateway Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-gatewayresponse.html}
 */
export class ApiGatewayGatewayResponse extends $Resource<
  "AWS::ApiGateway::GatewayResponse",
  ApiGatewayGatewayResponseProperties,
  ApiGatewayGatewayResponseAttributes
> {
  public static readonly Type = "AWS::ApiGateway::GatewayResponse";
  constructor(
    logicalId: string,
    properties: ApiGatewayGatewayResponseProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ApiGatewayGatewayResponse.Type, properties, options);
  }
}
