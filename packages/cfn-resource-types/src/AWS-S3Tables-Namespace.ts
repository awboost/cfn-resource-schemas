import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::S3Tables::Namespace
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3tables-namespace.html}
 */
export type S3TablesNamespaceProperties = {
  /**
   * A name for the namespace.
   * @minLength `1`
   * @maxLength `255`
   */
  Namespace: string;
  /**
   * The Amazon Resource Name (ARN) of the specified table bucket.
   */
  TableBucketARN: string;
};
/**
 * Resource Type definition for AWS::S3Tables::Namespace
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3tables-namespace.html}
 */
export class S3TablesNamespace extends $Resource<
  "AWS::S3Tables::Namespace",
  S3TablesNamespaceProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::S3Tables::Namespace";
  constructor(
    logicalId: string,
    properties: S3TablesNamespaceProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, S3TablesNamespace.Type, properties, options);
  }
}
