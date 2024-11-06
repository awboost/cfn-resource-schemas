import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The ``AWS::ApiGateway::BasePathMapping`` resource creates a base path that clients who call your API must use in the invocation URL.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-basepathmapping.html}
 */
export type ApiGatewayBasePathMappingProperties = {
  BasePath?: string;
  DomainName: string;
  RestApiId?: string;
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
