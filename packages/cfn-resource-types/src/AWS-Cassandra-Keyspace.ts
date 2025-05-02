import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::Cassandra::Keyspace
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-keyspace.html}
 */
export type CassandraKeyspaceProperties = {
  /**
   * Indicates whether client-side timestamps are enabled (true) or disabled (false) for all tables in the keyspace. To add a Region to a single-Region keyspace with at least one table, the value must be set to true. After you enabled client-side timestamps for a table, you can’t disable it again.
   */
  ClientSideTimestampsEnabled?: boolean;
  /**
   * Name for Cassandra keyspace
   * @pattern `^[a-zA-Z0-9][a-zA-Z0-9_]{1,47}$`
   */
  KeyspaceName?: string;
  ReplicationSpecification?: ReplicationSpecification;
  /**
   * @minLength `0`
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Type definition for `AWS::Cassandra::Keyspace.ReplicationSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-keyspace-replicationspecification.html}
 */
export type ReplicationSpecification = {
  /**
   * @minLength `2`
   * @maxLength `17`
   */
  RegionList?: (
    | "af-south-1"
    | "ap-northeast-1"
    | "ap-northeast-2"
    | "ap-south-1"
    | "ap-southeast-1"
    | "ap-southeast-2"
    | "ca-central-1"
    | "eu-central-1"
    | "eu-north-1"
    | "eu-west-1"
    | "eu-west-2"
    | "eu-west-3"
    | "sa-east-1"
    | "us-east-1"
    | "us-east-2"
    | "us-west-1"
    | "us-west-2"
  )[];
  ReplicationStrategy?: "SINGLE_REGION" | "MULTI_REGION";
};
/**
 * Type definition for `AWS::Cassandra::Keyspace.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-keyspace-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource schema for AWS::Cassandra::Keyspace
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-keyspace.html}
 */
export class CassandraKeyspace extends $Resource<
  "AWS::Cassandra::Keyspace",
  CassandraKeyspaceProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::Cassandra::Keyspace";
  constructor(
    logicalId: string,
    properties: CassandraKeyspaceProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CassandraKeyspace.Type, properties, options);
  }
}
