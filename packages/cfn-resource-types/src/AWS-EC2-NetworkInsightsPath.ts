import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource schema for AWS::EC2::NetworkInsightsPath
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightspath.html}
 */
export type EC2NetworkInsightsPathProperties = {
  Destination?: string;
  DestinationIp?: string;
  DestinationPort?: number;
  FilterAtDestination?: PathFilter;
  FilterAtSource?: PathFilter;
  Protocol: Protocol;
  Source: string;
  SourceIp?: string;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::EC2::NetworkInsightsPath`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightspath.html#aws-resource-ec2-networkinsightspath-return-values}
 */
export type EC2NetworkInsightsPathAttributes = {
  CreatedDate: string;
  DestinationArn: string;
  NetworkInsightsPathArn: string;
  NetworkInsightsPathId: string;
  SourceArn: string;
};
/**
 * Type definition for `AWS::EC2::NetworkInsightsPath.FilterPortRange`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightspath-filterportrange.html}
 */
export type FilterPortRange = {
  FromPort?: number;
  ToPort?: number;
};
/**
 * Type definition for `AWS::EC2::NetworkInsightsPath.PathFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightspath-pathfilter.html}
 */
export type PathFilter = {
  DestinationAddress?: string;
  DestinationPortRange?: FilterPortRange;
  SourceAddress?: string;
  SourcePortRange?: FilterPortRange;
};
/**
 * Type definition for `AWS::EC2::NetworkInsightsPath.Protocol`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightspath-protocol.html}
 */
export type Protocol = "tcp" | "udp";
/**
 * Type definition for `AWS::EC2::NetworkInsightsPath.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightspath-tag.html}
 */
export type Tag = {
  Key: string;
  Value?: string;
};
/**
 * Resource schema for AWS::EC2::NetworkInsightsPath
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightspath.html}
 */
export class EC2NetworkInsightsPath extends $Resource<
  "AWS::EC2::NetworkInsightsPath",
  EC2NetworkInsightsPathProperties,
  EC2NetworkInsightsPathAttributes
> {
  public static readonly Type = "AWS::EC2::NetworkInsightsPath";
  public static readonly AttributeNames = [
    "CreatedDate" as const,
    "DestinationArn" as const,
    "NetworkInsightsPathArn" as const,
    "NetworkInsightsPathId" as const,
    "SourceArn" as const,
  ];
  constructor(
    logicalId: string,
    properties: EC2NetworkInsightsPathProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      EC2NetworkInsightsPath.Type,
      properties,
      EC2NetworkInsightsPath.AttributeNames,
      options,
    );
  }
}
