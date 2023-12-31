import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::DMS::ReplicationSubnetGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationsubnetgroup.html}
 */
export type DMSReplicationSubnetGroupProperties = {
  ReplicationSubnetGroupDescription: string;
  ReplicationSubnetGroupIdentifier?: string;
  SubnetIds: string[];
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::DMS::ReplicationSubnetGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationsubnetgroup.html#aws-resource-dms-replicationsubnetgroup-return-values}
 */
export type DMSReplicationSubnetGroupAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::DMS::ReplicationSubnetGroup.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-replicationsubnetgroup-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::DMS::ReplicationSubnetGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationsubnetgroup.html}
 */
export class DMSReplicationSubnetGroup extends $Resource<
  "AWS::DMS::ReplicationSubnetGroup",
  DMSReplicationSubnetGroupProperties,
  DMSReplicationSubnetGroupAttributes
> {
  public static readonly Type = "AWS::DMS::ReplicationSubnetGroup";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: DMSReplicationSubnetGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      DMSReplicationSubnetGroup.Type,
      properties,
      DMSReplicationSubnetGroup.AttributeNames,
      options,
    );
  }
}
