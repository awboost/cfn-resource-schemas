import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Neptune::DBSubnetGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbsubnetgroup.html}
 */
export type NeptuneDBSubnetGroupProperties = {
  DBSubnetGroupDescription: string;
  DBSubnetGroupName?: string;
  SubnetIds: string[];
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Neptune::DBSubnetGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbsubnetgroup.html#aws-resource-neptune-dbsubnetgroup-return-values}
 */
export type NeptuneDBSubnetGroupAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::Neptune::DBSubnetGroup.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-neptune-dbsubnetgroup-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::Neptune::DBSubnetGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbsubnetgroup.html}
 */
export class NeptuneDBSubnetGroup extends $Resource<
  "AWS::Neptune::DBSubnetGroup",
  NeptuneDBSubnetGroupProperties,
  NeptuneDBSubnetGroupAttributes
> {
  public static readonly Type = "AWS::Neptune::DBSubnetGroup";
  constructor(
    logicalId: string,
    properties: NeptuneDBSubnetGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, NeptuneDBSubnetGroup.Type, properties, options);
  }
}
