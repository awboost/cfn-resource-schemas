import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::CloudFront::TrustStore`.
 * A trust store.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-truststore.html}
 */
export type CloudFrontTrustStoreProperties = {
  /**
   * A CA certificates bundle source.
   */
  CaCertificatesBundleSource?: CaCertificatesBundleSource;
  /**
   * The trust store's name.
   */
  Name: string;
  /**
   * A complex type that contains zero or more ``Tag`` elements.
   */
  Tags?: Tag[];
  UseClientCertificateOCSPEndpoint?: boolean;
};
/**
 * Attribute type definition for `AWS::CloudFront::TrustStore`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-truststore.html#aws-resource-cloudfront-truststore-return-values}
 */
export type CloudFrontTrustStoreAttributes = {
  /**
   * @pattern `^arn:aws:cloudfront::[0-9]{12}:trust-store/[A-Za-z0-9_]+$`
   */
  Arn: string;
  ETag: string;
  Id: string;
  LastModifiedTime: string;
  NumberOfCaCertificates: number;
  Status: "PENDING" | "ACTIVE" | "FAILED";
};
/**
 * Type definition for `AWS::CloudFront::TrustStore.CaCertificatesBundleS3Location`.
 * The CA certificates bundle location in Amazon S3.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-truststore-cacertificatesbundles3location.html}
 */
export type CaCertificatesBundleS3Location = {
  /**
   * The S3 bucket.
   */
  Bucket: string;
  /**
   * The location's key.
   */
  Key: string;
  /**
   * The location's Region.
   */
  Region: string;
  /**
   * The location's version.
   */
  Version?: string;
};
/**
 * Type definition for `AWS::CloudFront::TrustStore.CaCertificatesBundleSource`.
 * A CA certificates bundle source.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-truststore-cacertificatesbundlesource.html}
 */
export type CaCertificatesBundleSource = {
  /**
   * The CA certificates bundle location in Amazon S3.
   */
  CaCertificatesBundleS3Location: CaCertificatesBundleS3Location;
};
/**
 * Type definition for `AWS::CloudFront::TrustStore.Tag`.
 * A complex type that contains ``Tag`` key and ``Tag`` value.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-truststore-tag.html}
 */
export type Tag = {
  /**
     * A string that contains ``Tag`` key.
     The string length should be between 1 and 128 characters. Valid characters include ``a-z``, ``A-Z``, ``0-9``, space, and the special characters ``_ - . : / = + @``.
     * @minLength `1`
     * @maxLength `128`
     * @pattern `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
     */
  Key: string;
  /**
     * A string that contains an optional ``Tag`` value.
     The string length should be between 0 and 256 characters. Valid characters include ``a-z``, ``A-Z``, ``0-9``, space, and the special characters ``_ - . : / = + @``.
     * @minLength `0`
     * @maxLength `256`
     * @pattern `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
     */
  Value: string;
};
/**
 * Resource type definition for `AWS::CloudFront::TrustStore`.
 * A trust store.
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
