import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::RDS::DBShardGroup resource creates an Amazon Aurora Limitless DB Shard Group.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbshardgroup.html}
 */
export type RDSDBShardGroupProperties = {
  /**
   * Specifies whether to create standby instances for the DB shard group.
   * @min `0`
   */
  ComputeRedundancy?: number;
  /**
   * The name of the primary DB cluster for the DB shard group.
   * @minLength `1`
   * @maxLength `63`
   */
  DBClusterIdentifier: string;
  /**
   * The name of the DB shard group.
   * @minLength `1`
   * @maxLength `63`
   */
  DBShardGroupIdentifier?: string;
  /**
   * The maximum capacity of the DB shard group in Aurora capacity units (ACUs).
   */
  MaxACU: number;
  /**
   * The minimum capacity of the DB shard group in Aurora capacity units (ACUs).
   */
  MinACU?: number;
  /**
   * Indicates whether the DB shard group is publicly accessible.
   */
  PubliclyAccessible?: boolean;
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::RDS::DBShardGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbshardgroup.html#aws-resource-rds-dbshardgroup-return-values}
 */
export type RDSDBShardGroupAttributes = {
  /**
   * The Amazon Web Services Region-unique, immutable identifier for the DB shard group.
   */
  DBShardGroupResourceId: string;
  /**
   * The connection endpoint for the DB shard group.
   */
  Endpoint: string;
};
/**
 * Type definition for `AWS::RDS::DBShardGroup.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbshardgroup-tag.html}
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
 * The AWS::RDS::DBShardGroup resource creates an Amazon Aurora Limitless DB Shard Group.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbshardgroup.html}
 */
export class RDSDBShardGroup extends $Resource<
  "AWS::RDS::DBShardGroup",
  RDSDBShardGroupProperties,
  RDSDBShardGroupAttributes
> {
  public static readonly Type = "AWS::RDS::DBShardGroup";
  constructor(
    logicalId: string,
    properties: RDSDBShardGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, RDSDBShardGroup.Type, properties, options);
  }
}
