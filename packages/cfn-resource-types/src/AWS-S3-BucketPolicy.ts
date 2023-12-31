import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::S3::BucketPolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-bucketpolicy.html}
 */
export type S3BucketPolicyProperties = {
  /**
   * The name of the Amazon S3 bucket to which the policy applies.
   */
  Bucket: string;
  /**
   * A policy document containing permissions to add to the specified bucket. In IAM, you must provide policy documents in JSON format. However, in CloudFormation you can provide the policy in JSON or YAML format because CloudFormation converts YAML to JSON before submitting it to IAM.
   */
  PolicyDocument: Record<string, any> | string;
};
/**
 * Resource Type definition for AWS::S3::BucketPolicy
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
