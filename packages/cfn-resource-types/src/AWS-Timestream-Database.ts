import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::Timestream::Database resource creates a Timestream database.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-database.html}
 */
export type TimestreamDatabaseProperties = {
  /**
   * The name for the database. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the database name.
   * @pattern `^[a-zA-Z0-9_.-]{3,256}$`
   */
  DatabaseName?: string;
  /**
   * The KMS key for the database. If the KMS key is not specified, the database will be encrypted with a Timestream managed KMS key located in your account.
   * @minLength `1`
   * @maxLength `2048`
   */
  KmsKeyId?: string;
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Timestream::Database`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-database.html#aws-resource-timestream-database-return-values}
 */
export type TimestreamDatabaseAttributes = {
  Arn: string;
};
/**
 * Type definition for `AWS::Timestream::Database.Tag`.
 * You can use the Resource Tags property to apply tags to resources, which can help you identify and categorize those resources.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-database-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key?: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  Value?: string;
};
/**
 * The AWS::Timestream::Database resource creates a Timestream database.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-database.html}
 */
export class TimestreamDatabase extends $Resource<
  "AWS::Timestream::Database",
  TimestreamDatabaseProperties,
  TimestreamDatabaseAttributes
> {
  public static readonly Type = "AWS::Timestream::Database";
  constructor(
    logicalId: string,
    properties: TimestreamDatabaseProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, TimestreamDatabase.Type, properties, options);
  }
}
