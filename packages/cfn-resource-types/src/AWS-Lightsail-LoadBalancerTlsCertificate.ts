import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::Lightsail::LoadBalancerTlsCertificate
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-loadbalancertlscertificate.html}
 */
export type LightsailLoadBalancerTlsCertificateProperties = {
  /**
   * An array of strings listing alternative domains and subdomains for your SSL/TLS certificate.
   */
  CertificateAlternativeNames?: string[];
  /**
   * The domain name (e.g., example.com ) for your SSL/TLS certificate.
   */
  CertificateDomainName: string;
  /**
   * The SSL/TLS certificate name.
   */
  CertificateName: string;
  /**
   * A Boolean value that indicates whether HTTPS redirection is enabled for the load balancer.
   */
  HttpsRedirectionEnabled?: boolean;
  /**
   * When true, the SSL/TLS certificate is attached to the Lightsail load balancer.
   */
  IsAttached?: boolean;
  /**
   * The name of your load balancer.
   * @pattern `\w[\w\-]*\w`
   */
  LoadBalancerName: string;
};
/**
 * Attribute type definition for `AWS::Lightsail::LoadBalancerTlsCertificate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-loadbalancertlscertificate.html#aws-resource-lightsail-loadbalancertlscertificate-return-values}
 */
export type LightsailLoadBalancerTlsCertificateAttributes = {
  LoadBalancerTlsCertificateArn: string;
  /**
   * The validation status of the SSL/TLS certificate.
   */
  Status: string;
};
/**
 * Resource Type definition for AWS::Lightsail::LoadBalancerTlsCertificate
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-loadbalancertlscertificate.html}
 */
export class LightsailLoadBalancerTlsCertificate extends $Resource<
  "AWS::Lightsail::LoadBalancerTlsCertificate",
  LightsailLoadBalancerTlsCertificateProperties,
  LightsailLoadBalancerTlsCertificateAttributes
> {
  public static readonly Type = "AWS::Lightsail::LoadBalancerTlsCertificate";
  public static readonly AttributeNames = [
    "LoadBalancerTlsCertificateArn" as const,
    "Status" as const,
  ];
  constructor(
    logicalId: string,
    properties: LightsailLoadBalancerTlsCertificateProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      LightsailLoadBalancerTlsCertificate.Type,
      properties,
      LightsailLoadBalancerTlsCertificate.AttributeNames,
      options,
    );
  }
}
