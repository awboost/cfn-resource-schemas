import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * The ``AWS::ApiGateway::DocumentationVersion`` resource creates a snapshot of the documentation for an API. For more information, see [Representation of API Documentation in API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-documenting-api-content-representation.html) in the *API Gateway Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-documentationversion.html}
 */
export type ApiGatewayDocumentationVersionProperties = {
  /**
   * A description about the new documentation snapshot.
   */
  Description?: string;
  /**
   * The version identifier of the to-be-updated documentation version.
   * @minLength `1`
   */
  DocumentationVersion: string;
  /**
   * The string identifier of the associated RestApi.
   * @minLength `1`
   */
  RestApiId: string;
};
/**
 * The ``AWS::ApiGateway::DocumentationVersion`` resource creates a snapshot of the documentation for an API. For more information, see [Representation of API Documentation in API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-documenting-api-content-representation.html) in the *API Gateway Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-documentationversion.html}
 */
export class ApiGatewayDocumentationVersion extends $Resource<
  "AWS::ApiGateway::DocumentationVersion",
  ApiGatewayDocumentationVersionProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::ApiGateway::DocumentationVersion";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: ApiGatewayDocumentationVersionProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ApiGatewayDocumentationVersion.Type,
      properties,
      ApiGatewayDocumentationVersion.AttributeNames,
      options,
    );
  }
}
