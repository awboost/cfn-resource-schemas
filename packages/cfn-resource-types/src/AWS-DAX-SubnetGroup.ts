import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::DAX::SubnetGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dax-subnetgroup.html}
 */
export type DAXSubnetGroupProperties = {
  Description?: string;
  SubnetGroupName?: string;
  SubnetIds: string[];
};
/**
 * Attribute type definition for `AWS::DAX::SubnetGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dax-subnetgroup.html#aws-resource-dax-subnetgroup-return-values}
 */
export type DAXSubnetGroupAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::DAX::SubnetGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dax-subnetgroup.html}
 */
export class DAXSubnetGroup extends $Resource<
  "AWS::DAX::SubnetGroup",
  DAXSubnetGroupProperties,
  DAXSubnetGroupAttributes
> {
  public static readonly Type = "AWS::DAX::SubnetGroup";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: DAXSubnetGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      DAXSubnetGroup.Type,
      properties,
      DAXSubnetGroup.AttributeNames,
      options,
    );
  }
}
