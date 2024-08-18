import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::EC2::NetworkAcl`.
 * Specifies a network ACL for your VPC.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkacl.html}
 */
export type EC2NetworkAclProperties = {
  /**
   * The tags for the network ACL.
   */
  Tags?: Tag[];
  /**
   * The ID of the VPC for the network ACL.
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
 * Specifies a tag. For more information, see [Resource tags](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkacl-tag.html}
 */
export type Tag = {
  /**
   * The tag key.
   */
  Key: string;
  /**
   * The tag value.
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::EC2::NetworkAcl`.
 * Specifies a network ACL for your VPC.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkacl.html}
 */
export class EC2NetworkAcl extends $Resource<
  "AWS::EC2::NetworkAcl",
  EC2NetworkAclProperties,
  EC2NetworkAclAttributes
> {
  public static readonly Type = "AWS::EC2::NetworkAcl";
  constructor(
    logicalId: string,
    properties: EC2NetworkAclProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2NetworkAcl.Type, properties, options);
  }
}
