import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The ``AWS::ApiGateway::RequestValidator`` resource sets up basic validation rules for incoming requests to your API. For more information, see [Enable Basic Request Validation for an API in API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-method-request-validation.html) in the *API Gateway Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-requestvalidator.html}
 */
export type ApiGatewayRequestValidatorProperties = {
  Name?: string;
  RestApiId: string;
  ValidateRequestBody?: boolean;
  ValidateRequestParameters?: boolean;
};
/**
 * Attribute type definition for `AWS::ApiGateway::RequestValidator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-requestvalidator.html#aws-resource-apigateway-requestvalidator-return-values}
 */
export type ApiGatewayRequestValidatorAttributes = {
  RequestValidatorId: string;
};
/**
 * The ``AWS::ApiGateway::RequestValidator`` resource sets up basic validation rules for incoming requests to your API. For more information, see [Enable Basic Request Validation for an API in API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-method-request-validation.html) in the *API Gateway Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-requestvalidator.html}
 */
export class ApiGatewayRequestValidator extends $Resource<
  "AWS::ApiGateway::RequestValidator",
  ApiGatewayRequestValidatorProperties,
  ApiGatewayRequestValidatorAttributes
> {
  public static readonly Type = "AWS::ApiGateway::RequestValidator";
  constructor(
    logicalId: string,
    properties: ApiGatewayRequestValidatorProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ApiGatewayRequestValidator.Type, properties, options);
  }
}
