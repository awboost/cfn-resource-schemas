import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::ElasticLoadBalancingV2::TrustStoreRevocation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-truststorerevocation.html}
 */
export type ElasticLoadBalancingV2TrustStoreRevocationProperties = {
  /**
   * The attributes required to create a trust store revocation.
   */
  RevocationContents?: RevocationContent[];
  /**
   * The Amazon Resource Name (ARN) of the trust store.
   */
  TrustStoreArn?: string;
};
/**
 * Attribute type definition for `AWS::ElasticLoadBalancingV2::TrustStoreRevocation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-truststorerevocation.html}
 */
export type ElasticLoadBalancingV2TrustStoreRevocationAttributes = {
  /**
   * The ID associated with the revocation.
   */
  RevocationId: number;
  /**
   * The data associated with a trust store revocation
   */
  TrustStoreRevocations: {
    NumberOfRevokedEntries: number;
    RevocationId: string;
    RevocationType: string;
    TrustStoreArn: string;
  }[];
};
/**
 * Type definition for `AWS::ElasticLoadBalancingV2::TrustStoreRevocation.RevocationContent`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-truststorerevocation-revocationcontent.html}
 */
export type RevocationContent = {
  RevocationType?: string;
  S3Bucket?: string;
  S3Key?: string;
  S3ObjectVersion?: string;
};
/**
 * Type definition for `AWS::ElasticLoadBalancingV2::TrustStoreRevocation.TrustStoreRevocation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-truststorerevocation-truststorerevocation.html}
 */
export type TrustStoreRevocation = {
  NumberOfRevokedEntries?: number;
  RevocationId?: string;
  RevocationType?: string;
  TrustStoreArn?: string;
};
/**
 * Resource Type definition for AWS::ElasticLoadBalancingV2::TrustStoreRevocation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-truststorerevocation.html}
 */
export class ElasticLoadBalancingV2TrustStoreRevocation extends $Resource<
  "AWS::ElasticLoadBalancingV2::TrustStoreRevocation",
  ElasticLoadBalancingV2TrustStoreRevocationProperties,
  ElasticLoadBalancingV2TrustStoreRevocationAttributes
> {
  public static readonly Type =
    "AWS::ElasticLoadBalancingV2::TrustStoreRevocation";
  constructor(
    logicalId: string,
    properties: ElasticLoadBalancingV2TrustStoreRevocationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ElasticLoadBalancingV2TrustStoreRevocation.Type,
      properties,
      options,
    );
  }
}
