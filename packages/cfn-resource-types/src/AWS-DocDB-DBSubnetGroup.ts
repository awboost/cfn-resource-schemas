import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::DocDB::DBSubnetGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbsubnetgroup.html}
 */
export type DocDBDBSubnetGroupProperties = {
  DBSubnetGroupDescription: string;
  DBSubnetGroupName?: string;
  SubnetIds: string[];
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::DocDB::DBSubnetGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbsubnetgroup.html#aws-resource-docdb-dbsubnetgroup-return-values}
 */
export type DocDBDBSubnetGroupAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::DocDB::DBSubnetGroup.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-docdb-dbsubnetgroup-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::DocDB::DBSubnetGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbsubnetgroup.html}
 */
export class DocDBDBSubnetGroup extends $Resource<
  "AWS::DocDB::DBSubnetGroup",
  DocDBDBSubnetGroupProperties,
  DocDBDBSubnetGroupAttributes
> {
  public static readonly Type = "AWS::DocDB::DBSubnetGroup";
  constructor(
    logicalId: string,
    properties: DocDBDBSubnetGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DocDBDBSubnetGroup.Type, properties, options);
  }
}
