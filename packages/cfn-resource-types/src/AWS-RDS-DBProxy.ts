import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::RDS::DBProxy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxy.html}
 */
export type RDSDBProxyProperties = {
  /**
   * The authorization mechanism that the proxy uses.
   * @minLength `1`
   */
  Auth: AuthFormat[];
  /**
   * The identifier for the proxy. This name must be unique for all proxies owned by your AWS account in the specified AWS Region.
   * @maxLength `64`
   * @pattern `[0-z]*`
   */
  DBProxyName: string;
  /**
   * Whether the proxy includes detailed information about SQL statements in its logs.
   */
  DebugLogging?: boolean;
  /**
   * The kinds of databases that the proxy can connect to.
   */
  EngineFamily: "MYSQL" | "POSTGRESQL" | "SQLSERVER";
  /**
   * The number of seconds that a connection to the proxy can be inactive before the proxy disconnects it.
   */
  IdleClientTimeout?: number;
  /**
   * A Boolean parameter that specifies whether Transport Layer Security (TLS) encryption is required for connections to the proxy.
   */
  RequireTLS?: boolean;
  /**
   * The Amazon Resource Name (ARN) of the IAM role that the proxy uses to access secrets in AWS Secrets Manager.
   */
  RoleArn: string;
  /**
   * An optional set of key-value pairs to associate arbitrary data of your choosing with the proxy.
   */
  Tags?: TagFormat[];
  /**
   * VPC security group IDs to associate with the new proxy.
   * @minLength `1`
   */
  VpcSecurityGroupIds?: string[];
  /**
   * VPC subnet IDs to associate with the new proxy.
   * @minLength `2`
   */
  VpcSubnetIds: string[];
};
/**
 * Attribute type definition for `AWS::RDS::DBProxy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxy.html#aws-resource-rds-dbproxy-return-values}
 */
export type RDSDBProxyAttributes = {
  /**
   * The Amazon Resource Name (ARN) for the proxy.
   */
  DBProxyArn: string;
  /**
   * The endpoint that you can use to connect to the proxy. You include the endpoint value in the connection string for a database client application.
   */
  Endpoint: string;
  /**
   * VPC ID to associate with the new DB proxy.
   */
  VpcId: string;
};
/**
 * Type definition for `AWS::RDS::DBProxy.AuthFormat`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbproxy-authformat.html}
 */
export type AuthFormat = {
  /**
   * The type of authentication that the proxy uses for connections from the proxy to the underlying database.
   */
  AuthScheme?: "SECRETS";
  /**
   * The type of authentication the proxy uses for connections from clients.
   */
  ClientPasswordAuthType?:
    | "MYSQL_NATIVE_PASSWORD"
    | "POSTGRES_SCRAM_SHA_256"
    | "POSTGRES_MD5"
    | "SQL_SERVER_AUTHENTICATION";
  /**
   * A user-specified description about the authentication used by a proxy to log in as a specific database user.
   */
  Description?: string;
  /**
   * Whether to require or disallow Amazon Web Services Identity and Access Management (IAM) authentication for connections to the proxy. The ENABLED value is valid only for proxies with RDS for Microsoft SQL Server.
   */
  IAMAuth?: "DISABLED" | "REQUIRED" | "ENABLED";
  /**
   * The Amazon Resource Name (ARN) representing the secret that the proxy uses to authenticate to the RDS DB instance or Aurora DB cluster. These secrets are stored within Amazon Secrets Manager.
   */
  SecretArn?: string;
};
/**
 * Type definition for `AWS::RDS::DBProxy.TagFormat`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbproxy-tagformat.html}
 */
export type TagFormat = {
  /**
   * @maxLength `128`
   * @pattern `(\w|\d|\s|\\|-|\.:=+-)*`
   */
  Key?: string;
  /**
   * @maxLength `128`
   * @pattern `(\w|\d|\s|\\|-|\.:=+-)*`
   */
  Value?: string;
};
/**
 * Resource schema for AWS::RDS::DBProxy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxy.html}
 */
export class RDSDBProxy extends $Resource<
  "AWS::RDS::DBProxy",
  RDSDBProxyProperties,
  RDSDBProxyAttributes
> {
  public static readonly Type = "AWS::RDS::DBProxy";
  constructor(
    logicalId: string,
    properties: RDSDBProxyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, RDSDBProxy.Type, properties, options);
  }
}
