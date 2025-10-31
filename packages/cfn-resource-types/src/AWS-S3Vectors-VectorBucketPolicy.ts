import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::S3Vectors::VectorBucketPolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3vectors-vectorbucketpolicy.html}
 */
export type S3VectorsVectorBucketPolicyProperties = {
  /**
   * A policy document containing permissions to add to the specified vector bucket. In IAM, you must provide policy documents in JSON format. However, in CloudFormation you can provide the policy in JSON or YAML format because CloudFormation converts YAML to JSON before submitting it to IAM.
   */
  Policy: Policy;
  /**
   * The Amazon Resource Name (ARN) of the vector bucket.
   */
  VectorBucketArn?: string;
  /**
   * The name of the vector bucket
   * @minLength `3`
   * @maxLength `63`
   */
  VectorBucketName?: string;
};
/**
 * Type definition for `AWS::S3Vectors::VectorBucketPolicy.Policy`.
 * A policy document containing permissions to add to the specified vector bucket. In IAM, you must provide policy documents in JSON format. However, in CloudFormation you can provide the policy in JSON or YAML format because CloudFormation converts YAML to JSON before submitting it to IAM.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3vectors-vectorbucketpolicy-policy.html}
 */
export type Policy = Record<string, any> | string;
/**
 * Resource Type definition for AWS::S3Vectors::VectorBucketPolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3vectors-vectorbucketpolicy.html}
 */
export class S3VectorsVectorBucketPolicy extends $Resource<
  "AWS::S3Vectors::VectorBucketPolicy",
  S3VectorsVectorBucketPolicyProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::S3Vectors::VectorBucketPolicy";
  constructor(
    logicalId: string,
    properties: S3VectorsVectorBucketPolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, S3VectorsVectorBucketPolicy.Type, properties, options);
  }
}
