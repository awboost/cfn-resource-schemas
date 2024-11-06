import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The ``AWS::ApiGateway::Resource`` resource creates a resource in an API.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-resource.html}
 */
export type ApiGatewayResourceProperties = {
  ParentId: string;
  PathPart: string;
  RestApiId: string;
};
/**
 * Attribute type definition for `AWS::ApiGateway::Resource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-resource.html#aws-resource-apigateway-resource-return-values}
 */
export type ApiGatewayResourceAttributes = {
  ResourceId: string;
};
/**
 * The ``AWS::ApiGateway::Resource`` resource creates a resource in an API.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-resource.html}
 */
export class ApiGatewayResource extends $Resource<
  "AWS::ApiGateway::Resource",
  ApiGatewayResourceProperties,
  ApiGatewayResourceAttributes
> {
  public static readonly Type = "AWS::ApiGateway::Resource";
  constructor(
    logicalId: string,
    properties: ApiGatewayResourceProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ApiGatewayResource.Type, properties, options);
  }
}
