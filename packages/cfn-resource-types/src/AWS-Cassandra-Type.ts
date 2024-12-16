import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::Cassandra::Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-type.html}
 */
export type CassandraTypeProperties = {
  /**
   * Field definitions of the User-Defined Type
   */
  Fields: Field[];
  /**
   * Name of the Keyspace which contains the User-Defined Type.
   */
  KeyspaceName: string;
  /**
   * Name of the User-Defined Type.
   */
  TypeName: string;
};
/**
 * Attribute type definition for `AWS::Cassandra::Type`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-type.html#aws-resource-cassandra-type-return-values}
 */
export type CassandraTypeAttributes = {
  /**
   * List of parent User-Defined Types that directly reference the User-Defined Type in their fields.
   */
  DirectParentTypes: string[];
  /**
   * List of Tables that directly reference the User-Defined Type in their columns.
   */
  DirectReferringTables: string[];
  /**
   * ARN of the Keyspace which contains the User-Defined Type.
   */
  KeyspaceArn: string;
  /**
   * Timestamp of the last time the User-Defined Type's meta data was modified.
   */
  LastModifiedTimestamp: number;
  /**
   * Maximum nesting depth of the User-Defined Type across the field types.
   */
  MaxNestingDepth: number;
};
/**
 * Type definition for `AWS::Cassandra::Type.Field`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-type-field.html}
 */
export type Field = {
  FieldName: string;
  FieldType: string;
};
/**
 * Resource schema for AWS::Cassandra::Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-type.html}
 */
export class CassandraType extends $Resource<
  "AWS::Cassandra::Type",
  CassandraTypeProperties,
  CassandraTypeAttributes
> {
  public static readonly Type = "AWS::Cassandra::Type";
  constructor(
    logicalId: string,
    properties: CassandraTypeProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CassandraType.Type, properties, options);
  }
}
