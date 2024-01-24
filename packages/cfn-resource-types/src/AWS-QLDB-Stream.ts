import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::QLDB::Stream.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qldb-stream.html}
 */
export type QLDBStreamProperties = {
  ExclusiveEndTime?: string;
  InclusiveStartTime: string;
  KinesisConfiguration: KinesisConfiguration;
  LedgerName: string;
  /**
   * @pattern `arn:[\w+=/,.@-]+:[\w+=/,.@-]+:[\w+=/,.@-]*:[0-9]*:[\w+=,.@-]+(/[\w+=,.@-]+)*`
   */
  RoleArn: string;
  StreamName: string;
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::QLDB::Stream`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qldb-stream.html#aws-resource-qldb-stream-return-values}
 */
export type QLDBStreamAttributes = {
  /**
   * @pattern `arn:[\w+=/,.@-]+:[\w+=/,.@-]+:[\w+=/,.@-]*:[0-9]*:[\w+=,.@-]+(/[\w+=,.@-]+)*`
   */
  Arn: string;
  Id: string;
};
/**
 * Type definition for `AWS::QLDB::Stream.KinesisConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qldb-stream-kinesisconfiguration.html}
 */
export type KinesisConfiguration = {
  AggregationEnabled?: boolean;
  /**
   * @pattern `arn:[\w+=/,.@-]+:[\w+=/,.@-]+:[\w+=/,.@-]*:[0-9]*:[\w+=,.@-]+(/[\w+=,.@-]+)*`
   */
  StreamArn?: string;
};
/**
 * Type definition for `AWS::QLDB::Stream.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qldb-stream-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `127`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `255`
   */
  Value: string;
};
/**
 * Resource schema for AWS::QLDB::Stream.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qldb-stream.html}
 */
export class QLDBStream extends $Resource<
  "AWS::QLDB::Stream",
  QLDBStreamProperties,
  QLDBStreamAttributes
> {
  public static readonly Type = "AWS::QLDB::Stream";
  constructor(
    logicalId: string,
    properties: QLDBStreamProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, QLDBStream.Type, properties, options);
  }
}
