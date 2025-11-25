import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::CloudFront::TrustStore. TrustStores contain CA certificates for mTLS authentication and can be associated with CloudFront distributions.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-truststore.html}
 */
export type CloudFrontTrustStoreProperties = {
  CaCertificatesBundleSource?: CaCertificatesBundleSource;
  /**
   * A unique name to identify the trust store
   */
  Name: string;
  /**
   * Key-value pairs for resource tagging
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::CloudFront::TrustStore`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-truststore.html#aws-resource-cloudfront-truststore-return-values}
 */
export type CloudFrontTrustStoreAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the trust store
   * @pattern `^arn:aws:cloudfront::[0-9]{12}:trust-store/[A-Za-z0-9_]+$`
   */
  Arn: string;
  ETag: string;
  /**
   * The unique identifier for the trust store
   */
  Id: string;
  /**
   * The last modification timestamp of the trust store PEM file
   */
  LastModifiedTime: string;
  /**
   * The number of CA certificates in the trust store PEM file
   */
  NumberOfCaCertificates: number;
  /**
   * Current status of the trust store
   */
  Status: "PENDING" | "ACTIVE" | "FAILED";
};
/**
 * Type definition for `AWS::CloudFront::TrustStore.CaCertificatesBundleS3Location`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-truststore-cacertificatesbundles3location.html}
 */
export type CaCertificatesBundleS3Location = {
  /**
   * The S3 bucket containing the CA certificates bundle PEM file
   */
  Bucket: string;
  /**
   * The S3 object key of the CA certificates bundle PEM file
   */
  Key: string;
  /**
   * The S3 bucket region
   */
  Region: string;
  /**
   * The S3 object version of the CA certificates bundle PEM file
   */
  Version?: string;
};
/**
 * Type definition for `AWS::CloudFront::TrustStore.CaCertificatesBundleSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-truststore-cacertificatesbundlesource.html}
 */
export type CaCertificatesBundleSource = {
  CaCertificatesBundleS3Location: CaCertificatesBundleS3Location;
};
/**
 * Type definition for `AWS::CloudFront::TrustStore.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-truststore-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9 _.:/=+\-@]{1,128}\Z`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9 _.:/=+\-@]{0,256}\Z`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::CloudFront::TrustStore. TrustStores contain CA certificates for mTLS authentication and can be associated with CloudFront distributions.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-truststore.html}
 */
export class CloudFrontTrustStore extends $Resource<
  "AWS::CloudFront::TrustStore",
  CloudFrontTrustStoreProperties,
  CloudFrontTrustStoreAttributes
> {
  public static readonly Type = "AWS::CloudFront::TrustStore";
  constructor(
    logicalId: string,
    properties: CloudFrontTrustStoreProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CloudFrontTrustStore.Type, properties, options);
  }
}
