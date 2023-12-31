import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::Config::StoredQuery
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-storedquery.html}
 */
export type ConfigStoredQueryProperties = {
  /**
   * @maxLength `256`
   * @pattern `[\s\S]*`
   */
  QueryDescription?: string;
  /**
   * @minLength `1`
   * @maxLength `4096`
   * @pattern `[\s\S]*`
   */
  QueryExpression: string;
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[a-zA-Z0-9-_]+$`
   */
  QueryName: string;
  /**
   * The tags for the stored query.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Config::StoredQuery`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-storedquery.html#aws-resource-config-storedquery-return-values}
 */
export type ConfigStoredQueryAttributes = {
  /**
   * @minLength `1`
   * @maxLength `500`
   */
  QueryArn: string;
  /**
   * @minLength `1`
   * @maxLength `36`
   * @pattern `^\S+$`
   */
  QueryId: string;
};
/**
 * Type definition for `AWS::Config::StoredQuery.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-storedquery-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::Config::StoredQuery
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-storedquery.html}
 */
export class ConfigStoredQuery extends $Resource<
  "AWS::Config::StoredQuery",
  ConfigStoredQueryProperties,
  ConfigStoredQueryAttributes
> {
  public static readonly Type = "AWS::Config::StoredQuery";
  public static readonly AttributeNames = [
    "QueryArn" as const,
    "QueryId" as const,
  ];
  constructor(
    logicalId: string,
    properties: ConfigStoredQueryProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ConfigStoredQuery.Type,
      properties,
      ConfigStoredQuery.AttributeNames,
      options,
    );
  }
}
