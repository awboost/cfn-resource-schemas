import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::RDS::DBProxyEndpoint.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxyendpoint.html}
 */
export type RDSDBProxyEndpointProperties = {
  /**
   * The identifier for the DB proxy endpoint. This name must be unique for all DB proxy endpoints owned by your AWS account in the specified AWS Region.
   * @maxLength `64`
   * @pattern `[0-z]*`
   */
  DBProxyEndpointName: string;
  /**
   * The identifier for the proxy. This name must be unique for all proxies owned by your AWS account in the specified AWS Region.
   * @maxLength `64`
   * @pattern `[0-z]*`
   */
  DBProxyName: string;
  /**
   * An optional set of key-value pairs to associate arbitrary data of your choosing with the DB proxy endpoint.
   */
  Tags?: TagFormat[];
  /**
   * A value that indicates whether the DB proxy endpoint can be used for read/write or read-only operations.
   */
  TargetRole?: "READ_WRITE" | "READ_ONLY";
  /**
   * VPC security group IDs to associate with the new DB proxy endpoint.
   * @minLength `1`
   */
  VpcSecurityGroupIds?: string[];
  /**
   * VPC subnet IDs to associate with the new DB proxy endpoint.
   * @minLength `2`
   */
  VpcSubnetIds: string[];
};
/**
 * Attribute type definition for `AWS::RDS::DBProxyEndpoint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxyendpoint.html#aws-resource-rds-dbproxyendpoint-return-values}
 */
export type RDSDBProxyEndpointAttributes = {
  /**
   * The Amazon Resource Name (ARN) for the DB proxy endpoint.
   * @pattern `arn:aws[A-Za-z0-9-]{0,64}:rds:[A-Za-z0-9-]{1,64}:[0-9]{12}:.*`
   */
  DBProxyEndpointArn: string;
  /**
   * The endpoint that you can use to connect to the DB proxy. You include the endpoint value in the connection string for a database client application.
   * @maxLength `256`
   */
  Endpoint: string;
  /**
   * A value that indicates whether this endpoint is the default endpoint for the associated DB proxy. Default DB proxy endpoints always have read/write capability. Other endpoints that you associate with the DB proxy can be either read/write or read-only.
   */
  IsDefault: boolean;
  /**
   * VPC ID to associate with the new DB proxy endpoint.
   */
  VpcId: string;
};
/**
 * Type definition for `AWS::RDS::DBProxyEndpoint.TagFormat`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbproxyendpoint-tagformat.html}
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
 * Resource schema for AWS::RDS::DBProxyEndpoint.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxyendpoint.html}
 */
export class RDSDBProxyEndpoint extends $Resource<
  "AWS::RDS::DBProxyEndpoint",
  RDSDBProxyEndpointProperties,
  RDSDBProxyEndpointAttributes
> {
  public static readonly Type = "AWS::RDS::DBProxyEndpoint";
  constructor(
    logicalId: string,
    properties: RDSDBProxyEndpointProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, RDSDBProxyEndpoint.Type, properties, options);
  }
}
