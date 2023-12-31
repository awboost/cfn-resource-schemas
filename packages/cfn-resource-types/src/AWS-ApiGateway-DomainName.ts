import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::ApiGateway::DomainName.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-domainname.html}
 */
export type ApiGatewayDomainNameProperties = {
  CertificateArn?: string;
  DomainName?: string;
  EndpointConfiguration?: EndpointConfiguration;
  MutualTlsAuthentication?: MutualTlsAuthentication;
  OwnershipVerificationCertificateArn?: string;
  RegionalCertificateArn?: string;
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
  RegionalDomainName: string;
  RegionalHostedZoneId: string;
};
/**
 * Type definition for `AWS::ApiGateway::DomainName.EndpointConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-domainname-endpointconfiguration.html}
 */
export type EndpointConfiguration = {
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
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-domainname-tag.html}
 */
export type Tag = {
  Key?: string;
  Value?: string;
};
/**
 * Resource Type definition for AWS::ApiGateway::DomainName.
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
