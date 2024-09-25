import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::RDS::GlobalCluster
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html}
 */
export type RDSGlobalClusterProperties = {
  /**
   * The deletion protection setting for the new global database. The global database can't be deleted when deletion protection is enabled.
   */
  DeletionProtection?: boolean;
  /**
     * The name of the database engine to be used for this DB cluster. Valid Values: aurora (for MySQL 5.6-compatible Aurora), aurora-mysql (for MySQL 5.7-compatible Aurora).
    If you specify the SourceDBClusterIdentifier property, don't specify this property. The value is inherited from the cluster.
     */
  Engine?: "aurora" | "aurora-mysql" | "aurora-postgresql";
  /**
   * The life cycle type of the global cluster. You can use this setting to enroll your global cluster into Amazon RDS Extended Support.
   */
  EngineLifecycleSupport?: string;
  /**
   * The version number of the database engine to use. If you specify the SourceDBClusterIdentifier property, don't specify this property. The value is inherited from the cluster.
   */
  EngineVersion?: string;
  /**
   * The cluster identifier of the new global database cluster. This parameter is stored as a lowercase string.
   * @minLength `1`
   * @maxLength `63`
   * @pattern `^[a-zA-Z]{1}(?:-?[a-zA-Z0-9]){0,62}$`
   */
  GlobalClusterIdentifier?: string;
  /**
   * The Amazon Resource Name (ARN) to use as the primary cluster of the global database. This parameter is optional. This parameter is stored as a lowercase string.
   */
  SourceDBClusterIdentifier?: string;
  /**
     *  The storage encryption setting for the new global database cluster.
    If you specify the SourceDBClusterIdentifier property, don't specify this property. The value is inherited from the cluster.
     */
  StorageEncrypted?: boolean;
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Type definition for `AWS::RDS::GlobalCluster.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-globalcluster-tag.html}
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
  Value?: string;
};
/**
 * Resource Type definition for AWS::RDS::GlobalCluster
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html}
 */
export class RDSGlobalCluster extends $Resource<
  "AWS::RDS::GlobalCluster",
  RDSGlobalClusterProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::RDS::GlobalCluster";
  constructor(
    logicalId: string,
    properties: RDSGlobalClusterProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, RDSGlobalCluster.Type, properties, options);
  }
}
