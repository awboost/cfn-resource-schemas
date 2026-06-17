import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Neptune::GlobalCluster
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-globalcluster.html}
 */
export type NeptuneGlobalClusterProperties = {
  /**
   * Whether deletion protection is enabled.
   */
  DeletionProtection?: boolean;
  /**
   * The name of the database engine.
   */
  Engine?: "neptune";
  /**
   * The version number of the database engine.
   */
  EngineVersion?: string;
  /**
   * The cluster identifier of the global database cluster.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[A-Za-z][0-9A-Za-z-:._]*$`
   */
  GlobalClusterIdentifier?: string;
  /**
   * The Amazon Resource Name (ARN) of an existing Neptune DB cluster to use as the primary cluster of the new global database.
   */
  SourceDBClusterIdentifier?: string;
  /**
   * Whether the global database cluster is storage encrypted.
   */
  StorageEncrypted?: boolean;
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Type definition for `AWS::Neptune::GlobalCluster.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-neptune-globalcluster-tag.html}
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
 * Resource Type definition for AWS::Neptune::GlobalCluster
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-globalcluster.html}
 */
export class NeptuneGlobalCluster extends $Resource<
  "AWS::Neptune::GlobalCluster",
  NeptuneGlobalClusterProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::Neptune::GlobalCluster";
  constructor(
    logicalId: string,
    properties: NeptuneGlobalClusterProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, NeptuneGlobalCluster.Type, properties, options);
  }
}
