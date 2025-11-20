import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The ``AWS::ApiGateway::DomainName`` resource specifies a public custom domain name for your API in API Gateway.
 To create a custom domain name for private APIs, use [AWS::ApiGateway::DomainNameV2](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-domainnamev2.html).
 You can use a custom domain name to provide a URL that's more intuitive and easier to recall. For more information about using custom domain names, see [Set up Custom Domain Name for an API in API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html) in the *API Gateway Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-domainname.html}
 */
export type ApiGatewayDomainNameProperties = {
  CertificateArn?: string;
  DomainName?: string;
  EndpointAccessMode?: string;
  /**
   * The endpoint configuration of this DomainName showing the endpoint types and IP address types of the domain name.
   */
  EndpointConfiguration?: EndpointConfiguration;
  MutualTlsAuthentication?: MutualTlsAuthentication;
  /**
   * The ARN of the public certificate issued by ACM to validate ownership of your custom domain. Only required when configuring mutual TLS and using an ACM imported or private CA certificate ARN as the RegionalCertificateArn.
   */
  OwnershipVerificationCertificateArn?: string;
  RegionalCertificateArn?: string;
  RoutingMode?:
    | "BASE_PATH_MAPPING_ONLY"
    | "ROUTING_RULE_THEN_BASE_PATH_MAPPING"
    | "ROUTING_RULE_ONLY";
  SecurityPolicy?: string;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::ApiGateway::DomainName`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-domainname.html#aws-resource-apigateway-domainname-return-values}
 */
export type ApiGatewayDomainNameAttributes = {
  DistributionDomainName: string;
  DistributionHostedZoneId: string;
  DomainNameArn: string;
  RegionalDomainName: string;
  RegionalHostedZoneId: string;
};
/**
 * Type definition for `AWS::ApiGateway::DomainName.EndpointConfiguration`.
 * The ``EndpointConfiguration`` property type specifies the endpoint types and IP address types of an Amazon API Gateway domain name.
 ``EndpointConfiguration`` is a property of the [AWS::ApiGateway::DomainName](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-domainname.html) resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-domainname-endpointconfiguration.html}
 */
export type EndpointConfiguration = {
  IpAddressType?: string;
  Types?: string[];
};
/**
 * Type definition for `AWS::ApiGateway::DomainName.MutualTlsAuthentication`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-domainname-mutualtlsauthentication.html}
 */
export type MutualTlsAuthentication = {
  TruststoreUri?: string;
  TruststoreVersion?: string;
};
/**
 * Type definition for `AWS::ApiGateway::DomainName.Tag`.
 * An array of key-value pairs to apply to this resource.
 For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-domainname-tag.html}
 */
export type Tag = {
  /**
   * A string you can use to assign a value. The combination of tag keys and values can help you organize and categorize your resources.
   */
  Key?: string;
  /**
   * The value for the specified tag key.
   */
  Value?: string;
};
/**
 * The ``AWS::ApiGateway::DomainName`` resource specifies a public custom domain name for your API in API Gateway.
 To create a custom domain name for private APIs, use [AWS::ApiGateway::DomainNameV2](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-domainnamev2.html).
 You can use a custom domain name to provide a URL that's more intuitive and easier to recall. For more information about using custom domain names, see [Set up Custom Domain Name for an API in API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html) in the *API Gateway Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-domainname.html}
 */
export class ApiGatewayDomainName extends $Resource<
  "AWS::ApiGateway::DomainName",
  ApiGatewayDomainNameProperties,
  ApiGatewayDomainNameAttributes
> {
  public static readonly Type = "AWS::ApiGateway::DomainName";
  constructor(
    logicalId: string,
    properties: ApiGatewayDomainNameProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ApiGatewayDomainName.Type, properties, options);
  }
}
