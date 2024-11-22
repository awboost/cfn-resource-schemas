import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::ApiGateway::BasePathMappingV2
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-basepathmappingv2.html}
 */
export type ApiGatewayBasePathMappingV2Properties = {
  /**
   * The base path name that callers of the API must provide in the URL after the domain name.
   */
  BasePath?: string;
  /**
   * The Arn of an AWS::ApiGateway::DomainNameV2 resource.
   */
  DomainNameArn: string;
  /**
   * The ID of the API.
   */
  RestApiId: string;
  /**
   * The name of the API's stage.
   */
  Stage?: string;
};
/**
 * Attribute type definition for `AWS::ApiGateway::BasePathMappingV2`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-basepathmappingv2.html#aws-resource-apigateway-basepathmappingv2-return-values}
 */
export type ApiGatewayBasePathMappingV2Attributes = {
  /**
   * Amazon Resource Name (ARN) of the resource.
   */
  BasePathMappingArn: string;
};
/**
 * Resource Type definition for AWS::ApiGateway::BasePathMappingV2
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-basepathmappingv2.html}
 */
export class ApiGatewayBasePathMappingV2 extends $Resource<
  "AWS::ApiGateway::BasePathMappingV2",
  ApiGatewayBasePathMappingV2Properties,
  ApiGatewayBasePathMappingV2Attributes
> {
  public static readonly Type = "AWS::ApiGateway::BasePathMappingV2";
  constructor(
    logicalId: string,
    properties: ApiGatewayBasePathMappingV2Properties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ApiGatewayBasePathMappingV2.Type, properties, options);
  }
}
