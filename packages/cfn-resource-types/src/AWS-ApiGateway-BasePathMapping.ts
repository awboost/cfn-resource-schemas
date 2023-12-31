import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * The ``AWS::ApiGateway::BasePathMapping`` resource creates a base path that clients who call your API must use in the invocation URL.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-basepathmapping.html}
 */
export type ApiGatewayBasePathMappingProperties = {
  /**
   * The base path name that callers of the API must provide as part of the URL after the domain name.
   */
  BasePath?: string;
  /**
   * The domain name of the BasePathMapping resource to be described.
   */
  DomainName: string;
  /**
   * The string identifier of the associated RestApi.
   */
  RestApiId?: string;
  /**
   * The name of the associated stage.
   */
  Stage?: string;
};
/**
 * The ``AWS::ApiGateway::BasePathMapping`` resource creates a base path that clients who call your API must use in the invocation URL.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-basepathmapping.html}
 */
export class ApiGatewayBasePathMapping extends $Resource<
  "AWS::ApiGateway::BasePathMapping",
  ApiGatewayBasePathMappingProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::ApiGateway::BasePathMapping";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: ApiGatewayBasePathMappingProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ApiGatewayBasePathMapping.Type,
      properties,
      ApiGatewayBasePathMapping.AttributeNames,
      options,
    );
  }
}
