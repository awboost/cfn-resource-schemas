import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The ``AWS::ApiGatewayV2::ApiMapping`` resource contains an API mapping. An API mapping relates a path of your custom domain name to a stage of your API. A custom domain name can have multiple API mappings, but the paths can't overlap. A custom domain can map only to APIs of the same protocol type. For more information, see [CreateApiMapping](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/domainnames-domainname-apimappings.html#CreateApiMapping) in the *Amazon API Gateway V2 API Reference*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-apimapping.html}
 */
export type ApiGatewayV2ApiMappingProperties = {
  /**
   * The identifier of the API.
   */
  ApiId: string;
  /**
   * The API mapping key.
   */
  ApiMappingKey?: string;
  /**
   * The domain name.
   */
  DomainName: string;
  /**
   * The API stage.
   */
  Stage: string;
};
/**
 * Attribute type definition for `AWS::ApiGatewayV2::ApiMapping`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-apimapping.html#aws-resource-apigatewayv2-apimapping-return-values}
 */
export type ApiGatewayV2ApiMappingAttributes = {
  ApiMappingId: string;
};
/**
 * The ``AWS::ApiGatewayV2::ApiMapping`` resource contains an API mapping. An API mapping relates a path of your custom domain name to a stage of your API. A custom domain name can have multiple API mappings, but the paths can't overlap. A custom domain can map only to APIs of the same protocol type. For more information, see [CreateApiMapping](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/domainnames-domainname-apimappings.html#CreateApiMapping) in the *Amazon API Gateway V2 API Reference*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-apimapping.html}
 */
export class ApiGatewayV2ApiMapping extends $Resource<
  "AWS::ApiGatewayV2::ApiMapping",
  ApiGatewayV2ApiMappingProperties,
  ApiGatewayV2ApiMappingAttributes
> {
  public static readonly Type = "AWS::ApiGatewayV2::ApiMapping";
  constructor(
    logicalId: string,
    properties: ApiGatewayV2ApiMappingProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ApiGatewayV2ApiMapping.Type, properties, options);
  }
}
