import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::EC2::VPCBlockPublicAccessExclusion.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcblockpublicaccessexclusion.html}
 */
export type EC2VPCBlockPublicAccessExclusionProperties = {
  /**
   * The desired Block Public Access Exclusion Mode for a specific VPC/Subnet.
   */
  InternetGatewayExclusionMode: "allow-bidirectional" | "allow-egress";
  /**
   * The ID of the subnet. Required only if you don't specify VpcId
   */
  SubnetId?: string;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
  /**
   * The ID of the vpc. Required only if you don't specify SubnetId.
   */
  VpcId?: string;
};
/**
 * Attribute type definition for `AWS::EC2::VPCBlockPublicAccessExclusion`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcblockpublicaccessexclusion.html#aws-resource-ec2-vpcblockpublicaccessexclusion-return-values}
 */
export type EC2VPCBlockPublicAccessExclusionAttributes = {
  /**
   * The ID of the exclusion
   */
  ExclusionId: string;
};
/**
 * Type definition for `AWS::EC2::VPCBlockPublicAccessExclusion.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-vpcblockpublicaccessexclusion-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::EC2::VPCBlockPublicAccessExclusion.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcblockpublicaccessexclusion.html}
 */
export class EC2VPCBlockPublicAccessExclusion extends $Resource<
  "AWS::EC2::VPCBlockPublicAccessExclusion",
  EC2VPCBlockPublicAccessExclusionProperties,
  EC2VPCBlockPublicAccessExclusionAttributes
> {
  public static readonly Type = "AWS::EC2::VPCBlockPublicAccessExclusion";
  constructor(
    logicalId: string,
    properties: EC2VPCBlockPublicAccessExclusionProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      EC2VPCBlockPublicAccessExclusion.Type,
      properties,
      options,
    );
  }
}
