import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::RDS::DBProxyTargetGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxytargetgroup.html}
 */
export type RDSDBProxyTargetGroupProperties = {
  ConnectionPoolConfigurationInfo?: ConnectionPoolConfigurationInfoFormat;
  DBClusterIdentifiers?: string[];
  DBInstanceIdentifiers?: string[];
  /**
   * The identifier for the proxy.
   * @maxLength `64`
   * @pattern `[A-z][0-z]*`
   */
  DBProxyName: string;
  /**
   * The identifier for the DBProxyTargetGroup
   */
  TargetGroupName: "default";
};
/**
 * Attribute type definition for `AWS::RDS::DBProxyTargetGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxytargetgroup.html#aws-resource-rds-dbproxytargetgroup-return-values}
 */
export type RDSDBProxyTargetGroupAttributes = {
  /**
   * The Amazon Resource Name (ARN) representing the target group.
   */
  TargetGroupArn: string;
};
/**
 * Type definition for `AWS::RDS::DBProxyTargetGroup.ConnectionPoolConfigurationInfoFormat`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbproxytargetgroup-connectionpoolconfigurationinfoformat.html}
 */
export type ConnectionPoolConfigurationInfoFormat = {
  /**
   * The number of seconds for a proxy to wait for a connection to become available in the connection pool.
   */
  ConnectionBorrowTimeout?: number;
  /**
   * One or more SQL statements for the proxy to run when opening each new database connection.
   */
  InitQuery?: string;
  /**
   * The maximum size of the connection pool for each target in a target group.
   * @min `0`
   * @max `100`
   */
  MaxConnectionsPercent?: number;
  /**
   * Controls how actively the proxy closes idle database connections in the connection pool.
   * @min `0`
   * @max `100`
   */
  MaxIdleConnectionsPercent?: number;
  /**
   * Each item in the list represents a class of SQL operations that normally cause all later statements in a session using a proxy to be pinned to the same underlying database connection.
   */
  SessionPinningFilters?: string[];
};
/**
 * Resource schema for AWS::RDS::DBProxyTargetGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxytargetgroup.html}
 */
export class RDSDBProxyTargetGroup extends $Resource<
  "AWS::RDS::DBProxyTargetGroup",
  RDSDBProxyTargetGroupProperties,
  RDSDBProxyTargetGroupAttributes
> {
  public static readonly Type = "AWS::RDS::DBProxyTargetGroup";
  constructor(
    logicalId: string,
    properties: RDSDBProxyTargetGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, RDSDBProxyTargetGroup.Type, properties, options);
  }
}
