import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The ``AWS::ApiGatewayV2::Model`` resource updates data model for a WebSocket API. For more information, see [Model Selection Expressions](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-model-selection-expressions) in the *API Gateway Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-model.html}
 */
export type ApiGatewayV2ModelProperties = {
  /**
   * The API identifier.
   */
  ApiId: string;
  /**
   * The content-type for the model, for example, "application/json".
   */
  ContentType?: string;
  /**
   * The description of the model.
   */
  Description?: string;
  /**
   * The name of the model.
   */
  Name: string;
  /**
   * The schema for the model. For application/json models, this should be JSON schema draft 4 model.
   */
  Schema: Record<string, any>;
};
/**
 * Attribute type definition for `AWS::ApiGatewayV2::Model`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-model.html#aws-resource-apigatewayv2-model-return-values}
 */
export type ApiGatewayV2ModelAttributes = {
  ModelId: string;
};
/**
 * The ``AWS::ApiGatewayV2::Model`` resource updates data model for a WebSocket API. For more information, see [Model Selection Expressions](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-model-selection-expressions) in the *API Gateway Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-model.html}
 */
export class ApiGatewayV2Model extends $Resource<
  "AWS::ApiGatewayV2::Model",
  ApiGatewayV2ModelProperties,
  ApiGatewayV2ModelAttributes
> {
  public static readonly Type = "AWS::ApiGatewayV2::Model";
  constructor(
    logicalId: string,
    properties: ApiGatewayV2ModelProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ApiGatewayV2Model.Type, properties, options);
  }
}
