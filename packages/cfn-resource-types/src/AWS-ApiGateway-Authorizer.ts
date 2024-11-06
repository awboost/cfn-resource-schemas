import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The ``AWS::ApiGateway::Authorizer`` resource creates an authorization layer that API Gateway activates for methods that have authorization enabled. API Gateway activates the authorizer when a client calls those methods.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-authorizer.html}
 */
export type ApiGatewayAuthorizerProperties = {
  AuthType?: string;
  AuthorizerCredentials?: string;
  AuthorizerResultTtlInSeconds?: number;
  AuthorizerUri?: string;
  IdentitySource?: string;
  IdentityValidationExpression?: string;
  Name: string;
  ProviderARNs?: string[];
  RestApiId: string;
  Type: string;
};
/**
 * Attribute type definition for `AWS::ApiGateway::Authorizer`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-authorizer.html#aws-resource-apigateway-authorizer-return-values}
 */
export type ApiGatewayAuthorizerAttributes = {
  AuthorizerId: string;
};
/**
 * The ``AWS::ApiGateway::Authorizer`` resource creates an authorization layer that API Gateway activates for methods that have authorization enabled. API Gateway activates the authorizer when a client calls those methods.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-authorizer.html}
 */
export class ApiGatewayAuthorizer extends $Resource<
  "AWS::ApiGateway::Authorizer",
  ApiGatewayAuthorizerProperties,
  ApiGatewayAuthorizerAttributes
> {
  public static readonly Type = "AWS::ApiGateway::Authorizer";
  constructor(
    logicalId: string,
    properties: ApiGatewayAuthorizerProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ApiGatewayAuthorizer.Type, properties, options);
  }
}
