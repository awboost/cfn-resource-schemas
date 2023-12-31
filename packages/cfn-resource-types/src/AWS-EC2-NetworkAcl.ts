import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::EC2::NetworkAcl
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkacl.html}
 */
export type EC2NetworkAclProperties = {
  /**
   * The tags to assign to the network ACL.
   */
  Tags?: Tag[];
  /**
   * The ID of the VPC.
   */
  VpcId: string;
};
/**
 * Attribute type definition for `AWS::EC2::NetworkAcl`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkacl.html#aws-resource-ec2-networkacl-return-values}
 */
export type EC2NetworkAclAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::EC2::NetworkAcl.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkacl-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::EC2::NetworkAcl
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkacl.html}
 */
export class EC2NetworkAcl extends $Resource<
  "AWS::EC2::NetworkAcl",
  EC2NetworkAclProperties,
  EC2NetworkAclAttributes
> {
  public static readonly Type = "AWS::EC2::NetworkAcl";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: EC2NetworkAclProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      EC2NetworkAcl.Type,
      properties,
      EC2NetworkAcl.AttributeNames,
      options,
    );
  }
}
