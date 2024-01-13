import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::ElasticLoadBalancingV2::TrustStore
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-truststore.html}
 */
export type ElasticLoadBalancingV2TrustStoreProperties = {
  /**
   * The name of the S3 bucket to fetch the CA certificate bundle from.
   */
  CaCertificatesBundleS3Bucket?: string;
  /**
   * The name of the S3 object to fetch the CA certificate bundle from.
   */
  CaCertificatesBundleS3Key?: string;
  /**
   * The version of the S3 bucket that contains the CA certificate bundle.
   */
  CaCertificatesBundleS3ObjectVersion?: string;
  /**
   * The name of the trust store.
   */
  Name?: string;
  /**
   * The tags to assign to the trust store.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::ElasticLoadBalancingV2::TrustStore`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-truststore.html}
 */
export type ElasticLoadBalancingV2TrustStoreAttributes = {
  /**
   * The number of certificates associated with the trust store.
   */
  NumberOfCaCertificates: number;
  /**
   * The status of the trust store, could be either of ACTIVE or CREATING.
   */
  Status: string;
  /**
   * The Amazon Resource Name (ARN) of the trust store.
   */
  TrustStoreArn: string;
};
/**
 * Type definition for `AWS::ElasticLoadBalancingV2::TrustStore.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-truststore-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::ElasticLoadBalancingV2::TrustStore
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-truststore.html}
 */
export class ElasticLoadBalancingV2TrustStore extends $Resource<
  "AWS::ElasticLoadBalancingV2::TrustStore",
  ElasticLoadBalancingV2TrustStoreProperties,
  ElasticLoadBalancingV2TrustStoreAttributes
> {
  public static readonly Type = "AWS::ElasticLoadBalancingV2::TrustStore";
  constructor(
    logicalId: string,
    properties: ElasticLoadBalancingV2TrustStoreProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ElasticLoadBalancingV2TrustStore.Type,
      properties,
      options,
    );
  }
}
