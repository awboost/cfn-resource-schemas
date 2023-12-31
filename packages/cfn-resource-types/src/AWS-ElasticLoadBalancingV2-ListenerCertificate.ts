import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::ElasticLoadBalancingV2::ListenerCertificate
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenercertificate.html}
 */
export type ElasticLoadBalancingV2ListenerCertificateProperties = {
  Certificates: Certificate[];
  ListenerArn: string;
};
/**
 * Attribute type definition for `AWS::ElasticLoadBalancingV2::ListenerCertificate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenercertificate.html#aws-resource-elasticloadbalancingv2-listenercertificate-return-values}
 */
export type ElasticLoadBalancingV2ListenerCertificateAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::ElasticLoadBalancingV2::ListenerCertificate.Certificate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenercertificate-certificate.html}
 */
export type Certificate = {
  CertificateArn?: string;
};
/**
 * Resource Type definition for AWS::ElasticLoadBalancingV2::ListenerCertificate
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenercertificate.html}
 */
export class ElasticLoadBalancingV2ListenerCertificate extends $Resource<
  "AWS::ElasticLoadBalancingV2::ListenerCertificate",
  ElasticLoadBalancingV2ListenerCertificateProperties,
  ElasticLoadBalancingV2ListenerCertificateAttributes
> {
  public static readonly Type =
    "AWS::ElasticLoadBalancingV2::ListenerCertificate";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: ElasticLoadBalancingV2ListenerCertificateProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ElasticLoadBalancingV2ListenerCertificate.Type,
      properties,
      ElasticLoadBalancingV2ListenerCertificate.AttributeNames,
      options,
    );
  }
}
