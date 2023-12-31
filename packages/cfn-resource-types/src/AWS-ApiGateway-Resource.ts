import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * The ``AWS::ApiGateway::Resource`` resource creates a resource in an API.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-resource.html}
 */
export type ApiGatewayResourceProperties = {
  /**
   * The parent resource's identifier.
   */
  ParentId: string;
  /**
   * The last path segment for this resource.
   */
  PathPart: string;
  /**
   * The string identifier of the associated RestApi.
   */
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
  public static readonly AttributeNames = ["ResourceId" as const];
  constructor(
    logicalId: string,
    properties: ApiGatewayResourceProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ApiGatewayResource.Type,
      properties,
      ApiGatewayResource.AttributeNames,
      options,
    );
  }
}
