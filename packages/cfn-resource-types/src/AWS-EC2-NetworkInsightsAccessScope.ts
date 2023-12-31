import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource schema for AWS::EC2::NetworkInsightsAccessScope
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightsaccessscope.html}
 */
export type EC2NetworkInsightsAccessScopeProperties = {
  ExcludePaths?: AccessScopePathRequest[];
  MatchPaths?: AccessScopePathRequest[];
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::EC2::NetworkInsightsAccessScope`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightsaccessscope.html#aws-resource-ec2-networkinsightsaccessscope-return-values}
 */
export type EC2NetworkInsightsAccessScopeAttributes = {
  CreatedDate: string;
  NetworkInsightsAccessScopeArn: string;
  NetworkInsightsAccessScopeId: string;
  UpdatedDate: string;
};
/**
 * Type definition for `AWS::EC2::NetworkInsightsAccessScope.AccessScopePathRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsaccessscope-accessscopepathrequest.html}
 */
export type AccessScopePathRequest = {
  Destination?: PathStatementRequest;
  Source?: PathStatementRequest;
  ThroughResources?: ThroughResourcesStatementRequest[];
};
/**
 * Type definition for `AWS::EC2::NetworkInsightsAccessScope.PacketHeaderStatementRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsaccessscope-packetheaderstatementrequest.html}
 */
export type PacketHeaderStatementRequest = {
  DestinationAddresses?: string[];
  DestinationPorts?: string[];
  DestinationPrefixLists?: string[];
  Protocols?: Protocol[];
  SourceAddresses?: string[];
  SourcePorts?: string[];
  SourcePrefixLists?: string[];
};
/**
 * Type definition for `AWS::EC2::NetworkInsightsAccessScope.PathStatementRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsaccessscope-pathstatementrequest.html}
 */
export type PathStatementRequest = {
  PacketHeaderStatement?: PacketHeaderStatementRequest;
  ResourceStatement?: ResourceStatementRequest;
};
/**
 * Type definition for `AWS::EC2::NetworkInsightsAccessScope.Protocol`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsaccessscope-protocol.html}
 */
export type Protocol = "tcp" | "udp";
/**
 * Type definition for `AWS::EC2::NetworkInsightsAccessScope.ResourceStatementRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsaccessscope-resourcestatementrequest.html}
 */
export type ResourceStatementRequest = {
  ResourceTypes?: string[];
  Resources?: string[];
};
/**
 * Type definition for `AWS::EC2::NetworkInsightsAccessScope.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsaccessscope-tag.html}
 */
export type Tag = {
  Key: string;
  Value?: string;
};
/**
 * Type definition for `AWS::EC2::NetworkInsightsAccessScope.ThroughResourcesStatementRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsaccessscope-throughresourcesstatementrequest.html}
 */
export type ThroughResourcesStatementRequest = {
  ResourceStatement?: ResourceStatementRequest;
};
/**
 * Resource schema for AWS::EC2::NetworkInsightsAccessScope
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightsaccessscope.html}
 */
export class EC2NetworkInsightsAccessScope extends $Resource<
  "AWS::EC2::NetworkInsightsAccessScope",
  EC2NetworkInsightsAccessScopeProperties,
  EC2NetworkInsightsAccessScopeAttributes
> {
  public static readonly Type = "AWS::EC2::NetworkInsightsAccessScope";
  public static readonly AttributeNames = [
    "CreatedDate" as const,
    "NetworkInsightsAccessScopeArn" as const,
    "NetworkInsightsAccessScopeId" as const,
    "UpdatedDate" as const,
  ];
  constructor(
    logicalId: string,
    properties: EC2NetworkInsightsAccessScopeProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      EC2NetworkInsightsAccessScope.Type,
      properties,
      EC2NetworkInsightsAccessScope.AttributeNames,
      options,
    );
  }
}
