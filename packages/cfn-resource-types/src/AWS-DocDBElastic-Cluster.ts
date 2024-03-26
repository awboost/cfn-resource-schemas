import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::DocDBElastic::Cluster Amazon DocumentDB (with MongoDB compatibility) Elastic Scale resource describes a Cluster
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdbelastic-cluster.html}
 */
export type DocDBElasticClusterProperties = {
  AdminUserName: string;
  AdminUserPassword?: string;
  AuthType: string;
  BackupRetentionPeriod?: number;
  /**
   * @minLength `1`
   * @maxLength `50`
   * @pattern `[a-zA-z][a-zA-Z0-9]*(-[a-zA-Z0-9]+)*`
   */
  ClusterName: string;
  KmsKeyId?: string;
  PreferredBackupWindow?: string;
  PreferredMaintenanceWindow?: string;
  ShardCapacity: number;
  ShardCount: number;
  ShardInstanceCount?: number;
  SubnetIds?: string[];
  /**
   * @minLength `0`
   * @maxLength `50`
   */
  Tags?: Tag[];
  VpcSecurityGroupIds?: string[];
};
/**
 * Attribute type definition for `AWS::DocDBElastic::Cluster`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdbelastic-cluster.html#aws-resource-docdbelastic-cluster-return-values}
 */
export type DocDBElasticClusterAttributes = {
  ClusterArn: string;
  ClusterEndpoint: string;
};
/**
 * Type definition for `AWS::DocDBElastic::Cluster.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-docdbelastic-cluster-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!aws:)[a-zA-Z+-=._:/]+$`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * The AWS::DocDBElastic::Cluster Amazon DocumentDB (with MongoDB compatibility) Elastic Scale resource describes a Cluster
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdbelastic-cluster.html}
 */
export class DocDBElasticCluster extends $Resource<
  "AWS::DocDBElastic::Cluster",
  DocDBElasticClusterProperties,
  DocDBElasticClusterAttributes
> {
  public static readonly Type = "AWS::DocDBElastic::Cluster";
  constructor(
    logicalId: string,
    properties: DocDBElasticClusterProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DocDBElasticCluster.Type, properties, options);
  }
}
