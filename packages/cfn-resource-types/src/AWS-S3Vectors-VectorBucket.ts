import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::S3Vectors::VectorBucket
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3vectors-vectorbucket.html}
 */
export type S3VectorsVectorBucketProperties = {
  /**
   * The encryption configuration for the vector bucket.
   */
  EncryptionConfiguration?: EncryptionConfiguration;
  /**
   * The name of the vector bucket.
   * @minLength `3`
   * @maxLength `63`
   */
  VectorBucketName?: string;
};
/**
 * Attribute type definition for `AWS::S3Vectors::VectorBucket`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3vectors-vectorbucket.html#aws-resource-s3vectors-vectorbucket-return-values}
 */
export type S3VectorsVectorBucketAttributes = {
  /**
   * Date and time when the vector bucket was created.
   */
  CreationTime: string;
  /**
   * The Amazon Resource Name (ARN) of the vector bucket.
   */
  VectorBucketArn: string;
};
/**
 * Type definition for `AWS::S3Vectors::VectorBucket.EncryptionConfiguration`.
 * The encryption configuration for the vector bucket.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3vectors-vectorbucket-encryptionconfiguration.html}
 */
export type EncryptionConfiguration = {
  /**
   * AWS Key Management Service (KMS) customer managed key ID to use for the encryption configuration. This parameter is allowed if and only if sseType is set to aws:kms
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^(arn:aws[-a-z0-9]*:kms:[-a-z0-9]*:[0-9]{12}:key/.+)$`
   */
  KmsKeyArn?: string;
  /**
   * The server-side encryption type to use for the encryption configuration of the vector bucket. By default, if you don't specify, all new vectors in Amazon S3 vector buckets use server-side encryption with Amazon S3 managed keys (SSE-S3), specifically AES256.
   */
  SseType?: "AES256" | "aws:kms";
};
/**
 * Resource Type definition for AWS::S3Vectors::VectorBucket
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3vectors-vectorbucket.html}
 */
export class S3VectorsVectorBucket extends $Resource<
  "AWS::S3Vectors::VectorBucket",
  S3VectorsVectorBucketProperties,
  S3VectorsVectorBucketAttributes
> {
  public static readonly Type = "AWS::S3Vectors::VectorBucket";
  constructor(
    logicalId: string,
    properties: S3VectorsVectorBucketProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, S3VectorsVectorBucket.Type, properties, options);
  }
}
