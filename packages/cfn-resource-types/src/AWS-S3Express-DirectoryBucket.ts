import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::S3Express::DirectoryBucket.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-directorybucket.html}
 */
export type S3ExpressDirectoryBucketProperties = {
  /**
   * Specifies a name for the bucket. The bucket name must contain only lowercase letters, numbers, and hyphens (-). A directory bucket name must be unique in the chosen Availability Zone. The bucket name must also follow the format 'bucket_base_name--az_id--x-s3' (for example, 'DOC-EXAMPLE-BUCKET--usw2-az1--x-s3'). If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the bucket name.
   * @maxLength `63`
   * @pattern `^[a-z0-9][a-z0-9//.//-]*[a-z0-9]$`
   */
  BucketName?: string;
  /**
   * Specifies the number of Availability Zone that's used for redundancy for the bucket.
   */
  DataRedundancy: "SingleAvailabilityZone";
  /**
   * Specifies the AZ ID of the Availability Zone where the directory bucket will be created. An example AZ ID value is 'use1-az5'.
   */
  LocationName: string;
};
/**
 * Attribute type definition for `AWS::S3Express::DirectoryBucket`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-directorybucket.html#aws-resource-s3express-directorybucket-return-values}
 */
export type S3ExpressDirectoryBucketAttributes = {
  /**
   * Returns the Amazon Resource Name (ARN) of the specified bucket.
   */
  Arn: string;
};
/**
 * Resource Type definition for AWS::S3Express::DirectoryBucket.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-directorybucket.html}
 */
export class S3ExpressDirectoryBucket extends $Resource<
  "AWS::S3Express::DirectoryBucket",
  S3ExpressDirectoryBucketProperties,
  S3ExpressDirectoryBucketAttributes
> {
  public static readonly Type = "AWS::S3Express::DirectoryBucket";
  constructor(
    logicalId: string,
    properties: S3ExpressDirectoryBucketProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, S3ExpressDirectoryBucket.Type, properties, options);
  }
}
