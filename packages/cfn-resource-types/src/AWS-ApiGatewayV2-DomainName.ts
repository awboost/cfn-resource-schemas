import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The ``AWS::ApiGatewayV2::DomainName`` resource specifies a custom domain name for your API in Amazon API Gateway (API Gateway).
 You can use a custom domain name to provide a URL that's more intuitive and easier to recall. For more information about using custom domain names, see [Set up Custom Domain Name for an API in API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html) in the *API Gateway Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-domainname.html}
 */
export type ApiGatewayV2DomainNameProperties = {
  /**
   * The custom domain name for your API in Amazon API Gateway. Uppercase letters and the underscore (``_``) character are not supported.
   */
  DomainName: string;
  /**
   * The domain name configurations.
   */
  DomainNameConfigurations?: DomainNameConfiguration[];
  /**
   * The mutual TLS authentication configuration for a custom domain name.
   */
  MutualTlsAuthentication?: MutualTlsAuthentication;
  /**
   * The collection of tags associated with a domain name.
   */
  Tags?: Record<string, string>;
};
/**
 * Attribute type definition for `AWS::ApiGatewayV2::DomainName`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-domainname.html#aws-resource-apigatewayv2-domainname-return-values}
 */
export type ApiGatewayV2DomainNameAttributes = {
  DomainNameArn: string;
  RegionalDomainName: string;
  RegionalHostedZoneId: string;
};
/**
 * Type definition for `AWS::ApiGatewayV2::DomainName.DomainNameConfiguration`.
 * The ``DomainNameConfiguration`` property type specifies the configuration for an API's domain name.
  ``DomainNameConfiguration`` is a property of the [AWS::ApiGatewayV2::DomainName](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-domainname.html) resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-domainname-domainnameconfiguration.html}
 */
export type DomainNameConfiguration = {
  /**
   * An AWS-managed certificate that will be used by the edge-optimized endpoint for this domain name. AWS Certificate Manager is the only supported source.
   */
  CertificateArn?: string;
  /**
   * The user-friendly name of the certificate that will be used by the edge-optimized endpoint for this domain name.
   */
  CertificateName?: string;
  /**
   * The endpoint type.
   */
  EndpointType?: string;
  IpAddressType?: string;
  /**
   * The Amazon resource name (ARN) for the public certificate issued by ACMlong. This ARN is used to validate custom domain ownership. It's required only if you configure mutual TLS and use either an ACM-imported or a private CA certificate ARN as the regionalCertificateArn.
   */
  OwnershipVerificationCertificateArn?: string;
  /**
   * The Transport Layer Security (TLS) version of the security policy for this domain name. The valid values are ``TLS_1_0`` and ``TLS_1_2``.
   */
  SecurityPolicy?: string;
};
/**
 * Type definition for `AWS::ApiGatewayV2::DomainName.MutualTlsAuthentication`.
 * If specified, API Gateway performs two-way authentication between the client and the server. Clients must present a trusted certificate to access your API.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-domainname-mutualtlsauthentication.html}
 */
export type MutualTlsAuthentication = {
  /**
   * An Amazon S3 URL that specifies the truststore for mutual TLS authentication, for example, ``s3://bucket-name/key-name``. The truststore can contain certificates from public or private certificate authorities. To update the truststore, upload a new version to S3, and then update your custom domain name to use the new version. To update the truststore, you must have permissions to access the S3 object.
   */
  TruststoreUri?: string;
  /**
   * The version of the S3 object that contains your truststore. To specify a version, you must have versioning enabled for the S3 bucket.
   */
  TruststoreVersion?: string;
};
/**
 * The ``AWS::ApiGatewayV2::DomainName`` resource specifies a custom domain name for your API in Amazon API Gateway (API Gateway).
 You can use a custom domain name to provide a URL that's more intuitive and easier to recall. For more information about using custom domain names, see [Set up Custom Domain Name for an API in API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html) in the *API Gateway Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-domainname.html}
 */
export class ApiGatewayV2DomainName extends $Resource<
  "AWS::ApiGatewayV2::DomainName",
  ApiGatewayV2DomainNameProperties,
  ApiGatewayV2DomainNameAttributes
> {
  public static readonly Type = "AWS::ApiGatewayV2::DomainName";
  constructor(
    logicalId: string,
    properties: ApiGatewayV2DomainNameProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ApiGatewayV2DomainName.Type, properties, options);
  }
}
