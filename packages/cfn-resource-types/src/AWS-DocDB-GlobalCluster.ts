import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::DocDB::GlobalCluster resource represents an Amazon DocumentDB Global Cluster.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-globalcluster.html}
 */
export type DocDBGlobalClusterProperties = {
  /**
   * Indicates whether the global cluster has deletion protection enabled. The global cluster can't be deleted when deletion protection is enabled.
   */
  DeletionProtection?: boolean;
  /**
   * The database engine to use for this global cluster.
   */
  Engine?: "docdb";
  /**
   * The engine version to use for this global cluster.
   */
  EngineVersion?: string;
  /**
   * The cluster identifier of the global cluster.
   * @minLength `1`
   * @maxLength `63`
   * @pattern `^[a-zA-Z]{1}(?:-?[a-zA-Z0-9]){0,62}$`
   */
  GlobalClusterIdentifier: string;
  /**
   * The Amazon Resource Name (ARN) to use as the primary cluster of the global cluster. You may also choose to instead specify the DBClusterIdentifier. If you provide a value for this parameter, don't specify values for the following settings because Amazon DocumentDB uses the values from the specified source DB cluster: Engine, EngineVersion, StorageEncrypted
   */
  SourceDBClusterIdentifier?: string;
  /**
   * Indicates whether the global cluster has storage encryption enabled.
   */
  StorageEncrypted?: boolean;
  /**
   * The tags to be assigned to the Amazon DocumentDB resource.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::DocDB::GlobalCluster`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-globalcluster.html#aws-resource-docdb-globalcluster-return-values}
 */
export type DocDBGlobalClusterAttributes = {
  /**
   * The Amazon Resource Name (ARN) for the global cluster.
   */
  GlobalClusterArn: string;
  /**
   * The AWS Region-unique, immutable identifier for the global database cluster. This identifier is found in AWS CloudTrail log entries whenever the AWS KMS key for the DB cluster is accessed.
   */
  GlobalClusterResourceId: string;
};
/**
 * Type definition for `AWS::DocDB::GlobalCluster.Tag`.
 * A key-value pair to associate with an Amazon DocumentDB resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-docdb-globalcluster-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * The AWS::DocDB::GlobalCluster resource represents an Amazon DocumentDB Global Cluster.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-globalcluster.html}
 */
export class DocDBGlobalCluster extends $Resource<
  "AWS::DocDB::GlobalCluster",
  DocDBGlobalClusterProperties,
  DocDBGlobalClusterAttributes
> {
  public static readonly Type = "AWS::DocDB::GlobalCluster";
  constructor(
    logicalId: string,
    properties: DocDBGlobalClusterProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DocDBGlobalCluster.Type, properties, options);
  }
}
