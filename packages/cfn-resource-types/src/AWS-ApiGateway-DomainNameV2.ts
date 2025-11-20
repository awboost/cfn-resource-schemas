import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::ApiGateway::DomainNameV2.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-domainnamev2.html}
 */
export type ApiGatewayDomainNameV2Properties = {
  CertificateArn?: string;
  DomainName?: string;
  EndpointAccessMode?: string;
  EndpointConfiguration?: EndpointConfiguration;
  Policy?: Record<string, any> | string;
  /**
   * The valid routing modes are [BASE_PATH_MAPPING_ONLY], [ROUTING_RULE_THEN_BASE_PATH_MAPPING] and [ROUTING_RULE_ONLY]. All other inputs are invalid.
   */
  RoutingMode?:
    | "BASE_PATH_MAPPING_ONLY"
    | "ROUTING_RULE_THEN_BASE_PATH_MAPPING"
    | "ROUTING_RULE_ONLY";
  SecurityPolicy?: string;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::ApiGateway::DomainNameV2`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-domainnamev2.html#aws-resource-apigateway-domainnamev2-return-values}
 */
export type ApiGatewayDomainNameV2Attributes = {
  /**
   * The amazon resource name (ARN) of the domain name resource.
   */
  DomainNameArn: string;
  DomainNameId: string;
};
/**
 * Type definition for `AWS::ApiGateway::DomainNameV2.EndpointConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-domainnamev2-endpointconfiguration.html}
 */
export type EndpointConfiguration = {
  IpAddressType?: string;
  Types?: string[];
};
/**
 * Type definition for `AWS::ApiGateway::DomainNameV2.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-domainnamev2-tag.html}
 */
export type Tag = {
  Key?: string;
  Value?: string;
};
/**
 * Resource Type definition for AWS::ApiGateway::DomainNameV2.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-domainnamev2.html}
 */
export class ApiGatewayDomainNameV2 extends $Resource<
  "AWS::ApiGateway::DomainNameV2",
  ApiGatewayDomainNameV2Properties,
  ApiGatewayDomainNameV2Attributes
> {
  public static readonly Type = "AWS::ApiGateway::DomainNameV2";
  constructor(
    logicalId: string,
    properties: ApiGatewayDomainNameV2Properties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ApiGatewayDomainNameV2.Type, properties, options);
  }
}
