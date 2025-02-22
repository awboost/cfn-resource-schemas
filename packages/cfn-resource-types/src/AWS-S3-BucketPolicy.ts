import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Applies an Amazon S3 bucket policy to an Amazon S3 bucket. If you are using an identity other than the root user of the AWS-account that owns the bucket, the calling identity must have the ``PutBucketPolicy`` permissions on the specified bucket and belong to the bucket owner's account in order to use this operation.
 If you don't have ``PutBucketPolicy`` permissions, Amazon S3 returns a ``403 Access Denied`` error. If you have the correct permissions, but you're not using an identity that belongs to the bucket owner's account, Amazon S3 returns a ``405 Method Not Allowed`` error.
   As a security precaution, the root user of the AWS-account that owns a bucket can always use this operation, even if the policy explicitly denies the root user the ability to perform this action.
  When using the ``AWS::S3::BucketPolicy`` resource, you can create, update, and delete bucket policies for S3 buckets located in regions different from the stack's region. This cross-region bucket policy modification functionality is supported for backward compatibility with existing workflows.
  If the [DeletionPolicy attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html) is not specified or set to ``Delete``, the bucket policy will be removed when the stack is deleted. If set to ``Retain``, the bucket policy will be preserved even after the stack is deleted.
  For example, a CloudFormation stack in ``us-east-1`` can use the ``AWS::S3::BucketPolicy`` resource to manage the bucket policy for an S3 bucket in ``us-west-2``. The retention or removal of the bucket policy during the stack deletion is determined by the ``DeletionPolicy`` attribute specified in the stack template.
 For more information, see [Bucket policy examples](https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html).
 The following operations are related to ``PutBucketPolicy``:
  +   [CreateBucket](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html)
  +   [DeleteBucket](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucket.html)
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-bucketpolicy.html}
 */
export type S3BucketPolicyProperties = {
  /**
   * The name of the Amazon S3 bucket to which the policy applies.
   */
  Bucket: string;
  /**
   * A policy document containing permissions to add to the specified bucket. In IAM, you must provide policy documents in JSON format. However, in CloudFormation you can provide the policy in JSON or YAML format because CloudFormation converts YAML to JSON before submitting it to IAM. For more information, see the AWS::IAM::Policy [PolicyDocument](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html#cfn-iam-policy-policydocument) resource description in this guide and [Access Policy Language Overview](https://docs.aws.amazon.com/AmazonS3/latest/dev/access-policy-language-overview.html) in the *Amazon S3 User Guide*.
   */
  PolicyDocument: Record<string, any> | string;
};
/**
 * Applies an Amazon S3 bucket policy to an Amazon S3 bucket. If you are using an identity other than the root user of the AWS-account that owns the bucket, the calling identity must have the ``PutBucketPolicy`` permissions on the specified bucket and belong to the bucket owner's account in order to use this operation.
 If you don't have ``PutBucketPolicy`` permissions, Amazon S3 returns a ``403 Access Denied`` error. If you have the correct permissions, but you're not using an identity that belongs to the bucket owner's account, Amazon S3 returns a ``405 Method Not Allowed`` error.
   As a security precaution, the root user of the AWS-account that owns a bucket can always use this operation, even if the policy explicitly denies the root user the ability to perform this action.
  When using the ``AWS::S3::BucketPolicy`` resource, you can create, update, and delete bucket policies for S3 buckets located in regions different from the stack's region. This cross-region bucket policy modification functionality is supported for backward compatibility with existing workflows.
  If the [DeletionPolicy attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html) is not specified or set to ``Delete``, the bucket policy will be removed when the stack is deleted. If set to ``Retain``, the bucket policy will be preserved even after the stack is deleted.
  For example, a CloudFormation stack in ``us-east-1`` can use the ``AWS::S3::BucketPolicy`` resource to manage the bucket policy for an S3 bucket in ``us-west-2``. The retention or removal of the bucket policy during the stack deletion is determined by the ``DeletionPolicy`` attribute specified in the stack template.
 For more information, see [Bucket policy examples](https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html).
 The following operations are related to ``PutBucketPolicy``:
  +   [CreateBucket](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html)
  +   [DeleteBucket](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucket.html)
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-bucketpolicy.html}
 */
export class S3BucketPolicy extends $Resource<
  "AWS::S3::BucketPolicy",
  S3BucketPolicyProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::S3::BucketPolicy";
  constructor(
    logicalId: string,
    properties: S3BucketPolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, S3BucketPolicy.Type, properties, options);
  }
}
