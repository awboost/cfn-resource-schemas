import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * The ``AWS::ApiGateway::DocumentationPart`` resource creates a documentation part for an API. For more information, see [Representation of API Documentation in API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-documenting-api-content-representation.html) in the *API Gateway Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-documentationpart.html}
 */
export type ApiGatewayDocumentationPartProperties = {
  /**
   * The location of the targeted API entity of the to-be-created documentation part.
   */
  Location: Location;
  /**
   * The new documentation content map of the targeted API entity. Enclosed key-value pairs are API-specific, but only OpenAPI-compliant key-value pairs can be exported and, hence, published.
   */
  Properties: string;
  /**
   * The string identifier of the associated RestApi.
   */
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
  /**
   * The HTTP verb of a method. It is a valid field for the API entity types of ``METHOD``, ``PATH_PARAMETER``, ``QUERY_PARAMETER``, ``REQUEST_HEADER``, ``REQUEST_BODY``, ``RESPONSE``, ``RESPONSE_HEADER``, and ``RESPONSE_BODY``. The default value is ``*`` for any method. When an applicable child entity inherits the content of an entity of the same type with more general specifications of the other ``location`` attributes, the child entity's ``method`` attribute must match that of the parent entity exactly.
   */
  Method?: string;
  /**
   * The name of the targeted API entity. It is a valid and required field for the API entity types of ``AUTHORIZER``, ``MODEL``, ``PATH_PARAMETER``, ``QUERY_PARAMETER``, ``REQUEST_HEADER``, ``REQUEST_BODY`` and ``RESPONSE_HEADER``. It is an invalid field for any other entity type.
   */
  Name?: string;
  /**
   * The URL path of the target. It is a valid field for the API entity types of ``RESOURCE``, ``METHOD``, ``PATH_PARAMETER``, ``QUERY_PARAMETER``, ``REQUEST_HEADER``, ``REQUEST_BODY``, ``RESPONSE``, ``RESPONSE_HEADER``, and ``RESPONSE_BODY``. The default value is ``/`` for the root resource. When an applicable child entity inherits the content of another entity of the same type with more general specifications of the other ``location`` attributes, the child entity's ``path`` attribute must match that of the parent entity as a prefix.
   */
  Path?: string;
  /**
   * The HTTP status code of a response. It is a valid field for the API entity types of ``RESPONSE``, ``RESPONSE_HEADER``, and ``RESPONSE_BODY``. The default value is ``*`` for any status code. When an applicable child entity inherits the content of an entity of the same type with more general specifications of the other ``location`` attributes, the child entity's ``statusCode`` attribute must match that of the parent entity exactly.
   */
  StatusCode?: string;
  /**
   * The type of API entity to which the documentation content applies. Valid values are ``API``, ``AUTHORIZER``, ``MODEL``, ``RESOURCE``, ``METHOD``, ``PATH_PARAMETER``, ``QUERY_PARAMETER``, ``REQUEST_HEADER``, ``REQUEST_BODY``, ``RESPONSE``, ``RESPONSE_HEADER``, and ``RESPONSE_BODY``. Content inheritance does not apply to any entity of the ``API``, ``AUTHORIZER``, ``METHOD``, ``MODEL``, ``REQUEST_BODY``, or ``RESOURCE`` type.
   */
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
  public static readonly AttributeNames = ["DocumentationPartId" as const];
  constructor(
    logicalId: string,
    properties: ApiGatewayDocumentationPartProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ApiGatewayDocumentationPart.Type,
      properties,
      ApiGatewayDocumentationPart.AttributeNames,
      options,
    );
  }
}
