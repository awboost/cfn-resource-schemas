import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type Definition for AWS::S3Outposts::BucketPolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-bucketpolicy.html}
 */
export type S3OutpostsBucketPolicyProperties = {
  /**
   * The Amazon Resource Name (ARN) of the specified bucket.
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:[^:]+:s3-outposts:[a-zA-Z0-9\-]+:\d{12}:outpost\/[^:]+\/bucket\/[^:]+$`
   */
  Bucket: string;
  /**
   * A policy document containing permissions to add to the specified bucket.
   */
  PolicyDocument: Record<string, any>;
};
/**
 * Resource Type Definition for AWS::S3Outposts::BucketPolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-bucketpolicy.html}
 */
export class S3OutpostsBucketPolicy extends $Resource<
  "AWS::S3Outposts::BucketPolicy",
  S3OutpostsBucketPolicyProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::S3Outposts::BucketPolicy";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: S3OutpostsBucketPolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      S3OutpostsBucketPolicy.Type,
      properties,
      S3OutpostsBucketPolicy.AttributeNames,
      options,
    );
  }
}
