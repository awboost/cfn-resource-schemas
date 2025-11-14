import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::DSQL::Cluster
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dsql-cluster.html}
 */
export type DSQLClusterProperties = {
  /**
   * Whether deletion protection is enabled in this cluster.
   */
  DeletionProtectionEnabled?: boolean;
  /**
   * The KMS key that encrypts data on the cluster.
   */
  KmsEncryptionKey?: string;
  /**
   * The Multi-region properties associated to this cluster.
   */
  MultiRegionProperties?: {
    Clusters?: string[];
    /**
     * The witness region in a multi-region cluster.
     */
    WitnessRegion?: string;
  };
  /**
   * The IAM policy applied to the cluster resource.
   */
  PolicyDocument?: string;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::DSQL::Cluster`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dsql-cluster.html#aws-resource-dsql-cluster-return-values}
 */
export type DSQLClusterAttributes = {
  /**
   * The time of when the cluster was created in ISO-8601 format.
   */
  CreationTime: string;
  /**
   * The encryption configuration details for the cluster.
   */
  EncryptionDetails: {
    /**
     * The status of encryption for the cluster.
     */
    EncryptionStatus: string;
    /**
     * The type of encryption that protects data in the cluster.
     */
    EncryptionType: string;
    /**
     * The Amazon Resource Name (ARN) of the KMS key that encrypts data in the cluster.
     */
    KmsKeyArn: string;
  };
  /**
   * The ID of the created cluster.
   */
  Identifier: string;
  /**
   * The version number of the cluster's resource based policy
   */
  PolicyVersion: string;
  /**
   * The Amazon Resource Name (ARN) for the cluster.
   */
  ResourceArn: string;
  /**
   * The status of the cluster.
   */
  Status: string;
  /**
   * The VPC endpoint service name.
   */
  VpcEndpointServiceName: string;
};
/**
 * Type definition for `AWS::DSQL::Cluster.Tag`.
 * A map of key and value pairs to use to tag your cluster.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dsql-cluster-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 1 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::DSQL::Cluster
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dsql-cluster.html}
 */
export class DSQLCluster extends $Resource<
  "AWS::DSQL::Cluster",
  DSQLClusterProperties,
  DSQLClusterAttributes
> {
  public static readonly Type = "AWS::DSQL::Cluster";
  constructor(
    logicalId: string,
    properties: DSQLClusterProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DSQLCluster.Type, properties, options);
  }
}
