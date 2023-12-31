import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource schema for AWS::Athena::PreparedStatement
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-preparedstatement.html}
 */
export type AthenaPreparedStatementProperties = {
  /**
   * The description of the prepared statement.
   * @minLength `1`
   * @maxLength `1024`
   */
  Description?: string;
  /**
   * The query string for the prepared statement.
   * @minLength `1`
   * @maxLength `262144`
   */
  QueryStatement: string;
  /**
   * The name of the prepared statement.
   * @minLength `1`
   * @maxLength `256`
   */
  StatementName: string;
  /**
   * The name of the workgroup to which the prepared statement belongs.
   * @minLength `1`
   * @maxLength `128`
   */
  WorkGroup: string;
};
/**
 * Resource schema for AWS::Athena::PreparedStatement
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-preparedstatement.html}
 */
export class AthenaPreparedStatement extends $Resource<
  "AWS::Athena::PreparedStatement",
  AthenaPreparedStatementProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::Athena::PreparedStatement";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: AthenaPreparedStatementProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      AthenaPreparedStatement.Type,
      properties,
      AthenaPreparedStatement.AttributeNames,
      options,
    );
  }
}
