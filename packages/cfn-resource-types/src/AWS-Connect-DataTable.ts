import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Connect::DataTable
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-datatable.html}
 */
export type ConnectDataTableProperties = {
  /**
     * The description of the Data Table.
     * @minLength `0`
     * @maxLength `250`
     * @pattern `^[\P{C}
        ]+$`
     */
  Description?: string;
  /**
   * The identifier of the Amazon Connect instance.
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*$`
   */
  InstanceArn?: string;
  /**
   * The name of the Data Table
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[\p{L}\p{Z}\p{N}\-_.:=@'|]+$`
   */
  Name?: string;
  /**
   * The status of the Data Table
   */
  Status?: "PUBLISHED";
  /**
   * One or more tags.
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * The time zone of the Data Table
   */
  TimeZone?: string;
  /**
   * The value lock level of the Data Table
   */
  ValueLockLevel?:
    | "NONE"
    | "DATA_TABLE"
    | "PRIMARY_VALUE"
    | "ATTRIBUTE"
    | "VALUE";
};
/**
 * Attribute type definition for `AWS::Connect::DataTable`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-datatable.html#aws-resource-connect-datatable-return-values}
 */
export type ConnectDataTableAttributes = {
  /**
   * The arn of the Data Table
   * @minLength `1`
   * @maxLength `2048`
   */
  Arn: string;
  /**
   * The creation time of the Data Table
   */
  CreatedTime: number;
  /**
   * Last modified region.
   * @pattern `[a-z]{2}(-[a-z]+){1,2}(-[0-9])?`
   */
  LastModifiedRegion: string;
  /**
   * Last modified time.
   */
  LastModifiedTime: number;
  /**
   * The lock version of the Data Table
   */
  LockVersion: {
    /**
     * The data table for the lock version
     */
    DataTable: string;
  };
};
/**
 * Type definition for `AWS::Connect::DataTable.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-datatable-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!aws:)[a-zA-Z+-=._:/]+$`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is maximum of 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::Connect::DataTable
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-datatable.html}
 */
export class ConnectDataTable extends $Resource<
  "AWS::Connect::DataTable",
  ConnectDataTableProperties,
  ConnectDataTableAttributes
> {
  public static readonly Type = "AWS::Connect::DataTable";
  constructor(
    logicalId: string,
    properties: ConnectDataTableProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ConnectDataTable.Type, properties, options);
  }
}
