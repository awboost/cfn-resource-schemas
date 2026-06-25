import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::DynamoDB::Stream`.
 * Resource schema for a DynamoDB Stream, providing read-only visibility into stream metadata.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-stream.html}
 */
export type DynamoDBStreamProperties = {
  /**
   * Indicates the format of the records within this stream.
   */
  StreamViewType?:
    | "KEYS_ONLY"
    | "NEW_IMAGE"
    | "OLD_IMAGE"
    | "NEW_AND_OLD_IMAGES";
  /**
   * The DynamoDB table with which the stream is associated.
   * @minLength `3`
   * @maxLength `255`
   * @pattern `^[a-zA-Z0-9_.-]+$`
   */
  TableName?: string;
};
/**
 * Attribute type definition for `AWS::DynamoDB::Stream`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-stream.html#aws-resource-dynamodb-stream-return-values}
 */
export type DynamoDBStreamAttributes = {
  /**
   * The date and time when the request to create this stream was issued.
   */
  CreationRequestDateTime: string;
  /**
   * The key attribute(s) of the stream's DynamoDB table.
   * @minLength `1`
   * @maxLength `2`
   */
  KeySchema: {
    /**
     * The name of a key attribute.
     * @minLength `1`
     * @maxLength `255`
     */
    AttributeName: string;
    /**
     * The role that this key attribute will assume.
     */
    KeyType: "HASH" | "RANGE";
  }[];
  /**
   * The Amazon Resource Name (ARN) for the stream.
   * @minLength `37`
   * @maxLength `1024`
   */
  StreamArn: string;
  /**
   * A timestamp, in ISO 8601 format, for this stream.
   */
  StreamLabel: string;
  /**
   * Indicates the current status of the stream.
   */
  StreamStatus: "ENABLING" | "ENABLED" | "DISABLING" | "DISABLED";
};
/**
 * Resource type definition for `AWS::DynamoDB::Stream`.
 * Resource schema for a DynamoDB Stream, providing read-only visibility into stream metadata.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-stream.html}
 */
export class DynamoDBStream extends $Resource<
  "AWS::DynamoDB::Stream",
  DynamoDBStreamProperties,
  DynamoDBStreamAttributes
> {
  public static readonly Type = "AWS::DynamoDB::Stream";
  constructor(
    logicalId: string,
    properties: DynamoDBStreamProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DynamoDBStream.Type, properties, options);
  }
}
