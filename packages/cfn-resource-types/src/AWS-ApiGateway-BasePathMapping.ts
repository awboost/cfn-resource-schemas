import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
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
  constructor(
    logicalId: string,
    properties: ApiGatewayBasePathMappingProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ApiGatewayBasePathMapping.Type, properties, options);
  }
}
