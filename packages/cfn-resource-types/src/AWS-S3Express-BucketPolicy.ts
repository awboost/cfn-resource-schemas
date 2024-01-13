import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::S3Express::BucketPolicy.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-bucketpolicy.html}
 */
export type S3ExpressBucketPolicyProperties = {
  /**
   * The name of the S3 directory bucket to which the policy applies.
   */
  Bucket: string;
  /**
   * A policy document containing permissions to add to the specified bucket. In IAM, you must provide policy documents in JSON format. However, in CloudFormation you can provide the policy in JSON or YAML format because CloudFormation converts YAML to JSON before submitting it to IAM.
   */
  PolicyDocument: Record<string, any> | string;
};
/**
 * Resource Type definition for AWS::S3Express::BucketPolicy.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-bucketpolicy.html}
 */
export class S3ExpressBucketPolicy extends $Resource<
  "AWS::S3Express::BucketPolicy",
  S3ExpressBucketPolicyProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::S3Express::BucketPolicy";
  constructor(
    logicalId: string,
    properties: S3ExpressBucketPolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, S3ExpressBucketPolicy.Type, properties, options);
  }
}
