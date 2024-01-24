import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Glue::Connection
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html}
 */
export type GlueConnectionProperties = {
  CatalogId: string;
  ConnectionInput: ConnectionInput;
};
/**
 * Attribute type definition for `AWS::Glue::Connection`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html#aws-resource-glue-connection-return-values}
 */
export type GlueConnectionAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::Glue::Connection.ConnectionInput`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-connection-connectioninput.html}
 */
export type ConnectionInput = {
  ConnectionProperties?: Record<string, any>;
  ConnectionType: string;
  Description?: string;
  MatchCriteria?: string[];
  Name?: string;
  PhysicalConnectionRequirements?: PhysicalConnectionRequirements;
};
/**
 * Type definition for `AWS::Glue::Connection.PhysicalConnectionRequirements`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-connection-physicalconnectionrequirements.html}
 */
export type PhysicalConnectionRequirements = {
  AvailabilityZone?: string;
  SecurityGroupIdList?: string[];
  SubnetId?: string;
};
/**
 * Resource Type definition for AWS::Glue::Connection
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html}
 */
export class GlueConnection extends $Resource<
  "AWS::Glue::Connection",
  GlueConnectionProperties,
  GlueConnectionAttributes
> {
  public static readonly Type = "AWS::Glue::Connection";
  constructor(
    logicalId: string,
    properties: GlueConnectionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, GlueConnection.Type, properties, options);
  }
}
