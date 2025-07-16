import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::S3Tables::TablePolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3tables-tablepolicy.html}
 */
export type S3TablesTablePolicyProperties = {
  /**
   * A policy document containing permissions to add to the specified table. In IAM, you must provide policy documents in JSON format. However, in CloudFormation you can provide the policy in JSON or YAML format because CloudFormation converts YAML to JSON before submitting it to IAM.
   */
  ResourcePolicy: ResourcePolicy;
  /**
   * The Amazon Resource Name (ARN) of the specified table.
   */
  TableARN: string;
};
/**
 * Attribute type definition for `AWS::S3Tables::TablePolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3tables-tablepolicy.html#aws-resource-s3tables-tablepolicy-return-values}
 */
export type S3TablesTablePolicyAttributes = {
  /**
   * The namespace that the table belongs to.
   */
  Namespace: string;
  /**
   * The Amazon Resource Name (ARN) of the specified table bucket.
   */
  TableBucketARN: string;
  /**
   * The name for the table.
   */
  TableName: string;
};
/**
 * Type definition for `AWS::S3Tables::TablePolicy.ResourcePolicy`.
 * A policy document containing permissions to add to the specified table. In IAM, you must provide policy documents in JSON format. However, in CloudFormation you can provide the policy in JSON or YAML format because CloudFormation converts YAML to JSON before submitting it to IAM.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3tables-tablepolicy-resourcepolicy.html}
 */
export type ResourcePolicy = Record<string, any> | string;
/**
 * Resource Type definition for AWS::S3Tables::TablePolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3tables-tablepolicy.html}
 */
export class S3TablesTablePolicy extends $Resource<
  "AWS::S3Tables::TablePolicy",
  S3TablesTablePolicyProperties,
  S3TablesTablePolicyAttributes
> {
  public static readonly Type = "AWS::S3Tables::TablePolicy";
  constructor(
    logicalId: string,
    properties: S3TablesTablePolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, S3TablesTablePolicy.Type, properties, options);
  }
}
