import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The ``AWS::ApiGateway::DocumentationPart`` resource creates a documentation part for an API. For more information, see [Representation of API Documentation in API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-documenting-api-content-representation.html) in the *API Gateway Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-documentationpart.html}
 */
export type ApiGatewayDocumentationPartProperties = {
  /**
     * The ``Location`` property specifies the location of the Amazon API Gateway API entity that the documentation applies to. ``Location`` is a property of the [AWS::ApiGateway::DocumentationPart](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-documentationpart.html) resource.
     For more information about each property, including constraints and valid values, see [DocumentationPart](https://docs.aws.amazon.com/apigateway/latest/api/API_DocumentationPartLocation.html) in the *Amazon API Gateway REST API Reference*.
     */
  Location: Location;
  Properties: string;
  RestApiId: string;
};
/**
 * Attribute type definition for `AWS::ApiGateway::DocumentationPart`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-documentationpart.html#aws-resource-apigateway-documentationpart-return-values}
 */
export type ApiGatewayDocumentationPartAttributes = {
  DocumentationPartId: string;
};
/**
 * Type definition for `AWS::ApiGateway::DocumentationPart.Location`.
 * The ``Location`` property specifies the location of the Amazon API Gateway API entity that the documentation applies to. ``Location`` is a property of the [AWS::ApiGateway::DocumentationPart](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-documentationpart.html) resource.
 For more information about each property, including constraints and valid values, see [DocumentationPart](https://docs.aws.amazon.com/apigateway/latest/api/API_DocumentationPartLocation.html) in the *Amazon API Gateway REST API Reference*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-documentationpart-location.html}
 */
export type Location = {
  Method?: string;
  Name?: string;
  Path?: string;
  StatusCode?: string;
  Type?:
    | "API"
    | "AUTHORIZER"
    | "MODEL"
    | "RESOURCE"
    | "METHOD"
    | "PATH_PARAMETER"
    | "QUERY_PARAMETER"
    | "REQUEST_HEADER"
    | "REQUEST_BODY"
    | "RESPONSE"
    | "RESPONSE_HEADER"
    | "RESPONSE_BODY";
};
/**
 * The ``AWS::ApiGateway::DocumentationPart`` resource creates a documentation part for an API. For more information, see [Representation of API Documentation in API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-documenting-api-content-representation.html) in the *API Gateway Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-documentationpart.html}
 */
export class ApiGatewayDocumentationPart extends $Resource<
  "AWS::ApiGateway::DocumentationPart",
  ApiGatewayDocumentationPartProperties,
  ApiGatewayDocumentationPartAttributes
> {
  public static readonly Type = "AWS::ApiGateway::DocumentationPart";
  constructor(
    logicalId: string,
    properties: ApiGatewayDocumentationPartProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ApiGatewayDocumentationPart.Type, properties, options);
  }
}
