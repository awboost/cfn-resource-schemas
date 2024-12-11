import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::S3Tables::TableBucketPolicy`.
 * Applies an IAM resource policy to a table bucket.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3tables-tablebucketpolicy.html}
 */
export type S3TablesTableBucketPolicyProperties = {
  /**
   * A policy document containing permissions to add to the specified table bucket. In IAM, you must provide policy documents in JSON format. However, in CloudFormation you can provide the policy in JSON or YAML format because CloudFormation converts YAML to JSON before submitting it to IAM.
   */
  ResourcePolicy: ResourcePolicy;
  /**
   * The Amazon Resource Name (ARN) of the table bucket to which the policy applies.
   */
  TableBucketARN: string;
};
/**
 * Type definition for `AWS::S3Tables::TableBucketPolicy.ResourcePolicy`.
 * A policy document containing permissions to add to the specified table bucket. In IAM, you must provide policy documents in JSON format. However, in CloudFormation you can provide the policy in JSON or YAML format because CloudFormation converts YAML to JSON before submitting it to IAM.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3tables-tablebucketpolicy-resourcepolicy.html}
 */
export type ResourcePolicy = Record<string, any> | string;
/**
 * Resource type definition for `AWS::S3Tables::TableBucketPolicy`.
 * Applies an IAM resource policy to a table bucket.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3tables-tablebucketpolicy.html}
 */
export class S3TablesTableBucketPolicy extends $Resource<
  "AWS::S3Tables::TableBucketPolicy",
  S3TablesTableBucketPolicyProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::S3Tables::TableBucketPolicy";
  constructor(
    logicalId: string,
    properties: S3TablesTableBucketPolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, S3TablesTableBucketPolicy.Type, properties, options);
  }
}
