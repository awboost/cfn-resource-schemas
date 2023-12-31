import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: NeptuneDBSubnetGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      NeptuneDBSubnetGroup.Type,
      properties,
      NeptuneDBSubnetGroup.AttributeNames,
      options,
    );
  }
}
