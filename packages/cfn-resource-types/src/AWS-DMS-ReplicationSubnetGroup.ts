import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
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
  constructor(
    logicalId: string,
    properties: DMSReplicationSubnetGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DMSReplicationSubnetGroup.Type, properties, options);
  }
}
